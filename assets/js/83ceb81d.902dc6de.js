"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[3741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:10},i="tRPC",s={unversionedId:"research/distributed communication/trpc",id:"research/distributed communication/trpc",title:"tRPC",description:"tRPC, or Typescript Remote Procedure Call, is an alternative to REST or GraphQL that provides type safety between the front-end and back-end.",source:"@site/docs/research/distributed communication/trpc.md",sourceDirName:"research/distributed communication",slug:"/research/distributed communication/trpc",permalink:"/docs/research/distributed communication/trpc",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/distributed communication/trpc.md",tags:[],version:"current",lastUpdatedBy:"Marc Muller",lastUpdatedAt:1678275136,formattedLastUpdatedAt:"Mar 8, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"REST",permalink:"/docs/research/distributed communication/rest"},next:{title:"GraphQL",permalink:"/docs/research/distributed communication/graphql"}},c={},p=[],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trpc"},"tRPC"),(0,a.kt)("p",null,"tRPC, or Typescript Remote Procedure Call, is an alternative to REST or GraphQL that provides type safety between the front-end and back-end."),(0,a.kt)("h1",{id:"advantages-of-trpc"},"Advantages of tRPC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fullstack typesafety"),": tRPC uses typescript to provide fullstack typesafety. This means that the front-end and back-end can both use typescript to ensure that the data is correct."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to use"),": tRPC is very easy to use, because it is based on typescript, it is very easy to use typescript to define the data that is sent and received."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Framework agnostic"),": tRPC is framework agnostic, which means that it can be used with any framework, such as React, Vue, Svelte, Next.js, etc.")),(0,a.kt)("h1",{id:"disadvantages-of-trpc"},"Disadvantages of tRPC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monorepo required"),": tRPC requires a monorepo, which means that both the front-end and back-end have to be in the same repository."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Slow and big payloads"),": tRPC is slower and has bigger payloads than both REST and GraphQL, because it encodes the type of the data in each request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No Golang support"),": tRPC is based on typescript so it does not support Golang, which is the language we use in the back-end.")),(0,a.kt)("h1",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"To conclude the research on whether tRPC is a good fit for mindspaces, tRPC is not a good fit for mindspaces because we want to use Golang in the back-end, which tRPC does not support. REST and GraphQL both support the use of Golang."),(0,a.kt)("h1",{id:"sources"},"Sources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://trpc.io/"},"tRPC"))))}d.isMDXComponent=!0}}]);