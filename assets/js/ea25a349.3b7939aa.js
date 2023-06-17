"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[8984],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?n.createElement(h,l(l({ref:a},m),{},{components:t})):n.createElement(h,l({ref:a},m))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1516:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=t(7462),o=(t(7294),t(3905)),r=t(4998),l=t(941),i=t(4996);const s={slug:"the-elusive-lambda-console-a-specification-proposal",title:"The Elusive Lambda Console; A Specification Proposal.",authors:["kcollins"],tags:["rails","lambda","console","specification","runner","tasks","interaction"]},c=void 0,m={permalink:"/blog/the-elusive-lambda-console-a-specification-proposal",source:"@site/blog/2023-06-17-the-elusive-lambda-console-a-specification-proposal.mdx",title:"The Elusive Lambda Console; A Specification Proposal.",description:'After years of smashing Cloud & Rails together, I\'ve come up with an idea. Better than an idea, a working specification! One where us Rails & Lambda enthusiasts can once again "console into" our "servers" and execute CLI tasks like migrations or interact via our beloved IRB friend, the Rails console. Today, I would like to present, the Lambda Console project. An open specification proposal for any AWS Lambda runtime to adopt.',date:"2023-06-17T00:00:00.000Z",formattedDate:"June 17, 2023",tags:[{label:"rails",permalink:"/blog/tags/rails"},{label:"lambda",permalink:"/blog/tags/lambda"},{label:"console",permalink:"/blog/tags/console"},{label:"specification",permalink:"/blog/tags/specification"},{label:"runner",permalink:"/blog/tags/runner"},{label:"tasks",permalink:"/blog/tags/tasks"},{label:"interaction",permalink:"/blog/tags/interaction"}],readingTime:2.915,hasTruncateMarker:!0,authors:[{name:"Ken Collins",title:"Principal Engineer & Cloud Architect",url:"https://dev.to/metaskills",imageURL:"https://github.com/metaskills.png",key:"kcollins"}],frontMatter:{slug:"the-elusive-lambda-console-a-specification-proposal",title:"The Elusive Lambda Console; A Specification Proposal.",authors:["kcollins"],tags:["rails","lambda","console","specification","runner","tasks","interaction"]},nextItem:{title:"Using Tailscale on Lambda for a Live Development Proxy",permalink:"/blog/tailscale-extension-for-lambda-containers"}},p={authorsImageUrls:[void 0]},u=[{value:"Lambda Console",id:"lambda-console",level:2},{value:"The Proposal",id:"the-proposal",level:2},{value:"The Possibilities",id:"the-possibilities",level:2}],d={toc:u};function h(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"https://github.com/rails-lambda/lambda-console"},(0,o.kt)("img",{src:r.Z})),(0,o.kt)("p",null,"After years of smashing Cloud & Rails together, I've come up with an idea. Better than an idea, a working specification! One where us ",(0,o.kt)("a",{parentName:"p",href:"https://lamby.cloud"},"Rails & Lambda"),' enthusiasts can once again "console into" our "servers" and execute CLI tasks like migrations or interact via our beloved IRB friend, the Rails console. Today, I would like to present, the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lambda-console"},"Lambda Console")," project. An open specification proposal for any AWS Lambda runtime to adopt."),(0,o.kt)("a",{href:"https://github.com/rails-lambda/lambda-console"},(0,o.kt)(l.Z,{alt:"Lamby: Simple Rails & AWS Lambda Integration using Rack",sources:{light:(0,i.Z)("/img/docs/lambda-console-cli-light.png"),dark:(0,i.Z)("/img/docs/lambda-console-cli-dark.png")},mdxType:"ThemedImage"})),(0,o.kt)("h2",{id:"lambda-console"},"Lambda Console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g lambda-console-cli\n")),(0,o.kt)("p",null,"The Lambda Console is a CLI written in Node.js that will interactively create an AWS SDK session for you to invoke your Lambda functions with two types of modes. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"CLI Runner"),(0,o.kt)("li",{parentName:"ol"},"Interactive Commands")),(0,o.kt)("p",null,"Think of the CLI Runner as a bash prompt. You can run any process command or interact with the filesystem or environment. For Rails users, running rake tasks or DB migrations. Running these tasks automatically assume the Lambda task root as the present working directory."),(0,o.kt)("p",null,"Interactive commands are evaluated in the context of your running application. For Ruby and Rails applications, this simulates IRB (Interactive Ruby Shell). For ",(0,o.kt)("a",{parentName:"p",href:"https://lamby.cloud"},"Lamby")," users, this mode simulates the Rails console. Making it easy for users to query their DB or poke their models and code."),(0,o.kt)("h2",{id:"the-proposal"},"The Proposal"),(0,o.kt)("p",null,"There is nothing about the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lambda-console"},"Lambda Console")," that is coupled to Ruby or Rails. The idea is simple, as a Lambda community, could do the following?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Finalize a Lambda Console request/response specification."),(0,o.kt)("li",{parentName:"ol"},"Create more runtime-specific language implementations."),(0,o.kt)("li",{parentName:"ol"},"Build an amazing CLI client for any runtime.")),(0,o.kt)("p",null,"Here is what we have today, the request specification is very simple, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/lambda-console#event-structure"},"event structure")," is only a few dozen lines of JSON schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "X_LAMBDA_CONSOLE": { "run": "cat /etc/os-release" } }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "X_LAMBDA_CONSOLE": { "interact": "User.find(1)" } }\n')),(0,o.kt)("p",null,"Any Lambda runtime code or framework could implment handling these event in their own language-specific pakages. Ruby makes these really easy and you can find them in the Lambda Console's first reference implementations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ruby: The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lambda-console-ruby"},"lambda-console-ruby")," gem for any Ruby Lambda."),(0,o.kt)("li",{parentName:"ul"},"Rails: Integrated into the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lamby"},"Lamby")," v5.0.0 for Rails on Lambda.")),(0,o.kt)("h2",{id:"the-possibilities"},"The Possibilities"),(0,o.kt)("p",null,"What I really want is an amazing CLI client. The current Lambda Console CLI was hacked together in a few days using some amazing Node.js tools that make building interactive CLIs so so easy. But I've never done this before. If this type of tooling sounds interesting to you and you like Node.js, let me know! Here are some ideas on where I could see this going."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Live STDOUT & STDERR:")," We could take advantage of Lambda's new ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/"},"Response Streaming")," and send output buffers as they happen. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pseudo TTY:")," Is there a way to better simulate a real TTY session? Could this even include ANSI colors?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quality of Life Improvements:")," Everything from, Allowing the CLI tool to switch modes without restarting it; Creating a command buffer to up arrow navigate history; Prettier UI. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Formal Response JSON Schema:")," As the features grow, should the response JSON be standardized? For example, if the client wanted to syntax highlight interactive language commands, how would it know what language was being used? We could have a ",(0,o.kt)("inlineCode",{parentName:"p"},"X_LAMBDA_CONSOLE_LANG")," response header."),(0,o.kt)("p",null,"What else would you like to see in a Lambda Console client?"))}h.isMDXComponent=!0},4998:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/header-0b81fd83e6fbc1b5952e0cb0b0ba81fe.png"}}]);