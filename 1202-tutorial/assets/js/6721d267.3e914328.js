"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4022],{34598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(74848),s=a(28453);const r={description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",sidebar_position:1,sidebar_label:"Web3-Onboard",tags:["JavaScript SDK"]},o="Use Web3-Onboard with MetaMask SDK",i={id:"how-to/use-sdk/3rd-party-libraries/web3-onboard",title:"Use Web3-Onboard with MetaMask SDK",description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard.md",sourceDirName:"how-to/use-sdk/3rd-party-libraries",slug:"/how-to/use-sdk/3rd-party-libraries/web3-onboard",permalink:"/1202-tutorial/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard.md",tags:[{label:"JavaScript SDK",permalink:"/1202-tutorial/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"Integrate MetaMask SDK with Web3-Onboard in your JavaScript dapp.",sidebar_position:1,sidebar_label:"Web3-Onboard",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Third-party libraries",permalink:"/1202-tutorial/wallet/how-to/use-sdk/3rd-party-libraries/"},next:{title:"Wagmi",permalink:"/1202-tutorial/wallet/how-to/use-sdk/3rd-party-libraries/wagmi"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the module",id:"1-install-the-module",level:3},{value:"2. Import the module",id:"2-import-the-module",level:3},{value:"3. Instantiate the module",id:"3-instantiate-the-module",level:3},{value:"4. Use the module",id:"4-use-the-module",level:3},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-web3-onboard-with-metamask-sdk",children:"Use Web3-Onboard with MetaMask SDK"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://onboard.blocknative.com/",children:"Web3-Onboard"})," is a JavaScript library that simplifies the process\nof onboarding users into dapps.\nIt provides a smooth user interface, a variety of wallet integrations, and is highly customizable to\nmeet the needs of your dapp."]}),"\n",(0,n.jsxs)(t.p,{children:["You can integrate ",(0,n.jsx)(t.a,{href:"/1202-tutorial/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your dapp alongside Web3-Onboard,\nusing the Web3-Onboard MetaMask module, to enable your users to seamlessly and securely connect to\nthe MetaMask browser extension and MetaMask Mobile."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["Set up a project with ",(0,n.jsx)(t.a,{href:"https://onboard.blocknative.com/docs/getting-started/installation",children:"Web3-Onboard"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"1-install-the-module",children:"1. Install the module"}),"\n",(0,n.jsx)(t.p,{children:"Install the Web3-Onboard MetaMask module into your dapp:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm i @web3-onboard/metamask\n"})}),"\n",(0,n.jsx)(t.h3,{id:"2-import-the-module",children:"2. Import the module"}),"\n",(0,n.jsx)(t.p,{children:"In your project script, add the following to import the module:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'import metamaskSDK from "@web3-onboard/metamask";\n'})}),"\n",(0,n.jsx)(t.h3,{id:"3-instantiate-the-module",children:"3. Instantiate the module"}),"\n",(0,n.jsxs)(t.p,{children:["Instantiate the module using any ",(0,n.jsx)(t.a,{href:"/1202-tutorial/wallet/reference/sdk-js-options",children:"JavaScript SDK options"}),", for\nexample, ",(0,n.jsx)(t.a,{href:"/1202-tutorial/wallet/reference/sdk-js-options#dappmetadata",children:(0,n.jsx)(t.code,{children:"dappMetadata"})}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const metamaskSDKWallet = metamaskSDK({\n  options: {\n    extensionOnly: false,\n    dappMetadata: {\n      name: "Example Web3-Onboard Dapp",\n    },\n  },\n});\n'})}),"\n",(0,n.jsx)(t.h3,{id:"4-use-the-module",children:"4. Use the module"}),"\n",(0,n.jsx)(t.p,{children:"Use the module as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const onboard = Onboard({\n  // Other Onboard options.\n  wallets: [\n    metamaskSDKWallet,\n    // Other wallets.\n  ],\n});\n\nconst connectedWallets = await onboard.connectWallet();\nconsole.log(connectedWallets);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["For an example of using Web3-Onboard with MetaMask SDK, see the\n",(0,n.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/with-web3onboard",children:"example dapp"}),"\nin the JavaScript SDK GitHub repository.\nSee the ",(0,n.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/with-web3onboard/src/App.tsx",children:(0,n.jsx)(t.code,{children:"App.tsx"})}),"\nfile for more details on implementing the integration in a React dapp."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);