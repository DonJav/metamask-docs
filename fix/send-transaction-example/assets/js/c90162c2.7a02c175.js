"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{15680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},l=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||f[m]||i;return n?t.createElement(d,s(s({ref:a},l),{},{components:n})):t.createElement(d,s({ref:a},l))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16658:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const i={description:"Display and update interactive user interfaces.",sidebar_position:1},s="Interactive UI",p={unversionedId:"features/custom-ui/interactive-ui",id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/fix/send-transaction-example/snaps/features/custom-ui/interactive-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/fix/send-transaction-example/snaps/features/custom-ui/"},next:{title:"Data storage",permalink:"/fix/send-transaction-example/snaps/features/data-storage"}},o={},c=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function f(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"interactive-ui"},"Interactive UI"),(0,r.yg)("p",null,"You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/features/custom-ui/"},"custom UI"),".\nIt allows interfaces returned from ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),",\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", and\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage"))," to respond to user input."),(0,r.yg)("p",null,"The following interactive UI components are available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-ui/#button"},(0,r.yg)("inlineCode",{parentName:"a"},"button"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-ui/#form"},(0,r.yg)("inlineCode",{parentName:"a"},"form"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-ui/#input"},(0,r.yg)("inlineCode",{parentName:"a"},"input")))),(0,r.yg)("h2",{id:"create-an-interactive-interface"},"Create an interactive interface"),(0,r.yg)("p",null,"Create an interactive interface using the\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#snap_createinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_createInterface"))," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#snap_dialog"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", returned from\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#ontransaction"},(0,r.yg)("inlineCode",{parentName:"a"},"onTransaction")),", or from\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#onhomepage"},(0,r.yg)("inlineCode",{parentName:"a"},"onHomePage")),"."),(0,r.yg)("p",null,"If you need to ",(0,r.yg)("a",{parentName:"p",href:"#update-an-interactive-interface"},"update the interface")," or\n",(0,r.yg)("a",{parentName:"p",href:"#get-an-interactive-interfaces-state"},"get its state")," at a future time, you should store its ID in\nthe Snap's storage."),(0,r.yg)("h2",{id:"update-an-interactive-interface"},"Update an interactive interface"),(0,r.yg)("p",null,"To update an interactive interface that is still active, use the\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#snap_updateinterface"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_updateInterface"))," method.\nPass the ID of the interface to be updated, and the new UI."),(0,r.yg)("p",null,"Updating an interface can be done as part of the\n",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#onuserinput"},(0,r.yg)("inlineCode",{parentName:"a"},"onUserInput"))," entry point or as part of an\nasynchronous process."),(0,r.yg)("p",null,"The following is an example flow:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},"The user fills the fields, and selects the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"onUserInput")," is called, and the logic detects that the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button was selected."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called, replacing the ",(0,r.yg)("strong",{parentName:"li"},"Send funds")," button with a ",(0,r.yg)("a",{parentName:"li",href:"/fix/send-transaction-example/snaps/features/custom-ui/#spinner"},(0,r.yg)("inlineCode",{parentName:"a"},"spinner")),"."),(0,r.yg)("li",{parentName:"ol"},"Custom logic sends the funds."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"snap_updateInterface")," is called again, replacing the whole UI with a success message.")),(0,r.yg)("h2",{id:"get-an-interactive-interfaces-state"},"Get an interactive interface's state"),(0,r.yg)("p",null,"At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,r.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#snap_getinterfacestate"},(0,r.yg)("inlineCode",{parentName:"a"},"snap_getInterfaceState")),"\nmethod with the ID of the interface."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/interactive-ui-example-snap")),"\npackage for a full example of implementing interactive UI."))}f.isMDXComponent=!0}}]);