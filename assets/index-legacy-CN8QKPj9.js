!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:N(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function b(){}function w(){}function x(){}var _={};d(_,u,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(I([])));k&&k!==o&&i.call(k,u)&&(_=k);var z=x.prototype=b.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(o,a,c,u){var l=h(e[o],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==t(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function N(t,e,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=h(t,e,n);if("normal"===l.type){if(o=n.done?y:m,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,a(z,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=d(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,s,"GeneratorFunction")),t.prototype=Object.create(z),t},n.awrap=function(t){return{__await:t}},E(S.prototype),d(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(z),d(z,s,"Generator"),d(z,u,(function(){return this})),d(z,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function c(e,r,n){return(r=function(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy-XRtKX9Su.js","./with-default-props-legacy-CxOL3q8R.js","./avatar-legacy-S_AoFAcG.js","./index-legacy-CvIikkX1.js","./use-gesture-react.esm-legacy-0G8AvrGi.js","./bound-legacy-Bb4V4NlN.js","./tslib.es6-legacy-WgeDPnsw.js","./use-props-value-legacy-BHxq5J3J.js","./useCustomNavigate-legacy-CloMglxV.js"],(function(t,r){"use strict";var a,u,l,s,d,f,h,p,m,v,y,g,b,w,x,_,j,k,z,E,S;return{setters:[function(t){a=t.r,u=t.R,l=t.j,s=t.c,d=t.$,f=t.a},function(t){h=t.m,p=t.c,m=t.w},function(t){v=t.A},function(t){y=t.u,g=t.s,b=t.a,w=t.I,x=t.F},function(t){_=t.u,j=t.a,k=t.b},function(t){z=t.b},function(t){E=t._},function(t){S=t.u},null],execute:function(){var r=document.createElement("style");r.textContent=".adm-page-indicator{display:flex;width:auto;--dot-color: var(--adm-color-light);--active-dot-color: var(--adm-color-primary);--dot-size: .08rem;--active-dot-size: .34667rem;--dot-border-radius: .02667rem;--active-dot-border-radius: var(--dot-border-radius);--dot-spacing: .08rem}.adm-page-indicator-dot{display:block;width:var(--dot-size);height:var(--dot-size);border-radius:var(--dot-border-radius);background:var(--dot-color)}.adm-page-indicator-dot:last-child{margin-right:0}.adm-page-indicator-dot-active{border-radius:var(--active-dot-border-radius);background:var(--active-dot-color)}.adm-page-indicator-color-white{--dot-color: rgba(255, 255, 255, .5);--active-dot-color: var(--adm-color-text-light-solid)}.adm-page-indicator-horizontal{flex-direction:row}.adm-page-indicator-horizontal .adm-page-indicator-dot{margin-right:var(--dot-spacing)}.adm-page-indicator-horizontal .adm-page-indicator-dot-active{width:var(--active-dot-size)}.adm-page-indicator-vertical{flex-direction:column}.adm-page-indicator-vertical .adm-page-indicator-dot{margin-bottom:var(--dot-spacing)}.adm-page-indicator-vertical .adm-page-indicator-dot-active{height:var(--active-dot-size)}.adm-swiper{--height: auto;--width: 100%;--border-radius: 0;--track-padding: 0;--slide-size: 100%;--track-offset: 0%;display:block;width:var(--width);height:var(--height);position:relative;border-radius:var(--border-radius);z-index:0;overflow:hidden}.adm-swiper-track{width:100%;height:100%;white-space:nowrap;padding:var(--track-padding)}.adm-swiper-track-allow-touch-move{cursor:-webkit-grab;cursor:grab}.adm-swiper-track-inner{width:100%;height:100%;overflow:visible;position:relative;display:flex;flex-wrap:nowrap}.adm-swiper-slide,.adm-swiper-slide-placeholder{width:100%;height:100%;display:block;position:relative;white-space:unset;flex:none}.adm-swiper-item{display:block;width:100%;height:100%;white-space:normal}.adm-swiper-horizontal .adm-swiper-track-allow-touch-move{touch-action:pan-y}.adm-swiper-horizontal .adm-swiper-indicator{position:absolute;bottom:.16rem;left:50%;transform:translate(-50%)}.adm-swiper-horizontal .adm-swiper-track{transform:translate(var(--track-offset))}.adm-swiper-horizontal .adm-swiper-track-inner{flex-direction:row;width:var(--slide-size)}.adm-swiper-vertical .adm-swiper-track-allow-touch-move{touch-action:pan-x}.adm-swiper-vertical .adm-swiper-indicator{position:absolute;right:.16rem;top:50%;transform:translateY(-50%)}.adm-swiper-vertical .adm-swiper-track{transform:translateY(var(--track-offset))}.adm-swiper-vertical .adm-swiper-track-inner{flex-direction:column;height:var(--slide-size)}._banner_1b2z0_1{padding:.53333rem}._coin_icon_1b2z0_4{box-shadow:.10667rem .10667rem .26667rem .02667rem rgba(0,0,0,.3)}._row_1b2z0_7{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:.53333rem .53333rem 0}._name_1b2z0_14{font-size:.53333rem;color:#fff}._bottom_content_1b2z0_18{height:100%;border-radius:.96rem;background-image:url(src/assets/images/red_envelope_background.png);background-size:cover;background-color:#ff553e;box-shadow:.10667rem .10667rem .26667rem .02667rem rgba(0,0,0,.3);margin:2.13333rem .53333rem;display:flex;flex-direction:column}._red_envelope_container_1b2z0_29{top:-1.86667rem;position:relative;width:100%;height:0;display:flex;justify-content:center;z-index:1}._red_envelope_text_1b2z0_38{position:relative;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;font-size:.53333rem;color:#fff;flex-direction:column;padding-bottom:1.06667rem;padding-top:2.66667rem}._red_envelope_send_btn_1b2z0_51{display:flex;align-items:center;justify-content:center;min-height:1.17333rem;width:40%;border-radius:.42667rem;background:linear-gradient(to left,#ff9d2f,#ff553e);box-shadow:.10667rem .10667rem .26667rem .02667rem rgba(0,0,0,.3);color:#fff;font-size:.42667rem}\n/*$vite$:1*/",document.head.appendChild(r);var N="adm-page-indicator",L={color:"primary",direction:"horizontal"},O=a.memo((function(t){for(var e=h(L,t),r=[],n=0;n<e.total;n++)r.push(u.createElement("div",{key:n,className:p("".concat(N,"-dot"),c({},"".concat(N,"-dot-active"),e.current===n))}));return m(e,u.createElement("div",{className:p(N,"".concat(N,"-").concat(e.direction),"".concat(N,"-color-").concat(e.color))},r))})),C=function(t){return m(t,u.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children))};var P,I="adm-swiper",M={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},T={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]},A=a.forwardRef(g((function(t,e){var r=h(T,t),n=r.direction,l=r.total,s=r.children,d=r.indicator,f=o(a.useState({}),1)[0],v=a.useRef(null),g="vertical"===n,b=r.slideSize/100,w=r.trackOffset/100,x=a.useMemo((function(){var t=0,e=void 0,r=void 0;return"function"==typeof s?e=s:r=u.Children.map(s,(function(e){return u.isValidElement(e)?e.type!==C?null:(t++,e):null})),{renderChildren:e,validChildren:r,count:t}}),[s]),N=x.validChildren,L=x.count,A=x.renderChildren,G=null!=l?l:L;return 0===G||!N&&!A?null:function(){var t=r.loop;b*(G-1)<1&&(t=!1);var s=a.useRef(null);function h(){var t=s.current;return t?(g?t.offsetHeight:t.offsetWidth)*r.slideSize/100:0}var x,L,C,T,F,Y=o((x=r.defaultIndex,L=E(a.useState(x),2),C=L[0],T=L[1],F=y(C),[C,T,a.useCallback((function(){return F.current}),[])]),3),$=Y[0],B=Y[1],H=Y[2],U=function(t){var e=o(a.useState(t),2),r=e[0],n=e[1],i=a.useRef(r);return a.useEffect((function(){i.current=r}),[r]),[r,n,i]}(!1),q=o(U,3),D=q[0],V=q[1],W=q[2];function J(t){var e=0,n=G-1;return r.stuckAtBoundary&&(e+=w/b,n-=(1-b-w)/b),z(t,e,n)}var K=o(_((function(){return{position:100*J($),config:{tension:200,friction:30},onRest:function(){if(!W.current&&t){var e=Q.get(),r=R(e,100*G);r!==e&&X.start({position:r,immediate:!0})}}}}),[G]),2),Q=K[0].position,X=K[1],Z=a.useRef(null);var tt=j((function(t){if(Z.current=t.cancel,t.intentional&&(t.first&&!P&&(P=f),P===f)){P=t.last?void 0:f;var e=h();if(e){var r=g?1:0,n=t.offset[r],o=t.direction[r],i=t.velocity[r];if(V(!0),t.last){var a=Math.floor(n/e),c=a+1,u=Math.round((n+2e3*i*o)/e);et(z(u,a,c)),window.setTimeout((function(){V(!1)}))}else X.start({position:100*n/e,immediate:!0})}}}),{transform:function(t){var e=o(t,2);return[-e[0],-e[1]]},from:function(){var t=h();return[Q.get()/100*t,Q.get()/100*t]},triggerAllEvents:!0,bounds:function(){if(t)return{};var e=h(),r=J(0)*e,n=J(G-1)*e;return g?{top:r,bottom:n}:{left:r,right:n}},rubberband:r.rubberband,axis:g?"y":"x",preventScroll:!g,pointer:{touch:!0}});function et(e){var n,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=Math.round(e),a=t?R(i,G):z(i,0,G-1);a!==H()&&(null===(n=r.onIndexChange)||void 0===n||n.call(r,a)),B(a),X.start({position:100*(t?i:J(i)),immediate:o})}function rt(){et(Math.round(Q.get()/100)+1)}function nt(){et(Math.round(Q.get()/100)-1)}a.useImperativeHandle(e,(function(){return{swipeTo:et,swipeNext:rt,swipePrev:nt}})),S((function(){var t=G-1;$>t&&et(t,!0)}));var ot=r.autoplay,it=r.autoplayInterval,at=function(){v.current=window.setTimeout((function(){"reverse"===ot?nt():rt(),at()}),it)};function ct(e,r){var n={};return t&&(n=c(c({},g?"y":"x",Q.to((function(t){var r=100*e-t,n=100*G,o=n/2;return r=R(r+o,n)-o,"".concat(r,"%")}))),g?"top":"left","-".concat(100*e,"%"))),u.createElement(k.div,{className:p("".concat(I,"-slide"),c({},"".concat(I,"-slide-active"),$===e)),style:n,key:e},r)}function ut(){if(A&&l){for(var t=Math.max($-2,0),e=Math.min($+2,l-1),r=[],n=t;n<=e;n+=1)r.push(ct(n,A(n)));return u.createElement(u.Fragment,null,u.createElement("div",{className:"".concat(I,"-slide-placeholder"),style:{width:"".concat(100*t,"%")}}),r)}return u.Children.map(N,(function(t,e){return ct(e,t)}))}a.useEffect((function(){if(ot&&!D)return at(),function(){v.current&&window.clearTimeout(v.current)}}),[ot,it,D,G]);var lt,st={"--slide-size":"".concat(r.slideSize,"%"),"--track-offset":"".concat(r.trackOffset,"%")},dt=Object.assign({},r.allowTouchMove?tt():{}),ft={},ht=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(r.stopPropagation);try{for(ht.s();!(lt=ht.n()).done;){var pt=lt.value;ft[M[pt]]=function(t){t.stopPropagation()}}}catch(jt){ht.e(jt)}finally{ht.f()}var mt,vt,yt,gt,bt,wt,xt=(mt=dt,vt=ft,yt=Object.keys(mt),gt=Object.keys(vt),bt=new Set([].concat(yt,gt)),wt={},bt.forEach((function(t){var e=mt[t],r=vt[t];wt[t]="function"==typeof e&&"function"==typeof r?function(){e.apply(void 0,arguments),r.apply(void 0,arguments)}:e||r})),wt),_t=null;return"function"==typeof d?_t=d(G,$):!1!==d&&(_t=u.createElement("div",{className:"".concat(I,"-indicator")},u.createElement(O,Object.assign({},r.indicatorProps,{total:G,current:$,direction:n})))),m(r,u.createElement("div",{className:p(I,"".concat(I,"-").concat(n)),style:st},u.createElement("div",Object.assign({ref:s,className:p("".concat(I,"-track"),c({},"".concat(I,"-track-allow-touch-move"),r.allowTouchMove)),onClickCapture:function(t){W.current&&t.stopPropagation(),function(){var t;null===(t=Z.current)||void 0===t||t.call(Z),W.current=!1}()}},xt),t?u.createElement("div",{className:"".concat(I,"-track-inner")},ut()):u.createElement(k.div,{className:"".concat(I,"-track-inner"),style:c({},g?"y":"x",Q.to((function(t){return"".concat(-t,"%")})))},ut())),_t))}})));function R(t,e){var r=t%e;return r<0?r+e:r}var G=b(A,{Item:C}),F=function(t){var e=t.itemList,r=void 0===e?[]:e;return l.jsx(G,{indicator:function(){return null},style:{"--border-radius":"16px"},autoplay:!0,loop:!0,children:r.map((function(t,e){return l.jsx(G.Item,{children:l.jsx("div",{children:l.jsx(w,{height:150,lazy:!0,src:t.img})})},e)}))})},Y="_banner_1b2z0_1",$="_coin_icon_1b2z0_4",B="_row_1b2z0_7",H="_name_1b2z0_14",U="_bottom_content_1b2z0_18",q="_red_envelope_container_1b2z0_29",D="_red_envelope_text_1b2z0_38",V="_red_envelope_send_btn_1b2z0_51",W=d("home"),J=W.getCarousel,K=W.getBoutiqueList,Q=W.getRecommendList,X=f("common").setShopNum;t("default",s((function(t){return t.common}),{setShopNum:X})((function(){var t=o(a.useState(!0),2),r=(t[0],t[1]),i=o(a.useState(!1),2),c=i[0],u=i[1],s=o(a.useState([]),2),d=s[0],f=s[1],h=o(a.useState([]),2),p=(h[0],h[1]),m=o(a.useState([]),2),y=m[0],g=m[1],b=o(a.useState(!0),2),_=(b[0],b[1]);a.useEffect((function(){r(!0),u(!1),j(),k(),z()}),[]);var j=function(){var t=n(e().mark((function t(){var r,n,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:r=t.sent,n=o(r,1),2e4===(null==(i=n[0])?void 0:i.code)&&f(null==i?void 0:i.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=n(e().mark((function t(){var r,n,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:r=t.sent,n=o(r,1),2e4===(null==(i=n[0])?void 0:i.code)&&p(null==i?void 0:i.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=n(e().mark((function t(n){var i,a,l,s,d,f;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Q().finally((function(){r(!1)}));case 4:i=t.sent,a=o(i,1),l=a[0],s=l.code,d=l.data,f=void 0===d?[]:d,2e4===s&&f&&(g(f),_(!(y.length>=50))),u(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.jsxs("div",{className:"warp",children:[l.jsxs("div",{className:B,children:[l.jsx(v,{className:$,src:"https://img.yzcdn.cn/vant/cat.jpeg",style:{borderRadius:20,"--size":"32px"}}),l.jsx("span",{className:H,children:"zhang"}),l.jsx(w,{className:$,src:"src/assets/icon/icon_un_complete.png",width:32,height:32,style:{borderRadius:10}})]}),l.jsx("div",{className:Y,children:d.length?l.jsx(F,{itemList:d}):""}),l.jsxs("div",{className:U,onClick:function(){confetti({particleCount:100,spread:70,origin:{y:.6}})},children:[l.jsx("div",{className:q,children:l.jsx(w,{src:"src/assets/images/red_envelope.png",height:140})}),l.jsxs("div",{className:D,children:["发送给朋友",l.jsx("div",{className:V,children:"去送礼"})]})]}),l.jsx("div",{className:"footer",children:l.jsx(x,{})})]})})))}}}))}();
