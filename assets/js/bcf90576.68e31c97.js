"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[9374],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return o.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(b,l(l({ref:a},p),{},{components:t})):o.createElement(b,l({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5763:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const r={slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},l=void 0,i={permalink:"/blog/tailscale-extension-for-lambda-containers",source:"@site/blog/2023-06-03-tailscale-extension-for-lambda-containers.mdx",title:"Using Tailscale on Lambda for a Live Development Proxy",description:"Using Tailscale on Lambda for a Live Development Proxy",date:"2023-06-03T00:00:00.000Z",formattedDate:"June 3, 2023",tags:[{label:"tailscale",permalink:"/blog/tags/tailscale"},{label:"websockets",permalink:"/blog/tags/websockets"},{label:"lambda",permalink:"/blog/tags/lambda"},{label:"extension",permalink:"/blog/tags/extension"},{label:"container",permalink:"/blog/tags/container"}],readingTime:3.335,hasTruncateMarker:!0,authors:[{name:"Ken Collins",title:"Principal Engineer & Cloud Architect",url:"https://dev.to/metaskills",imageURL:"https://github.com/metaskills.png",key:"kcollins"}],frontMatter:{slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},prevItem:{title:"The Elusive Lambda Console; A Specification Proposal.",permalink:"/blog/the-elusive-lambda-console-a-specification-proposal"},nextItem:{title:"Welcome Lamby v4!",permalink:"/blog/welcome-to-lamby-v4"}},s={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udc0b Tailscale on Lambda",id:"-tailscale-on-lambda",level:2},{value:"\ud83d\udd0c ActionCable on Lambda",id:"-actioncable-on-lambda",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lamby.cloud/img/blog/tailscale/header.png",alt:"Using Tailscale on Lambda for a Live Development Proxy"})),(0,n.kt)("p",null,"\u26a0\ufe0f DISCLAIMER: In no way am I advocating for the use of live proxies as a normal way to develop against cloud resources. However in some edge cases, such as developing a new system, live dev proxies or the general use of Tailscale in Lambda could be useful."),(0,n.kt)("h2",{id:"-tailscale-on-lambda"},"\ud83d\udc0b Tailscale on Lambda"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tailscale.com"},"Tailscale")," makes networking easy. Like really easy. It shines in situations where private networks do not allow inbound connections. Tailscale can connect your devices and development environments for easy access to remote resources, or allow those remote systems to access your home or office network devices."),(0,n.kt)("p",null,"A few years ago Corey Quinn wrote a Tailscale ",(0,n.kt)("a",{parentName:"p",href:"https://www.lastweekinaws.com/blog/corey-writes-open-source-code-for-lambda-and-tailscale/"},"Lambda Extension"),". It is great and helped a lot of folks. Today, I'd like to share a new project based on Corey's work that makes it even easier to use Tailscale in Lambda Container. Check it out here."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/rails-lambda/tailscale-extension"},"\ud83d\udd17 Tailscale Lambda Extension for Containers"))," on GitHub \ud83d\udc19"),(0,n.kt)("p",null,"This new version tries to improve upon Corey's work. Initialization is now stable, there are more configuration options, and we even have multi-platform Docker container packages for both ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"arm64"),". We even have Amazon Linux 2 and Debian/Ubuntu variants. Installation is really easy, simply add one line to your Dockerfile. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM public.ecr.aws/lambda/ruby:3.2\nRUN yum install -y curl\nCOPY --from=ghcr.io/rails-lambda/tailscale-extension-amzn:1 /opt /opt\n")),(0,n.kt)("p",null,"Once your container starts, taking to any device within your tailnet can be done by using the local ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SOCKS"},"SOCKS5")," proxy. In the example below, we are using Ruby's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/astro/socksify-ruby"},"socksify")," gem."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'socksify/http'\nNet::HTTP.socks_proxy('localhost', 1055).start(...) do |http|\n  # your http code here...\nend\n")),(0,n.kt)("h2",{id:"-actioncable-on-lambda"},"\ud83d\udd0c ActionCable on Lambda"),(0,n.kt)("p",null,"How did I use Tailscale for the ",(0,n.kt)("a",{parentName:"p",href:"https://lamby.cloud"},"Rails on Lambda")," work? A few months ago, I ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/metaskills/status/1647714842550185985"},"started work")," on the last critical part of the Rails ecosystem which did not work on Lambda... ",(0,n.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/action_cable_overview.html"},"ActionCable")," & WebSockets. Specifically, I wanted ",(0,n.kt)("a",{parentName:"p",href:"https://hotwired.dev"},"Hotwire")," to work."),(0,n.kt)("p",null,"So far, everything is ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/metaskills/status/1651067256242151424"},"working great")," with our new LambdaCable gem. Eventually it will be a drop-in adapter for ActionCable and join the ranks of other popular alternatives like ",(0,n.kt)("a",{parentName:"p",href:"https://anycable.io"},"AnyCable"),". To bring the project to completion faster, I needed feedback loops that were much faster than deploying code to the cloud. I needed a development proxy! One where my Rails application would receive events from both Lambda's Function URLs and the WebSocket events from API Gateway. Illustrated below with a demo video."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lamby.cloud/img/blog/tailscale/live-development-proxy-overview.png",alt:"Architecture diagram of the use of a Lambda development proxy for WebSockets with API Gateway."})),(0,n.kt)("div",{class:"video-container"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/k02k38o4ih8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,n.kt)("p",null,"If you are curious to learn more about how Rails & Lambda work together, check out our ",(0,n.kt)("a",{parentName:"p",href:"https://lamby.cloud"},"Lamby")," project. The architecture of Lambda Containers works so well with Rails since our framework distills everything from HTTP, Jobs, Events, & WebSocket connections down to Docker's ",(0,n.kt)("inlineCode",{parentName:"p"},"CMD")," interface. The architecture above at the proxy layer was easy to build and connect up to our single delegate function, ",(0,n.kt)("inlineCode",{parentName:"p"},"Lamby.cmd"),". Shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://lamby.cloud/img/blog/tailscale/live-development-proxy-detail.png",alt:"Architecture diagram of the use of a Lambda development proxy for WebSockets with API Gateway."})),(0,n.kt)("p",null,"For our Rails application on Lambda, here are the changes we made to leverage this. All outlined in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rails-lambda/websocket-demo/pull/4"},"WebSockets Demo Pull Request"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Created a ",(0,n.kt)("inlineCode",{parentName:"li"},".localdev")," folder. Added a copy of our SAM template.yaml for all AWS Resources."),(0,n.kt)("li",{parentName:"ul"},"Made a simple ",(0,n.kt)("inlineCode",{parentName:"li"},".localdev/Dockerfile")," that included the Tailscale Extension along with basic proxy code."),(0,n.kt)("li",{parentName:"ul"},"Leveraged Lamby's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rails-lambda/lamby/pull/164"},"Local Development Proxy Sever"),"."),(0,n.kt)("li",{parentName:"ul"},"Ensured our Devcontainers exposed port 3000 to all local network devices so Tailscale could detect the service.")),(0,n.kt)("p",null,"I hope you find reasons to learn more about Tailscale and how using a SOCKS5 proxy from Lambda could help your development or production needs. More so, I hope you like the new Lambda Extension project of ours making it easy for containerized applications to use. Drop us a comment if you do."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/rails-lambda/tailscale-extension"},"\ud83d\udd17 Tailscale Lambda Extension for Containers"))," on GitHub \ud83d\udc19"))}m.isMDXComponent=!0}}]);