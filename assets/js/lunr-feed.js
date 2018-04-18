var hostname = "https://victorsalaun.github.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Chaos Monkey for Spring Boot",
      category: ["dev"],
      content: "\n    \n\n\nChaos Monkey for Spring Boot développé par l’équipe codecentric est une dépendance Spring Boot 2 permettant de faire du Chaos Engineering.\n\nLa mise en place est simple, il suffit d’ajouter la dépendance maven au pom.xml et régler quelques conf YAML.\nLe reste du code source n’est pas modifié.\n\nCe projet propose trois types d’attaque :\n\n  Ajout de latences aux appels de méthodes\n  Ajout d’exceptions aux appels de méthodes\n  Tuer l’application\n\n\nCe projet se base sur les annotations Spring :\n\n  @Controller\n  @RestController\n  @Service\n  @Repository\n\n\nVoici un exemple de configuration :\nchaos:\n  monkey:\n    assaults:\n      latencyActive: true\n      level: 1\n      exceptionsActive: true\n      killApplicationActive: true\n    watcher:\n      repository: true\n      restController: true\n      service: true\n\n\n\nDans la pratique il n’est pas conseillé d’utiliser ce type d’outils en production.\nMais supposons une infra en micro-services, pourquoi ne pas lancer une instance de l’application en mode chaos.\nCela permettrait de valider constamment le comportement des services entre eux.\n\nDemo\n",
      tags: ["dev, ChaosEngineering"],
      id: 0
    });
    

    index.add({
      title: "JetBrains Plugins",
      category: ["dev"],
      content: "\n    \n\n\nAny\n\n\n  .ignore\n  AsciiDoc\n  BashSupport\n  Docker integration\n  Markdown support\n  Rainbow Brackets\n\n\nIntelliJ\n\n\n  AWS CloudFormation\n  HashiCorp Terraform / HCL language support\n  Kotlin\n  Lombok Plugin\n\n\nWebStorm\n\n\n  AngularJS\n  Angular 2 TypeScript Live Templates\n  React Native Console\n  Vue.js\n\n\nInutiles donc indispensables\n\n\n  Nyan Progress Bar\n  Power Mode II\n\n",
      tags: ["dev"],
      id: 1
    });
    

    index.add({
      title: "Terraform",
      category: ["devops"],
      content: "\n    \n\n\nTerraform est un outil d’infrastructure as code, multi-providers, open source, édité par Hashicorp.\nIl permet de créer et modifier ses infrastructures et environements sous la forme de fichiers de configuration de manière prévisible.\nLe principal concept se base sur l’état de la cible, il s’agit donc d’une approche d’infrastructure immutable.\n\nAvantages :\n\n  Est devenu un standard\n  Large communauté\n  Support multi-provides assuré dont AWS, Azure, GCE\n  Reproductibilité via des modules\n  Extensibilité par plugin\n\n\nInconvénients :\n\n  Pas d’interface centralisée\n  Nécessité de développer\n  En fonction du provider, pas tous les services ne sont couverts\n\n\nLa création de modules permet de centraliser les usages et d’assurer une bonne réutilisabilité des modèles d’infrastructures par les équipes\n",
      tags: ["devops, terraform"],
      id: 2
    });
    

    index.add({
      title: "Carbon - Créer des images du code source",
      category: ["documentation"],
      content: "Carbon est un outil open source développé par l’équipe Dawn Labs permettant de créer des images sympas affichant du code.\n\nPrenons l’exemple de développeurs voulant diffuser du code sur Twitter, il peut copier coller tout simplement du code mais sera mal affiché ou faire une capture d’écran souvent mal adaptée à la taille de l’écran. C’est là que Carbon intervient.\n\nEn se rendant sur le site https://carbon.now.sh il faut copier coller son code, choisir un thème ainsi que le language du code, nous obtenons l’image suivante :\n\n\n    \n\n\nMaintenant nous pouvons partager cette image sur Twitter, documenter nos markdown etc.\n",
      tags: ["documentation"],
      id: 3
    });
    

    index.add({
      title: "Déployer un site web statique en https sur AWS",
      category: ["aws"],
      content: "\n    \n\n\nCréation du domaine et de son certificat\n\nLa première étape consiste à créer un domain et son certificat.\n\n\n  aws cloudformation deploy –stack-name domain-stack –template-file domain.cfn.yml –parameter-overrides DomainName=example.com –capabilities CAPABILITY_IAM –region us-east-1\n\n\nAWSTemplateFormatVersion: \"2010-09-09\"\n\nDescription: Route53 Hosted Zone + Certificate\n\nParameters:\n\n  DomainName:\n    Type: String\n    Description: The DNS name of an Amazon Route 53 hosted zone\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\nResources:\n\n  DNS:\n    Type: AWS::Route53::HostedZone\n    Properties:\n      HostedZoneConfig:\n        Comment: !Join ['', ['Hosted zone for ', !Ref DomainName]]\n      Name: !Ref DomainName\n\n  DomainCertificate:\n    Type: AWS::CertificateManager::Certificate\n    Properties:\n      DomainName: !Ref DomainName\n      DomainValidationOptions:\n      - DomainName: !Ref DomainName\n        ValidationDomain: !Ref DomainName\n      - DomainName: !Join [ '', ['*.', !Ref DomainName ]]\n        ValidationDomain: !Ref DomainName\n      SubjectAlternativeNames:\n      - !Join [ '', ['*.', !Ref DomainName ]]\n\nLors du traitement de cette stack, il faut penser à vérifier ses mails afin de valider la création du certificat.\n\nUne fois la stack créée, il est nécessaire de manuellement modifier les noms des serveurs DNS du domaine, je ne connais pas de solution industrialisée.\n\nCréation du sous domain\n\nMaintenant qu’on a un domain valide, il est possible de créer autant de sous domaines qu’on veut aussi bien le www que rien.\n\nPour récupérer l’arn du certificat que l’on vient de créer :\n\n\n  aws acm list-certificates –region us-east-1\n\n\nLa stack suivante permet de fournir un S3 qui est un dépôt de fichiers statiques, un CDN (CloudFront) et de lier le tout au domaine.\n\n\n  aws cloudformation deploy –stack-name subdomain-stack –template-file subdomain.cfn.yml –parameter-overrides AcmCertificateArn=arn:aws:cloudfront::99999999999:distribution/XXXXXXXXXXXX HostedZone=example.com Subdomain=www.example.com  –capabilities CAPABILITY_IAM –region eu-west-3\n\n\nAWSTemplateFormatVersion: '2010-09-09'\n\nDescription: Route53 Subdomain\n\nParameters:\n\n  AcmCertificateArn:\n    Type: String\n    Description: Domain certificate arn.\n    AllowedPattern: \"arn:aws:acm:.*\"\n\n  HostedZone:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\n  Subdomain:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid subdomain name.\n\nMappings:\n\n  Region2S3WebsiteSuffix:\n    us-east-1:\n      Suffix: .s3-website-us-east-1.amazonaws.com\n    us-west-1:\n      Suffix: .s3-website-us-west-1.amazonaws.com\n    us-west-2:\n      Suffix: .s3-website-us-west-2.amazonaws.com\n    eu-west-1:\n      Suffix: .s3-website-eu-west-1.amazonaws.com\n    ap-northeast-1:\n      Suffix: .s3-website-ap-northeast-1.amazonaws.com\n    ap-northeast-2:\n      Suffix: .s3-website-ap-northeast-2.amazonaws.com\n    ap-southeast-1:\n      Suffix: .s3-website-ap-southeast-1.amazonaws.com\n    ap-southeast-2:\n      Suffix: .s3-website-ap-southeast-2.amazonaws.com\n    ap-south-1:\n      Suffix: .s3-website-ap-south-1.amazonaws.com\n    us-east-2:\n      Suffix: .s3-website-us-east-2.amazonaws.com\n    sa-east-1:\n      Suffix: .s3-website-sa-east-1.amazonaws.com\n    cn-north-1:\n      Suffix: .s3-website.cn-north-1.amazonaws.com.cn\n    eu-central-1:\n      Suffix: .s3-website.eu-central-1.amazonaws.com\n\nResources:\n\n  WebsiteBucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      AccessControl: PublicRead\n      WebsiteConfiguration:\n        IndexDocument: index.html\n        ErrorDocument: error.html\n\n  WebsiteBucketPolicy:\n    Type: AWS::S3::BucketPolicy\n    Properties:\n      Bucket: !Ref WebsiteBucket\n      PolicyDocument:\n        Version: 2012-10-17\n        Statement:\n        - Sid: PublicReadForGetBucketObjects\n          Effect: Allow\n          Principal: '*'\n          Action: s3:GetObject\n          Resource: !Join ['', ['arn:aws:s3:::', !Ref WebsiteBucket, /*]]\n\n  WebsiteCDN:\n    Type: AWS::CloudFront::Distribution\n    Properties:\n      DistributionConfig:\n        Comment: !Join ['', ['CDN for ', !Ref Subdomain, ' website']]\n        Aliases:\n        - !Ref Subdomain\n        Enabled: true\n        DefaultRootObject: index.html\n        IPV6Enabled: false\n        DefaultCacheBehavior:\n          AllowedMethods:\n          - DELETE\n          - GET\n          - HEAD\n          - OPTIONS\n          - PATCH\n          - POST\n          - PUT\n          TargetOriginId: S3Origin\n          ForwardedValues:\n            QueryString: false\n            Cookies:\n              Forward: none\n          ViewerProtocolPolicy: redirect-to-https\n        PriceClass: PriceClass_100\n        Restrictions:\n          GeoRestriction:\n            RestrictionType: whitelist\n            Locations:\n              - FR\n        ViewerCertificate:\n          AcmCertificateArn: !Ref AcmCertificateArn\n          SslSupportMethod: sni-only\n        Origins:\n        - DomainName: !Join ['', [!Ref WebsiteBucket, '.s3.amazonaws.com']]\n          Id: S3Origin\n          S3OriginConfig: {}\n\n  WebsiteDNSName:\n    Type: AWS::Route53::RecordSet\n    Properties:\n      HostedZoneName: !Join ['', [!Ref HostedZone, .]]\n      Name: !Ref Subdomain\n      Type: A\n      AliasTarget:\n        HostedZoneId: Z2FDTNDATAQYW2\n        DNSName: !GetAtt [WebsiteCDN, DomainName]\n\nLa création du CDN est long, il faut s’armer de patience, mais c’est aussi le bon moment pour débuter le transfert du site vers S3.\n\nUne fois la stack créée, le site est disponible à la fois en http et en https. Pour être exact, les requêtes http seront redirigées en https.\n\nTransférer ses données vers S3 peut se faire facilement via l’interface ou bien en ligne de commande.\n\n\n  aws s3 ls –region eu-west-3\n\n\n\n  aws s3 sync ./ s3://${WEBSITE_BUCKET} –region eu-west-3\n\n",
      tags: ["aws"],
      id: 4
    });
    


