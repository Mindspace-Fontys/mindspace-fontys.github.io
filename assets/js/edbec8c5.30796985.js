"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[4098],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},i="Documentation",s={unversionedId:"development/tooling/docs",id:"development/tooling/docs",title:"Documentation",description:"Reading, writing, and maintaining documentation is an important part of any project. This section will help you get started with the documentation for MindSpaces. The documentation is written in Markdown and is located in the docs directory. The documentation is built using Docusaurus, which is a static site generator. The documentation is built and deployed to GitHub Pages.",source:"@site/docs/development/tooling/docs.md",sourceDirName:"development/tooling",slug:"/development/tooling/docs",permalink:"/docs/development/tooling/docs",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/development/tooling/docs.md",tags:[],version:"current",lastUpdatedBy:"Kane",lastUpdatedAt:1678277248,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tooling",permalink:"/docs/development/tooling/"},next:{title:"Glossary",permalink:"/docs/glossary"}},l={},c=[{value:"Layout",id:"layout",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Reading, writing, and maintaining documentation is an important part of any project. This section will help you get started with the documentation for MindSpaces. The documentation is written in Markdown and is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory. The documentation is built using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", which is a static site generator. The documentation is built and deployed to GitHub Pages."),(0,o.kt)("h2",{id:"layout"},"Layout"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you feel like your page doesn't fit into any of these categories, you can always create a new category. However, it is recommended that you try to fit your page into one of the existing categories first. If you do feel like you need to create a new category, please ask first.")),(0,o.kt)("p",null,"The documentation is organized into several sections, there are three top level categories: ",(0,o.kt)("a",{parentName:"p",href:"/docs/research/"},"Research"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/"},"Design")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/"},"Development"),". Outside of these categories there are also a few top level documentation pages: ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro"},"Introduction"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/"},"Getting Started")," and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary"},"Glossary"),". When adding a new page, it should be added to one of these categories."),(0,o.kt)("p",null,"So, what category should you add your page to? The categories are meant to be broad and general. If you are unsure which category to add your page to, you can always ask. However, a good rule of thumb is the following examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Research:")," This category is suitable for pages that cover research activities related to MindSpaces. It includes things like market research, audience research, and technology research. Use this category if your page is focused on exploring a problem, identifying user needs, or investigating new technologies.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Design:")," This category is suitable for pages that cover the design aspect of MindSpaces. It includes things like user experience design, software design, and graphic design. Use this category if your page is focused on the visual and interactive aspects of the project, and how users will interact with the software. This category is also used for designing the software architecture.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Development:")," This category is suitable for pages that cover the development aspect of the software project. It includes things like software architecture, programming, testing, and deployment. Use this category if your page is focused on the technical details of building and deploying the software."))),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"To ensure that our documentation remains clear, consistent, and helpful, we ask that all pages be written in English. However, if you would like to contribute to translations in other languages, please reach out as translations are always welcome."),(0,o.kt)("p",null,"To contribute to the documentation, please follow these guidelines:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Choose the appropriate category:")," When adding a new page or updating an existing one, please make sure to choose the appropriate category based on the content of the page. This will help keep the documentation organized and easy to navigate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use consistent formatting:")," Please use consistent formatting throughout the documentation. This includes headings, lists, and code blocks. If you are unsure of how to format something, please refer to existing pages for guidance.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use clear and concise language:")," Please use clear and concise language throughout the documentation. Avoid jargon or technical terms that may be unfamiliar to readers. If terms are used that may be unfamiliar to readers, please add them to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary"},"Glossary")," and link to it from the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide examples where appropriate:")," When discussing technical concepts or features, it can be helpful to provide examples to illustrate your points. Please provide examples where appropriate to help readers understand the content.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Check your work:")," Before submitting your changes, please double-check your work to make sure it is accurate and free of errors. This will help ensure that our documentation remains helpful and reliable."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thank you for your contributions to our documentation!")),(0,o.kt)("p",null,"If you have any questions or need further guidance, please don't hesitate to reach out."))}d.isMDXComponent=!0}}]);