"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1343],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?t.createElement(y,i(i({ref:n},c),{},{components:a})):t.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78985:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(58168),o=(a(96540),a(15680));const r={sidebar_position:6,description:"Call an action when your Snap is installed or updated."},i="Lifecycle hooks",s={unversionedId:"features/lifecycle-hooks",id:"features/lifecycle-hooks",title:"Lifecycle hooks",description:"Call an action when your Snap is installed or updated.",source:"@site/snaps/features/lifecycle-hooks.md",sourceDirName:"features",slug:"/features/lifecycle-hooks",permalink:"/fix/send-transaction-example/snaps/features/lifecycle-hooks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/lifecycle-hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Call an action when your Snap is installed or updated."},sidebar:"snapsSidebar",previous:{title:"Data storage",permalink:"/fix/send-transaction-example/snaps/features/data-storage"},next:{title:"Localization",permalink:"/fix/send-transaction-example/snaps/features/localization"}},l={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to implement lifecycle hooks",id:"1-request-permission-to-implement-lifecycle-hooks",level:3},{value:"2. Run an action on installation",id:"2-run-an-action-on-installation",level:3},{value:"3. Run an action on update",id:"3-run-an-action-on-update",level:3},{value:"Example",id:"example",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,o.yg)(m,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"lifecycle-hooks"},"Lifecycle hooks"),(0,o.yg)("p",null,"You can implement lifecycle hooks to automatically run an action, such as displaying a dialog or\nnotification, when a user installs or updates your Snap."),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("h3",{id:"1-request-permission-to-implement-lifecycle-hooks"},"1. Request permission to implement lifecycle hooks"),(0,o.yg)("p",null,"Request the ",(0,o.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/permissions#endowmentlifecycle-hooks"},(0,o.yg)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks")),"\npermission.\nAdd the following to your Snap's manifest file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n')),(0,o.yg)("h3",{id:"2-run-an-action-on-installation"},"2. Run an action on installation"),(0,o.yg)("p",null,"To run an action when a user installs your Snap, expose the\n",(0,o.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#oninstall"},(0,o.yg)("inlineCode",{parentName:"a"},"onInstall"))," entry point and implement the action.\nFor example, you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"onInstall")," to perform any initialization that is required upon installation."),(0,o.yg)("p",null,"The following example displays an ",(0,o.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#alert-dialog"},"alert dialog")," upon installation:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Installation successful"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n')),(0,o.yg)("h3",{id:"3-run-an-action-on-update"},"3. Run an action on update"),(0,o.yg)("p",null,"To run an action when a user updates your Snap, expose the\n",(0,o.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/entry-points#onupdate"},(0,o.yg)("inlineCode",{parentName:"a"},"onUpdate"))," entry point and implement the action.\nFor example, you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"onUpdate")," to perform any migrations that are required upon update."),(0,o.yg)("p",null,"The following example displays an ",(0,o.yg)("a",{parentName:"p",href:"/fix/send-transaction-example/snaps/reference/snaps-api#alert-dialog"},"alert dialog")," upon update:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Update successful"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n')),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/lifecycle-hooks"},(0,o.yg)("inlineCode",{parentName:"a"},"@metamask/lifecycle-hooks-example-snap")),"\npackage for a full example of implementing lifecycle hooks."))}u.isMDXComponent=!0}}]);