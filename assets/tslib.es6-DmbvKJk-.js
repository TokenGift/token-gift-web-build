var y=function(){return y=Object.assign||function(i){for(var r,t=1,l=arguments.length;t<l;t++){r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(i[e]=r[e])}return i},y.apply(this,arguments)};function b(a,i){var r={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&i.indexOf(t)<0&&(r[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(a);l<t.length;l++)i.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(a,t[l])&&(r[t[l]]=a[t[l]]);return r}function h(a,i,r,t){function l(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(u){try{n(t.next(u))}catch(s){o(s)}}function f(u){try{n(t.throw(u))}catch(s){o(s)}}function n(u){u.done?e(u.value):l(u.value).then(c,f)}n((t=t.apply(a,i||[])).next())})}function p(a,i){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},t,l,e,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=c(0),o.throw=c(1),o.return=c(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(n){return function(u){return f([n,u])}}function f(n){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,n[0]&&(r=0)),r;)try{if(t=1,l&&(e=n[0]&2?l.return:n[0]?l.throw||((e=l.return)&&e.call(l),0):l.next)&&!(e=e.call(l,n[1])).done)return e;switch(l=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,l=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){r.label=n[1];break}if(n[0]===6&&r.label<e[1]){r.label=e[1],e=n;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(n);break}e[2]&&r.ops.pop(),r.trys.pop();continue}n=i.call(a,r)}catch(u){n=[6,u],l=0}finally{t=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}function d(a){var i=typeof Symbol=="function"&&Symbol.iterator,r=i&&a[i],t=0;if(r)return r.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&t>=a.length&&(a=void 0),{value:a&&a[t++],done:!a}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(a,i){var r=typeof Symbol=="function"&&a[Symbol.iterator];if(!r)return a;var t=r.call(a),l,e=[],o;try{for(;(i===void 0||i-- >0)&&!(l=t.next()).done;)e.push(l.value)}catch(c){o={error:c}}finally{try{l&&!l.done&&(r=t.return)&&r.call(t)}finally{if(o)throw o.error}}return e}function w(a,i,r){if(r||arguments.length===2)for(var t=0,l=i.length,e;t<l;t++)(e||!(t in i))&&(e||(e=Array.prototype.slice.call(i,0,t)),e[t]=i[t]);return a.concat(e||Array.prototype.slice.call(i))}export{v as _,h as a,p as b,w as c,b as d,d as e,y as f};