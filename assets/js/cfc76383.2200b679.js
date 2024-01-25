"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=s,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(87462),s=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={description:"See the Snaps permissions reference.",sidebar_position:4},l="Snaps permissions",p={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"See the Snaps permissions reference.",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/snaps/reference/permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"See the Snaps permissions reference.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/snaps/reference/exports"},next:{title:"Snaps command line",permalink:"/snaps/reference/cli"}},m={},c=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"endowment:cronjob",id:"endowmentcronjob",level:3},{value:"endowment:ethereum-provider",id:"endowmentethereum-provider",level:3},{value:"endowment:page-home",id:"endowmentpage-home",level:3},{value:"endowment:keyring",id:"endowmentkeyring",level:3},{value:"endowment:lifecycle-hooks",id:"endowmentlifecycle-hooks",level:3},{value:"endowment:network-access",id:"endowmentnetwork-access",level:3},{value:"Same-origin policy and CORS",id:"same-origin-policy-and-cors",level:4},{value:"endowment:rpc",id:"endowmentrpc",level:3},{value:"endowment:transaction-insight",id:"endowmenttransaction-insight",level:3},{value:"endowment:webassembly",id:"endowmentwebassembly",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:2},{value:"eth_accounts",id:"eth_accounts",level:3}],u={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,s.kt)("p",null,"Snaps can ",(0,s.kt)("a",{parentName:"p",href:"/snaps/how-to/request-permissions"},"request the following permissions"),"."),(0,s.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,s.kt)("p",null,"You must request permission to call ",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/snaps-api"},"Snaps API methods"),".\nFor example, to request to call ",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/snaps-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the following to the\nmanifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {}\n}\n')),(0,s.kt)("h2",{id:"endowments"},"Endowments"),(0,s.kt)("h3",{id:"endowmentcronjob"},"endowment:cronjob"),(0,s.kt)("p",null,"To run periodic actions for the user (cron jobs), a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the Snap to specify cron jobs that trigger the exported\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#oncronjob"},(0,s.kt)("inlineCode",{parentName:"a"},"onCronjob"))," method."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "exampleMethodOne",\n          "params": {\n            "param1": "foo"\n          }\n        }\n      },\n      {\n        "expression": "*/2 * * * *",\n        "request": {\n          "method": "exampleMethodTwo",\n          "params": {\n            "param1": "bar"\n          }\n        }\n      }\n    ]\n  }\n}\n\n')),(0,s.kt)("h3",{id:"endowmentethereum-provider"},"endowment:ethereum-provider"),(0,s.kt)("p",null,"To communicate with a node using MetaMask, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global to the Snap execution environment, allowing Snaps to\ncall some ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods.\nThis global is an ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," provider."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,s.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSee the ",(0,s.kt)("a",{parentName:"p",href:"/snaps/concepts/apis#metamask-json-rpc-api"},"list of methods")," not available to Snaps.")),(0,s.kt)("h3",{id:"endowmentpage-home"},"endowment:page-home"),(0,s.kt)("admonition",{type:"flaskOnly"}),(0,s.kt)("p",null,"To present a dedicated UI within MetaMask, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:page-home"),' permission.\nThis permission allows the Snap to specify a "home page" entrypoint using the exported\n',(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#onhomepage"},(0,s.kt)("inlineCode",{parentName:"a"},"onHomePage"))," method.\nYou can use any ",(0,s.kt)("a",{parentName:"p",href:"/snaps/how-to/use-custom-ui"},"custom UI components")," to build an embedded home page accessible through the Snaps menu."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:page-home": {}\n}\n')),(0,s.kt)("h3",{id:"endowmentkeyring"},"endowment:keyring"),(0,s.kt)("admonition",{type:"flaskOnly"}),(0,s.kt)("p",null,"For a dapp to call ",(0,s.kt)("a",{parentName:"p",href:"/snaps/concepts/keyring-api"},"Keyring API")," methods on an account management Snap,\nthe Snap must configure a list of allowed dapp URLs using the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:keyring")," permission.\nIf a dapp hosted on a domain not listed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"allowedOrigins")," attempts to call a Keyring API method,\nMetaMask rejects the request."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": ["https://<dapp domain>"]\n  }\n}\n')),(0,s.kt)("h3",{id:"endowmentlifecycle-hooks"},"endowment:lifecycle-hooks"),(0,s.kt)("p",null,"To run an action when the user installs or updates the Snap, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:lifecycle-hooks")," permission.\nThis permission allows the Snap to export the\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#oninstall"},(0,s.kt)("inlineCode",{parentName:"a"},"onInstall"))," and\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#onupdate"},(0,s.kt)("inlineCode",{parentName:"a"},"onUpdate")),"\nmethods, which MetaMask calls after a successful installation or update, respectively."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n')),(0,s.kt)("h3",{id:"endowmentnetwork-access"},"endowment:network-access"),(0,s.kt)("p",null,"To access the internet, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,s.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/how-to/troubleshoot#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:network-access": {}\n}\n')),(0,s.kt)("h4",{id:"same-origin-policy-and-cors"},"Same-origin policy and CORS"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"fetch()")," requests in a Snap are bound by the browser's ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access"},"same-origin policy"),".\nSince Snap code is executed in an iframe with the ",(0,s.kt)("inlineCode",{parentName:"p"},"sandbox")," property, the browser sends an ",(0,s.kt)("inlineCode",{parentName:"p"},"Origin"),"\nheader with the value ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," with outgoing requests.\nFor the Snap to be able to read the response, the server must send an\n",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},(0,s.kt)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))," CORS header\nwith the value ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," in the response."),(0,s.kt)("h3",{id:"endowmentrpc"},"endowment:rpc"),(0,s.kt)("p",null,"To handle arbitrary JSON-RPC requests, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a Snap access to JSON-RPC requests sent to the Snap, using the exported\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#onrpcrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," method."),(0,s.kt)("p",null,"This permission requires an object with a ",(0,s.kt)("inlineCode",{parentName:"p"},"snaps")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nSnap can receive JSON-RPC requests from other Snaps, or dapps, respectively.\nThe default for both properties is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }\n}\n')),(0,s.kt)("p",null,"Alternatively, you can specify the caveat ",(0,s.kt)("inlineCode",{parentName:"p"},"allowedOrigins")," to restrict requests to specific domains or Snap IDs.\nCalls from any other origins are rejected. "),(0,s.kt)("p",null,"Specify this caveat in the manifest file as follows: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": { \n    "allowedOrigins": [\n      "metamask.io", \n      "consensys.io",\n      "npm:@metamask/example-snap"\n    ] \n  }\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you specify ",(0,s.kt)("inlineCode",{parentName:"p"},"allowedOrigins"),", you should not specify ",(0,s.kt)("inlineCode",{parentName:"p"},"dapps")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"snaps"),". ")),(0,s.kt)("h3",{id:"endowmenttransaction-insight"},"endowment:transaction-insight"),(0,s.kt)("p",null,"To provide transaction insights, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a Snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exporting the ",(0,s.kt)("a",{parentName:"p",href:"/snaps/reference/exports#ontransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"onTransaction"))," method."),(0,s.kt)("p",null,"This permission requires an object with an ",(0,s.kt)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the Snap\nshould pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n}\n')),(0,s.kt)("h3",{id:"endowmentwebassembly"},"endowment:webassembly"),(0,s.kt)("p",null,"To use WebAssembly, a Snap must request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:webassembly")," permission.\nThis permission exposes the global ",(0,s.kt)("inlineCode",{parentName:"p"},"WebAssembly")," API to the Snap execution environment."),(0,s.kt)("p",null,"Specify this permission in the manifest file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:webassembly": {}\n}\n')),(0,s.kt)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,s.kt)("h3",{id:"eth_accounts"},"eth_accounts"),(0,s.kt)("p",null,"A Snap can request permission to call the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," MetaMask\nJSON-RPC API method by calling ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),".\nCalling ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," requires the\n",(0,s.kt)("a",{parentName:"p",href:"#endowmentethereum-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission:"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Manifest file",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n'))),(0,s.kt)(i.Z,{value:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'await ethereum.request({\n  "method": "eth_requestAccounts"\n});\n')))),(0,s.kt)("p",null,"You can check the presence of the permission by calling\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getpermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions")),".\nIf the permission is present, the result contains a permission with a ",(0,s.kt)("inlineCode",{parentName:"p"},"parentCapability")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts"),".\nThe permission contains a ",(0,s.kt)("inlineCode",{parentName:"p"},"restrictReturnedAccounts")," caveat, an array of all the accounts the user\nallows for this Snap.\nThe following is an example ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_accounts")," permission:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "47vm2UUi1pccNAeYKGmwF", // example\n  "parentCapability": "eth_accounts",\n  "invoker": "npm:SNAP_ID",\n  "caveats": [\n    {\n      "type": "restrictReturnedAccounts",\n      "value": [\n        "0xc403b37bf1e700cb214ea1be9de066824b420de6" // example connected account #1\n      ]\n    }\n  ],\n  "date": 1692616452846\n}\n')),(0,s.kt)("p",null,"The user can revoke this permission by going to the Snap's settings under ",(0,s.kt)("strong",{parentName:"p"},"Snap permissions"),"."))}h.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),s=t(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),s=t(67294),r=t(86010),i=t(12466),o=t(70989),l=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=m[t].value;a!==o&&(u(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},m.map((e=>{let{value:n,label:t,attributes:i}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function c(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function u(e){const n=(0,o.Y)(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},s.createElement(m,(0,a.Z)({},e,n)),s.createElement(c,(0,a.Z)({},e,n)))}function d(e){const n=(0,l.Z)();return s.createElement(u,(0,a.Z)({key:String(n)},e))}},70989:(e,n,t)=>{t.d(n,{Y:()=>u});var a=t(67294),s=t(16550),r=t(91980),i=t(67392),o=t(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function c(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function u(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=c({queryString:t,groupId:s}),[h,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,o.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),k=(()=>{const e=u??h;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}}}]);