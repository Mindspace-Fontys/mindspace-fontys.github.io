"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[4197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={title:"Serverless"},i="Serverless Architecture",o={unversionedId:"research/architecture/serverless",id:"research/architecture/serverless",title:"Serverless",description:"A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS or another cloud service. You no longer have to provision, scale, and maintain servers to run your applications, databases, and storage systems.",source:"@site/docs/research/architecture/serverless.md",sourceDirName:"research/architecture",slug:"/research/architecture/serverless",permalink:"/docs/research/architecture/serverless",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/architecture/serverless.md",tags:[],version:"current",lastUpdatedBy:"Kane",lastUpdatedAt:1678713911,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Serverless"},sidebar:"tutorialSidebar",previous:{title:"Microservices",permalink:"/docs/research/architecture/microservices"},next:{title:"Distributed Communication",permalink:"/docs/research/distributed communication/"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"How Serverless Architecture Works",id:"how-serverless-architecture-works",level:3},{value:"Fundamental Concepts in Serverless Architecture",id:"fundamental-concepts-in-serverless-architecture",level:3},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serverless-architecture"},"Serverless Architecture"),(0,n.kt)("p",null,"A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS or another cloud service. You no longer have to provision, scale, and maintain servers to run your applications, databases, and storage systems. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Serverless Architecture",src:r(3773).Z,width:"838",height:"474"})),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"First I will  define how I think serverless works."),(0,n.kt)("h3",{id:"how-serverless-architecture-works"},"How Serverless Architecture Works"),(0,n.kt)("p",null,"Servers facilitate communication between users and applications, allowing access to business logic. However, server management requires significant time and resources. Teams are responsible for maintaining server hardware, software and security updates, and creating backups in case of system failures. By embracing serverless architecture, developers can delegate these responsibilities to third-party providers, allowing them to focus on writing application code."),(0,n.kt)("p",null,"One of the most widely-used serverless architectures is Function as a Service (FaaS), in which developers write application code as discrete functions. Each function performs a specific task when triggered by an event, such as an incoming email or an HTTP request. After testing, developers deploy their functions and triggers to a cloud provider account. When a function is invoked, the cloud provider executes it on a running server, or spins up a new server for execution if none are running. This execution process is abstracted from developers' view, who can concentrate on writing and deploying the application code. Function as a Service (FaaS) is a popular type of serverless architecture that enables developers to focus on application code."),(0,n.kt)("p",null,"Although serverless architecture has been available for more than a decade, Amazon introduced the first mainstream FaaS platform, AWS Lambda, in 2014. Currently, the majority of developers use AWS Lambda to build serverless applications. Nevertheless, Google and Microsoft also offer their own FaaS platforms, called Google Cloud Functions (GCF) and Azure Functions, respectively."),(0,n.kt)("h3",{id:"fundamental-concepts-in-serverless-architecture"},"Fundamental Concepts in Serverless Architecture"),(0,n.kt)("p",null,"Despite eliminating the need for server management, serverless architecture has a steep learning curve, particularly when chaining multiple functions together to create complex workflows in an application. To ease this process, it is beneficial to acquaint oneself with the following fundamental serverless terms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Invocation"),": A single function execution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Duration"),": The time it takes for a serverless function to execute.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cold Start"),": The latency that occurs when a function is triggered for the first time or after a period of inactivity.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Concurrency Limit"),": The number of function instances that can run simultaneously in one region, as determined by the cloud provider. A function will be throttled if it exceeds this limit.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Timeout"),": The amount of time that a cloud provider allows a function to run before terminating it. Most providers set a default timeout and a maximum timeout."))),(0,n.kt)("p",null,"Keep in mind that each cloud provider may use different terminology and set unique limits on serverless functions, but the list above defines the basic concepts."),(0,n.kt)("h2",{id:"advantages"},"Advantages"),(0,n.kt)("p",null,"In recent years, there has been a notable surge in serverless adoption, with almost 40 percent of companies worldwide utilizing it in some capacity. Both small startups and global corporations are leveraging serverless architectures for the following reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cost"),": Cloud providers charge you on a per-invocation basis, so you\u2019re not paying for unused servers or virtual machines.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Scalability"),": Function instances are automatically created or removed in response to traffic variations, within the boundaries of concurrency limits.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Productivity"),": Engineers who use serverless can simply deploy their code without having to manage any servers, which helps accelerate delivery cycles and rapidly scale company operations."))),(0,n.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Loss of Control"),": In serverless environments, you lack control over the software stack that your code runs on. If a hardware fault, data center outage, or other issue impacts one of your servers, you\u2019re dependent on a cloud provider to fix it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Security"),": A cloud provider may run code from several of their customers on the same server at the same time. If the shared server isn\u2019t configured properly, your application data could be exposed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Performance Impact"),": Cold starts are common in serverless environments, adding several seconds of latency to code execution when functions are invoked after a period of inactivity.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Testing"),": Developers can run unit tests on function code, but integration tests, which evaluate how frontend and backend components interact, are difficult to perform in a serverless environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Vendor Lock-In"),": Large cloud providers like AWS offer several services\u2014such as databases, messaging queues, and APIs\u2014that you can use in harmony to run serverless applications. Although it\u2019s possible to mix and match elements from different vendors, services from a single provider are designed to integrate most seamlessly."))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this section, I have presented an overview of serverless architecture and evaluated its pros and cons. Now, I would like to elaborate on why I believe this architecture aligns well with MindSpaces."),(0,n.kt)("p",null,"MindSpaces is well-suited for serverless architecture as it enables us to develop a lightweight application that can be effortlessly maintained. With rapid iteration cycles, we can quickly adjust and improve the application. Additionally, I believe that alternative architectures, such as microservices, may be overly complex for this project."),(0,n.kt)("p",null,"Although MindSpaces may benefit from serverless architecture, the college requirements mandate the use of a microservices architecture. Therefore, we will leverage the advantages of microservices while ensuring that the architecture remains manageable and adaptable for the needs of our project."))}d.isMDXComponent=!0},3773:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/serverless-a8fe5adb70a301a01e433672cc32e60e.png"}}]);