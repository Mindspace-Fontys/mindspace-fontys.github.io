"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[4853],{9734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>S,default:()=>L,frontMatter:()=>C,metadata:()=>Z,toc:()=>B});var o=n(7462),l=n(7294),a=n(3905),i=n(6010),s=n(2466),r=n(6550),d=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:l}}=e;return{value:t,label:n,attributes:o,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=m(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[r,d]=k({queryString:n,groupId:o}),[u,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),g=(()=>{const e=r??u;return h({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),p(e)}),[d,p,a]),tabValues:a}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),o=d[n].value;o!==a&&(c(t),r(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,o.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=g(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},l.createElement(f,(0,o.Z)({},e,t)),l.createElement(w,(0,o.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return l.createElement(v,(0,o.Z)({key:String(t)},e))}const D={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(D.tabItem,o),hidden:n},t)}var I=n(814),G=n(3612);const C={sidebar_position:20},S="Tooling",Z={unversionedId:"development/tooling/index",id:"development/tooling/index",title:"Tooling",description:"We use a lot of different tools to develop MindSpaces. This section contains",source:"@site/docs/development/tooling/index.mdx",sourceDirName:"development/tooling",slug:"/development/tooling/",permalink:"/docs/development/tooling/",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/development/tooling/index.mdx",tags:[],version:"current",lastUpdatedBy:"Marc Muller",lastUpdatedAt:1678275136,formattedLastUpdatedAt:"Mar 8, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Version Control",permalink:"/docs/development/git"},next:{title:"Documentation",permalink:"/docs/development/tooling/docs"}},N={},B=[{value:"Git",id:"git",level:2},{value:"Installation",id:"installation",level:3},{value:"Node",id:"node",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Docker",id:"docker",level:2},{value:"Installation",id:"installation-2",level:3}],E={toc:B},O="wrapper";function L(e){let{components:t,...n}=e;return(0,a.kt)(O,(0,o.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tooling"},"Tooling"),(0,a.kt)("p",null,"We use a lot of different tools to develop MindSpaces. This section contains\ninformation about the tools that we use to develop MindSpaces. Both how to\ninstall them, how we use them and why we use them."),(0,a.kt)("h2",{id:"git"},"Git"),(0,a.kt)("p",null,"For version control we use Git. Git is a version control system. It allows you\nto keep track of changes to the codebase. Just as important, it allows you to\ncollaborate with other developers."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)(T,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(x,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Go to the official Git for Windows website at https://git-scm.com/download/win."),(0,a.kt)("li",null,'Click the "Download" button to download the Git installer'),(0,a.kt)("li",null,"Once the download is complete, open the installer by double clicking the downloaded file."),(0,a.kt)("li",null,"Follow the prompts in the Git installer to complete the installation. By default, Git will install to C:\\Program Files\\Git."),(0,a.kt)("li",null,'During the installation process, you may be prompted to select components to install. Make sure that "Git Bash Here" and "Git GUI Here" are selected if you want to use these tools.'),(0,a.kt)("li",null,'Once the installation is complete, you can open Git Bash to use Git on your Windows machine. You can find Git Bash in the Start menu under "Git".'))),(0,a.kt)(x,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)(G.Z,{type:"caution",mdxType:"Admonition"},(0,a.kt)("p",null,"This guide is for Debian based distributions, for other flavors of Linux, please see the official ",(0,a.kt)("a",{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git Installation Guide"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Open the terminal on your Linux machine."),(0,a.kt)("li",null,"Update your package manager's cache by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get update")),(0,a.kt)("li",null,"Install Git by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get install git")),(0,a.kt)("li",null,'The package manager will prompt you to confirm the installation. Type "y" and press enter to continue.'))),(0,a.kt)(x,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,a.kt)(G.Z,{type:"caution",mdxType:"Admonition"},(0,a.kt)("p",null,"This guide uses Homebrew to install Git, if you can not use Homebrew please see the the ",(0,a.kt)("a",{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git Installation Guide")," for alternatives")),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Open the Terminal app on your macOS machine. You can find it in the Applications > Utilities folder, or by using Spotlight search."),(0,a.kt)("li",null,"Install Homebrew if you don't have it already. Type the following command and press enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')),(0,a.kt)("li",null,"Once Homebrew is installed, update your Homebrew package list by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"brew update")),(0,a.kt)("li",null,"Install Git by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"zsh",mdxType:"CodeBlock"},"brew install git"))),"That's it! You now have Git installed on your macOS machine using Homebrew.")),(0,a.kt)("p",null,"Finally, to verify that Git has been installed correctly, open Git Bash and type the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"git --version\n")),(0,a.kt)("p",null,"This command will display the current version of Git and verify that it has been\ninstalled correctly. And that's it! You now have Git installed on your Windows\nmachine."),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("p",null,"Node is a JavaScript runtime environment. It allows you to run JavaScript code\noutside of a browser. We use Node to build our frontend for MindSpaces."),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)(T,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(x,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Download the Node.js Installer by opening a powershell window and typing the following command, then pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"curl -LO https://nodejs.org/dist/v18.14.2/node-v18.14.2-x64.msi")),(0,a.kt)("li",null,"Install Node.js by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"msiexec.exe /i node-v18.14.2-x64.msi /quiet")),(0,a.kt)("li",null,"Verify that Node.js has been installed correctly by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"node -v")),(0,a.kt)("li",null,"The command should output the version number of Node.js (e.g. `v18.14.2`). If it does, then Node.js has been successfully installed on your Windows machine!"))),(0,a.kt)(x,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)(G.Z,{type:"caution",mdxType:"Admonition"},(0,a.kt)("p",null,"This guide is for Debian based distributions, for other flavors of Linux, please see the official"," ",(0,a.kt)("a",{href:"https://nodejs.org/en/download/package-manager/"},"Node Installation Guide"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Add the Node.js repository to the package manager's sources by opening a terminal window and typing the following command, then pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -")),(0,a.kt)("li",null,"Install Node.js by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get install -y nodejs")),(0,a.kt)("li",null,"Verify that Node.js has been installed correctly by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"node -v")),(0,a.kt)("li",null,"The command should output the version number of Node.js (e.g. `v18.14.2`). If it does, then Node.js has been successfully installed on your Linux machine!"))),(0,a.kt)(x,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,a.kt)(G.Z,{type:"caution",mdxType:"Admonition"},(0,a.kt)("p",null,"This guide uses Homebrew to install Git, if you can not use Homebrew please see the the"," ",(0,a.kt)("a",{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git Installation Guide")," ","for alternatives")),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Open the Terminal app on your macOS machine. You can find it in the Applications > Utilities folder, or by using Spotlight search."),(0,a.kt)("li",null,"Install Homebrew if you don't have it already. Type the following command and press enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')),(0,a.kt)("li",null,"Install Node.js by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"brew install node@18.14.2")),(0,a.kt)("li",null,"Verify that Node.js has been installed correctly by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"node -v")),(0,a.kt)("li",null,"The command should output the version number of Node.js (e.g. `v18.14.2`). If it does, then Node.js has been successfully installed on your macOS machine!")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You now have successfully installed NodeJS on your machine!")),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you use Docker Desktop, then Docker Compose is already installed. Otherwise you might need to install it separately. For more information, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose Installation")," guide.")),(0,a.kt)("h3",{id:"installation-2"},"Installation"),(0,a.kt)(T,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(x,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Go to the Docker website at"," ",(0,a.kt)("a",{href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop"),"."),(0,a.kt)("li",null,'Click the "Download Docker Desktop" button to download the Docker Desktop installer.'),(0,a.kt)("li",null,"Once the download is complete, double-click the downloaded file to launch the Docker Desktop installer."),(0,a.kt)("li",null,"Follow the prompts in the Docker Desktop installer to complete the installation. By default, Docker Desktop will install to `C:\\Program Files\\Docker\\Docker`. During the installation process, you may be prompted to enable Hyper-V and/or WSL 2 (Windows Subsystem for Linux) if they are not already enabled on your Windows machine. Make sure to enable them if prompted."),(0,a.kt)("li",null,"Once the installation is complete, Docker Desktop should launch automatically."),(0,a.kt)("li",null,"You can verify that Docker Desktop has been installed correctly by opening a command prompt or PowerShell window and typing the following command:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"docker version")),(0,a.kt)("li",null,"This command will display the current version of Docker Desktop and verify that it has been installed correctly."),(0,a.kt)("li",null,"Optionally, you can also open the Docker Desktop application and confirm that it is running by checking the Docker icon in the system tray."))),(0,a.kt)(x,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)(G.Z,{type:"caution",mdxType:"Admonition"},(0,a.kt)("p",null,"This guide is for Debian based distributions, for other flavors of Linux, please see the official"," ",(0,a.kt)("a",{href:"https://docs.docker.com/engine/install/"},"Docker Installation Guide"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Open a terminal window on your Linux machine."),(0,a.kt)("li",null,"Update your package manager's cache by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get update")),(0,a.kt)("li",null,"Install required packages for the Docker repository by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release")),(0,a.kt)("li",null,"Add Docker's official GPG key by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg")),(0,a.kt)("li",null,"Add the Docker repository to your system's sources list by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},'echo \\ "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \\ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null')),(0,a.kt)("li",null,"Update your package manager's cache again by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get update")),(0,a.kt)("li",null,"Install Docker by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get install -y docker-ce docker-ce-cli containerd.io")),(0,a.kt)("li",null,"Once the installation is complete, you can verify that Docker has been installed correctly by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo docker run hello-world")),(0,a.kt)("li",null,"This command will download a test image and run a container, and then display a message confirming that Docker is running correctly."),(0,a.kt)("li",null,"If you want to use Docker without needing to use sudo every time, you can add your user to the docker group by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"sudo usermod -aG docker $USER"),(0,a.kt)("p",null,"After running this command, you will need to log out and log back in for the changes to take effect.")),(0,a.kt)("li",null,"You can also check the version of Docker that is installed by typing the following command and pressing enter:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"docker version")))),(0,a.kt)(x,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Go to the Docker website at"," ",(0,a.kt)("a",{href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop"),"."),(0,a.kt)("li",null,'Click the "Download Docker Desktop" button to download the Docker Desktop installer.'),(0,a.kt)("li",null,"Once the download is complete, double-click the downloaded file to launch the Docker Desktop installer."),(0,a.kt)("li",null,"Follow the prompts in the Docker Desktop installer to complete the installation."),(0,a.kt)("li",null,"Once the installation is complete, Docker Desktop should launch automatically."),(0,a.kt)("li",null,"You can verify that Docker Desktop has been installed correctly by opening a terminal window and typing the following command:",(0,a.kt)(I.Z,{language:"bash",mdxType:"CodeBlock"},"docker version")),(0,a.kt)("li",null,"This command will display the current version of Docker Desktop and verify that it has been installed correctly."),(0,a.kt)("li",null,"Optionally, you can also open the Docker Desktop application and confirm that it is running by checking the Docker icon in the system tray.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You now have successfully installed Docker on your machine!")))}L.isMDXComponent=!0}}]);