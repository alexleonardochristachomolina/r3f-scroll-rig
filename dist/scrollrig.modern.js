import e,{useLayoutEffect as r,useEffect as t,forwardRef as n,useMemo as o,useRef as i,Fragment as a,cloneElement as l,useState as c,useCallback as s,memo as u,useImperativeHandle as p}from"react";import{useThree as f,invalidate as d,useFrame as m,Canvas as h,createPortal as y,useLoader as g,addEffect as v}from"@react-three/fiber";import{ResizeObserver as b}from"@juggle/resize-observer";import{parse as w}from"query-string";import S from"zustand";import E from"react-merge-refs";import{Vector2 as O,Color as R,Scene as C,MathUtils as x,DefaultLoadingManager as T,TextureLoader as I,ImageBitmapLoader as P,Texture as j,CanvasTexture as M}from"three";import{useInView as k}from"react-intersection-observer";import _ from"debounce";import A from"vecn";import{suspend as $}from"suspend-react";import V from"supports-webp";import L from"fast-deep-equal";import D from"@studio-freight/lenis";function F(){return F=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},F.apply(this,arguments)}function U(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function N(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}const z="undefined"!=typeof window?r:t,q={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},W=S(e=>({debug:!1,scaleMultiplier:q.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:q.PRIORITY_GLOBAL,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:()=>e(()=>({globalRenderQueue:!1})),isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:(r,t,n={})=>e(({canvasChildren:e})=>Object.getOwnPropertyDescriptor(e,r)?(e[r].instances+=1,e[r].props.inactive=!1,{canvasChildren:e}):{canvasChildren:F({},e,{[r]:{mesh:t,props:n,instances:1}})}),updateCanvas:(r,t)=>e(({canvasChildren:e})=>{if(!e[r])return;const{[r]:{mesh:n,props:o,instances:i}}=e;return{canvasChildren:F({},e,{[r]:{mesh:n,props:F({},o,t),instances:i}})}}),removeFromCanvas:(r,t=!0)=>e(({canvasChildren:e})=>{var n;return(null==(n=e[r])?void 0:n.instances)>1?(e[r].instances-=1,{canvasChildren:e}):t?{canvasChildren:U(e,[r].map(N))}:(e[r].instances=0,e[r].props.inactive=!0,{canvasChildren:F({},e)})}),pageReflow:0,requestReflow:()=>{e(e=>({pageReflow:e.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:e=>window.scrollTo(0,e),onScroll:()=>()=>{}})),Y=()=>{const e=W(e=>e.requestReflow);return t(()=>{"fonts"in document&&document.fonts.ready.then(()=>{((e,{timeout:r=100}={})=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:r}):setTimeout(e,0)})(e)})},[]),null},Q=["makeDefault"],B=n((r,t)=>{let{makeDefault:n=!1}=r,a=U(r,Q);const l=f(e=>e.set),c=f(e=>e.camera),s=f(e=>e.size),u=f(e=>e.viewport),p=W(e=>e.pageReflow),d=W(e=>e.scaleMultiplier),m=o(()=>Math.max(s.width*d,s.height*d),[s,p,d]),h=i(null);return z(()=>{const e=s.height*d;h.current.aspect=s.width*d/e,h.current.fov=180/Math.PI*2*Math.atan(e/(2*h.current.position.z)),h.current.lookAt(0,0,0),h.current.updateProjectionMatrix(),h.current.updateMatrixWorld(),u.getCurrentViewport()},[m,s,d]),z(()=>{if(n&&h.current){const e=c;return l({camera:h.current}),()=>l({camera:e})}},[c,h,n,l]),e.createElement("perspectiveCamera",F({ref:E([h,t]),position:[0,0,m],onUpdate:e=>e.updateProjectionMatrix(),near:.1,far:2*m},a))}),G=["makeDefault"],H=n((r,t)=>{let{makeDefault:n=!1}=r,a=U(r,G);const l=f(e=>e.set),c=f(e=>e.camera),s=f(e=>e.size),u=W(e=>e.pageReflow),p=W(e=>e.scaleMultiplier),d=o(()=>Math.max(s.width*p,s.height*p),[s,u,p]),m=i(null);return z(()=>{m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld()},[d,s]),z(()=>{if(n&&m.current){const e=c;return l({camera:m.current}),()=>l({camera:e})}},[c,m,n,l]),e.createElement("orthographicCamera",F({left:s.width*p/-2,right:s.width*p/2,top:s.height*p/2,bottom:s.height*p/-2,far:2*d,position:[0,0,d],near:.001,ref:E([m,t]),onUpdate:e=>e.updateProjectionMatrix()},a))});function J(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(e=>J(e,r)))}const X=new O,K=(e=[0])=>{W.getState().globalRenderQueue=W.getState().globalRenderQueue||[0],W.getState().globalRenderQueue=[...W.getState().globalRenderQueue||[],...e]},Z=({gl:e,scene:r,camera:t,left:n,top:o,width:i,height:a,layer:l=0,autoClear:c=!1,clearDepth:s=!0})=>{if(!r||!t)return;const u=e.autoClear;e.autoClear=c,e.setScissor(n,o,i,a),e.setScissorTest(!0),t.layers.set(l),s&&e.clearDepth(),e.render(r,t),e.setScissorTest(!1),e.autoClear=u},ee=({gl:e,scene:r,camera:t,left:n,top:o,width:i,height:a,layer:l=0,scissor:c=!0,autoClear:s=!1,clearDepth:u=!0})=>{if(!r||!t)return;const p=e.autoClear;e.getSize(X),e.autoClear=s,e.setViewport(n,o,i,a),e.setScissor(n,o,i,a),e.setScissorTest(c),t.layers.set(l),u&&e.clearDepth(),e.render(r,t),e.setScissorTest(!1),e.setViewport(0,0,X.x,X.y),e.autoClear=p},re=(e,r,t=0,n)=>{e&&r&&(q.preloadQueue.push(o=>{o.setScissorTest(!1),J(e,!1),r.layers.set(t),o.render(e,r),J(e,!0),n&&n()}),d())},te=()=>{const e=W(e=>e.isCanvasAvailable),r=W(e=>e.hasSmoothScrollbar),n=W(e=>e.requestReflow),o=W(e=>e.debug),i=W(e=>e.scaleMultiplier);return t(()=>{o&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:o,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:i,preloadScene:re,requestRender:K,renderScissor:Z,renderViewport:ee,reflow:n}},ne=({children:r})=>{const n=W(e=>e.canvasChildren),o=te();return t(()=>{Object.keys(n).length||(o.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.requestRender(),d())},[n]),o.debug&&console.log("GlobalChildren",Object.keys(n).length),e.createElement(e.Fragment,null,r,Object.keys(n).map(r=>{const{mesh:t,props:i}=n[r];return"function"==typeof t?e.createElement(a,{key:r},t(F({key:r},o,i))):l(t,F({key:r},i))}))},oe=()=>{const e=f(e=>e.gl),r=f(e=>e.frameloop),t=W(e=>e.globalClearDepth),n=W(e=>e.globalAutoClear),o=W(e=>e.globalPriority),i=te();return z(()=>{e.debug.checkShaderErrors=i.debug},[i.debug]),m(()=>{q.preloadQueue.length&&(e.autoClear=!1,q.preloadQueue.forEach(r=>r(e)),e.clear(),q.preloadQueue=[],e.autoClear=!0,i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),d())},q.PRIORITY_PRELOAD),m(({camera:o,scene:i})=>{const a=W.getState().globalRenderQueue;("always"===r||a)&&(e.autoClear=n,o.layers.disableAll(),a?a.forEach(e=>{o.layers.enable(e)}):o.layers.enable(0),t&&e.clearDepth(),e.render(i,o),e.autoClear=!0),W.getState().clearGlobalRenderQueue()},o),null};function ie(e){var r={exports:{}};return e(r,r.exports),r.exports}var ae="function"==typeof Symbol&&Symbol.for,le=ae?Symbol.for("react.element"):60103,ce=ae?Symbol.for("react.portal"):60106,se=ae?Symbol.for("react.fragment"):60107,ue=ae?Symbol.for("react.strict_mode"):60108,pe=ae?Symbol.for("react.profiler"):60114,fe=ae?Symbol.for("react.provider"):60109,de=ae?Symbol.for("react.context"):60110,me=ae?Symbol.for("react.async_mode"):60111,he=ae?Symbol.for("react.concurrent_mode"):60111,ye=ae?Symbol.for("react.forward_ref"):60112,ge=ae?Symbol.for("react.suspense"):60113,ve=ae?Symbol.for("react.suspense_list"):60120,be=ae?Symbol.for("react.memo"):60115,we=ae?Symbol.for("react.lazy"):60116,Se=ae?Symbol.for("react.block"):60121,Ee=ae?Symbol.for("react.fundamental"):60117,Oe=ae?Symbol.for("react.responder"):60118,Re=ae?Symbol.for("react.scope"):60119;function Ce(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case le:switch(e=e.type){case me:case he:case se:case pe:case ue:case ge:return e;default:switch(e=e&&e.$$typeof){case de:case ye:case we:case be:case fe:return e;default:return r}}case ce:return r}}}function xe(e){return Ce(e)===he}var Te={AsyncMode:me,ConcurrentMode:he,ContextConsumer:de,ContextProvider:fe,Element:le,ForwardRef:ye,Fragment:se,Lazy:we,Memo:be,Portal:ce,Profiler:pe,StrictMode:ue,Suspense:ge,isAsyncMode:function(e){return xe(e)||Ce(e)===me},isConcurrentMode:xe,isContextConsumer:function(e){return Ce(e)===de},isContextProvider:function(e){return Ce(e)===fe},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===le},isForwardRef:function(e){return Ce(e)===ye},isFragment:function(e){return Ce(e)===se},isLazy:function(e){return Ce(e)===we},isMemo:function(e){return Ce(e)===be},isPortal:function(e){return Ce(e)===ce},isProfiler:function(e){return Ce(e)===pe},isStrictMode:function(e){return Ce(e)===ue},isSuspense:function(e){return Ce(e)===ge},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===se||e===he||e===pe||e===ue||e===ge||e===ve||"object"==typeof e&&null!==e&&(e.$$typeof===we||e.$$typeof===be||e.$$typeof===fe||e.$$typeof===de||e.$$typeof===ye||e.$$typeof===Ee||e.$$typeof===Oe||e.$$typeof===Re||e.$$typeof===Se)},typeOf:Ce},Ie=ie(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,l=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var d=e.type;switch(d){case s:case u:case o:case a:case i:case f:return d;default:var y=d&&d.$$typeof;switch(y){case c:case p:case h:case m:case l:return y;default:return r}}case n:return r}}}var S=u,E=c,O=l,R=t,C=p,x=o,T=h,I=m,P=n,j=a,M=i,k=f,_=!1;function A(e){return w(e)===u}r.AsyncMode=s,r.ConcurrentMode=S,r.ContextConsumer=E,r.ContextProvider=O,r.Element=R,r.ForwardRef=C,r.Fragment=x,r.Lazy=T,r.Memo=I,r.Portal=P,r.Profiler=j,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||w(e)===s},r.isConcurrentMode=A,r.isContextConsumer=function(e){return w(e)===c},r.isContextProvider=function(e){return w(e)===l},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===p},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===h},r.isMemo=function(e){return w(e)===m},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===f},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y)},r.typeOf=w}()}),Pe=ie(function(e){e.exports="production"===process.env.NODE_ENV?Te:Ie}),je=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;function _e(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var Ae=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=_e(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))Me.call(t,a)&&(o[a]=t[a]);if(je){n=je(t);for(var l=0;l<n.length;l++)ke.call(t,n[l])&&(o[n[l]]=t[n[l]])}}return o},$e=Function.call.bind(Object.prototype.hasOwnProperty),Ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Le=$e,De=function(){};if("production"!==process.env.NODE_ENV){var Fe=Ve,Ue={},Ne=Le;De=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function ze(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(Ne(e,i)){var a;try{if("function"!=typeof e[i]){var l=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}a=e[i](r,i,n,t,null,Fe)}catch(e){a=e}if(!a||a instanceof Error||De((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Ue)){Ue[a.message]=!0;var c=o?o():"";De("Failed "+t+" type: "+a.message+(null!=c?c:""))}}}ze.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Ue={})};var qe=ze,We=function(){};function Ye(){return null}function Qe(){}function Be(){}"production"!==process.env.NODE_ENV&&(We=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),Be.resetWarningCache=Qe;var Ge=ie(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:c("array"),bigint:c("bigint"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:l(Ye),arrayOf:function(e){return l(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=r[t];if(!Array.isArray(l))return new a("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<l.length;c++){var s=e(l,c,n,o,i+"["+c+"]",Ve);if(s instanceof Error)return s}return null})},element:l(function(r,t,n,o,i){var l=r[t];return e(l)?null:new a("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:l(function(e,r,t,n,o){var i=e[r];return Pe.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+p(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return l(function(r,t,o,i,l){return r[t]instanceof e?null:new a("Invalid "+i+" `"+l+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var c})},node:l(function(e,r,t,n,o){return u(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return l(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],c=p(l);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var s in l)if(Le(l,s)){var u=e(l,s,n,o,i+"."+s,Ve);if(u instanceof Error)return u}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&We(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Ye;function r(r,t,n,o,l){for(var c=r[t],s=0;s<e.length;s++)if(i(c,e[s]))return null;var u=JSON.stringify(e,function(e,r){return"symbol"===f(r)?String(r):r});return new a("Invalid "+o+" `"+l+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+u+".")}return l(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&We("Invalid argument supplied to oneOfType, expected an instance of array."),Ye;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return We("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+r+"."),Ye}return l(function(r,t,n,o,i){for(var l=[],c=0;c<e.length;c++){var s=(0,e[c])(r,t,n,o,i,Ve);if(null==s)return null;s.data&&Le(s.data,"expectedType")&&l.push(s.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")})},shape:function(e){return l(function(r,t,n,o,i){var l=r[t],c=p(l);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var u in e){var d=e[u];if("function"!=typeof d)return s(n,o,i,u,f(d));var m=d(l,u,n,o,i+"."+u,Ve);if(m)return m}return null})},exact:function(e){return l(function(r,t,n,o,i){var l=r[t],c=p(l);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=Ae({},r[t],e);for(var d in u){var m=e[d];if(Le(e,d)&&"function"!=typeof m)return s(n,o,i,d,f(m));if(!m)return new a("Invalid "+o+" `"+i+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=m(l,d,n,o,i+"."+d,Ve);if(h)return h}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function l(e){function r(r,t,o,i,l,c,s){if(i=i||n,c=c||o,s!==Ve){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}return null==t[o]?r?new a(null===t[o]?"The "+l+" `"+c+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+l+" `"+c+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,l,c)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function c(e){return l(function(r,t,n,o,i,l){var c=r[t];return p(c)!==e?new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function s(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function u(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(u);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!u(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!u(a[1]))return!1}return!0;default:return!1}}function p(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function f(e){if(null==e)return""+e;var r=p(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function d(e){var r=f(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=qe,o.resetWarningCache=qe.resetWarningCache,o.PropTypes=o,o}(Pe.isElement):function(){function e(e,r,t,n,o,i){if(i!==Ve){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Be,resetWarningCache:Qe};return t.PropTypes=t,t}()});class He extends e.Component{constructor(e){super(e),this.state={error:!1},this.props=e}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children}}He.propTypes={onError:Ge.func};const Je=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalAutoClear","globalClearDepth"],Xe=["children","onError"],Ke=r=>{let{as:t=h,children:n,gl:o,style:i,orthographic:a,camera:l,debug:c,scaleMultiplier:s=q.DEFAULT_SCALE_MULTIPLIER,globalRender:u=!0,globalPriority:p=q.PRIORITY_GLOBAL,globalAutoClear:f=!1,globalClearDepth:d=!0}=r,m=U(r,Je);const y=W(e=>e.globalRender);return z(()=>{const e=w(window.location.search);(c||void 0!==e.debug)&&W.setState({debug:!0})},[c]),z(()=>{W.setState({scaleMultiplier:s,globalRender:u,globalPriority:p,globalAutoClear:f,globalClearDepth:d})},[s,p,u,f,d]),e.createElement(t,F({id:"ScrollRig-canvas",camera:null,gl:F({failIfMajorPerformanceCaveat:!0},o),resize:{scroll:!1,debounce:0,polyfill:b},style:F({position:"fixed",top:0,left:0,right:0,height:"100vh"},i)},m),"function"==typeof n?n(e.createElement(ne,null)):e.createElement(ne,null,n),y&&e.createElement(oe,null),!a&&e.createElement(B,F({makeDefault:!0},l)),a&&e.createElement(H,F({makeDefault:!0},l)),e.createElement(Y,null))},Ze=r=>{let{children:t,onError:n}=r,o=U(r,Xe);return z(()=>{document.documentElement.classList.add("js-has-global-canvas")},[]),e.createElement(He,{onError:e=>{n&&n(e),W.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},e.createElement(Ke,F({},o),t),e.createElement("noscript",null,e.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},er=({scale:r})=>e.createElement("mesh",{scale:r},e.createElement("planeGeometry",null),e.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new R("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0})),rr="undefined"!=typeof window;function tr({debounce:e=0}={}){const[r,n]=c({width:rr?window.innerWidth:Infinity,height:rr?window.innerHeight:Infinity});return t(()=>{const t=document.getElementById("ScrollRig-canvas");function o(){const e=t?t.clientWidth:window.innerWidth,o=t?t.clientHeight:window.innerHeight;e===r.width&&o===r.height||n({width:e,height:o})}const i=_.debounce(o,e);let a;return t?(a=new ResizeObserver(i),a.observe(t)):window.addEventListener("resize",i),o(),()=>{var e;window.removeEventListener("resize",i),null==(e=a)||e.disconnect()}},[]),r}function nr(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}const or=()=>({enabled:W(e=>e.hasSmoothScrollbar),scroll:W(e=>e.scroll),scrollTo:W(e=>e.scrollTo),onScroll:W(e=>e.onScroll)});function ir(e,r){const n=tr(),{scroll:a,onScroll:l}=or(),u=W(e=>e.scaleMultiplier),p=W(e=>e.pageReflow),{rootMargin:f,threshold:d,autoUpdate:m,wrapper:h}=o(()=>{const e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map((r,n)=>{void 0!==t[r]&&(e[r]=t[r])}),e},[r]),{ref:y,inView:g}=k({rootMargin:f,threshold:d});z(()=>{y(e.current)},[e]);const[v,b]=c(),w=i({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,S=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,[E,O]=c(S),R=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,C=i(A.vec3(0,0,0)).current;z(()=>{var r;const t=null==(r=e.current)?void 0:r.getBoundingClientRect();if(!t)return;const n=h?h.scrollTop:window.scrollY,o=h?h.scrollLeft:window.scrollX;S.top=t.top+n,S.bottom=t.bottom+n,S.left=t.left+o,S.right=t.right+o,S.width=t.width,S.height=t.height,S.x=S.left+.5*t.width,S.y=S.top+.5*t.height,O(F({},S)),b(A.vec3((null==S?void 0:S.width)*u,(null==S?void 0:S.height)*u,1))},[e,n,p,u]);const x=s(({onlyUpdateInViewport:r=!1,scroll:t}={})=>{if(!e.current||r&&!w.inViewport)return;const o=t||a;!function(e,r,t,n){e.top=r.top-t.y,e.bottom=r.bottom-t.y,e.left=r.left-t.x,e.right=r.right-t.x,e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(R,S,o,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(C,R,u);const i="horizontal"===o.scrollDirection,l=i?"width":"height",c=n[l]-R[i?"left":"top"];w.progress=nr(c,0,n[l]+R[l],0,1),w.visibility=nr(c,0,R[l],0,1),w.viewport=nr(c,0,n[l],0,1)},[e,n,u,a]);return z(()=>{w.inViewport=g,x({onlyUpdateInViewport:!1})},[g]),z(()=>{x({onlyUpdateInViewport:!1})},[x]),t(()=>{if(m)return l(e=>x({onlyUpdateInViewport:!0}))},[m,x,l]),{rect:E,bounds:R,scale:v,position:C,scrollState:w,inViewport:g,update:x}}const ar=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","renderOrder","priority"],lr=u(r=>{let{track:t,children:n,margin:o=0,inViewportMargin:i,inViewportThreshold:a,visible:l=!0,hideOffscreen:u=!0,scissor:p=!1,debug:f=!1,as:d="scene",renderOrder:h=1,priority:g=q.PRIORITY_SCISSORS}=r,v=U(r,ar);const b=s(e=>{null!==e&&S(e)},[]),[w,S]=c(p?new C:null),{requestRender:E,renderScissor:O}=te(),R=W(e=>e.globalRender),{bounds:x,scale:T,position:I,scrollState:P,inViewport:j}=ir(t,{rootMargin:i,threshold:a});z(()=>{w&&(w.visible=u?j&&l:l)},[w,j,u,l]),m(({gl:e,camera:r})=>{w&&T&&w.visible&&(w.position.y=I.y,w.position.x=I.x,p?O({gl:e,scene:w,camera:r,left:x.left-o,top:x.positiveYUpBottom-o,width:x.width+2*o,height:x.height+2*o}):E())},R?g:void 0);const M=e.createElement("group",{renderOrder:h},(!n||f)&&T&&e.createElement(er,{scale:T}),n&&w&&T&&n(F({track:t,margin:o,renderOrder:h,scale:T,scrollState:P,inViewport:j,scene:w,priority:g+h},v))),k=d;return p&&w?y(M,w):e.createElement(k,{ref:b},M)}),cr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","debug","orthographic","renderOrder","priority"],sr=u(r=>{let{track:t,children:n,margin:o=0,inViewportMargin:a,inViewportThreshold:l,visible:u=!0,hideOffscreen:p=!0,debug:f=!1,orthographic:h=!1,renderOrder:g=1,priority:v=q.PRIORITY_VIEWPORTS}=r,b=U(r,cr);const w=i(null),[S]=c(()=>new C),{renderViewport:E}=te(),O=W(e=>e.pageReflow),R=W(e=>e.scaleMultiplier),{rect:x,bounds:T,scale:I,position:P,scrollState:j,inViewport:M}=ir(t,{rootMargin:a,threshold:l});z(()=>{S.visible=p?M&&u:u},[M,p,u]);const[k,_]=c(0);z(()=>{if(!x)return;const e=x.width*R,r=x.height*R,t=Math.max(e,r);_(t),w.current&&!h&&(w.current.aspect=(e+2*o*R)/(r+2*o*R),w.current.fov=180/Math.PI*2*Math.atan((r+2*o*R)/(2*t)),w.current.updateProjectionMatrix(),w.current.updateMatrixWorld()),d()},[t,O,x,R]);const A=s((e,r)=>{if(t.current&&e.target===t.current){const{width:t,height:n,left:i,top:a}=T;r.pointer.set((e.clientX-i+o)/(t+2*o)*2-1,-(e.clientY-a+o)/(n+2*o)*2+1),r.raycaster.setFromCamera(r.pointer,w.current)}},[T,P]);return m(({gl:e})=>{S&&I&&S.visible&&E({gl:e,scene:S,camera:w.current,left:T.left-o,top:T.positiveYUpBottom-o,width:T.width+2*o,height:T.height+2*o})},v),T&&y(e.createElement(e.Fragment,null,!h&&e.createElement("perspectiveCamera",{ref:w,position:[0,0,k],onUpdate:e=>e.updateProjectionMatrix()}),h&&I&&e.createElement("orthographicCamera",{ref:w,position:[0,0,k],onUpdate:e=>e.updateProjectionMatrix(),left:I[0]/-2,right:I[0]/2,top:I[1]/2,bottom:I[1]/-2,far:2*k,near:.001}),e.createElement("group",{renderOrder:g},(!n||f)&&I&&e.createElement(er,{scale:I}),n&&S&&I&&n(F({track:t,margin:o,renderOrder:g,scale:I,scrollState:j,inViewport:M,scene:S,camera:w.current,priority:v+g},b)))),S,{events:{compute:A,priority:v},size:{width:x.width,height:x.height}})});function ur(e,r={},{key:n,dispose:i=!0}={}){const a=W(e=>e.updateCanvas),l=W(e=>e.renderToCanvas),c=W(e=>e.removeFromCanvas),u=o(()=>n||x.generateUUID(),[]);z(()=>{l(u,e,{inactive:!1})},[u]),t(()=>()=>{c(u,i)},[u]);const p=s(e=>{a(u,e)},[a,u]);return t(()=>{p(r)},[...Object.values(r)]),p}const pr=["children","id"],fr=n((e,r)=>{let{children:t,id:n}=e;return ur(t,F({},U(e,pr),{ref:r}),{key:n}),null});let dr=!1;function mr(e,{initTexture:r=!0,premultiplyAlpha:n="default"}={}){const i=f(e=>e.gl),a=tr(),l=W(e=>e.debug),c=$(()=>(T.itemStart("waiting for DOM image"),new Promise(r=>{const t=e.current;function n(){r(null==t?void 0:t.currentSrc)}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})),[e,a],{equal:L}),s=function(){const e=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),r=navigator.userAgent.indexOf("Firefox")>-1,t=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;return"undefined"==typeof createImageBitmap||e||r&&t<98}()?I:P,u=g(s,c,e=>{e instanceof P&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:n,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(dr?"image/webp,":"")+"*/*"}))}),p=o(()=>u instanceof j?u:u instanceof ImageBitmap?new M(u):void 0,[u]);return t(function(){r&&i.initTexture(p),T.itemEnd("waiting for DOM image"),l&&console.log("useImageAsTexture","initTexture()")},[i,p,r]),p}V.then(e=>{dr=e});const hr=["children","duration","easing","smooth","direction","config"],yr=e=>1===e?1:1-Math.pow(2,-10*e);var gr=n(function(e,r){let{children:n,duration:o=1,easing:a=yr,smooth:l=!0,direction:c="vertical",config:s}=e,u=U(e,hr);const f=i();return p(r,()=>({start:()=>{var e;return null==(e=f.current)?void 0:e.start()},stop:()=>{var e;return null==(e=f.current)?void 0:e.stop()},on:(e,r)=>{var t;return null==(t=f.current)?void 0:t.on(e,r)},once:(e,r)=>{var t;return null==(t=f.current)?void 0:t.once(e,r)},off:(e,r)=>{var t;return null==(t=f.current)?void 0:t.off(e,r)},notify:()=>{var e;return null==(e=f.current)?void 0:e.notify()},scrollTo:(e,r)=>{var t;return null==(t=f.current)?void 0:t.scrollTo(e,r)},raf:e=>{var r;return null==(r=f.current)?void 0:r.raf(e)},__lenis:f.current})),t(function(){const e=f.current=new D(F({duration:o,easing:a,smooth:l,direction:c},s));return()=>{e.destroy()}},[o,a,l,c]),n&&n(u)});const vr=n(({children:r,enabled:n=!0,locked:a=!1,scrollRestoration:l="auto",disablePointerOnScroll:c=!0,horizontal:u=!1,scrollInContainer:f=!1,updateGlobalState:m=!0,onScroll:h,config:y},g)=>{const b=i(),w=i(),S=i(!1),E=W(e=>e.scroll);p(g,()=>({scrollTo:(e,r)=>{var t;return null==(t=w.current)?void 0:t.scrollTo(e,r)},__lenis:w.current}));const O=e=>{c&&b.current&&S.current!==e&&(S.current=e,b.current.style.pointerEvents=e?"none":"auto")},R=s(()=>{O(!1)},[]),C=s(e=>{var r;return null==(r=w.current)||r.on("scroll",e),()=>{var r;return null==(r=w.current)?void 0:r.off("scroll",e)}},[]);z(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=l)},[]),t(()=>{var e,r;const t=v(e=>{var r;return null==(r=w.current)?void 0:r.raf(e)});var n;null==(e=w.current)||e.on("scroll",({scroll:e,limit:r,velocity:t,direction:n,progress:o})=>{const i=u?e:0;m&&(E.y=u?0:e,E.x=i,E.limit=r,E.velocity=t,E.direction=n,E.progress=o);const a=_.debounce(()=>O(!0),100,!0);Math.abs(t)>1.4?a():O(!1),h&&h({scroll:e,limit:r,velocity:t,direction:n,progress:o}),d()}),null==(r=w.current)||r.notify(),m&&(E.scrollDirection=u?"horizontal":"vertical",W.setState({scrollTo:null==(n=w.current)?void 0:n.scrollTo}),W.setState({onScroll:C}),W.getState().scroll.y=window.scrollY,W.getState().scroll.x=window.scrollX);const o=()=>d();return window.addEventListener("pointermove",R),window.addEventListener("wheel",o),()=>{var e;null==(e=w.current)||e.off("scroll"),t(),window.removeEventListener("pointermove",R),window.removeEventListener("wheel",o)}},[]),t(()=>{m&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",n),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!n),W.setState({hasSmoothScrollbar:n}))},[n]),t(()=>{var e,r;a?null==(e=w.current)||e.stop():null==(r=w.current)||r.start()},[a]);const{wrapper:x,content:T}=o(()=>{if("undefined"==typeof document)return{};const e=document.documentElement,r=document.body,t=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",f),r.classList.toggle("ScrollRig-scrollWrapper",f),{wrapper:r,content:t}},[f]);return e.createElement(gr,{ref:w,direction:u?"horizontal":"vertical",config:F(f?{smoothTouch:!0,wrapper:x,content:T}:{},y)},e=>r(F({},e,{ref:b})))}),br={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{Ze as GlobalCanvas,lr as ScrollScene,vr as SmoothScrollbar,fr as UseCanvas,sr as ViewportScrollScene,br as styles,ur as useCanvas,W as useCanvasStore,mr as useImageAsTexture,te as useScrollRig,or as useScrollbar,ir as useTracker};
//# sourceMappingURL=scrollrig.modern.js.map
