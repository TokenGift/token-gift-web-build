!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],s=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function a(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}System.register(["./index-legacy-BU-ppmzA.js","./with-default-props-legacy-DIQVtDVc.js","./tslib.es6-legacy-WgeDPnsw.js","./use-props-value-legacy-BaOGoh8B.js"],(function(e,n){"use strict";var a,s,u,l,f,h,d,m,p,g,v,b,y,w,_,E,I,x,O;return{setters:[function(t){a=t.r,s=t.h,u=t.k,l=t.R,f=t.e,h=t.c,d=t.u,m=t.l,p=t.j},function(t){g=t.w,v=t.c,b=t.m},function(t){y=t.d,w=t._,_=t.e,E=t.f},function(t){I=t.i,x=t.u,O=t.b}],execute:function(){var n=document.createElement("style");n.textContent=".adm-safe-area{--multiple: var(--adm-safe-area-multiple, 1);display:block;width:100%}.adm-safe-area-position-top{padding-top:calc(env(safe-area-inset-top) * var(--multiple))}.adm-safe-area-position-bottom{padding-bottom:calc(env(safe-area-inset-bottom) * var(--multiple))}.adm-image{--width: var(--adm-image-width, auto);--height: var(--adm-image-height, auto);width:var(--width);height:var(--height);display:block;overflow:hidden}.adm-image-img{width:100%;height:100%}.adm-image-tip{position:relative;background-color:var(--adm-color-fill-content);height:100%;min-height:.64rem;min-width:.64rem}.adm-image-tip>svg{width:.64rem;height:.64rem;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:var(--adm-color-weak)}.adm-badge-wrapper{display:inline-block;position:relative}.adm-badge{display:inline-flex;vertical-align:middle;box-sizing:content-box;border-radius:2.66667rem;background-color:var(--color);--right: 0;--top: 0;--color: var(--adm-badge-color, var(--adm-color-highlight))}.adm-badge-content{color:var(--adm-color-text-light-solid);box-sizing:border-box;min-width:.21333rem;padding:.02667rem .10667rem;font-size:var(--adm-font-size-1);line-height:.32rem;white-space:nowrap;font-weight:400;text-align:center}.adm-badge-fixed{position:absolute;right:var(--right);top:var(--top);transform:translate(50%,-50%)}.adm-badge-dot{min-width:.26667rem;width:.26667rem;height:.26667rem;border-radius:.13333rem}.adm-badge-bordered{border:solid .02667rem var(--adm-color-text-light-solid)}.adm-tab-bar-wrap{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;min-height:1.28rem}.adm-tab-bar-item{flex:1;color:var(--adm-color-text-secondary);white-space:nowrap;padding:.10667rem .21333rem;width:-webkit-min-content;width:min-content;position:relative;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column}.adm-tab-bar-item-icon{font-size:.64rem;height:.64rem;line-height:1}.adm-tab-bar-item-title{font-size:var(--adm-font-size-2);line-height:.4rem}.adm-tab-bar-item-title-with-icon{margin-top:.05333rem}.adm-tab-bar-item-active{color:var(--adm-color-primary)}.adm-tab-bar-icon-badge{--top: .16rem}.adm-tab-bar-title-badge{--right: -.05333rem;--top: -.05333rem}\n/*$vite$:1*/",document.head.appendChild(n),e({a:L,u:V});var S=function(){var t;if(null!==(t=console)&&void 0!==t&&t.warn){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];N(r[0])&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}},R={},k=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];N(e[0])&&R[e[0]]||(N(e[0])&&(R[e[0]]=new Date),S.apply(void 0,e))},T=function(t,e){return function(){if(t.isInitialized)e();else{var n=function(){setTimeout((function(){t.off("initialized",n)}),0),e()};t.on("initialized",n)}}},j=function(t,e,n){t.loadNamespaces(e,T(t,n))},C=function(t,e,n,r){N(n)&&(n=[n]),n.forEach((function(e){t.options.ns.indexOf(e)<0&&t.options.ns.push(e)})),t.loadLanguages(e,T(t,r))},N=function(t){return"string"==typeof t},M=a.createContext(),D=function(){return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.usedNamespaces={}}),[{key:"addUsedNamespaces",value:function(t){var e=this;t.forEach((function(t){e.usedNamespaces[t]||(e.usedNamespaces[t]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])}(),A=function(t,e,n,r){return t.getFixedT(e,n,r)},P=function(e){var n,o,i,l,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},h=f.i18n,d=a.useContext(M)||{},m=d.i18n,p=d.defaultNS,g=h||m||u();if(g&&!g.reportNamespaces&&(g.reportNamespaces=new D),!g){k("You will need to pass in an i18next instance by using initReactI18next");var v=function(t,e){return N(e)?e:"object"===c(n=e)&&null!==n&&N(e.defaultValue)?e.defaultValue:Array.isArray(t)?t[t.length-1]:t;var n},b=[v,{},!1];return b.t=v,b.i18n={},b.ready=!1,b}null!==(n=g.options.react)&&void 0!==n&&n.wait&&k("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=r(r(r({},s()),g.options.react),f),w=y.useSuspense,_=y.keyPrefix,E=p||(null===(o=g.options)||void 0===o?void 0:o.defaultNS);E=N(E)?[E]:E||["translation"],null===(i=(l=g.reportNamespaces).addUsedNamespaces)||void 0===i||i.call(l,E);var I=(g.isInitialized||g.initializedStoreOnce)&&E.every((function(t){return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.languages&&e.languages.length?e.hasLoadedNamespace(t,{lng:n.lng,precheck:function(e,r){var o;if((null===(o=n.bindI18n)||void 0===o?void 0:o.indexOf("languageChanging"))>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,t))return!1}}):(k("i18n.languages were undefined or empty",e.languages),!0)}(t,g,y)})),x=function(t,e,n,r){return a.useCallback(A(t,e,n,r),[t,e,n,r])}(g,f.lng||null,"fallback"===y.nsMode?E:E[0],_),O=function(){return x},S=function(){return A(g,f.lng||null,"fallback"===y.nsMode?E:E[0],_)},R=t(a.useState(O),2),T=R[0],P=R[1],L=E.join();f.lng&&(L="".concat(f.lng).concat(L));var z,V,$,F=(z=L,$=a.useRef(),a.useEffect((function(){$.current=z}),[z,V]),$.current),B=a.useRef(!0);a.useEffect((function(){var t=y.bindI18n,e=y.bindI18nStore;B.current=!0,I||w||(f.lng?C(g,f.lng,E,(function(){B.current&&P(S)})):j(g,E,(function(){B.current&&P(S)}))),I&&F&&F!==L&&B.current&&P(S);var n=function(){B.current&&P(S)};return t&&(null==g||g.on(t,n)),e&&(null==g||g.store.on(e,n)),function(){B.current=!1,g&&(null==t||t.split(" ").forEach((function(t){return g.off(t,n)}))),e&&g&&e.split(" ").forEach((function(t){return g.store.off(t,n)}))}}),[g,L]),a.useEffect((function(){B.current&&I&&P(O)}),[g,_,I]);var U=[T,g,I];if(U.t=T,U.i18n=g,U.ready=I,I)return U;if(!I&&!w)return U;throw new Promise((function(t){f.lng?C(g,f.lng,E,(function(){return t()})):j(g,E,(function(){return t()}))}))};function L(t,e){var n=t;for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return n}function z(t,e){if(t===e)return!0;for(var n=0;n<t.length;n++)if(!Object.is(t[n],e[n]))return!1;return!0}function V(t){var e=a.useRef(t);return e.current=t,e}var $=e("b",(function(t){var e=V(t);a.useEffect((function(){return function(){e.current()}}),[])}));function F(t,e){if(I)return t?"function"==typeof t?t():"current"in t?t.current:t:e}var B,U=(B=a.useEffect,function(t,e,n){var r=a.useRef(!1),o=a.useRef([]),i=a.useRef([]),c=a.useRef();B((function(){var a,s=(Array.isArray(n)?n:[n]).map((function(t){return F(t)}));if(!r.current)return r.current=!0,o.current=s,i.current=e,void(c.current=t());s.length===o.current.length&&z(o.current,s)&&z(i.current,e)||(null===(a=c.current)||void 0===a||a.call(c),o.current=s,i.current=e,c.current=t())})),$((function(){var t;null===(t=c.current)||void 0===t||t.call(c),r.current=!1}))});!function(){if("object"===("undefined"==typeof window?"undefined":c(window)))if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(){for(var t=window.document,e=o(t);e;)e=o(t=e.ownerDocument);return t}(),e=[],n=null,r=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return n||(n=function(t,n){r=t&&n?h(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},a._resetCrossOriginUpdater=function(){n=null,r=null},a.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},a.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},a.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},a.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var r=this._checkForIntersections,i=null,a=null;this.POLL_INTERVAL?i=n.setInterval(r,this.POLL_INTERVAL):(s(n,"resize",r,!0),s(e,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(a=new n.MutationObserver(r)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),u(t,"resize",r,!0)),u(e,"scroll",r,!0),a&&a.disconnect()}));var c=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=c){var l=o(e);l&&this._monitorIntersections(l.ownerDocument)}}},a.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var r=this.root&&(this.root.ownerDocument||this.root)||t,i=this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=r;){var i=o(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}));if(!i){var a=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),a(),e!=r){var c=o(e);c&&this._unmonitorIntersections(c.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},a.prototype._checkForIntersections=function(){if(this.root||!n||r){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var o=r.element,a=l(o),c=this._rootContainsTarget(o),s=r.entry,u=t&&c&&this._computeTargetAndRootIntersection(o,a,e),f=null;this._rootContainsTarget(o)?n&&!this.root||(f=e):f={top:0,bottom:0,left:0,right:0,width:0,height:0};var h=r.entry=new i({time:window.performance&&performance.now&&performance.now(),target:o,boundingClientRect:a,rootBounds:f,intersectionRect:u});s?t&&c?this._hasCrossedThreshold(s,h)&&this._queuedEntries.push(h):s&&s.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(e,o,i){if("none"!=window.getComputedStyle(e).display){for(var a,c,s,u,f,d,p,g,v=o,b=m(e),y=!1;!y&&b;){var w=null,_=1==b.nodeType?window.getComputedStyle(b):{};if("none"==_.display)return null;if(b==this.root||9==b.nodeType)if(y=!0,b==this.root||b==t)n&&!this.root?!r||0==r.width&&0==r.height?(b=null,w=null,v=null):w=r:w=i;else{var E=m(b),I=E&&l(E),x=E&&this._computeTargetAndRootIntersection(E,I,i);I&&x?(b=E,w=h(I,x)):(b=null,v=null)}else{var O=b.ownerDocument;b!=O.body&&b!=O.documentElement&&"visible"!=_.overflow&&(w=l(b))}if(w&&(a=w,c=v,s=void 0,u=void 0,f=void 0,d=void 0,p=void 0,g=void 0,s=Math.max(a.top,c.top),u=Math.min(a.bottom,c.bottom),f=Math.max(a.left,c.left),d=Math.min(a.right,c.right),g=u-s,v=(p=d-f)>=0&&g>=0&&{top:s,bottom:u,left:f,right:d,width:p,height:g}||null),!v)break;b=b&&m(b)}return v}},a.prototype._getRootRect=function(){var e;if(this.root&&!p(this.root))e=l(this.root);else{var n=p(this.root)?this.root:t,r=n.documentElement,o=n.body;e={top:0,left:0,right:r.clientWidth||o.clientWidth,width:r.clientWidth||o.clientWidth,bottom:r.clientHeight||o.clientHeight,height:r.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},a.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},a.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},a.prototype._rootIsInDom=function(){return!this.root||d(t,this.root)},a.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return d(n,e)&&(!this.root||n==e.ownerDocument)},a.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},a.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=i}function o(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(mt){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=f(t.rootBounds),this.boundingClientRect=f(t.boundingClientRect),this.intersectionRect=f(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function a(t,e){var n,r,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){n(),o=null}),r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r):"function"==typeof t.detachEvent&&t.detachEvent("on"+e,n)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function h(t,e){var n=e.top-t.top,r=e.left-t.left;return{top:n,left:r,height:e.height,width:e.width,bottom:n+e.height,right:r+e.width}}function d(t,e){for(var n=e;n;){if(n==t)return!0;n=m(n)}return!1}function m(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?o(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function p(t){return t&&9===t.nodeType}}();var H="adm-safe-area",q=function(t){return g(t,l.createElement("div",{className:v(H,"".concat(H,"-position-").concat(t.position))}))},Z={},W=f&&f.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Z,"__esModule",{value:!0});var K=e("s",Z.staged=void 0),Y=W(a);function G(t){return"function"==typeof t?Y.default.createElement(J,{stage:t}):t}function J(t){return G(t.stage())}function Q(t){return"number"==typeof t?"".concat(t,"px"):t}e("s",K=Z.staged=function(t){return function(e,n){return G(t(e,n))}});var X,tt,et=function(e){var n,r,o,i,c,s,u,f,h,d,m=a.useRef(null),p=t((n=m,o=(r={}).callback,i=y(r,["callback"]),c=w(a.useState(),2),s=c[0],u=c[1],f=w(a.useState(),2),h=f[0],d=f[1],U((function(){var t=(Array.isArray(n)?n:[n]).map((function(t){return F(t)})).filter(Boolean);if(t.length){var e=new IntersectionObserver((function(t){var e,n;try{for(var r=_(t),i=r.next();!i.done;i=r.next()){var a=i.value;d(a.intersectionRatio),u(a.isIntersecting),null==o||o(a)}}catch(c){e={error:c}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}),E(E({},i),{root:F(void 0)}));return t.forEach((function(t){return e.observe(t)})),function(){e.disconnect()}}}),[void 0,void 0,o],n),[s,h]),1)[0];return a.useEffect((function(){p&&e.onActive()}),[p]),l.createElement("div",{ref:m})},nt=(X=x,function(t,e){var n=a.useRef(!1);X((function(){return function(){n.current=!1}}),[]),X((function(){if(n.current)return t();n.current=!0}),e)}),rt="adm-image",ot={fit:"fill",placeholder:l.createElement("div",{className:"".concat(rt,"-tip")},l.createElement((function(){return l.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"}))}),null)),fallback:l.createElement("div",{className:"".concat(rt,"-tip")},l.createElement((function(){return l.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"}))}),null)),lazy:!1,draggable:!1},it=e("I",K((function(e){var n=b(ot,e),r=t(a.useState(!1),2),o=r[0],i=r[1],c=t(a.useState(!1),2),s=c[0],u=c[1],f=a.useRef(null),h=a.useRef(null),d=n.src,m=n.srcSet,p=t(a.useState(!n.lazy),2),v=p[0],y=p[1];d=v?n.src:void 0,m=v?n.srcSet:void 0,nt((function(){i(!1),u(!1)}),[d]),a.useEffect((function(){var t;(null===(t=h.current)||void 0===t?void 0:t.complete)&&i(!0)}),[]);var w={};return n.width&&(w["--width"]=Q(n.width),w.width=Q(n.width)),n.height&&(w["--height"]=Q(n.height),w.height=Q(n.height)),g(n,l.createElement("div",{ref:f,className:rt,style:w,onClick:n.onContainerClick},n.lazy&&!v&&l.createElement(et,{onActive:function(){y(!0)}}),function(){if(s)return l.createElement(l.Fragment,null,n.fallback);var t=l.createElement("img",{ref:h,id:n.id,className:"".concat(rt,"-img"),src:d,alt:n.alt,onClick:n.onClick,onLoad:function(t){var e;i(!0),null===(e=n.onLoad)||void 0===e||e.call(n,t)},onError:function(t){var e;u(!0),null===(e=n.onError)||void 0===e||e.call(n,t)},style:{objectFit:n.fit,display:o?"block":"none"},crossOrigin:n.crossOrigin,decoding:n.decoding,loading:n.loading,referrerPolicy:n.referrerPolicy,sizes:n.sizes,srcSet:m,useMap:n.useMap,draggable:n.draggable});return l.createElement(l.Fragment,null,!o&&n.placeholder,t)}()))}))),at="adm-badge",ct=l.createElement(l.Fragment,null),st=L((function(t){var e=t.content,n=t.color,r=t.children,i=e===ct,a=v(at,o(o(o({},"".concat(at,"-fixed"),!!r),"".concat(at,"-dot"),i),"".concat(at,"-bordered"),t.bordered)),c=e||0===e?g(t,l.createElement("div",{className:a,style:{"--color":n}},!i&&l.createElement("div",{className:"".concat(at,"-content")},e))):null;return r?l.createElement("div",{className:v("".concat(at,"-wrapper"),t.wrapperClassName),style:t.wrapperStyle},r,c):c}),{dot:ct}),ut={exports:{}},lt={},ft=Symbol.for("react.element"),ht=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),vt=Symbol.for("react.context"),bt=Symbol.for("react.server_context"),yt=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),_t=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),xt=Symbol.for("react.offscreen");function Ot(t){if("object"===c(t)&&null!==t){var e=t.$$typeof;switch(e){case ft:switch(t=t.type){case dt:case pt:case mt:case wt:case _t:return t;default:switch(t=t&&t.$$typeof){case bt:case vt:case yt:case It:case Et:case gt:return t;default:return e}}case ht:return e}}}tt=Symbol.for("react.module.reference"),lt.ContextConsumer=vt,lt.ContextProvider=gt,lt.Element=ft,lt.ForwardRef=yt,lt.Fragment=dt,lt.Lazy=It,lt.Memo=Et,lt.Portal=ht,lt.Profiler=pt,lt.StrictMode=mt,lt.Suspense=wt,lt.SuspenseList=_t,lt.isAsyncMode=function(){return!1},lt.isConcurrentMode=function(){return!1},lt.isContextConsumer=function(t){return Ot(t)===vt},lt.isContextProvider=function(t){return Ot(t)===gt},lt.isElement=function(t){return"object"===c(t)&&null!==t&&t.$$typeof===ft},lt.isForwardRef=function(t){return Ot(t)===yt},lt.isFragment=function(t){return Ot(t)===dt},lt.isLazy=function(t){return Ot(t)===It},lt.isMemo=function(t){return Ot(t)===Et},lt.isPortal=function(t){return Ot(t)===ht},lt.isProfiler=function(t){return Ot(t)===pt},lt.isStrictMode=function(t){return Ot(t)===mt},lt.isSuspense=function(t){return Ot(t)===wt},lt.isSuspenseList=function(t){return Ot(t)===_t},lt.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===dt||t===pt||t===mt||t===wt||t===_t||t===xt||"object"===c(t)&&null!==t&&(t.$$typeof===It||t.$$typeof===Et||t.$$typeof===gt||t.$$typeof===vt||t.$$typeof===yt||t.$$typeof===tt||void 0!==t.getModuleId)},lt.typeOf=Ot,ut.exports=lt;var St=ut.exports;var Rt="adm-tab-bar",kt={safeArea:!1},Tt=L((function(e){var n,r,i,c,s=b(kt,e),u=null,f=[];r=s.children,i=function(t,e){if(a.isValidElement(t)){var n=t.key;"string"==typeof n&&(0===e&&(u=n),f.push(t))}},c=0,function t(e){l.Children.forEach(e,(function(e){St.isFragment(e)?t(e.props.children):(i(e,c),c+=1)}))}(r);var h=O({value:s.activeKey,defaultValue:null!==(n=s.defaultActiveKey)&&void 0!==n?n:u,onChange:function(t){var e;null!==t&&(null===(e=s.onChange)||void 0===e||e.call(s,t))}}),d=t(h,2),m=d[0],p=d[1];return g(s,l.createElement("div",{className:Rt},l.createElement("div",{className:"".concat(Rt,"-wrap")},f.map((function(t){var e,n,r=t.key===m;return g(t.props,l.createElement("div",{key:t.key,onClick:function(){var e,n,r=t.key;null!=r&&(p(r.toString()),null===(n=(e=t.props).onClick)||void 0===n||n.call(e))},className:v("".concat(Rt,"-item"),o({},"".concat(Rt,"-item-active"),r))},(e=t.props.icon&&l.createElement("div",{className:"".concat(Rt,"-item-icon")},"function"==typeof t.props.icon?t.props.icon(r):t.props.icon),n=t.props.title&&l.createElement("div",{className:v("".concat(Rt,"-item-title"),Boolean(e)&&"".concat(Rt,"-item-title-with-icon"))},"function"==typeof t.props.title?t.props.title(r):t.props.title),e?l.createElement(l.Fragment,null,l.createElement(st,{content:t.props.badge,className:"".concat(Rt,"-icon-badge")},e),n):n?l.createElement(st,{content:t.props.badge,className:"".concat(Rt,"-title-badge")},n):null)))}))),s.safeArea&&l.createElement(q,{position:"bottom"})))}),{Item:function(){return null}});e("F",h((function(t){return t.common}))((function(t){P();var e=d(),n=m().pathname;return p.jsxs(p.Fragment,{children:[p.jsx(Tt,{activeKey:n,onChange:function(t){return function(t){e(t,{replace:!0})}(t)},children:[{key:"/home",icon:"src/assets/icon/icon_home.png",activeIcon:"src/assets/icon/icon_home_active.png"},{key:"/classify",icon:"src/assets/icon/icon_task.png",activeIcon:"src/assets/icon/icon_task_active.png"},{key:"/my",icon:"src/assets/icon/icon_wallet.png",activeIcon:"src/assets/icon/icon_wallet_active.png"}].map((function(t){return n===t.key?p.jsx(Tt.Item,{icon:p.jsx(it,{src:t.activeIcon,width:26,height:26})},t.key):p.jsx(Tt.Item,{icon:p.jsx(it,{src:t.icon,width:26,height:26})},t.key)}))}),p.jsx(q,{position:"bottom"})]})})))}}}))}();
