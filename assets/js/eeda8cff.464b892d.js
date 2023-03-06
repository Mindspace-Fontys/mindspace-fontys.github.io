"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:10},o="Architecture",s={unversionedId:"research/architecture/index",id:"research/architecture/index",title:"Architecture",description:"This section contains information about the architecture of MindSpaces. For our",source:"@site/docs/research/architecture/index.md",sourceDirName:"research/architecture",slug:"/research/architecture/",permalink:"/docs/research/architecture/",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/architecture/index.md",tags:[],version:"current",lastUpdatedBy:"Nick van Oijen",lastUpdatedAt:1678113399,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Research",permalink:"/docs/research/"},next:{title:"Microservices",permalink:"/docs/research/architecture/microservices"}},c={},l=[{value:"Distributed Architectures",id:"distributed-architectures",level:2},{value:"Serverless &amp; Microservices vs Monolithic",id:"serverless--microservices-vs-monolithic",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"This section contains information about the architecture of MindSpaces. For our\nresearch, we are considering two different architectures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/research/architecture/microservices"},"Microservices"),": This architecture is based on the\nmicroservices architecture. It is a distributed architecture where each\nservice is a separate process. The services communicate with each other\nusing a message broker.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/research/architecture/serverless"},"Serverless"),": This architecture is based on the serverless\narchitecture. It is a distributed architecture where each service is a\nseparate function. It allows developers to focus on writing and deploying code without having to manage the underlying infrastructure. Instead of provisioning and managing servers, serverless architecture leverages cloud computing services to automatically allocate and manage the resources needed to run the code"))),(0,n.kt)("h2",{id:"distributed-architectures"},"Distributed Architectures"),(0,n.kt)("p",null,"For MindSpaces we chose to go with a distributed architecture. This\nis for a few reasons. Initially due to the requirement from school, however, the research has shown that this is a good fit for MindSpaces."),(0,n.kt)("p",null,"Distributed architectures are a good fit for MindSpaces because it allows us to scale the project independently. For example, if we want to scale the project to support more users, we can scale the user service without having to scale the other services. This is not possible with a monolithic architecture."),(0,n.kt)("p",null,"Another reason why a distributed architecture is a good fit for MindSpaces, is because it allows us to make each service independent. This means that we can\nkeep them simple and focused on a single task. This makes it easier to understand\nand maintain the codebase."),(0,n.kt)("p",null,"Finally, a monolithic architecture is not a good fit for MindSpaces because it\nis not a good fit for a distributed team. Our team contains more than five members that work both on-site and remotely. Synchronizing the work of a monolithic architecture can be difficult. Certainly not impossible, but it is easier to work with a distributed architecture when you have a distributed team."),(0,n.kt)("h2",{id:"serverless--microservices-vs-monolithic"},"Serverless & Microservices vs Monolithic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"+= good fit | - = bad fit | o = neutral | x = not applicable")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature"),(0,n.kt)("th",{parentName:"tr",align:null},"Serverless"),(0,n.kt)("th",{parentName:"tr",align:null},"Microservices"),(0,n.kt)("th",{parentName:"tr",align:null},"Monolithic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scalability"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maintainability"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Complexity"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Security"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cost"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Team Development"),(0,n.kt)("td",{parentName:"tr",align:null},"o"),(0,n.kt)("td",{parentName:"tr",align:null},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this section, we have discussed the two different architectures that we are\nconsidering for MindSpaces. We have also discussed why these architectures are\na good fit for MindSpaces."),(0,n.kt)("p",null,"Our final choice is ..."))}p.isMDXComponent=!0}}]);