"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9093],{"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>o});const o=e=>c=>!e.includes(c)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/components/Alert/Alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,alertLink:()=>alertLink,default:()=>Alert_stories,error:()=>error,info:()=>info,onClose:()=>onClose,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Alert__Container",componentId:"sc-1i9h418-0"})(["display:grid;grid-template-columns:1fr auto;column-gap:",";align-items:flex-start;padding:",";border-radius:",";font-family:",";",";"],(0,theme.W0)(3),(0,theme.W0)(4),(0,theme.S3)("radius.notification"),(0,theme.S3)("font.family.default"),(0,variants.o)("$styleStatus",{success:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.success")};
		`,error:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.danger")};
		`,warning:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.warning")};
		`,info:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.info")};
		`})),AlertLink=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"Alert__AlertLink",componentId:"sc-1i9h418-1"})([""," color:",";text-decoration:underline;min-width:fit-content;border:none;background:none;&:hover,&:active,&:active:hover{text-decoration:underline;color:",";}"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.S3)("color.text.link.hover"));AlertLink.displayName="AlertLink";const Content=styled_components_browser_esm.ZP.div.withConfig({displayName:"Alert__Content",componentId:"sc-1i9h418-2"})([""," color:",";display:flex;align-items:center;flex-wrap:wrap;column-gap:",";"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.W0)(1)),CloseButton=(0,styled_components_browser_esm.ZP)(IconButton.h).withConfig({displayName:"Alert__CloseButton",componentId:"sc-1i9h418-3"})(["margin-top:-",";margin-right:-",";"],(0,theme.W0)(1),(0,theme.W0)(1));var Close=__webpack_require__("./src/foundations/icons/Close.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=({status="warning",onClose,children,...props})=>(0,jsx_runtime.jsxs)(Container,{$styleStatus:status,...props,children:[(0,jsx_runtime.jsx)(Content,{children}),onClose?(0,jsx_runtime.jsx)(CloseButton,{ariaLabel:"Close",onClick:onClose,children:(0,jsx_runtime.jsx)(Close.x,{})}):null]});Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{status:{defaultValue:{value:"warning"},description:"Changes the alert background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"Function to close the alert. When a function is passed the component will render a close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the alert.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const Template=({onCloseFunction,onClose,...args})=>(0,jsx_runtime.jsx)(Alert,{onClose:onCloseFunction?(0,addon_actions_dist.aD)("onClose"):void 0,...args});const warning=Template.bind({});warning.storyName="Warning",warning.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},warning.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},info.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const success=Template.bind({});success.storyName="Success",success.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},success.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},error.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const onClose=Template.bind({});onClose.storyName="onClose",onClose.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},onClose.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const alertLink=Template.bind({});alertLink.storyName="AlertLink",alertLink.args={children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(AlertLink,{href:"https://www.lokalise.com",target:"_blank",children:"Alert link"})],status:"warning",onCloseFunction:!0},alertLink.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const componentMeta={title:"Components/Alert",parameters:{controls:{sort:"requiredFirst"}},component:Alert,subcomponents:{AlertLink},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["warning","info","success","error","onClose","alertLink"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Alert",component:Alert,subcomponents:{AlertLink},parameters:{controls:{sort:"requiredFirst"}},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"alert",children:"Alert"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert is used to highlight an important message. Often used in combination with a Modal to ask for user confirmation."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert exports 2 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),": Main component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AlertLink"}),": Link that is meant to be used within ",(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Alert, AlertLink } from '@lokalise/louis';\n\nexport default () => (\n\t<Alert>\n\t\tAn important alert message.\n\t\t<AlertLink href=\"#\">Alert link</AlertLink>\n\t</Alert>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A36154",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Alert"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Warning",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Info",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Success",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Error",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"onclose",children:"onClose"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"onClose",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alertlink",children:"AlertLink"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"AlertLink",args:{children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(AlertLink,{href:"https://www.lokalise.com",target:"_blank",children:"Alert link"})],status:"warning",onCloseFunction:!0},children:Template.bind({})})})]})}}};const Alert_stories=componentMeta},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.3071 4.16677C15.1713 4.16998 15.0423 4.22676 14.9483 4.32473L9.99993 9.2731L5.05156 4.32473C5.00365 4.27539 4.94632 4.23616 4.88297 4.20937C4.81962 4.18258 4.75154 4.16878 4.68276 4.16878C4.58046 4.1688 4.48049 4.19935 4.39564 4.25651C4.3108 4.31367 4.24494 4.39484 4.20649 4.48964C4.16803 4.58444 4.15874 4.68856 4.17979 4.78867C4.20085 4.88879 4.25129 4.98034 4.32467 5.05163L9.27303 9.99999L4.32467 14.9484C4.27533 14.9957 4.23595 15.0525 4.20881 15.1152C4.18168 15.178 4.16735 15.2456 4.16665 15.314C4.16596 15.3824 4.17891 15.4502 4.20477 15.5135C4.23062 15.5768 4.26884 15.6344 4.3172 15.6827C4.36556 15.7311 4.42309 15.7693 4.4864 15.7952C4.54972 15.821 4.61756 15.834 4.68595 15.8333C4.75434 15.8326 4.8219 15.8182 4.88468 15.7911C4.94746 15.764 5.00419 15.7246 5.05156 15.6753L9.99993 10.7269L14.9483 15.6753C14.9957 15.7246 15.0524 15.764 15.1152 15.7911C15.178 15.8182 15.2455 15.8326 15.3139 15.8333C15.3823 15.834 15.4501 15.821 15.5134 15.7952C15.5768 15.7693 15.6343 15.7311 15.6826 15.6827C15.731 15.6344 15.7692 15.5768 15.7951 15.5135C15.8209 15.4502 15.8339 15.3824 15.8332 15.314C15.8325 15.2456 15.8182 15.178 15.791 15.1152C15.7639 15.0525 15.7245 14.9957 15.6752 14.9484L10.7268 9.99999L15.6752 5.05163C15.7499 4.97988 15.8013 4.88722 15.8224 4.78579C15.8436 4.68437 15.8337 4.57891 15.7939 4.48325C15.7541 4.38759 15.6863 4.30618 15.5994 4.24971C15.5125 4.19323 15.4106 4.16432 15.3071 4.16677Z"})});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Alert-Alert-stories-mdx.7ce6498b.iframe.bundle.js.map