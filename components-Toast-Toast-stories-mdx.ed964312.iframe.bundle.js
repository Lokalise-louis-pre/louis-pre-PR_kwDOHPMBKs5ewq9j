"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8576],{"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>o});const o=e=>c=>!e.includes(c)},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Toast/Toast.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,TemplateUpdating:()=>TemplateUpdating,autoclosing:()=>autoclosing,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,info:()=>info,success:()=>success,toastHelperFunctions:()=>toastHelperFunctions,warning:()=>warning,withAnchor:()=>withAnchor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/Button.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Toast/index.tsx"),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Toast/styles.ts"),_Flex__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Flex/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)()),{name,...toastArgs}=args;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.div,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_4__.z,{variant:"secondary",onClick:()=>{(0,___WEBPACK_IMPORTED_MODULE_5__.CF)({...toastArgs})},children:["Trigger toast: ",name]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Ix,{containerId:toastArgs.containerId})]})},TemplateUpdating=args=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)()),[currentToastId,setCurrentToastId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),isActiveButtonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.div,{style:{display:"flex",justifyContent:"flex-start",gap:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.z,{variant:"secondary",onClick:()=>{setCurrentToastId((0,___WEBPACK_IMPORTED_MODULE_5__.CF)({containerId:"updatingContainer",...args}))},children:"Trigger toast"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.z,{variant:"secondary",onClick:()=>{(0,___WEBPACK_IMPORTED_MODULE_5__.es)(currentToastId,{containerId:"updatingContainer",description:"Toast updated",...args})},children:"Update toast"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.z,{variant:"secondary",onClick:()=>{(0,___WEBPACK_IMPORTED_MODULE_5__.Xd)(currentToastId)},children:"Dismiss toast"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.z,{ref:isActiveButtonRef,variant:"secondary",onClick:()=>{isActiveButtonRef.current.innerText=`Is Toast active? ${(0,___WEBPACK_IMPORTED_MODULE_5__.A_)(currentToastId)}`},children:"Is Toast active?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Ix,{containerId:"updatingContainer"})]})};const success=Template.bind({});success.storyName="Success",success.args={name:"Success",type:"success",autoClose:!1,title:"This is a success toast notification",containerId:"successContainer"},success.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={name:"Error",type:"error",autoClose:!1,title:"This is an error toast notification",containerId:"errorContainer"},error.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const warning=Template.bind({});warning.storyName="Warning",warning.args={name:"Warning",type:"warning",autoClose:!1,title:"This is a warning toast notification",containerId:"warningContainer"},warning.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={name:"Info",type:"info",autoClose:!1,title:"This is an info toast notification",containerId:"infoContainer"},info.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const autoclosing=Template.bind({});autoclosing.storyName="Autoclosing",autoclosing.args={name:"Autoclosing",type:"info",title:"This is an autoclosing toast notification",autoClose:5e3,description:"It will automatically disappear",containerId:"autoclosingContainer"},autoclosing.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const withAnchor=Template.bind({});withAnchor.storyName="With Anchor",withAnchor.args={name:"With Anchor",type:"info",title:"This is a toast with an anchor",description:({closeToast})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_6__.k,{direction:"column",gap:"2",children:["Description text.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_7__.b2,{onClick:()=>{closeToast()},children:"Some action"})]}),autoClose:!1,containerId:"withAnchorContainer"},withAnchor.parameters={storySource:{source:'args => {\n  const {\n    name,\n    ...toastArgs\n  } = args;\n  return <div>\n\t\t\t<Button variant="secondary" onClick={() => {\n      showToast({ ...toastArgs\n      });\n    }}>\n\t\t\t\tTrigger toast: {name}\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={toastArgs.containerId} />\n\t\t</div>;\n}'}};const toastHelperFunctions=TemplateUpdating.bind({});toastHelperFunctions.storyName="Toast Helper Functions",toastHelperFunctions.args={type:"info",title:"Toasts can be updated",autoClose:!1},toastHelperFunctions.parameters={storySource:{source:'args => {\n  const [currentToastId, setCurrentToastId] = React.useState();\n  const isActiveButtonRef = React.useRef(null);\n  return <div style={{\n    display: "flex",\n    justifyContent: "flex-start",\n    gap: "10px"\n  }}>\n\t\t\t<Button variant="secondary" onClick={() => {\n      setCurrentToastId(showToast({\n        containerId: "updatingContainer",\n        ...args\n      }));\n    }}>\n\t\t\t\tTrigger toast\n\t\t\t</Button>\n\t\t\t<Button variant="secondary" onClick={() => {\n      updateToast(currentToastId, {\n        containerId: "updatingContainer",\n        description: "Toast updated",\n        ...args\n      });\n    }}>\n\t\t\t\tUpdate toast\n\t\t\t</Button>\n\t\t\t<Button variant="secondary" onClick={() => {\n      dismissToast(currentToastId);\n    }}>\n\t\t\t\tDismiss toast\n\t\t\t</Button>\n\t\t\t<Button ref={isActiveButtonRef} variant="secondary" onClick={() => {\n      isActiveButtonRef.current.innerText = `Is Toast active? ${isToastActive(currentToastId)}`;\n    }}>\n\t\t\t\tIs Toast active?\n\t\t\t</Button>\n\t\t\t<ToastContainer containerId={"updatingContainer"} />\n\t\t</div>;\n}'}};const componentMeta={title:"Components/Toast",parameters:{controls:{exclude:["onClick","name","containerId"]}},component:___WEBPACK_IMPORTED_MODULE_5__.CF,subcomponents:{ToastContainer:___WEBPACK_IMPORTED_MODULE_5__.Ix},argTypes:{description:{control:{type:"text"}},toastId:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["success","error","warning","info","autoclosing","withAnchor","toastHelperFunctions"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,_home_runner_work_louis_louis_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Toast",component:___WEBPACK_IMPORTED_MODULE_5__.CF,subcomponents:{ToastContainer:___WEBPACK_IMPORTED_MODULE_5__.Ix},parameters:{controls:{exclude:["onClick","name","containerId"]}},argTypes:{description:{control:{type:"text"}},toastId:{control:{type:"text"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"toast",children:"Toast"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#edge-cases",children:"Edge Cases"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Toast shows a notification in the top-right corner of the window. It can be automatically closed after a preset amount of time,\nor for important notifications it can remain visible until the user dismisses it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Toast depends on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"https://github.com/fkhadra/react-toastify",target:"_blank",children:"react-toastify"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { ToastContainer, showToast, Button } from '@lokalise/louis';\n\nexport default () => (\n\t<>\n\t\t<ToastContainer />\n\n\t\t<Button\n\t\t\tonClick={() => {\n\t\t\t\tshowToast({\n\t\t\t\t\ttype: 'success',\n\t\t\t\t\ttitle: 'This is a success toast notification',\n\t\t\t\t});\n\t\t\t}}\n\t\t>\n\t\t\tShow toast\n\t\t</Button>\n\t</>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A29263",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Toast"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:___WEBPACK_IMPORTED_MODULE_5__.CF,sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"type",children:"Type"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Success",args:{name:"Success",type:"success",autoClose:!1,title:"This is a success toast notification",containerId:"successContainer"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Error",args:{name:"Error",type:"error",autoClose:!1,title:"This is an error toast notification",containerId:"errorContainer"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Warning",args:{name:"Warning",type:"warning",autoClose:!1,title:"This is a warning toast notification",containerId:"warningContainer"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Info",args:{name:"Info",type:"info",autoClose:!1,title:"This is an info toast notification",containerId:"infoContainer"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"autoclosing",children:"Autoclosing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Autoclosing",args:{name:"Autoclosing",type:"info",title:"This is an autoclosing toast notification",autoClose:5e3,description:"It will automatically disappear",containerId:"autoclosingContainer"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"with-anchor",children:"With Anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"With Anchor",args:{name:"With Anchor",type:"info",title:"This is a toast with an anchor",description:({closeToast})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_6__.k,{direction:"column",gap:"2",children:["Description text.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_7__.b2,{onClick:()=>{closeToast()},children:"Some action"})]}),autoClose:!1,containerId:"withAnchorContainer"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { Button, ToastContainer, showToast, ToastAnchor } from '@lokalise/louis';\n\nexport default () => (\n\t<>\n\t\t<ToastContainer />\n\n\t\t<Button\n\t\t\tonClick={() => {\n\t\t\t\tshowToast({\n\t\t\t\t\ttype: 'info',\n\t\t\t\t\ttitle: 'This is a toast with an anchor',\n\t\t\t\t\tdescription: ({ closeToast }) => (\n\t\t\t\t\t\t<Flex direction=\"column\" gap=\"2\">\n\t\t\t\t\t\t\tDescription text.\n\t\t\t\t\t\t\t<ToastAnchor\n\t\t\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\t\t\tcloseToast();\n\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tSome action\n\t\t\t\t\t\t\t</ToastAnchor>\n\t\t\t\t\t\t</Flex>\n\t\t\t\t\t),\n\t\t\t\t});\n\t\t\t}}\n\t\t>\n\t\t\tShow toast\n\t\t</Button>\n\t</>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"toast-helper-functions",children:"Toast Helper Functions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Toast Helper Functions",args:{type:"info",title:"Toasts can be updated",autoClose:!1},children:TemplateUpdating.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { Button, ToastContainer, showToast, updateToast, dismissToast, isToastActive } from '@lokalise/louis';\n\nexport default () => {\n\tconst [currentToastId, setCurrentToastId] = React.useState();\n\n\treturn (\n\t\t<>\n\t\t\t<ToastContainer />\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tsetCurrentToastId(\n\t\t\t\t\t\tshowToast({\n\t\t\t\t\t\t\ttype: 'success',\n\t\t\t\t\t\t\ttitle: 'Toasts can be updated',\n\t\t\t\t\t\t}),\n\t\t\t\t\t);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tShow toast\n\t\t\t</Button>\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tupdateToast(currentToastId, {\n\t\t\t\t\t\tdescription: 'Toast updated',\n\t\t\t\t\t});\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tUpdate toast\n\t\t\t</Button>\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tdismissToast(currentToastId);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tDismiss toast\n\t\t\t</Button>\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tisToastActive(currentToastId);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tIs Toast active?\n\t\t\t</Button>\n\t\t</>\n\t);\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"edge-cases",children:"Edge cases"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"multi-container-support",children:"Multi container support"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["You can also render toasts in multiple separate containers by specifying a unique ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"containerId"})," prop for each ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"ToastContainer"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { Button, ToastContainer, showToast } from '@lokalise/louis';\n\nexport default () => {\n\tconst [currentToastId, setCurrentToastId] = React.useState();\n\n\treturn (\n\t\t<>\n\t\t\t<ToastContainer containerId={'firstContainer'} position={'top-right'} />\n\t\t\t<ToastContainer containerId={'secondContainer'} position={'top-left'} />\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tsetCurrentToastId(\n\t\t\t\t\t\tshowToast({\n\t\t\t\t\t\t\tcontainerId: 'firstContainer',\n\t\t\t\t\t\t\ttype: 'success',\n\t\t\t\t\t\t\ttitle: 'Toasts can be updated',\n\t\t\t\t\t\t}),\n\t\t\t\t\t);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tShow toast 1\n\t\t\t</Button>\n\n\t\t\t<Button\n\t\t\t\tonClick={() => {\n\t\t\t\t\tsetCurrentToastId(\n\t\t\t\t\t\tshowToast({\n\t\t\t\t\t\t\tcontainerId: 'secondContainer',\n\t\t\t\t\t\t\ttype: 'success',\n\t\t\t\t\t\t\ttitle: 'Toasts can be updated',\n\t\t\t\t\t\t}),\n\t\t\t\t\t);\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tShow toast 2\n\t\t\t</Button>\n\t\t</>\n\t);\n};\n"})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.3071 4.16677C15.1713 4.16998 15.0423 4.22676 14.9483 4.32473L9.99993 9.2731L5.05156 4.32473C5.00365 4.27539 4.94632 4.23616 4.88297 4.20937C4.81962 4.18258 4.75154 4.16878 4.68276 4.16878C4.58046 4.1688 4.48049 4.19935 4.39564 4.25651C4.3108 4.31367 4.24494 4.39484 4.20649 4.48964C4.16803 4.58444 4.15874 4.68856 4.17979 4.78867C4.20085 4.88879 4.25129 4.98034 4.32467 5.05163L9.27303 9.99999L4.32467 14.9484C4.27533 14.9957 4.23595 15.0525 4.20881 15.1152C4.18168 15.178 4.16735 15.2456 4.16665 15.314C4.16596 15.3824 4.17891 15.4502 4.20477 15.5135C4.23062 15.5768 4.26884 15.6344 4.3172 15.6827C4.36556 15.7311 4.42309 15.7693 4.4864 15.7952C4.54972 15.821 4.61756 15.834 4.68595 15.8333C4.75434 15.8326 4.8219 15.8182 4.88468 15.7911C4.94746 15.764 5.00419 15.7246 5.05156 15.6753L9.99993 10.7269L14.9483 15.6753C14.9957 15.7246 15.0524 15.764 15.1152 15.7911C15.178 15.8182 15.2455 15.8326 15.3139 15.8333C15.3823 15.834 15.4501 15.821 15.5134 15.7952C15.5768 15.7693 15.6343 15.7311 15.6826 15.6827C15.731 15.6344 15.7692 15.5768 15.7951 15.5135C15.8209 15.4502 15.8339 15.3824 15.8332 15.314C15.8325 15.2456 15.8182 15.178 15.791 15.1152C15.7639 15.0525 15.7245 14.9957 15.6752 14.9484L10.7268 9.99999L15.6752 5.05163C15.7499 4.97988 15.8013 4.88722 15.8224 4.78579C15.8436 4.68437 15.8337 4.57891 15.7939 4.48325C15.7541 4.38759 15.6863 4.30618 15.5994 4.24971C15.5125 4.19323 15.4106 4.16432 15.3071 4.16677Z"})});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Error=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M18.0525 8.28294L11.5854 1.92044C11.1408 1.48294 10.5546 1.24752 9.92874 1.25002C9.30499 1.25502 8.7204 1.50294 8.2829 1.94752L1.9204 8.4146C1.48332 8.85919 1.24499 9.44752 1.24999 10.0713C1.25499 10.695 1.5029 11.2796 1.94749 11.7171L8.41457 18.0796C8.85457 18.5125 9.4354 18.75 10.0521 18.75C10.0587 18.75 10.065 18.75 10.0717 18.75C10.6954 18.745 11.28 18.4971 11.7175 18.0525L18.08 11.5854C18.5175 11.1409 18.7558 10.5525 18.7504 9.92835C18.745 9.30419 18.4971 8.72044 18.0525 8.28294ZM9.37499 6.04127C9.37499 5.69585 9.65457 5.41627 9.99999 5.41627C10.3454 5.41627 10.625 5.69585 10.625 6.04127V11.0413C10.625 11.3867 10.3454 11.6663 9.99999 11.6663C9.65457 11.6663 9.37499 11.3867 9.37499 11.0413V6.04127ZM9.99999 14.5829C9.53957 14.5829 9.16665 14.21 9.16665 13.7496C9.16665 13.2892 9.53957 12.9163 9.99999 12.9163C10.4604 12.9163 10.8333 13.2892 10.8333 13.7496C10.8333 14.2096 10.4604 14.5829 9.99999 14.5829Z"})});Error.displayName="Error";try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/foundations/icons/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}}}]);