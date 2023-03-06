"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[2830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),h=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:20},i="GraphQL",s={unversionedId:"research/distributed communication/graphql",id:"research/distributed communication/graphql",title:"GraphQL",description:"GraphQL is a query language and runtime for APIs that allows clients to request and receive only the data they need. It does this by having a strict schema from which the client selects each field they want from a request. This allows the client to fetch exactly what they need and they don't over- or under-fetch the data. Because of this, GraphQL is a very powerful tool, but with powerful tools, there are often other drawbacks.",source:"@site/docs/research/distributed communication/graphql.md",sourceDirName:"research/distributed communication",slug:"/research/distributed communication/graphql",permalink:"/docs/research/distributed communication/graphql",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/distributed communication/graphql.md",tags:[],version:"current",lastUpdatedBy:"Kane Petra",lastUpdatedAt:1678114510,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"tRPC",permalink:"/docs/research/distributed communication/trpc"},next:{title:"Languages",permalink:"/docs/research/languages/"}},c={},h=[],l={toc:h},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphql"},"GraphQL"),(0,n.kt)("p",null,"GraphQL is a query language and runtime for APIs that allows clients to request and receive only the data they need. It does this by having a strict schema from which the client selects each field they want from a request. This allows the client to fetch exactly what they need and they don't over- or under-fetch the data. Because of this, GraphQL is a very powerful tool, but with powerful tools, there are often other drawbacks."),(0,n.kt)("h1",{id:"advantages-of-graphql"},"Advantages of GraphQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maintainability"),": GraphQL is very maintainable because it has a strict schema, which means that the client and the back-end can both adhere to the same schema. This means that the client and the back-end can both be developed separately, because they both know exactly what data they can request and send."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexibility"),": GraphQL is very flexible because it allows the client to select exactly what they need. This means that the client can fine-tune their queries to get a smaller payload, which results in a faster query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Schema validation"),": GraphQL has a strict schema, which means that the client and the back-end can both adhere to the same schema. This means that the client and the back-end can both be developed separately, because they both know exactly what data they can request and send.")),(0,n.kt)("h1",{id:"disadvantages-of-graphql"},"Disadvantages of GraphQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Performance"),": GraphQL is not very performant because it has to go through more steps than a REST request. This means that GraphQL queries take longer than similar REST queries."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Complexity"),": GraphQL adds a lot of complexity by adding things like queries, mutators, resolvers, and higher-order components. This might be a problem for some more inexperienced developers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Security"),": GraphQL is not as popular as REST, which means that there are less security tools for GraphQL. This means often means that you have to create your own security tools for GraphQL.")),(0,n.kt)("h1",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"GraphQL definitely has good use cases, but we still have to see if the use case fits our project. The best use case for GraphQL is when you need a defined schema to which both the client and the back-end can adhere. For instance, when the front-end and back-end teams are two separate teams, GraphQL can be very useful. Because there doesn't need to be any communication between the 2 teams once the schema is defined and honored. GraphQL could also be very useful for creating public APIs because it allows unknown clients to fetch exactly what they want, not the predefined set of data that you would get from a REST API."),(0,n.kt)("h1",{id:"sources"},"Sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql"},"GraphQL Complexity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://research.aimultiple.com/graphql-vs-rest/"},"GraphQL Security"))))}d.isMDXComponent=!0}}]);