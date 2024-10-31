import{r as i,R as u,j as l,c as ge,$ as ve,a as he}from"./index-BvfEMgWV.js";import{m as re,c as k,w as G}from"./with-default-props-Btfev7sS.js";import{A as xe}from"./avatar-BOHROAtV.js";import{u as be,s as ye,a as we,I as V,F as Se}from"./index-D02I9ZoM.js";import{u as Pe,a as $e,b as oe}from"./use-gesture-react.esm-BUgdTIF9.js";import{b as F}from"./bound-sRU-RDN8.js";import{_ as Ne}from"./tslib.es6-DmbvKJk-.js";import{u as je}from"./use-props-value-DDS5j9ma.js";import"./useCustomNavigate-DFRki_lv.js";function Ce(a){var n=Ne(i.useState(a),2),t=n[0],c=n[1],g=be(t),v=i.useCallback(function(){return g.current},[]);return[t,c,v]}const R="adm-page-indicator",Ie={color:"primary",direction:"horizontal"},Re=i.memo(a=>{const n=re(Ie,a),t=[];for(let c=0;c<n.total;c++)t.push(u.createElement("div",{key:c,className:k("".concat(R,"-dot"),{["".concat(R,"-dot-active")]:n.current===c})}));return G(n,u.createElement("div",{className:k(R,"".concat(R,"-").concat(n.direction),"".concat(R,"-color-").concat(n.color))},t))}),ae=a=>G(a,u.createElement("div",{className:"adm-swiper-item",onClick:a.onClick},a.children));function ke(a){const[n,t]=i.useState(a),c=i.useRef(n);return i.useEffect(()=>{c.current=n},[n]),[n,t,c]}function Ee(a,n){const t=Object.keys(a),c=Object.keys(n),g=new Set([...t,...c]),v={};return g.forEach(x=>{const b=a[x],y=n[x];typeof b=="function"&&typeof y=="function"?v[x]=function(...p){b(...p),y(...p)}:v[x]=b||y}),v}const h="adm-swiper",ze={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},Me={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let T;const Le=i.forwardRef(ye((a,n)=>{const t=re(Me,a),{direction:c,total:g,children:v,indicator:x}=t,[b]=i.useState({}),y=i.useRef(null),p=c==="vertical",N=t.slideSize/100,E=t.trackOffset/100,{validChildren:z,count:O,renderChildren:j}=i.useMemo(()=>{let s=0,P,S;return typeof v=="function"?P=v:S=u.Children.map(v,f=>!u.isValidElement(f)||f.type!==ae?null:(s++,f)),{renderChildren:P,validChildren:S,count:s}},[v]),d=g!=null?g:O;return d===0||!z&&!j?null:()=>{let s=t.loop;N*(d-1)<1&&(s=!1);const P=i.useRef(null);function S(){const e=P.current;return e?(p?e.offsetHeight:e.offsetWidth)*t.slideSize/100:0}const[f,K,ie]=Ce(t.defaultIndex),[U,X,B]=ke(!1);function M(e){let o=0,r=d-1;return t.stuckAtBoundary&&(o+=E/N,r-=(1-N-E)/N),F(e,o,r)}const[{position:$},A]=Pe(()=>({position:M(f)*100,config:{tension:200,friction:30},onRest:()=>{if(B.current||!s)return;const e=$.get(),o=100*d,r=H(e,o);r!==e&&A.start({position:r,immediate:!0})}}),[d]),D=i.useRef(null);function ce(){var e;(e=D.current)===null||e===void 0||e.call(D),B.current=!1}const le=$e(e=>{if(D.current=e.cancel,!e.intentional||(e.first&&!T&&(T=b),T!==b))return;T=e.last?void 0:b;const o=S();if(!o)return;const r=p?1:0,_=e.offset[r],m=e.direction[r],L=e.velocity[r];if(X(!0),!e.last)A.start({position:_*100/o,immediate:!0});else{const I=Math.floor(_/o),pe=I+1,_e=Math.round((_+L*2e3*m)/o);C(F(_e,I,pe)),window.setTimeout(()=>{X(!1)})}},{transform:([e,o])=>[-e,-o],from:()=>{const e=S();return[$.get()/100*e,$.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(s)return{};const e=S(),o=M(0)*e,r=M(d-1)*e;return p?{top:o,bottom:r}:{left:o,right:r}},rubberband:t.rubberband,axis:p?"y":"x",preventScroll:!p,pointer:{touch:!0}});function C(e,o=!1){var r;const _=Math.round(e),m=s?H(_,d):F(_,0,d-1);m!==ie()&&((r=t.onIndexChange)===null||r===void 0||r.call(t,m)),K(m),A.start({position:(s?_:M(_))*100,immediate:o})}function J(){C(Math.round($.get()/100)+1)}function Q(){C(Math.round($.get()/100)-1)}i.useImperativeHandle(n,()=>({swipeTo:C,swipeNext:J,swipePrev:Q})),je(()=>{const e=d-1;f>e&&C(e,!0)});const{autoplay:W,autoplayInterval:Y}=t,Z=()=>{y.current=window.setTimeout(()=>{W==="reverse"?Q():J(),Z()},Y)};i.useEffect(()=>{if(!(!W||U))return Z(),()=>{y.current&&window.clearTimeout(y.current)}},[W,Y,U,d]);function ee(e,o){let r={};return s&&(r={[p?"y":"x"]:$.to(_=>{let m=-_+e*100;const L=d*100,I=L/2;return m=H(m+I,L)-I,"".concat(m,"%")}),[p?"top":"left"]:"-".concat(e*100,"%")}),u.createElement(oe.div,{className:k("".concat(h,"-slide"),{["".concat(h,"-slide-active")]:f===e}),style:r,key:e},o)}function te(){if(j&&g){const o=Math.max(f-2,0),r=Math.min(f+2,g-1),_=[];for(let m=o;m<=r;m+=1)_.push(ee(m,j(m)));return u.createElement(u.Fragment,null,u.createElement("div",{className:"".concat(h,"-slide-placeholder"),style:{width:"".concat(o*100,"%")}}),_)}return u.Children.map(z,(e,o)=>ee(o,e))}function ue(){return s?u.createElement("div",{className:"".concat(h,"-track-inner")},te()):u.createElement(oe.div,{className:"".concat(h,"-track-inner"),style:{[p?"y":"x"]:$.to(e=>"".concat(-e,"%"))}},te())}const de={"--slide-size":"".concat(t.slideSize,"%"),"--track-offset":"".concat(t.trackOffset,"%")},fe=Object.assign({},t.allowTouchMove?le():{}),ne={};for(const e of t.stopPropagation){const o=ze[e];ne[o]=function(r){r.stopPropagation()}}const me=Ee(fe,ne);let q=null;return typeof x=="function"?q=x(d,f):x!==!1&&(q=u.createElement("div",{className:"".concat(h,"-indicator")},u.createElement(Re,Object.assign({},t.indicatorProps,{total:d,current:f,direction:c})))),G(t,u.createElement("div",{className:k(h,"".concat(h,"-").concat(c)),style:de},u.createElement("div",Object.assign({ref:P,className:k("".concat(h,"-track"),{["".concat(h,"-track-allow-touch-move")]:t.allowTouchMove}),onClickCapture:e=>{B.current&&e.stopPropagation(),ce()}},me),ue()),q))}}));function H(a,n){const t=a%n;return t<0?t+n:t}const se=we(Le,{Item:ae}),Te=a=>{const{itemList:n=[]}=a;return l.jsx(se,{indicator:()=>null,style:{"--border-radius":"16px"},autoplay:!0,loop:!0,children:n.map((t,c)=>l.jsx(se.Item,{children:l.jsx("div",{children:l.jsx(V,{height:150,lazy:!0,src:t.img})})},c))})},Oe="_banner_1b2z0_1",Be="_coin_icon_1b2z0_4",Ae="_row_1b2z0_7",De="_name_1b2z0_14",We="_bottom_content_1b2z0_18",qe="_red_envelope_container_1b2z0_29",Fe="_red_envelope_text_1b2z0_38",He="_red_envelope_send_btn_1b2z0_51",w={banner:Oe,coin_icon:Be,row:Ae,name:De,bottom_content:We,red_envelope_container:qe,red_envelope_text:Fe,red_envelope_send_btn:He},{getCarousel:Ve,getBoutiqueList:Ge,getRecommendList:Ke}=ve("home"),{setShopNum:Ue}=he("common"),Xe=()=>{const[a,n]=i.useState(!0),[t,c]=i.useState(!1),[g,v]=i.useState([]),[x,b]=i.useState([]),[y,p]=i.useState([]),[N,E]=i.useState(!0);i.useEffect(()=>{n(!0),c(!1),z(),O(),j()},[]);const z=async()=>{const[s]=await Ve();(s==null?void 0:s.code)===2e4&&v(s==null?void 0:s.data)},O=async()=>{const[s]=await Ge();(s==null?void 0:s.code)===2e4&&b(s==null?void 0:s.data)},j=async s=>{if(t)return;const[P]=await Ke().finally(()=>{n(!1)}),{code:S,data:f=[]}=P;S===2e4&&f&&(p(f),E(!(y.length>=50))),c(!1)},d=()=>{confetti({particleCount:100,spread:70,origin:{y:.6}})};return l.jsxs("div",{className:"warp",children:[l.jsxs("div",{className:w.row,children:[l.jsx(xe,{className:w.coin_icon,src:"https://img.yzcdn.cn/vant/cat.jpeg",style:{borderRadius:20,"--size":"32px"}}),l.jsx("span",{className:w.name,children:"zhang"}),l.jsx(V,{className:w.coin_icon,src:"src/assets/icon/icon_un_complete.png",width:32,height:32,style:{borderRadius:10}})]}),l.jsx("div",{className:w.banner,children:g.length?l.jsx(Te,{itemList:g}):""}),l.jsxs("div",{className:w.bottom_content,onClick:d,children:[l.jsx("div",{className:w.red_envelope_container,children:l.jsx(V,{src:"src/assets/images/red_envelope.png",height:140})}),l.jsxs("div",{className:w.red_envelope_text,children:["发送给朋友",l.jsx("div",{className:w.red_envelope_send_btn,children:"去送礼"})]})]}),l.jsx("div",{className:"footer",children:l.jsx(Se,{})})]})},Je=a=>a.common,Qe={setShopNum:Ue},it=ge(Je,Qe)(Xe);export{it as default};
