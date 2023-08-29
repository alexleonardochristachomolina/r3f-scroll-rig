var e=require("react"),t=require("@react-three/fiber"),r=require("@juggle/resize-observer"),n=require("query-string"),o=require("zustand"),i=require("three"),l=require("react-intersection-observer"),a=require("debounce"),u=require("vecn"),c=require("suspend-react"),s=require("supports-webp"),d=require("fast-deep-equal"),f=require("@studio-freight/lenis");function v(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=/*#__PURE__*/v(e),h=/*#__PURE__*/v(o),g=/*#__PURE__*/v(a),m=/*#__PURE__*/v(u),w=/*#__PURE__*/v(s),b=/*#__PURE__*/v(d),y=/*#__PURE__*/v(f);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function E(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function C(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var T="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,O={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},I=h.default(function(e){return{debug:!1,scaleMultiplier:O.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:O.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:S({},i,((o={})[t]={mesh:r,props:n,instances:1},o))}})},updateCanvas:function(t,r){return e(function(e){var n,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:S({},o,((n={})[t]={mesh:i.mesh,props:S({},i.props,r),instances:l},n))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[t])?void 0:n.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:E(o,[t].map(C))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:S({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:function(){},onScroll:function(){return function(){}}}}),x=function(){var t=I(function(e){return e.requestReflow}),n=I(function(e){return e.debug});return e.useEffect(function(){var e=new(window.ResizeObserver||r.ResizeObserver)(function(){t(),n&&console.log("ResizeManager","document.body height changed")});return e.observe(document.body),function(){null==e||e.disconnect()}},[]),null},M=["makeDefault","margin"],L=e.forwardRef(function(r,n){var o=r.makeDefault,i=void 0!==o&&o,l=r.margin,a=void 0===l?0:l,u=E(r,M),c=t.useThree(function(e){return e.set}),s=t.useThree(function(e){return e.camera}),d=t.useThree(function(e){return e.size}),f=t.useThree(function(e){return e.viewport}),v=e.useRef(null);e.useImperativeHandle(n,function(){return v.current});var h=I(function(e){return e.pageReflow}),g=I(function(e){return e.scaleMultiplier}),m=e.useMemo(function(){var e,t=(d.height+2*a)*g,r=(d.width+2*a)*g/t,n=u.fov||50,o=null==u||null==(e=u.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(t/(2*o)):o=t/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:r}},[d,g,h]),w=m.fov,b=m.distance,y=m.aspect;return T(function(){v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld(),c(function(e){return{viewport:S({},e.viewport,f.getCurrentViewport(s))}})},[d,g,h]),T(function(){if(i){var e=s;return c(function(){return{camera:v.current}}),function(){return c(function(){return{camera:e}})}}},[v,i,c]),p.default.createElement("perspectiveCamera",S({ref:v,position:[0,0,b],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:y,fov:w,far:2*b},u))}),k=["makeDefault","margin"],_=e.forwardRef(function(r,n){var o=r.makeDefault,i=void 0!==o&&o,l=r.margin,a=void 0===l?0:l,u=E(r,k),c=t.useThree(function(e){return e.set}),s=t.useThree(function(e){return e.camera}),d=t.useThree(function(e){return e.size}),f=I(function(e){return e.pageReflow}),v=I(function(e){return e.scaleMultiplier}),h=e.useMemo(function(){return Math.max(d.width*v,d.height*v)},[d,f,v]),g=e.useRef(null);return e.useImperativeHandle(n,function(){return g.current}),T(function(){g.current.lookAt(0,0,0),g.current.updateProjectionMatrix(),g.current.updateMatrixWorld()},[h,d]),T(function(){if(i){var e=s;return c(function(){return{camera:g.current}}),function(){return c(function(){return{camera:e}})}}},[g,i,c]),p.default.createElement("orthographicCamera",S({left:d.width*v/-2-a*v,right:d.width*v/2+a*v,top:d.height*v/2+a*v,bottom:d.height*v/-2-a*v,far:2*h,position:[0,0,h],near:.001,ref:g,onUpdate:function(e){return e.updateProjectionMatrix()}},u))});function P(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return P(e,t)}))}var V,D=new i.Vector2,j=function(e){void 0===e&&(e=[0]),I.getState().globalRenderQueue=I.getState().globalRenderQueue||[0],I.getState().globalRenderQueue=[].concat(I.getState().globalRenderQueue||[],e)},A=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,u=e.layer,c=void 0===u?0:u,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;r&&n&&(t.autoClear=void 0!==s&&s,t.setScissor(o,i,l,a),t.setScissorTest(!0),n.layers.set(c),f&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1))},q=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,u=e.layer,c=void 0===u?0:u,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,p=e.clearDepth,h=void 0!==p&&p;r&&n&&(t.getSize(D),t.autoClear=v,t.setViewport(o,i,l,a),t.setScissor(o,i,l,a),t.setScissorTest(d),n.layers.set(c),h&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1),t.setViewport(0,0,D.x,D.y))},F=function(e,r,n,o){void 0===n&&(n=0),O.preloadQueue.push(function(t,i,l){t.setScissorTest(!1),P(e||i,!1),r.layers.set(n),t.render(e||i,r||l),P(e||i,!0),o&&o()}),t.invalidate()},z=function(){var t=I(function(e){return e.isCanvasAvailable}),r=I(function(e){return e.hasSmoothScrollbar}),n=I(function(e){return e.requestReflow}),o=I(function(e){return e.pageReflow}),i=I(function(e){return e.debug}),l=I(function(e){return e.scaleMultiplier});return e.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:t,hasSmoothScrollbar:r,scaleMultiplier:l,preloadScene:F,requestRender:j,renderScissor:A,renderViewport:q,reflow:n,reflowCompleted:o}},U=function(r){var n=r.children,o=t.useThree(function(e){return e.gl}),i=I(function(e){return e.canvasChildren}),l=z();return e.useEffect(function(){Object.keys(i).length||(l.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.clear(),l.requestRender(),t.invalidate())},[i]),l.debug&&console.log("GlobalChildren",Object.keys(i).length),p.default.createElement(p.default.Fragment,null,n,Object.keys(i).map(function(t){var r=i[t],n=r.mesh,o=r.props;return"function"==typeof n?p.default.createElement(e.Fragment,{key:t},n(S({key:t},l,o))):e.cloneElement(n,S({key:t},o))}))},Y=function(){var e=t.useThree(function(e){return e.gl}),r=t.useThree(function(e){return e.frameloop}),n=I(function(e){return e.globalClearDepth}),o=I(function(e){return e.globalPriority}),i=z();return T(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),t.useFrame(function(r){var n=r.camera,o=r.scene;O.preloadQueue.length&&(O.preloadQueue.forEach(function(t){return t(e,o,n)}),e.clear(),O.preloadQueue=[],i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),t.invalidate())},O.PRIORITY_PRELOAD),t.useFrame(function(t){var o=t.camera,i=t.scene,l=I.getState().globalRenderQueue;("always"===r||l)&&(o.layers.disableAll(),l?l.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),n&&e.clearDepth(),e.render(i,o)),I.getState().clearGlobalRenderQueue()},o),null},B=/*#__PURE__*/function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={error:!1},r.props=t,r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,R(t,r),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(e.Component),Q="8.11.16",G=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],H=["children","onError"];"undefined"!=typeof window&&(V=window.ResizeObserver||r.ResizeObserver);var W=function(r){var o=r.children,i=r.as,l=void 0===i?t.Canvas:i,a=r.gl,u=r.style,c=r.orthographic,s=r.camera,d=r.debug,f=r.scaleMultiplier,v=void 0===f?O.DEFAULT_SCALE_MULTIPLIER:f,h=r.globalRender,g=void 0===h||h,m=r.globalPriority,w=void 0===m?O.PRIORITY_GLOBAL:m,b=r.globalClearDepth,y=void 0!==b&&b,R=E(r,G),C=I(function(e){return e.globalRender});return T(function(){"undefined"!=typeof window&&(window.__r3f_scroll_rig=Q);var e=n.parse(window.location.search);(d||void 0!==e.debug)&&(I.setState({debug:!0}),console.info("@14islands/r3f-scroll-rig@"+Q))},[d]),T(function(){e.startTransition(function(){I.setState({scaleMultiplier:v,globalRender:g,globalPriority:w,globalClearDepth:y})})},[v,w,g,y]),p.default.createElement(l,S({id:"ScrollRig-canvas",camera:{manual:!0},gl:S({failIfMajorPerformanceCaveat:!0},a),resize:{scroll:!1,debounce:0,polyfill:V},style:S({position:"fixed",top:0,left:0,right:0,height:"100vh"},u)},R),!c&&p.default.createElement(L,S({manual:!0,makeDefault:!0},s)),c&&p.default.createElement(_,S({manual:!0,makeDefault:!0},s)),C&&p.default.createElement(Y,null),"function"==typeof o?o(p.default.createElement(U,null)):p.default.createElement(U,null,o),p.default.createElement(x,null))},X=function(e){return p.default.createElement("mesh",{scale:e.scale},p.default.createElement("planeGeometry",null),p.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new i.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},N="undefined"!=typeof window;function J(t){var n=(void 0===t?{}:t).debounce,o=void 0===n?0:n,i=e.useState({width:N?window.innerWidth:Infinity,height:N?window.innerHeight:Infinity}),l=i[0],a=i[1];return e.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;t===l.width&&r===l.height||a({width:t,height:r})}var n,i=g.default.debounce(t,o),u=window.ResizeObserver||r.ResizeObserver;return e?(n=new u(i)).observe(e):window.addEventListener("resize",i),t(),function(){var e;window.removeEventListener("resize",i),null==(e=n)||e.disconnect()}},[l,a]),l}function K(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}var Z=function(){return{enabled:I(function(e){return e.hasSmoothScrollbar}),scroll:I(function(e){return e.scroll}),scrollTo:I(function(e){return e.scrollTo}),onScroll:I(function(e){return e.onScroll}),__lenis:I(function(e){return e.__lenis})}};function $(t,r){var n=J(),o=Z(),i=o.scroll,a=o.onScroll,u=I(function(e){return e.scaleMultiplier}),c=I(function(e){return e.pageReflow}),s=I(function(e){return e.debug}),d=e.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),f=d.autoUpdate,v=d.wrapper,p=l.useInView({rootMargin:d.rootMargin,threshold:d.threshold}),h=p.ref,g=p.inView;T(function(){h(t.current)},[t,null==t?void 0:t.current]);var w=e.useState(m.default.vec3(0,0,0)),b=w[0],y=w[1],R=e.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,E=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,C=e.useState(E),O=C[0],x=C[1],M=e.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,L=e.useRef(m.default.vec3(0,0,0)).current;T(function(){var e,r=null==(e=t.current)?void 0:e.getBoundingClientRect();if(r){var o=v?v.scrollTop:window.scrollY,i=v?v.scrollLeft:window.scrollX;E.top=r.top+o,E.bottom=r.bottom+o,E.left=r.left+i,E.right=r.right+i,E.width=r.width,E.height=r.height,x(S({},E)),y(m.default.vec3((null==E?void 0:E.width)*u,(null==E?void 0:E.height)*u,1)),s&&console.log("useTracker.getBoundingClientRect:",E,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",c)}},[t,n,c,u,s]);var k=e.useCallback(function(e){var r=void 0===e?{}:e,o=r.onlyUpdateInViewport;if(t.current&&(void 0===o||!o||R.inViewport)){var l=r.scroll||i;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(M,E,l,n),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(L,M,u);var a="horizontal"===l.scrollDirection,c=a?"width":"height",s=n[c]-M[a?"left":"top"];R.progress=K(s,0,n[c]+M[c],0,1),R.visibility=K(s,0,M[c],0,1),R.viewport=K(s,0,n[c],0,1)}},[t,n,u,i]);return T(function(){R.inViewport=g,k({onlyUpdateInViewport:!1}),s&&console.log("useTracker.inViewport:",g,"update()")},[g]),T(function(){k({onlyUpdateInViewport:!1}),s&&console.log("useTracker.update on resize/reflow")},[k,c]),e.useEffect(function(){if(f)return a(function(e){return k({onlyUpdateInViewport:!0})})},[f,k,a]),{scale:b,inViewport:g,rect:O,bounds:M,position:L,scrollState:R,update:k}}var ee=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],te=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud","position","rect"],re=["track","margin","inViewportMargin","inViewportThreshold","priority"],ne=["bounds"],oe=function(r){var n=r.track,o=r.children,i=r.margin,l=void 0===i?0:i,a=r.visible,u=void 0===a||a,c=r.hideOffscreen,s=void 0===c||c,d=r.debug,f=void 0!==d&&d,v=r.orthographic,h=void 0!==v&&v,g=r.priority,m=void 0===g?O.PRIORITY_VIEWPORTS:g,w=r.inViewport,b=r.bounds,y=r.scale,R=r.scrollState,C=r.camera,I=r.hud,x=E(r,te),M=t.useThree(function(e){return e.scene}),k=t.useThree(function(e){return e.get}),P=t.useThree(function(e){return e.setEvents}),V=z().renderViewport;return T(function(){M.visible=s?w&&u:u},[w,s,u]),e.useEffect(function(){var e=k().events.connected;return P({connected:n.current}),function(){return P({connected:e})}},[]),t.useFrame(function(e){var t=e.scene;t.visible&&V({gl:e.gl,scene:t,camera:e.camera,left:b.left-l,top:b.positiveYUpBottom-l,width:b.width+2*l,height:b.height+2*l,clearDepth:!!I})},m),p.default.createElement(p.default.Fragment,null,!h&&p.default.createElement(L,S({manual:!0,margin:l,makeDefault:!0},C)),h&&p.default.createElement(_,S({manual:!0,margin:l,makeDefault:!0},C)),(!o||f)&&y&&p.default.createElement(X,{scale:y}),o&&y&&o(S({track:n,margin:l,scale:y,scrollState:R,inViewport:w,priority:m},x)))};function ie(t,r,n){void 0===r&&(r={});var o=void 0===n?{}:n,l=o.key,a=o.dispose,u=void 0===a||a,c=I(function(e){return e.updateCanvas}),s=I(function(e){return e.renderToCanvas}),d=I(function(e){return e.removeFromCanvas}),f=e.useMemo(function(){return l||i.MathUtils.generateUUID()},[]);T(function(){s(f,t,S({},r,{inactive:!1}))},[f]),e.useEffect(function(){return function(){d(f,u)}},[f]);var v=e.useCallback(function(e){c(f,e)},[c,f]);return e.useEffect(function(){v(r)},[].concat(Object.values(r))),v}var le=["children","id","dispose"],ae=e.forwardRef(function(e,t){var r=e.children,n=e.id,o=e.dispose,i=void 0===o||o,l=E(e,le);return r?(ie(r,S({},l,{ref:t}),{key:n,dispose:i}),null):null}),ue=!1;w.default.then(function(e){ue=e});var ce=e.forwardRef(function(t,r){var n=t.children,o=t.enabled,i=void 0===o||o,l=t.locked,a=void 0!==l&&l,u=t.scrollRestoration,c=void 0===u?"auto":u,s=t.disablePointerOnScroll,d=void 0===s||s,f=t.horizontal,v=void 0!==f&&f,p=t.scrollInContainer,h=void 0!==p&&p,g=t.updateGlobalState,m=void 0===g||g,w=t.onScroll,b=t.config,R=void 0===b?{}:b,E=t.invalidate,C=void 0===E?function(){}:E,O=t.addEffect,x=e.useRef(),M=e.useRef(),L=e.useRef(!1),k=I(function(e){return e.scroll});e.useImperativeHandle(r,function(){return{start:function(){var e;return null==(e=M.current)?void 0:e.start()},stop:function(){var e;return null==(e=M.current)?void 0:e.stop()},on:function(e,t){var r;return null==(r=M.current)?void 0:r.on(e,t)},notify:function(){var e;return null==(e=M.current)?void 0:e.emit()},emit:function(){var e;return null==(e=M.current)?void 0:e.emit()},scrollTo:function(e,t){var r;return null==(r=M.current)?void 0:r.scrollTo(e,t)},raf:function(e){var t;return null==(t=M.current)?void 0:t.raf(e)},__lenis:M.current}});var _=e.useCallback(function(e){d&&x.current&&L.current!==e&&(L.current=e,x.current.style.pointerEvents=e?"none":"auto")},[d,x,L]);return T(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=c)},[]),T(function(){var e,t,r=document.documentElement,n=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",h),n.classList.toggle("ScrollRig-scrollWrapper",h),h&&Object.assign(R,{smoothTouch:!0,wrapper:n,content:o}),M.current=new y.default(S({orientation:v?"horizontal":"vertical"},R,i?{}:{smoothWheel:!1,syncTouch:!1,smoothTouch:!1})),O?e=O(function(e){var t;return null==(t=M.current)?void 0:t.raf(e)}):(t=requestAnimationFrame(function e(r){var n;null==(n=M.current)||n.raf(r),t=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(t)}),function(){var t;e(),null==(t=M.current)||t.destroy()}},[i]),T(function(){var e=M.current,t=function(e){var t=e.scroll,r=e.limit,n=e.velocity,o=e.direction,i=e.progress,l=v?t:0;m&&(k.y=v?0:t,k.x=l,k.limit=r,k.velocity=n,k.direction=o,k.progress=i||0),Math.abs(n)>1.5&&_(!0),Math.abs(n)<1&&_(!1),w&&w({scroll:t,limit:r,velocity:n,direction:o,progress:i}),C()};return null==e||e.on("scroll",t),m&&(k.scrollDirection=v?"horizontal":"vertical",I.setState({__lenis:e,scrollTo:function(){null==e||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(t){return null==e||e.on("scroll",t),null==e||e.emit(),function(){return null==e?void 0:e.off("scroll",t)}}}),I.getState().scroll.y=window.scrollY,I.getState().scroll.x=window.scrollX),null==e||e.emit(),function(){null==e||e.off("scroll",t),m&&I.setState({__lenis:void 0,onScroll:function(){return function(){}},scrollTo:function(){}})}},[i]),T(function(){var e=function(){return C()},t=function(){return _(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),e.useEffect(function(){m&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),I.setState({hasSmoothScrollbar:i}))},[i]),e.useEffect(function(){var e,t;a?null==(e=M.current)||e.stop():null==(t=M.current)||t.start()},[a]),n({ref:x})}),se=e.forwardRef(function(e,r){return p.default.createElement(ce,S({ref:r,invalidate:t.invalidate,addEffect:t.addEffect},e))});exports.GlobalCanvas=function(e){var t=e.children,r=e.onError,n=E(e,H);return T(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),p.default.createElement(B,{onError:function(e){r&&r(e),I.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},p.default.createElement(W,S({},n),t),p.default.createElement("noscript",null,p.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},exports.ScrollScene=function(r){var n=r.track,o=r.children,l=r.margin,a=void 0===l?0:l,u=r.inViewportMargin,c=r.inViewportThreshold,s=r.visible,d=void 0===s||s,f=r.hideOffscreen,v=void 0===f||f,h=r.scissor,g=void 0!==h&&h,m=r.debug,w=void 0!==m&&m,b=r.as,y=void 0===b?"scene":b,R=r.priority,C=void 0===R?O.PRIORITY_SCISSORS:R,x=E(r,ee),M=e.useCallback(function(e){null!==e&&_(e)},[]),L=e.useState(g?new i.Scene:null),k=L[0],_=L[1],P=z(),V=P.requestRender,D=P.renderScissor,j=I(function(e){return e.globalRender}),A=$(n,{rootMargin:u,threshold:c}),q=A.bounds,F=A.scale,U=A.position,Y=A.scrollState,B=A.inViewport;T(function(){k&&(k.visible=v?B&&d:d)},[k,B,v,d]),e.useEffect(function(){k&&(k.position.y=U.y,k.position.x=U.x)},[F,k,B]),t.useFrame(function(e){var t=e.gl,r=e.camera;k&&k.visible&&(k.position.y=U.y,k.position.x=U.x,g?D({gl:t,scene:k,camera:r,left:q.left-a,top:q.positiveYUpBottom-a,width:q.width+2*a,height:q.height+2*a}):V())},j?C:void 0);var Q=p.default.createElement(p.default.Fragment,null,(!o||w)&&F&&p.default.createElement(X,{scale:F}),o&&k&&F&&o(S({track:n,margin:a,scene:k,scale:F,scrollState:Y,inViewport:B,priority:C},x))),G=y;return g&&k?t.createPortal(Q,k):p.default.createElement(G,{ref:M},Q)},exports.SmoothScrollbar=se,exports.UseCanvas=ae,exports.ViewportScrollScene=function(r){var n=r.track,o=r.margin,l=void 0===o?0:o,a=r.inViewportMargin,u=r.inViewportThreshold,c=r.priority,s=E(r,re),d=e.useState(function(){return new i.Scene})[0],f=$(n,{rootMargin:a,threshold:u}),v=f.bounds,h=E(f,ne),g=e.useCallback(function(e,t){n.current&&e.target===n.current&&(t.pointer.set((e.clientX-v.left+l)/(v.width+2*l)*2-1,-(e.clientY-v.top+l)/(v.height+2*l)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera))},[v]);return v&&t.createPortal(p.default.createElement(oe,S({track:n,bounds:v,priority:c,margin:l},s,h)),d,{events:{compute:g,priority:c},size:{width:v.width,height:v.height}})},exports.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},exports.useCanvas=ie,exports.useCanvasStore=I,exports.useImageAsTexture=function(r,n){var o,l,a=void 0===n?{}:n,u=a.initTexture,s=void 0===u||u,d=a.premultiplyAlpha,f=void 0===d?"default":d,v=t.useThree(function(e){return e.gl}),p=J(),h=I(function(e){return e.debug}),g=e.useState(null==(o=r.current)?void 0:o.currentSrc),m=g[0],w=g[1];e.useEffect(function(){var e=r.current,t=function(){var e;w(null==(e=r.current)?void 0:e.currentSrc)};return null==e||e.addEventListener("load",t),function(){return null==e?void 0:e.removeEventListener("load",t)}},[r,m,w]);var y,S,R,E=c.suspend(function(){return i.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(e){var t=r.current;function n(){e(null==t?void 0:t.currentSrc),i.DefaultLoadingManager.itemEnd("waiting for DOM image")}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[r,p,null==(l=r.current)?void 0:l.currentSrc,m],{equal:b.default}),C=(y=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),R=(S=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||y||S&&Number(R)<98?i.TextureLoader:i.ImageBitmapLoader),T=t.useLoader(C,E,function(e){e instanceof i.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(ue?"image/webp,":"")+"*/*"}))}),O=e.useMemo(function(){return T instanceof i.Texture?T:T instanceof ImageBitmap?new i.CanvasTexture(T):void 0},[T]);return e.useEffect(function(){s&&v.initTexture(O),h&&console.log("useImageAsTexture","initTexture()")},[v,O,s]),O},exports.useScrollRig=z,exports.useScrollbar=Z,exports.useTracker=$;
//# sourceMappingURL=scrollrig.cjs.map
