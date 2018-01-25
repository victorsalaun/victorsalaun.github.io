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
      content: "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.\n\nStyled Code Block\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38AWSTemplateFormatVersion: \"2010-09-09\"\n\nDescription: Route53 Hosted Zone + Certificate\n\nParameters:\n\n  DomainName:\n    Type: String\n    Description: The DNS name of an Amazon Route 53 hosted zone\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\n  EnvType:\n    Description: Environment type\n    Type: String\n    AllowedValues: [dev, test, prod]\n    ConstraintDescription: must specify dev, test or prod.\n\nResources:\n\n  DNS:\n    Type: AWS::Route53::HostedZone\n    Properties:\n      HostedZoneConfig:\n        Comment: !Join ['', ['Hosted zone for ', !Ref DomainName]]\n      Name: !Ref DomainName\n\n  DomainCertificate:\n    Type: AWS::CertificateManager::Certificate\n    Properties:\n      DomainName: !Ref DomainName\n      DomainValidationOptions:\n      - DomainName: !Ref DomainName\n        ValidationDomain: !Ref DomainName\n      - DomainName: !Join [ '', ['*.', !Ref DomainName ]]\n        ValidationDomain: !Ref DomainName\n      SubjectAlternativeNames:\n      - !Join [ '', ['*.', !Ref DomainName ]]\n\n\n",
      tags: ["aws"],
      id: 0
    });
    


var store = [{
    "title": "Déployer un site web statique en https sur AWS",
    "link": "/aws/deploy-static-app-cloudfront-domain-https.html",
    "image": null,
    "date": "January 25, 2017",
    "category": ["aws"],
    "excerpt": "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment. Styled Code Block 1..."
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