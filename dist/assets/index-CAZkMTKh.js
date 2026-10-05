var uv=Object.defineProperty;var dv=(t,e,n)=>e in t?uv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>dv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var am={exports:{}},Al={},om={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),hv=Symbol.for("react.portal"),pv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),yv=Symbol.for("react.forward_ref"),_v=Symbol.for("react.suspense"),Sv=Symbol.for("react.memo"),bv=Symbol.for("react.lazy"),yf=Symbol.iterator;function Mv(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cm=Object.assign,um={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dm(){}dm.prototype=Fs.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}var fd=dd.prototype=new dm;fd.constructor=dd;cm(fd,Fs.prototype);fd.isPureReactComponent=!0;var _f=Array.isArray,fm=Object.prototype.hasOwnProperty,hd={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fm.call(e,r)&&!hm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ja,type:t,key:s,ref:o,props:i,_owner:hd.current}}function Ev(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wv(""+t.key):e.toString(36)}function Fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case hv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nc(o,0):r,_f(i)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Fo(i,e,n,"",function(u){return u})):i!=null&&(pd(i)&&(i=Ev(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_f(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+nc(s,l);o+=Fo(s,e,n,c,i)}else if(c=Mv(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+nc(s,l++),o+=Fo(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return Fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},jo={transition:null},Nv={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:jo,ReactCurrentOwner:hd};function mm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Fs;Ve.Fragment=pv;Ve.Profiler=xv;Ve.PureComponent=dd;Ve.StrictMode=mv;Ve.Suspense=_v;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;Ve.act=mm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)fm.call(e,c)&&!hm.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ja,type:t.type,key:i,ref:s,props:r,_owner:o}};Ve.createContext=function(t){return t={$$typeof:vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gv,_context:t},t.Consumer=t};Ve.createElement=pm;Ve.createFactory=function(t){var e=pm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:yv,render:t}};Ve.isValidElement=pd;Ve.lazy=function(t){return{$$typeof:bv,_payload:{_status:-1,_result:t},_init:Tv}};Ve.memo=function(t,e){return{$$typeof:Sv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};Ve.unstable_act=mm;Ve.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ve.useContext=function(t){return Qt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ve.useId=function(){return Qt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Qt.current.useRef(t)};Ve.useState=function(t){return Qt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Qt.current.useTransition()};Ve.version="18.3.1";om.exports=Ve;var X=om.exports;const Av=fv(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=X,Rv=Symbol.for("react.element"),Pv=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Iv=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lv.call(e,r)&&!Dv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Rv,type:t,key:s,ref:o,props:i,_owner:Iv.current}}Al.Fragment=Pv;Al.jsx=xm;Al.jsxs=xm;am.exports=Al;var a=am.exports,ou={},gm={exports:{}},xn={},vm={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var ee=D.length;D.push(K);e:for(;0<ee;){var ae=ee-1>>>1,_e=D[ae];if(0<i(_e,K))D[ae]=K,D[ee]=_e,ee=ae;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var K=D[0],ee=D.pop();if(ee!==K){D[0]=ee;e:for(var ae=0,_e=D.length,Be=_e>>>1;ae<Be;){var G=2*(ae+1)-1,re=D[G],fe=G+1,oe=D[fe];if(0>i(re,ee))fe<_e&&0>i(oe,re)?(D[ae]=oe,D[fe]=ee,ae=fe):(D[ae]=re,D[G]=ee,ae=G);else if(fe<_e&&0>i(oe,ee))D[ae]=oe,D[fe]=ee,ae=fe;else break e}}return K}function i(D,K){var ee=D.sortIndex-K.sortIndex;return ee!==0?ee:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,p=null,d=3,x=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=D)r(u),K.sortIndex=K.expirationTime,e(c,K);else break;K=n(u)}}function S(D){if(g=!1,_(D),!v)if(n(c)!==null)v=!0,V(R);else{var K=n(u);K!==null&&Q(S,K.startTime-D)}}function R(D,K){v=!1,g&&(g=!1,f(A),A=-1),x=!0;var ee=d;try{for(_(K),p=n(c);p!==null&&(!(p.expirationTime>K)||D&&!P());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,d=p.priorityLevel;var _e=ae(p.expirationTime<=K);K=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(c)&&r(c),_(K)}else r(c);p=n(c)}if(p!==null)var Be=!0;else{var G=n(u);G!==null&&Q(S,G.startTime-K),Be=!1}return Be}finally{p=null,d=ee,x=!1}}var N=!1,T=null,A=-1,w=5,b=-1;function P(){return!(t.unstable_now()-b<w)}function z(){if(T!==null){var D=t.unstable_now();b=D;var K=!0;try{K=T(!0,D)}finally{K?j():(N=!1,T=null)}}else N=!1}var j;if(typeof y=="function")j=function(){y(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=z,j=function(){q.postMessage(null)}}else j=function(){m(z,0)};function V(D){T=D,N||(N=!0,j())}function Q(D,K){A=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||x||(v=!0,V(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var ee=d;d=K;try{return D()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ee=d;d=D;try{return K()}finally{d=ee}},t.unstable_scheduleCallback=function(D,K,ee){var ae=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ae+ee:ae):ee=ae,D){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ee+_e,D={id:h++,callback:K,priorityLevel:D,startTime:ee,expirationTime:_e,sortIndex:-1},ee>ae?(D.sortIndex=ee,e(u,D),n(c)===null&&D===n(u)&&(g?(f(A),A=-1):g=!0,Q(S,ee-ae))):(D.sortIndex=_e,e(c,D),v||x||(v=!0,V(R))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var K=d;return function(){var ee=d;d=K;try{return D.apply(this,arguments)}finally{d=ee}}}})(ym);vm.exports=ym;var Uv=vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=X,pn=Uv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,Sa={};function Pi(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Sa[t]=e,t=0;t<e.length;t++)_m.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Mf={};function Fv(t){return lu.call(Mf,t)?!0:lu.call(bf,t)?!1:kv.test(t)?Mf[t]=!0:(bf[t]=!0,!1)}function jv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zv(t,e,n,r){if(e===null||typeof e>"u"||jv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,xd);Ft[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,xd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,xd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zv(e,n,i,r)&&(n=null),r||i===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yr=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),bm=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),Mm=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,rc;function ia(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var ic=!1;function sc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Bv(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case cu:return"Profiler";case vd:return"StrictMode";case uu:return"Suspense";case du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bm:return(t.displayName||"Context")+".Consumer";case Sm:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case Rr:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function Hv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vv(t){var e=Em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=Vv(t))}function wm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Em(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tm(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function pu(t,e){Tm(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&mu(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mu(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(sa(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function Nm(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function Rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function Pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Wv=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vu(t,e){if(e){if(Wv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Su=null,ms=null,xs=null;function Cf(t){if(t=Ha(t)){if(typeof Su!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Il(e),Su(t.stateNode,t.type,e))}}function Lm(t){ms?xs?xs.push(t):xs=[t]:ms=t}function Im(){if(ms){var t=ms,e=xs;if(xs=ms=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function Dm(t,e){return t(e)}function Um(){}var ac=!1;function Om(t,e,n){if(ac)return t(e,n);ac=!0;try{return Dm(t,e,n)}finally{ac=!1,(ms!==null||xs!==null)&&(Um(),Im())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var bu=!1;if(mr)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{bu=!1}function Xv(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ua=!1,Qo=null,Jo=!1,Mu=null,Yv={onError:function(t){ua=!0,Qo=t}};function qv(t,e,n,r,i,s,o,l,c){ua=!1,Qo=null,Xv.apply(Yv,arguments)}function $v(t,e,n,r,i,s,o,l,c){if(qv.apply(this,arguments),ua){if(ua){var u=Qo;ua=!1,Qo=null}else throw Error(ne(198));Jo||(Jo=!0,Mu=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Li(t)!==t)throw Error(ne(188))}function Kv(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rf(i),t;if(s===r)return Rf(i),e;s=s.sibling}throw Error(ne(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Fm(t){return t=Kv(t),t!==null?jm(t):null}function jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jm(t);if(e!==null)return e;t=t.sibling}return null}var zm=pn.unstable_scheduleCallback,Pf=pn.unstable_cancelCallback,Zv=pn.unstable_shouldYield,Qv=pn.unstable_requestPaint,_t=pn.unstable_now,Jv=pn.unstable_getCurrentPriorityLevel,bd=pn.unstable_ImmediatePriority,Bm=pn.unstable_UserBlockingPriority,el=pn.unstable_NormalPriority,e0=pn.unstable_LowPriority,Hm=pn.unstable_IdlePriority,Cl=null,Kn=null;function t0(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:i0,n0=Math.log,r0=Math.LN2;function i0(t){return t>>>=0,t===0?32:31-(n0(t)/r0|0)|0}var eo=64,to=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=aa(l):(s&=o,s!==0&&(r=aa(s)))}else o=n&~i,o!==0?r=aa(o):s!==0&&(r=aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function s0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=s0(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vm(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function o0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var et=0;function Gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wm,Ed,Xm,Ym,qm,wu=!1,no=[],Fr=null,jr=null,zr=null,Ea=new Map,wa=new Map,Lr=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ha(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function c0(t,e,n,r,i){switch(e){case"focusin":return Fr=Ys(Fr,t,e,n,r,i),!0;case"dragenter":return jr=Ys(jr,t,e,n,r,i),!0;case"mouseover":return zr=Ys(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ea.set(s,Ys(Ea.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wa.set(s,Ys(wa.get(s)||null,t,e,n,r,i)),!0}return!1}function $m(t){var e=gi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=km(n),e!==null){t.blockedOn=e,qm(t.priority,function(){Xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_u=r,n.target.dispatchEvent(r),_u=null}else return e=Ha(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function If(t,e,n){zo(t)&&n.delete(e)}function u0(){wu=!1,Fr!==null&&zo(Fr)&&(Fr=null),jr!==null&&zo(jr)&&(jr=null),zr!==null&&zo(zr)&&(zr=null),Ea.forEach(If),wa.forEach(If)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,wu||(wu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,u0)))}function Ta(t){function e(i){return qs(i,t)}if(0<no.length){qs(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&qs(Fr,t),jr!==null&&qs(jr,t),zr!==null&&qs(zr,t),Ea.forEach(e),wa.forEach(e),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)$m(n),n.blockedOn===null&&Lr.shift()}var gs=yr.ReactCurrentBatchConfig,nl=!0;function d0(t,e,n,r){var i=et,s=gs.transition;gs.transition=null;try{et=1,wd(t,e,n,r)}finally{et=i,gs.transition=s}}function f0(t,e,n,r){var i=et,s=gs.transition;gs.transition=null;try{et=4,wd(t,e,n,r)}finally{et=i,gs.transition=s}}function wd(t,e,n,r){if(nl){var i=Tu(t,e,n,r);if(i===null)gc(t,e,r,rl,n),Lf(t,r);else if(c0(i,t,e,n,r))r.stopPropagation();else if(Lf(t,r),e&4&&-1<l0.indexOf(t)){for(;i!==null;){var s=Ha(i);if(s!==null&&Wm(s),s=Tu(t,e,n,r),s===null&&gc(t,e,r,rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var rl=null;function Tu(t,e,n,r){if(rl=null,t=Sd(r),t=gi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function Km(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case bd:return 1;case Bm:return 4;case el:case e0:return 16;case Hm:return 536870912;default:return 16}default:return 16}}var Ur=null,Td=null,Bo=null;function Zm(){if(Bo)return Bo;var t,e=Td,n=e.length,r,i="value"in Ur?Ur.value:Ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Df(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Df,this.isPropagationStopped=Df,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=gn(js),Ba=pt({},js,{view:0,detail:0}),h0=gn(Ba),lc,cc,$s,Rl=pt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(lc=t.screenX-$s.screenX,cc=t.screenY-$s.screenY):cc=lc=0,$s=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),Uf=gn(Rl),p0=pt({},Rl,{dataTransfer:0}),m0=gn(p0),x0=pt({},Ba,{relatedTarget:0}),uc=gn(x0),g0=pt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=gn(g0),y0=pt({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_0=gn(y0),S0=pt({},js,{data:0}),Of=gn(S0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E0[t])?!!e[t]:!1}function Ad(){return w0}var T0=pt({},Ba,{key:function(t){if(t.key){var e=b0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N0=gn(T0),A0=pt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=gn(A0),C0=pt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),R0=gn(C0),P0=pt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=gn(P0),I0=pt({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=gn(I0),U0=[9,13,27,32],Cd=mr&&"CompositionEvent"in window,da=null;mr&&"documentMode"in document&&(da=document.documentMode);var O0=mr&&"TextEvent"in window&&!da,Qm=mr&&(!Cd||da&&8<da&&11>=da),Ff=" ",jf=!1;function Jm(t,e){switch(t){case"keyup":return U0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ex(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function k0(t,e){switch(t){case"compositionend":return ex(e);case"keypress":return e.which!==32?null:(jf=!0,Ff);case"textInput":return t=e.data,t===Ff&&jf?null:t;default:return null}}function F0(t,e){if(ns)return t==="compositionend"||!Cd&&Jm(t,e)?(t=Zm(),Bo=Td=Ur=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qm&&e.locale!=="ko"?null:e.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!j0[t.type]:e==="textarea"}function tx(t,e,n,r){Lm(r),e=il(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,Na=null;function z0(t){fx(t,0)}function Pl(t){var e=ss(t);if(wm(e))return t}function B0(t,e){if(t==="change")return e}var nx=!1;if(mr){var dc;if(mr){var fc="oninput"in document;if(!fc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),fc=typeof Bf.oninput=="function"}dc=fc}else dc=!1;nx=dc&&(!document.documentMode||9<document.documentMode)}function Hf(){fa&&(fa.detachEvent("onpropertychange",rx),Na=fa=null)}function rx(t){if(t.propertyName==="value"&&Pl(Na)){var e=[];tx(e,Na,t,Sd(t)),Om(z0,e)}}function H0(t,e,n){t==="focusin"?(Hf(),fa=e,Na=n,fa.attachEvent("onpropertychange",rx)):t==="focusout"&&Hf()}function V0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(Na)}function G0(t,e){if(t==="click")return Pl(e)}function W0(t,e){if(t==="input"||t==="change")return Pl(e)}function X0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:X0;function Aa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lu.call(e,i)||!jn(t[i],e[i]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,e){var n=Vf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function ix(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ix(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sx(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Y0(t){var e=sx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ix(n.ownerDocument.documentElement,n)){if(r!==null&&Rd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gf(n,s);var o=Gf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q0=mr&&"documentMode"in document&&11>=document.documentMode,rs=null,Nu=null,ha=null,Au=!1;function Wf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||rs==null||rs!==Zo(r)||(r=rs,"selectionStart"in r&&Rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&Aa(ha,r)||(ha=r,r=il(Nu,"onSelect"),0<r.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},hc={},ax={};mr&&(ax=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Ll(t){if(hc[t])return hc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ax)return hc[t]=e[n];return t}var ox=Ll("animationend"),lx=Ll("animationiteration"),cx=Ll("animationstart"),ux=Ll("transitionend"),dx=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,e){dx.set(t,e),Pi(e,[t])}for(var pc=0;pc<Xf.length;pc++){var mc=Xf[pc],$0=mc.toLowerCase(),K0=mc[0].toUpperCase()+mc.slice(1);Jr($0,"on"+K0)}Jr(ox,"onAnimationEnd");Jr(lx,"onAnimationIteration");Jr(cx,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(ux,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Yf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$v(r,e,void 0,t),t.currentTarget=null}function fx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Yf(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Yf(i,l,u),s=c}}}if(Jo)throw t=Mu,Jo=!1,Mu=null,t}function st(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var r=t+"__bubble";n.has(r)||(hx(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),hx(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[so]){t[so]=!0,_m.forEach(function(n){n!=="selectionchange"&&(Z0.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,xc("selectionchange",!1,e))}}function hx(t,e,n,r){switch(Km(e)){case 1:var i=d0;break;case 4:i=f0;break;default:i=wd}n=i.bind(null,e,n,t),i=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Om(function(){var u=s,h=Sd(n),p=[];e:{var d=dx.get(t);if(d!==void 0){var x=Nd,v=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=N0;break;case"focusin":v="focus",x=uc;break;case"focusout":v="blur",x=uc;break;case"beforeblur":case"afterblur":x=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=R0;break;case ox:case lx:case cx:x=v0;break;case ux:x=L0;break;case"scroll":x=h0;break;case"wheel":x=D0;break;case"copy":case"cut":case"paste":x=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=kf}var g=(e&4)!==0,m=!g&&t==="scroll",f=g?d!==null?d+"Capture":null:d;g=[];for(var y=u,_;y!==null;){_=y;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,f!==null&&(S=Ma(y,f),S!=null&&g.push(Ra(y,S,_)))),m)break;y=y.return}0<g.length&&(d=new x(d,v,null,n,h),p.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",d&&n!==_u&&(v=n.relatedTarget||n.fromElement)&&(gi(v)||v[xr]))break e;if((x||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?gi(v):null,v!==null&&(m=Li(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(g=Uf,S="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(g=kf,S="onPointerLeave",f="onPointerEnter",y="pointer"),m=x==null?d:ss(x),_=v==null?d:ss(v),d=new g(S,y+"leave",x,n,h),d.target=m,d.relatedTarget=_,S=null,gi(h)===u&&(g=new g(f,y+"enter",v,n,h),g.target=_,g.relatedTarget=m,S=g),m=S,x&&v)t:{for(g=x,f=v,y=0,_=g;_;_=Ui(_))y++;for(_=0,S=f;S;S=Ui(S))_++;for(;0<y-_;)g=Ui(g),y--;for(;0<_-y;)f=Ui(f),_--;for(;y--;){if(g===f||f!==null&&g===f.alternate)break t;g=Ui(g),f=Ui(f)}g=null}else g=null;x!==null&&qf(p,d,x,g,!1),v!==null&&m!==null&&qf(p,m,v,g,!0)}}e:{if(d=u?ss(u):window,x=d.nodeName&&d.nodeName.toLowerCase(),x==="select"||x==="input"&&d.type==="file")var R=B0;else if(zf(d))if(nx)R=W0;else{R=V0;var N=H0}else(x=d.nodeName)&&x.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=G0);if(R&&(R=R(t,u))){tx(p,R,n,h);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&mu(d,"number",d.value)}switch(N=u?ss(u):window,t){case"focusin":(zf(N)||N.contentEditable==="true")&&(rs=N,Nu=u,ha=null);break;case"focusout":ha=Nu=rs=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Wf(p,n,h);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Wf(p,n,h)}var T;if(Cd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ns?Jm(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Qm&&n.locale!=="ko"&&(ns||A!=="onCompositionStart"?A==="onCompositionEnd"&&ns&&(T=Zm()):(Ur=h,Td="value"in Ur?Ur.value:Ur.textContent,ns=!0)),N=il(u,A),0<N.length&&(A=new Of(A,t,null,n,h),p.push({event:A,listeners:N}),T?A.data=T:(T=ex(n),T!==null&&(A.data=T)))),(T=O0?k0(t,n):F0(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(h=new Of("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}fx(p,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(Ra(t,s,i)),s=Ma(t,e),s!=null&&r.push(Ra(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ma(n,s),c!=null&&o.unshift(Ra(n,c,l))):i||(c=Ma(n,s),c!=null&&o.push(Ra(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Q0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(Q0,`
`).replace(J0,"")}function ao(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(ne(425))}function sl(){}var Cu=null,Ru=null;function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(ny)}:Lu;function ny(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ta(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+zs,Pa="__reactProps$"+zs,xr="__reactContainer$"+zs,Iu="__reactEvents$"+zs,ry="__reactListeners$"+zs,iy="__reactHandles$"+zs;function gi(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Xn])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Xn]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Il(t){return t[Pa]||null}var Du=[],as=-1;function ei(t){return{current:t}}function ot(t){0>as||(t.current=Du[as],Du[as]=null,as--)}function it(t,e){as++,Du[as]=t.current,t.current=e}var $r={},Wt=ei($r),nn=ei(!1),wi=$r;function Es(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function al(){ot(nn),ot(Wt)}function Qf(t,e,n){if(Wt.current!==$r)throw Error(ne(168));it(Wt,e),it(nn,n)}function px(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ne(108,Hv(t)||"Unknown",i));return pt({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,wi=Wt.current,it(Wt,t),it(nn,nn.current),!0}function Jf(t,e,n){var r=t.stateNode;if(!r)throw Error(ne(169));n?(t=px(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,ot(nn),ot(Wt),it(Wt,t)):ot(nn),it(nn,n)}var cr=null,Dl=!1,yc=!1;function mx(t){cr===null?cr=[t]:cr.push(t)}function sy(t){Dl=!0,mx(t)}function ti(){if(!yc&&cr!==null){yc=!0;var t=0,e=et;try{var n=cr;for(et=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,Dl=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),zm(bd,ti),i}finally{et=e,yc=!1}}return null}var os=[],ls=0,ll=null,cl=0,_n=[],Sn=0,Ti=null,dr=1,fr="";function di(t,e){os[ls++]=cl,os[ls++]=ll,ll=t,cl=e}function xx(t,e,n){_n[Sn++]=dr,_n[Sn++]=fr,_n[Sn++]=Ti,Ti=t;var r=dr;t=fr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-Un(e)+i|n<<i|r,fr=s+t}else dr=1<<s|n<<i|r,fr=t}function Pd(t){t.return!==null&&(di(t,1),xx(t,1,0))}function Ld(t){for(;t===ll;)ll=os[--ls],os[ls]=null,cl=os[--ls],os[ls]=null;for(;t===Ti;)Ti=_n[--Sn],_n[Sn]=null,fr=_n[--Sn],_n[Sn]=null,dr=_n[--Sn],_n[Sn]=null}var hn=null,fn=null,lt=!1,In=null;function gx(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:dr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(lt){var e=fn;if(e){var n=e;if(!eh(t,e)){if(Uu(t))throw Error(ne(418));e=Br(n.nextSibling);var r=hn;e&&eh(t,e)?gx(r,n):(t.flags=t.flags&-4097|2,lt=!1,hn=t)}}else{if(Uu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,lt=!1,hn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function oo(t){if(t!==hn)return!1;if(!lt)return th(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pu(t.type,t.memoizedProps)),e&&(e=fn)){if(Uu(t))throw vx(),Error(ne(418));for(;e;)gx(t,e),e=Br(e.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Br(t.stateNode.nextSibling):null;return!0}function vx(){for(var t=fn;t;)t=Br(t.nextSibling)}function ws(){fn=hn=null,lt=!1}function Id(t){In===null?In=[t]:In.push(t)}var ay=yr.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nh(t){var e=t._init;return e(t._payload)}function yx(t){function e(f,y){if(t){var _=f.deletions;_===null?(f.deletions=[y],f.flags|=16):_.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function r(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function i(f,y){return f=Wr(f,y),f.index=0,f.sibling=null,f}function s(f,y,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<y?(f.flags|=2,y):_):(f.flags|=2,y)):(f.flags|=1048576,y)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,y,_,S){return y===null||y.tag!==6?(y=Tc(_,f.mode,S),y.return=f,y):(y=i(y,_),y.return=f,y)}function c(f,y,_,S){var R=_.type;return R===ts?h(f,y,_.props.children,S,_.key):y!==null&&(y.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Rr&&nh(R)===y.type)?(S=i(y,_.props),S.ref=Ks(f,y,_),S.return=f,S):(S=$o(_.type,_.key,_.props,null,f.mode,S),S.ref=Ks(f,y,_),S.return=f,S)}function u(f,y,_,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Nc(_,f.mode,S),y.return=f,y):(y=i(y,_.children||[]),y.return=f,y)}function h(f,y,_,S,R){return y===null||y.tag!==7?(y=Mi(_,f.mode,S,R),y.return=f,y):(y=i(y,_),y.return=f,y)}function p(f,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Tc(""+y,f.mode,_),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return _=$o(y.type,y.key,y.props,null,f.mode,_),_.ref=Ks(f,null,y),_.return=f,_;case es:return y=Nc(y,f.mode,_),y.return=f,y;case Rr:var S=y._init;return p(f,S(y._payload),_)}if(sa(y)||Ws(y))return y=Mi(y,f.mode,_,null),y.return=f,y;lo(f,y)}return null}function d(f,y,_,S){var R=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:l(f,y,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:return _.key===R?c(f,y,_,S):null;case es:return _.key===R?u(f,y,_,S):null;case Rr:return R=_._init,d(f,y,R(_._payload),S)}if(sa(_)||Ws(_))return R!==null?null:h(f,y,_,S,null);lo(f,_)}return null}function x(f,y,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(_)||null,l(y,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Za:return f=f.get(S.key===null?_:S.key)||null,c(y,f,S,R);case es:return f=f.get(S.key===null?_:S.key)||null,u(y,f,S,R);case Rr:var N=S._init;return x(f,y,_,N(S._payload),R)}if(sa(S)||Ws(S))return f=f.get(_)||null,h(y,f,S,R,null);lo(y,S)}return null}function v(f,y,_,S){for(var R=null,N=null,T=y,A=y=0,w=null;T!==null&&A<_.length;A++){T.index>A?(w=T,T=null):w=T.sibling;var b=d(f,T,_[A],S);if(b===null){T===null&&(T=w);break}t&&T&&b.alternate===null&&e(f,T),y=s(b,y,A),N===null?R=b:N.sibling=b,N=b,T=w}if(A===_.length)return n(f,T),lt&&di(f,A),R;if(T===null){for(;A<_.length;A++)T=p(f,_[A],S),T!==null&&(y=s(T,y,A),N===null?R=T:N.sibling=T,N=T);return lt&&di(f,A),R}for(T=r(f,T);A<_.length;A++)w=x(T,f,A,_[A],S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?A:w.key),y=s(w,y,A),N===null?R=w:N.sibling=w,N=w);return t&&T.forEach(function(P){return e(f,P)}),lt&&di(f,A),R}function g(f,y,_,S){var R=Ws(_);if(typeof R!="function")throw Error(ne(150));if(_=R.call(_),_==null)throw Error(ne(151));for(var N=R=null,T=y,A=y=0,w=null,b=_.next();T!==null&&!b.done;A++,b=_.next()){T.index>A?(w=T,T=null):w=T.sibling;var P=d(f,T,b.value,S);if(P===null){T===null&&(T=w);break}t&&T&&P.alternate===null&&e(f,T),y=s(P,y,A),N===null?R=P:N.sibling=P,N=P,T=w}if(b.done)return n(f,T),lt&&di(f,A),R;if(T===null){for(;!b.done;A++,b=_.next())b=p(f,b.value,S),b!==null&&(y=s(b,y,A),N===null?R=b:N.sibling=b,N=b);return lt&&di(f,A),R}for(T=r(f,T);!b.done;A++,b=_.next())b=x(T,f,A,b.value,S),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?A:b.key),y=s(b,y,A),N===null?R=b:N.sibling=b,N=b);return t&&T.forEach(function(z){return e(f,z)}),lt&&di(f,A),R}function m(f,y,_,S){if(typeof _=="object"&&_!==null&&_.type===ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:e:{for(var R=_.key,N=y;N!==null;){if(N.key===R){if(R=_.type,R===ts){if(N.tag===7){n(f,N.sibling),y=i(N,_.props.children),y.return=f,f=y;break e}}else if(N.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Rr&&nh(R)===N.type){n(f,N.sibling),y=i(N,_.props),y.ref=Ks(f,N,_),y.return=f,f=y;break e}n(f,N);break}else e(f,N);N=N.sibling}_.type===ts?(y=Mi(_.props.children,f.mode,S,_.key),y.return=f,f=y):(S=$o(_.type,_.key,_.props,null,f.mode,S),S.ref=Ks(f,y,_),S.return=f,f=S)}return o(f);case es:e:{for(N=_.key;y!==null;){if(y.key===N)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(f,y.sibling),y=i(y,_.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=Nc(_,f.mode,S),y.return=f,f=y}return o(f);case Rr:return N=_._init,m(f,y,N(_._payload),S)}if(sa(_))return v(f,y,_,S);if(Ws(_))return g(f,y,_,S);lo(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(f,y.sibling),y=i(y,_),y.return=f,f=y):(n(f,y),y=Tc(_,f.mode,S),y.return=f,f=y),o(f)):n(f,y)}return m}var Ts=yx(!0),_x=yx(!1),ul=ei(null),dl=null,cs=null,Dd=null;function Ud(){Dd=cs=dl=null}function Od(t){var e=ul.current;ot(ul),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){dl=t,Dd=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Dd!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(dl===null)throw Error(ne(308));cs=t,dl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var vi=null;function kd(t){vi===null?vi=[t]:vi.push(t)}function Sx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kd(e)):(n.next=i.next,i.next=n),e.interleaved=n,gr(t,r)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gr(t,n)}return i=r.interleaved,i===null?(e.next=e,kd(r)):(e.next=i.next,i.next=e),r.interleaved=e,gr(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}function rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,h=u=c=null,l=s;do{var d=l.lane,x=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,g=l;switch(d=e,x=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){p=v.call(x,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(x,p,d):v,d==null)break e;p=pt({},p,d);break e;case 2:Pr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else x={eventTime:x,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=x,c=p):h=h.next=x,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=p}}function ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ne(191,i));i.call(r)}}}var Va={},Zn=ei(Va),La=ei(Va),Ia=ei(Va);function yi(t){if(t===Va)throw Error(ne(174));return t}function jd(t,e){switch(it(Ia,e),it(La,t),it(Zn,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gu(e,t)}ot(Zn),it(Zn,e)}function Ns(){ot(Zn),ot(La),ot(Ia)}function Mx(t){yi(Ia.current);var e=yi(Zn.current),n=gu(e,t.type);e!==n&&(it(La,t),it(Zn,n))}function zd(t){La.current===t&&(ot(Zn),ot(La))}var dt=ei(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Bd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var Go=yr.ReactCurrentDispatcher,Sc=yr.ReactCurrentBatchConfig,Ni=0,ft=null,Mt=null,It=null,pl=!1,pa=!1,Da=0,oy=0;function jt(){throw Error(ne(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(Ni=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Go.current=t===null||t.memoizedState===null?dy:fy,t=n(r,i),pa){s=0;do{if(pa=!1,Da=0,25<=s)throw Error(ne(301));s+=1,It=Mt=null,e.updateQueue=null,Go.current=hy,t=n(r,i)}while(pa)}if(Go.current=ml,e=Mt!==null&&Mt.next!==null,Ni=0,It=Mt=ft=null,pl=!1,e)throw Error(ne(300));return t}function Gd(){var t=Da!==0;return Da=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?ft.memoizedState=It=t:It=It.next=t,It}function Tn(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=It===null?ft.memoizedState:It.next;if(e!==null)It=e,Mt=t;else{if(t===null)throw Error(ne(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},It===null?ft.memoizedState=It=t:It=It.next=t}return It}function Ua(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var r=Mt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var h=u.lane;if((Ni&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,ft.lanes|=h,Ai|=h}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,jn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ft.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ex(){}function wx(t,e){var n=ft,r=Tn(),i=e(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,Wd(Ax.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Oa(9,Nx.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(ne(349));Ni&30||Tx(n,e,i)}return i}function Tx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nx(t,e,n,r){e.value=n,e.getSnapshot=r,Cx(e)&&Rx(t)}function Ax(t,e,n){return n(function(){Cx(e)&&Rx(t)})}function Cx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Rx(t){var e=gr(t,1);e!==null&&On(e,t,1,-1)}function sh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,ft,t),[e.memoizedState,t]}function Oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Px(){return Tn().memoizedState}function Wo(t,e,n,r){var i=Vn();ft.flags|=t,i.memoizedState=Oa(1|e,n,void 0,r===void 0?null:r)}function Ul(t,e,n,r){var i=Tn();r=r===void 0?null:r;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=Oa(e,n,s,r);return}}ft.flags|=t,i.memoizedState=Oa(1|e,n,s,r)}function ah(t,e){return Wo(8390656,8,t,e)}function Wd(t,e){return Ul(2048,8,t,e)}function Lx(t,e){return Ul(4,2,t,e)}function Ix(t,e){return Ul(4,4,t,e)}function Dx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ux(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,Dx.bind(null,e,t),n)}function Xd(){}function Ox(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kx(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fx(t,e,n){return Ni&21?(jn(n,e)||(n=Vm(),ft.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function ly(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var r=Sc.transition;Sc.transition={};try{t(!1),e()}finally{et=n,Sc.transition=r}}function jx(){return Tn().memoizedState}function cy(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zx(t))Bx(e,n);else if(n=Sx(t,e,n,r),n!==null){var i=Kt();On(n,t,r,i),Hx(n,e,r)}}function uy(t,e,n){var r=Gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zx(t))Bx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jn(l,o)){var c=e.interleaved;c===null?(i.next=i,kd(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Sx(t,e,i,r),n!==null&&(i=Kt(),On(n,t,r,i),Hx(n,e,r))}}function zx(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Bx(t,e){pa=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}var ml={readContext:wn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},dy={readContext:wn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,Dx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cy.bind(null,ft,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:sh,useDebugValue:Xd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=sh(!1),e=t[0];return t=ly.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ft,i=Vn();if(lt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Ni&30||Tx(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ah(Ax.bind(null,r,s,t),[t]),r.flags|=2048,Oa(9,Nx.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Dt.identifierPrefix;if(lt){var n=fr,r=dr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fy={readContext:wn,useCallback:Ox,useContext:wn,useEffect:Wd,useImperativeHandle:Ux,useInsertionEffect:Lx,useLayoutEffect:Ix,useMemo:kx,useReducer:bc,useRef:Px,useState:function(){return bc(Ua)},useDebugValue:Xd,useDeferredValue:function(t){var e=Tn();return Fx(e,Mt.memoizedState,t)},useTransition:function(){var t=bc(Ua)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ex,useSyncExternalStore:wx,useId:jx,unstable_isNewReconciler:!1},hy={readContext:wn,useCallback:Ox,useContext:wn,useEffect:Wd,useImperativeHandle:Ux,useInsertionEffect:Lx,useLayoutEffect:Ix,useMemo:kx,useReducer:Mc,useRef:Px,useState:function(){return Mc(Ua)},useDebugValue:Xd,useDeferredValue:function(t){var e=Tn();return Mt===null?e.memoizedState=t:Fx(e,Mt.memoizedState,t)},useTransition:function(){var t=Mc(Ua)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ex,useSyncExternalStore:wx,useId:jx,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Gr(t),s=pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(On(e,t,i,r),Vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Gr(t),s=pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(On(e,t,i,r),Vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=Gr(t),i=pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(On(e,t,r,n),Vo(e,t,r))}};function oh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,r)||!Aa(i,s):!0}function Vx(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=rn(e)?wi:Wt.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function lh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=rn(e)?wi:Wt.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",r=e;do n+=Bv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function Gx(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Ku=r),zu(t,e)},n}function Wx(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zu(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ch(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new py;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ay.bind(null,t,e,n),e.then(t,t))}function uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var my=yr.ReactCurrentOwner,tn=!1;function $t(t,e,n,r){e.child=t===null?_x(e,null,n,r):Ts(e,t.child,n,r)}function fh(t,e,n,r,i){n=n.render;var s=e.ref;return vs(e,i),r=Vd(t,e,n,r,s,i),n=Gd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(lt&&n&&Pd(e),e.flags|=1,$t(t,e,r,i),e.child)}function hh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xx(t,e,s,r,i)):(t=$o(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Aa(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vr(t,e,i)}return Bu(t,e,n,r,i)}function Yx(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ds,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ds,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,it(ds,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,it(ds,un),un|=r;return $t(t,e,i,n),e.child}function qx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bu(t,e,n,r,i){var s=rn(n)?wi:Wt.current;return s=Es(e,s),vs(e,i),n=Vd(t,e,n,r,s,i),r=Gd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(lt&&r&&Pd(e),e.flags|=1,$t(t,e,n,i),e.child)}function ph(t,e,n,r,i){if(rn(n)){var s=!0;ol(e)}else s=!1;if(vs(e,i),e.stateNode===null)Xo(t,e),Vx(e,n,r),ju(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=rn(n)?wi:Wt.current,u=Es(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&lh(e,o,r,u),Pr=!1;var d=e.memoizedState;o.state=d,fl(e,r,o,i),c=e.memoizedState,l!==r||d!==c||nn.current||Pr?(typeof h=="function"&&(Fu(e,n,h,r),c=e.memoizedState),(l=Pr||oh(e,n,l,r,d,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Pn(e.type,l),o.props=u,p=e.pendingProps,d=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=wn(c):(c=rn(n)?wi:Wt.current,c=Es(e,c));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||d!==c)&&lh(e,o,r,c),Pr=!1,d=e.memoizedState,o.state=d,fl(e,r,o,i);var v=e.memoizedState;l!==p||d!==v||nn.current||Pr?(typeof x=="function"&&(Fu(e,n,x,r),v=e.memoizedState),(u=Pr||oh(e,n,u,r,d,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Hu(t,e,n,r,s,i)}function Hu(t,e,n,r,i,s){qx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jf(e,n,!1),vr(t,e,s);r=e.stateNode,my.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,l,s)):$t(t,e,l,s),e.memoizedState=r.state,i&&Jf(e,n,!0),e.child}function $x(t){var e=t.stateNode;e.pendingContext?Qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qf(t,e.context,!1),jd(t,e.containerInfo)}function mh(t,e,n,r,i){return ws(),Id(i),e.flags|=256,$t(t,e,n,r),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kx(t,e,n){var r=e.pendingProps,i=dt.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),it(dt,i&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jl(o,r,0,null),t=Mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gu(n),e.memoizedState=Vu,t):Yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Wr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Wr(l,s):(s=Mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vu,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,r){return r!==null&&Id(r),Ts(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(ne(422))),co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jl({mode:"visible",children:r.children},i,0,null),s=Mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=Gu(o),e.memoizedState=Vu,s);if(!(e.mode&1))return co(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ne(419)),r=Ec(s,r,void 0),co(t,e,o,r)}if(l=(o&t.childLanes)!==0,tn||l){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gr(t,i),On(r,t,i,-1))}return Jd(),r=Ec(Error(ne(421))),co(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=Br(i.nextSibling),hn=e,lt=!0,In=null,t!==null&&(_n[Sn++]=dr,_n[Sn++]=fr,_n[Sn++]=Ti,dr=t.id,fr=t.overflow,Ti=e),e=Yd(e,r.children),e.flags|=4096,e)}function xh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ku(t.return,e,n)}function wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=dt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xh(t,n,e);else if(t.tag===19)xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(it(dt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:$x(e),ws();break;case 5:Mx(e);break;case 1:rn(e.type)&&ol(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;it(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Kx(t,e,n):(it(dt,dt.current&1),t=vr(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),it(dt,dt.current),r)break;return null;case 22:case 23:return e.lanes=0,Yx(t,e,n)}return vr(t,e,n)}var Qx,Wu,Jx,eg;Qx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wu=function(){};Jx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(Zn.current);var s=null;switch(n){case"input":i=hu(t,i),r=hu(t,r),s=[];break;case"select":i=pt({},i,{value:void 0}),r=pt({},r,{value:void 0}),s=[];break;case"textarea":i=xu(t,i),r=xu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sl)}vu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&st("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vy(t,e,n){var r=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return rn(e.type)&&al(),zt(e),null;case 3:return r=e.stateNode,Ns(),ot(nn),ot(Wt),Bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Ju(In),In=null))),Wu(t,e),zt(e),null;case 5:zd(e);var i=yi(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Jx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=yi(Zn.current),oo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xn]=e,r[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",r),st("close",r);break;case"iframe":case"object":case"embed":st("load",r);break;case"video":case"audio":for(i=0;i<oa.length;i++)st(oa[i],r);break;case"source":st("error",r);break;case"img":case"image":case"link":st("error",r),st("load",r);break;case"details":st("toggle",r);break;case"input":wf(r,s),st("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},st("invalid",r);break;case"textarea":Nf(r,s),st("invalid",r)}vu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,l,t),i=["children",""+l]):Sa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&st("scroll",r)}switch(n){case"input":Qa(r),Tf(r,s,!0);break;case"textarea":Qa(r),Af(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xn]=e,t[Pa]=r,Qx(t,e,!1,!1),e.stateNode=t;e:{switch(o=yu(n,r),n){case"dialog":st("cancel",t),st("close",t),i=r;break;case"iframe":case"object":case"embed":st("load",t),i=r;break;case"video":case"audio":for(i=0;i<oa.length;i++)st(oa[i],t);i=r;break;case"source":st("error",t),i=r;break;case"img":case"image":case"link":st("error",t),st("load",t),i=r;break;case"details":st("toggle",t),i=r;break;case"input":wf(t,r),i=hu(t,r),st("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pt({},r,{value:void 0}),st("invalid",t);break;case"textarea":Nf(t,r),i=xu(t,r),st("invalid",t);break;default:i=r}vu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Pm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ba(t,c):typeof c=="number"&&ba(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&st("scroll",t):c!=null&&gd(t,s,c,o))}switch(n){case"input":Qa(t),Tf(t,r,!1);break;case"textarea":Qa(t),Af(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)eg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ne(166));if(n=yi(Ia.current),yi(Zn.current),oo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xn]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:ao(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=e,e.stateNode=r}return zt(e),null;case 13:if(ot(dt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&fn!==null&&e.mode&1&&!(e.flags&128))vx(),ws(),e.flags|=98560,s=!1;else if(s=oo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Xn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else In!==null&&(Ju(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Et===0&&(Et=3):Jd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ns(),Wu(t,e),t===null&&Ca(e.stateNode.containerInfo),zt(e),null;case 10:return Od(e.type._context),zt(e),null;case 17:return rn(e.type)&&al(),zt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return zt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Cs&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return zt(e),null}else 2*_t()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,it(dt,r?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function yy(t,e){switch(Ld(e),e.tag){case 1:return rn(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ot(nn),ot(Wt),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return Ns(),null;case 10:return Od(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var uo=!1,Vt=!1,_y=typeof WeakSet=="function"?WeakSet:Set,xe=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){gt(t,e,r)}else n.current=null}function Xu(t,e,n){try{n()}catch(r){gt(t,e,r)}}var gh=!1;function Sy(t,e){if(Cu=nl,t=sx(),Rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)d=p,p=x;for(;;){if(p===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(c=o),(x=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:t,selectionRange:n},nl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:Pn(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=gh,gh=!1,v}function ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xu(e,n,s)}i=i.next}while(i!==r)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tg(t){var e=t.alternate;e!==null&&(t.alternate=null,tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Pa],delete e[Iu],delete e[ry],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ng(t){return t.tag===5||t.tag===3||t.tag===4}function vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}function $u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}var Ut=null,Ln=!1;function br(t,e,n){for(n=n.child;n!==null;)rg(t,e,n),n=n.sibling}function rg(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Vt||us(n,e);case 6:var r=Ut,i=Ln;Ut=null,br(t,e,n),Ut=r,Ln=i,Ut!==null&&(Ln?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Ln?(t=Ut,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),Ta(t)):vc(Ut,n.stateNode));break;case 4:r=Ut,i=Ln,Ut=n.stateNode.containerInfo,Ln=!0,br(t,e,n),Ut=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xu(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!Vt&&(us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){gt(n,e,l)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,br(t,e,n),Vt=r):br(t,e,n);break;default:br(t,e,n)}}function yh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _y),e.forEach(function(r){var i=Ry.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ut=l.stateNode,Ln=!1;break e;case 3:Ut=l.stateNode.containerInfo,Ln=!0;break e;case 4:Ut=l.stateNode.containerInfo,Ln=!0;break e}l=l.return}if(Ut===null)throw Error(ne(160));rg(s,o,i),Ut=null,Ln=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){gt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ig(e,t),e=e.sibling}function ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Hn(t),r&4){try{ma(3,t,t.return),kl(3,t)}catch(g){gt(t,t.return,g)}try{ma(5,t,t.return)}catch(g){gt(t,t.return,g)}}break;case 1:Nn(e,t),Hn(t),r&512&&n!==null&&us(n,n.return);break;case 5:if(Nn(e,t),Hn(t),r&512&&n!==null&&us(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(g){gt(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Tm(i,s),yu(l,o);var u=yu(l,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?Pm(i,p):h==="dangerouslySetInnerHTML"?Cm(i,p):h==="children"?ba(i,p):gd(i,h,p,u)}switch(l){case"input":pu(i,s);break;case"textarea":Nm(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ps(i,!!s.multiple,x,!1):d!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pa]=s}catch(g){gt(t,t.return,g)}}break;case 6:if(Nn(e,t),Hn(t),r&4){if(t.stateNode===null)throw Error(ne(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){gt(t,t.return,g)}}break;case 3:if(Nn(e,t),Hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(g){gt(t,t.return,g)}break;case 4:Nn(e,t),Hn(t);break;case 13:Nn(e,t),Hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=_t())),r&4&&yh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||h,Nn(e,t),Vt=u):Nn(e,t),Hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(p=xe=h;xe!==null;){switch(d=xe,x=d.child,d.tag){case 0:case 11:case 14:case 15:ma(4,d,d.return);break;case 1:us(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){gt(r,n,g)}}break;case 5:us(d,d.return);break;case 22:if(d.memoizedState!==null){Sh(p);continue}}x!==null?(x.return=d,xe=x):Sh(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Rm("display",o))}catch(g){gt(t,t.return,g)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){gt(t,t.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nn(e,t),Hn(t),r&4&&yh(t);break;case 21:break;default:Nn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ng(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=vh(t);$u(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vh(t);qu(t,l,o);break;default:throw Error(ne(161))}}catch(c){gt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,n){xe=t,sg(t)}function sg(t,e,n){for(var r=(t.mode&1)!==0;xe!==null;){var i=xe,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uo;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Vt;l=uo;var u=Vt;if(uo=o,(Vt=c)&&!u)for(xe=i;xe!==null;)o=xe,c=o.child,o.tag===22&&o.memoizedState!==null?bh(i):c!==null?(c.return=o,xe=c):bh(i);for(;s!==null;)xe=s,sg(s),s=s.sibling;xe=i,uo=l,Vt=u}_h(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,xe=s):_h(t)}}function _h(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ih(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ih(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&Yu(e)}catch(d){gt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Sh(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function bh(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(c){gt(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){gt(e,i,c)}}var s=e.return;try{Yu(e)}catch(c){gt(e,s,c)}break;case 5:var o=e.return;try{Yu(e)}catch(c){gt(e,o,c)}}}catch(c){gt(e,e.return,c)}if(e===t){xe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,xe=l;break}xe=e.return}}var My=Math.ceil,xl=yr.ReactCurrentDispatcher,qd=yr.ReactCurrentOwner,En=yr.ReactCurrentBatchConfig,$e=0,Dt=null,bt=null,Ot=0,un=0,ds=ei(0),Et=0,ka=null,Ai=0,Fl=0,$d=0,xa=null,en=null,Kd=0,Cs=1/0,lr=null,gl=!1,Ku=null,Vr=null,fo=!1,Or=null,vl=0,ga=0,Zu=null,Yo=-1,qo=0;function Kt(){return $e&6?_t():Yo!==-1?Yo:Yo=_t()}function Gr(t){return t.mode&1?$e&2&&Ot!==0?Ot&-Ot:ay.transition!==null?(qo===0&&(qo=Vm()),qo):(t=et,t!==0||(t=window.event,t=t===void 0?16:Km(t.type)),t):1}function On(t,e,n,r){if(50<ga)throw ga=0,Zu=null,Error(ne(185));za(t,n,r),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(Fl|=n),Et===4&&Ir(t,Ot)),sn(t,r),n===1&&$e===0&&!(e.mode&1)&&(Cs=_t()+500,Dl&&ti()))}function sn(t,e){var n=t.callbackNode;a0(t,e);var r=tl(t,t===Dt?Ot:0);if(r===0)n!==null&&Pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pf(n),e===1)t.tag===0?sy(Mh.bind(null,t)):mx(Mh.bind(null,t)),ty(function(){!($e&6)&&ti()}),n=null;else{switch(Gm(r)){case 1:n=bd;break;case 4:n=Bm;break;case 16:n=el;break;case 536870912:n=Hm;break;default:n=el}n=hg(n,ag.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ag(t,e){if(Yo=-1,qo=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=tl(t,t===Dt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var i=$e;$e|=2;var s=lg();(Dt!==t||Ot!==e)&&(lr=null,Cs=_t()+500,bi(t,e));do try{Ty();break}catch(l){og(t,l)}while(!0);Ud(),xl.current=s,$e=i,bt!==null?e=0:(Dt=null,Ot=0,e=Et)}if(e!==0){if(e===2&&(i=Eu(t),i!==0&&(r=i,e=Qu(t,i))),e===1)throw n=ka,bi(t,0),Ir(t,r),sn(t,_t()),n;if(e===6)Ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ey(i)&&(e=yl(t,r),e===2&&(s=Eu(t),s!==0&&(r=s,e=Qu(t,s))),e===1))throw n=ka,bi(t,0),Ir(t,r),sn(t,_t()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ne(345));case 2:fi(t,en,lr);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=Kd+500-_t(),10<e)){if(tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lu(fi.bind(null,t,en,lr),e);break}fi(t,en,lr);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=_t()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*My(r/1960))-r,10<r){t.timeoutHandle=Lu(fi.bind(null,t,en,lr),r);break}fi(t,en,lr);break;case 5:fi(t,en,lr);break;default:throw Error(ne(329))}}}return sn(t,_t()),t.callbackNode===n?ag.bind(null,t):null}function Qu(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=yl(t,e),t!==2&&(e=en,en=n,e!==null&&Ju(e)),t}function Ju(t){en===null?en=t:en.push.apply(en,t)}function Ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~$d,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function Mh(t){if($e&6)throw Error(ne(327));ys();var e=tl(t,0);if(!(e&1))return sn(t,_t()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Eu(t);r!==0&&(e=r,n=Qu(t,r))}if(n===1)throw n=ka,bi(t,0),Ir(t,e),sn(t,_t()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,en,lr),sn(t,_t()),null}function Zd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Cs=_t()+500,Dl&&ti())}}function Ci(t){Or!==null&&Or.tag===0&&!($e&6)&&ys();var e=$e;$e|=1;var n=En.transition,r=et;try{if(En.transition=null,et=1,t)return t()}finally{et=r,En.transition=n,$e=e,!($e&6)&&ti()}}function Qd(){un=ds.current,ot(ds)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ey(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(Ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Ns(),ot(nn),ot(Wt),Bd();break;case 5:zd(r);break;case 4:Ns();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:Od(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(Dt=t,bt=t=Wr(t.current,null),Ot=un=e,Et=0,ka=null,$d=Fl=Ai=0,en=xa=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vi=null}return t}function og(t,e){do{var n=bt;try{if(Ud(),Go.current=ml,pl){for(var r=ft.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pl=!1}if(Ni=0,It=Mt=ft=null,pa=!1,Da=0,qd.current=null,n===null||n.return===null){Et=1,ka=e,bt=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=Ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=uh(o);if(x!==null){x.flags&=-257,dh(x,o,l,s,e),x.mode&1&&ch(s,u,e),e=x,c=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(c),e.updateQueue=g}else v.add(c);break e}else{if(!(e&1)){ch(s,u,e),Jd();break e}c=Error(ne(426))}}else if(lt&&l.mode&1){var m=uh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),dh(m,o,l,s,e),Id(As(c,l));break e}}s=c=As(c,l),Et!==4&&(Et=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Gx(s,c,e);rh(s,f);break e;case 1:l=c;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vr===null||!Vr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Wx(s,l,e);rh(s,S);break e}}s=s.return}while(s!==null)}ug(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function lg(){var t=xl.current;return xl.current=ml,t===null?ml:t}function Jd(){(Et===0||Et===3||Et===2)&&(Et=4),Dt===null||!(Ai&268435455)&&!(Fl&268435455)||Ir(Dt,Ot)}function yl(t,e){var n=$e;$e|=2;var r=lg();(Dt!==t||Ot!==e)&&(lr=null,bi(t,e));do try{wy();break}catch(i){og(t,i)}while(!0);if(Ud(),$e=n,xl.current=r,bt!==null)throw Error(ne(261));return Dt=null,Ot=0,Et}function wy(){for(;bt!==null;)cg(bt)}function Ty(){for(;bt!==null&&!Zv();)cg(bt)}function cg(t){var e=fg(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?ug(t):bt=e,qd.current=null}function ug(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,bt=null;return}}else if(n=vy(n,e,un),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Et===0&&(Et=5)}function fi(t,e,n){var r=et,i=En.transition;try{En.transition=null,et=1,Ny(t,e,n,r)}finally{En.transition=i,et=r}return null}function Ny(t,e,n,r){do ys();while(Or!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(t,s),t===Dt&&(bt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,hg(el,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=et;et=1;var l=$e;$e|=4,qd.current=null,Sy(t,n),ig(n,t),Y0(Ru),nl=!!Cu,Ru=Cu=null,t.current=n,by(n),Qv(),$e=l,et=o,En.transition=s}else t.current=n;if(fo&&(fo=!1,Or=t,vl=i),s=t.pendingLanes,s===0&&(Vr=null),t0(n.stateNode),sn(t,_t()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=Ku,Ku=null,t;return vl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Zu?ga++:(ga=0,Zu=t):ga=0,ti(),null}function ys(){if(Or!==null){var t=Gm(vl),e=En.transition,n=et;try{if(En.transition=null,et=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,vl=0,$e&6)throw Error(ne(331));var i=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(xe=u;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var p=h.child;if(p!==null)p.return=h,xe=p;else for(;xe!==null;){h=xe;var d=h.sibling,x=h.return;if(tg(h),h===u){xe=null;break}if(d!==null){d.return=x,xe=d;break}xe=x}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,xe=f;break e}xe=s.return}}var y=t.current;for(xe=y;xe!==null;){o=xe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,xe=_;else e:for(o=y;xe!==null;){if(l=xe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kl(9,l)}}catch(R){gt(l,l.return,R)}if(l===o){xe=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,xe=S;break e}xe=l.return}}if($e=i,ti(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{et=n,En.transition=e}}return!1}function Eh(t,e,n){e=As(n,e),e=Gx(t,e,1),t=Hr(t,e,1),e=Kt(),t!==null&&(za(t,1,e),sn(t,e))}function gt(t,e,n){if(t.tag===3)Eh(t,t,n);else for(;e!==null;){if(e.tag===3){Eh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=As(n,t),t=Wx(e,t,1),e=Hr(e,t,1),t=Kt(),e!==null&&(za(e,1,t),sn(e,t));break}}e=e.return}}function Ay(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(Et===4||Et===3&&(Ot&130023424)===Ot&&500>_t()-Kd?bi(t,0):$d|=n),sn(t,e)}function dg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Kt();t=gr(t,e),t!==null&&(za(t,e,n),sn(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dg(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(e),dg(t,n)}var fg;fg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,gy(t,e,n);tn=!!(t.flags&131072)}else tn=!1,lt&&e.flags&1048576&&xx(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xo(t,e),t=e.pendingProps;var i=Es(e,Wt.current);vs(e,n),i=Vd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=Ol,e.stateNode=i,i._reactInternals=e,ju(e,r,t,n),e=Hu(null,e,r,!0,s,n)):(e.tag=0,lt&&s&&Pd(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ly(r),t=Pn(r,t),i){case 0:e=Bu(null,e,r,t,n);break e;case 1:e=ph(null,e,r,t,n);break e;case 11:e=fh(null,e,r,t,n);break e;case 14:e=hh(null,e,r,Pn(r.type,t),n);break e}throw Error(ne(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Bu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),ph(t,e,r,i,n);case 3:e:{if($x(e),t===null)throw Error(ne(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bx(t,e),fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=As(Error(ne(423)),e),e=mh(t,e,r,n,i);break e}else if(r!==i){i=As(Error(ne(424)),e),e=mh(t,e,r,n,i);break e}else for(fn=Br(e.stateNode.containerInfo.firstChild),hn=e,lt=!0,In=null,n=_x(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=vr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return Mx(e),t===null&&Ou(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pu(r,i)?o=null:s!==null&&Pu(r,s)&&(e.flags|=32),qx(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return Kx(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ts(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),fh(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,it(ul,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!nn.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=pr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ku(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vs(e,n),i=wn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=Pn(r,e.pendingProps),i=Pn(r.type,i),hh(t,e,r,i,n);case 15:return Xx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Xo(t,e),e.tag=1,rn(r)?(t=!0,ol(e)):t=!1,vs(e,n),Vx(e,r,i),ju(e,r,i,n),Hu(null,e,r,!0,t,n);case 19:return Zx(t,e,n);case 22:return Yx(t,e,n)}throw Error(ne(156,e.tag))};function hg(t,e){return zm(t,e)}function Py(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new Py(t,e,n,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ly(t){if(typeof t=="function")return ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===_d)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $o(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Mi(n.children,i,s,e);case vd:o=8,i|=8;break;case cu:return t=bn(12,n,e,i|2),t.elementType=cu,t.lanes=s,t;case uu:return t=bn(13,n,e,i),t.elementType=uu,t.lanes=s,t;case du:return t=bn(19,n,e,i),t.elementType=du,t.lanes=s,t;case Mm:return jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sm:o=10;break e;case bm:o=9;break e;case yd:o=11;break e;case _d:o=14;break e;case Rr:o=16,r=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mi(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function jl(t,e,n,r){return t=bn(22,t,r,e),t.elementType=Mm,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(t,e,n,r,i,s,o,l,c){return t=new Iy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function Dy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pg(t){if(!t)return $r;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(rn(n))return px(t,n,e)}return e}function mg(t,e,n,r,i,s,o,l,c){return t=tf(n,r,!0,t,i,s,o,l,c),t.context=pg(null),n=t.current,r=Kt(),i=Gr(n),s=pr(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,za(t,i,r),sn(t,r),t}function zl(t,e,n,r){var i=e.current,s=Kt(),o=Gr(i);return n=pg(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(On(t,i,o,s),Vo(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){wh(t,e),(t=t.alternate)&&wh(t,e)}function Uy(){return null}var xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}Bl.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));zl(t,e,null,null)};Bl.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){zl(null,t,null,null)}),e[xr]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&$m(t)}};function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Th(){}function Oy(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=mg(e,r,t,0,null,!1,!1,"",Th);return t._reactRootContainer=o,t[xr]=o.current,Ca(t.nodeType===8?t.parentNode:t),Ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_l(c);l.call(u)}}var c=tf(t,0,!1,null,null,!1,!1,"",Th);return t._reactRootContainer=c,t[xr]=c.current,Ca(t.nodeType===8?t.parentNode:t),Ci(function(){zl(e,c,n,r)}),c}function Vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=_l(o);l.call(c)}}zl(e,o,t,i)}else o=Oy(n,e,t,i,r);return _l(o)}Wm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Md(e,n|1),sn(e,_t()),!($e&6)&&(Cs=_t()+500,ti()))}break;case 13:Ci(function(){var r=gr(t,1);if(r!==null){var i=Kt();On(r,t,1,i)}}),nf(t,1)}};Ed=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=Kt();On(e,t,134217728,n)}nf(t,134217728)}};Xm=function(t){if(t.tag===13){var e=Gr(t),n=gr(t,e);if(n!==null){var r=Kt();On(n,t,e,r)}nf(t,e)}};Ym=function(){return et};qm=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Su=function(t,e,n){switch(e){case"input":if(pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(ne(90));wm(r),pu(r,i)}}}break;case"textarea":Nm(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Dm=Zd;Um=Ci;var ky={usingClientEntryPoint:!1,Events:[Ha,ss,Il,Lm,Im,Zd]},Qs={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fy={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Cl=ho.inject(Fy),Kn=ho}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(ne(200));return Dy(t,e,null,n)};xn.createRoot=function(t,e){if(!sf(t))throw Error(ne(299));var n=!1,r="",i=xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tf(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,Ca(t.nodeType===8?t.parentNode:t),new rf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Ci(t)};xn.hydrate=function(t,e,n){if(!Hl(e))throw Error(ne(200));return Vl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!sf(t))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mg(e,null,t,1,n??null,i,!1,s,o),t[xr]=e.current,Ca(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bl(e)};xn.render=function(t,e,n){if(!Hl(e))throw Error(ne(200));return Vl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(ne(40));return t._reactRootContainer?(Ci(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};xn.unstable_batchedUpdates=Zd;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Vl(t,e,n,!1,r)};xn.version="18.3.1-next-f1338f8080-20240426";function gg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg)}catch(t){console.error(t)}}gg(),gm.exports=xn;var jy=gm.exports,Nh=jy;ou.createRoot=Nh.createRoot,ou.hydrateRoot=Nh.hydrateRoot;var Ah="1.3.26";function vg(t,e,n){return Math.max(t,Math.min(e,n))}function zy(t,e,n){return(1-n)*t+n*e}function By(t,e,n,r){return zy(t,e,1-Math.exp(-n*r))}function Hy(t,e){return(t%e+e)%e}var Vy=class{constructor(){ve(this,"isRunning",!1);ve(this,"value",0);ve(this,"from",0);ve(this,"to",0);ve(this,"currentTime",0);ve(this,"lerp");ve(this,"duration");ve(this,"easing");ve(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const r=vg(0,this.currentTime/this.duration,1);e=r>=1;const i=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=By(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:r,easing:i,onStart:s,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Gy(t,e){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,r)},e)}}var Wy=class{constructor(t,e,{autoResize:n=!0,debounce:r=250}={}){ve(this,"width",0);ve(this,"height",0);ve(this,"scrollHeight",0);ve(this,"scrollWidth",0);ve(this,"debouncedResize");ve(this,"wrapperResizeObserver");ve(this,"contentResizeObserver");ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=Gy(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},yg=class{constructor(){ve(this,"events",{})}emit(t,...e){var r;const n=this.events[t]||[];for(let i=0,s=n.length;i<s;i++)(r=n[i])==null||r.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}destroy(){this.events={}}};const Xy=100/6,Mr={passive:!1};function Ch(t,e){return t===1?Xy:t===2?e:1}var Yy=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){ve(this,"touchStart",{x:0,y:0});ve(this,"lastDelta",{x:0,y:0});ve(this,"window",{width:0,height:0});ve(this,"emitter",new yg);ve(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});ve(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,r=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:t})});ve(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});ve(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:r}=t;const i=Ch(r,this.window.width),s=Ch(r,this.window.height);e*=i,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}};const Rh=t=>Math.min(1,1.001-2**(-10*t));var qy=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:l,easing:c,lerp:u=.1,infinite:h=!1,orientation:p="vertical",gestureOrientation:d=p==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:m,virtualScroll:f,overscroll:y=!0,autoRaf:_=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:N=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:A=T,stopInertiaOnNavigate:w=!1,respectReducedMotion:b=!0}={}){ve(this,"_isScrolling",!1);ve(this,"_isStopped",!1);ve(this,"_isLocked",!1);ve(this,"_preventNextNativeScrollEvent",!1);ve(this,"_resetVelocityTimeout",null);ve(this,"_rafId",null);ve(this,"_isDraggingSelection",!1);ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));ve(this,"isTouching");ve(this,"isIos");ve(this,"time",0);ve(this,"userData",{});ve(this,"lastVelocity",0);ve(this,"velocity",0);ve(this,"direction",0);ve(this,"options");ve(this,"targetScroll");ve(this,"animatedScroll");ve(this,"animate",new Vy);ve(this,"emitter",new yg);ve(this,"dimensions");ve(this,"virtualScroll");ve(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ve(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});ve(this,"onClick",t=>{const e=t.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),n=new URL(window.location.href);if(this.options.anchors){const r=e.find(i=>n.host===i.host&&n.pathname===i.pathname&&i.hash);if(r){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(r.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>n.host===r.host&&n.pathname!==r.pathname)){this.reset();return}});ve(this,"onPointerDown",t=>{t.button===1&&this.reset()});ve(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:r}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),s=r.type.includes("wheel");if(i&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const o=e===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(c.find(v=>{var g,m,f,y,_;return v instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(v))||((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent"))||h==="vertical"&&((m=v.hasAttribute)==null?void 0:m.call(v,"data-lenis-prevent-vertical"))||h==="horizontal"&&((f=v.hasAttribute)==null?void 0:f.call(v,"data-lenis-prevent-horizontal"))||i&&((y=v.hasAttribute)==null?void 0:y.call(v,"data-lenis-prevent-touch"))||s&&((_=v.hasAttribute)==null?void 0:_.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const d=i&&this.options.syncTouch,x=i&&r.type==="touchend";x&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...d?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ve(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ah,window.lenis||(window.lenis={}),window.lenis.version=Ah,p==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof l=="number"&&typeof c!="function"?c=Rh:typeof c=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:l,easing:c,lerp:u,infinite:h,gestureOrientation:d,orientation:p,touchMultiplier:x,wheelMultiplier:v,autoResize:g,prevent:m,virtualScroll:f,overscroll:y,autoRaf:_,anchors:S,autoToggle:R,allowNestedScroll:N,naiveDimensions:A,stopInertiaOnNavigate:w,respectReducedMotion:b},this.dimensions=new Wy(t,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Yy(n,{touchMultiplier:x,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=40,l=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=o,c=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=o;return l||c}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:l=i?this.options.easing:void 0,onStart:c,onComplete:u,force:h=!1,userData:p}={}){if(this.prefersReducedMotion&&(i?n=!0:(s=1,o=void 0,l=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=t,x=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(v=d),v){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?S.left:S.top}const g=v.getBoundingClientRect(),m=getComputedStyle(v),f=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),_=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(f)?0:f)-(Number.isNaN(_)?0:_)}}if(typeof d=="number"){if(d+=x,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=vg(0,d,this.limit);if(d===this.targetScroll){c==null||c(this),u==null||u(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof l!="function"?l=Rh:typeof l=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:l,lerp:s,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(v,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),i&&(this.targetScroll=v),g||this.emit(),g&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const r=Date.now();t._lenis||(t._lenis={});const i=t._lenis;let s,o,l,c,u,h,p,d,x,v;if(r-(i.time??0)>2e3){i.time=Date.now();const N=window.getComputedStyle(t);if(i.computedStyle=N,s=["auto","overlay","scroll"].includes(N.overflowX),o=["auto","overlay","scroll"].includes(N.overflowY),u=["auto"].includes(N.overscrollBehaviorX),h=["auto"].includes(N.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;p=t.scrollWidth,d=t.scrollHeight,x=t.clientWidth,v=t.clientHeight,l=p>x,c=d>v,i.isScrollableX=l,i.isScrollableY=c,i.scrollWidth=p,i.scrollHeight=d,i.clientWidth=x,i.clientHeight=v,i.hasOverscrollBehaviorX=u,i.hasOverscrollBehaviorY=h}else l=i.isScrollableX,c=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,p=i.scrollWidth,d=i.scrollHeight,x=i.clientWidth,v=i.clientHeight,u=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&l||o&&c))return!1;const g=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,f,y,_,S,R;if(g==="horizontal")m=Math.round(t.scrollLeft),f=p-x,y=e,_=s,S=l,R=u;else if(g==="vertical")m=Math.round(t.scrollTop),f=d-v,y=n,_=o,S=c,R=h;else return!1;return!R&&(m>=f||m<=0)?!0:(y>0?m<f:m>0)&&_&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Hy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};const Rt="/api",wt={async getCurrentUser(){try{const t=await fetch(`${Rt}/me`,{credentials:"include"});return t.ok&&(await t.json()).user||null}catch{return null}},async login(t,e,n=!1){try{const r=n?`${Rt}/login-secure`:`${Rt}/login`,i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e}),credentials:"include"}),s=await i.json();return i.ok?{success:!0,user:s.user}:{success:!1,error:s.error||"Authentication failed"}}catch(r){return{success:!1,error:r.message||"Network error"}}},async register(t,e,n){try{const r=await fetch(`${Rt}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:e,password:n}),credentials:"include"}),i=await r.json();return r.ok?{success:!0,user:i.user}:{success:!1,error:i.error||"Registration failed"}}catch(r){return{success:!1,error:r.message||"Network error"}}},async logout(){try{await fetch(`${Rt}/logout`,{method:"POST",credentials:"include"})}catch{}},async getProducts(){try{const t=await fetch(`${Rt}/products`);return t.ok?(await t.json()).products||[]:[]}catch{return[]}},async getProduct(t){try{const e=await fetch(`${Rt}/products/${t}`);return e.ok?await e.json():{product:null,reviews:[]}}catch{return{product:null,reviews:[]}}},async searchProducts(t){try{const e=await fetch(`${Rt}/search?q=${encodeURIComponent(t)}`);return e.ok?await e.json():{query:t,products:[],rawQuery:t}}catch{return{query:t,products:[],rawQuery:t}}},async addReview(t,e,n=5){try{const r=await fetch(`${Rt}/products/${t}/review`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:e,rating:n}),credentials:"include"}),i=await r.json();return r.ok?{success:!0,review:i.review}:{success:!1,error:i.error||"Failed to submit review"}}catch(r){return{success:!1,error:r.message}}},async getOrders(){try{const t=await fetch(`${Rt}/orders`,{credentials:"include"});return t.ok?(await t.json()).orders||[]:[]}catch{return[]}},async getOrder(t,e=!1){try{const n=e?`${Rt}/orders-secure/${t}`:`${Rt}/orders/${t}`,r=await fetch(n,{credentials:"include"});return r.ok?{order:(await r.json()).order}:{order:null,error:(await r.json().catch(()=>({}))).error||"Order not accessible"}}catch(n){return{order:null,error:n.message}}},async checkout(t){try{const e=await fetch(`${Rt}/checkout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}),n=await e.json();return e.ok?{success:!0,orderId:n.orderId}:{success:!1,error:n.error||"Checkout failed"}}catch(e){return{success:!1,error:e.message}}},async updateEmail(t,e){try{const n=e?`${Rt}/profile/email-secure`:`${Rt}/profile/email`,r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,csrfToken:e}),credentials:"include"}),i=await r.json();return r.ok?{success:!0,user:i.user}:{success:!1,error:i.error||"Update failed"}}catch(n){return{success:!1,error:n.message}}},async uploadAvatar(t){try{const e=await fetch(`${Rt}/profile/upload`,{method:"POST",body:t,credentials:"include"}),n=await e.json();return e.ok?{success:!0,filename:n.filename,url:n.url}:{success:!1,error:n.error||"Upload failed"}}catch(e){return{success:!1,error:e.message}}},async getAdminData(t=!1){try{const e=t?`${Rt}/admin-secure`:`${Rt}/admin`,n=await fetch(e,{credentials:"include"});return n.ok?{success:!0,...await n.json()}:{success:!1,error:(await n.json().catch(()=>({}))).error||"Admin access forbidden"}}catch(e){return{success:!1,error:e.message}}}},_g=X.createContext(void 0),$y=({children:t})=>{const[e,n]=X.useState(null),[r,i]=X.useState(!0),s=async()=>{try{const u=await wt.getCurrentUser();n(u)}catch{n(null)}finally{i(!1)}};X.useEffect(()=>{s()},[]);const o=async(u,h,p=!1)=>{const d=await wt.login(u,h,p);return d.success&&d.user?(n(d.user),{success:!0}):{success:!1,error:d.error}},l=async(u,h,p)=>{const d=await wt.register(u,h,p);return d.success&&d.user?(n(d.user),{success:!0}):{success:!1,error:d.error}},c=async()=>{await wt.logout(),n(null)};return a.jsx(_g.Provider,{value:{user:e,loading:r,login:o,register:l,logout:c,refreshUser:s},children:t})},_r=()=>{const t=X.useContext(_g);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Sg=X.createContext(void 0),Ky=({children:t})=>{const[e,n]=X.useState(()=>{try{const v=localStorage.getItem("vulnshop_cart");return v?JSON.parse(v):[]}catch{return[]}}),[r,i]=X.useState(!1);X.useEffect(()=>{try{localStorage.setItem("vulnshop_cart",JSON.stringify(e))}catch{}},[e]);const s=()=>i(!0),o=()=>i(!1),l=()=>i(v=>!v),c=(v,g=1)=>{n(m=>m.find(y=>y.product.id===v.id)?m.map(y=>y.product.id===v.id?{...y,quantity:y.quantity+g}:y):[...m,{product:v,quantity:g}]),i(!0)},u=v=>{n(g=>g.filter(m=>m.product.id!==v))},h=(v,g)=>{if(g<=0){u(v);return}n(m=>m.map(f=>f.product.id===v?{...f,quantity:g}:f))},p=()=>n([]),d=e.reduce((v,g)=>v+g.quantity,0),x=e.reduce((v,g)=>v+g.product.price*g.quantity,0);return a.jsx(Sg.Provider,{value:{items:e,isOpen:r,openCart:s,closeCart:o,toggleCart:l,addItem:c,removeItem:u,updateQuantity:h,clearCart:p,totalCount:d,subtotal:x},children:t})},Ii=()=>{const t=X.useContext(Sg);if(!t)throw new Error("useCart must be used within a CartProvider");return t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bg=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=X.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},c)=>X.createElement("svg",{ref:c,...Qy,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:bg("lucide",i),...l},[...o.map(([u,h])=>X.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(t,e)=>{const n=X.forwardRef(({className:r,...i},s)=>X.createElement(Jy,{ref:s,iconNode:e,className:bg(`lucide-${Zy(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Oe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=Oe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=Oe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=Oe("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Oe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=Oe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=Oe("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Oe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Oe("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=Oe("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=Oe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Oe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=Oe("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=Oe("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=Oe("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=Oe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=Oe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=Oe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Oe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Oe("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=Oe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Oe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Oe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=Oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=Oe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Oe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=Oe("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Oe("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=Oe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=Oe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=Oe("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=Oe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=Oe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=Oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=Oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=Oe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),N_=({onOpenSearch:t,onNavigate:e,currentPath:n})=>{const{user:r,logout:i}=_r(),{toggleCart:s,totalCount:o}=Ii();return a.jsx("header",{className:"sticky top-0 z-40 w-full border-b border-surface-border/60 bg-bg/80 backdrop-blur-xl transition-all",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",children:[a.jsxs("div",{onClick:()=>e("/"),className:"flex items-center gap-3 cursor-pointer group",children:[a.jsx("div",{className:"w-8 h-8 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center text-lime-primary font-mono font-bold text-xs group-hover:border-lime-primary/50 transition-colors shadow-[0_0_12px_rgba(183,255,106,0.1)]",children:"VS"}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs("span",{className:"font-mono text-sm tracking-widest font-bold text-text-primary",children:["VULN",a.jsx("span",{className:"text-lime-primary",children:"SHOP"})]}),a.jsx("span",{className:"text-[9px] font-mono tracking-wider text-text-muted hidden sm:inline",children:"HARDWARE / LAB"})]})]}),a.jsxs("nav",{className:"hidden md:flex items-center gap-1 bg-surface-elevated/60 p-1 rounded-full border border-surface-border",children:[a.jsx("button",{onClick:()=>e("/products"),className:`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${n==="/products"?"bg-surface text-lime-primary shadow-sm border border-surface-border":"text-text-secondary hover:text-text-primary"}`,children:"Store"}),a.jsx("button",{onClick:()=>e("/search"),className:`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${n==="/search"?"bg-surface text-lime-primary shadow-sm border border-surface-border":"text-text-secondary hover:text-text-primary"}`,children:"Search"}),r&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>e("/orders"),className:`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${n==="/orders"||n.startsWith("/order/")?"bg-surface text-lime-primary shadow-sm border border-surface-border":"text-text-secondary hover:text-text-primary"}`,children:"Orders"}),a.jsx("button",{onClick:()=>e("/profile"),className:`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${n==="/profile"||n==="/profile/upload"?"bg-surface text-lime-primary shadow-sm border border-surface-border":"text-text-secondary hover:text-text-primary"}`,children:"Account"})]}),a.jsx("button",{onClick:()=>e("/admin"),className:`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${n==="/admin"?"bg-surface text-lime-primary shadow-sm border border-surface-border":"text-text-secondary hover:text-text-primary"}`,children:"Admin"}),a.jsxs("button",{onClick:()=>e("/security"),className:`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${n==="/security"?"bg-surface text-violet-cool shadow-sm border border-surface-border":"text-text-muted hover:text-violet-cool"}`,title:"Practical 7 Notes",children:[a.jsx(Xl,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Security"})]})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-[11px] font-mono text-text-secondary",children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary animate-pulse"}),a.jsx("span",{children:"LOCAL NODE"})]}),a.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover text-xs transition-colors",title:"Open Search (Ctrl+K)",children:[a.jsx(Ps,{className:"w-4 h-4 text-lime-primary"}),a.jsx("span",{className:"hidden sm:inline",children:"Search"}),a.jsx("kbd",{className:"hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-text-muted border border-surface-border",children:"⌘K"})]}),a.jsxs("button",{onClick:s,className:"relative p-2 rounded-xl bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-lime-primary/40 transition-all group",title:"Open Shopping Bag",children:[a.jsx(mn,{className:"w-4 h-4 group-hover:text-lime-primary transition-colors"}),o>0&&a.jsx("span",{className:"absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-lime-primary text-bg font-mono font-bold text-[10px] flex items-center justify-center shadow-[0_0_8px_rgba(183,255,106,0.6)] animate-scale-up",children:o})]}),r?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:()=>e("/profile"),className:"flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-surface-elevated border border-surface-border hover:border-surface-borderHover text-xs text-text-primary transition-colors",children:[a.jsx("div",{className:"w-5 h-5 rounded-full bg-lime-primary/20 text-lime-primary font-mono text-[10px] flex items-center justify-center font-bold",children:r.username[0].toUpperCase()}),a.jsx("span",{className:"hidden sm:inline font-medium",children:r.username}),r.role==="admin"&&a.jsx("span",{className:"text-[9px] font-mono px-1 rounded bg-violet-cool/20 text-violet-cool hidden md:inline",children:"ADMIN"})]}),a.jsx("button",{onClick:i,className:"p-2 text-text-muted hover:text-text-primary rounded-xl transition-colors",title:"Sign out",children:a.jsx(d_,{className:"w-4 h-4"})})]}):a.jsxs("button",{onClick:()=>e("/login"),className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-all hover:bg-lime-secondary hover:shadow-[0_0_16px_rgba(183,255,106,0.25)]",children:[a.jsx("span",{children:"Sign in"}),a.jsx(n_,{className:"w-3.5 h-3.5"})]})]})]})})},A_=({onNavigate:t})=>a.jsx("footer",{className:"w-full border-t border-surface-border bg-surface-elevated/40 mt-24",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-10",children:[a.jsxs("div",{className:"md:col-span-2 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-lime-primary font-mono font-bold text-xs",children:"VS"}),a.jsxs("span",{className:"font-mono text-sm tracking-widest font-bold text-text-primary",children:["VULN",a.jsx("span",{className:"text-lime-primary",children:"SHOP"})]})]}),a.jsx("p",{className:"text-xs text-text-secondary max-w-md leading-relaxed",children:"A high-precision technology commerce storefront created for authorized Ethical Hacking & Vulnerability Assessment. The storefront embeds genuine application flaws inside a production-grade interface."}),a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-[11px] font-mono text-text-muted",children:[a.jsx(Bs,{className:"w-3.5 h-3.5 text-lime-primary"}),a.jsx("span",{children:"PROXY READY · BURP SUITE INTERCEPT ON 127.0.0.1"})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("div",{className:"text-[11px] font-mono uppercase tracking-widest text-text-muted",children:"APPLICATION"}),a.jsxs("ul",{className:"space-y-2 text-xs text-text-secondary font-medium",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/products"),className:"hover:text-lime-primary transition-colors",children:"Storefront Catalog"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/search"),className:"hover:text-lime-primary transition-colors",children:"Search & Filters"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/orders"),className:"hover:text-lime-primary transition-colors",children:"Order Tracking"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/profile"),className:"hover:text-lime-primary transition-colors",children:"Profile & Security"})})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("div",{className:"text-[11px] font-mono uppercase tracking-widest text-text-muted",children:"SECURITY LAB"}),a.jsxs("ul",{className:"space-y-2 text-xs text-text-secondary font-medium",children:[a.jsx("li",{children:a.jsxs("button",{onClick:()=>t("/security"),className:"hover:text-violet-cool transition-colors flex items-center gap-1",children:[a.jsx(Xl,{className:"w-3 h-3 text-violet-cool"}),a.jsx("span",{children:"Practical 7 Guide"})]})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/admin"),className:"hover:text-lime-primary transition-colors",children:"Admin Console"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/profile/upload"),className:"hover:text-lime-primary transition-colors",children:"Avatar Uploader"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>t("/login"),className:"hover:text-lime-primary transition-colors",children:"Authentication Portal"})})]})]})]}),a.jsxs("div",{className:"mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted",children:[a.jsx("div",{children:"Nirma University · 3CS204ME24 · Ethical Hacking Practical 7"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-lime-primary",children:"● 10 OWASP Vectors Embedded"}),a.jsx("span",{children:"Local Isolated Lab Target"})]})]})]})}),C_=({isOpen:t,onClose:e,onSelectProduct:n,onNavigate:r})=>{const[i,s]=X.useState(""),[o,l]=X.useState([]),[c,u]=X.useState([]),[h,p]=X.useState(0),d=X.useRef(null);X.useEffect(()=>{wt.getProducts().then(l)},[]),X.useEffect(()=>{t?(setTimeout(()=>{var g;return(g=d.current)==null?void 0:g.focus()},50),p(0)):s("")},[t]),X.useEffect(()=>{const g=m=>{(m.metaKey||m.ctrlKey)&&m.key.toLowerCase()==="k"&&(m.preventDefault(),t&&e())};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[t,e]),X.useEffect(()=>{if(!i.trim()){u(o);return}const g=i.toLowerCase(),m=o.filter(f=>f.name.toLowerCase().includes(g)||f.category.toLowerCase().includes(g)||f.description.toLowerCase().includes(g));u(m),p(0)},[i,o]);const x=g=>{if(g.key==="Escape")e();else if(g.key==="ArrowDown")g.preventDefault(),p(m=>(m+1)%(c.length+3));else if(g.key==="ArrowUp")g.preventDefault(),p(m=>(m-1+(c.length+3))%(c.length+3));else if(g.key==="Enter")if(g.preventDefault(),h<c.length){const m=c[h];m&&(n(m.id),e())}else h===c.length?(r("/products"),e()):h===c.length+1?(r("/orders"),e()):h===c.length+2&&(r("/security"),e())},v=g=>{switch(g.toLowerCase()){case"laptops":return a.jsx(c_,{className:"w-4 h-4 text-lime-primary"});case"smartphones":return a.jsx(__,{className:"w-4 h-4 text-blue-electric"});case"audio":return a.jsx(o_,{className:"w-4 h-4 text-violet-cool"});case"monitors":return a.jsx(m_,{className:"w-4 h-4 text-lime-primary"});default:return a.jsx(l_,{className:"w-4 h-4 text-text-secondary"})}};return t?a.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-bg/80 backdrop-blur-md animate-fade-in",children:a.jsxs("div",{className:"relative w-full max-w-2xl bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden animate-scale-up",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center gap-3 px-5 py-4 border-b border-surface-border bg-surface-elevated",children:[a.jsx(Ps,{className:"w-5 h-5 text-lime-primary"}),a.jsx("input",{ref:d,type:"text",value:i,onChange:g=>s(g.target.value),onKeyDown:x,placeholder:"Search products, categories, commands...",className:"w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none text-base"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"px-2 py-0.5 text-[10px] font-mono text-text-muted bg-surface rounded border border-surface-border",children:"ESC"}),a.jsx("button",{onClick:e,className:"p-1 text-text-secondary hover:text-text-primary rounded-lg transition-colors",children:a.jsx(Eg,{className:"w-4 h-4"})})]})]}),a.jsxs("div",{className:"max-h-[60vh] overflow-y-auto p-3 space-y-1",children:[a.jsx("div",{className:"px-3 py-1.5 text-[10px] font-mono text-text-muted uppercase tracking-wider",children:i?`Matching Products (${c.length})`:"Featured Products"}),c.length>0?c.map((g,m)=>a.jsxs("div",{onClick:()=>{n(g.id),e()},className:`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${h===m?"bg-surface-elevated border border-lime-primary/30 text-text-primary pl-4":"text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary"}`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2 rounded-lg bg-surface border border-surface-border",children:v(g.category)}),a.jsxs("div",{children:[a.jsxs("div",{className:"text-sm font-semibold text-text-primary flex items-center gap-2",children:[g.name,a.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-elevated text-lime-primary border border-surface-border",children:g.category})]}),a.jsx("div",{className:"text-xs text-text-muted line-clamp-1",children:g.description})]})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:"font-mono text-sm text-lime-primary font-medium",children:["₹",g.price.toLocaleString("en-IN")]}),a.jsx(kn,{className:"w-4 h-4 text-text-muted"})]})]},g.id)):a.jsxs("div",{className:"py-8 text-center text-text-muted text-sm",children:["Nothing matched ",a.jsxs("span",{className:"text-lime-primary",children:['"',i,'"']}),'. Try searching for "laptop" or "audio".']}),a.jsx("div",{className:"pt-3 pb-1 border-t border-surface-border/50 px-3 text-[10px] font-mono text-text-muted uppercase tracking-wider",children:"Quick Navigation"}),a.jsxs("div",{onClick:()=>{r("/products"),e()},className:`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${h===c.length?"bg-surface-elevated border border-lime-primary/30 text-text-primary":"text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary"}`,children:[a.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[a.jsx(mn,{className:"w-4 h-4 text-lime-primary"}),a.jsx("span",{children:"Browse Complete Storefront"})]}),a.jsx("span",{className:"text-xs font-mono text-text-muted",children:"/products"})]}),a.jsxs("div",{onClick:()=>{r("/orders"),e()},className:`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${h===c.length+1?"bg-surface-elevated border border-lime-primary/30 text-text-primary":"text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary"}`,children:[a.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[a.jsx(T_,{className:"w-4 h-4 text-blue-electric"}),a.jsx("span",{children:"Your Orders & History"})]}),a.jsx("span",{className:"text-xs font-mono text-text-muted",children:"/orders"})]}),a.jsxs("div",{onClick:()=>{r("/security"),e()},className:`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${h===c.length+2?"bg-surface-elevated border border-lime-primary/30 text-text-primary":"text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary"}`,children:[a.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[a.jsx(Xl,{className:"w-4 h-4 text-violet-cool"}),a.jsx("span",{children:"Practical 7 Vulnerability Notes"})]}),a.jsx("span",{className:"text-xs font-mono text-text-muted",children:"/security"})]})]}),a.jsxs("div",{className:"px-5 py-2.5 bg-surface-elevated/50 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-text-muted",children:[a.jsxs("span",{children:["Navigate with ",a.jsx("kbd",{className:"px-1 bg-surface border border-surface-border rounded",children:"↑"})," ",a.jsx("kbd",{className:"px-1 bg-surface border border-surface-border rounded",children:"↓"})]}),a.jsxs("span",{children:["Select ",a.jsx("kbd",{className:"px-1 bg-surface border border-surface-border rounded",children:"ENTER"})]})]})]})}):null},R_=({onNavigate:t})=>{const{items:e,isOpen:n,closeCart:r,updateQuantity:i,removeItem:s,subtotal:o,totalCount:l}=Ii();return n?a.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-bg/70 backdrop-blur-sm transition-opacity",onClick:r}),a.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:a.jsxs("div",{className:"w-screen max-w-md bg-surface border-l border-surface-border flex flex-col shadow-2xl animate-slide-in-right",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-surface-border bg-surface-elevated",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"p-2 rounded-xl bg-lime-primary/10 text-lime-primary border border-lime-primary/20",children:a.jsx(mn,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-base font-bold text-text-primary tracking-tight",children:"YOUR BAG"}),a.jsxs("span",{className:"text-xs font-mono text-text-secondary",children:[l," ",l===1?"ITEM":"ITEMS"," SELECTED"]})]})]}),a.jsx("button",{onClick:r,className:"p-2 text-text-secondary hover:text-text-primary rounded-xl hover:bg-surface border border-transparent hover:border-surface-border transition-colors",children:a.jsx(Eg,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:e.length>0?e.map(({product:c,quantity:u})=>a.jsxs("div",{className:"p-4 rounded-2xl bg-surface-elevated border border-surface-border flex gap-4 transition-all hover:border-surface-borderHover",children:[a.jsx("div",{className:"w-16 h-16 rounded-xl bg-surface border border-surface-border flex items-center justify-center shrink-0 p-1.5 overflow-hidden",children:a.jsx("img",{src:c.id===101?"/images/laptop.svg":c.id===102?"/images/phone.svg":c.id===103?"/images/headphones.svg":c.id===104?"/images/keyboard.svg":c.id===105?"/images/monitor.svg":c.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:c.name,className:"w-full h-full object-contain"})}),a.jsxs("div",{className:"flex-1 flex flex-col justify-between",children:[a.jsxs("div",{className:"flex items-start justify-between gap-2",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono text-lime-primary uppercase",children:c.category}),a.jsx("h4",{className:"text-sm font-semibold text-text-primary line-clamp-1",children:c.name})]}),a.jsx("button",{onClick:()=>s(c.id),className:"text-text-muted hover:text-red-400 p-1 transition-colors",title:"Remove item",children:a.jsx(S_,{className:"w-3.5 h-3.5"})})]}),a.jsxs("div",{className:"flex items-center justify-between mt-3",children:[a.jsxs("div",{className:"flex items-center bg-surface rounded-lg border border-surface-border p-0.5",children:[a.jsx("button",{onClick:()=>i(c.id,u-1),className:"p-1 text-text-secondary hover:text-text-primary rounded",children:a.jsx(p_,{className:"w-3 h-3"})}),a.jsx("span",{className:"font-mono text-xs px-2 text-text-primary font-medium",children:u}),a.jsx("button",{onClick:()=>i(c.id,u+1),className:"p-1 text-text-secondary hover:text-text-primary rounded",children:a.jsx(g_,{className:"w-3 h-3"})})]}),a.jsxs("div",{className:"font-mono text-sm font-bold text-text-primary",children:["₹",(c.price*u).toLocaleString("en-IN")]})]})]})]},c.id)):a.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-6 space-y-4",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-center text-text-muted",children:a.jsx(mn,{className:"w-8 h-8 stroke-1"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-text-primary text-base",children:"NOTHING HERE YET."}),a.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Your selected technology hardware will appear in this bag."})]}),a.jsx("button",{onClick:()=>{r(),t("/products")},className:"px-5 py-2.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-transform hover:scale-105",children:"Explore the collection →"})]})}),e.length>0&&a.jsxs("div",{className:"p-6 border-t border-surface-border bg-surface-elevated space-y-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex justify-between text-xs text-text-secondary font-mono",children:[a.jsx("span",{children:"SUBTOTAL"}),a.jsxs("span",{className:"text-text-primary font-bold",children:["₹",o.toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"flex justify-between text-xs text-text-secondary font-mono",children:[a.jsx("span",{children:"SHIPPING"}),a.jsx("span",{className:"text-lime-primary",children:"FREE LOCAL LAB DISPATCH"})]}),a.jsx("div",{className:"h-px bg-surface-border my-2"}),a.jsxs("div",{className:"flex justify-between text-sm text-text-primary font-bold font-mono",children:[a.jsx("span",{children:"ESTIMATED TOTAL"}),a.jsxs("span",{className:"text-lime-primary text-base",children:["₹",o.toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2",children:[a.jsx("button",{onClick:()=>{r(),t("/products")},className:"py-3 px-4 rounded-xl border border-surface-border bg-surface text-text-primary text-xs font-semibold hover:border-lime-primary/40 transition-colors",children:"CONTINUE SHOPPING"}),a.jsxs("button",{onClick:()=>{r(),t("/checkout")},className:"py-3 px-4 rounded-xl bg-lime-primary text-bg text-xs font-bold flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all hover:shadow-[0_0_20px_rgba(183,255,106,0.3)]",children:[a.jsx("span",{children:"CHECKOUT"}),a.jsx(kn,{className:"w-4 h-4"})]})]})]})]})})]}):null},P_=()=>{const[t,e]=X.useState({x:-100,y:-100}),[n,r]=X.useState(!1),[i,s]=X.useState(""),[o,l]=X.useState(!1),[c,u]=X.useState(!1);return X.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0){u(!0);return}const h=x=>{e({x:x.clientX,y:x.clientY}),o||l(!0);const v=x.target;if(!v)return;const g=v.closest('[data-cursor="view"]'),m=v.closest('[data-cursor="explore"]'),f=v.closest('button, a, input, textarea, select, [role="button"]');g?(r(!0),s("VIEW")):m?(r(!0),s("EXPLORE")):f?(r(!0),s("")):(r(!1),s(""))},p=()=>l(!1),d=()=>l(!0);return window.addEventListener("mousemove",h),document.addEventListener("mouseleave",p),document.addEventListener("mouseenter",d),()=>{window.removeEventListener("mousemove",h),document.removeEventListener("mouseleave",p),document.removeEventListener("mouseenter",d)}},[o]),c||!o?null:a.jsx("div",{className:"fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2",style:{left:`${t.x}px`,top:`${t.y}px`},children:a.jsx("div",{className:`flex items-center justify-center rounded-full transition-all duration-200 ${i?"w-16 h-16 bg-lime-primary text-bg font-mono text-[10px] font-bold tracking-widest":n?"w-8 h-8 bg-lime-primary/20 border border-lime-primary backdrop-blur-sm":"w-2.5 h-2.5 bg-lime-primary shadow-[0_0_8px_rgba(183,255,106,0.6)]"}`,children:i})})},L_=({onComplete:t})=>{const[e,n]=X.useState(0),[r,i]=X.useState(!1);return X.useEffect(()=>{if(sessionStorage.getItem("vulnshop_seen_loader")){t();return}const o=setInterval(()=>{n(l=>l>=100?(clearInterval(o),setTimeout(()=>{i(!0),setTimeout(()=>{sessionStorage.setItem("vulnshop_seen_loader","true"),t()},300)},150),100):l+20)},80);return()=>clearInterval(o)},[t]),a.jsx("div",{className:`fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center transition-opacity duration-300 ${r?"opacity-0 pointer-events-none":"opacity-100"}`,children:a.jsxs("div",{className:"flex flex-col items-center gap-6",children:[a.jsxs("div",{className:"relative flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border",children:[a.jsx("svg",{className:"w-8 h-8 text-lime-primary",viewBox:"0 0 100 100",fill:"none",children:a.jsx("path",{d:"M30 30L50 70L70 30",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-primary animate-ping"})]}),a.jsxs("div",{className:"text-center",children:[a.jsxs("div",{className:"font-mono text-sm tracking-[0.25em] text-text-primary font-semibold",children:["VULN",a.jsx("span",{className:"text-lime-primary",children:"SHOP"})]}),a.jsx("div",{className:"text-[10px] font-mono tracking-widest text-text-secondary mt-1",children:"COMMERCE INTELLIGENCE"})]}),a.jsx("div",{className:"w-48 h-0.5 bg-surface-border rounded-full overflow-hidden mt-2",children:a.jsx("div",{className:"h-full bg-lime-primary transition-all duration-100 ease-out",style:{width:`${e}%`}})})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="165",I_=0,Lh=1,D_=2,wg=1,Tg=2,or=3,Kr=0,an=1,ur=2,Xr=0,_s=1,td=2,Ih=3,Dh=4,U_=5,mi=100,O_=101,k_=102,F_=103,j_=104,z_=200,B_=201,H_=202,V_=203,nd=204,rd=205,G_=206,W_=207,X_=208,Y_=209,q_=210,$_=211,K_=212,Z_=213,Q_=214,J_=0,eS=1,tS=2,Sl=3,nS=4,rS=5,iS=6,sS=7,Ng=0,aS=1,oS=2,Yr=0,lS=1,cS=2,uS=3,Ag=4,dS=5,fS=6,hS=7,Cg=300,Ls=301,Is=302,id=303,sd=304,Yl=306,ad=1e3,_i=1001,od=1002,Mn=1003,pS=1004,po=1005,Dn=1006,Ac=1007,Si=1008,Zr=1009,mS=1010,xS=1011,bl=1012,Rg=1013,Ds=1014,kr=1015,ql=1016,Pg=1017,Lg=1018,Us=1020,gS=35902,vS=1021,yS=1022,$n=1023,_S=1024,SS=1025,Ss=1026,Os=1027,bS=1028,Ig=1029,MS=1030,Dg=1031,Ug=1033,Cc=33776,Rc=33777,Pc=33778,Lc=33779,Uh=35840,Oh=35841,kh=35842,Fh=35843,jh=36196,zh=37492,Bh=37496,Hh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,Yh=37813,qh=37814,$h=37815,Kh=37816,Zh=37817,Qh=37818,Jh=37819,ep=37820,tp=37821,Ic=36492,np=36494,rp=36495,ES=36283,ip=36284,sp=36285,ap=36286,wS=3200,TS=3201,Og=0,NS=1,Dr="",Gn="srgb",ni="srgb-linear",of="display-p3",$l="display-p3-linear",Ml="linear",at="srgb",El="rec709",wl="p3",Oi=7680,op=519,AS=512,CS=513,RS=514,kg=515,PS=516,LS=517,IS=518,DS=519,lp=35044,cp="300 es",hr=2e3,Tl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let up=1234567;const va=Math.PI/180,Fa=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function lf(t,e){return(t%e+e)%e}function US(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function OS(t,e,n){return t!==e?(n-t)/(e-t):0}function ya(t,e,n){return(1-n)*t+n*e}function kS(t,e,n,r){return ya(t,e,1-Math.exp(-n*r))}function FS(t,e=1){return e-Math.abs(lf(t,e*2)-e)}function jS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function zS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function BS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function HS(t,e){return t+Math.random()*(e-t)}function VS(t){return t*(.5-Math.random())}function GS(t){t!==void 0&&(up=t);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WS(t){return t*va}function XS(t){return t*Fa}function YS(t){return(t&t-1)===0&&t!==0}function qS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $S(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function KS(t,e,n,r,i){const s=Math.cos,o=Math.sin,l=s(n/2),c=o(n/2),u=s((e+r)/2),h=o((e+r)/2),p=s((e-r)/2),d=o((e-r)/2),x=s((r-e)/2),v=o((r-e)/2);switch(i){case"XYX":t.set(l*h,c*p,c*d,l*u);break;case"YZY":t.set(c*d,l*h,c*p,l*u);break;case"ZXZ":t.set(c*p,c*d,l*h,l*u);break;case"XZX":t.set(l*h,c*v,c*x,l*u);break;case"YXY":t.set(c*x,l*h,c*v,l*u);break;case"ZYZ":t.set(c*v,c*x,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ji(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ZS={DEG2RAD:va,RAD2DEG:Fa,generateUUID:Vs,clamp:Gt,euclideanModulo:lf,mapLinear:US,inverseLerp:OS,lerp:ya,damp:kS,pingpong:FS,smoothstep:jS,smootherstep:zS,randInt:BS,randFloat:HS,randFloatSpread:VS,seededRandom:GS,degToRad:WS,radToDeg:XS,isPowerOfTwo:YS,ceilPowerOfTwo:qS,floorPowerOfTwo:$S,setQuaternionFromProperEuler:KS,normalize:Yt,denormalize:Ji};class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,r,i,s,o,l,c,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,l,c,u)}set(e,n,r,i,s,o,l,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=r,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],l=r[3],c=r[6],u=r[1],h=r[4],p=r[7],d=r[2],x=r[5],v=r[8],g=i[0],m=i[3],f=i[6],y=i[1],_=i[4],S=i[7],R=i[2],N=i[5],T=i[8];return s[0]=o*g+l*y+c*R,s[3]=o*m+l*_+c*N,s[6]=o*f+l*S+c*T,s[1]=u*g+h*y+p*R,s[4]=u*m+h*_+p*N,s[7]=u*f+h*S+p*T,s[2]=d*g+x*y+v*R,s[5]=d*m+x*_+v*N,s[8]=d*f+x*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*o*h-n*l*u-r*s*h+r*l*c+i*s*u-i*o*c}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=h*o-l*u,d=l*c-h*s,x=u*s-o*c,v=n*p+r*d+i*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=p*g,e[1]=(i*u-h*r)*g,e[2]=(l*r-i*o)*g,e[3]=d*g,e[4]=(h*n-i*c)*g,e[5]=(i*s-l*n)*g,e[6]=x*g,e[7]=(r*c-u*n)*g,e[8]=(o*n-r*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(r*c,r*u,-r*(c*o+u*l)+o+e,-i*u,i*c,-i*(-u*o+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Ue;function Fg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QS(){const t=Nl("canvas");return t.style.display="block",t}const dp={};function jg(t){t in dp||(dp[t]=!0,console.warn(t))}function JS(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}const fp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[ni]:{transfer:Ml,primaries:El,toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:at,primaries:El,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:Ml,primaries:wl,toReference:t=>t.applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp)},[of]:{transfer:at,primaries:wl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp).convertLinearToSRGB()}},eb=new Set([ni,$l]),Je={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!eb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=mo[e].toReference,i=mo[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mo[t].primaries},getTransfer:function(t){return t===Dr?Ml:mo[t].transfer}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ki;class tb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=Nl("canvas")),ki.width=e.width,ki.height=e.height;const r=ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ki}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(bs(n[r]/255)*255):n[r]=bs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nb=0;class zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(Oc(i[o].image)):s.push(Oc(i[o]))}else s=Oc(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rb=0;class Zt extends Hs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,r=_i,i=_i,s=Dn,o=Si,l=$n,c=Zr,u=Zt.DEFAULT_ANISOTROPY,h=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Vs(),this.name="",this.source=new zg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Cg;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,r=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const c=e.elements,u=c[0],h=c[4],p=c[8],d=c[1],x=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(x+1)/2,R=(f+1)/2,N=(h+d)/4,T=(p+g)/4,A=(v+m)/4;return _>S&&_>R?_<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(_),i=N/r,s=T/r):S>R?S<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),r=N/i,s=A/i):R<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),r=T/s,i=A/s),this.set(r,i,s,n),this}let y=Math.sqrt((m-v)*(m-v)+(p-g)*(p-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(p-g)/y,this.z=(d-h)/y,this.w=Math.acos((u+x+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ib extends Hs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new Zt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends ib{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bg extends Zt{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends Zt{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,o,l){let c=r[i+0],u=r[i+1],h=r[i+2],p=r[i+3];const d=s[o+0],x=s[o+1],v=s[o+2],g=s[o+3];if(l===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(l===1){e[n+0]=d,e[n+1]=x,e[n+2]=v,e[n+3]=g;return}if(p!==g||c!==d||u!==x||h!==v){let m=1-l;const f=c*d+u*x+h*v+p*g,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const R=Math.sqrt(_),N=Math.atan2(R,f*y);m=Math.sin(m*N)/R,l=Math.sin(l*N)/R}const S=l*y;if(c=c*m+d*S,u=u*m+x*S,h=h*m+v*S,p=p*m+g*S,m===1-l){const R=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=R,u*=R,h*=R,p*=R}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,r,i,s,o){const l=r[i],c=r[i+1],u=r[i+2],h=r[i+3],p=s[o],d=s[o+1],x=s[o+2],v=s[o+3];return e[n]=l*v+h*p+c*x-u*d,e[n+1]=c*v+h*d+u*p-l*x,e[n+2]=u*v+h*x+l*d-c*p,e[n+3]=h*v-l*p-c*d-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(r/2),h=l(i/2),p=l(s/2),d=c(r/2),x=c(i/2),v=c(s/2);switch(o){case"XYZ":this._x=d*h*p+u*x*v,this._y=u*x*p-d*h*v,this._z=u*h*v+d*x*p,this._w=u*h*p-d*x*v;break;case"YXZ":this._x=d*h*p+u*x*v,this._y=u*x*p-d*h*v,this._z=u*h*v-d*x*p,this._w=u*h*p+d*x*v;break;case"ZXY":this._x=d*h*p-u*x*v,this._y=u*x*p+d*h*v,this._z=u*h*v+d*x*p,this._w=u*h*p-d*x*v;break;case"ZYX":this._x=d*h*p-u*x*v,this._y=u*x*p+d*h*v,this._z=u*h*v-d*x*p,this._w=u*h*p+d*x*v;break;case"YZX":this._x=d*h*p+u*x*v,this._y=u*x*p+d*h*v,this._z=u*h*v-d*x*p,this._w=u*h*p-d*x*v;break;case"XZY":this._x=d*h*p-u*x*v,this._y=u*x*p-d*h*v,this._z=u*h*v+d*x*p,this._w=u*h*p+d*x*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],o=n[1],l=n[5],c=n[9],u=n[2],h=n[6],p=n[10],d=r+l+p;if(d>0){const x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(h-c)*x,this._y=(s-u)*x,this._z=(o-i)*x}else if(r>l&&r>p){const x=2*Math.sqrt(1+r-l-p);this._w=(h-c)/x,this._x=.25*x,this._y=(i+o)/x,this._z=(s+u)/x}else if(l>p){const x=2*Math.sqrt(1+l-r-p);this._w=(s-u)/x,this._x=(i+o)/x,this._y=.25*x,this._z=(c+h)/x}else{const x=2*Math.sqrt(1+p-r-l);this._w=(o-i)/x,this._x=(s+u)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,o=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=r*h+o*l+i*u-s*c,this._y=i*h+o*c+s*l-r*u,this._z=s*h+o*u+r*c-i*l,this._w=o*h-r*l-i*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+r*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const x=1-n;return this._w=x*o+n*this._w,this._x=x*r+n*this._x,this._y=x*i+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),p=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*p+this._w*d,this._x=r*p+this._x*d,this._y=i*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*i-l*r),h=2*(l*n-s*i),p=2*(s*r-o*n);return this.x=n+c*u+o*p-l*h,this.y=r+c*h+l*u-s*p,this.z=i+c*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,o=n.x,l=n.y,c=n.z;return this.x=i*c-s*l,this.y=s*o-r*c,this.z=r*l-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new k,pp=new Wa;class Xa{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xo.copy(r.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),go.subVectors(this.max,Js),Fi.subVectors(e.a,Js),ji.subVectors(e.b,Js),zi.subVectors(e.c,Js),Er.subVectors(ji,Fi),wr.subVectors(zi,ji),si.subVectors(Fi,zi);let n=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-si.z,si.y,Er.z,0,-Er.x,wr.z,0,-wr.x,si.z,0,-si.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-si.y,si.x,0];return!Fc(n,Fi,ji,zi,go)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,Fi,ji,zi,go))?!1:(vo.crossVectors(Er,wr),n=[vo.x,vo.y,vo.z],Fc(n,Fi,ji,zi,go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,xo=new Xa,Fi=new k,ji=new k,zi=new k,Er=new k,wr=new k,si=new k,Js=new k,go=new k,vo=new k,ai=new k;function Fc(t,e,n,r,i){for(let s=0,o=t.length-3;s<=o;s+=3){ai.fromArray(t,s);const l=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=e.dot(ai),u=n.dot(ai),h=r.dot(ai);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const ab=new Xa,ea=new k,jc=new k;class Kl{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ab.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(ea,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(jc)),this.expandByPoint(ea.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new k,zc=new k,yo=new k,Tr=new k,Bc=new k,_o=new k,Hc=new k;class Hg{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,n),rr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){zc.copy(e).add(n).multiplyScalar(.5),yo.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(zc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yo),l=Tr.dot(this.direction),c=-Tr.dot(yo),u=Tr.lengthSq(),h=Math.abs(1-o*o);let p,d,x,v;if(h>0)if(p=o*c-l,d=o*l-c,v=s*h,p>=0)if(d>=-v)if(d<=v){const g=1/h;p*=g,d*=g,x=p*(p+o*d+2*l)+d*(o*p+d+2*c)+u}else d=s,p=Math.max(0,-(o*d+l)),x=-p*p+d*(d+2*c)+u;else d=-s,p=Math.max(0,-(o*d+l)),x=-p*p+d*(d+2*c)+u;else d<=-v?(p=Math.max(0,-(-o*s+l)),d=p>0?-s:Math.min(Math.max(-s,-c),s),x=-p*p+d*(d+2*c)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-c),s),x=d*(d+2*c)+u):(p=Math.max(0,-(o*s+l)),d=p>0?s:Math.min(Math.max(-s,-c),s),x=-p*p+d*(d+2*c)+u);else d=o>0?-s:s,p=Math.max(0,-(o*d+l)),x=-p*p+d*(d+2*c)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(zc).addScaledVector(yo,d),x}intersectSphere(e,n){rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),i=rr.dot(rr)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=r-o,c=r+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(r=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(r=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),p>=0?(l=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),r>c||l>i)||((l>r||r!==r)&&(r=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,n,r,i,s){Bc.subVectors(n,e),_o.subVectors(r,e),Hc.crossVectors(Bc,_o);let o=this.direction.dot(Hc),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Tr.subVectors(this.origin,e);const c=l*this.direction.dot(_o.crossVectors(Tr,_o));if(c<0)return null;const u=l*this.direction.dot(Bc.cross(Tr));if(u<0||c+u>o)return null;const h=-l*Tr.dot(Hc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,r,i,s,o,l,c,u,h,p,d,x,v,g,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,l,c,u,h,p,d,x,v,g,m)}set(e,n,r,i,s,o,l,c,u,h,p,d,x,v,g,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=r,f[12]=i,f[1]=s,f[5]=o,f[9]=l,f[13]=c,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=x,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),l=Math.sin(r),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,x=o*p,v=l*h,g=l*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=x+v*u,n[5]=d-g*u,n[9]=-l*c,n[2]=g-d*u,n[6]=v+x*u,n[10]=o*c}else if(e.order==="YXZ"){const d=c*h,x=c*p,v=u*h,g=u*p;n[0]=d+g*l,n[4]=v*l-x,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-l,n[2]=x*l-v,n[6]=g+d*l,n[10]=o*c}else if(e.order==="ZXY"){const d=c*h,x=c*p,v=u*h,g=u*p;n[0]=d-g*l,n[4]=-o*p,n[8]=v+x*l,n[1]=x+v*l,n[5]=o*h,n[9]=g-d*l,n[2]=-o*u,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){const d=o*h,x=o*p,v=l*h,g=l*p;n[0]=c*h,n[4]=v*u-x,n[8]=d*u+g,n[1]=c*p,n[5]=g*u+d,n[9]=x*u-v,n[2]=-u,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,x=o*u,v=l*c,g=l*u;n[0]=c*h,n[4]=g-d*p,n[8]=v*p+x,n[1]=p,n[5]=o*h,n[9]=-l*h,n[2]=-u*h,n[6]=x*p+v,n[10]=d-g*p}else if(e.order==="XZY"){const d=o*c,x=o*u,v=l*c,g=l*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=d*p+g,n[5]=o*h,n[9]=x*p-v,n[2]=v*p-x,n[6]=l*h,n[10]=g*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ob,e,lb)}lookAt(e,n,r){const i=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Nr.crossVectors(r,ln),Nr.lengthSq()===0&&(Math.abs(r.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Nr.crossVectors(r,ln)),Nr.normalize(),So.crossVectors(ln,Nr),i[0]=Nr.x,i[4]=So.x,i[8]=ln.x,i[1]=Nr.y,i[5]=So.y,i[9]=ln.y,i[2]=Nr.z,i[6]=So.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],l=r[4],c=r[8],u=r[12],h=r[1],p=r[5],d=r[9],x=r[13],v=r[2],g=r[6],m=r[10],f=r[14],y=r[3],_=r[7],S=r[11],R=r[15],N=i[0],T=i[4],A=i[8],w=i[12],b=i[1],P=i[5],z=i[9],j=i[13],W=i[2],q=i[6],V=i[10],Q=i[14],D=i[3],K=i[7],ee=i[11],ae=i[15];return s[0]=o*N+l*b+c*W+u*D,s[4]=o*T+l*P+c*q+u*K,s[8]=o*A+l*z+c*V+u*ee,s[12]=o*w+l*j+c*Q+u*ae,s[1]=h*N+p*b+d*W+x*D,s[5]=h*T+p*P+d*q+x*K,s[9]=h*A+p*z+d*V+x*ee,s[13]=h*w+p*j+d*Q+x*ae,s[2]=v*N+g*b+m*W+f*D,s[6]=v*T+g*P+m*q+f*K,s[10]=v*A+g*z+m*V+f*ee,s[14]=v*w+g*j+m*Q+f*ae,s[3]=y*N+_*b+S*W+R*D,s[7]=y*T+_*P+S*q+R*K,s[11]=y*A+_*z+S*V+R*ee,s[15]=y*w+_*j+S*Q+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],h=e[2],p=e[6],d=e[10],x=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+s*c*p-i*u*p-s*l*d+r*u*d+i*l*x-r*c*x)+g*(+n*c*x-n*u*d+s*o*d-i*o*x+i*u*h-s*c*h)+m*(+n*u*p-n*l*x-s*o*p+r*o*x+s*l*h-r*u*h)+f*(-i*l*h-n*c*p+n*l*d+i*o*p-r*o*d+r*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=e[9],d=e[10],x=e[11],v=e[12],g=e[13],m=e[14],f=e[15],y=p*m*u-g*d*u+g*c*x-l*m*x-p*c*f+l*d*f,_=v*d*u-h*m*u-v*c*x+o*m*x+h*c*f-o*d*f,S=h*g*u-v*p*u+v*l*x-o*g*x-h*l*f+o*p*f,R=v*p*c-h*g*c-v*l*d+o*g*d+h*l*m-o*p*m,N=n*y+r*_+i*S+s*R;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/N;return e[0]=y*T,e[1]=(g*d*s-p*m*s-g*i*x+r*m*x+p*i*f-r*d*f)*T,e[2]=(l*m*s-g*c*s+g*i*u-r*m*u-l*i*f+r*c*f)*T,e[3]=(p*c*s-l*d*s-p*i*u+r*d*u+l*i*x-r*c*x)*T,e[4]=_*T,e[5]=(h*m*s-v*d*s+v*i*x-n*m*x-h*i*f+n*d*f)*T,e[6]=(v*c*s-o*m*s-v*i*u+n*m*u+o*i*f-n*c*f)*T,e[7]=(o*d*s-h*c*s+h*i*u-n*d*u-o*i*x+n*c*x)*T,e[8]=S*T,e[9]=(v*p*s-h*g*s-v*r*x+n*g*x+h*r*f-n*p*f)*T,e[10]=(o*g*s-v*l*s+v*r*u-n*g*u-o*r*f+n*l*f)*T,e[11]=(h*l*s-o*p*s-h*r*u+n*p*u+o*r*x-n*l*x)*T,e[12]=R*T,e[13]=(h*g*i-v*p*i+v*r*d-n*g*d-h*r*m+n*p*m)*T,e[14]=(v*l*i-o*g*i-v*r*c+n*g*c+o*r*m-n*l*m)*T,e[15]=(o*p*i-h*l*i+h*r*c-n*p*c-o*r*d+n*l*d)*T,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,o=e.x,l=e.y,c=e.z,u=s*o,h=s*l;return this.set(u*o+r,u*l-i*c,u*c+i*l,0,u*l+i*c,h*l+r,h*c-i*o,0,u*c-i*l,h*c+i*o,s*c*c+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,u=s+s,h=o+o,p=l+l,d=s*u,x=s*h,v=s*p,g=o*h,m=o*p,f=l*p,y=c*u,_=c*h,S=c*p,R=r.x,N=r.y,T=r.z;return i[0]=(1-(g+f))*R,i[1]=(x+S)*R,i[2]=(v-_)*R,i[3]=0,i[4]=(x-S)*N,i[5]=(1-(d+f))*N,i[6]=(m+y)*N,i[7]=0,i[8]=(v+_)*T,i[9]=(m-y)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=Bi.set(i[0],i[1],i[2]).length();const o=Bi.set(i[4],i[5],i[6]).length(),l=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Cn.copy(this);const u=1/s,h=1/o,p=1/l;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,n.setFromRotationMatrix(Cn),r.x=s,r.y=o,r.z=l,this}makePerspective(e,n,r,i,s,o,l=hr){const c=this.elements,u=2*s/(n-e),h=2*s/(r-i),p=(n+e)/(n-e),d=(r+i)/(r-i);let x,v;if(l===hr)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(l===Tl)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,i,s,o,l=hr){const c=this.elements,u=1/(n-e),h=1/(r-i),p=1/(o-s),d=(n+e)*u,x=(r+i)*h;let v,g;if(l===hr)v=(o+s)*p,g=-2*p;else if(l===Tl)v=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Bi=new k,Cn=new ht,ob=new k(0,0,0),lb=new k(1,1,1),Nr=new k,So=new k,ln=new k,mp=new ht,xp=new Wa;class Jn{constructor(e=0,n=0,r=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],c=i[1],u=i[5],h=i[9],p=i[2],d=i[6],x=i[10];switch(n){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cb=0;const gp=new k,Hi=new Wa,ir=new ht,bo=new k,ta=new k,ub=new k,db=new Wa,vp=new k(1,0,0),yp=new k(0,1,0),_p=new k(0,0,1),Sp={type:"added"},fb={type:"removed"},Vi={type:"childadded",child:null},Vc={type:"childremoved",child:null};class kt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new k,n=new Jn,r=new Wa,i=new k(1,1,1);function s(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ue}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hi.setFromAxisAngle(e,n),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,n){return Hi.setFromAxisAngle(e,n),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,n){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?bo.copy(e):bo.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(ta,bo,this.up):ir.lookAt(bo,ta,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(ir),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fb),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const s=n[r];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const l=i[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(s(e.animations,c))}}if(n){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),x=o(e.animations),v=o(e.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),d.length>0&&(r.skeletons=d),x.length>0&&(r.animations=x),v.length>0&&(r.nodes=v)}return r.object=i,r;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}kt.DEFAULT_UP=new k(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new k,sr=new k,Gc=new k,ar=new k,Gi=new k,Wi=new k,bp=new k,Wc=new k,Xc=new k,Yc=new k;class Yn{constructor(e=new k,n=new k,r=new k){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Rn.subVectors(e,n),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Rn.subVectors(i,n),sr.subVectors(r,n),Gc.subVectors(e,n);const o=Rn.dot(Rn),l=Rn.dot(sr),c=Rn.dot(Gc),u=sr.dot(sr),h=sr.dot(Gc),p=o*u-l*l;if(p===0)return s.set(0,0,0),null;const d=1/p,x=(u*c-l*h)*d,v=(o*h-l*c)*d;return s.set(1-x-v,v,x)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,n,r,i,s,o,l,c){return this.getBarycoord(e,n,r,i,ar)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ar.x),c.addScaledVector(o,ar.y),c.addScaledVector(l,ar.z),c)}static isFrontFacing(e,n,r,i){return Rn.subVectors(r,n),sr.subVectors(e,n),Rn.cross(sr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Rn.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let o,l;Gi.subVectors(i,r),Wi.subVectors(s,r),Wc.subVectors(e,r);const c=Gi.dot(Wc),u=Wi.dot(Wc);if(c<=0&&u<=0)return n.copy(r);Xc.subVectors(e,i);const h=Gi.dot(Xc),p=Wi.dot(Xc);if(h>=0&&p<=h)return n.copy(i);const d=c*p-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(r).addScaledVector(Gi,o);Yc.subVectors(e,s);const x=Gi.dot(Yc),v=Wi.dot(Yc);if(v>=0&&x<=v)return n.copy(s);const g=x*u-c*v;if(g<=0&&u>=0&&v<=0)return l=u/(u-v),n.copy(r).addScaledVector(Wi,l);const m=h*v-x*p;if(m<=0&&p-h>=0&&x-v>=0)return bp.subVectors(s,i),l=(p-h)/(p-h+(x-v)),n.copy(i).addScaledVector(bp,l);const f=1/(m+g+d);return o=g*f,l=d*f,n.copy(r).addScaledVector(Gi,o).addScaledVector(Wi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Je.workingColorSpace){return this.r=e,this.g=n,this.b=r,Je.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Je.workingColorSpace){if(e=lf(e,1),n=Gt(n,0,1),r=Gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,n=Gn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const r=Gg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Je.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ht.copy(this),n);const r=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(r,i,s),l=Math.min(r,i,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case r:c=(i-s)/p+(i<s?6:0);break;case i:c=(s-r)/p+2;break;case s:c=(r-i)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Gn){Je.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,r=Ht.g,i=Ht.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+n,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ar),e.getHSL(Mo);const r=ya(Ar.h,Mo.h,n),i=ya(Ar.s,Mo.s,n),s=ya(Ar.l,Mo.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ze;ze.NAMES=Gg;let hb=0;class Di extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=_s,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=rd,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nd&&(r.blendSrc=this.blendSrc),this.blendDst!==rd&&(r.blendDst=this.blendDst),this.blendEquation!==mi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Sl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _a extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new k,Eo=new We;class Fn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=lp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ji(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Yt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ji(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ji(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ji(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ji(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),r=Yt(r,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lp&&(e.usage=this.usage),e}}class Wg extends Fn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xg extends Fn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Qn extends Fn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let pb=0;const yn=new ht,$c=new kt,Xi=new k,cn=new Xa,na=new Xa,Pt=new k;class er extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Xg:Wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ue().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,r){return yn.makeTranslation(e,n,r),this.applyMatrix4(yn),this}scale(e,n,r){return yn.makeScale(e,n,r),this.applyMatrix4(yn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];na.setFromBufferAttribute(l),this.morphTargetsRelative?(Pt.addVectors(cn.min,na.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,na.max),cn.expandByPoint(Pt)):(cn.expandByPoint(na.min),cn.expandByPoint(na.max))}cn.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Pt.fromBufferAttribute(l,u),c&&(Xi.fromBufferAttribute(e,u),Pt.add(Xi)),i=Math.max(i,r.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let A=0;A<r.count;A++)l[A]=new k,c[A]=new k;const u=new k,h=new k,p=new k,d=new We,x=new We,v=new We,g=new k,m=new k;function f(A,w,b){u.fromBufferAttribute(r,A),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),d.fromBufferAttribute(s,A),x.fromBufferAttribute(s,w),v.fromBufferAttribute(s,b),h.sub(u),p.sub(u),x.sub(d),v.sub(d);const P=1/(x.x*v.y-v.x*x.y);isFinite(P)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(P),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-v.x).multiplyScalar(P),l[A].add(g),l[w].add(g),l[b].add(g),c[A].add(m),c[w].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,w=y.length;A<w;++A){const b=y[A],P=b.start,z=b.count;for(let j=P,W=P+z;j<W;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new k,S=new k,R=new k,N=new k;function T(A){R.fromBufferAttribute(i,A),N.copy(R);const w=l[A];_.copy(w),_.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(N,w);const P=S.dot(c[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,P)}for(let A=0,w=y.length;A<w;++A){const b=y[A],P=b.start,z=b.count;for(let j=P,W=P+z;j<W;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let d=0,x=r.count;d<x;d++)r.setXYZ(d,0,0,0);const i=new k,s=new k,o=new k,l=new k,c=new k,u=new k,h=new k,p=new k;if(e)for(let d=0,x=e.count;d<x;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,g),u.fromBufferAttribute(r,m),l.add(h),c.add(h),u.add(h),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,x=n.count;d<x;d+=3)i.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(i,s),h.cross(p),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,p=l.normalized,d=new u.constructor(c.length*h);let x=0,v=0;for(let g=0,m=c.length;g<m;g++){l.isInterleavedBufferAttribute?x=c[g]*l.data.stride+l.offset:x=c[g]*h;for(let f=0;f<h;f++)d[v++]=u[x++]}return new Fn(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,r=this.index.array,i=this.attributes;for(const l in i){const c=i[l],u=e(c,r);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++){const d=u[h],x=e(d,r);c.push(x)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const c in r){const u=r[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,d=u.length;p<d;p++){const x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,x=p.length;d<x;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mp=new ht,oi=new Hg,wo=new Kl,Ep=new k,Yi=new k,qi=new k,$i=new k,Kc=new k,To=new k,No=new We,Ao=new We,Co=new We,wp=new k,Tp=new k,Np=new k,Ro=new k,Po=new k;class Lt extends kt{constructor(e=new er,n=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){To.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],p=s[c];h!==0&&(Kc.fromBufferAttribute(p,e),o?To.addScaledVector(Kc,h):To.addScaledVector(Kc.sub(n),h))}n.add(To)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wo.copy(r.boundingSphere),wo.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(wo.containsPoint(oi.origin)===!1&&(oi.intersectSphere(wo,Ep)===null||oi.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),oi.copy(e.ray).applyMatrix4(Mp),!(r.boundingBox!==null&&oi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,oi)))}_computeIntersections(e,n,r){let i;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,x=s.drawRange;if(l!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],y=Math.max(m.start,x.start),_=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let S=y,R=_;S<R;S+=3){const N=l.getX(S),T=l.getX(S+1),A=l.getX(S+2);i=Lo(this,f,e,r,u,h,p,N,T,A),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const v=Math.max(0,x.start),g=Math.min(l.count,x.start+x.count);for(let m=v,f=g;m<f;m+=3){const y=l.getX(m),_=l.getX(m+1),S=l.getX(m+2);i=Lo(this,o,e,r,u,h,p,y,_,S),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],y=Math.max(m.start,x.start),_=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let S=y,R=_;S<R;S+=3){const N=S,T=S+1,A=S+2;i=Lo(this,f,e,r,u,h,p,N,T,A),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const v=Math.max(0,x.start),g=Math.min(c.count,x.start+x.count);for(let m=v,f=g;m<f;m+=3){const y=m,_=m+1,S=m+2;i=Lo(this,o,e,r,u,h,p,y,_,S),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function mb(t,e,n,r,i,s,o,l){let c;if(e.side===an?c=r.intersectTriangle(o,s,i,!0,l):c=r.intersectTriangle(i,s,o,e.side===Kr,l),c===null)return null;Po.copy(l),Po.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Po);return u<n.near||u>n.far?null:{distance:u,point:Po.clone(),object:t}}function Lo(t,e,n,r,i,s,o,l,c,u){t.getVertexPosition(l,Yi),t.getVertexPosition(c,qi),t.getVertexPosition(u,$i);const h=mb(t,e,n,r,Yi,qi,$i,Ro);if(h){i&&(No.fromBufferAttribute(i,l),Ao.fromBufferAttribute(i,c),Co.fromBufferAttribute(i,u),h.uv=Yn.getInterpolation(Ro,Yi,qi,$i,No,Ao,Co,new We)),s&&(No.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,c),Co.fromBufferAttribute(s,u),h.uv1=Yn.getInterpolation(Ro,Yi,qi,$i,No,Ao,Co,new We)),o&&(wp.fromBufferAttribute(o,l),Tp.fromBufferAttribute(o,c),Np.fromBufferAttribute(o,u),h.normal=Yn.getInterpolation(Ro,Yi,qi,$i,wp,Tp,Np,new k),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new k,materialIndex:0};Yn.getNormal(Yi,qi,$i,p.normal),h.face=p}return h}class qn extends er{constructor(e=1,n=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],p=[];let d=0,x=0;v("z","y","x",-1,-1,r,n,e,o,s,0),v("z","y","x",1,-1,r,n,-e,o,s,1),v("x","z","y",1,1,e,r,n,i,o,2),v("x","z","y",1,-1,e,r,-n,i,o,3),v("x","y","z",1,-1,e,n,r,i,s,4),v("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(c),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(h,3)),this.setAttribute("uv",new Qn(p,2));function v(g,m,f,y,_,S,R,N,T,A,w){const b=S/T,P=R/A,z=S/2,j=R/2,W=N/2,q=T+1,V=A+1;let Q=0,D=0;const K=new k;for(let ee=0;ee<V;ee++){const ae=ee*P-j;for(let _e=0;_e<q;_e++){const Be=_e*b-z;K[g]=Be*y,K[m]=ae*_,K[f]=W,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[f]=N>0?1:-1,h.push(K.x,K.y,K.z),p.push(_e/T),p.push(1-ee/A),Q+=1}}for(let ee=0;ee<A;ee++)for(let ae=0;ae<T;ae++){const _e=d+ae+q*ee,Be=d+ae+q*(ee+1),G=d+(ae+1)+q*(ee+1),re=d+(ae+1)+q*ee;c.push(_e,Be,re),c.push(Be,G,re),D+=6}l.addGroup(x,D,w),x+=D,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const r=ks(t[n]);for(const i in r)e[i]=r[i]}return e}function xb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const gb={clone:ks,merge:qt};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qg extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=hr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new k,Ap=new We,Cp=new We;class dn extends qg{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Ap,Cp),n.subVectors(Cp,Ap)}setViewOffset(e,n,r,i,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(va*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/c,n-=o.offsetY*r/u,i*=o.width/c,r*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ki=-90,Zi=1;class _b extends kt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Ki,Zi,e,n);i.layers=this.layers,this.add(i);const s=new dn(Ki,Zi,e,n);s.layers=this.layers,this.add(s);const o=new dn(Ki,Zi,e,n);o.layers=this.layers,this.add(o);const l=new dn(Ki,Zi,e,n);l.layers=this.layers,this.add(l);const c=new dn(Ki,Zi,e,n);c.layers=this.layers,this.add(c);const u=new dn(Ki,Zi,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,o,l,c]=n;for(const u of n)this.remove(u);if(e===hr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,o),e.setRenderTarget(r,2,i),e.render(n,l),e.setRenderTarget(r,3,i),e.render(n,c),e.setRenderTarget(r,4,i),e.render(n,u),r.texture.generateMipmaps=g,e.setRenderTarget(r,5,i),e.render(n,h),e.setRenderTarget(p,d,x),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class $g extends Zt{constructor(e,n,r,i,s,o,l,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,r,i,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sb extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new $g(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),s=new Qr({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:an,blending:Xr});s.uniforms.tEquirect.value=n;const o=new Lt(i,s),l=n.minFilter;return n.minFilter===Si&&(n.minFilter=Dn),new _b(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(s)}}const Zc=new k,bb=new k,Mb=new Ue;class hi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Zc.subVectors(r,n).cross(bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Mb.getNormalMatrix(e),i=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Kl,Io=new k;class cf{constructor(e=new hi,n=new hi,r=new hi,i=new hi,s=new hi,o=new hi){this.planes=[e,n,r,i,s,o]}set(e,n,r,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(r),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=hr){const r=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],c=i[3],u=i[4],h=i[5],p=i[6],d=i[7],x=i[8],v=i[9],g=i[10],m=i[11],f=i[12],y=i[13],_=i[14],S=i[15];if(r[0].setComponents(c-s,d-u,m-x,S-f).normalize(),r[1].setComponents(c+s,d+u,m+x,S+f).normalize(),r[2].setComponents(c+o,d+h,m+v,S+y).normalize(),r[3].setComponents(c-o,d-h,m-v,S-y).normalize(),r[4].setComponents(c-l,d-p,m-g,S-_).normalize(),n===hr)r[5].setComponents(c+l,d+p,m+g,S+_).normalize();else if(n===Tl)r[5].setComponents(l,p,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Io.x=i.normal.x>0?e.max.x:e.min.x,Io.y=i.normal.y>0?e.max.y:e.min.y,Io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kg(){let t=null,e=!1,n=null,r=null;function i(s,o){n(s,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Eb(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=t.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=t.SHORT;else if(u instanceof Uint32Array)x=t.UNSIGNED_INT;else if(u instanceof Int32Array)x=t.INT;else if(u instanceof Int8Array)x=t.BYTE;else if(u instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,c,u){const h=c.array,p=c._updateRange,d=c.updateRanges;if(t.bindBuffer(u,l),p.count===-1&&d.length===0&&t.bufferSubData(u,0,h),d.length!==0){for(let x=0,v=d.length;x<v;x++){const g=d[x];t.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,c),u.version=l.version}}return{get:i,remove:s,update:o}}class Ei extends er{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,o=n/2,l=Math.floor(r),c=Math.floor(i),u=l+1,h=c+1,p=e/l,d=n/c,x=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let _=0;_<u;_++){const S=_*p-s;v.push(S,-y,0),g.push(0,0,1),m.push(_/l),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<l;y++){const _=y+u*f,S=y+u*(f+1),R=y+1+u*(f+1),N=y+1+u*f;x.push(_,S,N),x.push(S,R,N)}this.setIndex(x),this.setAttribute("position",new Qn(v,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$M=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:wb,alphahash_pars_fragment:Tb,alphamap_fragment:Nb,alphamap_pars_fragment:Ab,alphatest_fragment:Cb,alphatest_pars_fragment:Rb,aomap_fragment:Pb,aomap_pars_fragment:Lb,batching_pars_vertex:Ib,batching_vertex:Db,begin_vertex:Ub,beginnormal_vertex:Ob,bsdfs:kb,iridescence_fragment:Fb,bumpmap_pars_fragment:jb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:Hb,clipping_planes_vertex:Vb,color_fragment:Gb,color_pars_fragment:Wb,color_pars_vertex:Xb,color_vertex:Yb,common:qb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Qb,emissivemap_fragment:Jb,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:r1,envmap_common_pars_fragment:i1,envmap_pars_fragment:s1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:g1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:d1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:x1,lights_toon_fragment:v1,lights_toon_pars_fragment:y1,lights_phong_fragment:_1,lights_phong_pars_fragment:S1,lights_physical_fragment:b1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:w1,lights_fragment_end:T1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:C1,logdepthbuf_vertex:R1,map_fragment:P1,map_pars_fragment:L1,map_particle_fragment:I1,map_particle_pars_fragment:D1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:O1,morphinstance_vertex:k1,morphcolor_vertex:F1,morphnormal_vertex:j1,morphtarget_pars_vertex:z1,morphtarget_vertex:B1,normal_fragment_begin:H1,normal_fragment_maps:V1,normal_pars_fragment:G1,normal_pars_vertex:W1,normal_vertex:X1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:rM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:oM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:uM,skinning_pars_vertex:dM,skinning_vertex:fM,skinnormal_vertex:hM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:xM,tonemapping_pars_fragment:gM,transmission_fragment:vM,transmission_pars_fragment:yM,uv_pars_fragment:_M,uv_pars_vertex:SM,uv_vertex:bM,worldpos_vertex:MM,background_vert:EM,background_frag:wM,backgroundCube_vert:TM,backgroundCube_frag:NM,cube_vert:AM,cube_frag:CM,depth_vert:RM,depth_frag:PM,distanceRGBA_vert:LM,distanceRGBA_frag:IM,equirect_vert:DM,equirect_frag:UM,linedashed_vert:OM,linedashed_frag:kM,meshbasic_vert:FM,meshbasic_frag:jM,meshlambert_vert:zM,meshlambert_frag:BM,meshmatcap_vert:HM,meshmatcap_frag:VM,meshnormal_vert:GM,meshnormal_frag:WM,meshphong_vert:XM,meshphong_frag:YM,meshphysical_vert:qM,meshphysical_frag:$M,meshtoon_vert:KM,meshtoon_frag:ZM,points_vert:QM,points_frag:JM,shadow_vert:eE,shadow_frag:tE,sprite_vert:nE,sprite_frag:rE},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Wn={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wn.physical={uniforms:qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Do={r:0,b:0,g:0},ci=new Jn,iE=new ht;function sE(t,e,n,r,i,s,o){const l=new ze(0);let c=s===!0?0:1,u,h,p=null,d=0,x=null;function v(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function g(y){let _=!1;const S=v(y);S===null?f(l,c):S&&S.isColor&&(f(S,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Yl)?(h===void 0&&(h=new Lt(new qn(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,N,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(_.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iE.makeRotationFromEuler(ci)),h.material.toneMapped=Je.getTransfer(S.colorSpace)!==at,(p!==S||d!==S.version||x!==t.toneMapping)&&(h.material.needsUpdate=!0,p=S,d=S.version,x=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Lt(new Ei(2,2),new Qr({name:"BackgroundMaterial",uniforms:ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Je.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||d!==S.version||x!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,d=S.version,x=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,_){y.getRGB(Do,Yg(t)),r.buffers.color.setClear(Do.r,Do.g,Do.b,_,o)}return{getClearColor:function(){return l},setClearColor:function(y,_=1){l.set(y),c=_,f(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(l,c)},render:g,addToRenderList:m}}function aE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=d(null);let s=i,o=!1;function l(b,P,z,j,W){let q=!1;const V=p(j,z,P);s!==V&&(s=V,u(s.object)),q=x(b,j,z,W),q&&v(b,j,z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(b,P,z,j),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return t.createVertexArray()}function u(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function p(b,P,z){const j=z.wireframe===!0;let W=r[b.id];W===void 0&&(W={},r[b.id]=W);let q=W[P.id];q===void 0&&(q={},W[P.id]=q);let V=q[j];return V===void 0&&(V=d(c()),q[j]=V),V}function d(b){const P=[],z=[],j=[];for(let W=0;W<n;W++)P[W]=0,z[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:j,object:b,attributes:{},index:null}}function x(b,P,z,j){const W=s.attributes,q=P.attributes;let V=0;const Q=z.getAttributes();for(const D in Q)if(Q[D].location>=0){const ee=W[D];let ae=q[D];if(ae===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==j}function v(b,P,z,j){const W={},q=P.attributes;let V=0;const Q=z.getAttributes();for(const D in Q)if(Q[D].location>=0){let ee=q[D];ee===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),W[D]=ae,V++}s.attributes=W,s.attributesNum=V,s.index=j}function g(){const b=s.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){const z=s.newAttributes,j=s.enabledAttributes,W=s.attributeDivisors;z[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),W[b]!==P&&(t.vertexAttribDivisor(b,P),W[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let z=0,j=P.length;z<j;z++)P[z]!==b[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function _(b,P,z,j,W,q,V){V===!0?t.vertexAttribIPointer(b,P,z,W,q):t.vertexAttribPointer(b,P,z,j,W,q)}function S(b,P,z,j){g();const W=j.attributes,q=z.getAttributes(),V=P.defaultAttributeValues;for(const Q in q){const D=q[Q];if(D.location>=0){let K=W[Q];if(K===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const ee=K.normalized,ae=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const Be=_e.buffer,G=_e.type,re=_e.bytesPerElement,fe=G===t.INT||G===t.UNSIGNED_INT||K.gpuType===Rg;if(K.isInterleavedBufferAttribute){const oe=K.data,Ie=oe.stride,Pe=K.offset;if(oe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<D.locationSize;Xe++)f(D.location+Xe,oe.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Xe=0;Xe<D.locationSize;Xe++)m(D.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Xe=0;Xe<D.locationSize;Xe++)_(D.location+Xe,ae/D.locationSize,G,ee,Ie*re,(Pe+ae/D.locationSize*Xe)*re,fe)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)f(D.location+oe,K.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<D.locationSize;oe++)m(D.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let oe=0;oe<D.locationSize;oe++)_(D.location+oe,ae/D.locationSize,G,ee,ae*re,ae/D.locationSize*oe*re,fe)}}else if(V!==void 0){const ee=V[Q];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(D.location,ee);break;case 3:t.vertexAttrib3fv(D.location,ee);break;case 4:t.vertexAttrib4fv(D.location,ee);break;default:t.vertexAttrib1fv(D.location,ee)}}}}y()}function R(){A();for(const b in r){const P=r[b];for(const z in P){const j=P[z];for(const W in j)h(j[W].object),delete j[W];delete P[z]}delete r[b]}}function N(b){if(r[b.id]===void 0)return;const P=r[b.id];for(const z in P){const j=P[z];for(const W in j)h(j[W].object),delete j[W];delete P[z]}delete r[b.id]}function T(b){for(const P in r){const z=r[P];if(z[b.id]===void 0)continue;const j=z[b.id];for(const W in j)h(j[W].object),delete j[W];delete z[b.id]}}function A(){w(),o=!0,s!==i&&(s=i,u(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:A,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function oE(t,e,n){let r;function i(u){r=u}function s(u,h){t.drawArrays(r,u,h),n.update(h,r,1)}function o(u,h,p){p!==0&&(t.drawArraysInstanced(r,u,h,p),n.update(h,r,p))}function l(u,h,p){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<p;x++)this.render(u[x],h[x]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,p);let x=0;for(let v=0;v<p;v++)x+=h[v];n.update(x,r,1)}}function c(u,h,p,d){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<u.length;v++)o(u[v],h[v],d[v]);else{x.multiDrawArraysInstancedWEBGL(r,u,0,h,0,d,0,p);let v=0;for(let g=0;g<p;g++)v+=h[g];for(let g=0;g<d.length;g++)n.update(v,r,d[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function lE(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(N){return!(N!==$n&&r.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const T=N===ql&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Zr&&r.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==kr&&!T)}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=x>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:R}}function cE(t){const e=this;let n=null,r=0,i=!1,s=!1;const o=new hi,l=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const x=p.length!==0||d||r!==0||i;return i=d,r=p.length,x},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,x){const v=p.clippingPlanes,g=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!i||v===null||v.length===0||s&&!m)s?h(null):u();else{const y=s?0:r,_=y*4;let S=f.clippingState||null;c.value=S,S=h(v,d,_,x);for(let R=0;R!==_;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(p,d,x,v){const g=p!==null?p.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=x+g*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,S=x;_!==g;++_,S+=4)o.copy(p[_]).applyMatrix4(y,l),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function uE(t){let e=new WeakMap;function n(o,l){return l===id?o.mapping=Ls:l===sd&&(o.mapping=Is),o}function r(o){if(o&&o.isTexture){const l=o.mapping;if(l===id||l===sd)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Sb(c.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",i),n(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class Zg extends qg{constructor(e=-1,n=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,l=i+n,c=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Rp=[.125,.215,.35,.446,.526,.582],xi=20,Qc=new Zg,Pp=new ze;let Jc=null,eu=0,tu=0,nu=!1;const pi=(1+Math.sqrt(5))/2,Qi=1/pi,Lp=[new k(-pi,Qi,0),new k(pi,Qi,0),new k(-Qi,0,pi),new k(Qi,0,pi),new k(0,pi,-Qi),new k(0,pi,Qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Ip{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ql,format:$n,colorSpace:ni,depthBuffer:!1},i=Dp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dp(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(s)),this._blurMaterial=fE(s,e,n)}return i}_compileMaterial(e){const n=new Lt(this._lodPlanes[0],e);this._renderer.compile(n,Qc)}_sceneToCubeUV(e,n,r,i){const l=new dn(90,1,n,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Pp),h.toneMapping=Yr,h.autoClear=!1;const x=new _a({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new Lt(new qn,x);let g=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,g=!0):(x.color.copy(Pp),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(l.up.set(0,c[f],0),l.lookAt(u[f],0,0)):y===1?(l.up.set(0,0,c[f]),l.lookAt(0,u[f],0)):(l.up.set(0,c[f],0),l.lookAt(0,0,u[f]));const _=this._cubeSize;Uo(i,y*_,f>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ls||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Uo(n,0,0,3*c,2*c),r.setRenderTarget(n),r.render(o,Qc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Lp[(i-s-1)%Lp.length];this._blur(e,s-1,s,o,l)}n.autoClear=r}_blur(e,n,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Lt(this._lodPlanes[i],u),d=u.uniforms,x=this._sizeLods[r]-1,v=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*xi-1),g=s/v,m=isFinite(s)?1+Math.floor(h*g):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const f=[];let y=0;for(let T=0;T<xi;++T){const A=T/g,w=Math.exp(-A*A/2);f.push(w),T===0?y+=w:T<m&&(y+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-r;const S=this._sizeLods[i],R=3*S*(i>_-fs?i-_+fs:0),N=4*(this._cubeSize-S);Uo(n,R,N,3*S,2*S),c.setRenderTarget(n),c.render(p,Qc)}}function dE(t){const e=[],n=[],r=[];let i=t;const s=t-fs+1+Rp.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);n.push(l);let c=1/l;o>t-fs?c=Rp[o-t+fs-1]:o===0&&(c=0),r.push(c);const u=1/(l-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,v=6,g=3,m=2,f=1,y=new Float32Array(g*v*x),_=new Float32Array(m*v*x),S=new Float32Array(f*v*x);for(let N=0;N<x;N++){const T=N%3*2/3-1,A=N>2?0:-1,w=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(w,g*v*N),_.set(d,m*v*N);const b=[N,N,N,N,N,N];S.set(b,f*v*N)}const R=new er;R.setAttribute("position",new Fn(y,g)),R.setAttribute("uv",new Fn(_,m)),R.setAttribute("faceIndex",new Fn(S,f)),e.push(R),i>fs&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Dp(t,e,n){const r=new Ri(t,e,n);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Uo(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function fE(t,e,n){const r=new Float32Array(xi),i=new k(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Up(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function Op(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hE(t){let e=new WeakMap,n=null;function r(l){if(l&&l.isTexture){const c=l.mapping,u=c===id||c===sd,h=c===Ls||c===Is;if(u||h){let p=e.get(l);const d=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return n===null&&(n=new Ip(t)),p=u?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const x=l.image;return u&&x&&x.height>0||h&&x&&i(x)?(n===null&&(n=new Ip(t)),p=u?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function i(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function pE(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&jg("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function mE(t,e,n,r){const i={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const x=s.get(d);x&&(e.remove(x),s.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function l(p,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,n.memory.geometries++),d}function c(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const x=p.morphAttributes;for(const v in x){const g=x[v];for(let m=0,f=g.length;m<f;m++)e.update(g[m],t.ARRAY_BUFFER)}}function u(p){const d=[],x=p.index,v=p.attributes.position;let g=0;if(x!==null){const y=x.array;g=x.version;for(let _=0,S=y.length;_<S;_+=3){const R=y[_+0],N=y[_+1],T=y[_+2];d.push(R,N,N,T,T,R)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const R=_+0,N=_+1,T=_+2;d.push(R,N,N,T,T,R)}}else return;const m=new(Fg(d)?Xg:Wg)(d,1);m.version=g;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function h(p){const d=s.get(p);if(d){const x=p.index;x!==null&&d.version<x.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function xE(t,e,n){let r;function i(d){r=d}let s,o;function l(d){s=d.type,o=d.bytesPerElement}function c(d,x){t.drawElements(r,x,s,d*o),n.update(x,r,1)}function u(d,x,v){v!==0&&(t.drawElementsInstanced(r,x,s,d*o,v),n.update(x,r,v))}function h(d,x,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/o,x[m]);else{g.multiDrawElementsWEBGL(r,x,0,s,d,0,v);let m=0;for(let f=0;f<v;f++)m+=x[f];n.update(m,r,1)}}function p(d,x,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,x[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(r,x,0,s,d,0,g,0,v);let f=0;for(let y=0;y<v;y++)f+=x[y];for(let y=0;y<g.length;y++)n.update(f,r,g[y])}}this.setMode=i,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function gE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function vE(t,e,n){const r=new WeakMap,i=new ct;function s(o,l,c){const u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let d=r.get(l);if(d===void 0||d.count!==p){let b=function(){A.dispose(),r.delete(l),l.removeEventListener("dispose",b)};var x=b;d!==void 0&&d.texture.dispose();const v=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let R=l.attributes.position.count*S,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*N*4*p),A=new Bg(T,R,N,p);A.type=kr,A.needsUpdate=!0;const w=S*4;for(let P=0;P<p;P++){const z=f[P],j=y[P],W=_[P],q=R*N*4*P;for(let V=0;V<z.count;V++){const Q=V*w;v===!0&&(i.fromBufferAttribute(z,V),T[q+Q+0]=i.x,T[q+Q+1]=i.y,T[q+Q+2]=i.z,T[q+Q+3]=0),g===!0&&(i.fromBufferAttribute(j,V),T[q+Q+4]=i.x,T[q+Q+5]=i.y,T[q+Q+6]=i.z,T[q+Q+7]=0),m===!0&&(i.fromBufferAttribute(W,V),T[q+Q+8]=i.x,T[q+Q+9]=i.y,T[q+Q+10]=i.z,T[q+Q+11]=W.itemSize===4?i.w:1)}}d={count:p,texture:A,size:new We(R,N)},r.set(l,d),l.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const g=l.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function yE(t,e,n,r){let i=new WeakMap;function s(c){const u=r.render.frame,h=c.geometry,p=e.get(c,h);if(i.get(p)!==u&&(e.update(p),i.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return p}function o(){i=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Qg extends Zt{constructor(e,n,r,i,s,o,l,c,u,h=Ss){if(h!==Ss&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Ss&&(r=Ds),r===void 0&&h===Os&&(r=Us),super(null,i,s,o,l,c,h,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Jg=new Zt,ev=new Qg(1,1);ev.compareFunction=kg;const tv=new Bg,nv=new sb,rv=new $g,kp=[],Fp=[],jp=new Float32Array(16),zp=new Float32Array(9),Bp=new Float32Array(4);function Gs(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=kp[i];if(s===void 0&&(s=new Float32Array(i),kp[i]=s),e!==0){r.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Zl(t,e){let n=Fp[e];n===void 0&&(n=new Int32Array(e),Fp[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function _E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function EE(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Tt(n,r))return;Bp.set(r),t.uniformMatrix2fv(this.addr,!1,Bp),Nt(n,r)}}function wE(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Tt(n,r))return;zp.set(r),t.uniformMatrix3fv(this.addr,!1,zp),Nt(n,r)}}function TE(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Tt(n,r))return;jp.set(r),t.uniformMatrix4fv(this.addr,!1,jp),Nt(n,r)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function PE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function UE(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const s=this.type===t.SAMPLER_2D_SHADOW?ev:Jg;n.setTexture2D(e||s,i)}function OE(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||nv,i)}function kE(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||rv,i)}function FE(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||tv,i)}function jE(t){switch(t){case 5126:return _E;case 35664:return SE;case 35665:return bE;case 35666:return ME;case 35674:return EE;case 35675:return wE;case 35676:return TE;case 5124:case 35670:return NE;case 35667:case 35671:return AE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return PE;case 36294:return LE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return FE}}function zE(t,e){t.uniform1fv(this.addr,e)}function BE(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function HE(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function VE(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function GE(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WE(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XE(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YE(t,e){t.uniform1iv(this.addr,e)}function qE(t,e){t.uniform2iv(this.addr,e)}function $E(t,e){t.uniform3iv(this.addr,e)}function KE(t,e){t.uniform4iv(this.addr,e)}function ZE(t,e){t.uniform1uiv(this.addr,e)}function QE(t,e){t.uniform2uiv(this.addr,e)}function JE(t,e){t.uniform3uiv(this.addr,e)}function ew(t,e){t.uniform4uiv(this.addr,e)}function tw(t,e,n){const r=this.cache,i=e.length,s=Zl(n,i);Tt(r,s)||(t.uniform1iv(this.addr,s),Nt(r,s));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||Jg,s[o])}function nw(t,e,n){const r=this.cache,i=e.length,s=Zl(n,i);Tt(r,s)||(t.uniform1iv(this.addr,s),Nt(r,s));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||nv,s[o])}function rw(t,e,n){const r=this.cache,i=e.length,s=Zl(n,i);Tt(r,s)||(t.uniform1iv(this.addr,s),Nt(r,s));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||rv,s[o])}function iw(t,e,n){const r=this.cache,i=e.length,s=Zl(n,i);Tt(r,s)||(t.uniform1iv(this.addr,s),Nt(r,s));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||tv,s[o])}function sw(t){switch(t){case 5126:return zE;case 35664:return BE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return $E;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return QE;case 36295:return JE;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return iw}}class aw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class ow{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sw(n.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,n[l.id],r)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function Hp(t,e){t.seq.push(e),t.map[e.id]=e}function cw(t,e,n){const r=t.name,i=r.length;for(ru.lastIndex=0;;){const s=ru.exec(r),o=ru.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===i){Hp(n,u===void 0?new aw(l,t,e):new ow(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new lw(l),Hp(n,p)),n=p}}}class Ko{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),o=e.getUniformLocation(n,s.name);cw(s,o,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=r[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function Vp(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const uw=37297;let dw=0;function fw(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=i;o<s;o++){const l=o+1;r.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return r.join(`
`)}function hw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let r;switch(e===n?r="":e===wl&&n===El?r="LinearDisplayP3ToLinearSRGB":e===El&&n===wl&&(r="LinearSRGBToLinearDisplayP3"),t){case ni:case $l:return[r,"LinearTransferOETF"];case Gn:case of:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function Gp(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+fw(t.getShaderSource(e),o)}else return i}function pw(t,e){const n=hw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mw(t,e){let n;switch(e){case lS:n="Linear";break;case cS:n="Reinhard";break;case uS:n="OptimizedCineon";break;case Ag:n="ACESFilmic";break;case fS:n="AgX";break;case hS:n="Neutral";break;case dS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function gw(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vw(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function la(t){return t!==""}function Wp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(t){return t.replace(yw,Sw)}const _w=new Map;function Sw(t,e){let n=De[e];if(n===void 0){const r=_w.get(e);if(r!==void 0)n=De[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(t){return t.replace(bw,Mw)}function Mw(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ew(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Nw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ng:e="ENVMAP_BLENDING_MULTIPLY";break;case aS:e="ENVMAP_BLENDING_MIX";break;case oS:e="ENVMAP_BLENDING_ADD";break}return e}function Aw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function Cw(t,e,n,r){const i=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=Ew(n),u=ww(n),h=Tw(n),p=Nw(n),d=Aw(n),x=xw(n),v=gw(s),g=i.createProgram();let m,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`)):(m=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yr?"#define TONE_MAPPING":"",n.toneMapping!==Yr?De.tonemapping_pars_fragment:"",n.toneMapping!==Yr?mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,pw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),o=ld(o),o=Wp(o,n),o=Xp(o,n),l=ld(l),l=Wp(l,n),l=Xp(l,n),o=Yp(o),l=Yp(l),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+o,S=y+f+l,R=Vp(i,i.VERTEX_SHADER,_),N=Vp(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,N),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(t.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),j=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(N).trim();let q=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,g,R,N);else{const Q=Gp(i,R,"vertex"),D=Gp(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(j===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:j,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(R),i.deleteShader(N),A=new Ko(i,g),w=vw(i,g)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,uw)),b},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=N,this}let Rw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Lw(e),n.set(e,r)),r}}class Lw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Iw(t,e,n,r,i,s,o){const l=new Vg,c=new Pw,u=new Set,h=[],p=i.logarithmicDepthBuffer,d=i.vertexTextures;let x=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,z,j){const W=z.fog,q=j.geometry,V=w.isMeshStandardMaterial?z.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),D=Q&&Q.mapping===Yl?Q.image.height:null,K=v[w.type];w.precision!==null&&(x=i.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=ee!==void 0?ee.length:0;let _e=0;q.morphAttributes.position!==void 0&&(_e=1),q.morphAttributes.normal!==void 0&&(_e=2),q.morphAttributes.color!==void 0&&(_e=3);let Be,G,re,fe;if(K){const tt=Wn[K];Be=tt.vertexShader,G=tt.fragmentShader}else Be=w.vertexShader,G=w.fragmentShader,c.update(w),re=c.getVertexShaderID(w),fe=c.getFragmentShaderID(w);const oe=t.getRenderTarget(),Ie=j.isInstancedMesh===!0,Pe=j.isBatchedMesh===!0,Xe=!!w.map,I=!!w.matcap,ke=!!Q,He=!!w.aoMap,rt=!!w.lightMap,Ee=!!w.bumpMap,Ye=!!w.normalMap,Le=!!w.displacementMap,Re=!!w.emissiveMap,ut=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,te=w.dispersion>0,$=w.iridescence>0,J=w.sheen>0,be=w.transmission>0,ue=M&&!!w.anisotropyMap,de=H&&!!w.clearcoatMap,Fe=H&&!!w.clearcoatNormalMap,ie=H&&!!w.clearcoatRoughnessMap,Se=$&&!!w.iridescenceMap,Ge=$&&!!w.iridescenceThicknessMap,Ae=J&&!!w.sheenColorMap,he=J&&!!w.sheenRoughnessMap,je=!!w.specularMap,qe=!!w.specularColorMap,vt=!!w.specularIntensityMap,L=be&&!!w.transmissionMap,pe=be&&!!w.thicknessMap,Y=!!w.gradientMap,Z=!!w.alphaMap,le=w.alphaTest>0,Ce=!!w.alphaHash,Ke=!!w.extensions;let yt=Yr;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(yt=t.toneMapping);const At={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:G,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Pe,batchingColor:Pe&&j._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&j.instanceColor!==null,instancingMorph:Ie&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ni,alphaToCoverage:!!w.alphaToCoverage,map:Xe,matcap:I,envMap:ke,envMapMode:ke&&Q.mapping,envMapCubeUVHeight:D,aoMap:He,lightMap:rt,bumpMap:Ee,normalMap:Ye,displacementMap:d&&Le,emissiveMap:Re,normalMapObjectSpace:Ye&&w.normalMapType===NS,normalMapTangentSpace:Ye&&w.normalMapType===Og,metalnessMap:ut,roughnessMap:C,anisotropy:M,anisotropyMap:ue,clearcoat:H,clearcoatMap:de,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ie,dispersion:te,iridescence:$,iridescenceMap:Se,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:je,specularColorMap:qe,specularIntensityMap:vt,transmission:be,transmissionMap:L,thicknessMap:pe,gradientMap:Y,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:Ce,combine:w.combine,mapUv:Xe&&g(w.map.channel),aoMapUv:He&&g(w.aoMap.channel),lightMapUv:rt&&g(w.lightMap.channel),bumpMapUv:Ee&&g(w.bumpMap.channel),normalMapUv:Ye&&g(w.normalMap.channel),displacementMapUv:Le&&g(w.displacementMap.channel),emissiveMapUv:Re&&g(w.emissiveMap.channel),metalnessMapUv:ut&&g(w.metalnessMap.channel),roughnessMapUv:C&&g(w.roughnessMap.channel),anisotropyMapUv:ue&&g(w.anisotropyMap.channel),clearcoatMapUv:de&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(w.sheenRoughnessMap.channel),specularMapUv:je&&g(w.specularMap.channel),specularColorMapUv:qe&&g(w.specularColorMap.channel),specularIntensityMapUv:vt&&g(w.specularIntensityMap.channel),transmissionMapUv:L&&g(w.transmissionMap.channel),thicknessMapUv:pe&&g(w.thicknessMap.channel),alphaMapUv:Z&&g(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ye||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Xe||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:j.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Xe&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ur,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ke&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&w.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=u.has(1),At.vertexUv2s=u.has(2),At.vertexUv3s=u.has(3),u.clear(),At}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),w.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.skinning&&l.enable(4),b.morphTargets&&l.enable(5),b.morphNormals&&l.enable(6),b.morphColors&&l.enable(7),b.premultipliedAlpha&&l.enable(8),b.shadowMapEnabled&&l.enable(9),b.doubleSided&&l.enable(10),b.flipSided&&l.enable(11),b.useDepthPacking&&l.enable(12),b.dithering&&l.enable(13),b.transmission&&l.enable(14),b.sheen&&l.enable(15),b.opaque&&l.enable(16),b.pointsUvs&&l.enable(17),b.decodeVideoTexture&&l.enable(18),b.alphaToCoverage&&l.enable(19),w.push(l.mask)}function S(w){const b=v[w.type];let P;if(b){const z=Wn[b];P=gb.clone(z.uniforms)}else P=w.uniforms;return P}function R(w,b){let P;for(let z=0,j=h.length;z<j;z++){const W=h[z];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Cw(t,b,w,s),h.push(P)),P}function N(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:N,releaseShaderCache:T,programs:h,dispose:A}}function Dw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function r(s,o,l){t.get(s)[o]=l}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function Uw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function o(p,d,x,v,g,m){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:x,groupOrder:v,renderOrder:p.renderOrder,z:g,group:m},t[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=x,f.groupOrder=v,f.renderOrder=p.renderOrder,f.z=g,f.group=m),e++,f}function l(p,d,x,v,g,m){const f=o(p,d,x,v,g,m);x.transmission>0?r.push(f):x.transparent===!0?i.push(f):n.push(f)}function c(p,d,x,v,g,m){const f=o(p,d,x,v,g,m);x.transmission>0?r.unshift(f):x.transparent===!0?i.unshift(f):n.unshift(f)}function u(p,d){n.length>1&&n.sort(p||Uw),r.length>1&&r.sort(d||$p),i.length>1&&i.sort(d||$p)}function h(){for(let p=e,d=t.length;p<d;p++){const x=t[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function Ow(){let t=new WeakMap;function e(r,i){const s=t.get(r);let o;return s===void 0?(o=new Kp,t.set(r,[o])):i>=s.length?(o=new Kp,s.push(o)):o=s[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ze};break;case"SpotLight":n={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Fw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jw=0;function zw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Bw(t){const e=new kw,n=Fw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new k);const i=new k,s=new ht,o=new ht;function l(u){let h=0,p=0,d=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let x=0,v=0,g=0,m=0,f=0,y=0,_=0,S=0,R=0,N=0,T=0;u.sort(zw);for(let w=0,b=u.length;w<b;w++){const P=u[w],z=P.color,j=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*j,p+=z.g*j,d+=z.b*j;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],j);T++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,D=n.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=V,x++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(j),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[g]=V;const Q=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[g]=Q.matrix,P.castShadow){const D=n.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,r.spotShadow[g]=D,r.spotShadowMap[g]=q,S++}g++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(z).multiplyScalar(j),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Q=P.shadow,D=n.get(P);D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,D.shadowCameraNear=Q.camera.near,D.shadowCameraFar=Q.camera.far,r.pointShadow[v]=D,r.pointShadowMap[v]=q,r.pointShadowMatrix[v]=P.shadow.matrix,_++}r.point[v]=V,v++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(j),V.groundColor.copy(P.groundColor).multiplyScalar(j),r.hemi[f]=V,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=d;const A=r.hash;(A.directionalLength!==x||A.pointLength!==v||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==S||A.numSpotMaps!==R||A.numLightProbes!==T)&&(r.directional.length=x,r.spot.length=g,r.rectArea.length=m,r.point.length=v,r.hemi.length=f,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=S+R-N,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=T,A.directionalLength=x,A.pointLength=v,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=S,A.numSpotMaps=R,A.numLightProbes=T,r.version=jw++)}function c(u,h){let p=0,d=0,x=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const _=u[f];if(_.isDirectionalLight){const S=r.directional[p];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(_.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),x++}else if(_.isRectAreaLight){const S=r.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:r}}function Zp(t){const e=new Bw(t),n=[],r=[];function i(h){u.camera=h,n.length=0,r.length=0}function s(h){n.push(h)}function o(h){r.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Hw(t){let e=new WeakMap;function n(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new Zp(t),e.set(i,[l])):s>=o.length?(l=new Zp(t),o.push(l)):l=o[s],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vw extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yw(t,e,n){let r=new cf;const i=new We,s=new We,o=new ct,l=new Vw({depthPacking:TS}),c=new Gw,u={},h=n.maxTextureSize,p={[Kr]:an,[an]:Kr,[ur]:ur},d=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),x=d.clone();x.defines.HORIZONTAL_PASS=1;const v=new er;v.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Lt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let f=this.type;this.render=function(N,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const w=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Xr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const j=f!==or&&this.type===or,W=f===or&&this.type!==or;for(let q=0,V=N.length;q<V;q++){const Q=N[q],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const K=D.getFrameExtents();if(i.multiply(K),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||j===!0||W===!0){const ae=this.type!==or?{minFilter:Mn,magFilter:Mn}:{};D.map!==null&&D.map.dispose(),D.map=new Ri(i.x,i.y,ae),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const ee=D.getViewportCount();for(let ae=0;ae<ee;ae++){const _e=D.getViewport(ae);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),z.viewport(o),D.updateMatrices(Q,ae),r=D.getFrustum(),S(T,A,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===or&&y(D,A),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,b,P)};function y(N,T){const A=e.update(g);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ri(i.x,i.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(T,null,A,d,g,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(T,null,A,x,g,null)}function _(N,T,A,w){let b=null;const P=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(P!==void 0)b=P;else if(b=A.isPointLight===!0?c:l,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=b.uuid,j=T.uuid;let W=u[z];W===void 0&&(W={},u[z]=W);let q=W[j];q===void 0&&(q=b.clone(),W[j]=q,T.addEventListener("dispose",R)),b=q}if(b.visible=T.visible,b.wireframe=T.wireframe,w===or?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:p[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=t.properties.get(b);z.light=A}return b}function S(N,T,A,w,b){if(N.visible===!1)return;if(N.layers.test(T.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===or)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const j=e.update(N),W=N.material;if(Array.isArray(W)){const q=j.groups;for(let V=0,Q=q.length;V<Q;V++){const D=q[V],K=W[D.materialIndex];if(K&&K.visible){const ee=_(N,K,w,b);N.onBeforeShadow(t,N,T,A,j,ee,D),t.renderBufferDirect(A,null,j,ee,N,D),N.onAfterShadow(t,N,T,A,j,ee,D)}}}else if(W.visible){const q=_(N,W,w,b);N.onBeforeShadow(t,N,T,A,j,q,null),t.renderBufferDirect(A,null,j,q,N,null),N.onAfterShadow(t,N,T,A,j,q,null)}}const z=N.children;for(let j=0,W=z.length;j<W;j++)S(z[j],T,A,w,b)}function R(N){N.target.removeEventListener("dispose",R);for(const A in u){const w=u[A],b=N.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function qw(t){function e(){let L=!1;const pe=new ct;let Y=null;const Z=new ct(0,0,0,0);return{setMask:function(le){Y!==le&&!L&&(t.colorMask(le,le,le,le),Y=le)},setLocked:function(le){L=le},setClear:function(le,Ce,Ke,yt,At){At===!0&&(le*=yt,Ce*=yt,Ke*=yt),pe.set(le,Ce,Ke,yt),Z.equals(pe)===!1&&(t.clearColor(le,Ce,Ke,yt),Z.copy(pe))},reset:function(){L=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,pe=null,Y=null,Z=null;return{setTest:function(le){le?fe(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(le){pe!==le&&!L&&(t.depthMask(le),pe=le)},setFunc:function(le){if(Y!==le){switch(le){case J_:t.depthFunc(t.NEVER);break;case eS:t.depthFunc(t.ALWAYS);break;case tS:t.depthFunc(t.LESS);break;case Sl:t.depthFunc(t.LEQUAL);break;case nS:t.depthFunc(t.EQUAL);break;case rS:t.depthFunc(t.GEQUAL);break;case iS:t.depthFunc(t.GREATER);break;case sS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=le}},setLocked:function(le){L=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){L=!1,pe=null,Y=null,Z=null}}}function r(){let L=!1,pe=null,Y=null,Z=null,le=null,Ce=null,Ke=null,yt=null,At=null;return{setTest:function(tt){L||(tt?fe(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!L&&(t.stencilMask(tt),pe=tt)},setFunc:function(tt,zn,Bn){(Y!==tt||Z!==zn||le!==Bn)&&(t.stencilFunc(tt,zn,Bn),Y=tt,Z=zn,le=Bn)},setOp:function(tt,zn,Bn){(Ce!==tt||Ke!==zn||yt!==Bn)&&(t.stencilOp(tt,zn,Bn),Ce=tt,Ke=zn,yt=Bn)},setLocked:function(tt){L=tt},setClear:function(tt){At!==tt&&(t.clearStencil(tt),At=tt)},reset:function(){L=!1,pe=null,Y=null,Z=null,le=null,Ce=null,Ke=null,yt=null,At=null}}}const i=new e,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],x=null,v=!1,g=null,m=null,f=null,y=null,_=null,S=null,R=null,N=new ze(0,0,0),T=0,A=!1,w=null,b=null,P=null,z=null,j=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=V>=2);let D=null,K={};const ee=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),_e=new ct().fromArray(ee),Be=new ct().fromArray(ae);function G(L,pe,Y,Z){const le=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(L,Ce),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Y;Ke++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(pe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Ce}const re={};re[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Sl),Ee(!1),Ye(Lh),fe(t.CULL_FACE),He(Xr);function fe(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function oe(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Ie(L,pe){return h[L]!==pe?(t.bindFramebuffer(L,pe),h[L]=pe,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(L,pe){let Y=d,Z=!1;if(L){Y=p.get(pe),Y===void 0&&(Y=[],p.set(pe,Y));const le=L.textures;if(Y.length!==le.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Ke=le.length;Ce<Ke;Ce++)Y[Ce]=t.COLOR_ATTACHMENT0+Ce;Y.length=le.length,Z=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Z=!0);Z&&t.drawBuffers(Y)}function Xe(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const I={[mi]:t.FUNC_ADD,[O_]:t.FUNC_SUBTRACT,[k_]:t.FUNC_REVERSE_SUBTRACT};I[F_]=t.MIN,I[j_]=t.MAX;const ke={[z_]:t.ZERO,[B_]:t.ONE,[H_]:t.SRC_COLOR,[nd]:t.SRC_ALPHA,[q_]:t.SRC_ALPHA_SATURATE,[X_]:t.DST_COLOR,[G_]:t.DST_ALPHA,[V_]:t.ONE_MINUS_SRC_COLOR,[rd]:t.ONE_MINUS_SRC_ALPHA,[Y_]:t.ONE_MINUS_DST_COLOR,[W_]:t.ONE_MINUS_DST_ALPHA,[$_]:t.CONSTANT_COLOR,[K_]:t.ONE_MINUS_CONSTANT_COLOR,[Z_]:t.CONSTANT_ALPHA,[Q_]:t.ONE_MINUS_CONSTANT_ALPHA};function He(L,pe,Y,Z,le,Ce,Ke,yt,At,tt){if(L===Xr){v===!0&&(oe(t.BLEND),v=!1);return}if(v===!1&&(fe(t.BLEND),v=!0),L!==U_){if(L!==g||tt!==A){if((m!==mi||_!==mi)&&(t.blendEquation(t.FUNC_ADD),m=mi,_=mi),tt)switch(L){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case td:t.blendFunc(t.ONE,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case td:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,y=null,S=null,R=null,N.set(0,0,0),T=0,g=L,A=tt}return}le=le||pe,Ce=Ce||Y,Ke=Ke||Z,(pe!==m||le!==_)&&(t.blendEquationSeparate(I[pe],I[le]),m=pe,_=le),(Y!==f||Z!==y||Ce!==S||Ke!==R)&&(t.blendFuncSeparate(ke[Y],ke[Z],ke[Ce],ke[Ke]),f=Y,y=Z,S=Ce,R=Ke),(yt.equals(N)===!1||At!==T)&&(t.blendColor(yt.r,yt.g,yt.b,At),N.copy(yt),T=At),g=L,A=!1}function rt(L,pe){L.side===ur?oe(t.CULL_FACE):fe(t.CULL_FACE);let Y=L.side===an;pe&&(Y=!Y),Ee(Y),L.blending===_s&&L.transparent===!1?He(Xr):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function Ye(L){L!==I_?(fe(t.CULL_FACE),L!==b&&(L===Lh?t.cullFace(t.BACK):L===D_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),b=L}function Le(L){L!==P&&(q&&t.lineWidth(L),P=L)}function Re(L,pe,Y){L?(fe(t.POLYGON_OFFSET_FILL),(z!==pe||j!==Y)&&(t.polygonOffset(pe,Y),z=pe,j=Y)):oe(t.POLYGON_OFFSET_FILL)}function ut(L){L?fe(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function C(L){L===void 0&&(L=t.TEXTURE0+W-1),D!==L&&(t.activeTexture(L),D=L)}function M(L,pe,Y){Y===void 0&&(D===null?Y=t.TEXTURE0+W-1:Y=D);let Z=K[Y];Z===void 0&&(Z={type:void 0,texture:void 0},K[Y]=Z),(Z.type!==L||Z.texture!==pe)&&(D!==Y&&(t.activeTexture(Y),D=Y),t.bindTexture(L,pe||re[L]),Z.type=L,Z.texture=pe)}function H(){const L=K[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(L){_e.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),_e.copy(L))}function he(L){Be.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function je(L,pe){let Y=c.get(pe);Y===void 0&&(Y=new WeakMap,c.set(pe,Y));let Z=Y.get(L);Z===void 0&&(Z=t.getUniformBlockIndex(pe,L.name),Y.set(L,Z))}function qe(L,pe){const Z=c.get(pe).get(L);l.get(pe)!==Z&&(t.uniformBlockBinding(pe,Z,L.__bindingPointIndex),l.set(pe,Z))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,K={},h={},p=new WeakMap,d=[],x=null,v=!1,g=null,m=null,f=null,y=null,_=null,S=null,R=null,N=new ze(0,0,0),T=0,A=!1,w=null,b=null,P=null,z=null,j=null,_e.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:fe,disable:oe,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:Xe,setBlending:He,setMaterial:rt,setFlipSided:Ee,setCullFace:Ye,setLineWidth:Le,setPolygonOffset:Re,setScissorTest:ut,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:$,texImage2D:Se,texImage3D:Ge,updateUBOMapping:je,uniformBlockBinding:qe,texStorage2D:Fe,texStorage3D:ie,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:de,scissor:Ae,viewport:he,reset:vt}}function $w(t,e,n,r,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,h=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return x?new OffscreenCanvas(C,M):Nl("canvas")}function g(C,M,H){let te=1;const $=ut(C);if(($.width>H||$.height>H)&&(te=H/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(te*$.width),be=Math.floor(te*$.height);p===void 0&&(p=v(J,be));const ue=M?v(J,be):p;return ue.width=J,ue.height=be,ue.getContext("2d").drawImage(C,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+be+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Mn&&C.minFilter!==Dn}function f(C){t.generateMipmap(C)}function y(C,M,H,te,$=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===t.RED&&(H===t.FLOAT&&(J=t.R32F),H===t.HALF_FLOAT&&(J=t.R16F),H===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.R8UI),H===t.UNSIGNED_SHORT&&(J=t.R16UI),H===t.UNSIGNED_INT&&(J=t.R32UI),H===t.BYTE&&(J=t.R8I),H===t.SHORT&&(J=t.R16I),H===t.INT&&(J=t.R32I)),M===t.RG&&(H===t.FLOAT&&(J=t.RG32F),H===t.HALF_FLOAT&&(J=t.RG16F),H===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(J=t.RG8UI),H===t.UNSIGNED_SHORT&&(J=t.RG16UI),H===t.UNSIGNED_INT&&(J=t.RG32UI),H===t.BYTE&&(J=t.RG8I),H===t.SHORT&&(J=t.RG16I),H===t.INT&&(J=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const be=$?Ml:Je.getTransfer(te);H===t.FLOAT&&(J=t.RGBA32F),H===t.HALF_FLOAT&&(J=t.RGBA16F),H===t.UNSIGNED_BYTE&&(J=be===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(C,M){let H;return C?M===null||M===Ds||M===Us?H=t.DEPTH24_STENCIL8:M===kr?H=t.DEPTH32F_STENCIL8:M===bl&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ds||M===Us?H=t.DEPTH_COMPONENT24:M===kr?H=t.DEPTH_COMPONENT32F:M===bl&&(H=t.DEPTH_COMPONENT16),H}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function N(C){const M=C.target;M.removeEventListener("dispose",N),w(M)}function T(C){const M=r.get(C);if(M.__webglInit===void 0)return;const H=C.source,te=d.get(H);if(te){const $=te[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(C),Object.keys(te).length===0&&d.delete(H)}r.remove(C)}function A(C){const M=r.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,te=d.get(H);delete te[M.__cacheKey],o.memory.textures--}function w(C){const M=r.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let $=0;$<M.__webglFramebuffer[te].length;$++)t.deleteFramebuffer(M.__webglFramebuffer[te][$]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let te=0,$=H.length;te<$;te++){const J=r.get(H[te]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),r.remove(H[te])}r.remove(C)}let b=0;function P(){b=0}function z(){const C=b;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),b+=1,C}function j(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const H=r.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(H,C,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(C,M){const H=r.get(C);if(C.version>0&&H.__version!==C.version){Be(H,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function V(C,M){const H=r.get(C);if(C.version>0&&H.__version!==C.version){Be(H,C,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function Q(C,M){const H=r.get(C);if(C.version>0&&H.__version!==C.version){G(H,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[ad]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[od]:t.MIRRORED_REPEAT},K={[Mn]:t.NEAREST,[pS]:t.NEAREST_MIPMAP_NEAREST,[po]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[Ac]:t.LINEAR_MIPMAP_NEAREST,[Si]:t.LINEAR_MIPMAP_LINEAR},ee={[AS]:t.NEVER,[DS]:t.ALWAYS,[CS]:t.LESS,[kg]:t.LEQUAL,[RS]:t.EQUAL,[IS]:t.GEQUAL,[PS]:t.GREATER,[LS]:t.NOTEQUAL};function ae(C,M){if(M.type===kr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dn||M.magFilter===Ac||M.magFilter===po||M.magFilter===Si||M.minFilter===Dn||M.minFilter===Ac||M.minFilter===po||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,D[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==po&&M.minFilter!==Si||M.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function _e(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const te=M.source;let $=d.get(te);$===void 0&&($={},d.set(te,$));const J=j(M);if(J!==C.__cacheKey){$[J]===void 0&&($[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),$[J].usedTimes++;const be=$[C.__cacheKey];be!==void 0&&($[C.__cacheKey].usedTimes--,be.usedTimes===0&&A(M)),C.__cacheKey=J,C.__webglTexture=$[J].texture}return H}function Be(C,M,H){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const $=_e(C,M),J=M.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+H);const be=r.get(J);if(J.version!==be.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const ue=Je.getPrimaries(Je.workingColorSpace),de=M.colorSpace===Dr?null:Je.getPrimaries(M.colorSpace),Fe=M.colorSpace===Dr||ue===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ie=g(M.image,!1,i.maxTextureSize);ie=Re(M,ie);const Se=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let Ae=y(M.internalFormat,Se,Ge,M.colorSpace,M.isVideoTexture);ae(te,M);let he;const je=M.mipmaps,qe=M.isVideoTexture!==!0,vt=be.__version===void 0||$===!0,L=J.dataReady,pe=S(M,ie);if(M.isDepthTexture)Ae=_(M.format===Os,M.type),vt&&(qe?n.texStorage2D(t.TEXTURE_2D,1,Ae,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Se,Ge,null));else if(M.isDataTexture)if(je.length>0){qe&&vt&&n.texStorage2D(t.TEXTURE_2D,pe,Ae,je[0].width,je[0].height);for(let Y=0,Z=je.length;Y<Z;Y++)he=je[Y],qe?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,Se,Ge,he.data):n.texImage2D(t.TEXTURE_2D,Y,Ae,he.width,he.height,0,Se,Ge,he.data);M.generateMipmaps=!1}else qe?(vt&&n.texStorage2D(t.TEXTURE_2D,pe,Ae,ie.width,ie.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,Ge,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Se,Ge,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ae,je[0].width,je[0].height,ie.depth);for(let Y=0,Z=je.length;Y<Z;Y++)if(he=je[Y],M.format!==$n)if(Se!==null)if(qe){if(L)if(M.layerUpdates.size>0){for(const le of M.layerUpdates){const Ce=he.width*he.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,le,he.width,he.height,1,Se,he.data.slice(Ce*le,Ce*(le+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,ie.depth,Se,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ae,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,ie.depth,Se,Ge,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ae,he.width,he.height,ie.depth,0,Se,Ge,he.data)}else{qe&&vt&&n.texStorage2D(t.TEXTURE_2D,pe,Ae,je[0].width,je[0].height);for(let Y=0,Z=je.length;Y<Z;Y++)he=je[Y],M.format!==$n?Se!==null?qe?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,Se,he.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,he.width,he.height,Se,Ge,he.data):n.texImage2D(t.TEXTURE_2D,Y,Ae,he.width,he.height,0,Se,Ge,he.data)}else if(M.isDataArrayTexture)if(qe){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ae,ie.width,ie.height,ie.depth),L)if(M.layerUpdates.size>0){let Y;switch(Ge){case t.UNSIGNED_BYTE:switch(Se){case t.ALPHA:Y=1;break;case t.LUMINANCE:Y=1;break;case t.LUMINANCE_ALPHA:Y=2;break;case t.RGB:Y=3;break;case t.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Ge}.`)}const Z=ie.width*ie.height*Y;for(const le of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ie.width,ie.height,1,Se,Ge,ie.data.slice(Z*le,Z*(le+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ge,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,Se,Ge,ie.data);else if(M.isData3DTexture)qe?(vt&&n.texStorage3D(t.TEXTURE_3D,pe,Ae,ie.width,ie.height,ie.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ge,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,Se,Ge,ie.data);else if(M.isFramebufferTexture){if(vt)if(qe)n.texStorage2D(t.TEXTURE_2D,pe,Ae,ie.width,ie.height);else{let Y=ie.width,Z=ie.height;for(let le=0;le<pe;le++)n.texImage2D(t.TEXTURE_2D,le,Ae,Y,Z,0,Se,Ge,null),Y>>=1,Z>>=1}}else if(je.length>0){if(qe&&vt){const Y=ut(je[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ae,Y.width,Y.height)}for(let Y=0,Z=je.length;Y<Z;Y++)he=je[Y],qe?L&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Ge,he):n.texImage2D(t.TEXTURE_2D,Y,Ae,Se,Ge,he);M.generateMipmaps=!1}else if(qe){if(vt){const Y=ut(ie);n.texStorage2D(t.TEXTURE_2D,pe,Ae,Y.width,Y.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ge,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ae,Se,Ge,ie);m(M)&&f(te),be.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,H){if(M.image.length!==6)return;const te=_e(C,M),$=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const J=r.get($);if($.version!==J.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const be=Je.getPrimaries(Je.workingColorSpace),ue=M.colorSpace===Dr?null:Je.getPrimaries(M.colorSpace),de=M.colorSpace===Dr||be===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let Z=0;Z<6;Z++)!Fe&&!ie?Se[Z]=g(M.image[Z],!0,i.maxCubemapSize):Se[Z]=ie?M.image[Z].image:M.image[Z],Se[Z]=Re(M,Se[Z]);const Ge=Se[0],Ae=s.convert(M.format,M.colorSpace),he=s.convert(M.type),je=y(M.internalFormat,Ae,he,M.colorSpace),qe=M.isVideoTexture!==!0,vt=J.__version===void 0||te===!0,L=$.dataReady;let pe=S(M,Ge);ae(t.TEXTURE_CUBE_MAP,M);let Y;if(Fe){qe&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,je,Ge.width,Ge.height);for(let Z=0;Z<6;Z++){Y=Se[Z].mipmaps;for(let le=0;le<Y.length;le++){const Ce=Y[le];M.format!==$n?Ae!==null?qe?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ce.width,Ce.height,Ae,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ce.width,Ce.height,Ae,he,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,je,Ce.width,Ce.height,0,Ae,he,Ce.data)}}}else{if(Y=M.mipmaps,qe&&vt){Y.length>0&&pe++;const Z=ut(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){qe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se[Z].width,Se[Z].height,Ae,he,Se[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Se[Z].width,Se[Z].height,0,Ae,he,Se[Z].data);for(let le=0;le<Y.length;le++){const Ke=Y[le].image[Z].image;qe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ke.width,Ke.height,Ae,he,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,je,Ke.width,Ke.height,0,Ae,he,Ke.data)}}else{qe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,he,Se[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Ae,he,Se[Z]);for(let le=0;le<Y.length;le++){const Ce=Y[le];qe?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ae,he,Ce.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,je,Ae,he,Ce.image[Z])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),J.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function re(C,M,H,te,$,J){const be=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),de=y(H.internalFormat,be,ue,H.colorSpace);if(!r.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>J),Se=Math.max(1,M.height>>J);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,J,de,ie,Se,M.depth,0,be,ue,null):n.texImage2D($,J,de,ie,Se,0,be,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ye(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,$,r.get(H).__webglTexture,0,Ee(M)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,$,r.get(H).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const te=M.depthTexture,$=te&&te.isDepthTexture?te.type:null,J=_(M.stencilBuffer,$),be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ee(M);Ye(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,J,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,C)}else{const te=M.textures;for(let $=0;$<te.length;$++){const J=te[$],be=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),de=y(J.internalFormat,be,ue,J.colorSpace),Fe=Ee(M);H&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,de,M.width,M.height):Ye(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,de,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,de,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const te=r.get(M.depthTexture).__webglTexture,$=Ee(M);if(M.depthTexture.format===Ss)Ye(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Os)Ye(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const M=r.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(C,M,H){const te=r.get(C);M!==void 0&&re(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ie(C)}function Xe(C){const M=C.texture,H=r.get(C),te=r.get(M);C.addEventListener("dispose",N);const $=C.textures,J=C.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[ue][de]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(be)for(let ue=0,de=$.length;ue<de;ue++){const Fe=r.get($[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ye(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const de=$[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Fe=s.convert(de.format,de.colorSpace),ie=s.convert(de.type),Se=y(de.internalFormat,Fe,ie,de.colorSpace,C.isXRRenderTarget===!0),Ge=Ee(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Se,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)re(H.__webglFramebuffer[ue][de],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else re(H.__webglFramebuffer[ue],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ue=0,de=$.length;ue<de;ue++){const Fe=$[ue],ie=r.get(Fe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ae(t.TEXTURE_2D,Fe),re(H.__webglFramebuffer,C,Fe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Fe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,te.__webglTexture),ae(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)re(H.__webglFramebuffer[de],C,M,t.COLOR_ATTACHMENT0,ue,de);else re(H.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&f(ue),n.unbindTexture()}C.depthBuffer&&Ie(C)}function I(C){const M=C.textures;for(let H=0,te=M.length;H<te;H++){const $=M[H];if(m($)){const J=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=r.get($).__webglTexture;n.bindTexture(J,be),f(J),n.unbindTexture()}}}const ke=[],He=[];function rt(C){if(C.samples>0){if(Ye(C)===!1){const M=C.textures,H=C.width,te=C.height;let $=t.COLOR_BUFFER_BIT;const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=r.get(C),ue=M.length>1;if(ue)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let de=0;de<M.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const Fe=r.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,$,t.NEAREST),c===!0&&(ke.length=0,He.length=0,ke.push(t.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ke.push(J),He.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const Fe=r.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ee(C){return Math.min(i.maxSamples,C.samples)}function Ye(C){const M=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Re(C,M){const H=C.colorSpace,te=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ni&&H!==Dr&&(Je.getTransfer(H)===at?(te!==$n||$!==Zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Pe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ye}function Kw(t,e){function n(r,i=Dr){let s;const o=Je.getTransfer(i);if(r===Zr)return t.UNSIGNED_BYTE;if(r===Pg)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Lg)return t.UNSIGNED_SHORT_5_5_5_1;if(r===gS)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===mS)return t.BYTE;if(r===xS)return t.SHORT;if(r===bl)return t.UNSIGNED_SHORT;if(r===Rg)return t.INT;if(r===Ds)return t.UNSIGNED_INT;if(r===kr)return t.FLOAT;if(r===ql)return t.HALF_FLOAT;if(r===vS)return t.ALPHA;if(r===yS)return t.RGB;if(r===$n)return t.RGBA;if(r===_S)return t.LUMINANCE;if(r===SS)return t.LUMINANCE_ALPHA;if(r===Ss)return t.DEPTH_COMPONENT;if(r===Os)return t.DEPTH_STENCIL;if(r===bS)return t.RED;if(r===Ig)return t.RED_INTEGER;if(r===MS)return t.RG;if(r===Dg)return t.RG_INTEGER;if(r===Ug)return t.RGBA_INTEGER;if(r===Cc||r===Rc||r===Pc||r===Lc)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Oh||r===kh||r===Fh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Uh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh||r===zh||r===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===jh||r===zh)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Bh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hh||r===Vh||r===Gh||r===Wh||r===Xh||r===Yh||r===qh||r===$h||r===Kh||r===Zh||r===Qh||r===Jh||r===ep||r===tp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Hh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$h)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ep)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tp)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic||r===np||r===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Ic)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===np)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ES||r===ip||r===sp||r===ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(r===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class Zw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qw={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,r),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),x=.02,v=.005;u.inputState.pinching&&d>x+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=x-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Qw)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Zt,s=e.properties.get(i);s.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Qr({vertexShader:Jw,fragmentShader:eT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Lt(new Ei(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class nT extends Hs{constructor(e,n){super();const r=this;let i=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,p=null,d=null,x=null,v=null;const g=new tT,m=n.getContextAttributes();let f=null,y=null;const _=[],S=[],R=new We;let N=null;const T=new dn;T.layers.enable(1),T.viewport=new ct;const A=new dn;A.layers.enable(2),A.viewport=new ct;const w=[T,A],b=new Zw;b.layers.enable(1),b.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=_[G];return re===void 0&&(re=new iu,_[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=_[G];return re===void 0&&(re=new iu,_[G]=re),re.getGripSpace()},this.getHand=function(G){let re=_[G];return re===void 0&&(re=new iu,_[G]=re),re.getHandSpace()};function j(G){const re=S.indexOf(G.inputSource);if(re===-1)return;const fe=_[re];fe!==void 0&&(fe.update(G.inputSource,G.frame,u||o),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let G=0;G<_.length;G++){const re=S[G];re!==null&&(S[G]=null,_[G].disconnect(re))}P=null,z=null,g.reset(),e.setRenderTarget(f),x=null,d=null,p=null,i=null,y=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,n,re),i.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),y=new Ri(x.framebufferWidth,x.framebufferHeight,{format:$n,type:Zr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,fe=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Os:Ss,fe=m.stencil?Us:Ds);const Ie={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=new XRWebGLBinding(i,n),d=p.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ri(d.textureWidth,d.textureHeight,{format:$n,type:Zr,depthTexture:new Qg(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(l),Be.setContext(i),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(G){for(let re=0;re<G.removed.length;re++){const fe=G.removed[re],oe=S.indexOf(fe);oe>=0&&(S[oe]=null,_[oe].disconnect(fe))}for(let re=0;re<G.added.length;re++){const fe=G.added[re];let oe=S.indexOf(fe);if(oe===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=S.length){S.push(fe),oe=Pe;break}else if(S[Pe]===null){S[Pe]=fe,oe=Pe;break}if(oe===-1)break}const Ie=_[oe];Ie&&Ie.connect(fe)}}const V=new k,Q=new k;function D(G,re,fe){V.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const oe=V.distanceTo(Q),Ie=re.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,Xe=Ie[14]/(Ie[10]-1),I=Ie[14]/(Ie[10]+1),ke=(Ie[9]+1)/Ie[5],He=(Ie[9]-1)/Ie[5],rt=(Ie[8]-1)/Ie[0],Ee=(Pe[8]+1)/Pe[0],Ye=Xe*rt,Le=Xe*Ee,Re=oe/(-rt+Ee),ut=Re*-rt;re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ut),G.translateZ(Re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const C=Xe+Re,M=I+Re,H=Ye-ut,te=Le+(oe-ut),$=ke*I/M*C,J=He*I/M*C;G.projectionMatrix.makePerspective(H,te,$,J,C,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;g.texture!==null&&(G.near=g.depthNear,G.far=g.depthFar),b.near=A.near=T.near=G.near,b.far=A.far=T.far=G.far,(P!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far,T.near=P,T.far=z,A.near=P,A.far=z,T.updateProjectionMatrix(),A.updateProjectionMatrix(),G.updateProjectionMatrix());const re=G.parent,fe=b.cameras;K(b,re);for(let oe=0;oe<fe.length;oe++)K(fe[oe],re);fe.length===2?D(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),ee(G,b,re)};function ee(G,re,fe){fe===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Fa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&x===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let ae=null;function _e(G,re){if(h=re.getViewerPose(u||o),v=re,h!==null){const fe=h.views;x!==null&&(e.setRenderTargetFramebuffer(y,x.framebuffer),e.setRenderTarget(y));let oe=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let Pe=0;Pe<fe.length;Pe++){const Xe=fe[Pe];let I=null;if(x!==null)I=x.getViewport(Xe);else{const He=p.getViewSubImage(d,Xe);I=He.viewport,Pe===0&&(e.setRenderTargetTextures(y,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(y))}let ke=w[Pe];ke===void 0&&(ke=new dn,ke.layers.enable(Pe),ke.viewport=new ct,w[Pe]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(I.x,I.y,I.width,I.height),Pe===0&&(b.matrix.copy(ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(ke)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Pe=p.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let fe=0;fe<_.length;fe++){const oe=S[fe],Ie=_[fe];oe!==null&&Ie!==void 0&&Ie.update(oe,re,u||o)}ae&&ae(G,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),v=null}const Be=new Kg;Be.setAnimationLoop(_e),this.setAnimationLoop=function(G){ae=G},this.dispose=function(){}}}const ui=new Jn,rT=new ht;function iT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Yg(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,_,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&x(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?c(m,f,y,_):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),_=y.envMap,S=y.envMapRotation;_&&(m.envMap.value=_,ui.copy(S),ui.x*=-1,ui.y*=-1,ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(ui)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function x(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function sT(t,e,n,r){let i={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const S=_.program;r.uniformBlockBinding(y,S)}function u(y,_){let S=i[y.id];S===void 0&&(v(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));const R=_.program;r.updateUBOMapping(y,R);const N=e.render.frame;s[y.id]!==N&&(d(y),s[y.id]=N)}function h(y){const _=p();y.__bindingPointIndex=_;const S=t.createBuffer(),R=y.__size,N=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function p(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],S=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let N=0,T=S.length;N<T;N++){const A=Array.isArray(S[N])?S[N]:[S[N]];for(let w=0,b=A.length;w<b;w++){const P=A[w];if(x(P,N,w,R)===!0){const z=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let q=0;q<j.length;q++){const V=j[q],Q=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,z+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(y,_,S,R){const N=y.value,T=_+"_"+S;if(R[T]===void 0)return typeof N=="number"||typeof N=="boolean"?R[T]=N:R[T]=N.clone(),!0;{const A=R[T];if(typeof N=="number"||typeof N=="boolean"){if(A!==N)return R[T]=N,!0}else if(A.equals(N)===!1)return A.copy(N),!0}return!1}function v(y){const _=y.uniforms;let S=0;const R=16;for(let T=0,A=_.length;T<A;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,P=w.length;b<P;b++){const z=w[b],j=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=j.length;W<q;W++){const V=j[W],Q=g(V),D=S%R;D!==0&&R-D<Q.boundary&&(S+=R-D),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const N=S%R;return N>0&&(S+=R-N),y.__size=S,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(const y in i)t.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:u,dispose:f}}class aT{constructor(e={}){const{canvas:n=QS(),context:r=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=o;const x=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Yr,this.toneMappingExposure=1;const _=this;let S=!1,R=0,N=0,T=null,A=-1,w=null;const b=new ct,P=new ct;let z=null;const j=new ze(0);let W=0,q=n.width,V=n.height,Q=1,D=null,K=null;const ee=new ct(0,0,q,V),ae=new ct(0,0,q,V);let _e=!1;const Be=new cf;let G=!1,re=!1;const fe=new ht,oe=new k,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Xe(){return T===null?Q:1}let I=r;function ke(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${af}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",Z,!1),I===null){const U="webgl2";if(I=ke(U,E),I===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,rt,Ee,Ye,Le,Re,ut,C,M,H,te,$,J,be,ue,de,Fe,ie,Se,Ge,Ae,he,je,qe;function vt(){He=new pE(I),He.init(),he=new Kw(I,He),rt=new lE(I,He,e,he),Ee=new qw(I),Ye=new gE(I),Le=new Dw,Re=new $w(I,He,Ee,Le,rt,he,Ye),ut=new uE(_),C=new hE(_),M=new Eb(I),je=new aE(I,M),H=new mE(I,M,Ye,je),te=new yE(I,H,M,Ye),Se=new vE(I,rt,Re),de=new cE(Le),$=new Iw(_,ut,C,He,rt,je,de),J=new iT(_,Le),be=new Ow,ue=new Hw(He),ie=new sE(_,ut,C,Ee,te,d,c),Fe=new Yw(_,te,rt),qe=new sT(I,Ye,rt,Ee),Ge=new oE(I,He,Ye),Ae=new xE(I,He,Ye),Ye.programs=$.programs,_.capabilities=rt,_.extensions=He,_.properties=Le,_.renderLists=be,_.shadowMap=Fe,_.state=Ee,_.info=Ye}vt();const L=new nT(_,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(q,V,!1))},this.getSize=function(E){return E.set(q,V)},this.setSize=function(E,U,F=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,V=U,n.width=Math.floor(E*Q),n.height=Math.floor(U*Q),F===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*Q,V*Q).floor()},this.setDrawingBufferSize=function(E,U,F){q=E,V=U,Q=F,n.width=Math.floor(E*F),n.height=Math.floor(U*F),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,U,F,B){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,U,F,B),Ee.viewport(b.copy(ee).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,U,F,B){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,U,F,B),Ee.scissor(P.copy(ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){Ee.setScissorTest(_e=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,U=!0,F=!0){let B=0;if(E){let O=!1;if(T!==null){const se=T.texture.format;O=se===Ug||se===Dg||se===Ig}if(O){const se=T.texture.type,me=se===Zr||se===Ds||se===bl||se===Us||se===Pg||se===Lg,ge=ie.getClearColor(),ye=ie.getClearAlpha(),Te=ge.r,Ne=ge.g,we=ge.b;me?(x[0]=Te,x[1]=Ne,x[2]=we,x[3]=ye,I.clearBufferuiv(I.COLOR,0,x)):(v[0]=Te,v[1]=Ne,v[2]=we,v[3]=ye,I.clearBufferiv(I.COLOR,0,v))}else B|=I.COLOR_BUFFER_BIT}U&&(B|=I.DEPTH_BUFFER_BIT),F&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),be.dispose(),ue.dispose(),Le.dispose(),ut.dispose(),C.dispose(),te.dispose(),je.dispose(),qe.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",zn),L.removeEventListener("sessionend",Bn),ri.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ye.autoReset,U=Fe.enabled,F=Fe.autoUpdate,B=Fe.needsUpdate,O=Fe.type;vt(),Ye.autoReset=E,Fe.enabled=U,Fe.autoUpdate=F,Fe.needsUpdate=B,Fe.type=O}function Z(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const U=E.target;U.removeEventListener("dispose",le),Ce(U)}function Ce(E){Ke(E),Le.remove(E)}function Ke(E){const U=Le.get(E).programs;U!==void 0&&(U.forEach(function(F){$.releaseProgram(F)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,F,B,O,se){U===null&&(U=Ie);const me=O.isMesh&&O.matrixWorld.determinant()<0,ge=av(E,U,F,B,O);Ee.setMaterial(B,me);let ye=F.index,Te=1;if(B.wireframe===!0){if(ye=H.getWireframeAttribute(F),ye===void 0)return;Te=2}const Ne=F.drawRange,we=F.attributes.position;let Ze=Ne.start*Te,mt=(Ne.start+Ne.count)*Te;se!==null&&(Ze=Math.max(Ze,se.start*Te),mt=Math.min(mt,(se.start+se.count)*Te)),ye!==null?(Ze=Math.max(Ze,0),mt=Math.min(mt,ye.count)):we!=null&&(Ze=Math.max(Ze,0),mt=Math.min(mt,we.count));const xt=mt-Ze;if(xt<0||xt===1/0)return;je.setup(O,B,ge,F,ye);let on,Qe=Ge;if(ye!==null&&(on=M.get(ye),Qe=Ae,Qe.setIndex(on)),O.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Xe()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(O.isLine){let Me=B.linewidth;Me===void 0&&(Me=1),Ee.setLineWidth(Me*Xe()),O.isLineSegments?Qe.setMode(I.LINES):O.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else O.isPoints?Qe.setMode(I.POINTS):O.isSprite&&Qe.setMode(I.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Qe.renderInstances(Ze,xt,O.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Xt=Math.min(F.instanceCount,Me);Qe.renderInstances(Ze,xt,Xt)}else Qe.render(Ze,xt)};function yt(E,U,F){E.transparent===!0&&E.side===ur&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,qa(E,U,F),E.side=Kr,E.needsUpdate=!0,qa(E,U,F),E.side=ur):qa(E,U,F)}this.compile=function(E,U,F=null){F===null&&(F=E),m=ue.get(F),m.init(U),y.push(m),F.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==F&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const B=new Set;return E.traverse(function(O){const se=O.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const ge=se[me];yt(ge,F,O),B.add(ge)}else yt(se,F,O),B.add(se)}),y.pop(),m=null,B},this.compileAsync=function(E,U,F=null){const B=this.compile(E,U,F);return new Promise(O=>{function se(){if(B.forEach(function(me){Le.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){O(E);return}setTimeout(se,10)}He.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let At=null;function tt(E){At&&At(E)}function zn(){ri.stop()}function Bn(){ri.start()}const ri=new Kg;ri.setAnimationLoop(tt),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){At=E,L.setAnimationLoop(E),E===null?ri.stop():ri.start()},L.addEventListener("sessionstart",zn),L.addEventListener("sessionend",Bn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,T),m=ue.get(E,y.length),m.init(U),y.push(m),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Be.setFromProjectionMatrix(fe),re=this.localClippingEnabled,G=de.init(this.clippingPlanes,re),g=be.get(E,f.length),g.init(),f.push(g),L.enabled===!0&&L.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Ql(se,U,-1/0,_.sortObjects)}Ql(E,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(D,K),Pe=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Pe&&ie.addToRenderList(g,E),this.info.render.frame++,G===!0&&de.beginShadows();const F=m.state.shadowsArray;Fe.render(F,E,U),G===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,O=g.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let me=0,ge=se.length;me<ge;me++){const ye=se[me];pf(B,O,E,ye)}Pe&&ie.render(E);for(let me=0,ge=se.length;me<ge;me++){const ye=se[me];hf(g,E,ye,ye.viewport)}}else O.length>0&&pf(B,O,E,U),Pe&&ie.render(E),hf(g,E,U);T!==null&&(Re.updateMultisampleRenderTarget(T),Re.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,U),je.resetDefaultState(),A=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],G===!0&&de.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Ql(E,U,F,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){B&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const me=te.update(E),ge=E.material;ge.visible&&g.push(E,me,ge,F,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const me=te.update(E),ge=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),oe.copy(me.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(ge)){const ye=me.groups;for(let Te=0,Ne=ye.length;Te<Ne;Te++){const we=ye[Te],Ze=ge[we.materialIndex];Ze&&Ze.visible&&g.push(E,me,Ze,F,oe.z,we)}}else ge.visible&&g.push(E,me,ge,F,oe.z,null)}}const se=E.children;for(let me=0,ge=se.length;me<ge;me++)Ql(se[me],U,F,B)}function hf(E,U,F,B){const O=E.opaque,se=E.transmissive,me=E.transparent;m.setupLightsView(F),G===!0&&de.setGlobalState(_.clippingPlanes,F),B&&Ee.viewport(b.copy(B)),O.length>0&&Ya(O,U,F),se.length>0&&Ya(se,U,F),me.length>0&&Ya(me,U,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function pf(E,U,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Ri(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ql:Zr,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=m.state.transmissionRenderTarget[B.id],me=B.viewport||b;se.setSize(me.z,me.w);const ge=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(j),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),Pe?ie.render(F):_.clear();const ye=_.toneMapping;_.toneMapping=Yr;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),G===!0&&de.setGlobalState(_.clippingPlanes,B),Ya(E,F,B),Re.updateMultisampleRenderTarget(se),Re.updateRenderTargetMipmap(se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let we=0,Ze=U.length;we<Ze;we++){const mt=U[we],xt=mt.object,on=mt.geometry,Qe=mt.material,Me=mt.group;if(Qe.side===ur&&xt.layers.test(B.layers)){const Xt=Qe.side;Qe.side=an,Qe.needsUpdate=!0,mf(xt,F,B,on,Qe,Me),Qe.side=Xt,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Re.updateMultisampleRenderTarget(se),Re.updateRenderTargetMipmap(se))}_.setRenderTarget(ge),_.setClearColor(j,W),Te!==void 0&&(B.viewport=Te),_.toneMapping=ye}function Ya(E,U,F){const B=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=E.length;O<se;O++){const me=E[O],ge=me.object,ye=me.geometry,Te=B===null?me.material:B,Ne=me.group;ge.layers.test(F.layers)&&mf(ge,U,F,ye,Te,Ne)}}function mf(E,U,F,B,O,se){E.onBeforeRender(_,U,F,B,O,se),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,U,F,B,E,se),O.transparent===!0&&O.side===ur&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,_.renderBufferDirect(F,U,B,O,E,se),O.side=Kr,O.needsUpdate=!0,_.renderBufferDirect(F,U,B,O,E,se),O.side=ur):_.renderBufferDirect(F,U,B,O,E,se),E.onAfterRender(_,U,F,B,O,se)}function qa(E,U,F){U.isScene!==!0&&(U=Ie);const B=Le.get(E),O=m.state.lights,se=m.state.shadowsArray,me=O.state.version,ge=$.getParameters(E,O.state,se,U,F),ye=$.getProgramCacheKey(ge);let Te=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?C:ut).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",le),Te=new Map,B.programs=Te);let Ne=Te.get(ye);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===me)return gf(E,ge),Ne}else ge.uniforms=$.getUniforms(E),E.onBuild(F,ge,_),E.onBeforeCompile(ge,_),Ne=$.acquireProgram(ge,ye),Te.set(ye,Ne),B.uniforms=ge.uniforms;const we=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=de.uniform),gf(E,ge),B.needsLights=lv(E),B.lightsStateVersion=me,B.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Ne,B.uniformsList=null,Ne}function xf(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ko.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function gf(E,U){const F=Le.get(E);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function av(E,U,F,B,O){U.isScene!==!0&&(U=Ie),Re.resetTextureUnits();const se=U.fog,me=B.isMeshStandardMaterial?U.environment:null,ge=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,ye=(B.isMeshStandardMaterial?C:ut).get(B.envMap||me),Te=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ne=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!F.morphAttributes.position,Ze=!!F.morphAttributes.normal,mt=!!F.morphAttributes.color;let xt=Yr;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=_.toneMapping);const on=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=on!==void 0?on.length:0,Me=Le.get(B),Xt=m.state.lights;if(G===!0&&(re===!0||E!==w)){const vn=E===w&&B.id===A;de.setState(B,E,vn)}let nt=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Xt.state.version||Me.outputColorSpace!==ge||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==ye||B.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==de.numPlanes||Me.numIntersection!==de.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ne||Me.morphTargets!==we||Me.morphNormals!==Ze||Me.morphColors!==mt||Me.toneMapping!==xt||Me.morphTargetsCount!==Qe)&&(nt=!0):(nt=!0,Me.__version=B.version);let tr=Me.currentProgram;nt===!0&&(tr=qa(B,U,O));let $a=!1,ii=!1,Jl=!1;const Ct=tr.getUniforms(),Sr=Me.uniforms;if(Ee.useProgram(tr.program)&&($a=!0,ii=!0,Jl=!0),B.id!==A&&(A=B.id,ii=!0),$a||w!==E){Ct.setValue(I,"projectionMatrix",E.projectionMatrix),Ct.setValue(I,"viewMatrix",E.matrixWorldInverse);const vn=Ct.map.cameraPosition;vn!==void 0&&vn.setValue(I,oe.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,ii=!0,Jl=!0)}if(O.isSkinnedMesh){Ct.setOptional(I,O,"bindMatrix"),Ct.setOptional(I,O,"bindMatrixInverse");const vn=O.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ct.setValue(I,"boneTexture",vn.boneTexture,Re))}O.isBatchedMesh&&(Ct.setOptional(I,O,"batchingTexture"),Ct.setValue(I,"batchingTexture",O._matricesTexture,Re),Ct.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",O._colorsTexture,Re));const ec=F.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0)&&Se.update(O,F,tr),(ii||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Ct.setValue(I,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Sr.envMap.value=ye,Sr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Sr.envMapIntensity.value=U.environmentIntensity),ii&&(Ct.setValue(I,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&ov(Sr,Jl),se&&B.fog===!0&&J.refreshFogUniforms(Sr,se),J.refreshMaterialUniforms(Sr,B,Q,V,m.state.transmissionRenderTarget[E.id]),Ko.upload(I,xf(Me),Sr,Re)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ko.upload(I,xf(Me),Sr,Re),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(I,"center",O.center),Ct.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ct.setValue(I,"normalMatrix",O.normalMatrix),Ct.setValue(I,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const vn=B.uniformsGroups;for(let tc=0,cv=vn.length;tc<cv;tc++){const vf=vn[tc];qe.update(vf,tr),qe.bind(vf,tr)}}return tr}function ov(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function lv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,F){Le.get(E.texture).__webglTexture=U,Le.get(E.depthTexture).__webglTexture=F;const B=Le.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const F=Le.get(E);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,F=0){T=E,R=U,N=F;let B=!0,O=null,se=!1,me=!1;if(E){const ye=Le.get(E);ye.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):ye.__webglFramebuffer===void 0?Re.setupRenderTarget(E):ye.__hasExternalTextures&&Re.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ne=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?O=Ne[U][F]:O=Ne[U],se=!0):E.samples>0&&Re.useMultisampledRTT(E)===!1?O=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[F]:O=Ne,b.copy(E.viewport),P.copy(E.scissor),z=E.scissorTest}else b.copy(ee).multiplyScalar(Q).floor(),P.copy(ae).multiplyScalar(Q).floor(),z=_e;if(Ee.bindFramebuffer(I.FRAMEBUFFER,O)&&B&&Ee.drawBuffers(E,O),Ee.viewport(b),Ee.scissor(P),Ee.setScissorTest(z),se){const ye=Le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,F)}else if(me){const ye=Le.get(E.texture),Te=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Te)}A=-1},this.readRenderTargetPixels=function(E,U,F,B,O,se,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);try{const ye=E.texture,Te=ye.format,Ne=ye.type;if(!rt.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&F>=0&&F<=E.height-O&&I.readPixels(U,F,B,O,he.convert(Te),he.convert(Ne),se)}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,F,B,O,se,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge){Ee.bindFramebuffer(I.FRAMEBUFFER,ge);try{const ye=E.texture,Te=ye.format,Ne=ye.type;if(!rt.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&F>=0&&F<=E.height-O){const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(U,F,B,O,he.convert(Te),he.convert(Ne),0),I.flush();const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await JS(I,Ze,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se)}finally{I.deleteBuffer(we),I.deleteSync(Ze)}return se}}finally{const ye=T!==null?Le.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(E,U=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-F),O=Math.floor(E.image.width*B),se=Math.floor(E.image.height*B),me=U!==null?U.x:0,ge=U!==null?U.y:0;Re.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,me,ge,O,se),Ee.unbindTexture()},this.copyTextureToTexture=function(E,U,F=null,B=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],O=arguments[3]||0,F=null);let se,me,ge,ye,Te,Ne;F!==null?(se=F.max.x-F.min.x,me=F.max.y-F.min.y,ge=F.min.x,ye=F.min.y):(se=E.image.width,me=E.image.height,ge=0,ye=0),B!==null?(Te=B.x,Ne=B.y):(Te=0,Ne=0);const we=he.convert(U.format),Ze=he.convert(U.type);Re.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=I.getParameter(I.UNPACK_ROW_LENGTH),xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),on=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),Me=I.getParameter(I.UNPACK_SKIP_IMAGES),Xt=E.isCompressedTexture?E.mipmaps[O]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,ye),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Te,Ne,se,me,we,Ze,Xt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Te,Ne,Xt.width,Xt.height,we,Xt.data):I.texSubImage2D(I.TEXTURE_2D,O,Te,Ne,we,Ze,Xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,on),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me),O===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,F=null,B=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0);let se,me,ge,ye,Te,Ne,we,Ze,mt;const xt=E.isCompressedTexture?E.mipmaps[O]:E.image;F!==null?(se=F.max.x-F.min.x,me=F.max.y-F.min.y,ge=F.max.z-F.min.z,ye=F.min.x,Te=F.min.y,Ne=F.min.z):(se=xt.width,me=xt.height,ge=xt.depth,ye=0,Te=0,Ne=0),B!==null?(we=B.x,Ze=B.y,mt=B.z):(we=0,Ze=0,mt=0);const on=he.convert(U.format),Qe=he.convert(U.type);let Me;if(U.isData3DTexture)Re.setTexture3D(U,0),Me=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Re.setTexture2DArray(U,0),Me=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tr=I.getParameter(I.UNPACK_SKIP_PIXELS),$a=I.getParameter(I.UNPACK_SKIP_ROWS),ii=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Me,O,we,Ze,mt,se,me,ge,on,Qe,xt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,O,we,Ze,mt,se,me,ge,on,xt.data):I.texSubImage3D(Me,O,we,Ze,mt,se,me,ge,on,Qe,xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tr),I.pixelStorei(I.UNPACK_SKIP_ROWS,$a),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ii),O===0&&U.generateMipmaps&&I.generateMipmap(Me),Ee.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&Re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Re.setTextureCube(E,0):E.isData3DTexture?Re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Re.setTexture2DArray(E,0):Re.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){R=0,N=0,T=null,Ee.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===of?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===$l?"display-p3":"srgb"}}class oT extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class iv extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qp=new ht,cd=new Hg,Oo=new Kl,ko=new k;class lT extends kt{constructor(e=new er,n=new iv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oo.copy(r.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Qp.copy(i).invert(),cd.copy(e.ray).applyMatrix4(Qp);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=r.index,p=r.attributes.position;if(u!==null){const d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=d,g=x;v<g;v++){const m=u.getX(v);ko.fromBufferAttribute(p,m),Jp(ko,m,c,i,e,n,this)}}else{const d=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=d,g=x;v<g;v++)ko.fromBufferAttribute(p,v),Jp(ko,v,c,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Jp(t,e,n,r,i,s,o){const l=cd.distanceSqToPoint(t);if(l<n){const c=new k;cd.closestPointToPoint(t,c),c.applyMatrix4(r);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}class cT extends Zt{constructor(e,n,r,i,s,o,l,c,u){super(e,n,r,i,s,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class df extends er{constructor(e=1,n=1,r=1,i=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const u=this;i=Math.floor(i),s=Math.floor(s);const h=[],p=[],d=[],x=[];let v=0;const g=[],m=r/2;let f=0;y(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(d,3)),this.setAttribute("uv",new Qn(x,2));function y(){const S=new k,R=new k;let N=0;const T=(n-e)/r;for(let A=0;A<=s;A++){const w=[],b=A/s,P=b*(n-e)+e;for(let z=0;z<=i;z++){const j=z/i,W=j*c+l,q=Math.sin(W),V=Math.cos(W);R.x=P*q,R.y=-b*r+m,R.z=P*V,p.push(R.x,R.y,R.z),S.set(q,T,V).normalize(),d.push(S.x,S.y,S.z),x.push(j,1-b),w.push(v++)}g.push(w)}for(let A=0;A<i;A++)for(let w=0;w<s;w++){const b=g[w][A],P=g[w+1][A],z=g[w+1][A+1],j=g[w][A+1];h.push(b,P,j),h.push(P,z,j),N+=6}u.addGroup(f,N,0),f+=N}function _(S){const R=v,N=new We,T=new k;let A=0;const w=S===!0?e:n,b=S===!0?1:-1;for(let z=1;z<=i;z++)p.push(0,m*b,0),d.push(0,b,0),x.push(.5,.5),v++;const P=v;for(let z=0;z<=i;z++){const W=z/i*c+l,q=Math.cos(W),V=Math.sin(W);T.x=w*V,T.y=m*b,T.z=w*q,p.push(T.x,T.y,T.z),d.push(0,b,0),N.x=q*.5+.5,N.y=V*.5*b+.5,x.push(N.x,N.y),v++}for(let z=0;z<i;z++){const j=R+z,W=P+z;S===!0?h.push(W,W+1,j):h.push(W+1,W,j),A+=3}u.addGroup(f,A,S===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uT extends Di{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ud extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Og,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class em extends ud{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ff extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const su=new ht,tm=new k,nm=new k;class sv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(nm),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rm=new ht,ra=new k,au=new k;class dT extends sv{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,i=this.matrix,s=e.distance||r.far;s!==r.far&&(r.far=s,r.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),r.position.copy(ra),au.copy(r.position),au.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(au),r.updateMatrixWorld(),i.makeTranslation(-ra.x,-ra.y,-ra.z),rm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rm)}}class im extends ff{constructor(e,n,r=0,i=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fT extends sv{constructor(){super(new Zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hT extends ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new fT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pT extends ff{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function sm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);const xT=()=>{const t=X.useRef(null),[e,n]=X.useState(!0);return X.useEffect(()=>{const r=t.current;if(!r)return;try{const $=document.createElement("canvas");if(!($.getContext("webgl")||$.getContext("experimental-webgl"))){n(!1);return}}catch{n(!1);return}const i=r.clientWidth||window.innerWidth,s=r.clientHeight||window.innerHeight,o=new oT,l=new dn(45,i/s,.1,100);l.position.set(0,.8,5.5);const c=new aT({antialias:!0,alpha:!0,powerPreference:"high-performance"});c.setSize(i,s),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=Tg,c.toneMapping=Ag,c.toneMappingExposure=1.2,r.appendChild(c.domElement);const u=new hs;o.add(u);const h=new em({color:new ze("#101614"),metalness:.85,roughness:.25,clearcoat:.4,clearcoatRoughness:.15,reflectivity:.9}),p=new em({color:new ze("#1A2420"),metalness:.9,roughness:.2,clearcoat:.3}),d=new _a({color:329478}),x=new _a({color:791054}),v=document.createElement("canvas");v.width=1024,v.height=640;const g=v.getContext("2d");g&&(g.fillStyle="#080C0A",g.fillRect(0,0,1024,640),g.fillStyle="#0F1612",g.fillRect(0,0,1024,48),g.fillStyle="#B7FF6A",g.beginPath(),g.arc(40,24,6,0,Math.PI*2),g.fill(),g.fillStyle="#F5F7F4",g.font="bold 18px sans-serif",g.fillText("VULNSHOP / OS 4.2",64,30),g.fillStyle="#141E18",g.roundRect(40,80,440,240,12),g.fill(),g.fillStyle="#B7FF6A",g.font="16px monospace",g.fillText("> SYSTEM: READY",64,120),g.fillStyle="#89928E",g.font="14px monospace",g.fillText("ENCRYPTION: AES-GCM-256",64,150),g.fillText("CATALOG: 6 HARDWARE NODES",64,180),g.fillText("BURP SUITE: PASS-THROUGH OK",64,210),g.fillStyle="#141E18",g.roundRect(510,80,470,240,12),g.fill(),g.strokeStyle="#B7FF6A",g.lineWidth=3,g.beginPath(),g.moveTo(530,240),g.bezierCurveTo(620,120,700,280,800,140),g.bezierCurveTo(860,200,920,100,960,160),g.stroke(),g.fillStyle="#141E18",g.roundRect(40,350,940,240,12),g.fill(),g.fillStyle="#F5F7F4",g.font="bold 24px sans-serif",g.fillText("AeroBook 14 — Cinematic Precision",70,410),g.fillStyle="#B7FF6A",g.font="bold 28px monospace",g.fillText("₹69,999",70,460),g.fillStyle="#89928E",g.font="16px sans-serif",g.fillText("Titanium Unibody · M3 Ultra Grade · Ultra-Low Latency",70,510));const m=new cT(v);x.map=m,x.needsUpdate=!0;const f=new _a({color:new ze("#B7FF6A")}),y=new ud({color:659213,roughness:.6,metalness:.2}),_=new ud({color:1317911,roughness:.4,metalness:.5}),S=new qn(2.4,.07,1.6),R=new Lt(S,h);R.position.set(0,0,0),R.castShadow=!0,R.receiveShadow=!0,u.add(R);const N=new qn(2.1,.01,.85),T=new Lt(N,y);T.position.set(0,.036,-.2),u.add(T);const A=new qn(.8,.005,.5),w=new Lt(A,_);w.position.set(0,.038,.45),u.add(w);const b=new qn(2.2,.015,.02),P=new Lt(b,f);P.position.set(0,.01,.8),u.add(P);const z=new hs;z.position.set(0,.04,-.78),z.rotation.x=ZS.degToRad(-108),u.add(z);const j=new qn(2.4,1.55,.04),W=new Lt(j,h);W.position.set(0,.775,0),W.castShadow=!0,z.add(W);const q=new df(.12,.12,.005,32),V=new Lt(q,p);V.rotation.x=Math.PI/2,V.position.set(0,.775,-.022),z.add(V);const Q=new Ei(2.32,1.48),D=new Lt(Q,d);D.position.set(0,.775,.021),z.add(D);const K=new Ei(2.24,1.4),ee=new Lt(K,x);ee.position.set(0,.775,.022),z.add(ee);const ae=80,_e=new er,Be=new Float32Array(ae*3);for(let $=0;$<ae*3;$+=3)Be[$]=(Math.random()-.5)*8,Be[$+1]=(Math.random()-.5)*5+.5,Be[$+2]=(Math.random()-.5)*6;_e.setAttribute("position",new Fn(Be,3));const G=new iv({color:12058474,size:.025,transparent:!0,opacity:.4,blending:td}),re=new lT(_e,G);o.add(re);const fe=new pT(16777215,.8);o.add(fe);const oe=new hT(16777215,2.2);oe.position.set(4,5,4),oe.castShadow=!0,oe.shadow.mapSize.width=1024,oe.shadow.mapSize.height=1024,o.add(oe);const Ie=new im(12058474,4,8);Ie.position.set(-3,2,2),o.add(Ie);const Pe=new im(11051775,2.5,8);Pe.position.set(3,-1,-2),o.add(Pe);const Xe=new Ei(10,10),I=new uT({opacity:.35}),ke=new Lt(Xe,I);ke.rotation.x=-Math.PI/2,ke.position.y=-1.2,ke.receiveShadow=!0,o.add(ke),u.position.set(.3,-.1,0),u.rotation.set(.2,-.4,.05);let He=0,rt=0,Ee=-.4,Ye=.2,Le=0;const Re=$=>{const J=r.getBoundingClientRect(),be=($.clientX-J.left)/J.width*2-1,ue=-(($.clientY-J.top)/J.height*2-1);He=be,rt=ue,Ee=-.4+He*.45,Ye=.2-rt*.25},ut=()=>{Le=window.scrollY||window.pageYOffset};window.addEventListener("mousemove",Re),window.addEventListener("scroll",ut,{passive:!0});const C=()=>{if(!r)return;const $=r.clientWidth,J=r.clientHeight;l.aspect=$/J,l.updateProjectionMatrix(),c.setSize($,J)};window.addEventListener("resize",C);let M,H=new mT;const te=()=>{M=requestAnimationFrame(te);const $=H.getElapsedTime();u.rotation.y+=(Ee-u.rotation.y)*.05,u.rotation.x+=(Ye-u.rotation.x)*.05,u.position.y=-.1+Math.sin($*1.2)*.08-Le*.001,u.position.z=-Le*.002,re.rotation.y=$*.03,c.render(o,l)};return te(),()=>{window.removeEventListener("mousemove",Re),window.removeEventListener("scroll",ut),window.removeEventListener("resize",C),cancelAnimationFrame(M),c.dispose(),r.contains(c.domElement)&&r.removeChild(c.domElement)}},[]),e?a.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing select-none",title:"Drag mouse to inspect 3D hardware"}):a.jsx("div",{className:"w-full h-full flex items-center justify-center",children:a.jsxs("div",{className:"relative w-80 h-48 rounded-2xl bg-surface-elevated border border-surface-border p-6 flex flex-col justify-between",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"meta-badge text-lime-primary",children:"AeroBook 14"}),a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary animate-ping"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-xl font-bold text-text-primary",children:"Cinematic Precision"}),a.jsx("div",{className:"text-sm text-text-secondary mt-1",children:"Titanium Edition"})]}),a.jsx("div",{className:"text-xs font-mono text-lime-primary",children:"₹69,999 · SYSTEM ONLINE"})]})})},gT=({onNavigate:t,onSelectProduct:e})=>{const[n,r]=X.useState([]),[i,s]=X.useState("ALL"),[o,l]=X.useState(1),{addItem:c}=Ii();X.useEffect(()=>{wt.getProducts().then(r)},[]);const u=["ALL","LAPTOPS","SMARTPHONES","AUDIO","MONITORS","ACCESSORIES"],h=i==="ALL"?n:n.filter(d=>d.category.toUpperCase()===i),p=n.find(d=>d.id===101)||n[0];return a.jsxs("div",{className:"relative w-full overflow-hidden",children:[a.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-ambient-glow pointer-events-none"}),a.jsx("div",{className:"absolute top-[800px] right-0 w-[500px] h-[500px] bg-ambient-secondary pointer-events-none"}),a.jsx("div",{className:"absolute inset-0 bg-grid-subtle pointer-events-none opacity-40"}),a.jsxs("section",{className:"relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-8 z-10",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"px-2.5 py-1 rounded-md bg-lime-primary/10 border border-lime-primary/20 text-lime-primary font-mono text-xs font-semibold",children:"01 / LAUNCH"}),a.jsx("span",{className:"text-xs font-mono text-text-muted",children:"HARDWARE ARCHITECTURE"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("span",{className:"text-xs font-mono tracking-widest text-lime-primary uppercase block",children:"COMMERCE INTELLIGENCE"}),a.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-text-primary leading-[1.05]",children:["FIND BETTER.",a.jsx("br",{}),a.jsx("span",{className:"text-gradient-lime",children:"BUY WITH CLARITY."})]})]}),a.jsx("p",{className:"text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed",children:"VulnShop turns browsing, hardware selection, checkout and live order telemetry into one focused shopping experience."}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[a.jsxs("button",{onClick:()=>t("/products"),className:"px-7 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-sm flex items-center gap-2 hover:bg-lime-secondary transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(183,255,106,0.35)]",children:[a.jsx("span",{children:"Start shopping"}),a.jsx(kn,{className:"w-4 h-4"})]}),a.jsx("button",{onClick:()=>{const d=document.getElementById("story-section");d==null||d.scrollIntoView({behavior:"smooth"})},className:"px-6 py-3.5 rounded-xl bg-surface border border-surface-border text-text-primary font-medium text-sm hover:border-surface-borderHover hover:bg-surface-elevated transition-all",children:"Explore product story ↓"})]})]}),a.jsxs("div",{className:"lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center",children:[a.jsx("div",{className:"w-full h-full relative z-10","data-cursor":"explore",children:a.jsx(xT,{})}),a.jsxs("div",{className:"absolute bottom-2 right-2 z-20 px-3 py-1.5 rounded-full bg-surface/80 border border-surface-border backdrop-blur-md text-[10px] font-mono text-text-secondary flex items-center gap-2 pointer-events-none",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lime-primary animate-ping"}),a.jsx("span",{children:"3D INTERACTIVE · DRAG TO ROTATE"})]})]})]}),a.jsxs("div",{className:"mt-8 pt-6 border-t border-surface-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"p-3 rounded-xl bg-surface/50 border border-surface-border",children:[a.jsx("div",{className:"text-[10px] font-mono text-text-muted",children:"CATALOG NODE"}),a.jsxs("div",{className:"text-xl font-bold font-mono text-text-primary mt-0.5",children:[n.length||6," ",a.jsx("span",{className:"text-xs font-normal text-text-secondary",children:"UNITS"})]})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface/50 border border-surface-border",children:[a.jsx("div",{className:"text-[10px] font-mono text-text-muted",children:"SECTOR COVERAGE"}),a.jsxs("div",{className:"text-xl font-bold font-mono text-text-primary mt-0.5",children:["5 ",a.jsx("span",{className:"text-xs font-normal text-text-secondary",children:"CATEGORIES"})]})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface/50 border border-surface-border",children:[a.jsx("div",{className:"text-[10px] font-mono text-text-muted",children:"HARDWARE GRADE"}),a.jsxs("div",{className:"text-xl font-bold font-mono text-lime-primary mt-0.5",children:["PRO 14 ",a.jsx("span",{className:"text-xs font-normal text-text-secondary",children:"TITANIUM"})]})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface/50 border border-surface-border",children:[a.jsx("div",{className:"text-[10px] font-mono text-text-muted",children:"LOCAL TARGET"}),a.jsxs("div",{className:"text-xl font-bold font-mono text-blue-electric mt-0.5",children:["127.0.0.1 ",a.jsx("span",{className:"text-xs font-normal text-text-secondary",children:"PORT 3000"})]})]})]})]}),a.jsxs("section",{id:"story-section",className:"py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[a.jsxs("div",{className:"space-y-4 mb-16",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"02 / PRODUCT STORY"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary max-w-2xl leading-tight",children:["GOOD PRODUCTS",a.jsx("br",{}),a.jsx("span",{className:"text-text-secondary",children:"DESERVE MORE THAN A GRID."})]}),a.jsx("p",{className:"text-sm sm:text-base text-text-secondary max-w-xl",children:"Instead of crowding your screen with repetitive tiles, we highlight engineered craftsmanship first."})]}),p&&a.jsx("div",{className:"relative rounded-3xl bg-surface border border-surface-border overflow-hidden p-8 sm:p-12 lg:p-16 hover:border-surface-borderHover transition-all",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[a.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono",children:[a.jsx("span",{children:"FLAGSHIP HARDWARE"}),a.jsx("span",{children:"·"}),a.jsx("span",{children:p.category})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h3",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight",children:p.name}),a.jsx("div",{className:"text-xl sm:text-2xl font-mono text-lime-primary font-bold",children:"POWER WITHOUT THE NOISE."})]}),a.jsxs("p",{className:"text-text-secondary text-sm sm:text-base leading-relaxed",children:[p.description," Engineered with a precision titanium unibody, high-refresh display, and silent active thermal dispersion."]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 border-y border-surface-border text-xs font-mono",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-text-muted block",children:"PRICE"}),a.jsxs("strong",{className:"text-text-primary text-base",children:["₹",p.price.toLocaleString("en-IN")]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-text-muted block",children:"AVAILABILITY"}),a.jsxs("strong",{className:"text-lime-primary text-base",children:["● ",p.stock," IN STOCK"]})]})]}),a.jsxs("div",{className:"flex flex-wrap gap-4 pt-2",children:[a.jsx("button",{onClick:()=>{c(p,1)},className:"px-6 py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all",children:"Add to Bag →"}),a.jsx("button",{onClick:()=>e(p.id),className:"px-6 py-3 rounded-xl bg-surface-elevated border border-surface-border text-text-primary font-medium text-xs hover:border-lime-primary/40 transition-colors",children:"Inspect Full Specs"})]})]}),a.jsxs("div",{onClick:()=>e(p.id),className:"lg:col-span-6 relative h-72 sm:h-96 rounded-2xl bg-surface-elevated border border-surface-border flex flex-col items-center justify-center p-8 cursor-pointer group overflow-hidden","data-cursor":"view",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-50 group-hover:opacity-80 transition-opacity"}),a.jsx("img",{src:p.id===101?"/images/laptop.svg":p.id===102?"/images/phone.svg":p.id===103?"/images/headphones.svg":p.id===104?"/images/keyboard.svg":p.id===105?"/images/monitor.svg":p.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:`${p.name} product illustration`,className:"relative z-10 w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"}),a.jsxs("div",{className:"absolute z-20 left-0 right-0 bottom-5 text-center space-y-1 px-4",children:[a.jsxs("div",{className:"text-lg font-bold text-text-primary group-hover:text-lime-primary transition-colors flex items-center justify-center gap-2",children:[a.jsx("span",{children:p.name}),a.jsx(kn,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),a.jsx("span",{className:"text-xs font-mono text-text-muted block",children:"CLICK TO VIEW INTERACTIVE DETAIL"})]})]})]})})]}),a.jsxs("section",{className:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50",children:[a.jsxs("div",{className:"space-y-4 mb-16",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"03 / PRODUCT SIGNALS"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight",children:["EVERY PRODUCT,",a.jsx("br",{}),a.jsx("span",{className:"text-text-secondary",children:"USEFUL SIGNALS."})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-lime-primary/30 transition-all",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"01"}),a.jsx("span",{children:"PERFORMANCE"})]}),a.jsxs("div",{className:"text-3xl font-mono font-bold text-text-primary",children:["M3 ",a.jsx("span",{className:"text-lime-primary text-xl",children:"GRADE"})]}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Silicon architecture benchmarked for intensive development and local assessment workloads."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-lime-primary/30 transition-all",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"02"}),a.jsx("span",{children:"PRICE TRANSPARENCY"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-lime-primary",children:"₹69,999"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Clear pricing before checkout with direct itemized transparency and instant tax derivation."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-blue-electric/30 transition-all",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"03"}),a.jsx("span",{children:"DISPATCH TELEMETRY"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-blue-electric",children:"TODAY"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Direct dispatch from the local inventory node with step-by-step shipment state tracking."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-violet-cool/30 transition-all",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"04"}),a.jsx("span",{children:"COMMUNITY REVIEWS"})]}),a.jsxs("div",{className:"text-3xl font-mono font-bold text-violet-cool",children:["4.8 ",a.jsx("span",{className:"text-base text-text-muted",children:"/ 5.0"})]}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Real community feedback and evaluation submitted by authenticated storefront users."})]})]})]}),a.jsxs("section",{className:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50",children:[a.jsxs("div",{className:"space-y-4 mb-16",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"04 / COMMERCE JOURNEY"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight",children:["DISCOVER → DECIDE →",a.jsx("br",{}),a.jsx("span",{className:"text-text-secondary",children:"MAKE IT YOURS."})]}),a.jsx("p",{className:"text-sm text-text-secondary max-w-lg",children:"Every step is visible, from the initial hardware inspection to final order telemetry."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:[{step:1,title:"DISCOVER",desc:"Browse the hardware catalog and compare key specifications."},{step:2,title:"EXPLORE",desc:"Inspect 3D materials, thermal design and verified community reviews."},{step:3,title:"DECIDE",desc:"Select quantity and configure instant delivery parameters."},{step:4,title:"ORDER",desc:"Seamlessly proceed through checkout with live receipt verification."},{step:5,title:"TRACK",desc:"Inspect order telemetry from payment to local lab delivery."}].map(d=>a.jsxs("div",{onClick:()=>l(d.step),className:`p-5 rounded-2xl border cursor-pointer transition-all ${o===d.step?"bg-surface-elevated border-lime-primary/60 shadow-[0_0_20px_rgba(183,255,106,0.15)]":"bg-surface border-surface-border hover:border-surface-borderHover"}`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:`font-mono text-xs font-bold ${o===d.step?"text-lime-primary":"text-text-muted"}`,children:["0",d.step]}),a.jsx("span",{className:`w-2 h-2 rounded-full ${o===d.step?"bg-lime-primary":"bg-surface-border"}`})]}),a.jsx("h4",{className:"text-sm font-bold text-text-primary tracking-wide",children:d.title}),a.jsx("p",{className:"text-xs text-text-secondary mt-1 leading-relaxed",children:d.desc})]},d.step))})]}),a.jsxs("section",{className:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50",children:[a.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"05 / CURATED CATALOG"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight",children:"THE HARDWARE COLLECTION."})]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:u.map(d=>a.jsx("button",{onClick:()=>s(d),className:`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${i===d?"bg-lime-primary text-bg font-bold shadow-sm":"bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover"}`,children:d},d))})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(d=>a.jsxs("div",{className:"group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1",children:[a.jsxs("div",{onClick:()=>e(d.id),className:"relative h-48 bg-surface-elevated border-b border-surface-border flex items-center justify-center cursor-pointer overflow-hidden p-6","data-cursor":"view",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-30 group-hover:opacity-70 transition-opacity"}),a.jsx("img",{src:d.id===101?"/images/laptop.svg":d.id===102?"/images/phone.svg":d.id===103?"/images/headphones.svg":d.id===104?"/images/keyboard.svg":d.id===105?"/images/monitor.svg":d.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:`${d.name} product illustration`,loading:"lazy",className:"relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"}),a.jsx("div",{className:"absolute z-20 top-3 left-3",children:a.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary",children:d.category})}),a.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-text-muted bg-surface/80 px-2 py-0.5 rounded border border-surface-border",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lime-primary"}),a.jsxs("span",{children:[d.stock," left"]})]})]}),a.jsxs("div",{className:"p-5 space-y-3 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{onClick:()=>e(d.id),className:"text-base font-bold text-text-primary group-hover:text-lime-primary transition-colors cursor-pointer",children:d.name}),a.jsx("p",{className:"text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed",children:d.description})]}),a.jsxs("div",{className:"pt-3 border-t border-surface-border flex items-center justify-between",children:[a.jsxs("div",{className:"font-mono text-base font-bold text-text-primary",children:["₹",d.price.toLocaleString("en-IN")]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>e(d.id),className:"p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium",title:"Inspect details",children:a.jsx(Wl,{className:"w-4 h-4"})}),a.jsxs("button",{onClick:()=>c(d,1),className:"px-3.5 py-1.5 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all",children:[a.jsx(mn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Add"})]})]})]})]})]},d.id))})]}),a.jsx("section",{className:"py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50",children:a.jsxs("div",{className:"rounded-3xl bg-surface border border-surface-border p-8 sm:p-12 lg:p-16 relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-40 pointer-events-none"}),a.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[a.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary animate-pulse"}),a.jsx("span",{className:"font-mono text-xs text-lime-primary uppercase tracking-widest",children:"VULNSHOP / LIVE ASSESSMENT"})]}),a.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-tight",children:["Turn browsing into",a.jsx("br",{}),a.jsx("span",{className:"text-gradient-lime",children:"something measurable."})]}),a.jsx("p",{className:"text-sm text-text-secondary max-w-xl",children:"The entire shopping journey is fully functional. Explore the hardware collection, configure orders, inspect reviews, and test security scenarios."})]}),a.jsxs("div",{className:"lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3",children:[a.jsx("button",{onClick:()=>t("/products"),className:"py-4 px-6 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all text-center shadow-[0_0_24px_rgba(183,255,106,0.25)]",children:"Enter Storefront Catalog →"}),a.jsx("button",{onClick:()=>t("/security"),className:"py-4 px-6 rounded-xl bg-surface-elevated border border-surface-border text-text-primary font-medium text-xs uppercase tracking-wider hover:border-violet-cool/50 hover:text-violet-cool transition-all text-center",children:"View Practical 7 Notes"})]})]})]})})]})},vT=({onSelectProduct:t})=>{const[e,n]=X.useState([]),[r,i]=X.useState("ALL"),[s,o]=X.useState(""),[l,c]=X.useState("featured"),{addItem:u}=Ii();X.useEffect(()=>{wt.getProducts().then(n)},[]);const h=["ALL","LAPTOPS","SMARTPHONES","AUDIO","MONITORS","ACCESSORIES"];let p=e.filter(d=>{const x=r==="ALL"||d.category.toUpperCase()===r,v=!s||d.name.toLowerCase().includes(s.toLowerCase())||d.description.toLowerCase().includes(s.toLowerCase())||d.category.toLowerCase().includes(s.toLowerCase());return x&&v});return l==="price-asc"?p=[...p].sort((d,x)=>d.price-x.price):l==="price-desc"?p=[...p].sort((d,x)=>x.price-d.price):l==="name"&&(p=[...p].sort((d,x)=>d.name.localeCompare(x.name))),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"CATALOG / ACTIVE"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"STOREFRONT."}),a.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Curated precision hardware devices available for assessment and acquisition."})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full md:w-auto",children:[a.jsxs("div",{className:"relative",children:[a.jsx(Ps,{className:"w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",placeholder:"Filter catalog...",value:s,onChange:d=>o(d.target.value),className:"w-full sm:w-64 pl-9 pr-4 py-2 bg-surface border border-surface-border rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50"})]}),a.jsx("div",{className:"relative",children:a.jsxs("select",{value:l,onChange:d=>c(d.target.value),className:"w-full sm:w-44 py-2 px-3 bg-surface border border-surface-border rounded-xl text-xs text-text-secondary focus:outline-none focus:border-lime-primary/50 cursor-pointer",children:[a.jsx("option",{value:"featured",children:"Sort: Featured"}),a.jsx("option",{value:"price-asc",children:"Price: Low to High"}),a.jsx("option",{value:"price-desc",children:"Price: High to Low"}),a.jsx("option",{value:"name",children:"Name: A to Z"})]})})]})]})]}),a.jsx("div",{className:"flex flex-wrap gap-2 pb-2 border-b border-surface-border/60",children:h.map(d=>a.jsx("button",{onClick:()=>i(d),className:`px-4 py-2 rounded-full text-xs font-mono transition-all ${r===d?"bg-lime-primary text-bg font-bold shadow-sm":"bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover"}`,children:d},d))}),p.length>0?a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(d=>a.jsxs("div",{className:"group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1",children:[a.jsxs("div",{onClick:()=>t(d.id),className:"relative h-52 bg-surface-elevated border-b border-surface-border flex items-center justify-center cursor-pointer overflow-hidden p-6","data-cursor":"view",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-30 group-hover:opacity-70 transition-opacity"}),a.jsx("img",{src:d.id===101?"/images/laptop.svg":d.id===102?"/images/phone.svg":d.id===103?"/images/headphones.svg":d.id===104?"/images/keyboard.svg":d.id===105?"/images/monitor.svg":d.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:`${d.name} product illustration`,loading:"lazy",className:"relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"}),a.jsx("div",{className:"absolute top-3 left-3",children:a.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary font-medium",children:d.category})}),a.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-text-muted bg-surface/80 px-2 py-0.5 rounded border border-surface-border",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-lime-primary"}),a.jsxs("span",{children:[d.stock," available"]})]})]}),a.jsxs("div",{className:"p-6 space-y-4 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{onClick:()=>t(d.id),className:"text-lg font-bold text-text-primary group-hover:text-lime-primary transition-colors cursor-pointer",children:d.name}),a.jsx("p",{className:"text-xs text-text-secondary mt-1.5 leading-relaxed line-clamp-2",children:d.description})]}),a.jsxs("div",{className:"pt-4 border-t border-surface-border flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono text-text-muted block",children:"HARDWARE PRICE"}),a.jsxs("div",{className:"font-mono text-base font-bold text-text-primary",children:["₹",d.price.toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>t(d.id),className:"p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium bg-surface-elevated border border-surface-border",title:"Inspect specs",children:a.jsx(Wl,{className:"w-4 h-4"})}),a.jsxs("button",{onClick:()=>u(d,1),className:"px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all shadow-[0_0_12px_rgba(183,255,106,0.2)]",children:[a.jsx(mn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Add to Bag"})]})]})]})]})]},d.id))}):a.jsxs("div",{className:"py-20 text-center rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted",children:a.jsx(Ps,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-text-primary text-lg",children:"NOTHING MATCHED."}),a.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Try resetting the category filter or searching for another term."})]}),a.jsx("button",{onClick:()=>{i("ALL"),o("")},className:"px-4 py-2 rounded-xl bg-lime-primary text-bg font-semibold text-xs",children:"Reset Filters"})]})]})},yT=({onSelectProduct:t})=>{const[e,n]=X.useState(""),[r,i]=X.useState(""),[s,o]=X.useState([]),[l,c]=X.useState(!0),{addItem:u}=Ii(),h=async d=>{i(d);const x=await wt.searchProducts(d);o(x.products)};X.useEffect(()=>{const x=new URLSearchParams(window.location.search).get("q")||"";x?(n(x),h(x)):wt.getProducts().then(o)},[]);const p=d=>{d.preventDefault(),h(e);const x=e?`/search?q=${encodeURIComponent(e)}`:"/search";window.history.pushState({},"",x)};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"DISCOVERY / SEARCH"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"SEARCH CATALOG."}),a.jsx("p",{className:"text-sm text-text-secondary max-w-xl",children:"Search hardware models, specifications, and categories across the entire local inventory."})]}),a.jsx("form",{onSubmit:p,className:"relative max-w-3xl",children:a.jsxs("div",{className:"flex items-center gap-3 p-2 bg-surface border border-surface-border rounded-2xl focus-within:border-lime-primary/50 shadow-xl transition-all",children:[a.jsx(Ps,{className:"w-5 h-5 text-lime-primary ml-3"}),a.jsx("input",{type:"text",value:e,onChange:d=>n(d.target.value),placeholder:"Search laptops, audio, accessories (e.g. AeroBook, Pulse)...",className:"w-full bg-transparent text-text-primary text-sm placeholder:text-text-muted focus:outline-none py-2"}),a.jsx("button",{type:"submit",className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all shrink-0",children:"Search"})]})}),r&&a.jsxs("div",{className:"p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-3",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[a.jsxs("div",{className:"text-sm text-text-secondary",children:["Showing query results for:"," ",l?a.jsx("span",{className:"font-semibold text-lime-primary",dangerouslySetInnerHTML:{__html:r}}):a.jsx("span",{className:"font-semibold text-lime-primary",children:r})]}),a.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[a.jsx("span",{className:"text-text-muted",children:"OWASP Mode:"}),a.jsx("button",{type:"button",onClick:()=>c(!l),className:`px-2.5 py-1 rounded-lg border text-[11px] transition-colors ${l?"bg-amber-500/10 border-amber-500/30 text-amber-300":"bg-emerald-500/10 border-emerald-500/30 text-emerald-300"}`,children:l?"⚠️ Vulnerable (Raw Reflection)":"🛡️ Protected (HTML Escaped)"})]})]}),a.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-mono text-text-muted pt-2 border-t border-surface-border/50",children:[a.jsx(Bs,{className:"w-3.5 h-3.5 text-lime-primary"}),a.jsxs("span",{children:["Burp Suite Target: ",a.jsx("code",{children:"GET /search?q=<payload>"})]})]})]}),s.length>0?a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(d=>a.jsxs("div",{className:"group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1",children:[a.jsxs("div",{onClick:()=>t(d.id),className:"relative h-48 bg-surface-elevated border-b border-surface-border flex items-center justify-center cursor-pointer overflow-hidden p-6","data-cursor":"view",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-30 group-hover:opacity-70 transition-opacity"}),a.jsx("img",{src:d.id===101?"/images/laptop.svg":d.id===102?"/images/phone.svg":d.id===103?"/images/headphones.svg":d.id===104?"/images/keyboard.svg":d.id===105?"/images/monitor.svg":d.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:`${d.name} product illustration`,loading:"lazy",className:"relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"}),a.jsx("div",{className:"absolute top-3 left-3",children:a.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary",children:d.category})})]}),a.jsxs("div",{className:"p-5 space-y-3 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{onClick:()=>t(d.id),className:"text-base font-bold text-text-primary group-hover:text-lime-primary transition-colors cursor-pointer",children:d.name}),a.jsx("p",{className:"text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed",children:d.description})]}),a.jsxs("div",{className:"pt-3 border-t border-surface-border flex items-center justify-between",children:[a.jsxs("div",{className:"font-mono text-base font-bold text-text-primary",children:["₹",d.price.toLocaleString("en-IN")]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>t(d.id),className:"p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium bg-surface-elevated border border-surface-border",title:"Inspect details",children:a.jsx(Wl,{className:"w-4 h-4"})}),a.jsxs("button",{onClick:()=>u(d,1),className:"px-3.5 py-1.5 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all",children:[a.jsx(mn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Add"})]})]})]})]})]},d.id))}):a.jsxs("div",{className:"py-20 text-center rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted",children:a.jsx(Ps,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-text-primary text-lg",children:"NOTHING MATCHED."}),a.jsx("p",{className:"text-xs text-text-secondary mt-1",children:'Try a broader query such as "laptop" or "audio".'})]})]})]})},_T=({productId:t,onNavigate:e})=>{const[n,r]=X.useState(null),[i,s]=X.useState([]),[o,l]=X.useState(1),[c,u]=X.useState(""),[h,p]=X.useState(5),[d,x]=X.useState(!1),[v,g]=X.useState(""),[m,f]=X.useState(""),[y,_]=X.useState("overview"),{user:S}=_r(),{addItem:R}=Ii();X.useEffect(()=>{wt.getProduct(t).then(T=>{r(T.product),s(T.reviews||[])})},[t]);const N=async T=>{if(T.preventDefault(),!c.trim())return;x(!0),g(""),f("");const A=await wt.addReview(t,c,h);A.success&&A.review?(s(w=>[A.review,...w]),u(""),f("Review published to storefront.")):g(A.error||"Failed to post review"),x(!1)};return n?a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[a.jsxs("button",{onClick:()=>e("/products"),className:"flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors",children:[a.jsx(Gl,{className:"w-4 h-4"}),a.jsx("span",{children:"BACK TO COLLECTION"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[a.jsxs("div",{className:"relative h-96 sm:h-[480px] rounded-3xl bg-surface-elevated border border-surface-border flex flex-col items-center justify-center p-8 overflow-hidden group shadow-2xl","data-cursor":"view",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-40 group-hover:opacity-80 transition-opacity"}),a.jsx("img",{src:n.id===101?"/images/laptop.svg":n.id===102?"/images/phone.svg":n.id===103?"/images/headphones.svg":n.id===104?"/images/keyboard.svg":n.id===105?"/images/monitor.svg":n.id===106?"/images/mouse.svg":"/images/laptop.svg",alt:`${n.name} product illustration`,className:"relative z-10 w-full h-[72%] object-contain transition-transform duration-500 group-hover:scale-105"}),a.jsxs("div",{className:"relative z-10 text-center space-y-2 mt-2",children:[a.jsxs("span",{className:"px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary font-mono text-xs",children:[n.category," · SPEC 2026"]}),a.jsx("div",{className:"text-xl font-bold text-text-primary",children:n.name})]}),a.jsxs("div",{className:"absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-surface-border text-xs font-mono text-lime-primary",children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary animate-pulse"}),a.jsxs("span",{children:[n.stock," UNITS AVAILABLE"]})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-4 text-xs font-mono",children:[a.jsxs("div",{className:"p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1",children:[a.jsx(r_,{className:"w-4 h-4 text-lime-primary"}),a.jsx("span",{className:"text-text-muted",children:"CHASSIS"}),a.jsx("strong",{className:"text-text-primary",children:"Titanium Unibody"})]}),a.jsxs("div",{className:"p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1",children:[a.jsx(t_,{className:"w-4 h-4 text-blue-electric"}),a.jsx("span",{className:"text-text-muted",children:"LATENCY"}),a.jsx("strong",{className:"text-text-primary",children:"Ultra-Low 0.8ms"})]}),a.jsxs("div",{className:"p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1",children:[a.jsx(Xl,{className:"w-4 h-4 text-violet-cool"}),a.jsx("span",{className:"text-text-muted",children:"WARRANTY"}),a.jsx("strong",{className:"text-text-primary",children:"3-Yr Lab Grade"})]})]})]}),a.jsxs("div",{className:"lg:col-span-5 space-y-8 sticky top-24",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("span",{className:"text-xs font-mono text-lime-primary uppercase tracking-widest block",children:[n.category," / HARDWARE / 0",n.id%10]}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary",children:n.name}),a.jsxs("div",{className:"text-2xl font-mono font-bold text-lime-primary",children:["₹",n.price.toLocaleString("en-IN")]})]}),a.jsxs("p",{className:"text-sm text-text-secondary leading-relaxed",children:[n.description," Built to military-spec standards with high-efficiency architecture, exceptional thermal stability, and seamless OS integration."]}),a.jsxs("div",{className:"space-y-4 p-6 rounded-2xl bg-surface border border-surface-border",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary",children:"QUANTITY"}),a.jsxs("div",{className:"flex items-center bg-surface-elevated rounded-xl border border-surface-border p-1",children:[a.jsx("button",{type:"button",onClick:()=>l(Math.max(1,o-1)),className:"px-3 py-1 text-text-secondary hover:text-text-primary rounded text-sm font-bold",children:"-"}),a.jsx("span",{className:"font-mono text-sm px-3 text-text-primary font-bold",children:o}),a.jsx("button",{type:"button",onClick:()=>l(o+1),className:"px-3 py-1 text-text-secondary hover:text-text-primary rounded text-sm font-bold",children:"+"})]})]}),a.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-surface-border text-xs font-mono",children:[a.jsx("span",{className:"text-text-muted",children:"ESTIMATED TOTAL"}),a.jsxs("strong",{className:"text-base text-text-primary font-bold",children:["₹",(n.price*o).toLocaleString("en-IN")]})]}),a.jsxs("button",{onClick:()=>R(n,o),className:"w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01]",children:[a.jsx(mn,{className:"w-4 h-4"}),a.jsx("span",{children:"Add to Bag →"})]})]}),a.jsxs("div",{className:"space-y-2.5 text-xs text-text-secondary font-mono",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(b_,{className:"w-4 h-4 text-lime-primary"}),a.jsx("span",{children:"Instant local dispatch within authorized lab boundary"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(v_,{className:"w-4 h-4 text-blue-electric"}),a.jsx("span",{children:"30-Day seamless hardware evaluation return policy"})]})]})]})]}),a.jsxs("div",{className:"pt-8 border-t border-surface-border/60",children:[a.jsxs("div",{className:"flex items-center gap-4 border-b border-surface-border pb-4",children:[a.jsx("button",{onClick:()=>_("overview"),className:`text-sm font-mono tracking-wider transition-colors ${y==="overview"?"text-lime-primary font-bold":"text-text-secondary hover:text-text-primary"}`,children:"01 / HARDWARE OVERVIEW"}),a.jsxs("button",{onClick:()=>_("reviews"),className:`text-sm font-mono tracking-wider transition-colors flex items-center gap-1.5 ${y==="reviews"?"text-lime-primary font-bold":"text-text-secondary hover:text-text-primary"}`,children:[a.jsx("span",{children:"02 / COMMUNITY REVIEWS"}),a.jsx("span",{className:"px-1.5 py-0.2 rounded-full bg-surface-elevated text-[10px] text-lime-primary border border-surface-border",children:i.length})]})]}),y==="overview"&&a.jsxs("div",{className:"py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"PRECISION ARCHITECTURE"}),a.jsx("p",{className:"text-text-secondary leading-relaxed",children:"Designed for consistent high-output workflows without thermal throttling or acoustic interference."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsx("span",{className:"font-mono text-xs text-blue-electric font-bold",children:"SUSTAINED INTEGRITY"}),a.jsx("p",{className:"text-text-secondary leading-relaxed",children:"CNC-machined aluminum alloy and titanium structural ribs provide long-term drop resistance."})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsx("span",{className:"font-mono text-xs text-violet-cool font-bold",children:"ETHICAL ASSESSMENT LAB"}),a.jsx("p",{className:"text-text-secondary leading-relaxed",children:"Each product endpoint includes live API parameter hooks for Burp Suite request interception."})]})]}),y==="reviews"&&a.jsxs("div",{className:"py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[a.jsxs("div",{className:"text-sm font-bold text-text-primary flex items-center gap-2",children:[a.jsx(h_,{className:"w-4 h-4 text-lime-primary"}),a.jsxs("span",{children:["Verified Buyer Reviews (",i.length,")"]})]}),i.length>0?i.map(T=>a.jsxs("div",{className:"p-5 rounded-2xl bg-surface border border-surface-border space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-xs text-lime-primary",children:(T.username||"U")[0].toUpperCase()}),a.jsxs("div",{children:[a.jsx("div",{className:"text-xs font-bold text-text-primary",children:T.username}),a.jsx("span",{className:"text-[10px] font-mono text-text-muted",children:"Verified Customer"})]})]}),a.jsx("div",{className:"flex text-lime-primary text-xs",children:"★".repeat(T.rating||5)})]}),a.jsx("div",{className:"text-xs text-text-secondary leading-relaxed unsafe-review",dangerouslySetInnerHTML:{__html:T.body}})]},T.id)):a.jsx("div",{className:"p-8 text-center rounded-2xl bg-surface border border-surface-border text-xs text-text-secondary",children:"No reviews yet. Be the first to share your evaluation."})]}),a.jsxs("div",{className:"lg:col-span-5 p-6 rounded-2xl bg-surface border border-surface-border space-y-4",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold uppercase",children:"LEAVE AN EVALUATION"}),a.jsx("h3",{className:"text-base font-bold text-text-primary",children:"Share your feedback"})]}),S?a.jsxs("form",{onSubmit:N,className:"space-y-4",children:[v&&a.jsx("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:v}),m&&a.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs",children:m}),a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block mb-1",children:"RATING"}),a.jsxs("select",{value:h,onChange:T=>p(Number(T.target.value)),className:"w-full p-2.5 bg-surface-elevated border border-surface-border rounded-xl text-xs text-text-primary focus:outline-none focus:border-lime-primary/50",children:[a.jsx("option",{value:5,children:"★★★★★ (5 Stars - Exceptional)"}),a.jsx("option",{value:4,children:"★★★★☆ (4 Stars - Great)"}),a.jsx("option",{value:3,children:"★★★☆☆ (3 Stars - Average)"}),a.jsx("option",{value:2,children:"★★☆☆☆ (2 Stars - Mediocre)"}),a.jsx("option",{value:1,children:"★☆☆☆☆ (1 Star - Poor)"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block mb-1",children:"REVIEW CONTENT"}),a.jsx("textarea",{rows:4,value:c,onChange:T=>u(T.target.value),placeholder:"What was your experience with this hardware? (Accepts formatted notes & test payloads)...",className:"w-full p-3 bg-surface-elevated border border-surface-border rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50"})]}),a.jsxs("button",{type:"submit",disabled:d,className:"w-full py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all disabled:opacity-50",children:[a.jsx(y_,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:d?"Posting...":"Submit Review →"})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1",children:[a.jsx("span",{className:"text-amber-400 font-semibold block",children:"⚠️ Practical 7 Stored XSS Target:"}),a.jsxs("span",{children:["Submissions to ",a.jsx("code",{children:"POST /product/:id/review"})," are saved and rendered unescaped."]})]})]}):a.jsxs("div",{className:"p-6 rounded-xl bg-surface-elevated border border-surface-border text-center space-y-3",children:[a.jsx("p",{className:"text-xs text-text-secondary",children:"Sign in to post a hardware evaluation and test stored review workflows."}),a.jsx("button",{onClick:()=>e("/login"),className:"px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Sign in to continue →"})]})]})]})]})]}):a.jsx("div",{className:"max-w-7xl mx-auto px-4 py-24 text-center space-y-4",children:a.jsx("div",{className:"text-xl font-bold text-text-primary",children:"Loading hardware specifications..."})})},ST=({onNavigate:t})=>{const[e,n]=X.useState(""),[r,i]=X.useState(""),[s,o]=X.useState(!1),[l,c]=X.useState(!1),[u,h]=X.useState(!1),[p,d]=X.useState(""),[x,v]=X.useState(!1),{login:g}=_r(),m=async y=>{if(y.preventDefault(),!e.trim())return;h(!0),d("");const _=await g(e,r,l);_.success?(v(!0),setTimeout(()=>{t("/profile")},500)):d(_.error||"Authentication failed. Please verify credentials."),h(!1)},f=(y,_)=>{n(y),i(_)};return a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-surface border border-surface-border overflow-hidden shadow-2xl",children:[a.jsxs("div",{className:"lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-surface-elevated border-b lg:border-b-0 lg:border-r border-surface-border flex flex-col justify-between relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-30 pointer-events-none"}),a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono",children:a.jsx("span",{children:"AUTHENTICATION GATEWAY"})}),a.jsxs("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-[1.08]",children:["YOUR ACCOUNT.",a.jsx("br",{}),a.jsx("span",{className:"text-lime-primary",children:"YOUR COLLECTION."}),a.jsx("br",{}),"YOUR FLOW."]}),a.jsx("p",{className:"text-sm text-text-secondary max-w-md leading-relaxed",children:"Sign in to access your hardware configurations, view real-time delivery telemetry, and participate in verified reviews."})]}),a.jsxs("div",{className:"relative z-10 mt-12 p-5 rounded-2xl bg-surface border border-surface-border space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[a.jsx("span",{className:"text-text-muted",children:"SEED CREDENTIALS"}),a.jsx("span",{className:"text-lime-primary",children:"LOCAL LAB"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[a.jsxs("button",{type:"button",onClick:()=>f("student","student123"),className:"p-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-lime-primary/40 text-left transition-colors",children:[a.jsx("div",{className:"text-text-primary font-bold",children:"student"}),a.jsx("div",{className:"text-[10px] text-text-muted",children:"student123"})]}),a.jsxs("button",{type:"button",onClick:()=>f("admin","admin123"),className:"p-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-violet-cool/40 text-left transition-colors",children:[a.jsx("div",{className:"text-violet-cool font-bold",children:"admin"}),a.jsx("div",{className:"text-[10px] text-text-muted",children:"admin123"})]})]}),a.jsxs("div",{className:"text-[10px] font-mono text-text-muted",children:["SQL Injection payload: ",a.jsx("code",{className:"text-amber-400 font-bold",children:"' or 1=1--"})]})]})]}),a.jsxs("div",{className:"lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase tracking-wider block",children:"PORTAL ACCESS"}),a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Sign in to VulnShop"})]}),p&&a.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2",children:[a.jsx(Ga,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:p})]}),x&&a.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2",children:[a.jsx(Rs,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:"Authentication successful. Redirecting to workspace..."})]}),a.jsxs("form",{onSubmit:m,className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"USERNAME OR IDENTIFIER"}),a.jsx("input",{type:"text",value:e,onChange:y=>n(y.target.value),placeholder:"student, admin, or SQLi payload",required:!0,autoComplete:"off",className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("div",{className:"flex items-center justify-between",children:a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"PASSWORD"})}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:s?"text":"password",value:r,onChange:y=>i(y.target.value),placeholder:"••••••••••••",className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors pr-10"}),a.jsx("button",{type:"button",onClick:()=>o(!s),className:"absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1",children:s?a.jsx(a_,{className:"w-4 h-4"}):a.jsx(Wl,{className:"w-4 h-4"})})]})]}),a.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-surface-border text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2 text-text-secondary font-mono",children:[a.jsx(u_,{className:"w-3.5 h-3.5 text-lime-primary"}),a.jsx("span",{children:"Backend Route"})]}),a.jsx("button",{type:"button",onClick:()=>c(!l),className:`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all ${l?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:l?"🛡️ /login-secure (Safe)":"⚠️ /login (SQLi Unsafe)"})]}),a.jsxs("button",{type:"submit",disabled:u,className:"w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01] disabled:opacity-50",children:[a.jsx("span",{children:u?"Authenticating...":"Continue to Workspace"}),a.jsx(kn,{className:"w-4 h-4"})]})]}),a.jsxs("div",{className:"pt-4 border-t border-surface-border text-center text-xs text-text-secondary",children:["Don't have a local demo account?"," ",a.jsx("button",{onClick:()=>t("/register"),className:"text-lime-primary font-bold hover:underline",children:"Create an account"})]})]})]})})},bT=({onNavigate:t})=>{const[e,n]=X.useState(""),[r,i]=X.useState(""),[s,o]=X.useState(""),[l,c]=X.useState(!1),[u,h]=X.useState(""),[p,d]=X.useState(!1),{register:x}=_r(),v=async g=>{if(g.preventDefault(),!e.trim()||!r.trim()||!s.trim()){h("Please complete all required registration fields.");return}c(!0),h("");const m=await x(e,r,s);m.success?(d(!0),setTimeout(()=>{t("/profile")},500)):h(m.error||"Registration could not be completed."),c(!1)};return a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-surface border border-surface-border overflow-hidden shadow-2xl",children:[a.jsxs("div",{className:"lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-surface-elevated border-b lg:border-b-0 lg:border-r border-surface-border flex flex-col justify-between relative overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 bg-ambient-glow opacity-30 pointer-events-none"}),a.jsxs("div",{className:"relative z-10 space-y-6",children:[a.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono",children:a.jsx("span",{children:"NEW ONBOARDING"})}),a.jsxs("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-[1.08]",children:["JOIN THE",a.jsx("br",{}),a.jsx("span",{className:"text-lime-primary",children:"HARDWARE LAB."})]}),a.jsx("p",{className:"text-sm text-text-secondary max-w-md leading-relaxed",children:"Create an authenticated account to participate in product ordering, write community evaluations, and test vulnerability assessment flows."})]}),a.jsxs("div",{className:"relative z-10 mt-12 p-5 rounded-2xl bg-surface border border-surface-border text-xs font-mono text-text-muted",children:[a.jsx("span",{className:"text-lime-primary font-bold block mb-1",children:"LOCAL INSTANCE DIRECTORY"}),"Accounts are stored in the local server state (`data/users.json`)."]})]}),a.jsxs("div",{className:"lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase tracking-wider block",children:"CREATE IDENTITY"}),a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Create an account"})]}),u&&a.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2",children:[a.jsx(Ga,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:u})]}),p&&a.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2",children:[a.jsx(Rs,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:"Account created successfully. Navigating to dashboard..."})]}),a.jsxs("form",{onSubmit:v,className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"USERNAME"}),a.jsx("input",{type:"text",value:e,onChange:g=>n(g.target.value),placeholder:"e.g. charlie, developer",required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"EMAIL ADDRESS"}),a.jsx("input",{type:"email",value:r,onChange:g=>i(g.target.value),placeholder:"charlie@vulnshop.local",required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"PASSWORD"}),a.jsx("input",{type:"password",value:s,onChange:g=>o(g.target.value),placeholder:"••••••••••••",required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors"})]}),a.jsxs("button",{type:"submit",disabled:l,className:"w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01] disabled:opacity-50",children:[a.jsx(M_,{className:"w-4 h-4"}),a.jsx("span",{children:l?"Creating...":"Register Account"})]})]}),a.jsxs("div",{className:"pt-4 border-t border-surface-border text-center text-xs text-text-secondary",children:["Already registered?"," ",a.jsx("button",{onClick:()=>t("/login"),className:"text-lime-primary font-bold hover:underline",children:"Sign in"})]})]})]})})},MT=({onNavigate:t})=>{const{user:e,refreshUser:n}=_r(),[r,i]=X.useState(""),[s,o]=X.useState(""),[l,c]=X.useState(!1),[u,h]=X.useState(!1),[p,d]=X.useState(null),[x,v]=X.useState(0);if(X.useEffect(()=>{e&&(i(e.email),wt.getOrders().then(f=>v(f.length)))},[e]),!e)return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-24 text-center space-y-4",children:[a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Sign in required"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Please sign in to access your profile settings."}),a.jsx("button",{onClick:()=>t("/login"),className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Go to Sign In →"})]});const g=async f=>{f.preventDefault(),h(!0),d(null);const y=l?s||"SECURE-DEMO-TOKEN":void 0,_=await wt.updateEmail(r,y);_.success?(d({type:"success",text:"Email updated successfully."}),n()):d({type:"error",text:_.error||"Failed to update email."}),h(!1)},m=()=>{const f=new Date().getHours();return f<12?"GOOD MORNING":f<18?"GOOD AFTERNOON":"GOOD EVENING"};return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"IDENTITY & SECURITY"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("h1",{className:"text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:[m(),",",a.jsx("br",{}),a.jsxs("span",{className:"text-lime-primary uppercase",children:[e.username,"."]})]}),a.jsx("p",{className:"text-sm text-text-secondary max-w-lg",children:"Manage your authenticated identity, security parameters, and associated order history."})]}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[a.jsxs("div",{onClick:()=>t("/orders"),className:"p-5 rounded-2xl bg-surface border border-surface-border space-y-2 cursor-pointer hover:border-lime-primary/40 transition-all group",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"ORDERS"}),a.jsx(mn,{className:"w-3.5 h-3.5 text-lime-primary group-hover:scale-110 transition-transform"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-text-primary",children:x}),a.jsxs("span",{className:"text-[11px] font-mono text-lime-primary flex items-center gap-1",children:[a.jsx("span",{children:"View history"}),a.jsx(kn,{className:"w-3 h-3"})]})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"REVIEWS"}),a.jsx(e_,{className:"w-3.5 h-3.5 text-blue-electric"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-text-primary",children:"2"}),a.jsx("span",{className:"text-[11px] font-mono text-text-secondary",children:"Storefront verified"})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"PROFILE"}),a.jsx(E_,{className:"w-3.5 h-3.5 text-violet-cool"})]}),a.jsx("div",{className:"text-xl font-mono font-bold text-lime-primary mt-1",children:"COMPLETE"}),a.jsxs("span",{className:"text-[11px] font-mono text-text-secondary",children:[e.role.toUpperCase()," ROLE"]})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"ACTIVITY"}),a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary animate-pulse"})]}),a.jsx("div",{className:"text-xl font-mono font-bold text-text-primary mt-1",children:"ONLINE"}),a.jsx("span",{className:"text-[11px] font-mono text-text-muted",children:"SESSION ACTIVE"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold uppercase",children:"PROFILE PARAMETERS"}),a.jsx("h3",{className:"text-xl font-bold text-text-primary",children:"Email & Notification Address"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Update the primary destination for order receipts and dispatch notifications."})]}),p&&a.jsxs("div",{className:`p-4 rounded-xl text-xs flex items-center gap-2 ${p.type==="success"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-400":"bg-red-500/10 border border-red-500/30 text-red-400"}`,children:[p.type==="success"?a.jsx(Rs,{className:"w-4 h-4 shrink-0"}):a.jsx(Mg,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:p.text})]}),a.jsxs("form",{onSubmit:g,className:"space-y-4",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-xs font-mono text-text-secondary block",children:"EMAIL ADDRESS"}),a.jsxs("div",{className:"relative",children:[a.jsx(f_,{className:"w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"email",value:r,onChange:f=>i(f.target.value),required:!0,className:"w-full pl-10 pr-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-lime-primary/50 transition-colors"})]})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[a.jsx("span",{className:"text-text-secondary",children:"CSRF PROTECTION MODE"}),a.jsx("button",{type:"button",onClick:()=>c(!l),className:`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${l?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:l?"🛡️ Enforce Anti-CSRF Token":"⚠️ No Anti-CSRF (Vulnerable)"})]}),l&&a.jsx("div",{className:"pt-2",children:a.jsx("input",{type:"text",value:s,onChange:f=>o(f.target.value),placeholder:"Enter anti-CSRF token (default: SECURE-DEMO-TOKEN)",className:"w-full px-3 py-2 bg-surface border border-surface-border rounded-lg text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none"})})]}),a.jsx("button",{type:"submit",disabled:u,className:"py-3 px-6 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all shadow-[0_0_16px_rgba(183,255,106,0.25)] disabled:opacity-50",children:u?"Updating...":"Save Email Changes"})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1",children:[a.jsx("span",{className:"text-amber-400 font-semibold block",children:"⚠️ Practical 7 CSRF Demonstration Target:"}),a.jsxs("span",{children:["The standard endpoint ",a.jsx("code",{children:"POST /profile/email"})," lacks an anti-CSRF token, allowing state changes via cross-origin requests."]})]})]}),a.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[a.jsxs("div",{className:"p-6 rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"w-14 h-14 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-extrabold text-2xl text-lime-primary shadow-inner",children:e.username[0].toUpperCase()}),a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono text-lime-primary uppercase",children:"AUTHENTICATED USER"}),a.jsx("h4",{className:"text-lg font-bold text-text-primary",children:e.username}),a.jsx("div",{className:"text-xs text-text-secondary font-mono",children:e.email})]})]}),a.jsxs("div",{className:"pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono",children:[a.jsx("span",{className:"text-text-muted",children:"ROLE ASSIGNMENT"}),a.jsx("span",{className:"px-2 py-0.5 rounded bg-lime-primary/10 text-lime-primary border border-lime-primary/20",children:e.role})]})]}),a.jsxs("div",{onClick:()=>t("/profile/upload"),className:"p-5 rounded-2xl bg-surface border border-surface-border hover:border-lime-primary/40 transition-all cursor-pointer flex items-center justify-between group",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-surface-elevated text-lime-primary border border-surface-border group-hover:border-lime-primary/40",children:a.jsx(ed,{className:"w-4 h-4"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-sm font-bold text-text-primary group-hover:text-lime-primary transition-colors",children:"Upload Avatar Image"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Upload profile media (Unrestricted file test target)"})]})]}),a.jsx(kn,{className:"w-4 h-4 text-text-muted group-hover:text-lime-primary group-hover:translate-x-1 transition-all"})]}),a.jsxs("div",{onClick:()=>t("/orders"),className:"p-5 rounded-2xl bg-surface border border-surface-border hover:border-blue-electric/40 transition-all cursor-pointer flex items-center justify-between group",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"p-2.5 rounded-xl bg-surface-elevated text-blue-electric border border-surface-border group-hover:border-blue-electric/40",children:a.jsx(mn,{className:"w-4 h-4"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-sm font-bold text-text-primary group-hover:text-blue-electric transition-colors",children:"Order Telemetry & Invoices"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"View past orders and test object-level authorization (IDOR)"})]})]}),a.jsx(kn,{className:"w-4 h-4 text-text-muted group-hover:text-blue-electric group-hover:translate-x-1 transition-all"})]})]})]})]})},ET=({onNavigate:t})=>{const{user:e}=_r(),[n,r]=X.useState(null),[i,s]=X.useState(!1),[o,l]=X.useState(null),[c,u]=X.useState(!1),h=x=>{x.target.files&&x.target.files[0]&&(r(x.target.files[0]),l(null))},p=x=>{x.preventDefault(),u(!1),x.dataTransfer.files&&x.dataTransfer.files[0]&&(r(x.dataTransfer.files[0]),l(null))},d=async x=>{if(x.preventDefault(),!n)return;s(!0),l(null);const v=new FormData;v.append("avatar",n);const g=await wt.uploadAvatar(v);g.success?l({success:!0,filename:g.filename}):l({success:!1,error:g.error||"Upload failed"}),s(!1)};return e?a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("button",{onClick:()=>t("/profile"),className:"flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors",children:[a.jsx(Gl,{className:"w-4 h-4"}),a.jsx("span",{children:"BACK TO ACCOUNT"})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"MEDIA DISPATCH"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"UPLOAD AVATAR."}),a.jsx("p",{className:"text-sm text-text-secondary max-w-lg",children:"Select or drop a file to personalize your authenticated storefront identity."})]}),a.jsxs("div",{className:"p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border space-y-8",children:[a.jsxs("form",{onSubmit:d,className:"space-y-6",children:[a.jsxs("div",{onDragOver:x=>{x.preventDefault(),u(!0)},onDragLeave:()=>u(!1),onDrop:p,className:`relative p-10 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all ${c?"border-lime-primary bg-lime-primary/5":"border-surface-border bg-surface-elevated/60 hover:border-surface-borderHover"}`,children:[a.jsx("input",{type:"file",name:"avatar",onChange:h,className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-surface border border-surface-border flex items-center justify-center text-lime-primary mb-4 shadow-sm",children:a.jsx(ed,{className:"w-8 h-8 stroke-1"})}),a.jsxs("div",{className:"space-y-1",children:[a.jsx("div",{className:"text-sm font-bold text-text-primary",children:n?n.name:"Choose a file or drag & drop it here"}),a.jsx("p",{className:"text-xs text-text-muted font-mono",children:n?`${(n.size/1024).toFixed(1)} KB · Ready for server dispatch`:"PNG, JPG, GIF or arbitrary file payload (Local Practical 7 endpoint)"})]})]}),o&&a.jsxs("div",{className:`p-4 rounded-xl text-xs flex items-center gap-2 ${o.success?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-400":"bg-red-500/10 border border-red-500/30 text-red-400"}`,children:[o.success?a.jsx(Rs,{className:"w-4 h-4 shrink-0"}):a.jsx(Mg,{className:"w-4 h-4 shrink-0"}),a.jsx("span",{children:o.success?`Upload accepted by server. Saved file: ${o.filename}`:o.error})]}),a.jsxs("button",{type:"submit",disabled:!n||i,className:"w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] disabled:opacity-50",children:[a.jsx(ed,{className:"w-4 h-4"}),a.jsx("span",{children:i?"Transmitting to server...":"Upload File to Node →"})]})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono text-text-muted",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[a.jsx(Ga,{className:"w-4 h-4"}),a.jsx("span",{children:"Practical 7: Unrestricted File Upload Demonstration"})]}),a.jsxs("p",{className:"text-text-secondary leading-relaxed",children:["The target endpoint ",a.jsx("code",{children:"POST /profile/upload"})," accepts arbitrary MIME types and file extensions without server-side validation or allow-listing. Intercept this request in Burp Suite to inspect the multipart boundary."]})]})]})]}):a.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-24 text-center space-y-4",children:[a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Sign in required"}),a.jsx("button",{onClick:()=>t("/login"),className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Sign in to Upload Avatar →"})]})},wT=({onSelectOrder:t,onNavigate:e})=>{const{user:n}=_r(),[r,i]=X.useState([]),[s,o]=X.useState(!0);X.useEffect(()=>{n?wt.getOrders().then(c=>{i(c),o(!1)}):o(!1)},[n]);const l=c=>{switch(c.toLowerCase()){case"delivered":return a.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono",children:"Delivered"});case"shipped":return a.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono",children:"Shipped"});default:return a.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono",children:"Processing"})}};return n?a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"ORDER TELEMETRY"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"YOUR ORDERS."}),a.jsx("p",{className:"text-sm text-text-secondary",children:"Track fulfillment status, invoice receipts, and dispatch timelines for hardware purchases."})]}),s?a.jsx("div",{className:"py-12 text-center text-text-muted font-mono text-xs",children:"Loading order history..."}):r.length>0?a.jsx("div",{className:"space-y-4",children:r.map(c=>a.jsxs("div",{onClick:()=>t(c.id),className:"p-6 rounded-2xl bg-surface border border-surface-border hover:border-lime-primary/40 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group","data-cursor":"view",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"w-12 h-12 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-lime-primary text-sm group-hover:border-lime-primary/40 transition-colors",children:["#",c.id]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:"text-sm font-bold text-text-primary",children:["Order #",c.id]}),l(c.status)]}),a.jsxs("div",{className:"text-xs text-text-secondary font-mono mt-1",children:[c.date," · ",c.address]})]})]}),a.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-surface-border",children:[a.jsxs("div",{className:"text-right",children:[a.jsx("span",{className:"text-[10px] font-mono text-text-muted block",children:"TOTAL AMOUNT"}),a.jsxs("strong",{className:"text-base font-mono text-text-primary",children:["₹",c.total.toLocaleString("en-IN")]})]}),a.jsx("div",{className:"p-2 rounded-xl bg-surface-elevated text-text-secondary group-hover:text-lime-primary group-hover:translate-x-1 transition-all",children:a.jsx(kn,{className:"w-4 h-4"})})]})]},c.id))}):a.jsxs("div",{className:"p-12 text-center rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted",children:a.jsx(mn,{className:"w-8 h-8 stroke-1"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-text-primary text-base",children:"NOTHING HERE YET."}),a.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Your first order will appear here."})]}),a.jsx("button",{onClick:()=>e("/products"),className:"px-5 py-2.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-transform hover:scale-105",children:"Explore the collection →"})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface-elevated border border-surface-border text-xs font-mono text-text-muted space-y-2",children:[a.jsx("span",{className:"text-amber-400 font-bold block",children:"⚠️ Practical 7 IDOR (Insecure Direct Object Reference) Target:"}),a.jsxs("p",{className:"text-text-secondary leading-relaxed",children:["The order viewing endpoint trusts the order ID from the URL/API parameter. Test requesting order identifiers like ",a.jsx("code",{children:"#1001"})," (Alice) or ",a.jsx("code",{children:"#1002"})," (Bob) while logged in as ",a.jsx("code",{children:"student"})," to demonstrate unauthorized data disclosure."]})]})]}):a.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-24 text-center space-y-4",children:[a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Sign in required"}),a.jsx("button",{onClick:()=>e("/login"),className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Sign in to view orders →"})]})},TT=({orderId:t,onNavigate:e,onSelectOrder:n})=>{const[r,i]=X.useState(null),[s,o]=X.useState([]),[l,c]=X.useState(!1),[u,h]=X.useState(""),[p,d]=X.useState(!0),[x,v]=X.useState(t.toString()),g=async(y,_)=>{d(!0),h("");const[S,R]=await Promise.all([wt.getOrder(y,_),wt.getProducts()]);o(R),S.order?i(S.order):(h(S.error||"Order access denied or record not found."),i(null)),d(!1)};X.useEffect(()=>{g(t,l),v(t.toString())},[t,l]);const m=y=>{y.preventDefault();const _=parseInt(x,10);isNaN(_)||n(_)},f=y=>s.find(_=>_.id===y);return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("button",{onClick:()=>e("/orders"),className:"flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors",children:[a.jsx(Gl,{className:"w-4 h-4"}),a.jsx("span",{children:"BACK TO ORDERS"})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("form",{onSubmit:m,className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-xs font-mono text-text-muted",children:"Jump to #"}),a.jsx("input",{type:"number",value:x,onChange:y=>v(y.target.value),className:"w-20 px-2.5 py-1 bg-surface border border-surface-border rounded-lg text-xs font-mono text-lime-primary focus:outline-none"}),a.jsx("button",{type:"submit",className:"px-2.5 py-1 bg-surface-elevated border border-surface-border rounded-lg text-xs text-text-primary hover:border-lime-primary/40",children:"Go"})]}),a.jsx("button",{type:"button",onClick:()=>c(!l),className:`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${l?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:l?"🛡️ Secure Auth Check":"⚠️ IDOR Active"})]})]}),p?a.jsxs("div",{className:"py-20 text-center text-text-muted font-mono text-xs",children:["Querying order telemetry for #",t,"..."]}):u?a.jsxs("div",{className:"p-8 rounded-3xl bg-surface border border-red-500/30 text-center space-y-4",children:[a.jsx(Ga,{className:"w-12 h-12 text-red-400 mx-auto"}),a.jsx("h2",{className:"text-xl font-bold text-text-primary",children:"ACCESS RESTRICTED"}),a.jsx("p",{className:"text-xs text-red-400 max-w-md mx-auto",children:u}),a.jsxs("div",{className:"text-[11px] font-mono text-text-muted pt-2",children:["The secure endpoint checks object ownership (",a.jsx("code",{children:"req.user.id === order.userId"}),")."]})]}):r?a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("span",{className:"font-mono text-xs text-lime-primary font-bold",children:["ORDER TELEMETRY / #",r.id]}),a.jsxs("span",{className:"text-xs font-mono text-text-muted",children:["· User ID: ",r.userId]})]}),a.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary mt-1",children:["ORDER #",r.id]}),a.jsxs("p",{className:"text-xs font-mono text-text-secondary mt-1",children:["Placed on ",r.date," · Destination: ",r.address]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-lime-primary animate-pulse"}),a.jsx("span",{className:"font-mono text-sm font-bold text-lime-primary uppercase",children:r.status})]})]}),a.jsxs("div",{className:"space-y-3 pt-2",children:[a.jsx("span",{className:"text-[10px] font-mono text-text-muted uppercase tracking-wider block",children:"FULFILLMENT PIPELINE"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono",children:[a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-lime-primary/30 flex items-center gap-2",children:[a.jsx(Rs,{className:"w-4 h-4 text-lime-primary shrink-0"}),a.jsx("span",{className:"text-text-primary",children:"Order Placed"})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-lime-primary/30 flex items-center gap-2",children:[a.jsx(Rs,{className:"w-4 h-4 text-lime-primary shrink-0"}),a.jsx("span",{className:"text-text-primary",children:"Paid"})]}),a.jsxs("div",{className:`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${r.status==="Processing"||r.status==="Shipped"||r.status==="Delivered"?"border-lime-primary/30 text-lime-primary":"border-surface-border text-text-muted"}`,children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-primary"}),a.jsx("span",{className:"text-text-primary",children:"Processing"})]}),a.jsxs("div",{className:`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${r.status==="Shipped"||r.status==="Delivered"?"border-blue-500/30 text-blue-400":"border-surface-border text-text-muted"}`,children:[a.jsx(Ph,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Shipped"})]}),a.jsxs("div",{className:`p-3 rounded-xl bg-surface-elevated border flex items-center gap-2 ${r.status==="Delivered"?"border-emerald-500/30 text-emerald-400":"border-surface-border text-text-muted"}`,children:[a.jsx(Ph,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Delivered"})]})]})]})]}),a.jsxs("div",{className:"p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[a.jsx("h3",{className:"text-base font-bold text-text-primary font-mono tracking-tight",children:"ITEMIZED INVOICE BREAKDOWN"}),a.jsx("div",{className:"space-y-3 divide-y divide-surface-border",children:r.items.map((y,_)=>{const S=f(y.productId);return a.jsxs("div",{className:"pt-3 first:pt-0 flex items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-xs text-lime-primary",children:(S==null?void 0:S.accent)||"VS"}),a.jsxs("div",{children:[a.jsx("div",{className:"text-sm font-bold text-text-primary",children:(S==null?void 0:S.name)||`Product #${y.productId}`}),a.jsxs("div",{className:"text-xs font-mono text-text-muted",children:[(S==null?void 0:S.category)||"Hardware"," · Qty: ",y.quantity]})]})]}),a.jsxs("div",{className:"text-right font-mono",children:[a.jsxs("div",{className:"text-sm font-bold text-text-primary",children:["₹",(((S==null?void 0:S.price)||0)*y.quantity).toLocaleString("en-IN")]}),a.jsxs("div",{className:"text-[10px] text-text-muted",children:["₹",((S==null?void 0:S.price)||0).toLocaleString("en-IN")," each"]})]})]},_)})}),a.jsxs("div",{className:"pt-6 border-t border-surface-border flex items-center justify-between text-sm font-mono font-bold",children:[a.jsx("span",{className:"text-text-secondary",children:"TOTAL AMOUNT INVOICED"}),a.jsxs("span",{className:"text-xl text-lime-primary font-extrabold",children:["₹",r.total.toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface-elevated border border-surface-border text-xs font-mono text-text-muted space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[a.jsx(Bs,{className:"w-4 h-4"}),a.jsxs("span",{children:["Burp Suite Practical Target: ",a.jsxs("code",{children:["GET /order/",r.id]})]})]}),a.jsxs("p",{className:"text-text-secondary leading-relaxed",children:["When intercepted in Burp Suite, modify the order ID parameter (e.g. change ",a.jsx("code",{children:"1003"})," to ",a.jsx("code",{children:"1001"})," or ",a.jsx("code",{children:"1002"}),"). Notice how the vulnerable server endpoint returns any customer's confidential invoice."]})]})]}):null]})},NT=({onNavigate:t,onSelectOrder:e})=>{const{items:n,subtotal:r,clearCart:i}=Ii(),{user:s}=_r(),[o,l]=X.useState(1),[c,u]=X.useState(s?`${s.username} · Main Lab, Nirma Campus`:"Lab address"),[h,p]=X.useState("Ahmedabad"),[d,x]=X.useState("382481"),[v,g]=X.useState(""),[m,f]=X.useState(!1),[y,_]=X.useState(!1),[S,R]=X.useState("");if(!s)return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-24 text-center space-y-4",children:[a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Sign in required for checkout"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Please sign in with a demo account to place orders."}),a.jsx("button",{onClick:()=>t("/login"),className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Sign In to Continue →"})]});if(n.length===0)return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-24 text-center space-y-4",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted",children:a.jsx(mn,{className:"w-8 h-8 stroke-1"})}),a.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Your bag is empty"}),a.jsx("p",{className:"text-xs text-text-secondary",children:"Select hardware products from the catalog before checkout."}),a.jsx("button",{onClick:()=>t("/products"),className:"px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs",children:"Browse Catalog →"})]});const N=m&&v!==""?Number(v):r,T=async A=>{A.preventDefault(),_(!0),R("");const w={items:n.map(P=>({productId:P.product.id,quantity:P.quantity})),address:`${c}, ${h} ${d}`,customTotal:m&&v!==""?Number(v):void 0},b=await wt.checkout(w);b.success&&b.orderId?(i(),e(b.orderId)):R(b.error||"Failed to place order."),_(!1)};return a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("button",{onClick:()=>t("/products"),className:"flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors",children:[a.jsx(Gl,{className:"w-4 h-4"}),a.jsx("span",{children:"RETURN TO CATALOG"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"COMMERCE CHECKOUT"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary",children:"COMPLETE YOUR ORDER."}),a.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2",children:[a.jsxs("div",{className:`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${o>=1?"bg-surface-elevated border-lime-primary/50 text-lime-primary":"bg-surface border-surface-border text-text-muted"}`,children:[a.jsx("span",{className:"font-bold",children:"01"}),a.jsx("span",{children:"DELIVERY"})]}),a.jsxs("div",{className:`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${o>=2?"bg-surface-elevated border-lime-primary/50 text-lime-primary":"bg-surface border-surface-border text-text-muted"}`,children:[a.jsx("span",{className:"font-bold",children:"02"}),a.jsx("span",{children:"REVIEW"})]}),a.jsxs("div",{className:`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${o===3?"bg-surface-elevated border-lime-primary/50 text-lime-primary":"bg-surface border-surface-border text-text-muted"}`,children:[a.jsx("span",{className:"font-bold",children:"03"}),a.jsx("span",{children:"CONFIRM"})]})]})]}),S&&a.jsx("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:S}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[o===1&&a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase",children:"STEP 01"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Shipping Destination"})]}),a.jsxs("div",{className:"space-y-4 text-xs font-mono",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-text-secondary block",children:"STREET / LAB ADDRESS"}),a.jsx("input",{type:"text",value:c,onChange:A=>u(A.target.value),required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-text-secondary block",children:"CITY / REGION"}),a.jsx("input",{type:"text",value:h,onChange:A=>p(A.target.value),required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx("label",{className:"text-text-secondary block",children:"POSTAL CODE"}),a.jsx("input",{type:"text",value:d,onChange:A=>x(A.target.value),required:!0,className:"w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-xl text-sm font-sans text-text-primary focus:outline-none focus:border-lime-primary/50"})]})]})]}),a.jsx("button",{type:"button",onClick:()=>l(2),className:"w-full py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all",children:a.jsx("span",{children:"Continue to Review →"})})]}),o===2&&a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase",children:"STEP 02"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Order Review & Security Mode"})]}),a.jsx("div",{className:"space-y-3 divide-y divide-surface-border text-xs",children:n.map(A=>a.jsxs("div",{className:"pt-2 first:pt-0 flex justify-between",children:[a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-text-primary",children:A.product.name}),a.jsxs("div",{className:"text-text-muted font-mono",children:["Qty: ",A.quantity]})]}),a.jsxs("div",{className:"font-mono text-text-primary font-bold",children:["₹",(A.product.price*A.quantity).toLocaleString("en-IN")]})]},A.product.id))}),a.jsxs("div",{className:"p-4 rounded-2xl bg-surface-elevated border border-surface-border space-y-3 text-xs font-mono",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-text-secondary",children:"PARAMETER TAMPERING TESTING"}),a.jsx("button",{type:"button",onClick:()=>f(!m),className:`px-2.5 py-1 rounded-lg text-[11px] transition-colors ${m?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-surface border border-surface-border text-text-muted"}`,children:m?"⚠️ Tamper Amount Active":"Normal Server Calc"})]}),m&&a.jsxs("div",{className:"space-y-2 pt-2 border-t border-surface-border",children:[a.jsx("label",{className:"text-text-muted block text-[11px]",children:"Client-Supplied Override Total (₹):"}),a.jsx("input",{type:"number",value:v,onChange:A=>g(A.target.value===""?"":Number(A.target.value)),placeholder:"e.g. 1 (Test parameter tampering in request)",className:"w-full px-3 py-2 bg-surface border border-surface-border rounded-xl text-lime-primary font-bold focus:outline-none"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{type:"button",onClick:()=>l(1),className:"py-3.5 px-5 rounded-xl bg-surface-elevated border border-surface-border text-text-secondary text-xs font-medium",children:"Back"}),a.jsx("button",{type:"button",onClick:()=>l(3),className:"flex-1 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all",children:a.jsx("span",{children:"Proceed to Confirmation →"})})]})]}),o===3&&a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase",children:"STEP 03"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Confirm & Dispatch"})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono",children:[a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-text-muted",children:"RECIPIENT:"}),a.jsxs("span",{className:"text-text-primary font-bold",children:[s.username," (",s.email,")"]})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-text-muted",children:"DESTINATION:"}),a.jsxs("span",{className:"text-text-primary",children:[c,", ",h]})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"text-text-muted",children:"TOTAL PAYABLE:"}),a.jsxs("span",{className:"text-lime-primary font-bold",children:["₹",N.toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{type:"button",onClick:()=>l(2),className:"py-3.5 px-5 rounded-xl bg-surface-elevated border border-surface-border text-text-secondary text-xs font-medium",children:"Back"}),a.jsxs("button",{type:"button",onClick:T,disabled:y,className:"flex-1 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_20px_rgba(183,255,106,0.3)] disabled:opacity-50",children:[a.jsx(i_,{className:"w-4 h-4"}),a.jsx("span",{children:y?"Processing Order...":"Authorize & Place Order →"})]})]})]})]}),a.jsxs("div",{className:"lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-xs font-mono text-lime-primary uppercase",children:"SUMMARY"}),a.jsx("h3",{className:"text-base font-bold text-text-primary",children:"Cart Breakdown"})]}),a.jsx("div",{className:"space-y-3 divide-y divide-surface-border text-xs",children:n.map(A=>a.jsxs("div",{className:"pt-3 first:pt-0 flex justify-between",children:[a.jsxs("div",{children:[a.jsx("div",{className:"font-bold text-text-primary",children:A.product.name}),a.jsxs("div",{className:"text-text-muted font-mono",children:["Qty: ",A.quantity]})]}),a.jsxs("div",{className:"font-mono text-text-primary font-bold",children:["₹",(A.product.price*A.quantity).toLocaleString("en-IN")]})]},A.product.id))}),a.jsxs("div",{className:"pt-4 border-t border-surface-border space-y-2 text-xs font-mono",children:[a.jsxs("div",{className:"flex justify-between text-text-secondary",children:[a.jsx("span",{children:"SUBTOTAL"}),a.jsxs("span",{className:"text-text-primary",children:["₹",r.toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"flex justify-between text-text-secondary",children:[a.jsx("span",{children:"DISPATCH"}),a.jsx("span",{className:"text-lime-primary",children:"FREE LOCAL LAB"})]}),a.jsxs("div",{className:"flex justify-between text-sm font-bold text-text-primary pt-2 border-t border-surface-border",children:[a.jsx("span",{children:"TOTAL"}),a.jsxs("span",{className:"text-lime-primary text-base",children:["₹",N.toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-amber-400 font-bold",children:[a.jsx(Bs,{className:"w-3.5 h-3.5"}),a.jsxs("span",{children:["Burp Target: ",a.jsx("code",{children:"POST /checkout"})]})]}),a.jsx("p",{children:"Capture the HTTP POST request to test modifying quantity or product prices before server insertion."})]})]})]})]})},AT=({onNavigate:t})=>{const{user:e}=_r(),[n,r]=X.useState([]),[i,s]=X.useState([]),[o,l]=X.useState([]),[c,u]=X.useState(!1),[h,p]=X.useState(""),[d,x]=X.useState(!0),v=async m=>{x(!0),p("");const f=await wt.getAdminData(m);f.success?(r(f.users||[]),s(f.orders||[]),l(f.products||[])):p(f.error||"Access denied: Administrator authorization required."),x(!1)};X.useEffect(()=>{v(c)},[c]);const g=i.reduce((m,f)=>m+(f.total||0),0);return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary font-bold",children:"OPERATIONS / CONTROL CENTER"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"ADMIN CONSOLE."}),a.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Storefront operational telemetry, user management, and authorization control."})]}),a.jsx("button",{type:"button",onClick:()=>u(!c),className:`px-4 py-2 rounded-xl text-xs font-mono transition-colors self-start md:self-auto ${c?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:c?"🛡️ /admin-secure (Role Enforced)":"⚠️ /admin (Broken Access Control)"})]})]}),d?a.jsx("div",{className:"py-20 text-center font-mono text-xs text-text-muted",children:"Loading operations telemetry..."}):h?a.jsxs("div",{className:"p-12 rounded-3xl bg-surface border border-red-500/30 text-center space-y-4",children:[a.jsx(Ga,{className:"w-12 h-12 text-red-400 mx-auto"}),a.jsx("h2",{className:"text-xl font-bold text-text-primary",children:"403 FORBIDDEN"}),a.jsx("p",{className:"text-xs text-red-400 max-w-md mx-auto",children:h}),a.jsxs("p",{className:"text-[11px] font-mono text-text-muted",children:["The secure route enforces ",a.jsx("code",{children:"req.user.role === 'admin'"})," on the server."]})]}):a.jsxs("div",{className:"space-y-10",children:[a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"TOTAL REVENUE"}),a.jsx(s_,{className:"w-4 h-4 text-lime-primary"})]}),a.jsxs("div",{className:"text-3xl font-mono font-bold text-lime-primary",children:["₹",g.toLocaleString("en-IN")]}),a.jsx("span",{className:"text-[10px] font-mono text-text-secondary",children:"Gross demo fulfillment"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"ORDER RECORDS"}),a.jsx(mn,{className:"w-4 h-4 text-blue-electric"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-text-primary",children:i.length}),a.jsx("span",{className:"text-[10px] font-mono text-text-secondary",children:"Tracked fulfillment units"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"USERS DIRECTORY"}),a.jsx(w_,{className:"w-4 h-4 text-violet-cool"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-text-primary",children:n.length}),a.jsx("span",{className:"text-[10px] font-mono text-text-secondary",children:"Registered lab accounts"})]}),a.jsxs("div",{className:"p-6 rounded-2xl bg-surface border border-surface-border space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-text-muted",children:[a.jsx("span",{children:"ACTIVE PRODUCTS"}),a.jsx(x_,{className:"w-4 h-4 text-lime-primary"})]}),a.jsx("div",{className:"text-3xl font-mono font-bold text-text-primary",children:o.length}),a.jsx("span",{className:"text-[10px] font-mono text-text-secondary",children:"Catalog inventory nodes"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[a.jsxs("div",{className:"lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary uppercase",children:"CATALOG SPREAD"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Hardware Category Breakdown"}),a.jsx("div",{className:"space-y-3 pt-2",children:[{name:"Laptops",count:1,pct:20,color:"bg-lime-primary"},{name:"Smartphones",count:1,pct:20,color:"bg-blue-electric"},{name:"Audio",count:1,pct:20,color:"bg-violet-cool"},{name:"Monitors",count:1,pct:20,color:"bg-amber-400"},{name:"Accessories",count:2,pct:40,color:"bg-emerald-400"}].map(m=>a.jsxs("div",{className:"space-y-1",children:[a.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[a.jsx("span",{className:"text-text-secondary",children:m.name}),a.jsxs("span",{className:"text-text-primary font-bold",children:[m.count," units (",m.pct,"%)"]})]}),a.jsx("div",{className:"w-full h-2 bg-surface-elevated rounded-full overflow-hidden",children:a.jsx("div",{className:`h-full ${m.color}`,style:{width:`${m.pct}%`}})})]},m.name))})]}),a.jsxs("div",{className:"lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsx("span",{className:"font-mono text-xs text-blue-electric uppercase",children:"ORDER PIPELINE"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Recent Order Activity"}),a.jsx("div",{className:"space-y-3 pt-2",children:i.map(m=>a.jsxs("div",{className:"p-3.5 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-between text-xs font-mono",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"font-bold text-text-primary",children:["Order #",m.id," · ",m.address]}),a.jsx("span",{className:"text-[10px] text-text-muted",children:m.date})]}),a.jsxs("div",{className:"text-right",children:[a.jsxs("span",{className:"font-bold text-lime-primary block",children:["₹",m.total.toLocaleString("en-IN")]}),a.jsx("span",{className:"text-[10px] text-text-secondary",children:m.status})]})]},m.id))})]})]}),a.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-6",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("span",{className:"font-mono text-xs text-lime-primary uppercase",children:"AUTHENTICATION REGISTRY"}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:"Registered Accounts"})]}),a.jsxs("span",{className:"text-xs font-mono text-text-muted",children:[n.length," IDENTITIES"]})]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-surface-border text-text-muted",children:[a.jsx("th",{className:"pb-3 px-3",children:"USER ID"}),a.jsx("th",{className:"pb-3 px-3",children:"USERNAME"}),a.jsx("th",{className:"pb-3 px-3",children:"EMAIL ADDRESS"}),a.jsx("th",{className:"pb-3 px-3",children:"ASSIGNED ROLE"})]})}),a.jsx("tbody",{className:"divide-y divide-surface-border",children:n.map(m=>a.jsxs("tr",{className:"hover:bg-surface-elevated/50 transition-colors",children:[a.jsxs("td",{className:"py-3 px-3 text-text-muted",children:["#",m.id]}),a.jsx("td",{className:"py-3 px-3 font-bold text-text-primary",children:m.username}),a.jsx("td",{className:"py-3 px-3 text-text-secondary",children:m.email}),a.jsx("td",{className:"py-3 px-3",children:a.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] ${m.role==="admin"?"bg-violet-cool/10 text-violet-cool border border-violet-cool/20 font-bold":"bg-surface-elevated text-lime-primary border border-surface-border"}`,children:m.role.toUpperCase()})})]},m.id))})]})})]}),a.jsxs("div",{className:"p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-2 text-xs font-mono text-text-muted",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[a.jsx(Bs,{className:"w-4 h-4"}),a.jsxs("span",{children:["Practical 7 Broken Access Control: ",a.jsx("code",{children:"GET /admin"})]})]}),a.jsxs("p",{className:"text-text-secondary leading-relaxed",children:["In the vulnerable mode, any non-admin account (such as ",a.jsx("code",{children:"student"})," or ",a.jsx("code",{children:"alice"}),") can access ",a.jsx("code",{children:"/admin"})," because authorization boundaries are missing on the server route. Toggle the secure mode to see server-side role validation."]})]})]})]})},CT=({onNavigate:t})=>{const e=[{id:"01",title:"SQL Injection (SQLi)",route:"POST /login",uiPath:"/login",desc:"Unsanitized user credentials are used in authentication logic. An authentication bypass payload triggers unconditional truth.",payload:"' or 1=1--",mitigation:"Implement parameterized SQL queries / prepared statements with strict input type checking."},{id:"02",title:"Reflected Cross-Site Scripting (XSS)",route:"GET /search?q=",uiPath:"/search",desc:"Search query parameter is reflected back into the DOM response without contextual HTML character encoding.",payload:"<img src=x onerror=alert('Reflected-XSS')>",mitigation:"Context-aware output encoding (e.g. DOM textContent or HTML escaping) and Content Security Policy (CSP)."},{id:"03",title:"Stored Cross-Site Scripting (XSS)",route:"POST /product/:id/review",uiPath:"/product/101",desc:"Product evaluations submitted by users are persisted in the reviews store and rendered unescaped to other viewers.",payload:"<b style='color:#b7ff6a'>[Verified Tester]</b> <i>Stored Review</i>",mitigation:"HTML sanitization with DOMPurify, server-side entity encoding, and strict CSP."},{id:"04",title:"Insecure Direct Object References (IDOR)",route:"GET /order/:id",uiPath:"/order/1001",desc:"The server retrieves order invoices based solely on the client-supplied ID without verifying ownership against session context.",payload:"Modify order ID to #1001 or #1002 in URL or Burp Suite",mitigation:"Enforce object-level access control: check req.user.id === order.userId on every request."},{id:"05",title:"Broken Access Control",route:"GET /admin",uiPath:"/admin",desc:"Administrative operations console is accessible without server-side role validation, disclosing full user records.",payload:"Access /admin while signed in as student or unauthenticated",mitigation:'Server-side RBAC middleware ensuring req.user.role === "admin".'},{id:"06",title:"Cross-Site Request Forgery (CSRF)",route:"POST /profile/email",uiPath:"/profile",desc:"State-changing profile updates lack anti-CSRF synchronizer tokens, enabling unauthorized cross-origin requests.",payload:"HTML form submission from external domain to /profile/email",mitigation:"Anti-CSRF synchronizer tokens, SameSite=Lax/Strict cookie attributes, and Origin header verification."},{id:"07",title:"Unrestricted File Upload",route:"POST /profile/upload",uiPath:"/profile/upload",desc:"Avatar endpoint accepts arbitrary MIME types and file extensions without validation or quarantine.",payload:"Upload non-image scripts or executables via multipart form",mitigation:"Allow-list file extension verification, MIME inspection, random filename hashing, and dedicated storage CDN."},{id:"08",title:"Parameter Tampering (Client Trust)",route:"POST /checkout",uiPath:"/checkout",desc:"Order total and product quantities are trusted directly from client request payload instead of server catalog pricing.",payload:"Modify quantity or customTotal in POST request body",mitigation:"Derive financial totals and inventory availability exclusively on the server."},{id:"09",title:"Weak Authentication / Lack of Rate Limiting",route:"POST /login",uiPath:"/login",desc:"Login endpoint applies no throttling, lockouts, or rate limits for consecutive failed authentication attempts.",payload:"Burp Suite Intruder credential brute-forcing",mitigation:"IP and username rate-limiting (e.g. express-rate-limit), exponential backoff, and MFA."},{id:"10",title:"Insecure Session Cookie Configuration",route:"Set-Cookie: vulnshop_session",uiPath:"/login",desc:"Session identifier token uses short entropy and lacks strict Secure/SameSite flags in HTTP lab demo mode.",payload:"Inspect Cookie headers in browser devtools or proxy",mitigation:"Issue cryptographically secure tokens with Secure, HttpOnly, SameSite=Strict, and server expiration."}];return a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"font-mono text-xs text-violet-cool font-bold",children:"ETHICAL HACKING / PRACTICAL 7"}),a.jsx("span",{className:"h-px w-12 bg-surface-border"})]}),a.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary",children:"VULNERABILITY MATRIX."}),a.jsx("p",{className:"text-sm text-text-secondary max-w-2xl leading-relaxed",children:"VulnShop embeds 10 authentic OWASP vulnerabilities inside a legitimate technology commerce experience. All targets are designed for local security assessment and proxy interception with Burp Suite."})]}),a.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-3 text-lime-primary",children:[a.jsx(Bs,{className:"w-5 h-5"}),a.jsx("span",{className:"font-mono text-xs font-bold uppercase tracking-widest",children:"BURP SUITE ASSESSMENT WORKFLOW"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-text-secondary",children:[a.jsxs("div",{className:"p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1",children:[a.jsx("span",{className:"text-text-primary font-bold",children:"01. Proxy Setup"}),a.jsxs("p",{className:"text-[11px] text-text-muted",children:["Configure browser proxy to ",a.jsx("code",{children:"127.0.0.1:8080"})," to capture traffic."]})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1",children:[a.jsx("span",{className:"text-text-primary font-bold",children:"02. Intercept & Modify"}),a.jsx("p",{className:"text-[11px] text-text-muted",children:"Capture normal commerce requests, modify parameters, and observe response."})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-1",children:[a.jsx("span",{className:"text-text-primary font-bold",children:"03. Dual Endpoints"}),a.jsxs("p",{className:"text-[11px] text-text-muted",children:["Compare vulnerable routes with secure ",a.jsx("code",{children:"-secure"})," companion routes."]})]})]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.map(n=>a.jsxs("div",{className:"p-6 rounded-3xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all space-y-4 flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"font-mono text-xs text-lime-primary font-bold",children:["VECTOR / ",n.id]}),a.jsx("span",{className:"px-2 py-0.5 rounded bg-surface-elevated text-[10px] font-mono text-text-muted border border-surface-border",children:n.route})]}),a.jsx("h3",{className:"text-lg font-bold text-text-primary",children:n.title}),a.jsx("p",{className:"text-xs text-text-secondary leading-relaxed",children:n.desc}),a.jsxs("div",{className:"p-3 rounded-xl bg-surface-elevated border border-surface-border space-y-1 font-mono text-xs",children:[a.jsx("span",{className:"text-amber-400 text-[10px] font-bold block",children:"TEST DEMONSTRATION PAYLOAD:"}),a.jsx("code",{className:"text-text-primary text-[11px] break-all",children:n.payload})]}),a.jsxs("div",{className:"pt-2 text-xs font-mono text-text-muted",children:[a.jsx("span",{className:"text-emerald-400 font-bold block mb-0.5",children:"REMEDIATION / FIX:"}),a.jsx("span",{className:"text-[11px] text-text-secondary leading-relaxed",children:n.mitigation})]})]}),a.jsxs("div",{className:"pt-4 border-t border-surface-border flex items-center justify-between",children:[a.jsxs("button",{onClick:()=>t(n.uiPath),className:"px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all",children:[a.jsx("span",{children:"Test in UI"}),a.jsx(kn,{className:"w-3.5 h-3.5"})]}),a.jsxs("span",{className:"text-[10px] font-mono text-text-muted",children:["Route: ",n.uiPath]})]})]},n.id))})]})},RT=({onNavigate:t})=>a.jsxs("div",{className:"min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6",children:[a.jsxs("div",{className:"relative",children:[a.jsx("span",{className:"text-8xl sm:text-9xl font-mono font-extrabold text-surface-border select-none",children:"404"}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsx("span",{className:"font-mono text-xs text-lime-primary px-3 py-1 rounded-full bg-surface border border-surface-border",children:"NODE NOT FOUND"})})]}),a.jsxs("div",{className:"space-y-2 max-w-md",children:[a.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary",children:["THIS PAGE",a.jsx("br",{}),a.jsx("span",{className:"text-text-secondary",children:"DIDN'T MAKE THE CUT."})]}),a.jsx("p",{className:"text-xs text-text-muted leading-relaxed font-mono",children:"The requested route or hardware identifier does not exist in the active VulnShop catalog."})]}),a.jsxs("button",{onClick:()=>t("/"),className:"px-6 py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-lime-secondary transition-all hover:scale-105",children:[a.jsx("span",{children:"Back to VulnShop Storefront"}),a.jsx(kn,{className:"w-4 h-4"})]})]}),PT=()=>{const[t,e]=X.useState(window.location.pathname),[n,r]=X.useState(!1),[i,s]=X.useState(!1);X.useEffect(()=>{const h=()=>{e(window.location.pathname)};return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[]);const o=h=>{window.history.pushState({},"",h),e(h),window.scrollTo({top:0,behavior:"smooth"})},l=h=>{o(`/product/${h}`)},c=h=>{o(`/order/${h}`)},u=()=>{if(t==="/"||t==="")return a.jsx(gT,{onNavigate:o,onSelectProduct:l});if(t==="/products")return a.jsx(vT,{onNavigate:o,onSelectProduct:l});if(t.startsWith("/search"))return a.jsx(yT,{onNavigate:o,onSelectProduct:l});if(t==="/login")return a.jsx(ST,{onNavigate:o});if(t==="/register")return a.jsx(bT,{onNavigate:o});if(t==="/profile")return a.jsx(MT,{onNavigate:o});if(t==="/profile/upload")return a.jsx(ET,{onNavigate:o});if(t==="/orders")return a.jsx(wT,{onNavigate:o,onSelectOrder:c});if(t==="/checkout")return a.jsx(NT,{onNavigate:o,onSelectOrder:c});if(t==="/admin")return a.jsx(AT,{onNavigate:o});if(t==="/security")return a.jsx(CT,{onNavigate:o});const h=t.match(/^\/product\/(\d+)/);if(h){const d=parseInt(h[1],10);return a.jsx(_T,{productId:d,onNavigate:o})}const p=t.match(/^\/order\/(\d+)/);if(p){const d=parseInt(p[1],10);return a.jsx(TT,{orderId:d,onNavigate:o,onSelectOrder:c})}return a.jsx(RT,{onNavigate:o})};return a.jsx($y,{children:a.jsx(Ky,{children:a.jsxs("div",{className:"min-h-screen flex flex-col bg-bg text-text-primary selection:bg-lime-primary selection:text-bg",children:[a.jsx(P_,{}),!i&&a.jsx(L_,{onComplete:()=>s(!0)}),a.jsx(N_,{onOpenSearch:()=>r(!0),onNavigate:o,currentPath:t}),a.jsx("main",{className:"flex-1",children:u()}),a.jsx(C_,{isOpen:n,onClose:()=>r(!1),onSelectProduct:l,onNavigate:o}),a.jsx(R_,{onNavigate:o}),a.jsx(A_,{onNavigate:o})]})})})};try{let t=function(n){e.raf(n),requestAnimationFrame(t)};const e=new qy({duration:1.2,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0});requestAnimationFrame(t)}catch(t){console.warn("Lenis smooth scroll initialized in fallback mode",t)}ou.createRoot(document.getElementById("root")).render(a.jsx(Av.StrictMode,{children:a.jsx(PT,{})}));
