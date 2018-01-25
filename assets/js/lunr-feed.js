var hostname = "https://victorsalaun.github.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Déployer un site web statique en https sur AWS",
      category: ["aws"],
      content: "Création du domaine et de son certificat\n\nLa première étape consiste à créer un domain et son certificat.\n\n\n  aws cloudformation deploy –stack-name domain-stack –template-file domain.cfn.yml –parameter-overrides DomainName=example.com –capabilities CAPABILITY_IAM –region us-east-1\n\n\nAWSTemplateFormatVersion: \"2010-09-09\"\n\nDescription: Route53 Hosted Zone + Certificate\n\nParameters:\n\n  DomainName:\n    Type: String\n    Description: The DNS name of an Amazon Route 53 hosted zone\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\nResources:\n\n  DNS:\n    Type: AWS::Route53::HostedZone\n    Properties:\n      HostedZoneConfig:\n        Comment: !Join ['', ['Hosted zone for ', !Ref DomainName]]\n      Name: !Ref DomainName\n\n  DomainCertificate:\n    Type: AWS::CertificateManager::Certificate\n    Properties:\n      DomainName: !Ref DomainName\n      DomainValidationOptions:\n      - DomainName: !Ref DomainName\n        ValidationDomain: !Ref DomainName\n      - DomainName: !Join [ '', ['*.', !Ref DomainName ]]\n        ValidationDomain: !Ref DomainName\n      SubjectAlternativeNames:\n      - !Join [ '', ['*.', !Ref DomainName ]]\n\nLors du traitement de cette stack, il faut penser à vérifier ses mails afin de valider la création du certificat.\n\nUne fois la stack créée, il est nécessaire de manuellement modifier les noms des serveurs DNS du domaine, je ne connais pas de solution industrialisée.\n\nCréation du sous domain\n\nMaintenant qu’on a un domain valide, il est possible de créer autant de sous domaines qu’on veut aussi bien le www que rien.\n\nLa stack suivante permet de fournir un S3 qui est un dépôt de fichiers statiques, un CDN (CloudFront) et de lier le tout au domaine.\n\n\n  aws cloudformation deploy –stack-name domain-stack –template-file subdomain.cfn.yml –parameter-overrides AcmCertificateArn=arn:aws:cloudfront::99999999999:distribution/XXXXXXXXXXXX HostedZone=example.com Subdomain=www.example.com  –capabilities CAPABILITY_IAM –region eu-west-3\n\n\nAWSTemplateFormatVersion: '2010-09-09'\n\nDescription: Route53 Subdomain\n\nParameters:\n\n  AcmCertificateArn:\n    Type: String\n    Description: Domain certificate arn.\n    AllowedPattern: \"arn:aws:acm:.*\"\n\n  HostedZone:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\n  Subdomain:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid subdomain name.\n\nMappings:\n\n  Region2S3WebsiteSuffix:\n    us-east-1:\n      Suffix: .s3-website-us-east-1.amazonaws.com\n    us-west-1:\n      Suffix: .s3-website-us-west-1.amazonaws.com\n    us-west-2:\n      Suffix: .s3-website-us-west-2.amazonaws.com\n    eu-west-1:\n      Suffix: .s3-website-eu-west-1.amazonaws.com\n    ap-northeast-1:\n      Suffix: .s3-website-ap-northeast-1.amazonaws.com\n    ap-northeast-2:\n      Suffix: .s3-website-ap-northeast-2.amazonaws.com\n    ap-southeast-1:\n      Suffix: .s3-website-ap-southeast-1.amazonaws.com\n    ap-southeast-2:\n      Suffix: .s3-website-ap-southeast-2.amazonaws.com\n    ap-south-1:\n      Suffix: .s3-website-ap-south-1.amazonaws.com\n    us-east-2:\n      Suffix: .s3-website-us-east-2.amazonaws.com\n    sa-east-1:\n      Suffix: .s3-website-sa-east-1.amazonaws.com\n    cn-north-1:\n      Suffix: .s3-website.cn-north-1.amazonaws.com.cn\n    eu-central-1:\n      Suffix: .s3-website.eu-central-1.amazonaws.com\n\nResources:\n\n  WebsiteBucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      AccessControl: PublicRead\n      WebsiteConfiguration:\n        IndexDocument: index.html\n        ErrorDocument: error.html\n\n  WebsiteBucketPolicy:\n    Type: AWS::S3::BucketPolicy\n    Properties:\n      Bucket: !Ref WebsiteBucket\n      PolicyDocument:\n        Version: 2012-10-17\n        Statement:\n        - Sid: PublicReadForGetBucketObjects\n          Effect: Allow\n          Principal: '*'\n          Action: s3:GetObject\n          Resource: !Join ['', ['arn:aws:s3:::', !Ref WebsiteBucket, /*]]\n\n  WebsiteCDN:\n    Type: AWS::CloudFront::Distribution\n    Properties:\n      DistributionConfig:\n        Comment: !Join ['', ['CDN for ', !Ref Subdomain, ' website']]\n        Aliases:\n        - !Ref Subdomain\n        Enabled: true\n        DefaultRootObject: index.html\n        IPV6Enabled: false\n        DefaultCacheBehavior:\n          AllowedMethods:\n          - DELETE\n          - GET\n          - HEAD\n          - OPTIONS\n          - PATCH\n          - POST\n          - PUT\n          TargetOriginId: S3Origin\n          ForwardedValues:\n            QueryString: false\n            Cookies:\n              Forward: none\n          ViewerProtocolPolicy: redirect-to-https\n        PriceClass: PriceClass_100\n        Restrictions:\n          GeoRestriction:\n            RestrictionType: whitelist\n            Locations:\n              - FR\n        ViewerCertificate:\n          AcmCertificateArn: !Ref AcmCertificateArn\n          SslSupportMethod: sni-only\n        Origins:\n        - DomainName: !Join ['', [!Ref WebsiteBucket, '.s3.amazonaws.com']]\n          Id: S3Origin\n          S3OriginConfig: {}\n\n  WebsiteDNSName:\n    Type: AWS::Route53::RecordSet\n    Properties:\n      HostedZoneName: !Join ['', [!Ref HostedZone, .]]\n      Name: !Ref Subdomain\n      Type: A\n      AliasTarget:\n        HostedZoneId: Z2FDTNDATAQYW2\n        DNSName: !GetAtt [WebsiteCDN, DomainName]\n\nLa création du CDN est long, il faut s’armer de patience, mais c’est aussi le bon moment pour débuter le transfert du site vers S3.\n\nUne fois la stack créée, le site est disponible à la fois en http et en https. Pour être exact, les requête http seront redirigées en https.\n\nTransférer ses données vers S3 peut se faire facilement via l’interface ou bien en ligne de commande.\n\n\n  aws s3 ls –region eu-west-3\n\n\n\n  aws s3 sync ./ s3://${WEBSITE_BUCKET} –region eu-west-3\n\n",
      tags: ["aws"],
      id: 0
    });
    


var store = [{
    "title": "Déployer un site web statique en https sur AWS",
    "link": "/aws/deploy-static-app-cloudfront-domain-https.html",
    "image": null,
    "date": "January 25, 2017",
    "category": ["aws"],
    "excerpt": "Création du domaine et de son certificat La première étape consiste à créer un domain et son certificat. aws cloudformation..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});