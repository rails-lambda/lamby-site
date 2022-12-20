"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Quick Start","href":"/docs/quick-start","docId":"quick-start"},{"type":"link","label":"How Lamby Works","href":"/docs/anatomy","docId":"anatomy"},{"type":"link","label":"ENV Variables & Secrets","href":"/docs/environment","docId":"environment"},{"type":"link","label":"Database & VPCs","href":"/docs/database","docId":"database"},{"type":"link","label":"JavaScript & Assets","href":"/docs/assets","docId":"assets"},{"type":"link","label":"Logging & Observability","href":"/docs/observability","docId":"observability"},{"type":"link","label":"ActiveJob & Background Processing","href":"/docs/activejob","docId":"activejob"},{"type":"link","label":"Running Tasks","href":"/docs/running-tasks","docId":"running-tasks"},{"type":"link","label":"Custom Domain Names","href":"/docs/custom-domain","docId":"custom-domain"},{"type":"link","label":"Web Proxy Integrations","href":"/docs/webservers","docId":"webservers"},{"type":"link","label":"Cold Starts","href":"/docs/cold-starts","docId":"cold-starts"}]},"docs":{"activejob":{"id":"activejob","title":"ActiveJob & Background Processing","description":"Lambdakiq","sidebar":"docsSidebar"},"anatomy":{"id":"anatomy","title":"How Lamby Works","description":"The quickest way to see Lamby in action is to create a new Rails app via our cookiecutter project template using our  guide. This guide will instead outline what is happening within that starter project allowing you to cherry-pick which files and/or practices from our cookiecutter project can be applied to your own application(s).","sidebar":"docsSidebar"},"assets":{"id":"assets","title":"JavaScript & Assets","description":"Assets require a  to link properly when using API Gateway.","sidebar":"docsSidebar"},"cold-starts":{"id":"cold-starts","title":"Cold Starts","description":"Cold starts (or init times) are an incredibly addictive topic. In many cases they can be ignored as an optimization to perform when the time and data suggests action. In practice, the more traffic your function handles the less likely cold starts are an issue since they statistically disappear under the 99th percentile. However in rare cases, you may want to optimize for them. This guide can help you make decisions on how to go about it.","sidebar":"docsSidebar"},"custom-domain":{"id":"custom-domain","title":"Custom Domain Names","description":"If you are following our  pattern, then you are using Lambda\'s free Function URLs. Using a custom domain name with FURLs is as easy as adding CloudFront. FURLs also work out of the box with .","sidebar":"docsSidebar"},"database":{"id":"database","title":"Database & VPCs","description":"Any database supported by Ruby or Rails can be used with Lambda assuming your VPC/Network allows those connections. This guide will not get into the details on how to setup or use various databases options within AWS itself like RDS, Aurora, or DynamoDB. However, we will address a few high level topics along with some conventions in our  project.","sidebar":"docsSidebar"},"environment":{"id":"environment","title":"ENV Variables & Secrets","description":"Most Rails applications require over a dozen environment variables to configure itself along with other popular gems used. Most notable is ActiveRecord\'s DATABASE_URL. There are numerous ways to configure environment variables ranging from \\"quick and dirty\\" by adding secrets to your git repo (\u26a0\ufe0f) all the way to a strict \\"separation of config\\" from code using countless methods to achieve a proper Twelve-Factor application. We want to cover a few topics that may help you pick and choose what works best for you.","sidebar":"docsSidebar"},"observability":{"id":"observability","title":"Logging & Observability","description":"One of the greatest things of AWS Lambda is that you get all the benfits of CloudWatch logging built into the platform. Logging is just a simple Ruby puts command away. Here are a few amazing things to help you succeed with good logging and observability patterns in AWS with CloudWatch.","sidebar":"docsSidebar"},"quick-start":{"id":"quick-start","title":"Quick Start","description":"Deploy a new Rails APP to Lambda in 5 minutes!","sidebar":"docsSidebar"},"running-tasks":{"id":"running-tasks","title":"Running Tasks","description":"It can be common for Rails engineers to fire up the Rails console for some quick debugging or to run code like a Rake task. That said, console\'ing into a Lambda function is simply not an option and requires a different solution for on-demand tasks.","sidebar":"docsSidebar"},"webservers":{"id":"webservers","title":"Web Proxy Integrations","description":"We recommend using Lambda Function URLs which are free, work with JavaScript & CSS assets out of the box, and are easy to map to a custom domain name. However, here are some SAM YAML snippets if you would like to use an alternate web server integration for your application. Remember, Lamby automatically detects which integration you are using.","sidebar":"docsSidebar"}}}')}}]);