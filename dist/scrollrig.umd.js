!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react"),require("@react-three/fiber"),require("@juggle/resize-observer"),require("query-string"),require("zustand"),require("react-merge-refs"),require("three"),require("react-intersection-observer"),require("debounce"),require("vecn"),require("suspend-react"),require("supports-webp"),require("fast-deep-equal"),require("@studio-freight/lenis")):"function"==typeof define&&define.amd?define(["exports","react","@react-three/fiber","@juggle/resize-observer","query-string","zustand","react-merge-refs","three","react-intersection-observer","debounce","vecn","suspend-react","supports-webp","fast-deep-equal","@studio-freight/lenis"],r):r((e||self).r3FScrollRig={},e.react,e["@react-three/fiber"],e["@juggle/resize-observer"],e.queryString,e.zustand,e.reactMergeRefs,e.three,e.reactIntersectionObserver,e.debounce,e.vecn,e.suspendReact,e.supportsWebp,e.fastDeepEqual,e["@studio-freight/lenis"])}(this,function(e,r,t,n,o,i,a,u,c,l,s,f,d,p,v){function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=/*#__PURE__*/h(r),y=/*#__PURE__*/h(i),g=/*#__PURE__*/h(a),b=/*#__PURE__*/h(l),w=/*#__PURE__*/h(s),S=/*#__PURE__*/h(d),E=/*#__PURE__*/h(p),R=/*#__PURE__*/h(v);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function C(e,r){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},C(e,r)}function T(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function x(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var I="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,j={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},P=y.default(function(e){return{debug:!1,scaleMultiplier:j.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:j.PRIORITY_GLOBAL,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:O({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:O({},o,((n={})[r]={mesh:i.mesh,props:O({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:T(o,[r].map(x))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:O({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),M=function(){var e=P(function(e){return e.requestReflow});return r.useEffect(function(){"fonts"in document&&document.fonts.ready.then(function(){var r,t;r=e,t={}.timeout,"requestIdleCallback"in window?window.requestIdleCallback(r,{timeout:void 0===t?100:t}):setTimeout(r,0)})},[]),null},k=["makeDefault"],_=r.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,a=T(e,k),u=t.useThree(function(e){return e.set}),c=t.useThree(function(e){return e.camera}),l=t.useThree(function(e){return e.size}),s=t.useThree(function(e){return e.viewport}),f=P(function(e){return e.pageReflow}),d=P(function(e){return e.scaleMultiplier}),p=r.useMemo(function(){return Math.max(l.width*d,l.height*d)},[l,f,d]),v=r.useRef(null);return I(function(){var e=l.height*d;v.current.aspect=l.width*d/e,v.current.fov=180/Math.PI*2*Math.atan(e/(2*v.current.position.z)),v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld(),s.getCurrentViewport()},[p,l,d]),I(function(){if(i&&v.current){var e=c;return u({camera:v.current}),function(){return u({camera:e})}}},[c,v,i,u]),m.default.createElement("perspectiveCamera",O({ref:g.default([v,n]),position:[0,0,p],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,far:2*p},a))}),V=["makeDefault"],A=r.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,a=T(e,V),u=t.useThree(function(e){return e.set}),c=t.useThree(function(e){return e.camera}),l=t.useThree(function(e){return e.size}),s=P(function(e){return e.pageReflow}),f=P(function(e){return e.scaleMultiplier}),d=r.useMemo(function(){return Math.max(l.width*f,l.height*f)},[l,s,f]),p=r.useRef(null);return I(function(){p.current.lookAt(0,0,0),p.current.updateProjectionMatrix(),p.current.updateMatrixWorld()},[d,l]),I(function(){if(i&&p.current){var e=c;return u({camera:p.current}),function(){return u({camera:e})}}},[c,p,i,u]),m.default.createElement("orthographicCamera",O({left:l.width*f/-2,right:l.width*f/2,top:l.height*f/2,bottom:l.height*f/-2,far:2*d,position:[0,0,d],near:.001,ref:g.default([p,n]),onUpdate:function(e){return e.updateProjectionMatrix()}},a))});function L(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return L(e,r)}))}var $=new u.Vector2,D=function(e){void 0===e&&(e=[0]),P.getState().globalRenderQueue=P.getState().globalRenderQueue||[0],P.getState().globalRenderQueue=[].concat(P.getState().globalRenderQueue||[],e)},q=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,u=e.height,c=e.layer,l=void 0===c?0:c,s=e.autoClear,f=e.clearDepth,d=void 0===f||f;if(t&&n){var p=r.autoClear;r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,u),r.setScissorTest(!0),n.layers.set(l),d&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.autoClear=p}},F=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,u=e.height,c=e.layer,l=void 0===c?0:c,s=e.scissor,f=void 0===s||s,d=e.autoClear,p=void 0!==d&&d,v=e.clearDepth,h=void 0===v||v;if(t&&n){var m=r.autoClear;r.getSize($),r.autoClear=p,r.setViewport(o,i,a,u),r.setScissor(o,i,a,u),r.setScissorTest(f),n.layers.set(l),h&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,$.x,$.y),r.autoClear=m}},z=function(e,r,n,o){void 0===n&&(n=0),e&&r&&(j.preloadQueue.push(function(t){t.setScissorTest(!1),L(e,!1),r.layers.set(n),t.render(e,r),L(e,!0),o&&o()}),t.invalidate())},U=function(){var e=P(function(e){return e.isCanvasAvailable}),t=P(function(e){return e.hasSmoothScrollbar}),n=P(function(e){return e.requestReflow}),o=P(function(e){return e.debug}),i=P(function(e){return e.scaleMultiplier});return r.useEffect(function(){o&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:o,isCanvasAvailable:e,hasSmoothScrollbar:t,scaleMultiplier:i,preloadScene:z,requestRender:D,renderScissor:q,renderViewport:F,reflow:n}},N=function(e){var n=e.children,o=P(function(e){return e.canvasChildren}),i=U();return r.useEffect(function(){Object.keys(o).length||(i.debug&&console.log("GlobalRenderer","auto render empty canvas"),i.requestRender(),t.invalidate())},[o]),i.debug&&console.log("GlobalChildren",Object.keys(o).length),m.default.createElement(m.default.Fragment,null,n,Object.keys(o).map(function(e){var t=o[e],n=t.mesh,a=t.props;return"function"==typeof n?m.default.createElement(r.Fragment,{key:e},n(O({key:e},i,a))):r.cloneElement(n,O({key:e},a))}))},W=function(){var e=t.useThree(function(e){return e.gl}),r=t.useThree(function(e){return e.frameloop}),n=P(function(e){return e.globalClearDepth}),o=P(function(e){return e.globalAutoClear}),i=P(function(e){return e.globalPriority}),a=U();return I(function(){e.debug.checkShaderErrors=a.debug},[a.debug]),t.useFrame(function(){j.preloadQueue.length&&(e.autoClear=!1,j.preloadQueue.forEach(function(r){return r(e)}),e.clear(),j.preloadQueue=[],e.autoClear=!0,a.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),a.requestRender(),t.invalidate())},j.PRIORITY_PRELOAD),t.useFrame(function(t){var i=t.camera,a=t.scene,u=P.getState().globalRenderQueue;("always"===r||u)&&(e.autoClear=o,i.layers.disableAll(),u?u.forEach(function(e){i.layers.enable(e)}):i.layers.enable(0),n&&e.clearDepth(),e.render(a,i),e.autoClear=!0),P.getState().clearGlobalRenderQueue()},i),null};function Y(e){var r={exports:{}};return e(r,r.exports),r.exports}var B="function"==typeof Symbol&&Symbol.for,Q=B?Symbol.for("react.element"):60103,G=B?Symbol.for("react.portal"):60106,H=B?Symbol.for("react.fragment"):60107,J=B?Symbol.for("react.strict_mode"):60108,X=B?Symbol.for("react.profiler"):60114,K=B?Symbol.for("react.provider"):60109,Z=B?Symbol.for("react.context"):60110,ee=B?Symbol.for("react.async_mode"):60111,re=B?Symbol.for("react.concurrent_mode"):60111,te=B?Symbol.for("react.forward_ref"):60112,ne=B?Symbol.for("react.suspense"):60113,oe=B?Symbol.for("react.suspense_list"):60120,ie=B?Symbol.for("react.memo"):60115,ae=B?Symbol.for("react.lazy"):60116,ue=B?Symbol.for("react.block"):60121,ce=B?Symbol.for("react.fundamental"):60117,le=B?Symbol.for("react.responder"):60118,se=B?Symbol.for("react.scope"):60119;function fe(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case Q:switch(e=e.type){case ee:case re:case H:case X:case J:case ne:return e;default:switch(e=e&&e.$$typeof){case Z:case te:case ae:case ie:case K:return e;default:return r}}case G:return r}}}function de(e){return fe(e)===re}var pe={AsyncMode:ee,ConcurrentMode:re,ContextConsumer:Z,ContextProvider:K,Element:Q,ForwardRef:te,Fragment:H,Lazy:ae,Memo:ie,Portal:G,Profiler:X,StrictMode:J,Suspense:ne,isAsyncMode:function(e){return de(e)||fe(e)===ee},isConcurrentMode:de,isContextConsumer:function(e){return fe(e)===Z},isContextProvider:function(e){return fe(e)===K},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Q},isForwardRef:function(e){return fe(e)===te},isFragment:function(e){return fe(e)===H},isLazy:function(e){return fe(e)===ae},isMemo:function(e){return fe(e)===ie},isPortal:function(e){return fe(e)===G},isProfiler:function(e){return fe(e)===X},isStrictMode:function(e){return fe(e)===J},isSuspense:function(e){return fe(e)===ne},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===H||e===re||e===X||e===J||e===ne||e===oe||"object"==typeof e&&null!==e&&(e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===K||e.$$typeof===Z||e.$$typeof===te||e.$$typeof===ce||e.$$typeof===le||e.$$typeof===se||e.$$typeof===ue)},typeOf:fe},ve=Y(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var p=e.type;switch(p){case l:case s:case o:case a:case i:case d:return p;default:var m=p&&p.$$typeof;switch(m){case c:case f:case h:case v:case u:return m;default:return r}}case n:return r}}}var S=s,E=c,R=u,O=t,C=f,T=o,x=h,I=v,j=n,P=a,M=i,k=d,_=!1;function V(e){return w(e)===s}r.AsyncMode=l,r.ConcurrentMode=S,r.ContextConsumer=E,r.ContextProvider=R,r.Element=O,r.ForwardRef=C,r.Fragment=T,r.Lazy=x,r.Memo=I,r.Portal=j,r.Profiler=P,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(e)||w(e)===l},r.isConcurrentMode=V,r.isContextConsumer=function(e){return w(e)===c},r.isContextProvider=function(e){return w(e)===u},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===h},r.isMemo=function(e){return w(e)===v},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===d},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f||e.$$typeof===y||e.$$typeof===g||e.$$typeof===b||e.$$typeof===m)},r.typeOf=w}()}),he=Y(function(e){e.exports="production"===process.env.NODE_ENV?pe:ve}),me=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;function be(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var we=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=be(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))ye.call(t,a)&&(o[a]=t[a]);if(me){n=me(t);for(var u=0;u<n.length;u++)ge.call(t,n[u])&&(o[n[u]]=t[n[u]])}}return o},Se=Function.call.bind(Object.prototype.hasOwnProperty),Ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Re=Se,Oe=function(){};if("production"!==process.env.NODE_ENV){var Ce=Ee,Te={},xe=Re;Oe=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function Ie(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(xe(e,i)){var a;try{if("function"!=typeof e[i]){var u=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}a=e[i](r,i,n,t,null,Ce)}catch(e){a=e}if(!a||a instanceof Error||Oe((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Te)){Te[a.message]=!0;var c=o?o():"";Oe("Failed "+t+" type: "+a.message+(null!=c?c:""))}}}Ie.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Te={})};var je=Ie,Pe=function(){};function Me(){return null}function ke(){}function _e(){}"production"!==process.env.NODE_ENV&&(Pe=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),_e.resetWarningCache=ke;var Ve=Y(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:c("array"),bigint:c("bigint"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:u(Me),arrayOf:function(e){return u(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=r[t];if(!Array.isArray(u))return new a("Invalid "+o+" `"+i+"` of type `"+f(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var l=e(u,c,n,o,i+"["+c+"]",Ee);if(l instanceof Error)return l}return null})},element:u(function(r,t,n,o,i){var u=r[t];return e(u)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(u)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:u(function(e,r,t,n,o){var i=e[r];return he.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return u(function(r,t,o,i,u){return r[t]instanceof e?null:new a("Invalid "+i+" `"+u+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var c})},node:u(function(e,r,t,n,o){return s(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return u(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(Re(u,l)){var s=e(u,l,n,o,i+"."+l,Ee);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Pe(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Me;function r(r,t,n,o,u){for(var c=r[t],l=0;l<e.length;l++)if(i(c,e[l]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===d(r)?String(r):r});return new a("Invalid "+o+" `"+u+"` of value `"+String(c)+"` supplied to `"+n+"`, expected one of "+s+".")}return u(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Pe("Invalid argument supplied to oneOfType, expected an instance of array."),Me;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return Pe("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),Me}return u(function(r,t,n,o,i){for(var u=[],c=0;c<e.length;c++){var l=(0,e[c])(r,t,n,o,i,Ee);if(null==l)return null;l.data&&Re(l.data,"expectedType")&&u.push(l.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")})},shape:function(e){return u(function(r,t,n,o,i){var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if("function"!=typeof p)return l(n,o,i,s,d(p));var v=p(u,s,n,o,i+"."+s,Ee);if(v)return v}return null})},exact:function(e){return u(function(r,t,n,o,i){var u=r[t],c=f(u);if("object"!==c)return new a("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var s=we({},r[t],e);for(var p in s){var v=e[p];if(Re(e,p)&&"function"!=typeof v)return l(n,o,i,p,d(v));if(!v)return new a("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=v(u,p,n,o,i+"."+p,Ee);if(h)return h}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function u(e){function r(r,t,o,i,u,c,l){if(i=i||n,c=c||o,l!==Ee){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new a(null===t[o]?"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+u+" `"+c+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,u,c)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function c(e){return u(function(r,t,n,o,i,u){var c=r[t];return f(c)!==e?new a("Invalid "+o+" `"+i+"` of type `"+d(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function s(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(s);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function d(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=d(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=je,o.resetWarningCache=je.resetWarningCache,o.PropTypes=o,o}(he.isElement):function(){function e(e,r,t,n,o,i){if(i!==Ee){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:_e,resetWarningCache:ke};return t.PropTypes=t,t}()}),Ae=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,C(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(m.default.Component);Ae.propTypes={onError:Ve.func};var Le=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalAutoClear","globalClearDepth"],$e=["children","onError"],De=function(e){var r=e.as,i=void 0===r?t.Canvas:r,a=e.children,u=e.gl,c=e.style,l=e.orthographic,s=e.camera,f=e.debug,d=e.scaleMultiplier,p=void 0===d?j.DEFAULT_SCALE_MULTIPLIER:d,v=e.globalRender,h=void 0===v||v,y=e.globalPriority,g=void 0===y?j.PRIORITY_GLOBAL:y,b=e.globalAutoClear,w=void 0!==b&&b,S=e.globalClearDepth,E=void 0===S||S,R=T(e,Le),C=P(function(e){return e.globalRender});return I(function(){var e=o.parse(window.location.search);(f||void 0!==e.debug)&&P.setState({debug:!0})},[f]),I(function(){P.setState({scaleMultiplier:p,globalRender:h,globalPriority:g,globalAutoClear:w,globalClearDepth:E})},[p,g,h,w,E]),m.default.createElement(i,O({id:"ScrollRig-canvas",camera:null,gl:O({failIfMajorPerformanceCaveat:!0},u),resize:{scroll:!1,debounce:0,polyfill:n.ResizeObserver},style:O({position:"fixed",top:0,left:0,right:0,height:"100vh"},c)},R),"function"==typeof a?a(m.default.createElement(N,null)):m.default.createElement(N,null,a),C&&m.default.createElement(W,null),!l&&m.default.createElement(_,O({makeDefault:!0},s)),l&&m.default.createElement(A,O({makeDefault:!0},s)),m.default.createElement(M,null))},qe=function(e){return m.default.createElement("mesh",{scale:e.scale},m.default.createElement("planeGeometry",null),m.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new u.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},Fe="undefined"!=typeof window;function ze(e){var t=(void 0===e?{}:e).debounce,n=void 0===t?0:t,o=r.useState({width:Fe?window.innerWidth:Infinity,height:Fe?window.innerHeight:Infinity}),i=o[0],a=o[1];return r.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function r(){var r=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;r===i.width&&t===i.height||a({width:r,height:t})}var t,o=b.default.debounce(r,n);return e?(t=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),r(),function(){var e;window.removeEventListener("resize",o),null==(e=t)||e.disconnect()}},[]),i}function Ue(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var Ne=function(){return{enabled:P(function(e){return e.hasSmoothScrollbar}),scroll:P(function(e){return e.scroll}),scrollTo:P(function(e){return e.scrollTo}),onScroll:P(function(e){return e.onScroll})}};function We(e,t){var n=ze(),o=Ne(),i=o.scroll,a=o.onScroll,u=P(function(e){return e.scaleMultiplier}),l=P(function(e){return e.pageReflow}),s=r.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},r=t||{};return Object.keys(r).map(function(t,n){void 0!==r[t]&&(e[t]=r[t])}),e},[t]),f=s.autoUpdate,d=s.wrapper,p=c.useInView({rootMargin:s.rootMargin,threshold:s.threshold}),v=p.ref,h=p.inView;I(function(){v(e.current)},[e]);var m=r.useState(),y=m[0],g=m[1],b=r.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,S=r.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,E=r.useState(S),R=E[0],C=E[1],T=r.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,x=r.useRef(w.default.vec3(0,0,0)).current;I(function(){var r,t=null==(r=e.current)?void 0:r.getBoundingClientRect();if(t){var n=d?d.scrollTop:window.scrollY,o=d?d.scrollLeft:window.scrollX;S.top=t.top+n,S.bottom=t.bottom+n,S.left=t.left+o,S.right=t.right+o,S.width=t.width,S.height=t.height,S.x=S.left+.5*t.width,S.y=S.top+.5*t.height,C(O({},S)),g(w.default.vec3((null==S?void 0:S.width)*u,(null==S?void 0:S.height)*u,1))}},[e,n,l,u]);var j=r.useCallback(function(r){var t=void 0===r?{}:r,o=t.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||b.inViewport)){var a=t.scroll||i;!function(e,r,t,n){e.top=r.top-t.y,e.bottom=r.bottom-t.y,e.left=r.left-t.x,e.right=r.right-t.x,e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(T,S,a,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(x,T,u);var c="horizontal"===a.scrollDirection,l=c?"width":"height",s=n[l]-T[c?"left":"top"];b.progress=Ue(s,0,n[l]+T[l],0,1),b.visibility=Ue(s,0,T[l],0,1),b.viewport=Ue(s,0,n[l],0,1)}},[e,n,u,i]);return I(function(){b.inViewport=h,j({onlyUpdateInViewport:!1})},[h]),I(function(){j({onlyUpdateInViewport:!1})},[j]),r.useEffect(function(){if(f)return a(function(e){return j({onlyUpdateInViewport:!0})})},[f,j,a]),{rect:R,bounds:T,scale:y,position:x,scrollState:b,inViewport:h,update:j}}var Ye=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","renderOrder","priority"],Be=r.memo(function(e){var n=e.track,o=e.children,i=e.margin,a=void 0===i?0:i,c=e.inViewportMargin,l=e.inViewportThreshold,s=e.visible,f=void 0===s||s,d=e.hideOffscreen,p=void 0===d||d,v=e.scissor,h=void 0!==v&&v,y=e.debug,g=void 0!==y&&y,b=e.as,w=void 0===b?"scene":b,S=e.renderOrder,E=void 0===S?1:S,R=e.priority,C=void 0===R?j.PRIORITY_SCISSORS:R,x=T(e,Ye),M=r.useCallback(function(e){null!==e&&V(e)},[]),k=r.useState(h?new u.Scene:null),_=k[0],V=k[1],A=U(),L=A.requestRender,$=A.renderScissor,D=P(function(e){return e.globalRender}),q=We(n,{rootMargin:c,threshold:l}),F=q.bounds,z=q.scale,N=q.position,W=q.scrollState,Y=q.inViewport;I(function(){_&&(_.visible=p?Y&&f:f)},[_,Y,p,f]),t.useFrame(function(e){var r=e.gl,t=e.camera;_&&z&&_.visible&&(_.position.y=N.y,_.position.x=N.x,h?$({gl:r,scene:_,camera:t,left:F.left-a,top:F.positiveYUpBottom-a,width:F.width+2*a,height:F.height+2*a}):L())},D?C:void 0);var B=m.default.createElement("group",{renderOrder:E},(!o||g)&&z&&m.default.createElement(qe,{scale:z}),o&&_&&z&&o(O({track:n,margin:a,renderOrder:E,scale:z,scrollState:W,inViewport:Y,scene:_,priority:C+E},x))),Q=w;return h&&_?t.createPortal(B,_):m.default.createElement(Q,{ref:M},B)}),Qe=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","debug","orthographic","renderOrder","priority"],Ge=r.memo(function(e){var n=e.track,o=e.children,i=e.margin,a=void 0===i?0:i,c=e.inViewportMargin,l=e.inViewportThreshold,s=e.visible,f=void 0===s||s,d=e.hideOffscreen,p=void 0===d||d,v=e.debug,h=void 0!==v&&v,y=e.orthographic,g=void 0!==y&&y,b=e.renderOrder,w=void 0===b?1:b,S=e.priority,E=void 0===S?j.PRIORITY_VIEWPORTS:S,R=T(e,Qe),C=r.useRef(null),x=r.useState(function(){return new u.Scene})[0],M=U().renderViewport,k=P(function(e){return e.pageReflow}),_=P(function(e){return e.scaleMultiplier}),V=We(n,{rootMargin:c,threshold:l}),A=V.rect,L=V.bounds,$=V.scale,D=V.position,q=V.scrollState,F=V.inViewport;I(function(){x.visible=p?F&&f:f},[F,p,f]);var z=r.useState(0),N=z[0],W=z[1];I(function(){if(A){var e=A.width*_,r=A.height*_,n=Math.max(e,r);W(n),C.current&&!g&&(C.current.aspect=(e+2*a*_)/(r+2*a*_),C.current.fov=180/Math.PI*2*Math.atan((r+2*a*_)/(2*n)),C.current.updateProjectionMatrix(),C.current.updateMatrixWorld()),t.invalidate()}},[n,k,A,_]);var Y=r.useCallback(function(e,r){n.current&&e.target===n.current&&(r.pointer.set((e.clientX-L.left+a)/(L.width+2*a)*2-1,-(e.clientY-L.top+a)/(L.height+2*a)*2+1),r.raycaster.setFromCamera(r.pointer,C.current))},[L,D]);return t.useFrame(function(e){x&&$&&x.visible&&M({gl:e.gl,scene:x,camera:C.current,left:L.left-a,top:L.positiveYUpBottom-a,width:L.width+2*a,height:L.height+2*a})},E),L&&t.createPortal(m.default.createElement(m.default.Fragment,null,!g&&m.default.createElement("perspectiveCamera",{ref:C,position:[0,0,N],onUpdate:function(e){return e.updateProjectionMatrix()}}),g&&$&&m.default.createElement("orthographicCamera",{ref:C,position:[0,0,N],onUpdate:function(e){return e.updateProjectionMatrix()},left:$[0]/-2,right:$[0]/2,top:$[1]/2,bottom:$[1]/-2,far:2*N,near:.001}),m.default.createElement("group",{renderOrder:w},(!o||h)&&$&&m.default.createElement(qe,{scale:$}),o&&x&&$&&o(O({track:n,margin:a,renderOrder:w,scale:$,scrollState:q,inViewport:F,scene:x,camera:C.current,priority:E+w},R)))),x,{events:{compute:Y,priority:E},size:{width:A.width,height:A.height}})});function He(e,t,n){void 0===t&&(t={});var o=void 0===n?{}:n,i=o.key,a=o.dispose,c=void 0===a||a,l=P(function(e){return e.updateCanvas}),s=P(function(e){return e.renderToCanvas}),f=P(function(e){return e.removeFromCanvas}),d=r.useMemo(function(){return i||u.MathUtils.generateUUID()},[]);I(function(){s(d,e,{inactive:!1})},[d]),r.useEffect(function(){return function(){f(d,c)}},[d]);var p=r.useCallback(function(e){l(d,e)},[l,d]);return r.useEffect(function(){p(t)},[].concat(Object.values(t))),p}var Je=["children","id"],Xe=r.forwardRef(function(e,r){var t=e.id;return He(e.children,O({},T(e,Je),{ref:r}),{key:t}),null}),Ke=!1;S.default.then(function(e){Ke=e});var Ze=["children","duration","easing","smooth","direction","config"],er=function(e){return 1===e?1:1-Math.pow(2,-10*e)},rr=r.forwardRef(function(e,t){var n=e.children,o=e.duration,i=void 0===o?1:o,a=e.easing,u=void 0===a?er:a,c=e.smooth,l=void 0===c||c,s=e.direction,f=void 0===s?"vertical":s,d=e.config,p=T(e,Ze),v=r.useRef();return r.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=v.current)?void 0:e.start()},stop:function(){var e;return null==(e=v.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=v.current)?void 0:t.on(e,r)},once:function(e,r){var t;return null==(t=v.current)?void 0:t.once(e,r)},off:function(e,r){var t;return null==(t=v.current)?void 0:t.off(e,r)},notify:function(){var e;return null==(e=v.current)?void 0:e.notify()},scrollTo:function(e,r){var t;return null==(t=v.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=v.current)?void 0:r.raf(e)},__lenis:v.current}}),r.useEffect(function(){var e=v.current=new R.default(O({duration:i,easing:u,smooth:l,direction:f},d));return function(){e.destroy()}},[i,u,l,f]),n&&n(p)}),tr=r.forwardRef(function(e,n){var o=e.children,i=e.enabled,a=void 0===i||i,u=e.locked,c=void 0!==u&&u,l=e.scrollRestoration,s=void 0===l?"auto":l,f=e.disablePointerOnScroll,d=void 0===f||f,p=e.horizontal,v=void 0!==p&&p,h=e.scrollInContainer,y=void 0!==h&&h,g=e.updateGlobalState,w=void 0===g||g,S=e.onScroll,E=e.config,R=r.useRef(),C=r.useRef(),T=r.useRef(!1),x=P(function(e){return e.scroll});r.useImperativeHandle(n,function(){return{scrollTo:function(e,r){var t;return null==(t=C.current)?void 0:t.scrollTo(e,r)},__lenis:C.current}});var j=function(e){d&&R.current&&T.current!==e&&(T.current=e,R.current.style.pointerEvents=e?"none":"auto")},M=r.useCallback(function(){j(!1)},[]),k=r.useCallback(function(e){var r;return null==(r=C.current)||r.on("scroll",e),function(){var r;return null==(r=C.current)?void 0:r.off("scroll",e)}},[]);I(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=s)},[]),r.useEffect(function(){var e,r,n,o=t.addEffect(function(e){var r;return null==(r=C.current)?void 0:r.raf(e)});null==(e=C.current)||e.on("scroll",function(e){var r=e.scroll,n=e.limit,o=e.velocity,i=e.direction,a=e.progress,u=v?r:0;w&&(x.y=v?0:r,x.x=u,x.limit=n,x.velocity=o,x.direction=i,x.progress=a);var c=b.default.debounce(function(){return j(!0)},100,!0);Math.abs(o)>1.4?c():j(!1),S&&S({scroll:r,limit:n,velocity:o,direction:i,progress:a}),t.invalidate()}),null==(r=C.current)||r.notify(),w&&(x.scrollDirection=v?"horizontal":"vertical",P.setState({scrollTo:null==(n=C.current)?void 0:n.scrollTo}),P.setState({onScroll:k}),P.getState().scroll.y=window.scrollY,P.getState().scroll.x=window.scrollX);var i=function(){return t.invalidate()};return window.addEventListener("pointermove",M),window.addEventListener("wheel",i),function(){var e;null==(e=C.current)||e.off("scroll"),o(),window.removeEventListener("pointermove",M),window.removeEventListener("wheel",i)}},[]),r.useEffect(function(){w&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",a),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!a),P.setState({hasSmoothScrollbar:a}))},[a]),r.useEffect(function(){var e,r;c?null==(e=C.current)||e.stop():null==(r=C.current)||r.start()},[c]);var _=r.useMemo(function(){if("undefined"==typeof document)return{};var e=document.documentElement,r=document.body,t=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",y),r.classList.toggle("ScrollRig-scrollWrapper",y),{wrapper:r,content:t}},[y]);return m.default.createElement(rr,{ref:C,direction:v?"horizontal":"vertical",config:O(y?{smoothTouch:!0,wrapper:_.wrapper,content:_.content}:{},E)},function(e){return o(O({},e,{ref:R}))})});e.GlobalCanvas=function(e){var r=e.children,t=e.onError,n=T(e,$e);return I(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),m.default.createElement(Ae,{onError:function(e){t&&t(e),P.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},m.default.createElement(De,O({},n),r),m.default.createElement("noscript",null,m.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},e.ScrollScene=Be,e.SmoothScrollbar=tr,e.UseCanvas=Xe,e.ViewportScrollScene=Ge,e.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},e.useCanvas=He,e.useCanvasStore=P,e.useImageAsTexture=function(e,n){var o,i,a,c=void 0===n?{}:n,l=c.initTexture,s=void 0===l||l,d=c.premultiplyAlpha,p=void 0===d?"default":d,v=t.useThree(function(e){return e.gl}),h=ze(),m=P(function(e){return e.debug}),y=f.suspend(function(){return u.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(r){var t=e.current;function n(){r(null==t?void 0:t.currentSrc)}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[e,h],{equal:E.default}),g=(o=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=(i=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||o||i&&a<98?u.TextureLoader:u.ImageBitmapLoader),b=t.useLoader(g,y,function(e){e instanceof u.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:p,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(Ke?"image/webp,":"")+"*/*"}))}),w=r.useMemo(function(){return b instanceof u.Texture?b:b instanceof ImageBitmap?new u.CanvasTexture(b):void 0},[b]);return r.useEffect(function(){s&&v.initTexture(w),u.DefaultLoadingManager.itemEnd("waiting for DOM image"),m&&console.log("useImageAsTexture","initTexture()")},[v,w,s]),w},e.useScrollRig=U,e.useScrollbar=Ne,e.useTracker=We});
//# sourceMappingURL=scrollrig.umd.js.map
