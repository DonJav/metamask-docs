"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(70989),l=n(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:h},s,{className:(0,o.Z)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function p(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},r.createElement(u,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function h(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>p});var a=n(67294),r=n(16550),o=n(91980),s=n(67392),i=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,h]=d({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=p??m;return u({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,o]),tabValues:o}}},66125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={description:"Send transactions using eth_sendTransaction.",sidebar_position:4},l="Send transactions",c={unversionedId:"how-to/send-transactions",id:"how-to/send-transactions",title:"Send transactions",description:"Send transactions using eth_sendTransaction.",source:"@site/wallet/how-to/send-transactions.md",sourceDirName:"how-to",slug:"/how-to/send-transactions",permalink:"/zs/restrict-rpc/wallet/how-to/send-transactions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/send-transactions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Send transactions using eth_sendTransaction.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Access a user's accounts",permalink:"/zs/restrict-rpc/wallet/how-to/access-accounts"},next:{title:"Sign data",permalink:"/zs/restrict-rpc/wallet/how-to/sign-data/"}},u={},d=[{value:"Transaction parameters",id:"transaction-parameters",level:2},{value:"Nonce",id:"nonce",level:3},{value:"Gas price",id:"gas-price",level:3},{value:"Gas limit",id:"gas-limit",level:3},{value:"To",id:"to",level:3},{value:"Value",id:"value",level:3},{value:"Data",id:"data",level:3},{value:"Chain ID",id:"chain-id",level:3}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-transactions"},"Send transactions"),(0,r.kt)("p",null,"You can send a transaction in MetaMask using the\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"\nRPC method."),(0,r.kt)("p",null,"For example, the following JavaScript gets the user's accounts and sends a transaction when they\nselect each button, and the following HTML displays the buttons."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const ethereumButton = document.querySelector(".enableEthereumButton");\nconst sendEthButton = document.querySelector(".sendEthButton");\n\nlet accounts = [];\n\n// Send Ethereum to an address\nsendEthButton.addEventListener("click", () => {\n    ethereum\n        .request({\n            method: "eth_sendTransaction",\n            // The following sends an EIP-1559 transaction. Legacy transactions are also supported.\n            params: [\n                {\n                    // The user\'s active address.\n                    from: accounts[0],\n                    // Required except during contract publications.\n                    to: <recipient address>,\n                    // Only required to send ether to the recipient from the initiating external account.\n                    value: <value in wei to send>,\n                    // Customizable by the user during MetaMask confirmation.\n                    gasLimit: \'0x5028\',\n                    // Customizable by the user during MetaMask confirmation.\n                    maxPriorityFeePerGas: \'0x3b9aca00\',\n                    // Customizable by the user during MetaMask confirmation.\n                    maxFeePerGas: \'0x2540be400\',\n                },\n            ],\n        })\n        .then((txHash) => console.log(txHash))\n        .catch((error) => console.error(error));\n});\n\nethereumButton.addEventListener("click", () => {\n    getAccount();\n});\n\nasync function getAccount() {\n    accounts = await ethereum.request({ method: "eth_requestAccounts" });\n}\n'))),(0,r.kt)(s.Z,{value:"HTML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button class="enableEthereumButton btn">Enable Ethereum</button>\n<button class="sendEthButton btn">Send ETH</button>\n')))),(0,r.kt)("h2",{id:"transaction-parameters"},"Transaction parameters"),(0,r.kt)("h3",{id:"nonce"},"Nonce"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask ignores this field.")),(0,r.kt)("p",null,"In Ethereum, every transaction has a nonce, so each transaction can only be processed by the\nblockchain once.\nTo be a valid transaction, either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The nonce must be ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},"A transaction with a nonce of the previous number, from the same account, must have been processed.")),(0,r.kt)("p",null,"This means that transactions are always processed in order for a given account."),(0,r.kt)("p",null,"Nonces are easy to mess up, especially when a user is interacting with multiple applications with\npending transactions using the same account, potentially across multiple devices.\nBecause of this, MetaMask doesn't allow dapp developers to customize nonces.\nInstead, MetaMask\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489251"},"assists the user in managing their transaction queue themselves"),"."),(0,r.kt)("h3",{id:"gas-price"},"Gas price"),(0,r.kt)("p",null,"Gas price is an optional parameter, and best used on private blockchains."),(0,r.kt)("p",null,"In Ethereum, every transaction specifies a price for the gas it consumes.\nTo maximize their profit, block producers pick pending transactions with higher gas prices first\nwhen creating the next block.\nThis means that a high gas price usually causes your transaction to be processed faster, at the cost\nof greater transaction fees."),(0,r.kt)("p",null,"Some networks, such as Layer 2 networks, might have a constant gas price or no gas price.\nSo while you can ignore this parameter on MetaMask's default networks, you might include it when\nyour dapp knows more about the target network than MetaMask does.\nOn the default networks, MetaMask allows users to choose between slow, medium, and fast options for\ntheir gas price."),(0,r.kt)("p",null,"Read about ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360022895972"},"how to use advanced gas controls"),"."),(0,r.kt)("h3",{id:"gas-limit"},"Gas limit"),(0,r.kt)("p",null,"Gas limit is an optional parameter, since MetaMask automatically calculates a reasonable gas price."),(0,r.kt)("h3",{id:"to"},"To"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter is a hex-encoded Ethereum address.\nIt's required for transactions with a recipient (all transactions except for contract creation)."),(0,r.kt)("p",null,"Contract creation occurs when there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," value but there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," value."),(0,r.kt)("h3",{id:"value"},"Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," parameter is a hex-encoded value of the network's native currency to send.\nOn Mainnet, this is ",(0,r.kt)("a",{parentName:"p",href:"https://www.ethereum.org/eth"},"ether"),", which is denominated in wei."),(0,r.kt)("p",null,"These numbers are often far higher precision than native JavaScript numbers, and can cause\nunpredictable behavior if not anticipated.\nWe recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/indutny/bn.js/"},"BN.js")," when manipulating\nvalues intended for Ethereum."),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," parameter is required for smart contract creation."),(0,r.kt)("p",null,"This field is also used for specifying contract methods and their parameters.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"Solidity ABI spec")," for more\ninformation on how the data is encoded."),(0,r.kt)("h3",{id:"chain-id"},"Chain ID"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask ignores this field.")),(0,r.kt)("p",null,"The chain ID is derived from the user's current selected network.\nUse ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_chainid"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_chainId"))," to get the user's chain ID.\nIf you need the network version, use ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#net_version"},(0,r.kt)("inlineCode",{parentName:"a"},"net_version")),"."),(0,r.kt)("p",null,"In the future, MetaMask might allow connecting to multiple networks at the same time, at which point\nthis parameter will become important, so it might be useful to be in the habit of including it now."))}m.isMDXComponent=!0}}]);