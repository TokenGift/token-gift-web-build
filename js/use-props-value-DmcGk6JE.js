import{r as e}from"./index-DFQQVGqn.js";import{_ as n}from"./tslib.es6-DCqr_S89.js";function r(n){var r=e.useRef(n);r.current=e.useMemo((function(){return n}),[n]);var t=e.useRef();return t.current||(t.current=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.current.apply(this,e)}),t.current}var t=!("undefined"==typeof window||!window.document||!window.document.createElement),u=t?e.useLayoutEffect:e.useEffect;function o(t){const{value:u,defaultValue:o,onChange:c}=t,a=function(){var r=n(e.useState({}),2)[1];return e.useCallback((function(){return r({})}),[])}(),f=e.useRef(void 0!==u?u:o);void 0!==u&&(f.current=u);const s=r(((e,n=!1)=>{const r="function"==typeof e?e(f.current):e;if(n||r!==f.current)return f.current=r,a(),null==c?void 0:c(r)}));return[f.current,s]}export{r as a,o as b,t as i,u};