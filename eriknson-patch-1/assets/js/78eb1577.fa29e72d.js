"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8483],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(t),c=i,y=g["".concat(l,".").concat(c)]||g[c]||d[c]||r;return t?a.createElement(y,s(s({ref:n},u),{},{components:t})):a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const r={description:"Learn about best practices for designing accessible Snap installation flows.",sidebar_position:1,toc_max_heading_level:2},s="Snaps design guidelines",o={unversionedId:"learn/best-practices/design-guidelines",id:"learn/best-practices/design-guidelines",title:"Snaps design guidelines",description:"Learn about best practices for designing accessible Snap installation flows.",source:"@site/snaps/learn/best-practices/design-guidelines.md",sourceDirName:"learn/best-practices",slug:"/learn/best-practices/design-guidelines",permalink:"/eriknson-patch-1/snaps/learn/best-practices/design-guidelines",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/best-practices/design-guidelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about best practices for designing accessible Snap installation flows.",sidebar_position:1,toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Best practices",permalink:"/eriknson-patch-1/snaps/learn/best-practices"},next:{title:"Snaps security guidelines",permalink:"/eriknson-patch-1/snaps/learn/best-practices/security-guidelines"}},l={},p=[{value:"Why this matters",id:"why-this-matters",level:2},{value:"Guidelines at a glance",id:"guidelines-at-a-glance",level:2},{value:"Think like your users, write like a human",id:"think-like-your-users-write-like-a-human",level:2},{value:"Introduce your Snap",id:"introduce-your-snap",level:2},{value:"Embed in existing flows",id:"embed-in-existing-flows",level:2},{value:"Optimize your metadata",id:"optimize-your-metadata",level:2},{value:"Enhance your copy",id:"enhance-your-copy",level:2},{value:"Capitalization",id:"capitalization",level:3},{value:"Active voice",id:"active-voice",level:3},{value:"Design for all users",id:"design-for-all-users",level:2}],u={toc:p},g="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"snaps-design-guidelines"},"Snaps design guidelines"),(0,i.yg)("p",null,"This page outlines guiding principles for designers, developers, builders, and writers to create\nSnap installation flows that are accessible to all users.\nUse these guidelines when introducing your Snap within a companion dapp."),(0,i.yg)("h2",{id:"why-this-matters"},"Why this matters"),(0,i.yg)("p",null,"The Snap installation process contains critical info about your Snap, including what it does, how it\nenhances your application, and why it's beneficial for users.\nIt's important to provide this information in your companion dapp to help users understand the\npurpose and benefits of the Snap before installing it.\nWithout this information, users may drop out during installation or install the Snap without fully\nunderstanding its purpose."),(0,i.yg)("h2",{id:"guidelines-at-a-glance"},"Guidelines at a glance"),(0,i.yg)("p",null,"Ensure your Snap metadata follows these guidelines:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Keep your Snap's name to ",(0,i.yg)("strong",{parentName:"li"},"21 characters or fewer")," (including spaces)."),(0,i.yg)("li",{parentName:"ul"},"Use a descriptive name","\u2014",'don\'t use "Snap" in the name.'),(0,i.yg)("li",{parentName:"ul"},"Use short and simple copy."),(0,i.yg)("li",{parentName:"ul"},"Your Snap's icon should fit in a ",(0,i.yg)("strong",{parentName:"li"},"32px circular frame, SVG format"),".")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Before")," asking for permission to install, provide users with clear and concise information about:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"What")," the Snap does and ",(0,i.yg)("em",{parentName:"li"},"how")," it meets their needs."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"How")," the Snap works."),(0,i.yg)("li",{parentName:"ul"},"Any ",(0,i.yg)("em",{parentName:"li"},"security precautions")," they should know.")),(0,i.yg)("p",null,"Write in active voice and use sentence case.\nAvoid jargon","\u2014","write in plain language that can be understood by all users."),(0,i.yg)("h2",{id:"think-like-your-users-write-like-a-human"},"Think like your users, write like a human"),(0,i.yg)("p",null,"Consider whether the details that interest you as a developer are relevant to the user's experience.\nOften, content can be drastically reduced by cutting jargon and run-on sentences.\nRead your content out loud to hear what stands out in your messaging.\nIf something is hard to say, it's probably hard to read."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Be clear."),'\nWhen labeling buttons or actions, use descriptive action verbs instead of vague phrases.\nFor example, "Install" is more clear than "Complete."')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Be concise."),"\nUse short, simple words and avoid jargon.\nMake every word earn its place on the screen.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Be consistent."),"\nIdentify synonyms and eliminate them.\nEach important object and action should have a single word to represent it.\nInconsistency can blur the lines for users, creating uncertainty and confusion."))),(0,i.yg)("h2",{id:"introduce-your-snap"},"Introduce your Snap"),(0,i.yg)("p",null,"When you introduce your Snap, take this opportunity to highlight the benefits of your Snap with the\nintended user.\nIf the user doesn't understand what they can gain from your Snap, they likely won't install it."),(0,i.yg)("p",null,"Consider introducing your Snap in your companion dapp using a modal, tooltip, or card.\nThis introduction should be impactful, clear, and direct, and can happen before or alongside the\ninstallation prompt."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Introducing your Snap&#39;s features via a modal",src:t(7779).A,width:"2064",height:"1408"})),(0,i.yg)("p",null,"Important details to include when introducing your Snap:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"What")," your Snap does, ",(0,i.yg)("em",{parentName:"li"},"why")," someone would use it, and ",(0,i.yg)("em",{parentName:"li"},"how")," it works."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Security precautions")," in plain language that anyone can understand."),(0,i.yg)("li",{parentName:"ul"},"Descriptions of the features that make your Snap appealing to the intended users.")),(0,i.yg)("p",null,"Use conversational language when describing your Snap.\nIf you need to use a technical term, briefly define it first.\nFor example:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.yg)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"Allow the Snap to perform actions that run periodically at fixed times, dates, or intervals. This can be used to trigger time-sensitive interactions or notifications.")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"Let this Snap schedule and run recurring tasks or notifications."))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"Allow this Snap to display notifications regarding your ENS expiration.")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"Let this Snap notify you when your Ethereum Name Service is about to expire."))))),(0,i.yg)("h2",{id:"embed-in-existing-flows"},"Embed in existing flows"),(0,i.yg)("p",null,"Introduce your Snap as a natural extension of existing elements on your screen, and suggest\ninstallation when the time is right.\nThis can be a make or break moment for your Snap, so put yourself in the shoes of the intended user."),(0,i.yg)("p",null,"Don't ask the user to install your Snap before they do anything in the dapp, as they will probably decline.\nInstead, ",(0,i.yg)("strong",{parentName:"p"},"wait to prompt installation until a point when the Snap is required"),"."),(0,i.yg)("p",null,"In the following example, a key management Snap is suggested when the user is prompted to pick networks:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Installation and connection to your Snap embedded in existing flows",src:t(74494).A,width:"3840",height:"2160"})),(0,i.yg)("h2",{id:"optimize-your-metadata"},"Optimize your metadata"),(0,i.yg)("p",null,"Your Snap's icon and name are among the first things a user sees when deciding whether to install\nyour Snap.\nThese are also a key part of your Snap's identity, so it's worth spending time on this step."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Icon")),(0,i.yg)("p",null,"Your Snap's icon should fit in a ",(0,i.yg)("strong",{parentName:"p"},"32px circular frame in SVG format"),".\nAvoid using images with small details, as they won't be impactful in the allotted space.\nUse something bold, simple, and easily understood."),(0,i.yg)("p",null,"The icon must be a valid SVG.\nIt should be clearly visible on both light and dark backgrounds.\nIt should also be square, or else it will be stretched or cropped."),(0,i.yg)("p",null,"You can use ",(0,i.yg)("a",{parentName:"p",href:"https://www.svgviewer.dev/"},"SVGviewer.dev")," to validate and optimize your SVG."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Name")),(0,i.yg)("p",null,"Your Snap's name should be short and easy to remember.\nIt should be ",(0,i.yg)("strong",{parentName:"p"},"21 characters maximum")," (including spaces) so it is easy to read and fits comfortably\non small screens."),(0,i.yg)("p",null,'Use a descriptive name to help users understand how they benefit from installing your Snap, and\nincrease the likelihood that they will install and use it.\nDon\'t use the word "Snap" in your name\u2014your name should be specific and memorable, differentiating\nyour Snap from others.\nFor example:'),(0,i.yg)("p",null,(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.yg)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"Solana Snap")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"Solana Manager"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"Snap for Filecoin")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"Filecoin Wallet"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"Best manager for Bitcoin")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"Bitcoin Helper")))))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"How metadata is displayed")),(0,i.yg)("p",null,"The following images demonstrate how your Snap's icon and name are displayed during installation,\ntransaction insights, and custom dialogs:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"How your Snap&#39;s icon and name are displayed during installation",src:t(64075).A,width:"2714",height:"1620"}),"\n",(0,i.yg)("img",{alt:"How your Snap&#39;s name is displayed during transaction insights",src:t(36723).A,width:"3840",height:"2160"}),"\n",(0,i.yg)("img",{alt:"How your Snap&#39;s icon and name are displayed during a custom dialog screen",src:t(13432).A,width:"2714",height:"1620"})),(0,i.yg)("h2",{id:"enhance-your-copy"},"Enhance your copy"),(0,i.yg)("p",null,"At MetaMask, we use an in-depth style guide to inform our copywriting decisions.\nHere are some ways to enhance your own copy so it feels more at home in the MetaMask ecosystem."),(0,i.yg)("h3",{id:"capitalization"},"Capitalization"),(0,i.yg)("p",null,"With few exceptions, use sentence-style capitalization.\nNot only is sentence case more casual and conversational, but it's also easier to scan than title case."),(0,i.yg)("h3",{id:"active-voice"},"Active voice"),(0,i.yg)("p",null,"Write your copy in active voice.\nThere might be certain situations where passive voice is the better option, but most cases call for\nactive voice.\nFor example:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Don't do this"),(0,i.yg)("th",{parentName:"tr",align:null},"Do this instead"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u274c ",(0,i.yg)("em",{parentName:"td"},"The problem is being investigated")),(0,i.yg)("td",{parentName:"tr",align:null},"\u2705 ",(0,i.yg)("em",{parentName:"td"},"We're investigating the problem"))))),(0,i.yg)("h2",{id:"design-for-all-users"},"Design for all users"),(0,i.yg)("p",null,"Use accessible design to enable people of all abilities and in all locations to benefit from your Snap.\nImportant accessibility tips include the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background"},"Provide sufficient color contrast."),"\nEnsure foreground text color has sufficient contrast with background colors.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/#ensure-that-interactive-elements-are-easy-to-identify"},"Make interactive elements easy to identify."),"\nProvide distinct and consistent styles for interactive elements, such as links and buttons.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/#write-meaningful-text-alternatives-for-images"},"Write meaningful image alternative text."),"\nScreen reader users rely on image alternative text, so ensure that it clearly describes the\ninformation or function of the image.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/#provide-clear-instructions"},"Provide clear instructions."),"\nEnsure that instructions, error messages, and other copy are easy to understand even for\nnon-native English speakers."))),(0,i.yg)("p",null,"For more important tips, refer to W3C's guidelines on\n",(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/designing/"},"Designing for Web Accessibility")," and\n",(0,i.yg)("a",{parentName:"p",href:"https://www.w3.org/WAI/tips/writing/"},"Writing for Web Accessibility"),"."))}d.isMDXComponent=!0},13432:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dialog-ddb6c59d57c42a3c993c908463c22e63.png"},36723:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/insights-e9e2595645f03fdf8b8807adbde41ec1.png"},7779:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/install-modal-ba7d74a87c481c5e6f1da2b1f7cce9f2.png"},64075:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/install-b7f770fffbdee32290763bb9a51436f8.png"},74494:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/picker-86e6af6c06c04669182e21a94c87488a.png"}}]);