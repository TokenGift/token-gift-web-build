import{a as w}from"./tslib.es6-DmbvKJk-.js";import{r as o,R as t}from"./index-D8PB1zm_.js";import{m as u,w as f,c as g,a as b,b as $}from"./with-default-props-DlJM6z5g.js";import{u as C}from"./config-provider-CXG8x18U.js";function y(n){return o.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n,{style:Object.assign({verticalAlign:"-0.125em"},n.style),className:["antd-mobile-icon",n.className].filter(Boolean).join(" ")}),o.createElement("g",{id:"LeftOutline-LeftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"LeftOutline-编组"},o.createElement("rect",{id:"LeftOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),o.createElement("path",{d:"M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",id:"LeftOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}const L="adm-dot-loading",N={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},x={color:"default"},B=o.memo(n=>{var l;const e=u(x,n);return f(e,t.createElement("div",{style:{color:(l=N[e.color])!==null&&l!==void 0?l:e.color},className:g("adm-loading",L)},t.createElement("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"}},t.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},t.createElement("g",{transform:"translate(-100.000000, -71.000000)"},t.createElement("g",{transform:"translate(95.000000, 71.000000)"},t.createElement("g",{transform:"translate(5.000000, 0.000000)"},[0,1,2].map(r=>t.createElement("rect",{key:r,fill:"currentColor",x:20+r*26,y:"16",width:"8",height:"8",rx:"2"},t.createElement("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:"".concat(r*.2,"s"),repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"}))))))))))});function I(n){return!!n&&typeof n=="object"&&typeof n.then=="function"}function T(){return b?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const a="adm-button",F={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:t.createElement(B,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},z=o.forwardRef((n,l)=>{const e=u(F,n),[r,i]=o.useState(!1),m=o.useRef(null),s=e.loading==="auto"?r:e.loading,d=e.disabled||s;o.useImperativeHandle(l,()=>({get nativeElement(){return m.current}}));const v=E=>w(void 0,void 0,void 0,function*(){if(!e.onClick)return;const p=e.onClick(E);if(I(p))try{i(!0),yield p,i(!1)}catch(k){throw i(!1),k}});return f(e,t.createElement("button",{ref:m,type:e.type,onClick:v,className:g(a,{["".concat(a,"-").concat(e.color)]:e.color,["".concat(a,"-block")]:e.block,["".concat(a,"-disabled")]:d,["".concat(a,"-fill-outline")]:e.fill==="outline",["".concat(a,"-fill-none")]:e.fill==="none",["".concat(a,"-mini")]:e.size==="mini",["".concat(a,"-small")]:e.size==="small",["".concat(a,"-large")]:e.size==="large",["".concat(a,"-loading")]:s},"".concat(a,"-shape-").concat(e.shape)),disabled:d,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onTouchStart:e.onTouchStart,onTouchEnd:e.onTouchEnd},s?t.createElement("div",{className:"".concat(a,"-loading-wrapper")},e.loadingIcon,e.loadingText):t.createElement("span",null,e.children)))}),c="adm-nav-bar",h=t.createElement(y,null),M=n=>{const{navBar:l={}}=C(),e=u(l,n),{back:r,backIcon:i,backArrow:m}=e,s=l.backIcon||h,d=$(h,l.backIcon,m===!0?s:m,i===!0?s:i);return f(e,t.createElement("div",{className:g(c)},t.createElement("div",{className:"".concat(c,"-left"),role:"button"},r!==null&&t.createElement("div",{className:"".concat(c,"-back"),onClick:e.onBack},d&&t.createElement("span",{className:"".concat(c,"-back-arrow")},d),t.createElement("span",{"aria-hidden":"true"},r)),e.left),t.createElement("div",{className:"".concat(c,"-title")},e.children),t.createElement("div",{className:"".concat(c,"-right")},e.right)))};export{z as B,B as D,M as N,T as i};
