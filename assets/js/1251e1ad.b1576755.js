"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const r={anatomy:"How Lamby Works",cpu:"CPU Architecture",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function o(e){let{id:t,name:a}=e;const o=a||r[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return n.createElement("a",{href:`/docs/${t}`},o)}},7944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(304);const i={id:"webservers",title:"Web Proxy Integrations",toc_max_heading_level:2},s="Web Proxy Integrations",l={unversionedId:"webservers",id:"webservers",title:"Web Proxy Integrations",description:"We recommend using Lambda Function URLs which are free, work with JavaScript & CSS assets out of the box, and are easy to map to a custom domain name. However, here are some SAM YAML snippets if you would like to use an alternate web server integration for your application. Remember, Lamby automatically detects which integration you are using.",source:"@site/docs/webservers.mdx",sourceDirName:".",slug:"/webservers",permalink:"/docs/webservers",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/master/docs/webservers.mdx",tags:[],version:"current",frontMatter:{id:"webservers",title:"Web Proxy Integrations",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Custom Domain Names",permalink:"/docs/custom-domain"},next:{title:"Cold Starts",permalink:"/docs/cold-starts"}},p={},c=[{value:"API Gateway HTTP API",id:"api-gateway-http-api",level:2},{value:"API Gateway REST API",id:"api-gateway-rest-api",level:2},{value:"Application Load Balancer",id:"application-load-balancer",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-proxy-integrations"},"Web Proxy Integrations"),(0,r.kt)("p",null,"We recommend using Lambda Function URLs which are free, work with JavaScript & CSS assets out of the box, and are easy to map to a custom domain name. However, here are some SAM YAML snippets if you would like to use an alternate web server integration for your application. Remember, Lamby automatically detects which integration you are using."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The code snippets below are shown in diff format when compared to the latest files in the ",(0,r.kt)(o.Z,{id:"quick-start",mdxType:"DocLink"})," cookiecutter project template.")),(0,r.kt)("h2",{id:"api-gateway-http-api"},"API Gateway HTTP API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html"},"HTTP API")," is the most modern integration after Function URLs. It is also really easy to add into our template file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"--- template.yaml\n+++ template.yaml\n@@ -28,14 +28,22 @@ Resources:\n       DockerTag: web\n     Properties:\n       AutoPublishAlias: live\n-      FunctionUrlConfig:\n-        AuthType: NONE\n       DeploymentPreference:\n         Type: AllAtOnce\n+      Events:\n+        HttpApiProxy:\n+          Type: HttpApi\n+          Properties:\n+            ApiId: !Ref RailsHttpApi\n       MemorySize: 1792\n       PackageType: Image\n       Timeout: 30\n \n+  RailsHttpApi:\n+     Type: AWS::Serverless::HttpApi\n+     Properties:\n+       StageName: !Ref RailsEnv\n")),(0,r.kt)("h2",{id:"api-gateway-rest-api"},"API Gateway REST API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html"},"REST API")," is a little more verbose, but it essentially sets up a simple proxy that Lamby can use. The integration ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," lines use the ",(0,r.kt)("inlineCode",{parentName:"p"},":live")," alias since our starter defaults to using an ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoPublishAlias: live")),(0,r.kt)("h2",{id:"application-load-balancer"},"Application Load Balancer"),(0,r.kt)("p",null,"Using Lambda's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html"},"ALB Integration")," is a great way to setup your application on a private VPC. However the limit response payloads to less than 1MB vs. the 6MB limit for API Gateway. Using ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/metaskills/363e39e2e8cbccf280b5d5804b384bd2"},"Rack::Deflater")," can help with this if needed. These resources make use of the VPC subnets and security groups mentioned in the ",(0,r.kt)(o.Z,{id:"database",mdxType:"DocLink"})," guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'--- template.yaml\n+++ template.yaml\n@@ -28,14 +28,52 @@ Resources:\n       DockerTag: web\n     Properties:\n       AutoPublishAlias: live\n-      FunctionUrlConfig:\n-        AuthType: NONE\n       DeploymentPreference:\n         Type: AllAtOnce\n       MemorySize: 1792\n       PackageType: Image\n       Timeout: 30\n \n+  RailsLoadBalancer:\n+    Type: AWS::ElasticLoadBalancingV2::LoadBalancer\n+    Properties:\n+      Scheme: internal\n+      SubnetIds:\n+        - subnet-09792e6cd06dd59ad\n+        - subnet-0501f3136415021da\n+      SecurityGroupIds:\n+        - sg-07be99aff5fb14557\n+\n+  RailsLoadBalancerHttpsListener:\n+    Type: AWS::ElasticLoadBalancingV2::Listener\n+    Properties:\n+      Certificates:\n+        - CertificateArn: arn:aws:acm:us-east-1:123456789012:certificate/38613b58-c21e-11eb-8529-0242ac130003\n+      DefaultActions:\n+        - TargetGroupArn: !Ref RailsLoadBalancerTargetGroup\n+          Type: forward\n+      LoadBalancerArn: !Ref RailsLoadBalancer\n+      Port: 443\n+      Protocol: HTTPS\n+\n+  RailsLoadBalancerTargetGroup:\n+    Type: AWS::ElasticLoadBalancingV2::TargetGroup\n+    DependsOn: RailsLambdaInvokePermission\n+    Properties:\n+      TargetType: lambda\n+      TargetGroupAttributes:\n+        - Key: lambda.multi_value_headers.enabled\n+          Value: true\n+      Targets:\n+        - Id: !GetAtt RailsLambda.Arn\n+\n+  RailsLambdaInvokePermission:\n+    Type: AWS::Lambda::Permission\n+    Properties:\n+      FunctionName: !GetAtt RailsLambda.Arn\n+      Action: "lambda:InvokeFunction"\n+      Principal: elasticloadbalancing.amazonaws.com\n')))}u.isMDXComponent=!0}}]);