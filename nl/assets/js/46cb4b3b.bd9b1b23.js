"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[8045],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,o(o({ref:e},u),{},{components:n})):r.createElement(b,o({ref:e},u))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4707:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:20},o="Distributed Communication",l={unversionedId:"research/distributed communication/index",id:"research/distributed communication/index",title:"Distributed Communication",description:"This section contains research about the communication between our distributed system (backend) and our front-end, in the research we are considering three options:",source:"@site/docs/research/distributed communication/index.md",sourceDirName:"research/distributed communication",slug:"/research/distributed communication/",permalink:"/nl/docs/research/distributed communication/",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/distributed communication/index.md",tags:[],version:"current",lastUpdatedBy:"Nick van Oijen",lastUpdatedAt:1678113399,formattedLastUpdatedAt:"6 mrt 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Serverless",permalink:"/nl/docs/research/architecture/serverless"},next:{title:"REST",permalink:"/nl/docs/research/distributed communication/rest"}},s={},c=[],u={toc:c},d="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distributed-communication"},"Distributed Communication"),(0,a.kt)("p",null,"This section contains research about the communication between our distributed system (backend) and our front-end, in the research we are considering three options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"rest"},"REST"),": Is an architectural style for designing web services that use HTTP methods and responses to enable communication between client and server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"graphql"},"GraphQL"),": Is a query language and runtime for APIs that allows clients to request and receive only the data they need, and enables powerful developer tools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"trpc"},"tRPC"),": Is an alternative to REST and GraphQL that uses TypeScript and Protocol Buffers to provide type safety, performance, and ease of use.")),(0,a.kt)("h1",{id:"why-trpc-is-not-an-option"},"Why tRPC is not an option"),(0,a.kt)("p",null,"In the section tRPC we researched the viability of using tRPC for the communication between our backend and our front-end. In this research we came to a conclusion that tRPC is not a viable option to use for Mindspaces. Our backend uses Golang which tRPC does not support, so tRPC would only be an option if we would use typescript as our backend, which we chose not to do."),(0,a.kt)("h1",{id:"rest-vs-graphql"},"REST vs GraphQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"+= good fit | - = bad fit | o = neutral | x = not applicable")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"REST"),(0,a.kt)("th",{parentName:"tr",align:null},"GrapQL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maintainability"),(0,a.kt)("td",{parentName:"tr",align:null},"o"),(0,a.kt)("td",{parentName:"tr",align:null},"+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Complexity"),(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Performance"),(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flexibility"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Schema validation"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Security"),(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h1",{id:"conclusion"},"Conclusion"))}p.isMDXComponent=!0}}]);