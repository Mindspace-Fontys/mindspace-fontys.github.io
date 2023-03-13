"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[8833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||h[c]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:10},l="Version Control",i={unversionedId:"development/git",id:"development/git",title:"Version Control",description:"For our version control system, we use Git. Git is a distributed version control system that allows us to track changes to the codebase. It also allows us to collaborate with other developers on the project. For more information about Git, please visit the Git Website.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/development/git.md",sourceDirName:"development",slug:"/development/git",permalink:"/nl/docs/development/git",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/development/git.md",tags:[],version:"current",lastUpdatedBy:"Kane",lastUpdatedAt:1678713911,formattedLastUpdatedAt:"13 mrt 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/nl/docs/development/"},next:{title:"Web Application",permalink:"/nl/docs/development/frontend"}},p={},s=[{value:"Commit Structure",id:"commit-structure",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Feature",id:"feature",level:3},{value:"Refactor",id:"refactor",level:3},{value:"Bug Fix",id:"bug-fix",level:3},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Merging",id:"merging",level:2}],u={toc:s},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"version-control"},"Version Control"),(0,n.kt)("p",null,"For our version control system, we use Git. Git is a distributed version control system that allows us to track changes to the codebase. It also allows us to collaborate with other developers on the project. For more information about Git, please visit the ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Website"),"."),(0,n.kt)("h2",{id:"commit-structure"},"Commit Structure"),(0,n.kt)("p",null,"Before we get into the workflow, we need to understand the structure of a commit.\nEach commit should follow the following structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<type>(<scope>): (<issue>)<subject>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"type")," The type of change that you are making. This can be one of the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"refactor"),": A change to the codebase that does not change the functionality of the project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"docs"),": A change to the documentation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style"),": A change to the code style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"test"),": A change to the tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"chore"),": A change that does not affect the codebase, such as updating the tooling"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"scope")," The scope of the change (if applicable, scope is optional). This can be one of the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"client"),": A change to the client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"server"),": A change to the server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"docs"),": A change to the documentation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"tooling"),": A change to the tooling"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"issue")," The issue number (if applicable, issue is optional). This is the issue number that the commit is related to.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"subject")," The subject of the commit. This should be a short description of the change."))),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("p",null,"Workflow is dependant on the type of change you are making. There are three types of changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Feature"),": A feature is a new feature or change to the codebase. This could be a new feature, a bug fix, or a change to the design of the project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Refactor"),": A refactor is a change to the codebase that does not change the functionality of the project. This could be a change to the structure of the codebase, or a change to the tooling.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bug Fix"),": A bug fix is a change to the codebase that fixes a bug in the project."))),(0,n.kt)("h3",{id:"feature"},"Feature"),(0,n.kt)("p",null,"When you are making a feature, you should follow the following workflow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be ",(0,n.kt)("inlineCode",{parentName:"p"},"feat/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,n.kt)("inlineCode",{parentName:"p"},"feat/1-add-git-workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,n.kt)("inlineCode",{parentName:"p"},"feat: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,n.kt)("inlineCode",{parentName:"p"},"feat: #1 Add Git Workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,n.kt)("h3",{id:"refactor"},"Refactor"),(0,n.kt)("p",null,"When you are making a refactor, you should follow the following workflow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be (",(0,n.kt)("inlineCode",{parentName:"p"},"refactor")," can be a different type according to the ",(0,n.kt)("a",{parentName:"p",href:"#commit-structure"},"Commit Structure"),") ",(0,n.kt)("inlineCode",{parentName:"p"},"refactor/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,n.kt)("inlineCode",{parentName:"p"},"refactor/1-update-git-workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,n.kt)("inlineCode",{parentName:"p"},"refactor: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,n.kt)("inlineCode",{parentName:"p"},"refactor: #1 Update Git Workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,n.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,n.kt)("p",null,"When you are making a bug fix, you should follow the following workflow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new branch from the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The name of the branch should be ",(0,n.kt)("inlineCode",{parentName:"p"},"fix/<issue>-<description>"),". For example, if you are working on issue #1, the name of the branch should be ",(0,n.kt)("inlineCode",{parentName:"p"},"fix/1-fix-git-workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make your changes to the codebase.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit your changes to the branch. Each commit should follow the commit structure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push your changes to the remote branch.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a pull request from the branch to the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. The pull request should be titled ",(0,n.kt)("inlineCode",{parentName:"p"},"fix: <issue> <description>"),". For example, if you are working on issue #1, the title of the pull request should be ",(0,n.kt)("inlineCode",{parentName:"p"},"fix: #1 Fix Git Workflow"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign a reviewer to the pull request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the pull request has been approved, merge the pull request."))),(0,n.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"When you are making a pull request, you should follow the following guidelines:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The pull request should be titled according to the ",(0,n.kt)("a",{parentName:"p",href:"#commit-structure"},"Commit Structure"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The pull request should be assigned to a reviewer in the relevant domain.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The pull request should be linked to the relevant issue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The pull request should be merged once it has been approved."))),(0,n.kt)("h2",{id:"merging"},"Merging"),(0,n.kt)("p",null,"When you are merging a pull request, the pull request should be merged using either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Squash & Merge"),": This will squash all the commits in the pull request into a single commit.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Rebase & Merge"),": This will rebase all the commits in the pull request onto the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch."))),(0,n.kt)("p",null,"This choice is dependant on whether there are a ton of miscellaneous commits in the pull request. If there are a lot of miscellaneous commits, then it is better to squash the commits. If the commits are relevant to the developers, then it is better to rebase the commits."))}h.isMDXComponent=!0}}]);