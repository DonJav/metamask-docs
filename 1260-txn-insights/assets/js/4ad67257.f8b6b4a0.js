"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9071],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?t.createElement(y,o(o({ref:a},u),{},{components:n})):t.createElement(y,o({ref:a},u))}));function y(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>m});var t=n(58168),l=n(96540),r=n(20053),o=n(23104),i=n(47751),s=n(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),m=e=>{const a=e.currentTarget,n=c.indexOf(a),t=u[n].value;t!==i&&(d(a),s(t))},y=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:o}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:y,onClick:m},o,{className:(0,r.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===a})}),n??a)})))}function c(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function d(e){const a=(0,i.u)(e);return l.createElement("div",{className:(0,r.A)("tabs-container",p.tabList)},l.createElement(u,(0,t.A)({},e,a)),l.createElement(c,(0,t.A)({},e,a)))}function m(e){const a=(0,s.A)();return l.createElement(d,(0,t.A)({key:String(a)},e))}},47751:(e,a,n)=>{n.d(a,{u:()=>d});var t=n(96540),l=n(56347),r=n(57485),o=n(31682),i=n(89466);function s(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??s(n);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:n}=e;const o=(0,l.W6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(o.location.search);a.set(i,e),o.replace({...o.location,search:a.toString()})}),[i,o])]}function d(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,r=p(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[d,m]=c({queryString:n,groupId:l}),[y,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,i.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),h=(()=>{const e=d??y;return u({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,r]),tabValues:r}}},14427:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=n(58168),l=(n(96540),n(15680)),r=n(4865),o=n(19365);const i={description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},s="JavaScript SDK options",p={unversionedId:"reference/sdk-js-options",id:"reference/sdk-js-options",title:"JavaScript SDK options",description:"See the JavaScript SDK options reference.",source:"@site/wallet/reference/sdk-js-options.md",sourceDirName:"reference",slug:"/reference/sdk-js-options",permalink:"/1260-txn-insights/wallet/reference/sdk-js-options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-js-options.md",tags:[{label:"JavaScript SDK",permalink:"/1260-txn-insights/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"See the JavaScript SDK options reference.",sidebar_position:1,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Reference",permalink:"/1260-txn-insights/wallet/reference"},next:{title:"Unity SDK API",permalink:"/1260-txn-insights/wallet/reference/sdk-unity-api"}},u={},c=[{value:"<code>checkInstallationImmediately</code>",id:"checkinstallationimmediately",level:3},{value:"<code>checkInstallationOnAllCalls</code>",id:"checkinstallationonallcalls",level:3},{value:"<code>communicationLayerPreference</code>",id:"communicationlayerpreference",level:3},{value:"<code>communicationServerUrl</code>",id:"communicationserverurl",level:3},{value:"<code>dappMetadata</code>",id:"dappmetadata",level:3},{value:"<code>defaultReadOnlyChainId</code>",id:"defaultreadonlychainid",level:3},{value:"<code>enableDebug</code>",id:"enabledebug",level:3},{value:"<code>extensionOnly</code>",id:"extensiononly",level:3},{value:"<code>infuraAPIKey</code>",id:"infuraapikey",level:3},{value:"<code>modals</code>",id:"modals",level:3},{value:"<code>openDeeplink</code>",id:"opendeeplink",level:3},{value:"<code>preferDesktop</code>",id:"preferdesktop",level:3},{value:"<code>readonlyRPCMap</code>",id:"readonlyrpcmap",level:3},{value:"<code>shouldShimWeb3</code>",id:"shouldshimweb3",level:3},{value:"<code>timer</code>",id:"timer",level:3},{value:"<code>transports</code>",id:"transports",level:3},{value:"<code>ui</code>",id:"ui",level:3},{value:"<code>useDeeplink</code>",id:"usedeeplink",level:3},{value:"<code>wakeLockType</code>",id:"wakelocktype",level:3}],d={toc:c},m="wrapper";function y(e){let{components:a,...n}=e;return(0,l.yg)(m,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"javascript-sdk-options"},"JavaScript SDK options"),(0,l.yg)("p",null,"The ",(0,l.yg)("a",{parentName:"p",href:"/1260-txn-insights/wallet/how-to/use-sdk/javascript/"},"JavaScript version of MetaMask SDK")," takes the\nfollowing options."),(0,l.yg)("h3",{id:"checkinstallationimmediately"},(0,l.yg)("inlineCode",{parentName:"h3"},"checkInstallationImmediately")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationImmediately: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationImmediately: true\n")))),(0,l.yg)("p",null,"Enables or disables immediately checking if MetaMask is installed on the user's browser.\nIf ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the SDK checks for installation upon page load and sends a connection request, prompting\nthe user to install MetaMask if it's not already installed.\nIf ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", the SDK waits for the connect method to be called to check for installation."),(0,l.yg)("p",null,"The default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"checkinstallationonallcalls"},(0,l.yg)("inlineCode",{parentName:"h3"},"checkInstallationOnAllCalls")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationOnAllCalls: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"checkInstallationOnAllCalls: true\n")))),(0,l.yg)("p",null,"Enables or disables checking if MetaMask is installed on the user's browser before each RPC request.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"communicationlayerpreference"},(0,l.yg)("inlineCode",{parentName:"h3"},"communicationLayerPreference")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"communicationLayerPreference: <type>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"communicationLayerPreference: SOCKET\n")))),(0,l.yg)("p",null,"The preferred communication layer to use.\nThe default and only option is ",(0,l.yg)("inlineCode",{parentName:"p"},"SOCKET")," for ",(0,l.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/"},"Socket.IO"),"."),(0,l.yg)("h3",{id:"communicationserverurl"},(0,l.yg)("inlineCode",{parentName:"h3"},"communicationServerUrl")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"communicationServerUrl: <string>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'communicationServerUrl: "https://metamask-sdk-socket.metafi.codefi.network/"\n')))),(0,l.yg)("p",null,"The URL of the communication server to use.\nThis option is mainly used for debugging and testing the SDK."),(0,l.yg)("h3",{id:"dappmetadata"},(0,l.yg)("inlineCode",{parentName:"h3"},"dappMetadata")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"dappMetadata: {\n  name: <string>,\n  url: <string>,\n  base64Icon: <string>,\n}\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'dappMetadata: {\n  name: "My Dapp",\n  url: "https://mydapp.com",\n  base64Icon: "data:image/png;base64,...",\n}\n')))),(0,l.yg)("p",null,"Metadata about the dapp using the SDK.\nThe metadata options are:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"name")," - Name of the dapp"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"url")," - URL of the dapp"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"base64Icon")," - A base64-encoded icon")),(0,l.yg)("admonition",{title:"important",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Setting ",(0,l.yg)("inlineCode",{parentName:"p"},"dappMetaData")," creates a clear and trustworthy user experience when connecting your dapp to\nMetaMask Mobile.\nMetaMask Mobile displays this metadata in the connection modal to help users identify and verify the\nconnection request.")),(0,l.yg)("h3",{id:"defaultreadonlychainid"},(0,l.yg)("inlineCode",{parentName:"h3"},"defaultReadOnlyChainId")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"defaultReadOnlyChainId: <number or hexadecimal string>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'defaultReadOnlyChainId: "0x1"\n')))),(0,l.yg)("p",null,"Enables sending ",(0,l.yg)("a",{parentName:"p",href:"/1260-txn-insights/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"read-only RPC requests")," to\nthis chain ID before the user connects to MetaMask.\nThe value is automatically updated to the chain ID used in MetaMask once connected."),(0,l.yg)("h3",{id:"enabledebug"},(0,l.yg)("inlineCode",{parentName:"h3"},"enableDebug")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"enableDebug: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"enableDebug: false\n")))),(0,l.yg)("p",null,"Enables or disables sending anonymous analytics to MetaMask to help improve the SDK.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"extensiononly"},(0,l.yg)("inlineCode",{parentName:"h3"},"extensionOnly")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"extensionOnly: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"extensionOnly: true\n")))),(0,l.yg)("p",null,"Enables or disables automatically using the MetaMask browser extension if it's detected.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"infuraapikey"},(0,l.yg)("inlineCode",{parentName:"h3"},"infuraAPIKey")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"infuraAPIKey: <string>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"infuraAPIKey: process.env.INFURA_API_KEY\n")))),(0,l.yg)("p",null,"The ",(0,l.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"Infura API key")," to\nuse for RPC requests.\nConfigure this option to ",(0,l.yg)("a",{parentName:"p",href:"/1260-txn-insights/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests from your dapp"),"."),(0,l.yg)("admonition",{title:"important",type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Use ",(0,l.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/use-an-allowlist"},"Infura allowlists"),"\nto protect against other people submitting requests to your API key.\nYou can restrict interactions to specific addresses, origins, user agents, and request methods.\nWe recommend using all allowlist options to maximize the security of your API key and dapp.")),(0,l.yg)("h3",{id:"modals"},(0,l.yg)("inlineCode",{parentName:"h3"},"modals")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"modals: <object>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"modals: {\n  onPendingModalDisconnect: () => {\n    // Custom logic for pending modal disconnect.\n  },\n  install: (params) => {\n    // Custom install modal logic.\n    const { link, debug, installer, terminate, connectWithExtension } = params;\n    return {\n      mount: (link) => { /* Custom mount logic */ },\n      unmount: (shouldTerminate) => { /* Custom unmount logic */ },\n    };\n  },\n  otp: ({ debug, onDisconnect }) => {\n    // Custom OTP modal logic.\n    return {\n      mount: () => { /* Custom mount logic */ },\n      updateOTPValue: (otpValue) => { /* Custom OTP value update logic */ },\n      unmount: () => { /* Custom unmount logic */ },\n    };\n  },\n}\n")))),(0,l.yg)("p",null,"An object that allows you to ",(0,l.yg)("a",{parentName:"p",href:"/1260-txn-insights/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of the displayed modals"),".\nThis is useful if your dapp requires a custom way to handle connection and reconnection scenarios."),(0,l.yg)("h3",{id:"opendeeplink"},(0,l.yg)("inlineCode",{parentName:"h3"},"openDeeplink")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"openDeeplink: <function>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"openDeeplink: (link: string) => {\n  if (canOpenLink) {\n    Linking.openURL(link);\n  }\n}\n")))),(0,l.yg)("p",null,"A function that is called to open a deeplink to the MetaMask Mobile app."),(0,l.yg)("h3",{id:"preferdesktop"},(0,l.yg)("inlineCode",{parentName:"h3"},"preferDesktop")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"preferDesktop: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"preferDesktop: true\n")))),(0,l.yg)("p",null,"Enables or disables preferring the MetaMask browser extension over MetaMask Mobile.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"readonlyrpcmap"},(0,l.yg)("inlineCode",{parentName:"h3"},"readonlyRPCMap")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"readonlyRPCMap: <map>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'readonlyRPCMap: {\n  "0x539": "http://localhost:8545",\n}\n')))),(0,l.yg)("p",null,"A map of RPC URLs to use for ",(0,l.yg)("a",{parentName:"p",href:"/1260-txn-insights/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"read-only RPC requests"),"."),(0,l.yg)("h3",{id:"shouldshimweb3"},(0,l.yg)("inlineCode",{parentName:"h3"},"shouldShimWeb3")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"shouldShimWeb3: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"shouldShimWeb3: false\n")))),(0,l.yg)("p",null,"Enables or disables shimming the ",(0,l.yg)("inlineCode",{parentName:"p"},"window.web3")," object with the Ethereum provider returned by the SDK\n(useful for compatibility with older browsers).\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"timer"},(0,l.yg)("inlineCode",{parentName:"h3"},"timer")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"timer: BackgroundTimer\n")))),(0,l.yg)("p",null,"Used by React Native dapps to keep the dapp alive while using\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/ocetnik/react-native-background-timer"},(0,l.yg)("inlineCode",{parentName:"a"},"react-native-background-timer")),"."),(0,l.yg)("h3",{id:"transports"},(0,l.yg)("inlineCode",{parentName:"h3"},"transports")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"transports: <array of strings>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'transports: ["websocket", "polling"]\n')))),(0,l.yg)("p",null,"Sets the preference on ",(0,l.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/"},"Socket.IO")," transports."),(0,l.yg)("h3",{id:"ui"},(0,l.yg)("inlineCode",{parentName:"h3"},"ui")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"ui: {\n  installer: <function>,\n  confirm: <function>,\n}\n")))),(0,l.yg)("p",null,"Options for customizing the SDK UI."),(0,l.yg)("h3",{id:"usedeeplink"},(0,l.yg)("inlineCode",{parentName:"h3"},"useDeeplink")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"useDeeplink: <boolean>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"useDeeplink: true\n")))),(0,l.yg)("p",null,"Enables or disables using deeplinks to connect with MetaMask Mobile.\nIf ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", the SDK uses universal links instead.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"wakelocktype"},(0,l.yg)("inlineCode",{parentName:"h3"},"wakeLockType")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"wakeLockType: <type>\n"))),(0,l.yg)(o.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"wakeLockType: Temporary\n")))),(0,l.yg)("p",null,"The type of wake lock to use when the SDK is running in the background.\nOptions are ",(0,l.yg)("inlineCode",{parentName:"p"},"Disabled"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"Temporary"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"UntilResponse"),"."))}y.isMDXComponent=!0}}]);