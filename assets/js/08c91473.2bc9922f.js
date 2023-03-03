"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=o,k=m["".concat(p,".").concat(c)]||m[c]||h[c]||n;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:10},l="Version Control",i={unversionedId:"development/git",id:"development/git",title:"Version Control",description:"For our version control system, we use Git. Git is a distributed version control system that allows us to track changes to the codebase. It also allows us to collaborate with other developers on the project. For more information about Git, please visit the Git Website.",source:"@site/docs/development/git.md",sourceDirName:"development",slug:"/development/git",permalink:"/docs/development/git",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/development/git.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/development/"},next:{title:"Tooling",permalink:"/docs/development/tooling/"}},p={},s=[{value:"Commit Structure",id:"commit-structure",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Feature",id:"feature",level:3},{value:"Refactor",id:"refactor",level:3},{value:"Bug Fix",id:"bug-fix",level:3},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Merging",id:"merging",level:2}],u={toc:s},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-control"},"Version Control"),(0,o.kt)("p",null,"For our version control system, we use Git. Git is a distributed version control system that allows us to track changes to the codebase. It also allows us to collaborate with other developers on the project. For more information about Git, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Website"),"."),(0,o.kt)("h2",{id:"commit-structure"},"Commit Structure"),(0,o.kt)("p",null,"Before we get into the workflow, we need to understand the structure of a commit.\nEach commit should follow the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>(<scope>): (<issue>)<subject>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"type")," The type of change that you are making. This can be one of the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor"),": A change to the codebase that does not change the functionality of the project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs"),": A change to the documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style"),": A change to the code style"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),": A change to the tests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chore"),": A change that does not affect the codebase, such as updating the tooling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"scope")," The scope of the change (if applicable, scope is optional). This can be one of the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"client"),": A change to the client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"server"),": A change to the server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs"),": A change to the documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tooling"),": A change to the tooling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"issue")," The issue number (if applicable, issue is optional). This is the issue number that the commit is related to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"subject")," The subject of the commit. This should be a short description of the change."))),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"Workflow is dependant on the type of change you are making. There are three types of changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Feature"),": A feature is a new feature or change to the codebase. This could be a new feature, a bug fix, or a change to the design of the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Refactor"),": A refactor is a change to the codebase that does not change the functionality of the project. This could be a change to the structure of the codebase, or a change to the tooling.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bug Fix"),": A bug fix is a change to the codebase that fixes a bug in the project."))),(0,o.kt)("h3",{id:"feature"},"Feature"),(0,o.kt)("p",null,"When you are making a feature, you should follow the following workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be ",(0,o.kt)("inlineCode",{parentName:"p"},"feat/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,o.kt)("inlineCode",{parentName:"p"},"feat/1-add-git-workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,o.kt)("inlineCode",{parentName:"p"},"feat: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,o.kt)("inlineCode",{parentName:"p"},"feat: #1 Add Git Workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,o.kt)("h3",{id:"refactor"},"Refactor"),(0,o.kt)("p",null,"When you are making a refactor, you should follow the following workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be (",(0,o.kt)("inlineCode",{parentName:"p"},"refactor")," can be a different type according to the ",(0,o.kt)("a",{parentName:"p",href:"#commit-structure"},"Commit Structure"),") ",(0,o.kt)("inlineCode",{parentName:"p"},"refactor/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,o.kt)("inlineCode",{parentName:"p"},"refactor/1-update-git-workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,o.kt)("inlineCode",{parentName:"p"},"refactor: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,o.kt)("inlineCode",{parentName:"p"},"refactor: #1 Update Git Workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,o.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,o.kt)("p",null,"When you are making a bug fix, you should follow the following workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be ",(0,o.kt)("inlineCode",{parentName:"p"},"fix/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,o.kt)("inlineCode",{parentName:"p"},"fix/1-fix-git-workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,o.kt)("inlineCode",{parentName:"p"},"fix: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,o.kt)("inlineCode",{parentName:"p"},"fix: #1 Fix Git Workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,o.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,"When you are making a pull request, you should follow the following guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The pull request should be titled according to the ",(0,o.kt)("a",{parentName:"p",href:"#commit-structure"},"Commit Structure"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The pull request should be assigned to a reviewer in the relevant domain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The pull request should be linked to the relevant issue.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The pull request should be merged once it has been approved."))),(0,o.kt)("h2",{id:"merging"},"Merging"),(0,o.kt)("admonition",{title:"Squash & Merge",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'While there are two ways of merging a PR, you should only use "Squash & Merge" if there are a lot of ',(0,o.kt)("strong",{parentName:"p"},"miscellaneous"),' commits in the pull request. If you do not know what to do, then use "Rebase & Merge" or ask the reviewer.')),(0,o.kt)("p",null,"When you are merging a pull request, the pull request should be merged using either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Squash & Merge"),": This will squash all the commits in the pull request into a single commit.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rebase & Merge"),": This will rebase all the commits in the pull request onto the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch."))))}h.isMDXComponent=!0}}]);