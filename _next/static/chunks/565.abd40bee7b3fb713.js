"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{4283:function(e,n,t){t.r(n)},92565:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ye}});var r=t(52322),o=t(41918),i=t(65821),u=t(68683),a=t(11193),l=t(45482),c=t(61958),s=t(54503),f=t(36475),d=t(50541),p=t(12496),v=t(82735),y=t(92682),m=t(86029),b=t(2784);var h=t(28316);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function w(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(l){a=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||D(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||D(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,n){if(e){if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,n):void 0}}var _,P="dismissable.update",S="dismissable.pointerDownOutside",C="dismissable.focusOutside",I=b.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),F=b.forwardRef((function(e,n){var t=e.disableOutsidePointerEvents,o=void 0!==t&&t,i=e.onEscapeKeyDown,l=e.onPointerDownOutside,c=e.onFocusOutside,s=e.onInteractOutside,f=e.onDismiss,d=w(e,["disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss"]),p=b.useContext(I),v=j(b.useState(null),2),y=v[0],h=v[1],g=j(b.useState({}),2)[1],O=(0,u.e)(n,(function(e){return h(e)})),D=Array.from(p.layers),F=j(x(p.layersWithOutsidePointerEventsDisabled).slice(-1),1)[0],A=D.indexOf(F),L=y?D.indexOf(y):-1,T=p.layersWithOutsidePointerEventsDisabled.size>0,N=L>=A,z=function(e){var n=(0,m.W)(e),t=b.useRef(!1),r=b.useRef((function(){}));return b.useEffect((function(){var e=function(e){if(e.target&&!t.current){var o=function(){R(S,n,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(document.removeEventListener("click",r.current),r.current=o,document.addEventListener("click",r.current,{once:!0})):o()}t.current=!1},o=window.setTimeout((function(){document.addEventListener("pointerdown",e)}),0);return function(){window.clearTimeout(o),document.removeEventListener("pointerdown",e),document.removeEventListener("click",r.current)}}),[n]),{onPointerDownCapture:function(){return t.current=!0}}}((function(e){var n=e.target,t=x(p.branches).some((function(e){return e.contains(n)}));N&&!t&&(null==l||l(e),null==s||s(e),e.defaultPrevented||null==f||f())})),M=function(e){var n=(0,m.W)(e),t=b.useRef(!1);return b.useEffect((function(){var e=function(e){e.target&&!t.current&&R(C,n,{originalEvent:e},{discrete:!1})};return document.addEventListener("focusin",e),function(){return document.removeEventListener("focusin",e)}}),[n]),{onFocusCapture:function(){return t.current=!0},onBlurCapture:function(){return t.current=!1}}}((function(e){var n=e.target;x(p.branches).some((function(e){return e.contains(n)}))||(null==c||c(e),null==s||s(e),e.defaultPrevented||null==f||f())}));return function(e){const n=(0,m.W)(e);b.useEffect((()=>{const e=e=>{"Escape"===e.key&&n(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[n])}((function(e){L===p.layers.size-1&&(null==i||i(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))})),b.useEffect((function(){if(y)return o&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(_=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(y)),p.layers.add(y),k(),function(){o&&1===p.layersWithOutsidePointerEventsDisabled.size&&(document.body.style.pointerEvents=_)}}),[y,o,p]),b.useEffect((function(){return function(){y&&(p.layers.delete(y),p.layersWithOutsidePointerEventsDisabled.delete(y),k())}}),[y,p]),b.useEffect((function(){var e=function(){return g({})};return document.addEventListener(P,e),function(){return document.removeEventListener(P,e)}}),[]),(0,r.jsx)("div",E({},d,{ref:O,style:E({display:"contents",pointerEvents:T?N?"auto":"none":void 0},e.style),onFocusCapture:(0,a.composeEventHandlers)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,a.composeEventHandlers)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,a.composeEventHandlers)(e.onPointerDownCapture,z.onPointerDownCapture)}))}));F.displayName="Dismissable";var A=b.forwardRef((function(e,n){var t=b.useContext(I),o=b.useRef(null),i=(0,u.e)(n,o);return b.useEffect((function(){var e=o.current;if(e)return t.branches.add(e),function(){t.branches.delete(e)}}),[t.branches]),(0,r.jsx)("div",E({style:{display:"contents"}},e,{ref:i}))}));function k(){var e=new CustomEvent(P);document.dispatchEvent(e)}function R(e,n,t,r){var o=r.discrete,i=t.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&i.addEventListener(e,n,{once:!0}),o?function(e,n){e&&h.flushSync((function(){return e.dispatchEvent(n)}))}(i,u):i.dispatchEvent(u)}A.displayName="DismissableBranch";function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(l){a=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||W(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,n){if(e){if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?L(e,n):void 0}}var K="focusScope.autoFocusOnMount",H="focusScope.autoFocusOnUnmount",$={bubbles:!1,cancelable:!0},U=b.forwardRef((function(e,n){var t=e.loop,r=void 0!==t&&t,o=e.trapped,i=void 0!==o&&o,a=e.onMountAutoFocus,l=e.onUnmountAutoFocus,c=N(e,["loop","trapped","onMountAutoFocus","onUnmountAutoFocus"]),s=z(b.useState(null),2),f=s[0],d=s[1],p=(0,m.W)(a),v=(0,m.W)(l),y=b.useRef(null),h=(0,u.e)(n,(function(e){return d(e)})),g=b.useRef({paused:!1,pause:function(){this.paused=!0},resume:function(){this.paused=!1}}).current;b.useEffect((function(){if(i){var e=function(e){if(!g.paused&&f){var n=e.target;f.contains(n)?y.current=n:V(y.current,{select:!0})}},n=function(e){!g.paused&&f&&(f.contains(e.relatedTarget)||V(y.current,{select:!0}))};return document.addEventListener("focusin",e),document.addEventListener("focusout",n),function(){document.removeEventListener("focusin",e),document.removeEventListener("focusout",n)}}}),[i,f,g.paused]),b.useEffect((function(){if(f){X.add(g);var e=document.activeElement;if(!f.contains(e)){var n=new CustomEvent(K,$);f.addEventListener(K,p),f.dispatchEvent(n),n.defaultPrevented||(!function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).select,t=void 0!==n&&n,r=document.activeElement,o=!0,i=!1,u=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){if(V(a.value,{select:t}),document.activeElement!==r)return}}catch(c){i=!0,u=c}finally{try{o||null==l.return||l.return()}finally{if(i)throw u}}}((t=B(f),t.filter((function(e){return"A"!==e.tagName}))),{select:!0}),document.activeElement===e&&V(f))}return function(){f.removeEventListener(K,p),setTimeout((function(){var n=new CustomEvent(H,$);f.addEventListener(H,v),f.dispatchEvent(n),n.defaultPrevented||V(null!=e?e:document.body,{select:!0}),f.removeEventListener(H,v),X.remove(g)}),0)}}var t}),[f,p,v,g]);var O=b.useCallback((function(e){if((r||i)&&!g.paused){var n="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,t=document.activeElement;if(n&&t){var o=e.currentTarget,u=z(function(e){var n=B(e),t=Z(n,e),r=Z(n.reverse(),e);return[t,r]}(o),2),a=u[0],l=u[1];a&&l?e.shiftKey||t!==l?e.shiftKey&&t===a&&(e.preventDefault(),r&&V(l,{select:!0})):(e.preventDefault(),r&&V(a,{select:!0})):t===o&&e.preventDefault()}}}),[r,i,g.paused]),E=b.Children.only(e.children);return b.cloneElement(E,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}({tabIndex:-1},c,{ref:h,onKeyDown:O}))}));function B(e){for(var n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:function(e){var n="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||n?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});t.nextNode();)n.push(t.currentNode);return n}function Z(e,n){var t=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var a=i.value;if(!q(a,{upTo:n}))return a}}catch(l){r=!0,o=l}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}function q(e,n){var t=n.upTo;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function G(e){return n=e,(null!=(t=HTMLInputElement)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t)&&"select"in e;var n,t}function V(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.select,r=void 0!==t&&t;if(e&&e.focus){var o=document.activeElement;e.focus({preventScroll:!0}),e!==o&&G(e)&&r&&e.select()}}U.displayName="FocusScope";var X=function(){var e=[];return{add:function(n){var t=e[0];n!==t&&(null==t||t.pause()),(e=J(e,n)).unshift(n)},remove:function(n){var t;null==(t=(e=J(e,n))[0])||t.resume()}}}();function J(e,n){var t=M(e),r=t.indexOf(n);return-1!==r&&t.splice(r,1),t}var Q=t(15544),Y=t(56695),ee=t(53606),ne=t(15169),te=t(82618),re=t(23917),oe=t(18217);function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ue(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ae(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ue(e,n,t[n])}))}return e}function ce(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(l){a=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var fe="Dialog",de=se((0,y.b)(fe),2),pe=de[0],ve=(de[1],se(pe(fe),2)),ye=ve[0],me=ve[1],be="DialogTrigger",he=(0,l.z)(Y.FA,{name:be}),ge=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(be,t),l=(0,u.e)(n,i.triggerRef);return(0,r.jsx)(he,le({tag:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":$e(i.open)},o,{ref:l,onPress:(0,a.composeEventHandlers)(e.onPress,i.onOpenToggle)}))}));ge.displayName=be;var Oe="DialogPortal",Ee=se(pe(Oe,{forceMount:void 0}),2),we=Ee[0],je=Ee[1],xe=function(e){var n=e.__scopeDialog,t=e.forceMount,o=e.children,u=ce(e,["__scopeDialog","forceMount","children"]),a=(0,c.Cg)(),l=me(Oe,n),d=t||l.open,p=(0,r.jsx)(i.M,{children:d?o:null});return l.modal&&(s.$L||d)?(0,r.jsx)(we,{scope:n,forceMount:t,children:(0,r.jsx)(Q.h,le({alignItems:"center",justifyContent:"center",zIndex:100,pointerEvents:d?"auto":"none"},s.$L&&{maxHeight:"100vh"},u,{children:(0,r.jsx)(f.Q,{name:a,children:p})}))}):p};xe.displayName=Oe;var De="DialogOverlay",_e=(0,l.z)(ee.K,{name:De,pointerEvents:"auto",backgrounded:!0,fullscreen:!0}),Pe=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=je(De,t),u=o.forceMount,a=(void 0===u&&i.forceMount,ce(o,["forceMount"]));return me(De,t).modal?(0,r.jsx)(Se,le({},a,{ref:n})):null}));Pe.displayName=De;var Se=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(De,t),u=(0,r.jsx)(_e,le({"data-state":$e(i.open),pointerEvents:"auto"},o,{ref:n}));return s.$L?(0,r.jsx)(oe.Z,{as:d.g7,allowPinchZoom:i.allowPinchZoom,shards:[i.contentRef],children:u}):u})),Ce="DialogContent",Ie=(0,l.z)(ee.K,{name:Ce,tag:"dialog",pointerEvents:"auto",position:"relative",backgrounded:!0,padded:!0,radiused:!0,elevate:!0,variants:{size:{"...size":function(e,n){return{}}}},defaultVariants:{size:"$4"}}),Fe=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=je(Ce,t),u=o.forceMount,a=(void 0===u&&i.forceMount,ce(o,["forceMount"])),l=me(Ce,t);return(0,r.jsx)(r.Fragment,{children:l.modal?(0,r.jsx)(Ae,le({},a,{ref:n})):(0,r.jsx)(ke,le({},a,{ref:n}))})}));Fe.displayName=Ce;var Ae=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(Ce,t),l=b.useRef(null),c=(0,u.e)(n,i.contentRef,l);return(0,r.jsx)(Re,le({},o,{ref:c,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.composeEventHandlers)(o.onCloseAutoFocus,(function(e){var n;e.preventDefault(),null==(n=i.triggerRef.current)||n.focus()})),onPointerDownOutside:(0,a.composeEventHandlers)(o.onPointerDownOutside,(function(e){var n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey;(2===n.button||t)&&e.preventDefault()})),onFocusOutside:(0,a.composeEventHandlers)(o.onFocusOutside,(function(e){return e.preventDefault()}))}))})),ke=b.forwardRef((function(e,n){var t=me(Ce,e.__scopeDialog),o=b.useRef(!1);return(0,r.jsx)(Re,le({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:function(n){var r,i;null==(r=e.onCloseAutoFocus)||r.call(e,n),n.defaultPrevented||(o.current||null==(i=t.triggerRef.current)||i.focus(),n.preventDefault()),o.current=!1},onInteractOutside:function(n){var r;null==(r=e.onInteractOutside)||r.call(e,n),n.defaultPrevented||(o.current=!0);var i=n.target,u=t.triggerRef.current;ae(u,HTMLElement)&&(u.contains(i)&&n.preventDefault())}}))})),Re=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=e.trapFocus,i=e.onOpenAutoFocus,a=e.onCloseAutoFocus,l=e.disableOutsidePointerEvents,c=e.onEscapeKeyDown,s=e.onPointerDownOutside,f=e.onFocusOutside,d=e.onInteractOutside,p=ce(e,["__scopeDialog","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside"]),v=me(Ce,t),y=b.useRef(null),m=(0,u.e)(n,y);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U,{loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,r.jsx)(F,{disableOutsidePointerEvents:l,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:f,onInteractOutside:d,ref:m,onDismiss:function(){return v.onOpenChange(!1)},children:(0,r.jsx)(Ie,le({id:v.contentId,"aria-describedby":v.descriptionId,"aria-labelledby":v.titleId,"data-state":$e(v.open)},p))})}),!1]})})),Le="DialogTitle",Te=(0,l.z)(ne.H2,{name:Le}),Ne=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(Le,t);return(0,r.jsx)(Te,le({id:i.titleId},o,{ref:n}))}));Ne.displayName=Le;var ze=(0,l.z)(te.n,{name:"DialogDescription"}),Me="DialogDescription",We=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(Me,t);return(0,r.jsx)(ze,le({id:i.descriptionId},o,{ref:n}))}));We.displayName=Me;var Ke="DialogClose",He=b.forwardRef((function(e,n){var t=e.__scopeDialog,o=ce(e,["__scopeDialog"]),i=me(Ke,t);return(0,r.jsx)(Y.FA,le({tag:"button"},o,{ref:n,onPress:(0,a.composeEventHandlers)(e.onPress,(function(){return i.onOpenChange(!1)}))}))}));function $e(e){return e?"open":"closed"}He.displayName=Ke;var Ue="DialogTitleWarning",Be=se((0,y.k)(Ue,{contentName:Ce,titleName:Le,docsSlug:"dialog"}),2),Ze=(Be[0],Be[1],b.forwardRef((function(e,n){var t=e.__scopeDialog,o=e.children,i=e.open,u=e.defaultOpen,a=void 0!==u&&u,l=e.onOpenChange,c=e.modal,s=void 0===c||c,f=e.allowPinchZoom,d=void 0!==f&&f,v=b.useRef(null),y=b.useRef(null),m=se((0,re.T)({prop:i,defaultProp:a,onChange:l}),2),h=m[0],g=m[1];return b.useImperativeHandle(n,(function(){return{open:g}}),[]),(0,r.jsx)(ye,{scope:t,triggerRef:v,contentRef:y,contentId:(0,p.M)()||"",titleId:(0,p.M)()||"",descriptionId:(0,p.M)()||"",open:h,onOpenChange:g,onOpenToggle:b.useCallback((function(){return g((function(e){return!e}))}),[g]),modal:s,allowPinchZoom:d,children:o})}))),qe=(0,v.$)(Ze,{Trigger:ge,Portal:xe,Overlay:Pe,Content:Fe,Title:Ne,Description:We,Close:He}),Ge=(0,l.z)(Y.FA,{name:"Fieldset",variants:{horizontal:{true:{flexDirection:"row",alignItems:"center"}}}}),Ve=t(42571),Xe=t(63862),Je=t(89545),Qe=t(73147);function Ye(){return(0,r.jsxs)(qe,{modal:!0,children:[(0,r.jsx)(qe.Trigger,{asChild:!0,children:(0,r.jsx)(Ve.zx,{children:"Edit Profile"})}),(0,r.jsxs)(qe.Portal,{children:[(0,r.jsx)(qe.Overlay,{animation:"quick",o:.5,enterStyle:{o:0},exitStyle:{o:0}},"overlay"),(0,r.jsxs)(qe.Content,{bordered:!0,elevate:!0,space:!0,animation:["quick",{opacity:{overshootClamping:!0}}],enterStyle:{x:0,y:-20,opacity:0,scale:.9},exitStyle:{x:0,y:10,opacity:0,scale:.95},x:0,scale:1,opacity:1,y:0,children:[(0,r.jsx)(qe.Title,{children:"Edit profile"}),(0,r.jsx)(qe.Description,{children:"Make changes to your profile here. Click save when you're done."}),(0,r.jsxs)(Ge,{space:"$4",horizontal:!0,children:[(0,r.jsx)(Xe.__,{justifyContent:"_jc-1lct8eo",width:"_w-181rd2l",htmlFor:"name",children:"Name"}),(0,r.jsx)(Je.I,{flexGrow:"_fg-15m5m9x",flexShrink:"_fs-vf3l73",id:"name",defaultValue:"Nate Wienert"})]}),(0,r.jsxs)(Ge,{space:"$4",horizontal:!0,children:[(0,r.jsx)(Xe.__,{justifyContent:"_jc-1lct8eo",width:"_w-181rd2l",htmlFor:"username",children:"Username"}),(0,r.jsx)(Je.I,{flexGrow:"_fg-15m5m9x",flexShrink:"_fs-vf3l73",id:"username",defaultValue:"@natebirdman"})]}),(0,r.jsx)("div",{className:" _mt-ubbt46 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-zlw05e ",children:(0,r.jsx)(qe.Close,{asChild:!0,children:(0,r.jsx)(Ve.zx,{theme:"alt1","aria-label":"Close",children:"Save changes"})})}),(0,r.jsx)(Qe.GJ,{children:(0,r.jsx)(qe.Close,{asChild:!0,children:(0,r.jsx)(Ve.zx,{right:"_r-1bubegp",top:"_t-n03vqq",position:"_pos-11f8u5c",circular:!0,icon:o.X})})})]},"content")]})]})}t(4283)},41918:function(e,n,t){t.d(n,{X:function(){return d}});var r=t(2784),o=t(70810),i=t(74479),u=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const f=e=>{const n=e,{color:t="black",size:i=24}=n,u=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(n,["color","size"]);return r.createElement(o.ny,((e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(a)for(var t of a(n))c.call(n,t)&&s(e,t,n[t]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement(o.x1,{x1:"18",y1:"6",x2:"6",y2:"18",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement(o.x1,{x1:"6",y1:"6",x2:"18",y2:"18",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};f.displayName="X";const d=(0,r.memo)((0,i.H)(f))}}]);