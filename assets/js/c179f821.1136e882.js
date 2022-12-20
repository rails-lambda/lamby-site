"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const o={anatomy:"How Lamby Works",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function r(e){let{id:t,name:a}=e;const r=a||o[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return n.createElement("a",{href:`/docs/${t}`},r)}},9478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=a(304),i=a(941),s=a(4996);const l={id:"quick-start",toc_max_heading_level:2},c="Quick Start",p={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Deploy a new Rails APP to Lambda in 5 minutes!",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/main/docs/quick-start.mdx",tags:[],version:"current",frontMatter:{id:"quick-start",toc_max_heading_level:2},sidebar:"docsSidebar",next:{title:"How Lamby Works",permalink:"/docs/anatomy"}},u={},d=[{value:"Deploy a new Rails APP to Lambda in 5 minutes!",id:"deploy-a-new-rails-app-to-lambda-in-5-minutes",level:3},{value:"Rails Project Template",id:"rails-project-template",level:2},{value:"Development Container",id:"development-container",level:2},{value:"Deploy to Lambda",id:"deploy-to-lambda",level:2},{value:"Yay! Your&#39;re on Rails!",id:"yay-yourre-on-rails",level:2},{value:"What Just Happened?",id:"what-just-happened",level:2}],m={toc:d};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("h3",{id:"deploy-a-new-rails-app-to-lambda-in-5-minutes"},"Deploy a new Rails APP to Lambda in 5 minutes!"),(0,o.kt)("p",null,"Lamby can be used with ",(0,o.kt)(r.Z,{id:"anatomy",name:"existing",mdxType:"DocLink"})," Rails v5 application or higher. The quickest way to learn how Rails works on Lambda is to deploy a new application to your AWS account using our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/customink/lamby-cookiecutter"},"cookiecutter project")," template."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you get started, make sure that you have Docker installed, an AWS account, and Visual Studio Code open. \ud83d\udea2 ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Install Docker")," \u26c5\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free"},"AWS Account")," \ud83d\udcdd ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Install VS Code"))),(0,o.kt)("h2",{id:"rails-project-template"},"Rails Project Template"),(0,o.kt)("p",null,"We created a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/customink/lamby-cookiecutter"},"customink/lamby-cookiecutter")," repository which allows you to initialize a new project from a GitHub template, commonly called a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cookiecutter/cookiecutter"},"cookiecutter"),". Run this terminal command to create a new Rails project with Lamby already installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker run \\\n  --rm \\\n  --interactive \\\n  --volume "${PWD}:/var/task" \\\n  ghcr.io/customink/lamby-cookiecutter \\\n  "gh:customink/lamby-cookiecutter"\n')),(0,o.kt)("p",null,"You will be prompted for a project name. Choose something short, no spaces, and with underscores for word breaks. Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"new_service"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"project_name [my_awesome_lambda]: \n")),(0,o.kt)("h2",{id:"development-container"},"Development Container"),(0,o.kt)("p",null,"Your new Rails project with Lamby leverages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespaces")," which itself is built atop of the ",(0,o.kt)("a",{parentName:"p",href:"https://containers.dev"},"Development Container")," specification. In short, this means your project's containers are easy to use by any editor, even outside of Codespaces. "),(0,o.kt)("p",null,'VS Code makes this incredibly easy. Within a new window, open the command pallet and type "dev container open" and select that action to ',(0,o.kt)("inlineCode",{parentName:"p"},"Open Foler in Container..."),". When prompted, select the project folder created in the previous step."),(0,o.kt)(i.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/docs/devcontainer-open-light.png"),dark:(0,s.Z)("/img/docs/devcontainer-open-dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("p",null,"When the dev container's build is complete, VS Code will display the project folder within the container. This container uses the same base Docker image as the one we are going to deploy to AWS. Unlike the production image, this continer comes with all sorts of build utilties, including the AWS & SAM CLI which we are going to use in the next step to deploy your Rails application to AWS Lambda. "),(0,o.kt)("h2",{id:"deploy-to-lambda"},"Deploy to Lambda"),(0,o.kt)("p",null,"Open the integrated terminal by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"View: Toggle Terminal")," in the command pallet. This VS Code terminal is within your development container, an official Ruby Ubuntu image."),(0,o.kt)(i.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/docs/devcontainer-console-light.png"),dark:(0,s.Z)("/img/docs/devcontainer-console-dark.png")},mdxType:"ThemedImage"}),(0,o.kt)("p",null,"First configure the AWS CLI with your AWS access key and secret."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"aws configure\n")),(0,o.kt)("p",null,"Now we can run the deploy script which uses the AWS SAM CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/deploy\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Deploy scripts are best run via automated CI/CD system such as GitHub Actions. We describe this process more later in the guides.")),(0,o.kt)("h2",{id:"yay-yourre-on-rails"},"Yay! Your're on Rails!"),(0,o.kt)("p",null,"At the end of the deploy process above, you will see SAM print the outputs for the CloudFormation template being deployed. This includes your Lambda Function URL, a free web server proxy to your Lambda container running Rails. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CloudFormation outputs from deployed stack\n-------------------------------------------------------------------------------------------\nOutputs                                                                                                          \n-------------------------------------------------------------------------------------------\nKey                 RailsLambdaUrl                                                                               \nDescription         Lambda Function URL                                                                          \nValue               https://b4hsncwngvxg6rv67b64r545ly0jrwnk.lambda-url.us-east-1.on.aws/                        \n-------------------------------------------------------------------------------------------\n\nSuccessfully created/updated stack - new-service-production in us-east-1\n")),(0,o.kt)("p",null,"Open your browser and go to the URL. You should see the familiar welcome to Rails screen."),(0,o.kt)("img",{alt:"Yay! You're on Rails with AWS Lambda containers",src:a(4525).Z,style:{width:"100%",borderRadius:"5px"}}),(0,o.kt)("h2",{id:"what-just-happened"},"What Just Happened?"),(0,o.kt)("p",null,"You just deployed a new Rails application to AWS Lambda containers using a basic Ruby Ubuntu Docker base image. Every part of your application is wrapped up neatly in a single CloudFormation stack. This stack has everything you need for a server-side API and/or a client JavaScript application hosted on AWS Lambda. Please take some time to explore how Lamby works in the next sections."))}h.isMDXComponent=!0},4525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/you-are-on-rails-and-lambda-2b556cfd6696befaaba8561b39b0ae2d.png"}}]);