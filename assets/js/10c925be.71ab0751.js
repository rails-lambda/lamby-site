"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,p=d["".concat(l,".").concat(m)]||d[m]||g[m]||r;return a?o.createElement(p,i(i({ref:t},u),{},{components:a})):o.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(7294);const n={anatomy:"How Lamby Works",cpu:"CPU Architecture",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function r(e){let{id:t,name:a}=e;const r=a||n[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return o.createElement("a",{href:`/docs/${t}`},r)}},6325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=a(7462),n=(a(7294),a(3905)),r=a(304);const i={id:"observability",title:"Logging & Observability",toc_max_heading_level:2},s="Logging & Observability",l={unversionedId:"observability",id:"observability",title:"Logging & Observability",description:"One of the greatest things of AWS Lambda is that you get all the benfits of CloudWatch logging built into the platform. Logging is just a simple Ruby puts command away. Here are a few amazing things to help you succeed with good logging and observability patterns in AWS with CloudWatch.",source:"@site/docs/observability.mdx",sourceDirName:".",slug:"/observability",permalink:"/docs/observability",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/master/docs/observability.mdx",tags:[],version:"current",frontMatter:{id:"observability",title:"Logging & Observability",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"JavaScript & Assets",permalink:"/docs/assets"},next:{title:"ActiveJob & Background Processing",permalink:"/docs/activejob"}},c={},u=[{value:"STDOUT is a Must!",id:"stdout-is-a-must",level:2},{value:"Using Lograge",id:"using-lograge",level:2},{value:"CloudWatch Log Insights",id:"cloudwatch-log-insights",level:2},{value:"CloudWatch Embedded Metrics",id:"cloudwatch-embedded-metrics",level:2},{value:"New Relic",id:"new-relic",level:2}],d={toc:u};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logging--observability"},"Logging & Observability"),(0,n.kt)("p",null,"One of the greatest things of AWS Lambda is that you get all the benfits of CloudWatch logging built into the platform. Logging is just a simple Ruby ",(0,n.kt)("inlineCode",{parentName:"p"},"puts")," command away. Here are a few amazing things to help you succeed with good logging and observability patterns in AWS with CloudWatch."),(0,n.kt)("h2",{id:"stdout-is-a-must"},"STDOUT is a Must!"),(0,n.kt)("p",null,"Lambda is a read-only file system. The Lamby gem will set the ",(0,n.kt)("inlineCode",{parentName:"p"},"RAILS_LOG_TO_STDOUT")," environment variable on your behalf. It also freedom patches the core Ruby ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger")," class to force STDOUT. That said, be on the lookout for any rogue disk-based logging you may have to address. Older Rails applications may have to use a pattern like this."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="config/environments/production.rb"',title:'"config/environments/production.rb"'},"logger = ActiveSupport::Logger.new(STDOUT)\nlogger.formatter = ActiveSupport::Logger::SimpleFormatter.new\nconfig.logger = logger\nconfig.log_level = :info\n")),(0,n.kt)("h2",{id:"using-lograge"},"Using Lograge"),(0,n.kt)("p",null,"Our ",(0,n.kt)(r.Z,{id:"quick-start",name:"cookiecutter",mdxType:"DocLink"})," installs and configures the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/roidrage/lograge"},"Lograge")," gem to reduce CloudWatch data costs while easily allowing CloudWatch Insights to parse and query your logs. If your project is not using Lograge, please consider adding it as we do."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Gemfile"',title:'"Gemfile"'},"gem 'lograge'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="config/environments/production.rb"',title:'"config/environments/production.rb"'},"config.lograge.enabled = true\nconfig.lograge.formatter = Lograge::Formatters::Json.new\nconfig.lograge.custom_payload do |controller|\n  { requestid: controller.request.request_id }\nend\n")),(0,n.kt)("h2",{id:"cloudwatch-log-insights"},"CloudWatch Log Insights"),(0,n.kt)("p",null,"CloudWatch Logs Insights enables you to interactively search and analyze your log data in Amazon CloudWatch Logs. You can perform queries to help you quickly and effectively respond to operational issues. If an issue occurs, you can use CloudWatch Logs Insights to identify potential causes and validate deployed fixes."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2s2xcwm8QrM"},"\ud83c\udfa5 YouTube: Analyze Log Data with CloudWatch Logs Insights")),(0,n.kt)("h2",{id:"cloudwatch-embedded-metrics"},"CloudWatch Embedded Metrics"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mt/enhancing-workload-observability-using-amazon-cloudwatch-embedded-metric-format/"},"CloudWatch Embedded Metric Format")," enables CloudWatch to ingest complex high-cardinality application data in the form of logs and easily generate actionable metrics and alarms from them. By sending your logs in the new Embedded Metric Format, you can now easily create custom metrics without having to instrument or maintain separate code, while gaining powerful analytical capabilities on your log data. You can get started with embedded metrics by using our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/customink/aws-embedded-metrics-customink"},"customink/aws-embedded-metrics-customink")," Ruby gem. The following Lamby-friendly libraries use this format:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/customink/crypteia"},"Crypteia"),": SSM Parameters as secure ENV variables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/customink/lambdakiq"},"Lambdakiq"),": ActiveJob on SQS & Lambda.")),(0,n.kt)("h2",{id:"new-relic"},"New Relic"),(0,n.kt)("p",null,"Some older Application Performance Monitor (APM) gems can be used with Lambda but you must flush their data after each request in a way that does not impact response performance. You can do this with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/customink/lambda_punch"},"LambdaPunch"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"config.lambda.handled_proc = Proc.new do |_event, context|\n  LambdaPunch.push { NewRelic::Agent.agent.flush_pipe_data }\n  LambdaPunch.handled!(context)\nend\n")),(0,n.kt)("a",{href:"https://github.com/customink/lambda_punch"},(0,n.kt)("img",{alt:"Async Processing Using Lambda Extensions",src:a(5915).Z,style:{width:"100%",marginBottom:"0.5rem"}})))}g.isMDXComponent=!0},5915:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/lambdapunch-b6fb9d6edbbc85d7d14f0230629a6278.png"}}]);