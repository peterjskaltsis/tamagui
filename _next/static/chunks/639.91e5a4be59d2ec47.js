"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{89216:function(e,t,n){n.r(t)},77639:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var o=n(52322),r=n(41918),s=n(37328),i=n(96670),a=n(26297),c=n(46518),l=n(88290),u=n(11193),d=n(45482),f=n(61958),p=n(54503),m=n(36475),v=n(50541),h=n(12496),g=n(82735),E=n(8005),y=n(86029),_=n(2784);var b=n(28316);const x="dismissable.update",D="dismissable.pointerDownOutside",w="dismissable.focusOutside";let O;const j=_.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),C=_.forwardRef(((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:p}=e,m=(0,a.Z)(e,["disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss"]),v=_.useContext(j),[h,g]=_.useState(null),[,E]=_.useState({}),b=(0,l.e)(t,(e=>g(e))),C=Array.from(v.layers),[P]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),R=C.indexOf(P),k=h?C.indexOf(h):-1,L=v.layersWithOutsidePointerEventsDisabled.size>0,I=k>=R,T=function(e){const t=(0,y.W)(e),n=_.useRef(!1),o=_.useRef((()=>{}));return _.useEffect((()=>{const e=e=>{if(e.target&&!n.current){let n=function(){F(D,t,r,{discrete:!0})};const r={originalEvent:e};"touch"===e.pointerType?(document.removeEventListener("click",o.current),o.current=n,document.addEventListener("click",o.current,{once:!0})):n()}n.current=!1},r=window.setTimeout((()=>{document.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(r),document.removeEventListener("pointerdown",e),document.removeEventListener("click",o.current)}}),[t]),{onPointerDownCapture:()=>n.current=!0}}((e=>{const t=e.target,n=[...v.branches].some((e=>e.contains(t)));I&&!n&&(null==c||c(e),null==f||f(e),e.defaultPrevented||null==p||p())})),N=function(e){const t=(0,y.W)(e),n=_.useRef(!1);return _.useEffect((()=>{const e=e=>{if(e.target&&!n.current){F(w,t,{originalEvent:e},{discrete:!1})}};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)}),[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}((e=>{const t=e.target;[...v.branches].some((e=>e.contains(t)))||(null==d||d(e),null==f||f(e),e.defaultPrevented||null==p||p())}));return function(e){const t=(0,y.W)(e);_.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((e=>{k===v.layers.size-1&&(null==r||r(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))})),_.useEffect((()=>{if(h)return n&&(0===v.layersWithOutsidePointerEventsDisabled.size&&(O=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(h)),v.layers.add(h),Z(),()=>{n&&1===v.layersWithOutsidePointerEventsDisabled.size&&(document.body.style.pointerEvents=O)}}),[h,n,v]),_.useEffect((()=>()=>{h&&(v.layers.delete(h),v.layersWithOutsidePointerEventsDisabled.delete(h),Z())}),[h,v]),_.useEffect((()=>{const e=()=>E({});return document.addEventListener(x,e),()=>document.removeEventListener(x,e)}),[]),(0,o.jsx)("div",(0,i.Z)((0,s.Z)({},m),{ref:b,style:(0,s.Z)({display:"contents",pointerEvents:L?I?"auto":"none":void 0},e.style),onFocusCapture:(0,u.composeEventHandlers)(e.onFocusCapture,N.onFocusCapture),onBlurCapture:(0,u.composeEventHandlers)(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:(0,u.composeEventHandlers)(e.onPointerDownCapture,T.onPointerDownCapture)}))}));C.displayName="Dismissable";const P=_.forwardRef(((e,t)=>{const n=_.useContext(j),r=_.useRef(null),a=(0,l.e)(t,r);return _.useEffect((()=>{const e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}}),[n.branches]),(0,o.jsx)("div",(0,i.Z)((0,s.Z)({style:{display:"contents"}},e),{ref:a}))}));function Z(){const e=new CustomEvent(x);document.dispatchEvent(e)}function F(e,t,n,o){let{discrete:r}=o;const s=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?function(e,t){e&&b.flushSync((()=>e.dispatchEvent(t)))}(s,i):s.dispatchEvent(i)}P.displayName="DismissableBranch";const R="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",L={bubbles:!1,cancelable:!0},I=_.forwardRef(((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:c}=e,u=(0,a.Z)(e,["loop","trapped","onMountAutoFocus","onUnmountAutoFocus"]),[d,f]=_.useState(null),p=(0,y.W)(r),m=(0,y.W)(c),v=_.useRef(null),h=(0,l.e)(t,(e=>f(e))),g=_.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;_.useEffect((()=>{if(o){let e=function(e){if(g.paused||!d)return;const t=e.target;d.contains(t)?v.current=t:M(v.current,{select:!0})},t=function(e){!g.paused&&d&&(d.contains(e.relatedTarget)||M(v.current,{select:!0}))};return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[o,d,g.paused]),_.useEffect((()=>{if(d){W.add(g);const t=document.activeElement;if(!d.contains(t)){const n=new CustomEvent(R,L);d.addEventListener(R,p),d.dispatchEvent(n),n.defaultPrevented||(!function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=document.activeElement;for(const o of e)if(M(o,{select:t}),document.activeElement!==n)return}((e=T(d),e.filter((e=>"A"!==e.tagName))),{select:!0}),document.activeElement===t&&M(d))}return()=>{d.removeEventListener(R,p),setTimeout((()=>{const e=new CustomEvent(k,L);d.addEventListener(k,m),d.dispatchEvent(e),e.defaultPrevented||M(null!=t?t:document.body,{select:!0}),d.removeEventListener(k,m),W.remove(g)}),0)}}var e}),[d,p,m,g]);const E=_.useCallback((e=>{if(!n&&!o)return;if(g.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){const t=e.currentTarget,[o,s]=function(e){const t=T(e),n=N(t,e),o=N(t.reverse(),e);return[n,o]}(t);o&&s?e.shiftKey||r!==s?e.shiftKey&&r===o&&(e.preventDefault(),n&&M(s,{select:!0})):(e.preventDefault(),n&&M(o,{select:!0})):r===t&&e.preventDefault()}}),[n,o,g.paused]),b=_.Children.only(e.children);return _.cloneElement(b,(0,i.Z)((0,s.Z)({tabIndex:-1},u),{ref:h,onKeyDown:E}))}));function T(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function N(e,t){for(const n of e)if(!z(n,{upTo:t}))return n}function z(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==n&&e===n)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function S(e){return e instanceof HTMLInputElement&&"select"in e}function M(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&S(e)&&t&&e.select()}}I.displayName="FocusScope";const W=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=A(e,t),e.unshift(t)},remove(t){var n;e=A(e,t),null==(n=e[0])||n.resume()}}}();function A(e,t){const n=[...e],o=n.indexOf(t);return-1!==o&&n.splice(o,1),n}var H=n(32806),K=n(35314),$=n(39383),B=n(26189),U=n(61342),q=n(47138),G=n(18217);const V="Dialog",[X,J]=(0,E.b)(V),[Q,Y]=X(V),ee="DialogTrigger",te=(0,d.z)(K.FA,{name:ee}),ne=_.forwardRef(((e,t)=>{const{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]),c=Y(ee,n),d=(0,l.e)(t,c.triggerRef);return(0,o.jsx)(te,(0,i.Z)((0,s.Z)({tag:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":Oe(c.open)},r),{ref:d,onPress:(0,u.composeEventHandlers)(e.onPress,c.onOpenToggle)}))}));ne.displayName=ee;const oe="DialogPortal",[re,se]=X(oe,{forceMount:void 0}),ie=e=>{const{__scopeDialog:t,forceMount:n,children:r}=e,l=(0,a.Z)(e,["__scopeDialog","forceMount","children"]),u=(0,f.Cg)(),d=Y(oe,t),v=n||d.open,h=(0,o.jsx)(c.M,{children:v?r:null});return d.modal&&(p.$L||v)?(0,o.jsx)(re,{scope:t,forceMount:n,children:(0,o.jsx)(H.h,(0,i.Z)((0,s.Z)({alignItems:"center",justifyContent:"center",zIndex:100,pointerEvents:v?"auto":"none"},p.$L&&{maxHeight:"100vh"},l),{children:(0,o.jsx)(m.Q,{name:u,children:h})}))}):h};ie.displayName=oe;const ae="DialogOverlay",ce=(0,d.z)($.K,{name:ae,pointerEvents:"auto",backgrounded:!0,fullscreen:!0}),le=_.forwardRef(((e,t)=>{var{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]);const c=se(ae,n),{forceMount:l=c.forceMount}=r,u=(0,a.Z)(r,["forceMount"]);return Y(ae,n).modal?(0,o.jsx)(ue,(0,i.Z)((0,s.Z)({},u),{ref:t})):null}));le.displayName=ae;const ue=_.forwardRef(((e,t)=>{const{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]),c=Y(ae,n),l=(0,o.jsx)(ce,(0,i.Z)((0,s.Z)({"data-state":Oe(c.open),pointerEvents:"auto"},r),{ref:t}));return p.$L?(0,o.jsx)(G.Z,{as:v.g7,allowPinchZoom:c.allowPinchZoom,shards:[c.contentRef],children:l}):l})),de="DialogContent",fe=(0,d.z)($.K,{name:de,tag:"dialog",pointerEvents:"auto",position:"relative",backgrounded:!0,padded:!0,radiused:!0,elevate:!0,variants:{size:{"...size":(e,t)=>({})}},defaultVariants:{size:"$4"}}),pe=_.forwardRef(((e,t)=>{var{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]);const c=se(de,n),{forceMount:l=c.forceMount}=r,u=(0,a.Z)(r,["forceMount"]),d=Y(de,n);return(0,o.jsx)(o.Fragment,{children:d.modal?(0,o.jsx)(me,(0,i.Z)((0,s.Z)({},u),{ref:t})):(0,o.jsx)(ve,(0,i.Z)((0,s.Z)({},u),{ref:t}))})}));pe.displayName=de;const me=_.forwardRef(((e,t)=>{var{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]);const c=Y(de,n),d=_.useRef(null),f=(0,l.e)(t,c.contentRef,d);return(0,o.jsx)(he,(0,i.Z)((0,s.Z)({},r),{ref:f,trapFocus:c.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.composeEventHandlers)(r.onCloseAutoFocus,(e=>{var t;e.preventDefault(),null==(t=c.triggerRef.current)||t.focus()})),onPointerDownOutside:(0,u.composeEventHandlers)(r.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()})),onFocusOutside:(0,u.composeEventHandlers)(r.onFocusOutside,(e=>e.preventDefault()))}))})),ve=_.forwardRef(((e,t)=>{const n=Y(de,e.__scopeDialog),r=_.useRef(!1);return(0,o.jsx)(he,(0,i.Z)((0,s.Z)({},e),{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,s;null==(o=e.onCloseAutoFocus)||o.call(e,t),t.defaultPrevented||(r.current||null==(s=n.triggerRef.current)||s.focus(),t.preventDefault()),r.current=!1},onInteractOutside:t=>{var o;null==(o=e.onInteractOutside)||o.call(e,t),t.defaultPrevented||(r.current=!0);const s=t.target,i=n.triggerRef.current;if(!(i instanceof HTMLElement))return;i.contains(s)&&t.preventDefault()}}))})),he=_.forwardRef(((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:c,disableOutsidePointerEvents:u,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:m}=e,v=(0,a.Z)(e,["__scopeDialog","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside"]),h=Y(de,n),g=_.useRef(null),E=(0,l.e)(t,g);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I,{loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:c,children:(0,o.jsx)(C,{disableOutsidePointerEvents:u,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:m,ref:E,onDismiss:()=>h.onOpenChange(!1),children:(0,o.jsx)(fe,(0,s.Z)({id:h.contentId,"aria-describedby":h.descriptionId,"aria-labelledby":h.titleId,"data-state":Oe(h.open)},v))})}),!1]})})),ge="DialogTitle",Ee=(0,d.z)(B.H2,{name:ge}),ye=_.forwardRef(((e,t)=>{const{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]),c=Y(ge,n);return(0,o.jsx)(Ee,(0,i.Z)((0,s.Z)({id:c.titleId},r),{ref:t}))}));ye.displayName=ge;const _e=(0,d.z)(U.n,{name:"DialogDescription"}),be="DialogDescription",xe=_.forwardRef(((e,t)=>{const{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]),c=Y(be,n);return(0,o.jsx)(_e,(0,i.Z)((0,s.Z)({id:c.descriptionId},r),{ref:t}))}));xe.displayName=be;const De="DialogClose",we=_.forwardRef(((e,t)=>{const{__scopeDialog:n}=e,r=(0,a.Z)(e,["__scopeDialog"]),c=Y(De,n);return(0,o.jsx)(K.FA,(0,i.Z)((0,s.Z)({tag:"button"},r),{ref:t,onPress:(0,u.composeEventHandlers)(e.onPress,(()=>c.onOpenChange(!1)))}))}));function Oe(e){return e?"open":"closed"}we.displayName=De;const je="DialogTitleWarning",[Ce,Pe]=(0,E.k)(je,{contentName:de,titleName:ge,docsSlug:"dialog"}),Ze=_.forwardRef((function(e,t){const{__scopeDialog:n,children:r,open:s,defaultOpen:i=!1,onOpenChange:a,modal:c=!0,allowPinchZoom:l=!1}=e,u=_.useRef(null),d=_.useRef(null),[f,p]=(0,q.T)({prop:s,defaultProp:i,onChange:a});return _.useImperativeHandle(t,(()=>({open:p})),[]),(0,o.jsx)(Q,{scope:n,triggerRef:u,contentRef:d,contentId:(0,h.M)()||"",titleId:(0,h.M)()||"",descriptionId:(0,h.M)()||"",open:f,onOpenChange:p,onOpenToggle:_.useCallback((()=>p((e=>!e))),[p]),modal:c,allowPinchZoom:l,children:r})})),Fe=(0,g.$)(Ze,{Trigger:ne,Portal:ie,Overlay:le,Content:pe,Title:ye,Description:xe,Close:we}),Re=(0,d.z)(K.FA,{name:"Fieldset",variants:{horizontal:{true:{flexDirection:"row",alignItems:"center"}}}});var ke=n(5146),Le=n(23374),Ie=n(84187),Te=n(24961);function Ne(){return(0,o.jsxs)(Fe,{modal:!0,children:[(0,o.jsx)(Fe.Trigger,{asChild:!0,children:(0,o.jsx)(ke.zx,{children:"Edit Profile"})}),(0,o.jsxs)(Fe.Portal,{children:[(0,o.jsx)(Fe.Overlay,{animation:"quick",o:.5,enterStyle:{o:0},exitStyle:{o:0}},"overlay"),(0,o.jsxs)(Fe.Content,{bordered:!0,elevate:!0,space:!0,animation:["quick",{opacity:{overshootClamping:!0}}],enterStyle:{x:0,y:-20,opacity:0,scale:.9},exitStyle:{x:0,y:10,opacity:0,scale:.95},x:0,scale:1,opacity:1,y:0,children:[(0,o.jsx)(Fe.Title,{children:"Edit profile"}),(0,o.jsx)(Fe.Description,{children:"Make changes to your profile here. Click save when you're done."}),(0,o.jsxs)(Re,{space:"$4",horizontal:!0,flexDirection:"_fd-1w148es",alignItems:"_ai-17do05s",children:[(0,o.jsx)(Le.__,{justifyContent:"_jc-1lct8eo",width:"_w-181rd2l",htmlFor:"name",children:"Name"}),(0,o.jsx)(Ie.I,{flexGrow:"_fg-15m5m9x",flexShrink:"_fs-vf3l73",id:"name",defaultValue:"Nate Wienert"})]}),(0,o.jsxs)(Re,{space:"$4",horizontal:!0,flexDirection:"_fd-1w148es",alignItems:"_ai-17do05s",children:[(0,o.jsx)(Le.__,{justifyContent:"_jc-1lct8eo",width:"_w-181rd2l",htmlFor:"username",children:"Username"}),(0,o.jsx)(Ie.I,{flexGrow:"_fg-15m5m9x",flexShrink:"_fs-vf3l73",id:"username",defaultValue:"@natebirdman"})]}),(0,o.jsx)("div",{className:" _mt-ubbt46 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-zlw05e ",children:(0,o.jsx)(Fe.Close,{asChild:!0,children:(0,o.jsx)(ke.zx,{theme:"alt1","aria-label":"Close",children:"Save changes"})})}),(0,o.jsx)(Te.GJ,{children:(0,o.jsx)(Fe.Close,{asChild:!0,children:(0,o.jsx)(ke.zx,{right:"_r-1bubegp",top:"_t-n03vqq",position:"_pos-11f8u5c",circular:!0,width:"_w-dcnc62",height:"_h-1ukajyx",maxWidth:"_maw-avjizi",maxHeight:"_mah-1ov4hat",minWidth:"_miw-peyxcc",minHeight:"_mih-edlgiv",borderTopLeftRadius:"_btlr-1ffllu1",borderTopRightRadius:"_btrr-s1eb1o",borderBottomRightRadius:"_bbrr-1dnaj0e",borderBottomLeftRadius:"_bblr-avx2d3",paddingTop:"_pt-bv6eyc",paddingBottom:"_pb-15pd5p8",paddingRight:"_pr-va8vyl",paddingLeft:"_pl-wh8dj4",icon:r.X})})})]},"content")]})]})}n(89216)},41918:function(e,t,n){n.d(t,{X:function(){return f}});var o=n(2784),r=n(70810),s=n(74479),i=Object.defineProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>{const t=e,{color:n="black",size:s=24}=t,i=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n})(t,["color","size"]);return o.createElement(r.ny,((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&u(e,n,t[n]);return e})({width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement(r.x1,{x1:"18",y1:"6",x2:"6",y2:"18",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"6",y1:"6",x2:"18",y2:"18",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="X";const f=(0,o.memo)((0,s.H)(d))}}]);