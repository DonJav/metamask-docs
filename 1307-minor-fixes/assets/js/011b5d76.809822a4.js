"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4939],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return t?o.createElement(f,s(s({ref:n},l),{},{components:t})):o.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=t(58168),r=(t(96540),t(15680));const a={description:"Resolve names to addresses and vice versa.",sidebar_position:3,sidebar_custom_props:{flask_only:!0}},s="Custom name resolution",i={unversionedId:"features/custom-name-resolution",id:"features/custom-name-resolution",title:"Custom name resolution",description:"Resolve names to addresses and vice versa.",source:"@site/snaps/features/custom-name-resolution.md",sourceDirName:"features",slug:"/features/custom-name-resolution",permalink:"/1307-minor-fixes/snaps/features/custom-name-resolution",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-name-resolution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Resolve names to addresses and vice versa.",sidebar_position:3,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Security guidelines",permalink:"/1307-minor-fixes/snaps/features/custom-evm-accounts/security"},next:{title:"Custom UI",permalink:"/1307-minor-fixes/snaps/features/custom-ui/"}},p={},m=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to provide name resolution",id:"1-request-permission-to-provide-name-resolution",level:3},{value:"2. Implement custom name resolution",id:"2-implement-custom-name-resolution",level:3},{value:"Example",id:"example",level:2}],l={toc:m},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"custom-name-resolution"},"Custom name resolution"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"You can implement custom domain resolution and reverse resolution using the following steps."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-request-permission-to-provide-name-resolution"},"1. Request permission to provide name resolution"),(0,r.yg)("p",null,"Request the ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/snaps/reference/permissions#endowmentname-lookup"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:name-lookup"))," permission."),(0,r.yg)("p",null,"For example, to resolve Ethereum Mainnet domains, add the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:name-lookup": {\n    "chains": ["eip155:1"]\n  }\n}\n')),(0,r.yg)("h3",{id:"2-implement-custom-name-resolution"},"2. Implement custom name resolution"),(0,r.yg)("p",null,"Expose an ",(0,r.yg)("a",{parentName:"p",href:"/1307-minor-fixes/snaps/reference/entry-points#onnamelookup"},(0,r.yg)("inlineCode",{parentName:"a"},"onNameLookup"))," entry point, which receives a\n",(0,r.yg)("inlineCode",{parentName:"p"},"chainId")," and either a ",(0,r.yg)("inlineCode",{parentName:"p"},"domain")," or an ",(0,r.yg)("inlineCode",{parentName:"p"},"address"),".\nThe following example implements a very basic resolution from Unstoppable Domains domain names to\nEthereum addresses in ",(0,r.yg)("inlineCode",{parentName:"p"},"onNameLookup"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnNameLookupHandler } from "@metamask/snaps-types";\n\nconst UNSTOPPABLE_API_KEY = "xxx";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n  const { chainId, domain } = request;\n\n  if (domain && chainId === "eip155:1") {\n    const response = await fetch(`https://api.unstoppabledomains.com/resolve/domains/${domain}`, {\n      headers: {\n        accept: "application/json",\n        authorization: `Bearer ${UNSTOPPABLE_API_KEY}`,\n      },\n    });\n    const data = await response.json();\n    const resolvedAddress = data.records["crypto.ETH.address"];\n    if (address) {\n      return {\n        resolvedAddresses: [{ resolvedAddress, protocol: "Unstoppable Domains" }],\n      };\n    }\n  }\n\n  return null;\n};\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/name-lookup"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/name-lookup-example-snap")),"\npackage for a full example of implementing custom name resolution."))}c.isMDXComponent=!0}}]);