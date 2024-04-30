"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[242],{15680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},l=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,y=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?t.createElement(y,i(i({ref:a},l),{},{components:n})):t.createElement(y,i({ref:a},l))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18841:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const o={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},i="Create an account management companion dapp",p={unversionedId:"features/custom-evm-accounts/create-companion-dapp",id:"features/custom-evm-accounts/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/features/custom-evm-accounts/create-companion-dapp.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-companion-dapp",permalink:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/fix/send-transaction-example/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/create-account-snap"},next:{title:"Security guidelines",permalink:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/security"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create a KeyringSnapRpcClient",id:"2-create-a-keyringsnaprpcclient",level:3},{value:"3. Call Account Management API methods",id:"3-call-account-management-api-methods",level:3},{value:"Example",id:"example",level:2}],l={toc:s},m="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.yg)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nCall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.yg)("admonition",{title:"see also",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"An ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/features/custom-evm-accounts/create-account-snap"},"account management Snap")," set up."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.yg)("p",null,"Install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/keyring-api"))," module in your\nproject directory using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.yg)("h3",{id:"2-create-a-keyringsnaprpcclient"},"2. Create a KeyringSnapRpcClient"),(0,r.yg)("p",null,"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { KeyringSnapRpcClient } from "@metamask/keyring-api";\nimport { defaultSnapOrigin as snapId } from "../config";\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n')),(0,r.yg)("h3",{id:"3-call-account-management-api-methods"},"3. Call Account Management API methods"),(0,r.yg)("p",null,"You can now use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient")," to invoke\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/keyring-api/account-management/"},"Account Management API")," methods on your Snap."),(0,r.yg)("p",null,"For example, to call ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/keyring-api/account-management/#keyringlist_accounts"},(0,r.yg)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}u.isMDXComponent=!0}}]);