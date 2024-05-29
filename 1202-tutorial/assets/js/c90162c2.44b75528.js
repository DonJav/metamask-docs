"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{56678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(74848),i=n(28453);const s={description:"Display and update interactive user interfaces.",sidebar_position:1},r="Interactive UI",c={id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/1202-tutorial/snaps/features/custom-ui/interactive-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/1202-tutorial/snaps/features/custom-ui/"},next:{title:"Dialogs",permalink:"/1202-tutorial/snaps/features/custom-ui/dialogs"}},o={},l=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"interactive-ui",children:"Interactive UI"}),"\n",(0,a.jsxs)(t.p,{children:["You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/",children:"custom UI"}),".\nIt allows interfaces returned from ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/dialogs",children:"dialogs"}),", ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/home-pages",children:"home pages"}),", and\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/entry-points#ontransaction",children:"transaction insights"})," to respond to user input."]}),"\n",(0,a.jsx)(t.p,{children:"The following interactive UI components are available:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/#button",children:(0,a.jsx)(t.code,{children:"button"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/#form",children:(0,a.jsx)(t.code,{children:"form"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/#input",children:(0,a.jsx)(t.code,{children:"input"})})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-an-interactive-interface",children:"Create an interactive interface"}),"\n",(0,a.jsxs)(t.p,{children:["Create an interactive interface using the\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_createinterface",children:(0,a.jsx)(t.code,{children:"snap_createInterface"})})," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_dialog",children:(0,a.jsx)(t.code,{children:"snap_dialog"})}),", returned from\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/entry-points#ontransaction",children:(0,a.jsx)(t.code,{children:"onTransaction"})}),", or from\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/entry-points#onhomepage",children:(0,a.jsx)(t.code,{children:"onHomePage"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you need to ",(0,a.jsx)(t.a,{href:"#update-an-interactive-interface",children:"update the interface"})," or\n",(0,a.jsx)(t.a,{href:"#get-an-interactive-interfaces-state",children:"get its state"})," at a future time, you should store its ID in\nthe Snap's storage."]}),"\n",(0,a.jsx)(t.h2,{id:"update-an-interactive-interface",children:"Update an interactive interface"}),"\n",(0,a.jsxs)(t.p,{children:["To update an interactive interface that is still active, use the\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_updateinterface",children:(0,a.jsx)(t.code,{children:"snap_updateInterface"})})," method.\nPass the ID of the interface to be updated, and the new UI."]}),"\n",(0,a.jsxs)(t.p,{children:["Updating an interface can be done as part of the\n",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/entry-points#onuserinput",children:(0,a.jsx)(t.code,{children:"onUserInput"})})," entry point or as part of an\nasynchronous process."]}),"\n",(0,a.jsx)(t.p,{children:"The following is an example flow:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,a.jsx)(t.strong,{children:"Send funds"})," button."]}),"\n",(0,a.jsxs)(t.li,{children:["The user fills the fields, and selects the ",(0,a.jsx)(t.strong,{children:"Send funds"})," button."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"onUserInput"})," is called, and the logic detects that the ",(0,a.jsx)(t.strong,{children:"Send funds"})," button was selected."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"snap_updateInterface"})," is called, replacing the ",(0,a.jsx)(t.strong,{children:"Send funds"})," button with a ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/features/custom-ui/#spinner",children:(0,a.jsx)(t.code,{children:"spinner"})}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Custom logic sends the funds."}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"snap_updateInterface"})," is called again, replacing the whole UI with a success message."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"get-an-interactive-interfaces-state",children:"Get an interactive interface's state"}),"\n",(0,a.jsxs)(t.p,{children:["At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,a.jsx)(t.a,{href:"/1202-tutorial/snaps/reference/snaps-api#snap_getinterfacestate",children:(0,a.jsx)(t.code,{children:"snap_getInterfaceState"})}),"\nmethod with the ID of the interface."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui",children:(0,a.jsx)(t.code,{children:"@metamask/interactive-ui-example-snap"})}),"\npackage for a full example of implementing interactive UI."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);