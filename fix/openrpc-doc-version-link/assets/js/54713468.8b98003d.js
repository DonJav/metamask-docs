"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3523],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={description:"Detect a user's network and network changes.",sidebar_position:1},i="Detect a user's network",l={unversionedId:"how-to/manage-networks/detect-network",id:"how-to/manage-networks/detect-network",title:"Detect a user's network",description:"Detect a user's network and network changes.",source:"@site/wallet/how-to/manage-networks/detect-network.md",sourceDirName:"how-to/manage-networks",slug:"/how-to/manage-networks/detect-network",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/manage-networks/detect-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-networks/detect-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Detect a user's network and network changes.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Manage networks",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/manage-networks"},next:{title:"Add a network",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/manage-networks/add-network"}},s={},c=[{value:"Chain IDs",id:"chain-ids",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"detect-a-users-network"},"Detect a user's network"),(0,a.yg)("p",null,"It's important to keep track of the user's network chain ID because all RPC requests are submitted\nto the currently connected network."),(0,a.yg)("p",null,"Use the ",(0,a.yg)("a",{parentName:"p",href:"/wallet/reference/eth_chainId"},(0,a.yg)("inlineCode",{parentName:"a"},"eth_chainId")),"\nRPC method to detect the chain ID of the user's current network.\nListen to the ",(0,a.yg)("a",{parentName:"p",href:"/fix/openrpc-doc-version-link/wallet/reference/provider-api#chainchanged"},(0,a.yg)("inlineCode",{parentName:"a"},"chainChanged"))," provider event to\ndetect when the user changes networks."),(0,a.yg)("p",null,"For example, the following code detects a user's network and when the user changes networks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const chainId = await provider // Or window.ethereum if you don\'t support EIP-6963.\n  .request({ method: "eth_chainId" });\n\nprovider // Or window.ethereum if you don\'t support EIP-6963.\n  .on("chainChanged", handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  // We recommend reloading the page, unless you must do otherwise.\n  window.location.reload();\n}\n')),(0,a.yg)("h2",{id:"chain-ids"},"Chain IDs"),(0,a.yg)("p",null,"These are the chain IDs of the Ethereum networks that MetaMask supports by default.\nConsult ",(0,a.yg)("a",{parentName:"p",href:"https://chainid.network"},"chainid.network")," for more."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Hex"),(0,a.yg)("th",{parentName:"tr",align:null},"Decimal"),(0,a.yg)("th",{parentName:"tr",align:null},"Network"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"0x1"),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"Ethereum main network (Mainnet)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"0x5"),(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"Goerli test network")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"0xaa36a7"),(0,a.yg)("td",{parentName:"tr",align:null},"11155111"),(0,a.yg)("td",{parentName:"tr",align:null},"Sepolia test network")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"0xe704"),(0,a.yg)("td",{parentName:"tr",align:null},"59140"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://docs.linea.build/"},"Linea Goerli test network"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"0x539"),(0,a.yg)("td",{parentName:"tr",align:null},"1337"),(0,a.yg)("td",{parentName:"tr",align:null},"Localhost test networks")))))}u.isMDXComponent=!0}}]);