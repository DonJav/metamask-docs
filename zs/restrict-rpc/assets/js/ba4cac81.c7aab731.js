"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return a?n.createElement(g,p(p({ref:t},l),{},{components:a})):n.createElement(g,p({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,p=new Array(c);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<c;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const c={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},p="Create an account management companion dapp",o={unversionedId:"features/custom-evm-accounts/create-companion-dapp",id:"features/custom-evm-accounts/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/features/custom-evm-accounts/create-companion-dapp.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-companion-dapp",permalink:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/zs/restrict-rpc/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/create-account-snap"},next:{title:"Security guidelines",permalink:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/security"}},i={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create a KeyringSnapRpcClient",id:"2-create-a-keyringsnaprpcclient",level:3},{value:"3. Call Account Management API methods",id:"3-call-account-management-api-methods",level:3},{value:"Example",id:"example",level:2}],l={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.kt)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nCall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zs/restrict-rpc/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/zs/restrict-rpc/snaps/features/custom-evm-accounts/create-account-snap"},"account management Snap")," set up."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-create-a-keyringsnaprpcclient"},"2. Create a KeyringSnapRpcClient"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { KeyringSnapRpcClient } from \"@metamask/keyring-api\";\nimport { defaultSnapOrigin as snapId } from '../config';\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n")),(0,r.kt)("h3",{id:"3-call-account-management-api-methods"},"3. Call Account Management API methods"),(0,r.kt)("p",null,"You can now use the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient")," to invoke\n",(0,r.kt)("a",{parentName:"p",href:"/zs/restrict-rpc/snaps/reference/keyring-api/account-management/"},"Account Management API")," methods on your Snap."),(0,r.kt)("p",null,"For example, to call ",(0,r.kt)("a",{parentName:"p",href:"/zs/restrict-rpc/snaps/reference/keyring-api/account-management/#keyringlist_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}u.isMDXComponent=!0}}]);