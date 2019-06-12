var hostname = "https://victorsalaun.github.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Ressources Organisationnelles",
      category: ["human"],
      content: "Links\n\n\n  d2si / onboarding\n  GitLab / lessons-on-building-a-distributed-company\n  linkedin / how-get-anyone-do-almost-anything-you-want-bruce-kasanoff\n  ThoughtWorks / Leadership as continuous improvement\n  ThoughtWorks / The responsive organization\n  ThoughtWorks / The responsible organization\n\n",
      tags: ["resources","human"],
      id: 0
    });
    

    index.add({
      title: "Contributions Open Source",
      category: ["dev"],
      content: "\n    \n\n\nContributions\n\n\n  \n    helm / charts\n  \n  jenkinsci/build-timestamp-plugin\n  jenkinsci/config-file-provider-plugin\n  \n    jenkinsci/configuration-as-code-plugin\n  \n  SofteamOuest/referentiel-personnes-ui\n  \n    SofteamOuest/softeamouest-terraform-github-organization\n  \n  voyages-sncf-technologies/hesperides\n  voyages-sncf-technologies/hesperides-cli\n  voyages-sncf-technologies/hesperides-data-migration\n  voyages-sncf-technologies/hesperides-gui\n  voyages-sncf-technologies/hesperides-jenkins-lib\n  voyages-sncf-technologies/terraform-provider-hesperides\n\n\nDocumentation\n\n\n  opensource.guide\n\n",
      tags: ["github","open-source"],
      id: 1
    });
    

    index.add({
      title: "Ressources Docker",
      category: ["docker"],
      content: "Tools\n\n\n  ctop\n  dive\n\n\nPresentations\n\n\n  advanced-docker-image-build-patterns\n\n",
      tags: ["resources","docker"],
      id: 2
    });
    

    index.add({
      title: "Ressources Jenkins",
      category: ["jenkins"],
      content: "Best Practices\n\n\n  jenkinsci / BEST_PRACTICES\n\n\nPlugins\n\n\n  blueocean\n  config-file-provider\n  configuration-as-code-plugin\n  credentials-binding\n  folder-properties-plugin\n  git\n  github-oauth\n  job-dsl\n  kubernetes\n  parameterized-trigger\n  pipeline-utility-steps\n  role-strategy\n  slack\n  workflow-aggregator\n  workflow-job\n  workflow-scm-step\n\n\nScripts\n\n\n  cloudbees/jenkins-scripts\n  jenkinsci/jenkins-scripts\n\n\nArticles\n\n\n  Continuous_Delivery_Patterns_and_Anti_Patterns.pdf\n  DZone / CI/CD for Kubernetes with Jenkins and Spinnaker\n\n",
      tags: ["resources"],
      id: 3
    });
    

    index.add({
      title: "Ressources Mobile",
      category: ["mobile"],
      content: "Best Practices\n\n\n  smashingmagazine / best-practices-for-mobile-form-design\n\n\nAndroid\n\nLibraries\n\n\n  bumptech / glide\n  facebook / stetho\n  google / dagger\n  InsertKoinIO / koin\n  JakeWharton / butterknife\n  JakeWharton / timber\n  kittinunf / Fuel\n  Kotlin / anko\n  square / picasso\n  square / retrofit\n\n\nArticles\n\n\n  android / android-architecture-components\n  ippon / android-architecture-components-1\n  ippon / android-architecture-components-2\n  ippon / android-architecture-components-3\n  ippon / android-architecture-components-4`\n  ippon / android-architecture-components-5\n  ippon / android-architecture-components-6\n  ippon / android-architecture-components-7\n\n\nSamples\n\n\n  googlesamples / android-architecture-components\n\n",
      tags: ["resources"],
      id: 4
    });
    

    index.add({
      title: "Signets Design",
      category: ["others"],
      content: "Bookmarks\n\n\n  colorffy Color gradients and palettes!\n  sketchsheets Ready to print sketch sheet templates for UX designers\n  sneakpeekit Printable Sketch Sheets for Design Wireframing\n  uibundle Discover great free design resources. Search for fonts, icons, UI Kits, mockups and more\n  Unsplash Website dedicated to sharing stock photography\n\n\nBest Practices\n\n\n  refactoring-ui / 7-practical-tips-for-cheating-at-design\n  uxplanet / ux-infinite-scrolling-vs-pagination\n\n\nCodePen\n\n\n  Advanced Synthwave Scene\n  Flappy Dino\n  Floating island with waterfall\n  Flying Carrot\n  Gravity Reverse\n  Kong3D\n  mix-blend-mode hadouken\n  Jurassic Internet\n  Low Poly Art Generator\n  Naughts and Crosses\n  Naughts and Crosses 2\n  Quarto\n  Scalable 3D Range Sliders\n  Time\n\n\nLibraries\n\n\n  twbs / bootstrap The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web\n  material.io Make beautiful products, faster. Material is a design system – backed by open-source code – that helps teams build digital experiences\n  nostalgic-css/ NES.css NES-style CSS Framework\n\n",
      tags: ["resources","design"],
      id: 5
    });
    

    index.add({
      title: "Ressources Jeux Vidéo",
      category: ["dev"],
      content: "Engines\n\n\n  gb-studio\n  unity3d\n  unrealengine\n\n\nLinks\n\n\n  ellisonleao / magictools\n  Kavex / GameDev-Resources\n\n",
      tags: ["resources","videogames"],
      id: 6
    });
    

    index.add({
      title: "Hacktoberfest 2018",
      category: ["dev"],
      content: "\n    \n\n\nHacktoberfest 2018\n\nPull Requests\n\n\n  build-timestamp-plugin\n  config-file-provider-plugin\n  configuration-as-code-plugin\n  hello-world\n  jenkins-init-scripts\n  terraform-provider-hesperides\n  terraform-provider-hesperides\n\n",
      tags: ["github","Hacktoberfest"],
      id: 7
    });
    

    index.add({
      title: "Ressources Terraform",
      category: ["devops"],
      content: "\n    \n\n\nTools\n\n\n  GoogleCloudPlatform / terraformer CLI tool to generate terraform files from existing infrastructure (reverse Terraform). Infrastructure to Code\n  gruntwork-io / terragrunt\n  gruntwork-io / terratest\n  hashicorp / terraform\n  tfutils / tfenv Terraform version manager\n\n\nBest Practices\n\n\n  terraform-best-practices\n\n",
      tags: ["resources","terraform"],
      id: 8
    });
    

    index.add({
      title: "Ressources Kubernetes",
      category: ["devops"],
      content: "\n    \n\n\nBest Pratices\n\n\n  cncf / 9-kubernetes-security-best-practices-everyone-must-follow\n\n\nTutorials\n\n\n  aws-workshop-for-kubernetes\n  continuous-deployment-on-kubernetes\n  ramitsurana / awesome-kubernetes\n  smooth-sailing-with-kubernetes\n\n\nTools\n\n\n  ahmetb / kubectx Switch faster between clusters and namespaces in kubectl\n  awesome-kubernetes\n  derailed / k9s\n  goldpinger\n  helm\n  kube-bench\n  kube-ops-view\n  kubectl\n  kubespy\n  kubefwd\n  kustomize\n  minikube\n  weaveworks / kubediff Kubediff: a tool for Kubernetes to show differences between running state and version controlled configuration.\n  weaveworks / kured Kubernetes Reboot Daemon\n\n\n",
      tags: ["kubernetes","resources"],
      id: 9
    });
    

    index.add({
      title: "Ressources Python",
      category: ["dev"],
      content: "\n    \n\n\nCurated lists\n\n\n  mahmoud / awesome-python-applications Free software that works great, and also happens to be open-source Python\n  vinta / awesome-python A curated list of awesome Python frameworks, libraries, software and resources\n\n\nPython libraries\n\n\n  bokeh\n  boto3\n  click\n  cookiecutter\n  datashader\n  diagram\n  docopt\n  flask\n  fuzzywuzzy\n  loguru\n  matplotlib\n  prompt-toolkit / python-prompt-toolkit\n  PyGitHub\n  requests\n  pyca / cryptography\n\n\nPython tools\n\n\n  credstash\n\n\nCode Quality\n\n\n  black\n  coverage.py\n  flake8\n  Microsoft / pyright Static type checker for Python\n  pre-commit\n\n\nLearnings\n\n\n  30-seconds-of-python-code\n  gto76 / python-cheatsheet\n\n",
      tags: ["python","resources"],
      id: 10
    });
    

    index.add({
      title: "Ressources DevOps",
      category: ["devops"],
      content: "\n    \n\n\nArticles\n\n\n  chef / the-four-duties-of-reviewing-pull-requests The Four Duties of Reviewing Pull Requests\n  cloudbees / 8-cicd-best-practices-your-devops-journey\n  devopstopologies / devops-patterns What Team Structure is Right for DevOps to Flourish?\n  fogbugz / code-review-best-practice\n  medium / automated-releases-in-open-source-projects\n  octo / gardez-les-cles-de-votre-infrastructure-a-labri-avec-vault\n  smashingmagazine / cloud-expert How To Sound Like A Cloud Expert\n  dev.to / questions-i-ask-in-sre-interviews Questions I ask in SRE interviews\n  RomuloOliveira / commit-messages-guide A guide to understand the importance of commit messages and how to write them well\n\n\nTools\n\n\n  antonmedv / fx\n  binhnguyennus / awesome-scalability\n  cloud-custodian / cloud-custodian Rules engine for cloud security, cost optimization, and governance, DSL in yaml for policies to query, filter, and take actions on resources\n  gitmoji An emoji guide for your commit messages\n  Google / chrome-devtools\n  Docker\n  editorconfig EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.\n  FiloSottile / mkcert A simple zero-config tool to make locally trusted development certificates with any names you’d like.\n  Git\n  GitHub\n  Gitlab\n  gruntwork-io / cloud-nuke A tool for cleaning up your cloud accounts by nuking (deleting) all resources within it\n  hashicorp / terraform\n  hashicorp / vagrant\n  hashicorp / vault\n  JetBrains / IntelliJ\n  kamranahmedse / developer-roadmap\n  Netflix / hubcommander\n  Postman\n  Slack\n  tmux/tmux\n\n",
      tags: ["resources"],
      id: 11
    });
    

    index.add({
      title: "Chaos Monkey for Spring Boot",
      category: ["dev","devops"],
      content: "\n    \n\n\nChaos Monkey for Spring Boot développé par l’équipe codecentric est une dépendance Spring Boot 2 permettant de faire du Chaos Engineering.\n\nLa mise en place est simple, il suffit d’ajouter la dépendance maven au pom.xml et régler quelques conf YAML.\nLe reste du code source n’est pas modifié.\n\nCe projet propose trois types d’attaque :\n\n  Ajout de latences aux appels de méthodes\n  Ajout d’exceptions aux appels de méthodes\n  Tuer l’application\n\n\nCe projet se base sur les annotations Spring :\n\n  @Controller\n  @RestController\n  @Service\n  @Repository\n\n\nVoici un exemple de configuration :\nchaos:\n  monkey:\n    assaults:\n      latencyActive: true\n      level: 1\n      exceptionsActive: true\n      killApplicationActive: true\n    watcher:\n      repository: true\n      restController: true\n      service: true\n\n\n\nDans la pratique il n’est pas conseillé d’utiliser ce type d’outils en production.\nMais supposons une infra en micro-services, pourquoi ne pas lancer une instance de l’application en mode chaos.\nCela permettrait de valider constamment le comportement des services entre eux.\n\nDemo\n",
      tags: ["ChaosEngineering"],
      id: 12
    });
    

    index.add({
      title: "JetBrains Plugins",
      category: ["dev"],
      content: "\n    \n\n\nAny\n\n\n  .ignore\n  AsciiDoc\n  AWS Toolkit\n  Azure Toolkit\n  BashSupport\n  Docker integration\n  Markdown support\n  Rainbow Brackets\n\n\nAndroid Studio\n\n\n  ADB Idea\n\n\nIntelliJ\n\n\n  AWS CloudFormation\n  HashiCorp Terraform / HCL language support\n  Kotlin\n  Lombok Plugin\n  Makefile support\n  YAML/Ansible support\n\n\nWebStorm\n\n\n  AngularJS\n  Angular 2 TypeScript Live Templates\n  React Native Console\n  Vue.js\n\n\nInutiles donc indispensables\n\n\n  Nyan Progress Bar\n  Power Mode II\n\n",
      tags: ["jetbrains","plugins"],
      id: 13
    });
    

    index.add({
      title: "Terraform",
      category: ["devops"],
      content: "\n    \n\n\nTerraform est un outil d’infrastructure as code, multi-providers, open source, édité par Hashicorp.\nIl permet de créer et modifier ses infrastructures et environements sous la forme de fichiers de configuration de manière prévisible.\nLe principal concept se base sur l’état de la cible, il s’agit donc d’une approche d’infrastructure immutable.\n\nAvantages :\n\n  Est devenu un standard\n  Large communauté\n  Support multi-provides assuré dont AWS, Azure, GCE\n  Reproductibilité via des modules\n  Extensibilité par plugin\n\n\nInconvénients :\n\n  Pas d’interface centralisée\n  Nécessité de développer\n  En fonction du provider, pas tous les services ne sont couverts\n\n\nLa création de modules permet de centraliser les usages et d’assurer une bonne réutilisabilité des modèles d’infrastructures par les équipes\n",
      tags: ["terraform"],
      id: 14
    });
    

    index.add({
      title: "Carbon - Créer des images du code source",
      category: ["devops"],
      content: "Carbon est un outil open source développé par l’équipe Dawn Labs permettant de créer des images sympas affichant du code.\n\nPrenons l’exemple de développeurs voulant diffuser du code sur Twitter, il peut copier coller tout simplement du code mais sera mal affiché ou faire une capture d’écran souvent mal adaptée à la taille de l’écran. C’est là que Carbon intervient.\n\nEn se rendant sur le site https://carbon.now.sh il faut copier coller son code, choisir un thème ainsi que le language du code, nous obtenons l’image suivante :\n\n\n    \n\n\nMaintenant nous pouvons partager cette image sur Twitter, documenter nos markdown etc.\n",
      tags: ["documentation"],
      id: 15
    });
    

    index.add({
      title: "Déployer un site web statique en https sur AWS",
      category: ["devops"],
      content: "\n    \n\n\nCréation du domaine et de son certificat\n\nLa première étape consiste à créer un domain et son certificat.\n\n\n  aws cloudformation deploy –stack-name domain-stack –template-file domain.cfn.yml –parameter-overrides DomainName=example.com –capabilities CAPABILITY_IAM –region us-east-1\n\n\nAWSTemplateFormatVersion: \"2010-09-09\"\n\nDescription: Route53 Hosted Zone + Certificate\n\nParameters:\n\n  DomainName:\n    Type: String\n    Description: The DNS name of an Amazon Route 53 hosted zone\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\nResources:\n\n  DNS:\n    Type: AWS::Route53::HostedZone\n    Properties:\n      HostedZoneConfig:\n        Comment: !Join ['', ['Hosted zone for ', !Ref DomainName]]\n      Name: !Ref DomainName\n\n  DomainCertificate:\n    Type: AWS::CertificateManager::Certificate\n    Properties:\n      DomainName: !Ref DomainName\n      DomainValidationOptions:\n      - DomainName: !Ref DomainName\n        ValidationDomain: !Ref DomainName\n      - DomainName: !Join [ '', ['*.', !Ref DomainName ]]\n        ValidationDomain: !Ref DomainName\n      SubjectAlternativeNames:\n      - !Join [ '', ['*.', !Ref DomainName ]]\n\nLors du traitement de cette stack, il faut penser à vérifier ses mails afin de valider la création du certificat.\n\nUne fois la stack créée, il est nécessaire de manuellement modifier les noms des serveurs DNS du domaine, je ne connais pas de solution industrialisée.\n\nCréation du sous domain\n\nMaintenant qu’on a un domain valide, il est possible de créer autant de sous domaines qu’on veut aussi bien le www que rien.\n\nPour récupérer l’arn du certificat que l’on vient de créer :\n\n\n  aws acm list-certificates –region us-east-1\n\n\nLa stack suivante permet de fournir un S3 qui est un dépôt de fichiers statiques, un CDN (CloudFront) et de lier le tout au domaine.\n\n\n  aws cloudformation deploy –stack-name subdomain-stack –template-file subdomain.cfn.yml –parameter-overrides AcmCertificateArn=arn:aws:cloudfront::99999999999:distribution/XXXXXXXXXXXX HostedZone=example.com Subdomain=www.example.com  –capabilities CAPABILITY_IAM –region eu-west-3\n\n\nAWSTemplateFormatVersion: '2010-09-09'\n\nDescription: Route53 Subdomain\n\nParameters:\n\n  AcmCertificateArn:\n    Type: String\n    Description: Domain certificate arn.\n    AllowedPattern: \"arn:aws:acm:.*\"\n\n  HostedZone:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid DNS zone name.\n\n  Subdomain:\n    Type: String\n    Description: The DNS name of an existing Amazon Route 53 hosted zone.\n    AllowedPattern: (?!-)[a-zA-Z0-9-.]{1,63}(?&lt;!-)\n    ConstraintDescription: must be a valid subdomain name.\n\nMappings:\n\n  Region2S3WebsiteSuffix:\n    us-east-1:\n      Suffix: .s3-website-us-east-1.amazonaws.com\n    us-west-1:\n      Suffix: .s3-website-us-west-1.amazonaws.com\n    us-west-2:\n      Suffix: .s3-website-us-west-2.amazonaws.com\n    eu-west-1:\n      Suffix: .s3-website-eu-west-1.amazonaws.com\n    ap-northeast-1:\n      Suffix: .s3-website-ap-northeast-1.amazonaws.com\n    ap-northeast-2:\n      Suffix: .s3-website-ap-northeast-2.amazonaws.com\n    ap-southeast-1:\n      Suffix: .s3-website-ap-southeast-1.amazonaws.com\n    ap-southeast-2:\n      Suffix: .s3-website-ap-southeast-2.amazonaws.com\n    ap-south-1:\n      Suffix: .s3-website-ap-south-1.amazonaws.com\n    us-east-2:\n      Suffix: .s3-website-us-east-2.amazonaws.com\n    sa-east-1:\n      Suffix: .s3-website-sa-east-1.amazonaws.com\n    cn-north-1:\n      Suffix: .s3-website.cn-north-1.amazonaws.com.cn\n    eu-central-1:\n      Suffix: .s3-website.eu-central-1.amazonaws.com\n\nResources:\n\n  WebsiteBucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      AccessControl: PublicRead\n      WebsiteConfiguration:\n        IndexDocument: index.html\n        ErrorDocument: error.html\n\n  WebsiteBucketPolicy:\n    Type: AWS::S3::BucketPolicy\n    Properties:\n      Bucket: !Ref WebsiteBucket\n      PolicyDocument:\n        Version: 2012-10-17\n        Statement:\n        - Sid: PublicReadForGetBucketObjects\n          Effect: Allow\n          Principal: '*'\n          Action: s3:GetObject\n          Resource: !Join ['', ['arn:aws:s3:::', !Ref WebsiteBucket, /*]]\n\n  WebsiteCDN:\n    Type: AWS::CloudFront::Distribution\n    Properties:\n      DistributionConfig:\n        Comment: !Join ['', ['CDN for ', !Ref Subdomain, ' website']]\n        Aliases:\n        - !Ref Subdomain\n        Enabled: true\n        DefaultRootObject: index.html\n        IPV6Enabled: false\n        DefaultCacheBehavior:\n          AllowedMethods:\n          - DELETE\n          - GET\n          - HEAD\n          - OPTIONS\n          - PATCH\n          - POST\n          - PUT\n          TargetOriginId: S3Origin\n          ForwardedValues:\n            QueryString: false\n            Cookies:\n              Forward: none\n          ViewerProtocolPolicy: redirect-to-https\n        PriceClass: PriceClass_100\n        Restrictions:\n          GeoRestriction:\n            RestrictionType: whitelist\n            Locations:\n              - FR\n        ViewerCertificate:\n          AcmCertificateArn: !Ref AcmCertificateArn\n          SslSupportMethod: sni-only\n        Origins:\n        - DomainName: !Join ['', [!Ref WebsiteBucket, '.s3.amazonaws.com']]\n          Id: S3Origin\n          S3OriginConfig: {}\n\n  WebsiteDNSName:\n    Type: AWS::Route53::RecordSet\n    Properties:\n      HostedZoneName: !Join ['', [!Ref HostedZone, .]]\n      Name: !Ref Subdomain\n      Type: A\n      AliasTarget:\n        HostedZoneId: Z2FDTNDATAQYW2\n        DNSName: !GetAtt [WebsiteCDN, DomainName]\n\nLa création du CDN est long, il faut s’armer de patience, mais c’est aussi le bon moment pour débuter le transfert du site vers S3.\n\nUne fois la stack créée, le site est disponible à la fois en http et en https. Pour être exact, les requêtes http seront redirigées en https.\n\nTransférer ses données vers S3 peut se faire facilement via l’interface ou bien en ligne de commande.\n\n\n  aws s3 ls –region eu-west-3\n\n\n\n  aws s3 sync ./ s3://${WEBSITE_BUCKET} –region eu-west-3\n\n",
      tags: ["aws"],
      id: 16
    });
    


