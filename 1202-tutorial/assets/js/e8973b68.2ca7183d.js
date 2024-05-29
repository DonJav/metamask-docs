"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[785],{42413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(74848),n=a(28453);const o={description:"Display custom modals using the JavaScript SDK.",sidebar_position:10,tags:["JavaScript SDK"]},i="Display custom modals",r={id:"how-to/use-sdk/javascript/display-custom-modals",title:"Display custom modals",description:"Display custom modals using the JavaScript SDK.",source:"@site/wallet/how-to/use-sdk/javascript/display-custom-modals.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/display-custom-modals",permalink:"/1202-tutorial/wallet/how-to/use-sdk/javascript/display-custom-modals",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/display-custom-modals.md",tags:[{label:"JavaScript SDK",permalink:"/1202-tutorial/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:10,frontMatter:{description:"Display custom modals using the JavaScript SDK.",sidebar_position:10,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Batch JSON-RPC requests",permalink:"/1202-tutorial/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},next:{title:"Gaming",permalink:"/1202-tutorial/wallet/how-to/use-sdk/gaming/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a custom modal component",id:"1-create-a-custom-modal-component",level:3},{value:"2. Implement custom modal logic",id:"2-implement-custom-modal-logic",level:3},{value:"3. Test your custom modal",id:"3-test-your-custom-modal",level:3},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"display-custom-modals",children:"Display custom modals"}),"\n",(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/concepts/sdk/",children:"MetaMask SDK"})," to display custom MetaMask modals."]}),"\n",(0,s.jsx)(t.p,{children:"When integrating a web dapp with MetaMask, you can enhance the user experience by customizing the\nlogic and user interface of the displayed modals, which initiate user interactions such as prompting\nthe user to install MetaMask.\nThis page describes how to create a custom modal in React, but you can adapt the implementation to\nother web frameworks such as Vue.js or pure HTML/JavaScript."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask SDK set up in your JavaScript dapp.\nThis example uses the ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/javascript/react/",children:"MetaMask React SDK"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-create-a-custom-modal-component",children:"1. Create a custom modal component"}),"\n",(0,s.jsx)(t.p,{children:"Create a custom modal component that aligns with your dapp's design and functionality requirements."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="App.js"',children:'import React from "react";\n\nconst CustomModal = ({ onClose }) => (\n  <div className="modal">\n    <button onClick={onClose}>Close</button>\n  </div>\n);\n\nexport default CustomModal;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"2-implement-custom-modal-logic",children:"2. Implement custom modal logic"}),"\n",(0,s.jsxs)(t.p,{children:["When initializing ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/how-to/use-sdk/javascript/react/#3-wrap-your-project-with-metamaskprovider",children:(0,s.jsx)(t.code,{children:"MetaMaskProvider"})}),",\nuse the ",(0,s.jsx)(t.a,{href:"/1202-tutorial/wallet/reference/sdk-js-options#modals",children:(0,s.jsx)(t.code,{children:"modals"})})," SDK option to set up custom behavior\nfor scenarios such as when MetaMask isn't installed.\nFor example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { MetaMaskProvider } from "@metamask/sdk-react";\nimport CustomModal from "./CustomModal";\nimport ReactDOM from "react-dom";\n\nconst App = () => (\n  <MetaMaskProvider\n    sdkOptions={{\n      modals: {\n        install: ({ link }) => {\n          let modalContainer = null;\n\n          return {\n            mount: () => {\n              modalContainer = document.createElement("div");\n              document.body.appendChild(modalContainer);\n\n              ReactDOM.render(\n                <CustomModal onClose={() => {\n                    ReactDOM.unmountComponentAtNode(modalContainer);\n                    modalContainer.remove();\n                  }}\n                />,\n                modalContainer\n              );\n            },\n            unmount: () => {\n              if (modalContainer) {\n                ReactDOM.unmountComponentAtNode(modalContainer);\n                modalContainer.remove();\n              }\n            },\n          };\n        },\n      },\n    }}\n  >\n    {/* Other components */}\n  </MetaMaskProvider>\n);\n\nexport default App;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"3-test-your-custom-modal",children:"3. Test your custom modal"}),"\n",(0,s.jsx)(t.p,{children:"Test your dapp to ensure the custom modal operates as intended, especially in scenarios such as when\nMetaMask isn't installed."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Custom modal gif",src:a(15836).A+"",width:"800",height:"360"})})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-with-custom-modal",children:"example React dapp with a custom modal\nimplementation"}),".\nThis example can serve as a starting point for understanding the approach, which you can then adapt\nto other web frameworks as needed."]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15836:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/custom-modal-b06fd8cd12d48799411b83cb1d152460.gif"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var s=a(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);