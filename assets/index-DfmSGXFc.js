import{R as n,r as l,j as e}from"./index-4SreFlbP.js";import{m as p,w as x,c as j}from"./with-default-props-Cyy5lWzw.js";import{B as c}from"./nav-bar-COdSzZhR.js";import{H as h}from"./index-xk43NGXL.js";import{$ as f}from"./useCustomNavigate-pCG7dD2I.js";import"./tslib.es6-DmbvKJk-.js";import"./config-provider-BgX57nSa.js";const s="adm-space",g={direction:"horizontal"},a=r=>{const t=p(g,r),{direction:i,onClick:m}=t;return x(t,n.createElement("div",{className:j(s,{["".concat(s,"-wrap")]:t.wrap,["".concat(s,"-block")]:t.block,["".concat(s,"-").concat(i)]:!0,["".concat(s,"-align-").concat(t.align)]:!!t.align,["".concat(s,"-justify-").concat(t.justify)]:!!t.justify}),onClick:m},n.Children.map(t.children,o=>o!=null&&n.createElement("div",{className:"".concat(s,"-item")},o))))},y="_content_body_9t5x3_1",k={content_body:y},z=()=>{const r=f(),[t,i]=l.useState(0),[m,o]=l.useState(0),d=()=>{const u=new Date().getTime();o(u)};return l.useEffect(()=>{d()},[]),e.jsxs("div",{className:"warp",children:[e.jsx("div",{className:"header",children:e.jsx(h,{title:"详情"})}),e.jsx("div",{className:"content",style:{display:"flex",flexDirection:"column"},children:e.jsxs("div",{className:k.content_body,children:[e.jsx(a,{children:e.jsx(c,{block:!0,size:"large",children:t})}),e.jsx(a,{children:e.jsx(c,{block:!0,color:"primary",size:"large",onClick:()=>{i(t+1)},children:"数据加"})}),e.jsx(a,{children:e.jsx(c,{block:!0,color:"primary",size:"large",onClick:()=>{r("/404")},children:"跳转404"})}),e.jsx(a,{children:e.jsx(c,{block:!0,color:"primary",size:"large",onClick:()=>{r(-1)},children:"返回上一页"})}),e.jsx(a,{children:e.jsx(c,{block:!0,color:"primary",size:"large",onClick:()=>{r("/detail")},children:"跳转自己"})})]})})]})};export{z as default};
