"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[4098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Documentation",s={unversionedId:"development/tooling/docs",id:"development/tooling/docs",title:"Documentation",description:"Reading, writing, and maintaining documentation is an important part of any project. This section will help you get started with the documentation for MindSpaces. The documentation is written in Markdown and is located in the docs directory. The documentation is built using Docusaurus, which is a static site generator. The documentation is built and deployed to GitHub Pages.",source:"@site/docs/development/tooling/docs.md",sourceDirName:"development/tooling",slug:"/development/tooling/docs",permalink:"/nl/docs/development/tooling/docs",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/development/tooling/docs.md",tags:[],version:"current",lastUpdatedBy:"Kane Petra",lastUpdatedAt:1678114510,formattedLastUpdatedAt:"6 mrt 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tooling",permalink:"/nl/docs/development/tooling/"},next:{title:"Glossary",permalink:"/nl/docs/glossary"}},l={},c=[{value:"Layout",id:"layout",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Reading, writing, and maintaining documentation is an important part of any project. This section will help you get started with the documentation for MindSpaces. The documentation is written in Markdown and is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory. The documentation is built using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", which is a static site generator. The documentation is built and deployed to GitHub Pages."),(0,o.kt)("h2",{id:"layout"},"Layout"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you feel like your page doesn't fit into any of these categories, you can always create a new category. However, it is recommended that you try to fit your page into one of the existing categories first. If you do feel like you need to create a new category, please ask first.")),(0,o.kt)("p",null,"The documentation is organized into several sections, there are three top level categories: ",(0,o.kt)("a",{parentName:"p",href:"/docs/research/index.md"},"Research"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/index.md"},"Design")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/index.md"},"Development"),". Outside of these categories there are also a few top level documentation pages: ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro.md"},"Introduction"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/index.md"},"Getting Started")," and the ",(0,o.kt)("a",{parentName:"p",href:"/nl/docs/glossary"},"Glossary"),". When adding a new page, it should be added to one of these categories."),(0,o.kt)("p",null,"So, what category should you add your page to? The categories are meant to be broad and general. If you are unsure which category to add your page to, you can always ask. However, a good rule of thumb is the following examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Research:")," This category is suitable for pages that cover research activities related to MindSpaces. It includes things like market research, audience research, and technology research. Use this category if your page is focused on exploring a problem, identifying user needs, or investigating new technologies.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Design:")," This category is suitable for pages that cover the design aspect of MindSpaces. It includes things like user experience design, software design, and graphic design. Use this category if your page is focused on the visual and interactive aspects of the project, and how users will interact with the software. This category is also used for designing the software architecture.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Development:")," This category is suitable for pages that cover the development aspect of the software project. It includes things like software architecture, programming, testing, and deployment. Use this category if your page is focused on the technical details of building and deploying the software."))),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"To ensure that our documentation remains clear, consistent, and helpful, we ask that all pages be written in English. However, if you would like to contribute to translations in other languages, please reach out as translations are always welcome."),(0,o.kt)("p",null,"To contribute to the documentation, please follow these guidelines:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Choose the appropriate category:")," When adding a new page or updating an existing one, please make sure to choose the appropriate category based on the content of the page. This will help keep the documentation organized and easy to navigate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use consistent formatting:")," Please use consistent formatting throughout the documentation. This includes headings, lists, and code blocks. If you are unsure of how to format something, please refer to existing pages for guidance.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use clear and concise language:")," Please use clear and concise language throughout the documentation. Avoid jargon or technical terms that may be unfamiliar to readers. If terms are used that may be unfamiliar to readers, please add them to the ",(0,o.kt)("a",{parentName:"p",href:"/nl/docs/glossary"},"Glossary")," and link to it from the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide examples where appropriate:")," When discussing technical concepts or features, it can be helpful to provide examples to illustrate your points. Please provide examples where appropriate to help readers understand the content.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Check your work:")," Before submitting your changes, please double-check your work to make sure it is accurate and free of errors. This will help ensure that our documentation remains helpful and reliable."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thank you for your contributions to our documentation!")),(0,o.kt)("p",null,"If you have any questions or need further guidance, please don't hesitate to reach out."))}u.isMDXComponent=!0}}]);