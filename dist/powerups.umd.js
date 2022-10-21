!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react"),require("three"),require("@react-three/fiber"),require("@react-three/drei"),require("@14islands/r3f-scroll-rig")):"function"==typeof define&&define.amd?define(["exports","react","three","@react-three/fiber","@react-three/drei","@14islands/r3f-scroll-rig"],r):r((e||self).r3FScrollRig={},e.react,e.three,e["@react-three/fiber"],e["@react-three/drei"],e["@14islands/r3f-scroll-rig"])}(this,function(e,r,t,i,n,l){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/u(r);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r.indexOf(t=l[i])>=0||(n[t]=e[t]);return n}var s=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],f=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],d=r.forwardRef(function(e,n){var u=e.el,s=e.scale,d=e.scrollState,h=e.vertexShader,p=e.fragmentShader,v=e.invalidateFrameLoop,m=void 0!==v&&v,g=e.widthSegments,S=void 0===g?128:g,y=e.heightSegments,w=void 0===y?128:y,x=c(e,f),_=r.useRef(null),b=r.useRef(null),E=i.useThree(),k=E.invalidate,F=E.gl,T=E.size,z=i.useThree(function(e){return e.viewport.dpr}),M=l.useScrollbar().scroll,R=l.useScrollRig().scaleMultiplier,L=l.useImageAsTexture(u),V=r.useMemo(function(){return{u_color:{value:new t.Color("black")},u_time:{value:0},u_pixelRatio:{value:z},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new t.Vector2},u_rect:{value:new t.Vector2},u_size:{value:new t.Vector2},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:R}}},[z]);r.useEffect(function(){L&&_.current&&(_.current.uniforms.u_texture.value=L,_.current.uniforms.u_size.value.set(L.image.width,L.image.height),_.current.uniforms.u_loaded.value=!0)},[L,F]),r.useEffect(function(){_.current&&(_.current.uniforms.u_res.value.set(T.width,T.height),_.current.uniforms.u_rect.value.set(null==s?void 0:s[0],null==s?void 0:s[1]))},[T,s]),i.useFrame(function(e,r){d.inViewport&&b.current&&_.current&&_.current.uniforms.u_loaded.value&&(_.current.uniforms.u_time.value+=r,_.current.uniforms.u_rect.value.set(b.current.scale.x,b.current.scale.y),_.current.uniforms.u_velocity.value=M.velocity,_.current.uniforms.u_progress.value=d.progress,_.current.uniforms.u_visibility.value=d.visibility,_.current.uniforms.u_viewport.value=d.viewport,m&&k())});var O,j=r.useMemo(function(){return[{vertexShader:h,fragmentShader:p}]},[h,p]);return o.default.createElement(o.default.Fragment,null,o.default.createElement("mesh",a({ref:(O=[b,n],function(e){O.forEach(function(r){"function"==typeof r?r(e):null!=r&&(r.current=e)})})},x),o.default.createElement("planeGeometry",{attach:"geometry",args:[1,1,S,w]}),o.default.createElement("shaderMaterial",{ref:_,args:j,transparent:!0,uniforms:V})))}),h=["children","speed"],p=function(e){var t=e.children,n=e.scrollState,u=e.parallax,a=r.useRef(null),c=i.useThree(function(e){return e.size}),s=l.useScrollRig().scaleMultiplier;return i.useFrame(function(){n.inViewport&&(a.current.position.y=u*(2*n.progress-1)*s*c.height)}),o.default.createElement("mesh",{ref:a},t)},v=["scale"],m=["children","track","stickyLerp","fillViewport"],g=function(e){var t=e.children,n=e.childTop,l=e.childBottom,u=e.scrollState,a=e.parentScale,c=e.childScale,s=e.priority,f=e.stickyLerp,d=void 0===f?1:f,h=r.useRef(null),p=i.useThree(function(e){return e.size});return i.useFrame(function(e,r){if(u.inViewport){var t=.5*a[1]-.5*c[1];h.current.position.y=function(e,r,t,i,n=60){return l=r,e*(1-(u=void 0===i?t:1-Math.pow(1-t,i/(1/n))))+l*u;var l,u}(h.current.position.y,u.viewport+n/p.height<1?t:u.visibility-l/a[1]<1?-n+t-(u.viewport-1)*p.height:.5*-a[1]+.5*c[1],d,r)}},s),o.default.createElement("group",{ref:h},t)};e.ParallaxScrollScene=function(e){var r=e.children,t=e.speed,i=void 0===t?1:t,n=c(e,h),u=i-1;return o.default.createElement(l.ScrollScene,a({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},n),function(e){return o.default.createElement(p,a({parallax:u},e),r(e))})},e.StickyScrollScene=function(e){var t=e.children,n=e.track,u=e.stickyLerp,s=e.fillViewport,f=c(e,m),d=i.useThree(function(e){return e.size}),h=r.useRef(n.current),p=r.useMemo(function(){var e=getComputedStyle(n.current);return"sticky"===e.position?h.current=n.current.parentElement:console.error("StickyScrollScene: tracked element is not position:sticky"),e},[n]);return o.default.createElement(l.ScrollScene,a({track:h},f),function(e,r,t,i){var n=i.stickyLerp,l=i.fillViewport;return function(i){var u=i.scale,s=c(i,v),f=[parseFloat(t.width),parseFloat(t.height),1],d=parseFloat(t.top),h=r.height-d-f[1];return l&&(f=[r.width,r.height,1],d=0,h=0),o.default.createElement(g,a({parentScale:u,childScale:f,stickyLerp:n,childTop:d,childBottom:h},s),e(a({scale:f},s)))}}(t,d,p,{stickyLerp:u,fillViewport:s}))},e.WebGLImage=d,e.WebGLText=function(e){var u=e.el,f=e.children,d=e.material,h=e.scale,p=e.font,v=e.fontOffsetY,m=void 0===v?0:v,g=e.fontOffsetX,S=void 0===g?0:g,y=e.overrideEmissive,w=void 0!==y&&y,x=e.color,_=c(e,s),b=i.useThree().size,E=l.useScrollRig().scaleMultiplier,k=r.useMemo(function(){if(!u.current)return{};var e=window.getComputedStyle(u.current);return{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:new t.Color(x||e.color).convertSRGBToLinear(),fontSize:parseFloat(e.fontSize)*E,textAlign:e.textAlign}},[u,b,h,x,E]),F=k.textColor,T=k.fontSize,z=k.textAlign,M=k.lineHeight,R=k.letterSpacing;r.useEffect(function(){d&&w&&(d.emissive=x)},[d,x,w]);var L=0;return"left"===z||"start"===z?L=-.5*h[0]:"right"!==z&&"end"!==z||(L=.5*h[0]),o.default.createElement(n.Text,a({fontSize:T,maxWidth:h?h[0]:b.width,lineHeight:M,textAlign:z,letterSpacing:R,overflowWrap:"break-word",font:p,color:F,anchorX:z,anchorY:"top",position:[L+T*S,(h?.5*h[1]:.5*b.height)+T*m,0],material:d},_),f)}});
//# sourceMappingURL=powerups.umd.js.map
