import{v as wt,c as Ve,g as qt,a as Ct,u as St,b as Lt,Q as kt,d as xt}from"./QBtn.b73fdc02.js";import{c as $,a as v,h as S,r as x,i as Je,o as Y,b as N,n as _e,d as U,g as M,l as H,e as Te,f as Q,w as C,j as re,H as Qe,k as O,s as Ee,m as _t,p as Tt,P as Et,q as Bt,t as zt,u as ne,v as he,x as De,y as be,z as Le,A as ye,B as $t,C as Ze,D as Pt,E as oe,F as Ot,G as Ht,I as ke,J as et,K as P,L as B,M as tt,N as Mt,O as Vt,Q as Qt,R as Dt,S as At,T as Wt}from"./index.70e612dc.js";import{h as I,a as nt,b as Ae,c as Rt}from"./render.244d92f5.js";import{u as Be,a as ze}from"./use-dark.34998a2e.js";import{_ as Ft}from"./plugin-vue_export-helper.21dcd24c.js";var Nt=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:o.value},I(n.default))}}),It=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:o.value,role:"toolbar"},I(n.default))}});function Xt(){const e=x(!Je.value);return e.value===!1&&Y(()=>{e.value=!0}),{isHydrated:e}}const ot=typeof ResizeObserver!="undefined",We=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},n("resize",t))}}const{proxy:f}=M();if(f.trigger=l,ot===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),s()):a!==!0&&U(()=>{c(!0)})};return Y(()=>{c()}),N(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),_e}else{let a=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,H.passive),c=void 0)},w=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",l,H.passive),s())};const{isHydrated:d}=Xt();let c;return Y(()=>{U(()=>{i=f.$el,i&&w()})}),N(a),()=>{if(d.value===!0)return S("object",{class:"q--avoid-card-border",style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:w})}}}}),jt=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=Te(re,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const l=x(parseInt(e.heightHint,10)),s=x(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,b={};return u[0]==="l"&&t.left.space===!0&&(b[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(b[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(u,b){t.update("header",u,b)}function h(u,b){u.value!==b&&(u.value=b)}function _({height:u}){h(l,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),o("focusin",u)}C(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),C(d,u=>{m("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),o("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=nt(n.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S(xe,{debounce:0,onResize:_})),S("header",{class:w.value,style:q.value,onFocusin:L},u)}}});const Yt=["ul","ol"];var Ut=$({name:"QList",props:{...Be,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=M(),i=ze(e,o.proxy.$q),t=v(()=>Yt.includes(e.tag)?null:"list"),l=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:l.value,role:t.value},I(n.default))}});function Kt(e,n,o){let i;function t(){i!==void 0&&(Qe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:n},Qe.add(i)}}}const Gt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Jt=["beforeShow","show","beforeHide","hide"];function Zt({showing:e,canShow:n,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:l}){const s=M(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||n!==void 0&&n(u)!==!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(d("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||b===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),i!==void 0?i(u):d("show",u))}function h(u){if(f.disable===!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(d("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||b===!1)&&_(u)}function _(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:_)(a)}C(()=>f.modelValue,L),o!==void 0&&wt(s)===!0&&C(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),l===!0&&Y(()=>{L(f.modelValue)});const p={show:q,hide:h,toggle:w};return Object.assign(c,p),p}const en=[Element,String],tn=[null,document,document.body,document.scrollingElement,document.documentElement];function nn(e,n){let o=qt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return tn.includes(o)?window:o}function lt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function it(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function ge(){if(le!==void 0)return le;const e=document.createElement("p"),n=document.createElement("div");Ve(e,{width:"100%",height:"200px"}),Ve(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=n.clientWidth),n.remove(),le=o-i,le}function on(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,pe,we,Z,qe=!1,Re,Fe,Ne,F=null;function ln(e){an(e)&&Ee(e)}function an(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=_t(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let l=0;l<n.length;l++){const s=n[l];if(on(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ie(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){qe!==!0&&(qe=!0,requestAnimationFrame(()=>{qe=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(Z===void 0||n!==window.innerHeight)&&(Z=o-n,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Xe(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(n);pe=it(window),we=lt(window),Re=n.style.left,Fe=n.style.top,Ne=window.location.href,n.style.left=`-${pe}px`,n.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,H.passiveCapture),window.visualViewport.addEventListener("scroll",ie,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ie,H.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",ln,H.notPassive),e==="remove"&&(O.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ie,H.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,H.passiveCapture)):window.removeEventListener("scroll",Ie,H.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Re,n.style.top=Fe,window.location.href===Ne&&window.scrollTo(pe,we),Z=void 0)}function rn(e){let n="add";if(e===!0){if(J++,F!==null){clearTimeout(F),F=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(n="remove",O.is.ios===!0&&O.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Xe(n),F=null},100);return}}Xe(n)}function un(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,rn(n))}}}function sn(){let e=null;const n=M();function o(){e!==null&&(clearTimeout(e),e=null)}return Tt(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),Ct(n)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},cn=Object.keys($e);$e.all=!0;function je(e){const n={};for(const o of cn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?$e:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const dn=["INPUT","TEXTAREA"];function Ye(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&dn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function fn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Et.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ce(e,n,o){const i=Le(e);let t,l=i.left-n.event.x,s=i.top-n.event.y,f=Math.abs(l),d=Math.abs(s);const c=n.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:i,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:f,y:d},offset:{x:l,y:s},delta:{x:i.left-n.event.lastX,y:i.top-n.event.lastY}}}}let vn=0;var Se=Bt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&O.has.touch!==!0)return;function i(l,s){o.mouse===!0&&s===!0?Ee(l):(o.stop===!0&&be(l),o.prevent===!0&&De(l))}const t={uid:"qvtp_"+vn++,handler:n,modifiers:o,direction:je(o),noop:_e,mouseStart(l){Ye(l,t)&&zt(l)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ye(l,t)){const s=l.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(O.is.firefox===!0&&he(e,!0),t.lastEvt=l,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&De(c),l.cancelBubble===!0&&be(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}be(l)}const{left:f,top:d}=Le(l);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const s=Le(l),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,a=()=>{i(l,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),fn(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=Ce(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(ye(t,"temp"),O.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Ce(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=je(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ye(n,"main"),ye(n,"temp"),O.is.firefox===!0&&he(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function ae(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const Ue=150;var mn=$({name:"QDrawer",inheritAttrs:!1,props:{...Gt,...Be,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Jt,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:i}){const t=M(),{proxy:{$q:l}}=t,s=ze(e,l),{preventBodyScroll:f}=un(),{registerTimeout:d,removeTimeout:c}=sn(),a=Te(re,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let w,q=null,m;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),_=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>_.value===!0?e.miniWidth:e.width),p=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||at.value===!0));function b(r,g){if(W(),r!==!1&&a.animate(),z(0),h.value===!0){const T=a.instances[ee.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),D(1),a.isContainer.value!==!0&&f(!0)}else D(0),r!==!1&&fe(!1);d(()=>{r!==!1&&fe(!0),g!==!0&&o("show",r)},Ue)}function y(r,g){K(),r!==!1&&a.animate(),D(0),z(X.value*L.value),ve(),g!==!0?d(()=>{o("hide",r)},Ue):c()}const{show:k,hide:E}=Zt({showing:p,hideOnRouteChange:u,handleShow:b,handleHide:y}),{addToHistory:W,removeFromHistory:K}=Kt(p,E,u),R={belowBreakpoint:h,hide:E},V=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),Pe=x(0),j=x(!1),ue=x(!1),Oe=x(L.value*X.value),ee=v(()=>V.value===!0?"left":"right"),se=v(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ce=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(V.value?"R":"L")!==-1||l.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&p.value===!0&&h.value===!1),at=v(()=>e.overlay===!0&&p.value===!0&&h.value===!1),rt=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&j.value===!1?" hidden":"")),ut=v(()=>({backgroundColor:`rgba(0,0,0,${Pe.value*.4})`})),He=v(()=>V.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),st=v(()=>V.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ct=v(()=>{const r={};return a.header.space===!0&&He.value===!1&&(ce.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&st.value===!1&&(ce.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),dt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Oe.value}px)`};return h.value===!0?r:Object.assign(r,ct.value)}),ft=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),vt=v(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ce.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(He.value===!0?" q-drawer--top-padding":""))),mt=v(()=>{const r=l.lang.rtl===!0?e.side:ee.value;return[[Se,gt,void 0,{[r]:!0,mouse:!0}]]}),ht=v(()=>{const r=l.lang.rtl===!0?ee.value:e.side;return[[Se,Me,void 0,{[r]:!0,mouse:!0}]]}),bt=v(()=>{const r=l.lang.rtl===!0?ee.value:e.side;return[[Se,Me,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){pt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(h,r=>{r===!0?(w=p.value,p.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(p.value===!0?(z(0),D(0),ve()):k(!1))}),C(()=>e.side,(r,g)=>{a.instances[g]===R&&(a.instances[g]=void 0,a[g].space=!1,a[g].offset=0),a.instances[r]=R,a[r].size=L.value,a[r].space=G.value,a[r].offset=se.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),C(()=>e.behavior+e.breakpoint,de),C(a.isContainer,r=>{p.value===!0&&f(r!==!0),r===!0&&de()}),C(a.scrollbarWidth,()=>{z(p.value===!0?0:void 0)}),C(se,r=>{A("offset",r)}),C(G,r=>{o("onLayout",r),A("space",r)}),C(V,()=>{z()}),C(L,r=>{z(),me(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{me(r,L.value)}),C(()=>l.lang.rtl,()=>{z()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(yt(),a.animate())}),C(_,r=>{o("miniState",r)});function z(r){r===void 0?U(()=>{r=p.value===!0?0:L.value,z(X.value*r)}):(a.isContainer.value===!0&&V.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),Oe.value=r)}function D(r){Pe.value=r}function fe(r){const g=r===!0?"remove":a.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function yt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,q=setTimeout(()=>{q=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(r){if(p.value!==!1)return;const g=L.value,T=ae(r.distance.x,0,g);if(r.isFinal===!0){T>=Math.min(75,g)===!0?k():(a.animate(),D(0),z(X.value*g)),j.value=!1;return}z((l.lang.rtl===!0?V.value!==!0:V.value)?Math.max(g-T,0):Math.min(0,T-g)),D(ae(T/g,0,1)),r.isFirst===!0&&(j.value=!0)}function Me(r){if(p.value!==!0)return;const g=L.value,T=r.direction===e.side,te=(l.lang.rtl===!0?T!==!0:T)?ae(r.distance.x,0,g):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,g)===!0?(a.animate(),D(1),z(0)):E(),j.value=!1;return}z(X.value*te),D(ae(1-te/g,0,1)),r.isFirst===!0&&(j.value=!0)}function ve(){f(!1),fe(!0)}function A(r,g){a.update(e.side,r,g)}function pt(r,g){r.value!==g&&(r.value=g)}function me(r,g){A("size",r===!0?e.miniWidth:g)}return a.instances[e.side]=R,me(e.miniToOverlay,L.value),A("space",G.value),A("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Y(()=>{o("onLayout",G.value),o("miniState",_.value),w=e.showIfAbove===!0;const r=()=>{(p.value===!0?b:y)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}m=C(a.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?k(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),p.value===!0&&ve(),a.instances[e.side]===R&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push($t(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),mt.value)),r.push(Ae("div",{ref:"backdrop",class:rt.value,style:ut.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>bt.value)));const g=_.value===!0&&n.mini!==void 0,T=[S("div",{...i,key:""+g,class:[ft.value,i.class]},g===!0?n.mini():I(n.default))];return e.elevated===!0&&p.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ae("aside",{ref:"content",class:vt.value,style:dt.value},T,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ht.value)),S("div",{class:"q-drawer-container"},r)}}}),hn=$({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=M(),i=Te(re,Q);if(i===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Ze(Pt,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>S("div",{class:"q-page-container",style:t.value},I(n.default))}});const{passive:Ke}=H,bn=["both","horizontal","vertical"];var yn=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>bn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:en},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;C(()=>e.scrollTarget,()=>{d(),f()});function s(){i!==null&&i();const w=Math.max(0,lt(t)),q=it(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),n("scroll",{...o})}function f(){t=nn(l,e.scrollTarget),t.addEventListener("scroll",c,Ke),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,Ke),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=M();return C(()=>a.$q.lang.rtl,s),Y(()=>{l=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>o}),_e}}),gn=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=x(null),l=x(i.screen.height),s=x(e.container===!0?0:i.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),d=x(0),c=x(Je.value===!0?0:ge()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=k,e.onScroll!==void 0&&o("scroll",k)}}function _(y){const{height:k,width:E}=y;let W=!1;l.value!==k&&(W=!0,l.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),p()),s.value!==E&&(W=!0,s.value=E),W===!0&&e.onResize!==void 0&&o("resize",y)}function L({height:y}){d.value!==y&&(d.value=y,p())}function p(){if(e.container===!0){const y=l.value>d.value?ge():0;c.value!==y&&(c.value=y)}}let u=null;const b={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,k,E){b[y][k]=E}};if(Ze(re,b),ge()>0){let E=function(){y=null,k.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(k.scrollHeight>i.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(E,300)},K=function(R){y!==null&&R==="remove"&&(clearTimeout(y),E()),window[`${R}EventListener`]("resize",W)},y=null;const k=document.body;C(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Ot(()=>{K("remove")})}return()=>{const y=Rt(n.default,[S(yn,{onScroll:h}),S(xe,{onResize:_})]),k=S("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(xe,{onResize:L}),S("div",{class:"absolute-full",style:q.value},[S("div",{class:"scroll",style:m.value},[k])])]):k}}}),Ge=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:o.value},I(n.default))}}),pn=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>S("div",{style:t.value,class:i.value},I(n.default))}}),wn=$({name:"QItem",props:{...Be,...St,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=ze(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=Lt(),a=x(null),w=x(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=v(()=>{if(e.insetLevel===void 0)return null;const b=i.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function L(b){m.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(b))}function p(b){if(m.value===!0&&Ht(b,[13,32])===!0){Ee(b),b.qKeyEvent=!0;const y=new MouseEvent("click",b);y.qKeyEvent=!0,a.value.dispatchEvent(y)}o("keyup",b)}function u(){const b=nt(n.default,[]);return m.value===!0&&b.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:a,class:h.value,style:_.value,role:"listitem",onClick:L,onKeyup:p};return m.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,s.value)):q.value===!0&&(b["aria-disabled"]="true"),S(d.value,b,u())}}});const qn={name:"EssentialLink",props:{title:{type:String,required:!0},icon:{type:String,required:!0},link:{type:String,required:!0}}};function Cn(e,n,o,i,t,l){return ke(),et(wn,{clickable:"",tag:"router-link",to:o.link},{default:P(()=>[B(Ge,{avatar:""},{default:P(()=>[B(kt,{name:o.icon},null,8,["name"])]),_:1}),B(Ge,null,{default:P(()=>[B(pn,null,{default:P(()=>[tt(Mt(o.title),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Sn=Ft(qn,[["render",Cn]]);const Bn=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const n=[{title:"Inicio",icon:"home",link:"/"},{title:"Scanner",icon:"qr_code_scanner",link:"/scanner"},{title:"Camera Scanner Zxing",icon:"qr_code_scanner",link:"/camera-scanner"},{title:"Camera Scanner Quagga",icon:"qr_code_scanner",link:"/camera-scanner-quagga"},{title:"Photo",icon:"photo_camera",link:"/photo"}],o=x(!1);function i(){o.value=!o.value}return(t,l)=>{const s=Vt("router-view");return ke(),et(gn,{view:"lHh Lpr lFf"},{default:P(()=>[B(jt,{elevated:""},{default:P(()=>[B(It,null,{default:P(()=>[B(xt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),B(Nt,null,{default:P(()=>l[1]||(l[1]=[tt(" Barcode Scanner ")])),_:1})]),_:1})]),_:1}),B(mn,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=f=>o.value=f),"show-if-above":"",bordered:""},{default:P(()=>[B(Ut,null,{default:P(()=>[(ke(),Qt(At,null,Dt(n,f=>B(Sn,Wt({key:f.title,ref_for:!0},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),B(hn,null,{default:P(()=>[B(s)]),_:1})]),_:1})}}});export{Bn as default};