var store = [{
    "title": "Ressources Organisationnelles",
    "link": "/human/organizational-resources.html",
    "image": null,
    "date": "December 18, 2018",
    "category": ["human"],
    "excerpt": "Links d2si / onboarding GitLab / lessons-on-building-a-distributed-company linkedin / how-get-anyone-do-almost-anything-you-want-bruce-kasanoff ThoughtWorks / Leadership as continuous improvement ThoughtWorks / The responsive..."
},{
    "title": "Contributions Open Source",
    "link": "/dev/open-source-contributions.html",
    "image": null,
    "date": "December 8, 2018",
    "category": ["dev"],
    "excerpt": "\n    \n\n\nContributions\n\n\n  \n    helm / charts\n  \n  jenkinsci/build-timestamp-plugin\n  jenkinsci/config-file-provider-plugin\n  \n    jenkinsci/configuration-as-code-plugin\n  \n  SofteamOuest/referentiel-personnes-ui\n  \n    SofteamOuest/softeamouest-terraform-github-organization\n  \n  voyages-sncf-technologies/hesperides\n  voyages-sncf-technologies/hesperides-cli\n  voyages-sncf-technologies/hesperides-data-migration\n  voyages-sncf-technologies/hesperides-gui\n  voyages-sncf-technologies/hesperides-jenkins-lib\n  voyages-sncf-technologies/terraform-provider-hesperides\n\n\nDocumentation\n\n\n  opensource.guide\n\n"
},{
    "title": "Ressources Docker",
    "link": "/docker/docker-resources.html",
    "image": null,
    "date": "November 29, 2018",
    "category": ["docker"],
    "excerpt": "Tools\n\n\n  ctop\n  dive\n\n\nPresentations\n\n\n  advanced-docker-image-build-patterns\n\n"
},{
    "title": "Ressources Jenkins",
    "link": "/jenkins/jenkins-resources.html",
    "image": null,
    "date": "November 26, 2018",
    "category": ["jenkins"],
    "excerpt": "Best Practices jenkinsci / BEST_PRACTICES Plugins blueocean config-file-provider configuration-as-code-plugin credentials-binding folder-properties-plugin git github-oauth job-dsl kubernetes parameterized-trigger pipeline-utility-steps role-strategy slack workflow-aggregator..."
},{
    "title": "Ressources Mobile",
    "link": "/mobile/mobile-resources.html",
    "image": null,
    "date": "November 6, 2018",
    "category": ["mobile"],
    "excerpt": "Best Practices smashingmagazine / best-practices-for-mobile-form-design Android Libraries bumptech / glide facebook / stetho google / dagger InsertKoinIO / koin JakeWharton..."
},{
    "title": "Signets Design",
    "link": "/others/design-bookmarks.html",
    "image": null,
    "date": "November 5, 2018",
    "category": ["others"],
    "excerpt": "Bookmarks colorffy Color gradients and palettes! sketchsheets Ready to print sketch sheet templates for UX designers sneakpeekit Printable Sketch Sheets..."
},{
    "title": "Ressources Jeux Vidéo",
    "link": "/dev/video-games-resources.html",
    "image": null,
    "date": "November 2, 2018",
    "category": ["dev"],
    "excerpt": "Engines\n\n\n  gb-studio\n  unity3d\n  unrealengine\n\n\nLinks\n\n\n  ellisonleao / magictools\n  Kavex / GameDev-Resources\n\n"
},{
    "title": "Hacktoberfest 2018",
    "link": "/dev/hacktoberfest-2018.html",
    "image": null,
    "date": "October 15, 2018",
    "category": ["dev"],
    "excerpt": "\n    \n\n\nHacktoberfest 2018\n\nPull Requests\n\n\n  build-timestamp-plugin\n  config-file-provider-plugin\n  configuration-as-code-plugin\n  hello-world\n  jenkins-init-scripts\n  terraform-provider-hesperides\n  terraform-provider-hesperides\n\n"
},{
    "title": "Ressources Terraform",
    "link": "/devops/terraform-resources.html",
    "image": null,
    "date": "September 29, 2018",
    "category": ["devops"],
    "excerpt": "Tools GoogleCloudPlatform / terraformer CLI tool to generate terraform files from existing infrastructure (reverse Terraform). Infrastructure to Code gruntwork-io /..."
},{
    "title": "Ressources Kubernetes",
    "link": "/devops/kubernetes-resources.html",
    "image": null,
    "date": "September 28, 2018",
    "category": ["devops"],
    "excerpt": "Best Pratices cncf / 9-kubernetes-security-best-practices-everyone-must-follow Tutorials aws-workshop-for-kubernetes continuous-deployment-on-kubernetes ramitsurana / awesome-kubernetes smooth-sailing-with-kubernetes Tools ahmetb / kubectx Switch faster between clusters..."
},{
    "title": "Ressources Python",
    "link": "/dev/python-resources.html",
    "image": null,
    "date": "September 13, 2018",
    "category": ["dev"],
    "excerpt": "Curated lists mahmoud / awesome-python-applications Free software that works great, and also happens to be open-source Python vinta / awesome-python..."
},{
    "title": "Ressources DevOps",
    "link": "/devops/devops-resources.html",
    "image": null,
    "date": "September 2, 2018",
    "category": ["devops"],
    "excerpt": "Articles chef / the-four-duties-of-reviewing-pull-requests The Four Duties of Reviewing Pull Requests cloudbees / 8-cicd-best-practices-your-devops-journey devopstopologies / devops-patterns What Team Structure..."
},{
    "title": "Chaos Monkey for Spring Boot",
    "link": "/dev/devops/chaos-monkey-spring-boot.html",
    "image": null,
    "date": "April 18, 2018",
    "category": ["dev","devops"],
    "excerpt": "Chaos Monkey for Spring Boot développé par l’équipe codecentric est une dépendance Spring Boot 2 permettant de faire du Chaos..."
},{
    "title": "JetBrains Plugins",
    "link": "/dev/jetbrains-plugins.html",
    "image": null,
    "date": "April 9, 2018",
    "category": ["dev"],
    "excerpt": "Any .ignore AsciiDoc AWS Toolkit Azure Toolkit BashSupport Docker integration Markdown support Rainbow Brackets Android Studio ADB Idea IntelliJ AWS..."
},{
    "title": "Terraform",
    "link": "/devops/terraform-infrastructure-as-code.html",
    "image": null,
    "date": "February 12, 2018",
    "category": ["devops"],
    "excerpt": "Terraform est un outil d’infrastructure as code, multi-providers, open source, édité par Hashicorp. Il permet de créer et modifier ses..."
},{
    "title": "Carbon - Créer des images du code source",
    "link": "/devops/carbon-create-beautiful-images-of-your-source-code.html",
    "image": null,
    "date": "February 12, 2018",
    "category": ["devops"],
    "excerpt": "Carbon est un outil open source développé par l’équipe Dawn Labs permettant de créer des images sympas affichant du code...."
},{
    "title": "Déployer un site web statique en https sur AWS",
    "link": "/devops/deploy-static-app-cloudfront-domain-https.html",
    "image": null,
    "date": "January 25, 2018",
    "category": ["devops"],
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