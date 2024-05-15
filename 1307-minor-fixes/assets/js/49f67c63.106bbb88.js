"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9477],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,y=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const s={sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},o="Use MetaMask SDK with Node.js",i={unversionedId:"how-to/use-sdk/javascript/nodejs",id:"how-to/use-sdk/javascript/nodejs",title:"Use MetaMask SDK with Node.js",description:"Set up the SDK in your Node.js dapp.",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/nodejs.md",tags:[{label:"JavaScript SDK",permalink:"/1307-minor-fixes/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Node.js",sidebar_position:5,description:"Set up the SDK in your Node.js dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React Native and Expo",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/electron"}},l={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-metamask-sdk-with-nodejs"},"Use MetaMask SDK with Node.js"),(0,r.yg)("p",null,"Import ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/concepts/sdk/"},"MetaMask SDK")," into your Node.js dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for Node.js has the ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.yg)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,r.yg)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.yg)("p",null,"In your project script, add the following to import the SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskSDK } from "@metamask/sdk";\n')),(0,r.yg)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,r.yg)("p",null,"Instantiate the SDK using any ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/sdk-js-options"},"options"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#dappmetadata"},(0,r.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#infuraapikey"},(0,r.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#modals"},(0,r.yg)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,r.yg)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.yg)("p",null,"Use the SDK by calling any ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/provider-api#request"},(0,r.yg)("inlineCode",{parentName:"a"},"request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'ethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,r.yg)("p",null,"You can also call the SDK's ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,r.yg)("inlineCode",{parentName:"a"},"connectAndSign"))," method, and\n",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"You can copy the full Node.js example to get started:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK({\n  dappMetadata: {\n    name: "Example Node.js Dapp",\n    url: window.location.href,\n  },\n  infuraAPIKey: process.env.INFURA_API_KEY,\n  // Other options.\n});\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the JavaScript SDK GitHub repository for advanced use cases."))}m.isMDXComponent=!0}}]);