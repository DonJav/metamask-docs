"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1891],{23414:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=n(74848),r=n(28453);const c={sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},s="Interact with smart contracts in Unity",i={id:"how-to/use-sdk/gaming/unity/smart-contracts/index",title:"Interact with smart contracts in Unity",description:"Interact with smart contracts in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/",permalink:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",tags:[{label:"Unity SDK",permalink:"/1202-tutorial/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Set up Infura",permalink:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/infura"},next:{title:"Contract interface",permalink:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Generate contract code",id:"generate-contract-code",level:2},{value:"Use the contract",id:"use-the-contract",level:2},{value:"Use contract templates",id:"use-contract-templates",level:3},{value:"Advanced topics",id:"advanced-topics",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"interact-with-smart-contracts-in-unity",children:"Interact with smart contracts in Unity"}),"\n",(0,a.jsx)(e.p,{children:"You can interact with smart contracts from your Unity game with MetaMask SDK installed."}),"\n",(0,a.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK set up"})," in your Unity game"]}),"\n",(0,a.jsxs)(e.li,{children:["A ",(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/concepts/smart-contracts#contract-abi",children:"contract ABI"})," JSON file or\n",(0,a.jsx)(e.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/artifacts#compilation-artifacts",children:"Hardhat artifact"}),"\nJSON file"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"generate-contract-code",children:"Generate contract code"}),"\n",(0,a.jsxs)(e.p,{children:["You can use the MetaMask Unity contract code generator to generate\n",(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface",children:"contract interface"})," files.\nThe code generator automatically generates backed types for all contract interfaces to be used by\nthe ",(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory",children:"contract factory"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["In your Unity editor, go to ",(0,a.jsx)(e.strong,{children:"Tools > MetaMask > Contract ABI Converter"}),".\nA new dialog box opens:"]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"dialog",src:n(45113).A+"",width:"440",height:"612"})})}),"\n",(0,a.jsxs)(e.p,{children:["Paste your contract ABI JSON file or Hardhat artifact JSON file.\nIf you plan to deploy your contract, you must provide a Hardhat artifact, since this\nhas the required ",(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/concepts/smart-contracts#contract-bytecode",children:"contract bytecode"})," needed for deployment."]}),"\n",(0,a.jsxs)(e.p,{children:["You can also specify the ",(0,a.jsx)(e.code,{children:"Root Namespace"})," for the generated contract code, with the default value being ",(0,a.jsx)(e.code,{children:"Contracts"}),". Ensure that you include ",(0,a.jsx)(e.code,{children:"using Contracts"}),"; at the beginning of your scripts before using the generated code."]}),"\n",(0,a.jsxs)(e.p,{children:["Select ",(0,a.jsx)(e.strong,{children:"Convert"}),", which opens a save dialog box. Then, select a folder to save the generated code files to, somewhere inside the ",(0,a.jsx)(e.code,{children:"Assets"})," folder."]}),"\n",(0,a.jsx)(e.h2,{id:"use-the-contract",children:"Use the contract"}),"\n",(0,a.jsxs)(e.p,{children:["After generating the contract code, you can use the contract using the\n",(0,a.jsx)(e.code,{children:"Contract.Attach<T>(...)"})," function."]}),"\n",(0,a.jsxs)(e.p,{children:["This function takes a type ",(0,a.jsx)(e.code,{children:"T"})," which must be the interface type of the contract to use.\nThis function returns that type ",(0,a.jsx)(e.code,{children:"T"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["You must provide the ",(0,a.jsx)(e.code,{children:"address"})," string the contract should be loaded from, and the\n",(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",children:"provider"})," to use to interact with the contract.\nUsually, the provider is ",(0,a.jsx)(e.code,{children:"MetaMaskUnity.Instance.Wallet"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"The following is an example of using a contract:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-csharp",children:'public async void Start()\n{\n  var metaMask = MetaMaskUnity.Instance.Wallet;\n  var address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";\n  \n  ERC20 usdc = Contract.Attach<ERC20>(address, metaMask);\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Once you have an instance of your contract interface of type ",(0,a.jsx)(e.code,{children:"T"})," (in this example, ",(0,a.jsx)(e.code,{children:"ERC20"}),"), you may\ninvoke any function inside the interface type.\nFor example:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-csharp",children:"public async void Start()\n{\n  // Setup...\n\n  var balance = await usdc.BalanceOf(metaMask.SelectedAddress);\n  Debug.Log(balance);\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-contract-templates",children:"Use contract templates"}),"\n",(0,a.jsxs)(e.p,{children:["The MetaMask Unity SDK offers several contract templates that you can create and manage inside the\nUnity editor.\nThese templates are scriptable objects, so you can configure them once inside the editor and use\nthem throughout your scripts.\nThese templates automatically perform the ",(0,a.jsx)(e.code,{children:"Contract.Attach"})," function for you and automatically\nswitch contract addresses when the network changes."]}),"\n",(0,a.jsxs)(e.p,{children:["You can create a new template by going to ",(0,a.jsx)(e.strong,{children:"Assets > Create > MetaMask > Contract Templates"})," and\nselecting one of the following:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"ERC20"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"ERC721"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"ERC1155"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Before using the contract template, configure the contract address to use for each chain:"}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"empty template",src:n(77636).A+"",width:"433",height:"218"})})}),"\n",(0,a.jsxs)(e.p,{children:["Select ",(0,a.jsx)(e.strong,{children:"+"})," to add a new address/chain pair.\nWhen adding a new address, if you don't see your desired blockchain listed, you can modify the\n",(0,a.jsx)(e.code,{children:"ScriptableContract.ChainId"})," enum to include your chain and chain ID."]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"full template",src:n(39991).A+"",width:"435",height:"342"})})}),"\n",(0,a.jsxs)(e.p,{children:["Once configured, you can use this scriptable object as a variable inside your scripts.\nThe contract template has the same interface and usage as if you used ",(0,a.jsx)(e.code,{children:"Contract.Attach"}),", but the\nsetup and network switching is done for you."]}),"\n",(0,a.jsx)(e.h2,{id:"advanced-topics",children:"Advanced topics"}),"\n",(0,a.jsx)(e.p,{children:"To learn more about and customize your contract interactions using the Unity SDK, see the following topics:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface",children:"Contract interface"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory",children:"Contract factory"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class",children:"Contract proxy class"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider",children:"Contract provider"})}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},45113:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/contract-abi-converter-dialog-56376f7101d15948e9e7f7687f904d75.png"},77636:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/unity-empty-template-a5d151ef642b84b3d7618e5099b9dda2.png"},39991:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/unity-example-template-3e25ec341358849753f8f3462bb88b76.png"},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var a=n(96540);const r={},c=a.createContext(r);function s(t){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),a.createElement(c.Provider,{value:e},t.children)}}}]);