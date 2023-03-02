"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[7933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:20},a="Getting Started",s={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting Started",description:"Before you can start developing, you need to setup your development environment. This section will help you do that. MindSpaces uses a lot of different technologies, so it can be a bit overwhelming at first. But don't worry, we will guide you through the process.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/nl/docs/getting-started/",draft:!1,editUrl:"https://github.com/mindspaces-fontys/mindspaces-fontys.github.io/edit/main/docs/getting-started/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/nl/docs/intro"},next:{title:"Research",permalink:"/nl/docs/research/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development Setup",id:"development-setup",level:2},{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Before you can start developing, you need to setup your development environment. This section will help you do that. MindSpaces uses a lot of different technologies, so it can be a bit overwhelming at first. But don't worry, we will guide you through the process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you can start developing, you need to install the following tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),": Git is a version control system. It allows you to keep track of changes to the codebase. It also allows you to collaborate with other developers. We use Git to manage the codebase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js"),": Node.js is a JavaScript runtime. It allows you to run JavaScript code outside of the browser. We use Node.js to run the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),": Docker is a containerization tool. It allows you to run applications in isolated containers. We use Docker to run the codebase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),": Docker Compose is a tool for defining and running multi-container Docker applications. We use Docker Compose to run the codebase."))),(0,r.kt)("h2",{id:"development-setup"},"Development Setup"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are looking for instructions on how to setup the production environment, please visit the ",(0,r.kt)("a",{parentName:"p",href:"/community/getting-started"},"Production Setup")," page.")),(0,r.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the Repository"),(0,r.kt)("p",null,"The first step is to clone the repository. You can do this by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://\n")))}d.isMDXComponent=!0}}]);