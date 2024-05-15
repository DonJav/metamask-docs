"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5685],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(58168),n=(a(96540),a(15680));const i={sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},s="Use MetaMask SDK with pure JavaScript",o={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"Set up the SDK in your Pure JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/pure-js.md",tags:[{label:"JavaScript SDK",permalink:"/1307-minor-fixes/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},p={},l=[{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.yg)("p",null,"Import ",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/concepts/sdk/"},"MetaMask SDK")," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.yg)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<head>\n  ...\n  <script src="https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js"><\/script>\n  <script>\n    const MMSDK = new MetaMaskSDK.MetaMaskSDK(\n      dappMetadata: {\n        name: "Example Pure JS Dapp",\n        url: window.location.href,\n      },\n      infuraAPIKey: process.env.INFURA_API_KEY,\n      // Other options.\n    )\n    // Because the init process of MetaMask SDK is async.\n    setTimeout(() => {\n      // You can also access via window.ethereum.\n      const ethereum = MMSDK.getProvider();\n\n      ethereum.request({ method: \'eth_requestAccounts\' });\n    }, 0)\n  <\/script>\n  ...\n</head>\n')),(0,n.yg)("p",null,"You can configure the SDK using any ",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/sdk-js-options"},"options"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#dappmetadata"},(0,n.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#infuraapikey"},(0,n.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/reference/sdk-js-options#modals"},(0,n.yg)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.yg)("a",{parentName:"li",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,n.yg)("p",null,"You can call any ",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/provider-api"},"provider API methods")," using the SDK.\nAlways call ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()"))," first, since it prompts the installation\nor connection popup to appear."),(0,n.yg)("p",null,"You can also call the SDK's ",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,n.yg)("inlineCode",{parentName:"a"},"connectAndSign"))," method, and\n",(0,n.yg)("a",{parentName:"p",href:"/1307-minor-fixes/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the ",(0,n.yg)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript"},"example pure JavaScript dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}m.isMDXComponent=!0}}]);