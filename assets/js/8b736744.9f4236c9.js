"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[6814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:10},o="REST",s={unversionedId:"research/distributed communication/rest",id:"research/distributed communication/rest",title:"REST",description:"REST (Representational State Transfer) is a software architectural style that is commonly used for creating web services. It is based on the HTTP protocol and uses HTTP methods and responses to enable communication between client and server. REST provides a standard interface for accessing and manipulating resources.",source:"@site/docs/research/distributed communication/rest.md",sourceDirName:"research/distributed communication",slug:"/research/distributed communication/rest",permalink:"/docs/research/distributed communication/rest",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/distributed communication/rest.md",tags:[],version:"current",lastUpdatedBy:"Marc Muller",lastUpdatedAt:1678275136,formattedLastUpdatedAt:"Mar 8, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Distributed Communication",permalink:"/docs/research/distributed communication/"},next:{title:"tRPC",permalink:"/docs/research/distributed communication/trpc"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rest"},"REST"),(0,n.kt)("p",null,"REST (Representational State Transfer) is a software architectural style that is commonly used for creating web services. It is based on the HTTP protocol and uses HTTP methods and responses to enable communication between client and server. REST provides a standard interface for accessing and manipulating resources."),(0,n.kt)("h1",{id:"advantages-of-rest"},"Advantages of REST"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Performance"),": REST is very performant because it is very simple. This means that REST queries take less time than similar GraphQL queries."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Widespread adoption"),": REST is used by 93.4% of API developers according to Nordic API's, which means that there are a lot of tools for REST. This means that you don't have to create your own security tools for REST."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Complexity"),": REST is a software architectural style, it does have a lot of features, so it is not as complex as GraphQL.")),(0,n.kt)("h1",{id:"disadvantage-of-rest"},"Disadvantage of REST"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexibility"),": REST is not very flexible because it doesn't allow the client to select exactly what they need. This means that the client can't fine-tune their queries to get a smaller payload, which results in a slower query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type safety"),": REST is not very type safe because it doesn't have a strict schema. This means that the client and the back-end can differ from schema. This might be a source of bugs.")),(0,n.kt)("h1",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In conclusion, REST is a widely adopted software architectural style used for creating web services. It is simple, performant, and has a lot of tools available. However, it does lack flexibility and type safety, which can result in slower queries and potential bugs. Despite its limitations, REST remains a popular choice for API developers due to its simplicity and performance. It is important for developers to carefully consider the trade-offs between REST and other options such as GraphQL when choosing the best solution for their specific needs. For example if you need a defined schema to which both the client and the back-end can adhere, GraphQL might be a better choice. However, if you need a simple, performant, and widely adopted solution, REST might be a better choice."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql"},"REST Complexity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nordicapis.com/20-impressive-api-economy-statistics/#:~:text=93.4%25%20of%20API%20Developers%20Are%20Still%20Using%20RESTtext=However%2C%20REST%20remains%20the%20most,a%20staggering%2093.4%25%20adoption%20rate."},"Nordic API's"))))}p.isMDXComponent=!0}}]);