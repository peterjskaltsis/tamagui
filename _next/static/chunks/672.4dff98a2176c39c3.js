"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{21672:function(e,t,i){i.r(t),i.d(t,{default:function(){return A}});var n=i(52322),r=i(2784);var a=i(68683),o=i(9303),l=i(45482),d=i(59699),c=i(54503),s=i(63035),u=i(92682),h=i(68428),f=i(56695),m=i(4586),p=i(23917),b=i(63862);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){_(e,t,i[t])}))}return e}function y(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,a=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(d){l=!0,r=d}finally{try{o||null==i.return||i.return()}finally{if(l)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=Object.defineProperty,j=function(e,t){return x(e,"name",{value:t,configurable:!0})},z="Switch",k=(0,u.b)(z),S=v(k,1)[0],H=(k[1],v(S(z),2)),O=H[0],$=H[1],W=j((function(e,t){return(0,h.kQ)((0,o.a)(e,1),t)}),"getSwitchHeight"),C=j((function(e,t){return(0,h.kQ)((0,o.a)(e,3),t)}),"getSwitchWidth"),T=(0,l.z)(f.sL,{name:"Switch",tag:"button",borderRadius:1e3,borderWidth:2,borderColor:"transparent",backgroundColor:"$background",focusStyle:{borderColor:"$borderColorFocus"},variants:{size:{"...size":function(e,t){var i=W(e,t),n=i.height,r=i.minHeight,a=i.maxHeight,o=C(e,t),l=o.width,c=o.minWidth,s=o.maxWidth;return{height:n+2,minHeight:r+2,maxHeight:a+2,width:(0,d.Ve)(l)+4,minWidth:c+2,maxWidth:s+2}}}},defaultVariants:{size:"$4"}}),P=r.forwardRef((function(e,t){var i=e.__scopeSwitch,o=e.labeledBy,l=e.name,d=e.checked,s=e.defaultChecked,u=e.required,h=e.disabled,f=e.value,m=void 0===f?"on":f,g=e.onCheckedChange,_=e.size,x=void 0===_?"$4":_,j=y(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),z=v(r.useState(null),2),k=z[0],S=z[1],H=(0,a.e)(t,(function(e){return S(e)})),$=(0,b.t0)(k),W=o||$,C=r.useRef(!1),P=!k||Boolean(k.closest("form")),F=v((0,p.T)({prop:d,defaultProp:s||!1,onChange:g}),2),I=F[0],L=void 0!==I&&I,R=F[1];return(0,n.jsxs)(O,{scope:i,checked:L,disabled:h,size:x,children:[(0,n.jsx)(T,w({size:x,role:"switch","aria-checked":L,"aria-labelledby":W,"aria-required":u,"data-state":B(L),"data-disabled":h?"":void 0,disabled:h,tabIndex:h?void 0:0,value:m},j,{ref:H,onPress:function(t){var i;null==(i=e.onPress)||i.call(e,t),R((function(e){return!e})),c.$L&&P&&(C.current=t.isPropagationStopped(),C.current||t.stopPropagation())}})),c.$L&&P&&(0,n.jsx)(E,{control:k,bubbles:!C.current,name:l,value:m,checked:L,required:u,disabled:h,style:{transform:"translateX(-100%)"}})]})}));P.displayName=z;var F=T.extractable((0,s.Y)(P),{neverFlatten:!0}),I="SwitchThumb",L=(0,l.z)(m.K,{name:"SwitchThumb",backgroundColor:"$background",borderRadius:1e3,variants:{size:{"...size":W}},defaultVariants:{size:"$4"}}),R=L.extractable(r.forwardRef((function(e,t){var i=e.__scopeSwitch,r=y(e,["__scopeSwitch"]),a=$(I,i),l=a.size,c=a.disabled,s=a.checked;return(0,n.jsx)(L,w({size:l,"data-state":B(s),"data-disabled":c?"":void 0},r,{x:s?(0,d.Ve)((0,o.a)(l,3))-(0,d.Ve)((0,o.a)(l,1)):0,ref:t}))})),{neverFlatten:!0});R.displayName=I,F.Thumb=R;var E=j((function(e){e.control;var t=e.checked,i=e.bubbles,a=void 0===i||i,o=y(e,["control","checked","bubbles"]),l=r.useRef(null),d=function(e){const t=r.useRef({value:e,previous:e});return r.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(t);return r.useEffect((function(){var e=l.current,i=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==t&&n){var r=new Event("click",{bubbles:a});n.call(e,t),e.dispatchEvent(r)}}),[d,t,a]),(0,n.jsx)("input",w({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:l,style:w({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function B(e){return e?"checked":"unchecked"}j(B,"getState");function A(){return(0,n.jsxs)(f.FA,{alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$1",children:[(0,n.jsxs)(f.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,n.jsx)(b.__,{tag:"label",size:"$2",minHeight:"_mih-zdo8n2",paddingRight:"_pr-va915g",paddingLeft:"_pl-wh8ipz",paddingTop:"_pt-bv6h6f",paddingBottom:"_pb-15pd7xb",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4y8pm",lineHeight:"_lh-1x7rr0l",htmlFor:"switch-1",children:"Dark mode"}),(0,n.jsx)(F,{tag:"button",id:"switch-1",size:"$2",height:"_h-3ktl2w",minHeight:"_mih-jisvoq",maxHeight:"_mah-13zxg8s",width:"_w-1y5srx1",minWidth:"_miw-6ju4o7",maxWidth:"_maw-1h1d5g5",children:(0,n.jsx)(F.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)(f.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,n.jsx)(b.__,{tag:"label",size:"$3",minHeight:"_mih-zdoav5",paddingRight:"_pr-1af64j6",paddingLeft:"_pl-cem78f",paddingTop:"_pt-bv6hx4",paddingBottom:"_pb-15pd8o0",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4y9gb",lineHeight:"_lh-1x7rrra",htmlFor:"switch-2",children:"Dark mode"}),(0,n.jsx)(F,{tag:"button",id:"switch-2",size:"$3",height:"_h-3ktltl",minHeight:"_mih-jiswff",maxHeight:"_mah-13zxgzh",width:"_w-1y5tewk",minWidth:"_miw-6ju5ew",maxWidth:"_maw-1h1d66u",children:(0,n.jsx)(F.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)(f.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,n.jsx)(b.__,{tag:"label",size:"$4",minHeight:"_mih-zdofbb",paddingRight:"_pr-1af67hy",paddingLeft:"_pl-cema77",paddingTop:"_pt-bv6jei",paddingBottom:"_pb-15pda5e",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4ya70",lineHeight:"_lh-1x7rt8o",htmlFor:"switch-3",children:"Dark mode"}),(0,n.jsx)(F,{tag:"button",id:"switch-3",size:"$4",height:"_h-3ktmka",minHeight:"_mih-jisx64",maxHeight:"_mah-13zxhq6",width:"_w-1y5ujor",minWidth:"_miw-6ju65l",maxWidth:"_maw-1h1d6xj",children:(0,n.jsx)(F.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)("div",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-1elmj36 _ai-17do05s ",children:[(0,n.jsx)(b.__,{tag:"label",size:"$5",minHeight:"_mih-zdp0tg",paddingRight:"_pr-1af6b7f",paddingLeft:"_pl-cemdwo",paddingTop:"_pt-bv6kvw",paddingBottom:"_pb-15pdbms",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4yd5s",lineHeight:"_lh-1x7sbs1",htmlFor:"switch-4",children:"Dark mode"}),(0,n.jsx)(F,{tag:"button",id:"switch-4",size:"$5",height:"_h-3ktnaz",minHeight:"_mih-jisxwt",maxHeight:"_mah-13zxigv",width:"_w-1y5vsx4",minWidth:"_miw-6ju6wa",maxWidth:"_maw-1h1d7o8",children:(0,n.jsx)(F.Thumb,{animation:"bouncy"})})]})]})}}}]);