var store = [{
    "title": "Chaos Monkey for Spring Boot",
    "link": "/dev/chaos-monkey-spring-boot.html",
    "image": null,
    "date": "April 18, 2018",
    "category": ["dev"],
    "excerpt": "Chaos Monkey for Spring Boot développé par l’équipe codecentric est une dépendance Spring Boot 2 permettant de faire du Chaos..."
},{
    "title": "JetBrains Plugins",
    "link": "/dev/jetbrains-plugins.html",
    "image": null,
    "date": "April 9, 2018",
    "category": ["dev"],
    "excerpt": "Any .ignore AsciiDoc BashSupport Docker integration Markdown support Rainbow Brackets IntelliJ AWS CloudFormation HashiCorp Terraform / HCL language support Kotlin..."
},{
    "title": "Terraform",
    "link": "/devops/terraform-infrastructure-as-code.html",
    "image": null,
    "date": "February 12, 2018",
    "category": ["devops"],
    "excerpt": "Terraform est un outil d’infrastructure as code, multi-providers, open source, édité par Hashicorp. Il permet de créer et modifier ses..."
},{
    "title": "Carbon - Créer des images du code source",
    "link": "/documentation/carbon-create-beautiful-images-of-your-source-code.html",
    "image": null,
    "date": "February 12, 2018",
    "category": ["documentation"],
    "excerpt": "Carbon est un outil open source développé par l’équipe Dawn Labs permettant de créer des images sympas affichant du code...."
},{
    "title": "Déployer un site web statique en https sur AWS",
    "link": "/aws/deploy-static-app-cloudfront-domain-https.html",
    "image": null,
    "date": "January 25, 2018",
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