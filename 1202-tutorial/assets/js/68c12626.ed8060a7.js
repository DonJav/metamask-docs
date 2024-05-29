"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7785],{9893:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=s(74848),t=s(28453);const i={description:"Learn about the Snaps system at a high level.",sidebar_position:1},r="About Snaps",o={id:"learn/about-snaps/index",title:"About Snaps",description:"Learn about the Snaps system at a high level.",source:"@site/snaps/learn/about-snaps/index.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/",permalink:"/1202-tutorial/snaps/learn/about-snaps/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps system at a high level.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Learn",permalink:"/1202-tutorial/snaps/learn"},next:{title:"Snaps APIs",permalink:"/1202-tutorial/snaps/learn/about-snaps/apis"}},c={},l=[{value:"Technical overview",id:"technical-overview",level:2},{value:"Permissions",id:"permissions",level:3},{value:"APIs",id:"apis",level:3},{value:"User interface",id:"user-interface",level:3},{value:"Lifecycle",id:"lifecycle",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"about-snaps",children:"About Snaps"}),"\n",(0,a.jsx)(n.p,{children:"MetaMask Snaps is an open source system that allows anyone to safely extend the functionality of\nMetaMask, creating new web3 end user experiences.\nFor example, a Snap can add support for different blockchain networks, add custom account types, or\nprovide additional functionality using its own APIs.\nThis allows MetaMask to be used with a far more diverse set of protocols, dapps, and services."}),"\n",(0,a.jsx)(n.p,{children:"The following diagram outlines the high-level architecture of the Snaps system:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Snaps architecture diagram",src:s(76133).A+"",width:"1512",height:"722"})}),"\n",(0,a.jsxs)(n.p,{children:["The following diagram illustrates how Snaps can ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/features/non-evm-networks",children:"derive non-EVM keys"})," using\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_getbip32entropy",children:(0,a.jsx)(n.code,{children:"snap_getBip32Entropy"})}),",\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_getbip44entropy",children:(0,a.jsx)(n.code,{children:"snap_getBip44Entropy"})}),", and\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_getentropy",children:(0,a.jsx)(n.code,{children:"snap_getEntropy"})}),":"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Snaps get entropy diagram",src:s(25711).A+"",width:"1512",height:"444"})}),"\n",(0,a.jsx)(n.admonition,{title:"important",type:"caution",children:(0,a.jsx)(n.p,{children:"Snaps cannot access the user's Secret Recovery Phrase.\nSnaps can only derive non-EVM keys using the provided methods.\nFurthermore, any Snap that derives keys must undergo a security audit before it can be made\navailable to MetaMask users."})}),"\n",(0,a.jsx)(n.h2,{id:"technical-overview",children:"Technical overview"}),"\n",(0,a.jsxs)(n.p,{children:["A Snap is a JavaScript program run in an isolated and secure ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/learn/about-snaps/execution-environment",children:"execution environment"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,a.jsxs)(n.p,{children:["By default, a Snap has no capabilities.\nIt must ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/how-to/request-permissions",children:"request permissions"})," for various capabilities to be\ngranted by the user at installation, such as accessing the network, storing data in MetaMask, or\ndisplaying dialogs.\nData stored by a Snap is only visible to that Snap, and a Snap cannot access data of other Snaps or\nof MetaMask core unless given permission to do so."]}),"\n",(0,a.jsx)(n.h3,{id:"apis",children:"APIs"}),"\n",(0,a.jsxs)(n.p,{children:["A Snap can communicate with MetaMask using the ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/snaps-api",children:"Snaps API"})," and some\n",(0,a.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"MetaMask JSON-RPC API"})," methods.\nThe Snaps API allows Snaps to extend or modify the functionality of MetaMask, and communicate with\nother Snaps."]}),"\n",(0,a.jsxs)(n.p,{children:["Dapps can use the ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/wallet-api-for-snaps",children:"Wallet API for Snaps"})," to install and\ncommunicate with Snaps."]}),"\n",(0,a.jsx)(n.p,{children:"A Snap can implement its own custom JSON-RPC API to communicate with dapps and other Snaps."}),"\n",(0,a.jsxs)(n.p,{children:["Learn more ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/learn/about-snaps/apis",children:"about the Snaps APIs"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"user-interface",children:"User interface"}),"\n",(0,a.jsx)(n.p,{children:"A Snap must represent itself and what it does to the end user.\nThe user can see their installed Snaps in the MetaMask settings page.\nFor each Snap, the user can:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"See most of its manifest file data."}),"\n",(0,a.jsx)(n.li,{children:"See its execution status (running, stopped, or crashed)."}),"\n",(0,a.jsx)(n.li,{children:"Enable and disable the Snap."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["A Snap can also display a ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/features/custom-ui/home-pages",children:"home page"})," within MetaMask that\nthe user can access using the Snaps menu."]}),"\n",(0,a.jsxs)(n.p,{children:["Other than the settings page and home page, a Snap can\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/features/custom-ui/",children:"modify the MetaMask UI"})," only\nby displaying ",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/features/custom-ui/dialogs",children:"dialogs"}),",\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/reference/entry-points#ontransaction",children:"transaction insights"}),", or\n",(0,a.jsx)(n.a,{href:"/1202-tutorial/snaps/features/signature-insights",children:"signature insights"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This means that many Snaps must use companion dapps and custom JSON-RPC API methods to\npresent data to the user."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Providing more ways for Snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more Snaps will be able to contain their user interfaces entirely within\nMetaMask itself."})}),"\n",(0,a.jsx)(n.h3,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,a.jsx)(n.p,{children:"A Snap wakes up in response to messages or events, and shuts down when idle.\nAlso, if MetaMask detects that a Snap becomes unresponsive, it shuts the Snap down."}),"\n",(0,a.jsx)(n.p,{children:"A Snap is considered unresponsive if one of the following occurs:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"It hasn't received a JSON-RPC request for 30 seconds."}),"\n",(0,a.jsx)(n.li,{children:"It takes more than 60 seconds to process a JSON-RPC request."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Stopped Snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a Snap is disabled, the user must re-enable it before it can start again."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},76133:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/snaps-architecture-de7180cbb5327cca7ed91f3cad2b40c7.png"},25711:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/snaps-getentropy-6cccbe90c571038546e84cc3826b506b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);