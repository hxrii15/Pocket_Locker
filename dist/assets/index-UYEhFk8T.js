import{r as Ol,a as Ml,g as _0,b as O,c as Ll,d as Gr,u as jl,L as Ti,O as Hl,N as as,R as Wl,e as Lt,f as ql,B as Ul}from"./vendor-DuUdveei.js";import{r as mt,_ as Xt,C as Zt,a as un,E as v0,o as zl,F as g0,L as m0,g as Oe,i as $l,b as Gl,v as Vl,c as Ni,d as y0,e as C0,f as Kl,h as R,s as ae,j as Ds,k as Ie,l as yt,m as ur,n as Yl,S as Ql,p as Xl,q as dn,t as Dr,u as Zl,w as Jl,D as Fr,x as ec,y as tc,z as nc,A as Ri,B as E0,G as rc,H as sc,I as Br,J as ic,K as oc,M as ac,N as lc,O as b0,P as cc,Q as uc,R as dc,T as hc,U as fc,V as xc,W as pc,X as _c,Y as vc,Z as gc,$ as mc,a0 as yc,a1 as Cc}from"./firebase-C5mQG85D.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Vr={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi;function Ec(){if(Pi)return jt;Pi=1;var t=Ol(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(a,c,l){var u,h={},d=null,f=null;l!==void 0&&(d=""+l),c.key!==void 0&&(d=""+c.key),c.ref!==void 0&&(f=c.ref);for(u in c)r.call(c,u)&&!i.hasOwnProperty(u)&&(h[u]=c[u]);if(a&&a.defaultProps)for(u in c=a.defaultProps,c)h[u]===void 0&&(h[u]=c[u]);return{$$typeof:e,type:a,key:d,ref:f,props:h,_owner:s.current}}return jt.Fragment=n,jt.jsx=o,jt.jsxs=o,jt}var Oi;function bc(){return Oi||(Oi=1,Vr.exports=Ec()),Vr.exports}var g=bc(),En={},Mi;function wc(){if(Mi)return En;Mi=1;var t=Ml();return En.createRoot=t.createRoot,En.hydrateRoot=t.hydrateRoot,En}var Ac=wc();const Dc=_0(Ac);let Fc={data:""},Bc=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Fc},kc=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Sc=/\/\*[^]*?\*\/|  +/g,Li=/\n+/g,We=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?We(o,i):i+"{"+We(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=We(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):i):o!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=We.p?We.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},He={},w0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+w0(t[n]);return e}return t},Ic=(t,e,n,r,s)=>{let i=w0(t),o=He[i]||(He[i]=(c=>{let l=0,u=11;for(;l<c.length;)u=101*u+c.charCodeAt(l++)>>>0;return"go"+u})(i));if(!He[o]){let c=i!==t?t:(l=>{let u,h,d=[{}];for(;u=kc.exec(l.replace(Sc,""));)u[4]?d.shift():u[3]?(h=u[3].replace(Li," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][u[1]]=u[2].replace(Li," ").trim();return d[0]})(t);He[o]=We(s?{["@keyframes "+o]:c}:c,n?"":"."+o)}let a=n&&He.g;return n&&(He.g=He[o]),((c,l,u,h)=>{h?l.data=l.data.replace(h,c):l.data.indexOf(c)===-1&&(l.data=u?c+l.data:l.data+c)})(He[o],e,r,a),o},Tc=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":We(a,""):a===!1?"":a}return r+s+(o??"")},"");function kr(t){let e=this||{},n=t.call?t(e.p):t;return Ic(n.unshift?n.raw?Tc(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,Bc(e.target),e.g,e.o,e.k)}let A0,ls,cs;kr.bind({g:1});let Re=kr.bind({k:1});function Nc(t,e,n,r){We.p=e,A0=t,ls=n,cs=r}function Ke(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),c=a.className||s.className;n.p=Object.assign({theme:ls&&ls()},a),n.o=/go\d/.test(c),a.className=kr.apply(n,r)+(c?" "+c:"");let l=t;return t[0]&&(l=a.as||t,delete a.as),cs&&l[0]&&cs(a),A0(l,a)}return s}}var Rc=t=>typeof t=="function",dr=(t,e)=>Rc(t)?t(e):t,Pc=(()=>{let t=0;return()=>(++t).toString()})(),D0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Oc=20,Fs="default",F0=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return F0(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Dn=[],B0={toasts:[],pausedAt:void 0,settings:{toastLimit:Oc}},Se={},k0=(t,e=Fs)=>{Se[e]=F0(Se[e]||B0,t),Dn.forEach(([n,r])=>{n===e&&r(Se[e])})},S0=t=>Object.keys(Se).forEach(e=>k0(t,e)),Mc=t=>Object.keys(Se).find(e=>Se[e].toasts.some(n=>n.id===t)),Sr=(t=Fs)=>e=>{k0(e,t)},Lc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jc=(t={},e=Fs)=>{let[n,r]=O.useState(Se[e]||B0),s=O.useRef(Se[e]);O.useEffect(()=>(s.current!==Se[e]&&r(Se[e]),Dn.push([e,r]),()=>{let o=Dn.findIndex(([a])=>a===e);o>-1&&Dn.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,c,l;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((c=t[o.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||Lc[o.type],style:{...t.style,...(l=t[o.type])==null?void 0:l.style,...o.style}}});return{...n,toasts:i}},Hc=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Pc()}),hn=t=>(e,n)=>{let r=Hc(e,t,n);return Sr(r.toasterId||Mc(r.id))({type:2,toast:r}),r.id},ie=(t,e)=>hn("blank")(t,e);ie.error=hn("error");ie.success=hn("success");ie.loading=hn("loading");ie.custom=hn("custom");ie.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Sr(e)(n):S0(n)};ie.dismissAll=t=>ie.dismiss(void 0,t);ie.remove=(t,e)=>{let n={type:4,toastId:t};e?Sr(e)(n):S0(n)};ie.removeAll=t=>ie.remove(void 0,t);ie.promise=(t,e,n)=>{let r=ie.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?dr(e.success,s):void 0;return i?ie.success(i,{id:r,...n,...n==null?void 0:n.success}):ie.dismiss(r),s}).catch(s=>{let i=e.error?dr(e.error,s):void 0;i?ie.error(i,{id:r,...n,...n==null?void 0:n.error}):ie.dismiss(r)}),t};var Wc=1e3,qc=(t,e="default")=>{let{toasts:n,pausedAt:r}=jc(t,e),s=O.useRef(new Map).current,i=O.useCallback((h,d=Wc)=>{if(s.has(h))return;let f=setTimeout(()=>{s.delete(h),o({type:4,toastId:h})},d);s.set(h,f)},[]);O.useEffect(()=>{if(r)return;let h=Date.now(),d=n.map(f=>{if(f.duration===1/0)return;let x=(f.duration||0)+f.pauseDuration-(h-f.createdAt);if(x<0){f.visible&&ie.dismiss(f.id);return}return setTimeout(()=>ie.dismiss(f.id,e),x)});return()=>{d.forEach(f=>f&&clearTimeout(f))}},[n,r,e]);let o=O.useCallback(Sr(e),[e]),a=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=O.useCallback((h,d)=>{o({type:1,toast:{id:h,height:d}})},[o]),l=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=O.useCallback((h,d)=>{let{reverseOrder:f=!1,gutter:x=8,defaultPosition:m}=d||{},p=n.filter(_=>(_.position||m)===(h.position||m)&&_.height),C=p.findIndex(_=>_.id===h.id),v=p.filter((_,y)=>y<C&&_.visible).length;return p.filter(_=>_.visible).slice(...f?[v+1]:[0,v]).reduce((_,y)=>_+(y.height||0)+x,0)},[n]);return O.useEffect(()=>{n.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let d=s.get(h.id);d&&(clearTimeout(d),s.delete(h.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:c,startPause:a,endPause:l,calculateOffset:u}}},Uc=Re`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,zc=Re`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$c=Re`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Gc=Ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Uc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${zc} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$c} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Vc=Re`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Kc=Ke("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Vc} 1s linear infinite;
`,Yc=Re`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Qc=Re`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Xc=Ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Qc} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Zc=Ke("div")`
  position: absolute;
`,Jc=Ke("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eu=Re`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tu=Ke("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eu} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,nu=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(tu,null,e):e:n==="blank"?null:O.createElement(Jc,null,O.createElement(Kc,{...r}),n!=="loading"&&O.createElement(Zc,null,n==="error"?O.createElement(Gc,{...r}):O.createElement(Xc,{...r})))},ru=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,su=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,iu="0%{opacity:0;} 100%{opacity:1;}",ou="0%{opacity:1;} 100%{opacity:0;}",au=Ke("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,lu=Ke("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,cu=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=D0()?[iu,ou]:[ru(n),su(n)];return{animation:e?`${Re(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Re(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},uu=O.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?cu(t.position||e||"top-center",t.visible):{opacity:0},i=O.createElement(nu,{toast:t}),o=O.createElement(lu,{...t.ariaProps},dr(t.message,t));return O.createElement(au,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):O.createElement(O.Fragment,null,i,o))});Nc(O.createElement);var du=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=O.useCallback(o=>{if(o){let a=()=>{let c=o.getBoundingClientRect().height;r(t,c)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:i,className:e,style:n},s)},hu=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},fu=kr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,bn=16,xu=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:c,handlers:l}=qc(n,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:bn,left:bn,right:bn,bottom:bn,pointerEvents:"none",...o},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(u=>{let h=u.position||e,d=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=hu(h,d);return O.createElement(du,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?fu:"",style:f},u.type==="custom"?dr(u.message,u):s?s(u):O.createElement(uu,{toast:u,position:h}))}))},J=ie;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},c)=>O.createElement("svg",{ref:c,..._u,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:I0("lucide",s),...a},[...o.map(([l,u])=>O.createElement(l,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(t,e)=>{const n=O.forwardRef(({className:r,...s},i)=>O.createElement(vu,{ref:i,iconNode:e,className:I0(`lucide-${pu(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=fe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=fe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=fe("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=fe("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=fe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=fe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=fe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=fe("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function N0({compact:t=!1}){return g.jsxs("div",{className:`flex items-center gap-3 ${t?"":"flex-col"}`,children:[g.jsxs("svg",{className:`${t?"h-11 w-11":"h-24 w-24"} lock-logo`,viewBox:"0 0 120 120",role:"img","aria-label":"Pocket Locker logo",children:[g.jsxs("defs",{children:[g.jsxs("linearGradient",{id:"lockGradient",x1:"0%",x2:"100%",y1:"0%",y2:"100%",children:[g.jsx("stop",{offset:"0%",stopColor:"#d8ffe8"}),g.jsx("stop",{offset:"42%",stopColor:"#00ff66"}),g.jsx("stop",{offset:"100%",stopColor:"#008f3f"})]}),g.jsxs("filter",{id:"terminalGlow",children:[g.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),g.jsxs("feMerge",{children:[g.jsx("feMergeNode",{in:"blur"}),g.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),g.jsxs("g",{className:"lock-orbit",transformOrigin:"60 60",children:[g.jsx("circle",{cx:"60",cy:"60",r:"49",fill:"none",stroke:"rgba(0,255,102,0.3)",strokeWidth:"2"}),g.jsx("path",{d:"M60 11a49 49 0 0 1 47 35",fill:"none",stroke:"#00ff66",strokeLinecap:"round",strokeWidth:"5"}),g.jsx("path",{d:"M60 109a49 49 0 0 1-47-35",fill:"none",stroke:"#00ff66",strokeLinecap:"round",strokeWidth:"5",opacity:"0.72"}),g.jsx("circle",{cx:"60",cy:"11",r:"4",fill:"#d8ffe8",filter:"url(#terminalGlow)"}),g.jsx("circle",{cx:"60",cy:"109",r:"4",fill:"#00ff66",filter:"url(#terminalGlow)"})]}),g.jsxs("g",{className:"lock-core",filter:"url(#terminalGlow)",children:[g.jsx("rect",{className:"lock-aura",x:"38",y:"54",width:"44",height:"36",rx:"7",fill:"none",stroke:"#00ff66",strokeWidth:"1.5",opacity:"0.42"}),g.jsx("rect",{x:"40",y:"55",width:"40",height:"34",rx:"7",fill:"#030805",stroke:"url(#lockGradient)",strokeWidth:"3"}),g.jsx("path",{d:"M48 55v-8c0-8 5-15 12-15s12 7 12 15v8",fill:"none",stroke:"url(#lockGradient)",strokeLinecap:"round",strokeWidth:"6"}),g.jsx("circle",{cx:"60",cy:"71",r:"4.7",fill:"#00ff66"}),g.jsx("path",{d:"M60 75v7",stroke:"#00ff66",strokeLinecap:"round",strokeWidth:"4"})]})]}),g.jsxs("div",{className:t?"leading-none":"text-center",children:[g.jsx("p",{className:"font-orbitron text-xl font-bold tracking-normal text-ecto",children:"Pocket Locker"}),!t&&g.jsx("p",{className:"text-sm font-semibold uppercase text-zinc-400",children:"Encrypted Credential Terminal"})]})]})}const R0="@firebase/installations",ks="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=1e4,O0=`w:${ks}`,M0="FIS_v2",Tu="https://firebaseinstallations.googleapis.com/v1",Nu=3600*1e3,Ru="installations",Pu="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Je=new v0(Ru,Pu,Ou);function L0(t){return t instanceof g0&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0({projectId:t}){return`${Tu}/projects/${t}/installations`}function H0(t){return{token:t.token,requestStatus:2,expiresIn:Lu(t.expiresIn),creationTime:Date.now()}}async function W0(t,e){const r=(await e.json()).error;return Je.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function q0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Mu(t,{refreshToken:e}){const n=q0(t);return n.append("Authorization",ju(e)),n}async function U0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Lu(t){return Number(t.replace("s","000"))}function ju(t){return`${M0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=j0(t),s=q0(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:M0,appId:t.appId,sdkVersion:O0},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await U0(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:H0(l.authToken)}}else throw await W0("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=/^[cdef][\w-]{21}$/,us="";function Uu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zu(t);return qu.test(n)?n:us}catch{return us}}function zu(t){return Wu(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;function G0(t,e){const n=Ir(t);V0(n,e),$u(n,e)}function V0(t,e){const n=$0.get(t);if(n)for(const r of n)r(e)}function $u(t,e){const n=Gu();n&&n.postMessage({key:t,fid:e}),Vu()}let Xe=null;function Gu(){return!Xe&&"BroadcastChannel"in self&&(Xe=new BroadcastChannel("[Firebase] FID Change"),Xe.onmessage=t=>{V0(t.data.key,t.data.fid)}),Xe}function Vu(){$0.size===0&&Xe&&(Xe.close(),Xe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="firebase-installations-database",Yu=1,et="firebase-installations-store";let Kr=null;function Ss(){return Kr||(Kr=zl(Ku,Yu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(et)}}})),Kr}async function hr(t,e){const n=Ir(t),s=(await Ss()).transaction(et,"readwrite"),i=s.objectStore(et),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&G0(t,e.fid),e}async function K0(t){const e=Ir(t),r=(await Ss()).transaction(et,"readwrite");await r.objectStore(et).delete(e),await r.done}async function Tr(t,e){const n=Ir(t),s=(await Ss()).transaction(et,"readwrite"),i=s.objectStore(et),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&G0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){let e;const n=await Tr(t.appConfig,r=>{const s=Qu(r),i=Xu(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===us?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Qu(t){const e=t||{fid:Uu(),registrationStatus:0};return Y0(e)}function Xu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Je.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Zu(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ju(t)}:{installationEntry:e}}async function Zu(t,e){try{const n=await Hu(t,e);return hr(t.appConfig,n)}catch(n){throw L0(n)&&n.customData.serverCode===409?await K0(t.appConfig):await hr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ju(t){let e=await Hi(t.appConfig);for(;e.registrationStatus===1;)await z0(100),e=await Hi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Is(t);return r||n}return e}function Hi(t){return Tr(t,e=>{if(!e)throw Je.create("installation-not-found");return Y0(e)})}function Y0(t){return ed(t)?{fid:t.fid,registrationStatus:0}:t}function ed(t){return t.registrationStatus===1&&t.registrationTime+P0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td({appConfig:t,heartbeatServiceProvider:e},n){const r=nd(t,n),s=Mu(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:O0,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await U0(()=>fetch(r,a));if(c.ok){const l=await c.json();return H0(l)}else throw await W0("Generate Auth Token",c)}function nd(t,{fid:e}){return`${j0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e=!1){let n;const r=await Tr(t.appConfig,i=>{if(!Q0(i))throw Je.create("not-registered");const o=i.authToken;if(!e&&id(o))return i;if(o.requestStatus===1)return n=rd(t,e),i;{if(!navigator.onLine)throw Je.create("app-offline");const a=ad(i);return n=sd(t,a),a}});return n?await n:r.authToken}async function rd(t,e){let n=await Wi(t.appConfig);for(;n.authToken.requestStatus===1;)await z0(100),n=await Wi(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ts(t,e):r}function Wi(t){return Tr(t,e=>{if(!Q0(e))throw Je.create("not-registered");const n=e.authToken;return ld(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sd(t,e){try{const n=await td(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hr(t.appConfig,r),n}catch(n){if(L0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await K0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hr(t.appConfig,r)}throw n}}function Q0(t){return t!==void 0&&t.registrationStatus===2}function id(t){return t.requestStatus===2&&!od(t)}function od(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Nu}function ad(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ld(t){return t.requestStatus===1&&t.requestTime+P0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t){const e=t,{installationEntry:n,registrationPromise:r}=await Is(e);return r?r.catch(console.error):Ts(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ud(t,e=!1){const n=t;return await dd(n),(await Ts(n,e)).token}async function dd(t){const{registrationPromise:e}=await Is(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){if(!t||!t.options)throw Yr("App Configuration");if(!t.name)throw Yr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yr(t){return Je.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="installations",fd="installations-internal",xd=t=>{const e=t.getProvider("app").getImmediate(),n=hd(e),r=un(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pd=t=>{const e=t.getProvider("app").getImmediate(),n=un(e,X0).getImmediate();return{getId:()=>cd(n),getToken:s=>ud(n,s)}};function _d(){Xt(new Zt(X0,xd,"PUBLIC")),Xt(new Zt(fd,pd,"PRIVATE"))}_d();mt(R0,ks);mt(R0,ks,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="analytics",vd="firebase_id",gd="origin",md=60*1e3,yd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ns="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new m0("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ce=new v0("analytics","Analytics",Cd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){if(!t.startsWith(Ns)){const e=Ce.create("invalid-gtag-resource",{gtagURL:t});return ge.warn(e.message),""}return t}function Z0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bd(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wd(t,e){const n=bd("firebase-js-sdk-policy",{createScriptURL:Ed}),r=document.createElement("script"),s=`${Ns}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Ad(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Dd(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Z0(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){ge.error(a)}t("config",s,i)}async function Fd(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Z0(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ge.error(i)}}function Bd(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Fd(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Dd(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ge.error(a)}}return s}function kd(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Bd(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Sd(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ns)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=30,Td=1e3;class Nd{constructor(e={},n=Td){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const J0=new Nd;function Rd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Pd(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Rd(r)},i=yd.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Od(t,e=J0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ce.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ce.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jd;return setTimeout(async()=>{a.abort()},md),ea({appId:r,apiKey:s,measurementId:i},o,a,e)}async function ea(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=J0){var i;const{appId:o,measurementId:a}=t;try{await Md(r,e)}catch(c){if(a)return ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Pd(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Ld(l)){if(s.deleteThrottleMetadata(o),a)return ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ni(n,s.intervalMillis,Id):Ni(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ge.debug(`Calling attemptFetch again in ${u} millis`),ea(t,h,r,s)}}function Md(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ld(t){if(!(t instanceof g0)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hd(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(){if(Gl())try{await Vl()}catch(t){return ge.warn(Ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ge.warn(Ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qd(t,e,n,r,s,i,o){var a;const c=Od(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>ge.error(f)),e.push(c);const l=Wd().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([c,l]);Sd(i)||wd(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[gd]="firebase",d.update=!0,h!=null&&(d[vd]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.app=e}_delete(){return delete $t[this.app.options.appId],Promise.resolve()}}let $t={},qi=[];const Ui={};let Qr="dataLayer",zd="gtag",zi,ta,$i=!1;function $d(){const t=[];if($l()&&t.push("This is a browser extension environment."),Kl()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ce.create("invalid-analytics-context",{errorInfo:e});ge.warn(n.message)}}function Gd(t,e,n){$d();const r=t.options.appId;if(!r)throw Ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ce.create("no-api-key");if($t[r]!=null)throw Ce.create("already-exists",{id:r});if(!$i){Ad(Qr);const{wrappedGtag:i,gtagCore:o}=kd($t,qi,Ui,Qr,zd);ta=i,zi=o,$i=!0}return $t[r]=qd(t,qi,Ui,e,zi,Qr,n),new Ud(t)}function Vd(t=y0()){t=Oe(t);const e=un(t,fr);return e.isInitialized()?e.getImmediate():Kd(t)}function Kd(t,e={}){const n=un(t,fr);if(n.isInitialized()){const s=n.getImmediate();if(C0(e,n.getOptions()))return s;throw Ce.create("already-initialized")}return n.initialize({options:e})}function Yd(t,e,n,r){t=Oe(t),Hd(ta,$t[t.app.options.appId],e,n,r).catch(s=>ge.error(s))}const Gi="@firebase/analytics",Vi="0.10.17";function Qd(){Xt(new Zt(fr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Gd(r,s,n)},"PUBLIC")),Xt(new Zt("analytics-internal",t,"PRIVATE")),mt(Gi,Vi),mt(Gi,Vi,"esm2017");function t(e){try{const n=e.getProvider(fr).getImmediate();return{logEvent:(r,s,i)=>Yd(n,r,s,i)}}catch(n){throw Ce.create("interop-component-reg-failed",{reason:n})}}}Qd();var Ki={};const Yi="@firebase/database",Qi="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="";function Xd(t){na=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zd(e)}}catch{}return new Jd},Ze=ra("localStorage"),eh=ra("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new m0("@firebase/database"),th=(function(){let t=1;return function(){return t++}})(),sa=function(t){const e=Yl(t),n=new Ql;n.update(e);const r=n.digest();return Xl.encodeByteArray(r)},fn=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fn.apply(null,r):typeof r=="object"?e+=ae(r):e+=r,e+=" "}return e};let Gt=null,Xi=!0;const nh=function(t,e){R(!0,"Can't turn on custom loggers persistently."),vt.logLevel=Jl.VERBOSE,Gt=vt.log.bind(vt)},de=function(...t){if(Xi===!0&&(Xi=!1,Gt===null&&eh.get("logging_enabled")===!0&&nh()),Gt){const e=fn.apply(null,t);Gt(e)}},xn=function(t){return function(...e){de(t,...e)}},ds=function(...t){const e="FIREBASE INTERNAL ERROR: "+fn(...t);vt.error(e)},Pe=function(...t){const e=`FIREBASE FATAL ERROR: ${fn(...t)}`;throw vt.error(e),new Error(e)},pe=function(...t){const e="FIREBASE WARNING: "+fn(...t);vt.warn(e)},rh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sh=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ct="[MIN_NAME]",tt="[MAX_NAME]",st=function(t,e){if(t===e)return 0;if(t===Ct||e===tt)return-1;if(e===Ct||t===tt)return 1;{const n=Zi(t),r=Zi(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ih=function(t,e){return t===e?0:t<e?-1:1},Ht=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},Ps=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ae(e[r]),n+=":",n+=Ps(t[e[r]]);return n+="}",n},ia=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function he(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const oa=function(t){R(!Rs(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},oh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ah=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lh(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ch=new RegExp("^-?(0*)\\d{1,10}$"),uh=-2147483648,dh=2147483647,Zi=function(t){if(ch.test(t)){const e=Number(t);if(e>=uh&&e<=dh)return e}return null},Ft=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},hh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Zl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(de("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pe(e)}}class Fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="5",aa="v",la="s",ca="r",ua="f",da=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ha="ls",fa="p",hs="ac",xa="websocket",pa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1,l=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ze.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ze.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ph(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function va(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===xa)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pa)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ph(t)&&(n.ns=t.namespace);const s=[];return he(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.counters_={}}incrementCounter(e,n=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={},Zr={};function Ms(t){const e=t.toString();return Xr[e]||(Xr[e]=new _h),Xr[e]}function vh(t,e){const n=t.toString();return Zr[n]||(Zr[n]=e()),Zr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ft(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="start",mh="close",yh="pLPCommand",Ch="pRTLPCB",ga="id",ma="pw",ya="ser",Eh="cb",bh="seg",wh="ts",Ah="d",Dh="dframe",Ca=1870,Ea=30,Fh=Ca-Ea,Bh=25e3,kh=3e4;class _t{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xn(e),this.stats_=Ms(n),this.urlFn=c=>(this.appCheckToken&&(c[hs]=this.appCheckToken),va(n,pa,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kh)),sh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ls((...i)=>{const[o,a,c,l,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ji)this.id=a,this.password=c;else if(o===mh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ji]="t",r[ya]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Eh]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aa]=Os,this.transportSessionId&&(r[la]=this.transportSessionId),this.lastSessionId&&(r[ha]=this.lastSessionId),this.applicationId&&(r[fa]=this.applicationId),this.appCheckToken&&(r[hs]=this.appCheckToken),typeof location<"u"&&location.hostname&&da.test(location.hostname)&&(r[ca]=ua);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_t.forceAllow_=!0}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){return _t.forceAllow_?!0:!_t.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oh()&&!ah()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ic(n),s=ia(r,Fh);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Dh]="t",r[ga]=e,r[ma]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ls{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=th(),window[yh+this.uniqueCallbackIdentifier]=e,window[Ch+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ls.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){de("frame writing exception"),a.stack&&de(a.stack),de(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||de("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ga]=this.myID,e[ma]=this.myPW,e[ya]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ea+r.length<=Ca;){const o=this.pendingSegs.shift();r=r+"&"+bh+s+"="+o.seg+"&"+wh+s+"="+o.ts+"&"+Ah+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(Bh)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{de("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=16384,Ih=45e3;let xr=null;typeof MozWebSocket<"u"?xr=MozWebSocket:typeof WebSocket<"u"&&(xr=WebSocket);class Fe{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xn(this.connId),this.stats_=Ms(n),this.connURL=Fe.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[aa]=Os,typeof location<"u"&&location.hostname&&da.test(location.hostname)&&(o[ca]=ua),n&&(o[la]=n),r&&(o[ha]=r),s&&(o[hs]=s),i&&(o[fa]=i),va(e,xa,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ze.set("previous_websocket_failure",!0);try{let r;oc(),this.mySock=new xr(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xr!==null&&!Fe.forceDisallow_}static previouslyFailed(){return Ze.isInMemoryStorage||Ze.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ze.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ds(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ia(n,Sh);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ih))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fe.responsesRequiredToBeHealthy=2;Fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{static get ALL_TRANSPORTS(){return[_t,Fe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Fe&&Fe.isAvailable();let r=n&&!Fe.previouslyFailed();if(e.webSocketOnly&&(n||pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Fe];else{const s=this.transports_=[];for(const i of Jt.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Jt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=6e4,Nh=5e3,Rh=10*1024,Ph=100*1024,Jr="t",eo="d",Oh="s",to="r",Mh="e",no="o",ro="a",so="n",io="p",Lh="h";class jh{constructor(e,n,r,s,i,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xn("c:"+this.id+":"),this.transportManager_=new Jt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Vt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jr in e){const n=e[Jr];n===ro?this.upgradeIfSecondaryHealthy_():n===to?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===no&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ht("t",e),r=Ht("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:io,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ro,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:so,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ht("t",e),r=Ht("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ht(Jr,e);if(eo in e){const r=e[eo];if(n===Lh){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===so){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Oh?this.onConnectionShutdown_(r):n===to?this.onReset_(r):n===Mh?ds("Server Error: "+r):n===no?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ds("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Os!==r&&pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Vt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Th))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:io,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ze.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends wa{static getInstance(){return new pr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!E0()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=32,ao=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new Y("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $e(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function js(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function en(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Aa(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Y(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return xe(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wh(t,e){const n=en(t,0),r=en(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=st(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Da(t,e){if($e(t)!==$e(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function be(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($e(t)>$e(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qh{constructor(e,n){this.errorPrefix_=n,this.parts_=en(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Br(this.parts_[r]);Fa(this)}}function Uh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Br(e),Fa(t)}function zh(t){const e=t.parts_.pop();t.byteLength_-=Br(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fa(t){if(t.byteLength_>ao)throw new Error(t.errorPrefix_+"has a key path longer than "+ao+" bytes ("+t.byteLength_+").");if(t.parts_.length>oo)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oo+") or object contains a cycle "+Qe(t))}function Qe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends wa{static getInstance(){return new Hs}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1e3,$h=300*1e3,lo=30*1e3,Gh=1.3,Vh=3e4,Kh="server_kill",co=3;class Ne extends ba{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ne.nextPersistentConnectionId_++,this.log_=xn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wt,this.maxReconnectDelay_=$h,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ae(i)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Fr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,l=a.s;Ne.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ie(e,"w")){const r=yt(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nc(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ds("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Vh&&(this.reconnectDelay_=Wt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ne.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?de("getToken() completed but was canceled"):(de("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new jh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{pe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kh)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&pe(h),c())}}}interrupt(e){de("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){de("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ri(this.interruptReasons_)&&(this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Ps(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){de("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=co&&(this.reconnectDelay_=lo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){de("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=co&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+na.replace(/\./g,"-")]=1,E0()?e["framework.cordova"]=1:rc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pr.getInstance().currentlyOnline();return Ri(this.interruptReasons_)&&e}}Ne.nextPersistentConnectionId_=0;Ne.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(Ct,e),s=new q(Ct,n);return this.compare(r,s)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class Ba extends Nr{static get __EMPTY_NODE(){return wn}static set __EMPTY_NODE(e){wn=e}compare(e,n){return st(e.name,n.name)}isDefinedOn(e){throw dn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(tt,wn)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,wn)}toString(){return".key"}}const gt=new Ba;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ce.RED,this.left=s??ve.EMPTY_NODE,this.right=i??ve.EMPTY_NODE}copy(e,n,r,s,i){return new ce(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ve.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Yh{copy(e,n,r,s,i){return this}insert(e,n,r){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,n=ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new An(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new An(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new An(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new An(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new Yh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e){return st(t.name,e.name)}function Ws(t,e){return st(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;function Xh(t){fs=t}const ka=function(t){return typeof t=="number"?"number:"+oa(t):"string:"+t},Sa=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else R(t===fs||t.isEmpty(),"priority of unexpected type.");R(t===fs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class le{static set __childrenNodeConstructor(e){uo=e}static get __childrenNodeConstructor(){return uo}constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sa(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:z(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||$e(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ka(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=oa(this.value_):e+=this.value_,this.lazyHash_=sa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=le.VALUE_TYPE_ORDER.indexOf(n),i=le.VALUE_TYPE_ORDER.indexOf(r);return R(s>=0,"Unknown leaf type: "+n),R(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia,Ta;function Zh(t){Ia=t}function Jh(t){Ta=t}class ef extends Nr{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?st(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(tt,new le("[PRIORITY-POST]",Ta))}makePost(e,n){const r=Ia(e);return new q(n,new le("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new ef;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=Math.log(2);class nf{constructor(e){const n=i=>parseInt(Math.log(i)/tf,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _r=function(t,e,n,r){t.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new ce(d,h.node,ce.BLACK,null,null);{const f=parseInt(u/2,10)+c,x=s(c,f),m=s(f+1,l);return h=t[f],d=n?n(h):h,new ce(d,h.node,ce.BLACK,x,m)}},i=function(c){let l=null,u=null,h=t.length;const d=function(x,m){const p=h-x,C=h;h-=x;const v=s(p+1,C),_=t[p],y=n?n(_):_;f(new ce(y,_.node,m,null,v))},f=function(x){l?(l.left=x,l=x):(u=x,l=x)};for(let x=0;x<c.count;++x){const m=c.nextBitIsOne(),p=Math.pow(2,c.count-(x+1));m?d(p,ce.BLACK):(d(p,ce.BLACK),d(p,ce.RED))}return u},o=new nf(t.length),a=i(o);return new ve(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const xt={};class Te{static get Default(){return R(xt&&se,"ChildrenNode.ts has not been loaded"),es=es||new Te({".priority":xt},{".priority":se}),es}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ve?n:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,n){R(e!==gt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(q.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=_r(r,e.getCompare()):a=xt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Te(u,l)}addToIndexes(e,n){const r=ur(this.indexes_,(s,i)=>{const o=yt(this.indexSet_,i);if(R(o,"Missing index implementation for "+i),s===xt)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(q.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),_r(a,o.getCompare())}else return xt;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new q(e.name,a))),c.insert(e,e.node)}});return new Te(r,this.indexSet_)}removeFromIndexes(e,n){const r=ur(this.indexes_,s=>{if(s===xt)return s;{const i=n.get(e.name);return i?s.remove(new q(e.name,i)):s}});return new Te(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class j{static get EMPTY_NODE(){return qt||(qt=new j(new ve(Ws),null,Te.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sa(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qt}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qt:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?qt:this.priorityNode_;return new j(s,o,i)}}updateChild(e,n){const r=z(e);if(r===null)return n;{R(z(e)!==".priority"||$e(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,i&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ka(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":sa(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new q(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pn?-1:0}withIndex(e){if(e===gt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),s=n.getIterator(se);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gt?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rf extends j{constructor(){super(new ve(Ws),j.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const pn=new rf;Object.defineProperties(q,{MIN:{value:new q(Ct,j.EMPTY_NODE)},MAX:{value:new q(tt,pn)}});Ba.__EMPTY_NODE=j.EMPTY_NODE;le.__childrenNodeConstructor=j;Xh(pn);Jh(pn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=!0;function oe(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,oe(e))}if(!(t instanceof Array)&&sf){const n=[];let r=!1;if(he(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=oe(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new q(o,c)))}}),n.length===0)return j.EMPTY_NODE;const i=_r(n,Qh,o=>o.name,Ws);if(r){const o=_r(n,se.getCompare());return new j(i,oe(e),new Te({".priority":o},{".priority":se}))}else return new j(i,oe(e),Te.Default)}else{let n=j.EMPTY_NODE;return he(t,(r,s)=>{if(Ie(t,r)&&r.substring(0,1)!=="."){const i=oe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(oe(e))}}Zh(oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends Nr{constructor(e){super(),this.indexPath_=e,R(!U(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?st(e.name,n.name):i}makePost(e,n){const r=oe(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,pn);return new q(tt,e)}toString(){return en(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends Nr{compare(e,n){const r=e.node.compareTo(n.node);return r===0?st(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=oe(e);return new q(n,r)}toString(){return".value"}}const lf=new af;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){return{type:"value",snapshotNode:t}}function Et(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cf(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(tn(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Et(n,r)):o.trackChildChange(nn(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(s,i)=>{n.hasChild(s)||r.trackChildChange(tn(s,i))}),n.isLeafNode()||n.forEachChild(se,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(nn(s,i,o))}else r.trackChildChange(Et(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.indexedFilter_=new qs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rn.getStartPost_(e),this.endPost_=rn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new q(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const i=this;return n.forEachChild(se,(o,a)=>{i.matches(new q(o,a))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new q(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const c=new q(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!r.isEmpty()&&f>=0)return i!=null&&i.trackChildChange(nn(n,r,h)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(tn(n,h));const m=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Et(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return r.isEmpty()?e:u&&o(l,c)>=0?(i!=null&&(i.trackChildChange(tn(l.name,l.node)),i.trackChildChange(Et(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ct}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Us;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function df(t){return t.loadsAllData()?new qs(t.getIndex()):t.hasLimit()?new uf(t):new rn(t)}function ho(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===lf?n="$value":t.index_===gt?n="$key":(R(t.index_ instanceof of,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ba{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=xn("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=vr.getListenId_(e,r),a={};this.listens_[o]=a;const c=ho(e._queryParams);this.restRequest_(i+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(i,h,!1,r),yt(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,n){const r=vr.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ho(e._queryParams),r=e._path.toString(),s=new Fr;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ec(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ds(a.responseText)}catch{pe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&pe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return{value:null,children:new Map}}function Ra(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,gr());const s=t.children.get(r);e=ee(e),Ra(s,e,n)}}function xs(t,e,n){t.value!==null?n(e,t.value):ff(t,(r,s)=>{const i=new Y(e.toString()+"/"+r);xs(s,i,n)})}function ff(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&he(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=10*1e3,pf=30*1e3,_f=300*1e3;class vf{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xf(e);const r=xo+(pf-xo)*Math.random();Vt(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;he(e,(s,i)=>{i>0&&Ie(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Vt(this.reportStats_.bind(this),Math.floor(Math.random()*2*_f))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Be||(Be={}));function zs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $s(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Be.ACK_USER_WRITE,this.source=zs()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new mr(G(),n,this.revert)}}else return R(z(this.path)===e,"operationForChild called for unrelated child."),new mr(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.source=e,this.path=n,this.type=Be.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new sn(this.source,G()):new sn(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Be.OVERWRITE}operationForChild(e){return U(this.path)?new nt(this.source,G(),this.snap.getImmediateChild(e)):new nt(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Be.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new nt(this.source,G(),n.value):new bt(this.source,G(),n)}else return R(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bt(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mf(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(cf(o.childName,o.snapshotNode))}),Ut(t,s,"child_removed",e,r,n),Ut(t,s,"child_added",e,r,n),Ut(t,s,"child_moved",i,r,n),Ut(t,s,"child_changed",e,r,n),Ut(t,s,"value",e,r,n),s}function Ut(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>Cf(t,a,c)),o.forEach(a=>{const c=yf(t,a,i);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function yf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cf(t,e,n){if(e.childName==null||n.childName==null)throw dn("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),s=new q(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){return{eventCache:t,serverCache:e}}function Kt(t,e,n,r){return Rr(new Ge(e,n,r),t.serverCache)}function Pa(t,e,n,r){return Rr(t.eventCache,new Ge(e,n,r))}function yr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;const Ef=()=>(ts||(ts=new ve(ih)),ts);class Z{static fromObject(e){let n=new Z(null);return he(e,(r,s)=>{n=n.set(new Y(r),s)}),n}constructor(e,n=Ef()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(U(e))return null;{const r=z(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ee(e),n);return i!=null?{path:re(new Y(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(U(e))return new Z(n,this.children);{const r=z(e),i=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,i);return new Z(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const s=r.remove(ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Z(null):new Z(this.value,i)}else return this}}get(e){if(U(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(U(e))return n;{const r=z(e),i=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Z(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(re(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(U(e))return null;{const i=z(e),o=this.children.get(i);return o?o.findOnPath_(ee(e),re(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const s=z(e),i=this.children.get(s);return i?i.foreachOnPath_(ee(e),re(n,s),r):new Z(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.writeTree_=e}static empty(){return new ke(new Z(null))}}function Yt(t,e,n){if(U(e))return new ke(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=xe(s,e);return i=i.updateChild(o,n),new ke(t.writeTree_.set(s,i))}else{const s=new Z(n),i=t.writeTree_.setTree(e,s);return new ke(i)}}}function ps(t,e,n){let r=t;return he(n,(s,i)=>{r=Yt(r,re(e,s),i)}),r}function po(t,e){if(U(e))return ke.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new ke(n)}}function _s(t,e){return it(t,e)!=null}function it(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function _o(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,s)=>{e.push(new q(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new q(r,s.value))}),e}function Ue(t,e){if(U(e))return t;{const n=it(t,e);return n!=null?new ke(new Z(n)):new ke(t.writeTree_.subtree(e))}}function vs(t){return t.writeTree_.isEmpty()}function wt(t,e){return Oa(G(),t.writeTree_,e)}function Oa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(R(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Oa(re(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){return Ha(e,t)}function bf(t,e,n,r,s){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Yt(t.visibleWrites,e,n)),t.lastWriteId=r}function wf(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ps(t.visibleWrites,e,n),t.lastWriteId=r}function Af(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Df(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ff(a,r.path)?s=!1:be(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Bf(t),!0;if(r.snap)t.visibleWrites=po(t.visibleWrites,r.path);else{const a=r.children;he(a,c=>{t.visibleWrites=po(t.visibleWrites,re(r.path,c))})}return!0}else return!1}function Ff(t,e){if(t.snap)return be(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&be(re(t.path,n),e))return!0;return!1}function Bf(t){t.visibleWrites=Ma(t.allWrites,kf,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kf(t){return t.visible}function Ma(t,e,n){let r=ke.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)be(n,o)?(a=xe(n,o),r=Yt(r,a,i.snap)):be(o,n)&&(a=xe(o,n),r=Yt(r,G(),i.snap.getChild(a)));else if(i.children){if(be(n,o))a=xe(n,o),r=ps(r,a,i.children);else if(be(o,n))if(a=xe(o,n),U(a))r=ps(r,G(),i.children);else{const c=yt(i.children,z(a));if(c){const l=c.getChild(ee(a));r=Yt(r,G(),l)}}}else throw dn("WriteRecord should have .snap or .children")}}return r}function La(t,e,n,r,s){if(!r&&!s){const i=it(t.visibleWrites,e);if(i!=null)return i;{const o=Ue(t.visibleWrites,e);if(vs(o))return n;if(n==null&&!_s(o,G()))return null;{const a=n||j.EMPTY_NODE;return wt(o,a)}}}else{const i=Ue(t.visibleWrites,e);if(!s&&vs(i))return n;if(!s&&n==null&&!_s(i,G()))return null;{const o=function(l){return(l.visible||s)&&(!r||!~r.indexOf(l.writeId))&&(be(l.path,e)||be(e,l.path))},a=Ma(t.allWrites,o,e),c=n||j.EMPTY_NODE;return wt(a,c)}}}function Sf(t,e,n){let r=j.EMPTY_NODE;const s=it(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(se,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Ue(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const c=wt(Ue(i,new Y(o)),a);r=r.updateImmediateChild(o,c)}),_o(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Ue(t.visibleWrites,e);return _o(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function If(t,e,n,r,s){R(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=re(e,n);if(_s(t.visibleWrites,i))return null;{const o=Ue(t.visibleWrites,i);return vs(o)?s.getChild(n):wt(o,s.getChild(n))}}function Tf(t,e,n,r){const s=re(e,n),i=it(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Ue(t.visibleWrites,s);return wt(o,r.getNode().getImmediateChild(n))}else return null}function Nf(t,e){return it(t.visibleWrites,e)}function Rf(t,e,n,r,s,i,o){let a;const c=Ue(t.visibleWrites,e),l=it(c,G());if(l!=null)a=l;else if(n!=null)a=wt(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<s;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Pf(){return{visibleWrites:ke.empty(),allWrites:[],lastWriteId:-1}}function Cr(t,e,n,r){return La(t.writeTree,t.treePath,e,n,r)}function Vs(t,e){return Sf(t.writeTree,t.treePath,e)}function vo(t,e,n,r){return If(t.writeTree,t.treePath,e,n,r)}function Er(t,e){return Nf(t.writeTree,re(t.treePath,e))}function Of(t,e,n,r,s,i){return Rf(t.writeTree,t.treePath,e,n,r,s,i)}function Ks(t,e,n){return Tf(t.writeTree,t.treePath,e,n)}function ja(t,e){return Ha(re(t.treePath,e),t.writeTree)}function Ha(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,nn(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,tn(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Et(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,nn(r,e.snapshotNode,s.oldSnap));else throw dn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Wa=new Lf;class Ys{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ge(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ks(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rt(this.viewCache_),i=Of(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){return{filter:t}}function Hf(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Wf(t,e,n,r,s){const i=new Mf;let o,a;if(n.type===Be.OVERWRITE){const l=n;l.source.fromUser?o=gs(t,e,l.path,l.snap,r,s,i):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!U(l.path),o=br(t,e,l.path,l.snap,r,s,a,i))}else if(n.type===Be.MERGE){const l=n;l.source.fromUser?o=Uf(t,e,l.path,l.children,r,s,i):(R(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ms(t,e,l.path,l.children,r,s,a,i))}else if(n.type===Be.ACK_USER_WRITE){const l=n;l.revert?o=Gf(t,e,l.path,r,s,i):o=zf(t,e,l.path,l.affectedTree,r,s,i)}else if(n.type===Be.LISTEN_COMPLETE)o=$f(t,e,n.path,r,i);else throw dn("Unknown operation type: "+n.type);const c=i.getChanges();return qf(e,o,c),{viewCache:o,changes:c}}function qf(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=yr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Na(yr(e)))}}function qa(t,e,n,r,s,i){const o=e.eventCache;if(Er(r,n)!=null)return e;{let a,c;if(U(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=rt(e),u=l instanceof j?l:j.EMPTY_NODE,h=Vs(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const l=Cr(r,rt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,i)}else{const l=z(n);if(l===".priority"){R($e(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=vo(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ee(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=vo(r,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Ks(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,s,i):a=o.getNode()}}return Kt(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function br(t,e,n,r,s,i,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),f,null)}else{const f=z(n);if(!c.isCompleteForPath(n)&&$e(n)>1)return e;const x=ee(n),p=c.getNode().getImmediateChild(f).updateChild(x,r);f===".priority"?l=u.updatePriority(c.getNode(),p):l=u.updateChild(c.getNode(),f,p,x,Wa,null)}const h=Pa(e,l,c.isFullyInitialized()||U(n),u.filtersNodes()),d=new Ys(s,h,i);return qa(t,h,n,s,d,a)}function gs(t,e,n,r,s,i,o){const a=e.eventCache;let c,l;const u=new Ys(s,e,i);if(U(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Kt(e,l,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Kt(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=ee(n),f=a.getNode().getImmediateChild(h);let x;if(U(d))x=r;else{const m=u.getCompleteChild(h);m!=null?js(d)===".priority"&&m.getChild(Aa(d)).isEmpty()?x=m:x=m.updateChild(d,r):x=j.EMPTY_NODE}if(f.equals(x))c=e;else{const m=t.filter.updateChild(a.getNode(),h,x,d,u,o);c=Kt(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function go(t,e){return t.eventCache.isCompleteForChild(e)}function Uf(t,e,n,r,s,i,o){let a=e;return r.foreach((c,l)=>{const u=re(n,c);go(e,z(u))&&(a=gs(t,a,u,l,s,i,o))}),r.foreach((c,l)=>{const u=re(n,c);go(e,z(u))||(a=gs(t,a,u,l,s,i,o))}),a}function mo(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ms(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;U(n)?l=r:l=new Z(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),x=mo(t,f,d);c=br(t,c,new Y(h),x,s,i,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const x=e.serverCache.getNode().getImmediateChild(h),m=mo(t,x,d);c=br(t,c,new Y(h),m,s,i,o,a)}}),c}function zf(t,e,n,r,s,i,o){if(Er(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(U(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return br(t,e,n,c.getNode().getChild(n),s,i,a,o);if(U(n)){let l=new Z(null);return c.getNode().forEachChild(gt,(u,h)=>{l=l.set(new Y(u),h)}),ms(t,e,n,l,s,i,a,o)}else return e}else{let l=new Z(null);return r.foreach((u,h)=>{const d=re(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),ms(t,e,n,l,s,i,a,o)}}function $f(t,e,n,r,s){const i=e.serverCache,o=Pa(e,i.getNode(),i.isFullyInitialized()||U(n),i.isFiltered());return qa(t,o,n,r,Wa,s)}function Gf(t,e,n,r,s,i){let o;if(Er(r,n)!=null)return e;{const a=new Ys(r,e,s),c=e.eventCache.getNode();let l;if(U(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cr(r,rt(e));else{const h=e.serverCache.getNode();R(h instanceof j,"serverChildren would be complete if leaf node"),u=Vs(r,h)}u=u,l=t.filter.updateFullNode(c,u,i)}else{const u=z(n);let h=Ks(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,ee(n),a,i):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,j.EMPTY_NODE,ee(n),a,i):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cr(r,rt(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,i)))}return o=e.serverCache.isFullyInitialized()||Er(r,G())!=null,Kt(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new qs(r.getIndex()),i=df(r);this.processor_=jf(i);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Ge(c,o.isFullyInitialized(),s.filtersNodes()),h=new Ge(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Rr(h,u),this.eventGenerator_=new gf(this.query_)}get query(){return this.query_}}function Kf(t){return t.viewCache_.serverCache.getNode()}function Yf(t){return yr(t.viewCache_)}function Qf(t,e){const n=rt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function yo(t){return t.eventRegistrations_.length===0}function Xf(t,e){t.eventRegistrations_.push(e)}function Co(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Eo(t,e,n,r){e.type===Be.MERGE&&e.source.queryId!==null&&(R(rt(t.viewCache_),"We should always have a full cache before handling merges"),R(yr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=Wf(t.processor_,s,e,n,r);return Hf(t.processor_,i.viewCache),R(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Ua(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Zf(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(i,o)=>{r.push(Et(i,o))}),n.isFullyInitialized()&&r.push(Na(n.getNode())),Ua(t,r,n.getNode(),e)}function Ua(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return mf(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class za{constructor(){this.views=new Map}}function Jf(t){R(!wr,"__referenceConstructor has already been defined"),wr=t}function ex(){return R(wr,"Reference.ts has not been loaded"),wr}function tx(t){return t.views.size===0}function Qs(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return R(i!=null,"SyncTree gave us an op for an invalid query."),Eo(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Eo(o,e,n,r));return i}}function $a(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Cr(n,s?r:null),c=!1;a?c=!0:r instanceof j?(a=Vs(n,r),c=!1):(a=j.EMPTY_NODE,c=!1);const l=Rr(new Ge(a,c,!1),new Ge(r,s,!1));return new Vf(e,l)}return o}function nx(t,e,n,r,s,i){const o=$a(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Xf(o,n),Zf(o,n)}function rx(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Ve(t);if(s==="default")for(const[c,l]of t.views.entries())o=o.concat(Co(l,n,r)),yo(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||i.push(l.query));else{const c=t.views.get(s);c&&(o=o.concat(Co(c,n,r)),yo(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!Ve(t)&&i.push(new(ex())(e._repo,e._path)),{removed:i,events:o}}function Ga(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ze(t,e){let n=null;for(const r of t.views.values())n=n||Qf(r,e);return n}function Va(t,e){if(e._queryParams.loadsAllData())return Or(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ka(t,e){return Va(t,e)!=null}function Ve(t){return Or(t)!=null}function Or(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;function sx(t){R(!Ar,"__referenceConstructor has already been defined"),Ar=t}function ix(){return R(Ar,"Reference.ts has not been loaded"),Ar}let ox=1;class bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=Pf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ya(t,e,n,r,s){return bf(t.pendingWriteTree_,e,n,r,s),s?Bt(t,new nt(zs(),e,n)):[]}function ax(t,e,n,r){wf(t.pendingWriteTree_,e,n,r);const s=Z.fromObject(n);return Bt(t,new bt(zs(),e,s))}function qe(t,e,n=!1){const r=Af(t.pendingWriteTree_,e);if(Df(t.pendingWriteTree_,e)){let i=new Z(null);return r.snap!=null?i=i.set(G(),!0):he(r.children,o=>{i=i.set(new Y(o),!0)}),Bt(t,new mr(r.path,i,n))}else return[]}function _n(t,e,n){return Bt(t,new nt($s(),e,n))}function lx(t,e,n){const r=Z.fromObject(n);return Bt(t,new bt($s(),e,r))}function cx(t,e){return Bt(t,new sn($s(),e))}function ux(t,e,n){const r=Zs(t,n);if(r){const s=Js(r),i=s.path,o=s.queryId,a=xe(i,e),c=new sn(Gs(o),a);return ei(t,i,c)}else return[]}function Qa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Ka(o,e))){const c=rx(o,e,n,r);tx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,f)=>Ve(f));if(u&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=xx(d);for(let x=0;x<f.length;++x){const m=f[x],p=m.query,C=el(t,m);t.listenProvider_.startListening(Qt(p),on(t,p),C.hashFn,C.onComplete)}}}!h&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(Qt(e),null):l.forEach(d=>{const f=t.queryToTagMap.get(Mr(d));t.listenProvider_.stopListening(Qt(d),f)}))}px(t,l)}return a}function Xa(t,e,n,r){const s=Zs(t,r);if(s!=null){const i=Js(s),o=i.path,a=i.queryId,c=xe(o,e),l=new nt(Gs(a),c,n);return ei(t,o,l)}else return[]}function dx(t,e,n,r){const s=Zs(t,r);if(s){const i=Js(s),o=i.path,a=i.queryId,c=xe(o,e),l=Z.fromObject(n),u=new bt(Gs(a),c,l);return ei(t,o,u)}else return[]}function hx(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,f)=>{const x=xe(d,s);i=i||ze(f,x),o=o||Ve(f)});let a=t.syncPointTree_.get(s);a?(o=o||Ve(a),i=i||ze(a,G())):(a=new za,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;i!=null?c=!0:(c=!1,i=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,x)=>{const m=ze(x,G());m&&(i=i.updateImmediateChild(f,m))}));const l=Ka(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Mr(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=_x();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Pr(t.pendingWriteTree_,s);let h=nx(a,e,n,u,i,c);if(!l&&!o&&!r){const d=Va(a,e);h=h.concat(vx(t,e,d))}return h}function Xs(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=xe(o,e),l=ze(a,c);if(l)return l});return La(s,e,i,n,!0)}function fx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const h=xe(l,n);r=r||ze(u,h)});let s=t.syncPointTree_.get(n);s?r=r||ze(s,G()):(s=new za,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Ge(r,!0,!1):null,a=Pr(t.pendingWriteTree_,e._path),c=$a(s,e,a,i?o.getNode():j.EMPTY_NODE,i);return Yf(c)}function Bt(t,e){return Za(e,t.syncPointTree_,null,Pr(t.pendingWriteTree_,G()))}function Za(t,e,n,r){if(U(t.path))return Ja(t,e,n,r);{const s=e.get(G());n==null&&s!=null&&(n=ze(s,G()));let i=[];const o=z(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=ja(r,o);i=i.concat(Za(a,c,l,u))}return s&&(i=i.concat(Qs(s,t,r,n))),i}}function Ja(t,e,n,r){const s=e.get(G());n==null&&s!=null&&(n=ze(s,G()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=ja(r,o),u=t.operationForChild(o);u&&(i=i.concat(Ja(u,a,c,l)))}),s&&(i=i.concat(Qs(s,t,r,n))),i}function el(t,e){const n=e.query,r=on(t,n);return{hashFn:()=>(Kf(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?ux(t,n._path,r):cx(t,n._path);{const i=lh(s,n);return Qa(t,n,null,i)}}}}function on(t,e){const n=Mr(e);return t.queryToTagMap.get(n)}function Mr(t){return t._path.toString()+"$"+t._queryIdentifier}function Zs(t,e){return t.tagToQueryMap.get(e)}function Js(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function ei(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const s=Pr(t.pendingWriteTree_,e);return Qs(r,n,s,null)}function xx(t){return t.fold((e,n,r)=>{if(n&&Ve(n))return[Or(n)];{let s=[];return n&&(s=Ga(n)),he(r,(i,o)=>{s=s.concat(o)}),s}})}function Qt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ix())(t._repo,t._path):t}function px(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Mr(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function _x(){return ox++}function vx(t,e,n){const r=e._path,s=on(t,e),i=el(t,n),o=t.listenProvider_.startListening(Qt(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)R(!Ve(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!U(l)&&u&&Ve(u))return[Or(u).query];{let d=[];return u&&(d=d.concat(Ga(u).map(f=>f.query))),he(h,(f,x)=>{d=d.concat(x)}),d}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Qt(u),on(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ti(n)}node(){return this.node_}}class ni{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new ni(this.syncTree_,n)}node(){return Xs(this.syncTree_,this.path_)}}const gx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wo=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yx(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},yx=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const s=e.node();if(R(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},tl=function(t,e,n,r){return ri(e,new ni(n,t),r)},nl=function(t,e,n){return ri(t,new ti(e),n)};function ri(t,e,n){const r=t.getPriority().val(),s=wo(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=wo(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new le(a,oe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new le(s))),o.forEachChild(se,(a,c)=>{const l=ri(c,e.getImmediateChild(a),n);l!==c&&(i=i.updateImmediateChild(a,l))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ii(t,e){let n=e instanceof Y?e:new Y(e),r=t,s=z(n);for(;s!==null;){const i=yt(r.node.children,s)||{children:{},childCount:0};r=new si(s,r,i),n=ee(n),s=z(n)}return r}function kt(t){return t.node.value}function rl(t,e){t.node.value=e,ys(t)}function sl(t){return t.node.childCount>0}function Cx(t){return kt(t)===void 0&&!sl(t)}function Lr(t,e){he(t.node.children,(n,r)=>{e(new si(n,t,r))})}function il(t,e,n,r){n&&e(t),Lr(t,s=>{il(s,e,!0)})}function Ex(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vn(t){return new Y(t.parent===null?t.name:vn(t.parent)+"/"+t.name)}function ys(t){t.parent!==null&&bx(t.parent,t.name,t)}function bx(t,e,n){const r=Cx(n),s=Ie(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ys(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ys(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/[\[\].#$\/\u0000-\u001F\u007F]/,Ax=/[\[\].#$\u0000-\u001F\u007F]/,ns=10*1024*1024,oi=function(t){return typeof t=="string"&&t.length!==0&&!wx.test(t)},ol=function(t){return typeof t=="string"&&t.length!==0&&!Ax.test(t)},Dx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ol(t)},Fx=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Rs(t)||t&&typeof t=="object"&&Ie(t,".sv")},al=function(t,e,n,r){r&&e===void 0||jr(Dr(t,"value"),e,n)},jr=function(t,e,n){const r=n instanceof Y?new qh(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qe(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qe(r)+" with contents = "+e.toString());if(Rs(e))throw new Error(t+"contains "+e.toString()+" "+Qe(r));if(typeof e=="string"&&e.length>ns/3&&Br(e)>ns)throw new Error(t+"contains a string greater than "+ns+" utf8 bytes "+Qe(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(he(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!oi(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qe(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uh(r,o),jr(t,a,r),zh(r)}),s&&i)throw new Error(t+' contains ".value" child '+Qe(r)+" in addition to actual children.")}},Bx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=en(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!oi(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wh);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&be(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},kx=function(t,e,n,r){const s=Dr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];he(e,(o,a)=>{const c=new Y(o);if(jr(s,a,re(n,c)),js(c)===".priority"&&!Fx(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),Bx(s,i)},ll=function(t,e,n,r){if(!ol(n))throw new Error(Dr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ll(t,e,n)},ai=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ix=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!oi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Dx(n))throw new Error(Dr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function li(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Da(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function we(t,e,n){li(t,n),Nx(t,r=>be(r,e)||be(e,r))}function Nx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(Rx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gt&&de("event: "+n.toString()),Ft(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="repo_interrupt",Ox=25;class Mx{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new si,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lx(t,e,n){if(t.stats_=Ms(t.repoInfo_),t.forceRestClient_||hh())t.server_=new vr(t.repoInfo_,(r,s,i,o)=>{Ao(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Do(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ne(t.repoInfo_,e,(r,s,i,o)=>{Ao(t,r,s,i,o)},r=>{Do(t,r)},r=>{jx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=vh(t.repoInfo_,()=>new vf(t.stats_,t.server_)),t.infoData_=new hf,t.infoSyncTree_=new bo({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=_n(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ci(t,"connected",!1),t.serverSyncTree_=new bo({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const l=o(a,c);we(t.eventQueue_,r._path,l)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function cl(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hr(t){return gx({timestamp:cl(t)})}function Ao(t,e,n,r,s){t.dataUpdateCount++;const i=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=ur(n,l=>oe(l));o=dx(t.serverSyncTree_,i,c,s)}else{const c=oe(n);o=Xa(t.serverSyncTree_,i,c,s)}else if(r){const c=ur(n,l=>oe(l));o=lx(t.serverSyncTree_,i,c)}else{const c=oe(n);o=_n(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=At(t,i)),we(t.eventQueue_,a,o)}function Do(t,e){ci(t,"connected",e),e===!1&&Ux(t)}function jx(t,e){he(e,(n,r)=>{ci(t,n,r)})}function ci(t,e,n){const r=new Y("/.info/"+e),s=oe(n);t.infoData_.updateSnapshot(r,s);const i=_n(t.infoSyncTree_,r,s);we(t.eventQueue_,r,i)}function ui(t){return t.nextWriteId_++}function Hx(t,e,n){const r=fx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=oe(s).withIndex(e._queryParams.getIndex());hx(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_n(t.serverSyncTree_,e._path,i);else{const a=on(t.serverSyncTree_,e);o=Xa(t.serverSyncTree_,e._path,i,a)}return we(t.eventQueue_,e._path,o),Qa(t.serverSyncTree_,e,n,null,!0),i},s=>(gn(t,"get for query "+ae(e)+" failed: "+s),Promise.reject(new Error(s))))}function Wx(t,e,n,r,s){gn(t,"set",{path:e.toString(),value:n,priority:r});const i=Hr(t),o=oe(n,r),a=Xs(t.serverSyncTree_,e),c=nl(o,a,i),l=ui(t),u=Ya(t.serverSyncTree_,e,c,l,!0);li(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const x=d==="ok";x||pe("set at "+e+" failed: "+d);const m=qe(t.serverSyncTree_,l,!x);we(t.eventQueue_,e,m),Cs(t,s,d,f)});const h=hi(t,e);At(t,h),we(t.eventQueue_,h,[])}function qx(t,e,n,r){gn(t,"update",{path:e.toString(),value:n});let s=!0;const i=Hr(t),o={};if(he(n,(a,c)=>{s=!1,o[a]=tl(re(e,a),oe(c),t.serverSyncTree_,i)}),s)de("update() called with empty data.  Don't do anything."),Cs(t,r,"ok",void 0);else{const a=ui(t),c=ax(t.serverSyncTree_,e,o,a);li(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,u)=>{const h=l==="ok";h||pe("update at "+e+" failed: "+l);const d=qe(t.serverSyncTree_,a,!h),f=d.length>0?At(t,e):e;we(t.eventQueue_,f,d),Cs(t,r,l,u)}),he(n,l=>{const u=hi(t,re(e,l));At(t,u)}),we(t.eventQueue_,e,[])}}function Ux(t){gn(t,"onDisconnectEvents");const e=Hr(t),n=gr();xs(t.onDisconnect_,G(),(s,i)=>{const o=tl(s,i,t.serverSyncTree_,e);Ra(n,s,o)});let r=[];xs(n,G(),(s,i)=>{r=r.concat(_n(t.serverSyncTree_,s,i));const o=hi(t,s);At(t,o)}),t.onDisconnect_=gr(),we(t.eventQueue_,G(),r)}function zx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Px)}function gn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),de(n,...e)}function Cs(t,e,n,r){e&&Ft(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function ul(t,e,n){return Xs(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function di(t,e=t.transactionQueueTree_){if(e||Wr(t,e),kt(e)){const n=hl(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&$x(t,vn(e),n)}else sl(e)&&Lr(e,n=>{di(t,n)})}function $x(t,e,n){const r=n.map(l=>l.currentWriteId),s=ul(t,e,r);let i=s;const o=s.hash();for(let l=0;l<n.length;l++){const u=n[l];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,l=>{gn(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(qe(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wr(t,ii(t.transactionQueueTree_,e)),di(t,t.transactionQueueTree_),we(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ft(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{pe("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}At(t,e)}},o)}function At(t,e){const n=dl(t,e),r=vn(n),s=hl(t,n);return Gx(t,s,r),r}function Gx(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=xe(n,c.path);let u=!1,h;if(R(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(qe(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ox)u=!0,h="maxretry",s=s.concat(qe(t.serverSyncTree_,c.currentWriteId,!0));else{const d=ul(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){jr("transaction failed: Data returned ",f,c.path);let x=oe(f);typeof f=="object"&&f!=null&&Ie(f,".priority")||(x=x.updatePriority(d.getPriority()));const p=c.currentWriteId,C=Hr(t),v=nl(x,d,C);c.currentOutputSnapshotRaw=x,c.currentOutputSnapshotResolved=v,c.currentWriteId=ui(t),o.splice(o.indexOf(p),1),s=s.concat(Ya(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(qe(t.serverSyncTree_,p,!0))}else u=!0,h="nodata",s=s.concat(qe(t.serverSyncTree_,c.currentWriteId,!0))}we(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Wr(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ft(r[a]);di(t,t.transactionQueueTree_)}function dl(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&kt(r)===void 0;)r=ii(r,n),e=ee(e),n=z(e);return r}function hl(t,e){const n=[];return fl(t,e,n),n.sort((r,s)=>r.order-s.order),n}function fl(t,e,n){const r=kt(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Lr(e,s=>{fl(t,s,n)})}function Wr(t,e){const n=kt(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,rl(e,n.length>0?n:void 0)}Lr(e,r=>{Wr(t,r)})}function hi(t,e){const n=vn(dl(t,e)),r=ii(t.transactionQueueTree_,e);return Ex(r,s=>{rs(t,s)}),rs(t,r),il(r,s=>{rs(t,s)}),n}function rs(t,e){const n=kt(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(qe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?rl(e,void 0):n.length=i+1,we(t.eventQueue_,vn(e),s);for(let o=0;o<r.length;o++)Ft(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Kx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fo=function(t,e){const n=Yx(t),r=n.namespace;n.domain==="firebase.com"&&Pe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rh();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _a(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Y(n.pathString)}},Yx=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Vx(t.substring(u,h)));const d=Kx(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),n=e.substring(x+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Qx=(function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=Bo.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Bo.charAt(e[s]);return R(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class Zx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return U(this._path)?null:js(this._path)}get ref(){return new Me(this._repo,this._path)}get _queryIdentifier(){const e=fo(this._queryParams),n=Ps(e);return n==="{}"?"default":n}get _queryObject(){return fo(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof fi))return!1;const n=this._repo===e._repo,r=Da(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hh(this._path)}}class Me extends fi{constructor(e,n){super(e,n,new Us,!1)}get parent(){const e=Aa(this._path);return e===null?null:new Me(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class an{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=ln(this.ref,e);return new an(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new an(s,ln(this.ref,r),se)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ot(t,e){return t=Oe(t),t._checkNotDeleted("ref"),e!==void 0?ln(t._root,e):t._root}function ln(t,e){return t=Oe(t),z(t._path)===null?Sx("child","path",e):ll("child","path",e),new Me(t._repo,re(t._path,e))}function ep(t,e){t=Oe(t),ai("push",t._path),al("push",e,t._path,!0);const n=cl(t._repo),r=Qx(n),s=ln(t,r),i=ln(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function tp(t){return ai("remove",t._path),qr(t,null)}function qr(t,e){t=Oe(t),ai("set",t._path),al("set",e,t._path,!1);const n=new Fr;return Wx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function np(t,e){kx("update",e,t._path);const n=new Fr;return qx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function xl(t){t=Oe(t);const e=new Jx(()=>{}),n=new xi(e);return Hx(t._repo,t,n).then(r=>new an(r,new Me(t._repo,t._path),t._queryParams.getIndex()))}class xi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Xx("value",this,new an(e.snapshotNode,new Me(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Zx(this,e,n):null}matches(e){return e instanceof xi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Jf(Me);sx(Me);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="FIREBASE_DATABASE_EMULATOR_HOST",Es={};let sp=!1;function ip(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=b0(i);t.repoInfo_=new _a(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function op(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),de("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fo(i,s),a=o.repoInfo,c;typeof process<"u"&&Ki&&(c=Ki[rp]),c?(i=`http://${c}?ns=${a.namespace}`,o=Fo(i,s),a=o.repoInfo):o.repoInfo.secure;const l=new xh(t.name,t.options,e);Ix("Invalid Firebase Database URL",o),U(o.path)||Pe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=lp(a,t,l,new fh(t,n));return new cp(u,t)}function ap(t,e){const n=Es[e];(!n||n[t.key]!==t)&&Pe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zx(t),delete n[t.key]}function lp(t,e,n,r){let s=Es[e.name];s||(s={},Es[e.name]=s);let i=s[t.toURLString()];return i&&Pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Mx(t,sp,n,r),s[t.toURLString()]=i,i}class cp{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Me(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ap(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pe("Cannot call "+e+" on a deleted database.")}}function up(t=y0(),e){const n=un(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ac("database");r&&dp(n,...r)}return n}function dp(t,e,n,r={}){t=Oe(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&C0(r,i.repoInfo_.emulatorOptions))return;Pe("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Fn(Fn.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:lc(r.mockUserToken,t.app.options.projectId);o=new Fn(a)}b0(e)&&(cc(e),uc("Database",!0)),ip(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){Xd(dc),Xt(new Zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return op(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),mt(Yi,Qi,t),mt(Yi,Qi,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={".sv":"timestamp"};function bs(){return fp}Ne.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ne.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hp();const pt={apiKey:"AIzaSyCNogDveE9Ypf9wQjtn9aVBpfZ8Jn8WPIc",authDomain:"pocket-locker-1c27e.firebaseapp.com",projectId:"pocket-locker-1c27e",storageBucket:"pocket-locker-1c27e.firebasestorage.app",messagingSenderId:"677259055225",appId:"1:677259055225:web:a3c60516ae6796ba9304a8",measurementId:"G-6PXRT40NHE",databaseURL:"https://pocket-locker-1c27e-default-rtdb.firebaseio.com/"},ws=!!(pt.apiKey&&pt.authDomain&&pt.projectId&&pt.appId&&pt.databaseURL),Dt=ws?hc(pt):null,As=Dt?fc(Dt):null,ko=Dt?up(Dt):null;Dt&&typeof window<"u"&&Vd(Dt);const at=()=>{if(!As)throw new Error("Firebase is not configured. Add your Vite Firebase env values.");return As},xp=(t,e)=>_c(at(),t,e),pp=(t,e)=>pc(at(),t,e),_p=t=>vc(at(),t),pi=()=>xc(at()),vp=t=>mc(at().currentUser,t),gp=t=>gc(at().currentUser,t),mp=()=>yc(at().currentUser);var Bn={exports:{}};function yp(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var kn={exports:{}};const Cp={},Ep=Object.freeze(Object.defineProperty({__proto__:null,default:Cp},Symbol.toStringTag,{value:"Module"})),bp=Ll(Ep);var wp=kn.exports,So;function $(){return So||(So=1,(function(t,e){(function(n,r){t.exports=r()})(wp,function(){var n=n||(function(r,s){var i;if(typeof window<"u"&&window.crypto&&(i=window.crypto),typeof self<"u"&&self.crypto&&(i=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(i=globalThis.crypto),!i&&typeof window<"u"&&window.msCrypto&&(i=window.msCrypto),!i&&typeof Gr<"u"&&Gr.crypto&&(i=Gr.crypto),!i&&typeof yp=="function")try{i=bp}catch{}var o=function(){if(i){if(typeof i.getRandomValues=="function")try{return i.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof i.randomBytes=="function")try{return i.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||(function(){function v(){}return function(_){var y;return v.prototype=_,y=new v,v.prototype=null,y}})(),c={},l=c.lib={},u=l.Base=(function(){return{extend:function(v){var _=a(this);return v&&_.mixIn(v),(!_.hasOwnProperty("init")||this.init===_.init)&&(_.init=function(){_.$super.init.apply(this,arguments)}),_.init.prototype=_,_.$super=this,_},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var _ in v)v.hasOwnProperty(_)&&(this[_]=v[_]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}})(),h=l.WordArray=u.extend({init:function(v,_){v=this.words=v||[],_!=s?this.sigBytes=_:this.sigBytes=v.length*4},toString:function(v){return(v||f).stringify(this)},concat:function(v){var _=this.words,y=v.words,w=this.sigBytes,b=v.sigBytes;if(this.clamp(),w%4)for(var A=0;A<b;A++){var F=y[A>>>2]>>>24-A%4*8&255;_[w+A>>>2]|=F<<24-(w+A)%4*8}else for(var P=0;P<b;P+=4)_[w+P>>>2]=y[P>>>2];return this.sigBytes+=b,this},clamp:function(){var v=this.words,_=this.sigBytes;v[_>>>2]&=4294967295<<32-_%4*8,v.length=r.ceil(_/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var _=[],y=0;y<v;y+=4)_.push(o());return new h.init(_,v)}}),d=c.enc={},f=d.Hex={stringify:function(v){for(var _=v.words,y=v.sigBytes,w=[],b=0;b<y;b++){var A=_[b>>>2]>>>24-b%4*8&255;w.push((A>>>4).toString(16)),w.push((A&15).toString(16))}return w.join("")},parse:function(v){for(var _=v.length,y=[],w=0;w<_;w+=2)y[w>>>3]|=parseInt(v.substr(w,2),16)<<24-w%8*4;return new h.init(y,_/2)}},x=d.Latin1={stringify:function(v){for(var _=v.words,y=v.sigBytes,w=[],b=0;b<y;b++){var A=_[b>>>2]>>>24-b%4*8&255;w.push(String.fromCharCode(A))}return w.join("")},parse:function(v){for(var _=v.length,y=[],w=0;w<_;w++)y[w>>>2]|=(v.charCodeAt(w)&255)<<24-w%4*8;return new h.init(y,_)}},m=d.Utf8={stringify:function(v){try{return decodeURIComponent(escape(x.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return x.parse(unescape(encodeURIComponent(v)))}},p=l.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=m.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var _,y=this._data,w=y.words,b=y.sigBytes,A=this.blockSize,F=A*4,P=b/F;v?P=r.ceil(P):P=r.max((P|0)-this._minBufferSize,0);var E=P*A,D=r.min(E*4,b);if(E){for(var k=0;k<E;k+=A)this._doProcessBlock(w,k);_=w.splice(0,E),y.sigBytes-=D}return new h.init(_,D)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});l.Hasher=p.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var _=this._doFinalize();return _},blockSize:16,_createHelper:function(v){return function(_,y){return new v.init(y).finalize(_)}},_createHmacHelper:function(v){return function(_,y){return new C.HMAC.init(v,y).finalize(_)}}});var C=c.algo={};return c})(Math);return n})})(kn)),kn.exports}var Sn={exports:{}},Ap=Sn.exports,Io;function Ur(){return Io||(Io=1,(function(t,e){(function(n,r){t.exports=r($())})(Ap,function(n){return(function(r){var s=n,i=s.lib,o=i.Base,a=i.WordArray,c=s.x64={};c.Word=o.extend({init:function(l,u){this.high=l,this.low=u}}),c.WordArray=o.extend({init:function(l,u){l=this.words=l||[],u!=r?this.sigBytes=u:this.sigBytes=l.length*8},toX32:function(){for(var l=this.words,u=l.length,h=[],d=0;d<u;d++){var f=l[d];h.push(f.high),h.push(f.low)}return a.create(h,this.sigBytes)},clone:function(){for(var l=o.clone.call(this),u=l.words=this.words.slice(0),h=u.length,d=0;d<h;d++)u[d]=u[d].clone();return l}})})(),n})})(Sn)),Sn.exports}var In={exports:{}},Dp=In.exports,To;function Fp(){return To||(To=1,(function(t,e){(function(n,r){t.exports=r($())})(Dp,function(n){return(function(){if(typeof ArrayBuffer=="function"){var r=n,s=r.lib,i=s.WordArray,o=i.init,a=i.init=function(c){if(c instanceof ArrayBuffer&&(c=new Uint8Array(c)),(c instanceof Int8Array||typeof Uint8ClampedArray<"u"&&c instanceof Uint8ClampedArray||c instanceof Int16Array||c instanceof Uint16Array||c instanceof Int32Array||c instanceof Uint32Array||c instanceof Float32Array||c instanceof Float64Array)&&(c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)),c instanceof Uint8Array){for(var l=c.byteLength,u=[],h=0;h<l;h++)u[h>>>2]|=c[h]<<24-h%4*8;o.call(this,u,l)}else o.apply(this,arguments)};a.prototype=i}})(),n.lib.WordArray})})(In)),In.exports}var Tn={exports:{}},Bp=Tn.exports,No;function kp(){return No||(No=1,(function(t,e){(function(n,r){t.exports=r($())})(Bp,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(c){for(var l=c.words,u=c.sigBytes,h=[],d=0;d<u;d+=2){var f=l[d>>>2]>>>16-d%4*8&65535;h.push(String.fromCharCode(f))}return h.join("")},parse:function(c){for(var l=c.length,u=[],h=0;h<l;h++)u[h>>>1]|=c.charCodeAt(h)<<16-h%2*16;return i.create(u,l*2)}},o.Utf16LE={stringify:function(c){for(var l=c.words,u=c.sigBytes,h=[],d=0;d<u;d+=2){var f=a(l[d>>>2]>>>16-d%4*8&65535);h.push(String.fromCharCode(f))}return h.join("")},parse:function(c){for(var l=c.length,u=[],h=0;h<l;h++)u[h>>>1]|=a(c.charCodeAt(h)<<16-h%2*16);return i.create(u,l*2)}};function a(c){return c<<8&4278255360|c>>>8&16711935}})(),n.enc.Utf16})})(Tn)),Tn.exports}var Nn={exports:{}},Sp=Nn.exports,Ro;function lt(){return Ro||(Ro=1,(function(t,e){(function(n,r){t.exports=r($())})(Sp,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=r.enc;o.Base64={stringify:function(c){var l=c.words,u=c.sigBytes,h=this._map;c.clamp();for(var d=[],f=0;f<u;f+=3)for(var x=l[f>>>2]>>>24-f%4*8&255,m=l[f+1>>>2]>>>24-(f+1)%4*8&255,p=l[f+2>>>2]>>>24-(f+2)%4*8&255,C=x<<16|m<<8|p,v=0;v<4&&f+v*.75<u;v++)d.push(h.charAt(C>>>6*(3-v)&63));var _=h.charAt(64);if(_)for(;d.length%4;)d.push(_);return d.join("")},parse:function(c){var l=c.length,u=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var d=0;d<u.length;d++)h[u.charCodeAt(d)]=d}var f=u.charAt(64);if(f){var x=c.indexOf(f);x!==-1&&(l=x)}return a(c,l,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(c,l,u){for(var h=[],d=0,f=0;f<l;f++)if(f%4){var x=u[c.charCodeAt(f-1)]<<f%4*2,m=u[c.charCodeAt(f)]>>>6-f%4*2,p=x|m;h[d>>>2]|=p<<24-d%4*8,d++}return i.create(h,d)}})(),n.enc.Base64})})(Nn)),Nn.exports}var Rn={exports:{}},Ip=Rn.exports,Po;function Tp(){return Po||(Po=1,(function(t,e){(function(n,r){t.exports=r($())})(Ip,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=r.enc;o.Base64url={stringify:function(c,l){l===void 0&&(l=!0);var u=c.words,h=c.sigBytes,d=l?this._safe_map:this._map;c.clamp();for(var f=[],x=0;x<h;x+=3)for(var m=u[x>>>2]>>>24-x%4*8&255,p=u[x+1>>>2]>>>24-(x+1)%4*8&255,C=u[x+2>>>2]>>>24-(x+2)%4*8&255,v=m<<16|p<<8|C,_=0;_<4&&x+_*.75<h;_++)f.push(d.charAt(v>>>6*(3-_)&63));var y=d.charAt(64);if(y)for(;f.length%4;)f.push(y);return f.join("")},parse:function(c,l){l===void 0&&(l=!0);var u=c.length,h=l?this._safe_map:this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var f=0;f<h.length;f++)d[h.charCodeAt(f)]=f}var x=h.charAt(64);if(x){var m=c.indexOf(x);m!==-1&&(u=m)}return a(c,u,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(c,l,u){for(var h=[],d=0,f=0;f<l;f++)if(f%4){var x=u[c.charCodeAt(f-1)]<<f%4*2,m=u[c.charCodeAt(f)]>>>6-f%4*2,p=x|m;h[d>>>2]|=p<<24-d%4*8,d++}return i.create(h,d)}})(),n.enc.Base64url})})(Rn)),Rn.exports}var Pn={exports:{}},Np=Pn.exports,Oo;function ct(){return Oo||(Oo=1,(function(t,e){(function(n,r){t.exports=r($())})(Np,function(n){return(function(r){var s=n,i=s.lib,o=i.WordArray,a=i.Hasher,c=s.algo,l=[];(function(){for(var m=0;m<64;m++)l[m]=r.abs(r.sin(m+1))*4294967296|0})();var u=c.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(m,p){for(var C=0;C<16;C++){var v=p+C,_=m[v];m[v]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360}var y=this._hash.words,w=m[p+0],b=m[p+1],A=m[p+2],F=m[p+3],P=m[p+4],E=m[p+5],D=m[p+6],k=m[p+7],S=m[p+8],M=m[p+9],L=m[p+10],H=m[p+11],te=m[p+12],V=m[p+13],Q=m[p+14],K=m[p+15],B=y[0],T=y[1],N=y[2],I=y[3];B=h(B,T,N,I,w,7,l[0]),I=h(I,B,T,N,b,12,l[1]),N=h(N,I,B,T,A,17,l[2]),T=h(T,N,I,B,F,22,l[3]),B=h(B,T,N,I,P,7,l[4]),I=h(I,B,T,N,E,12,l[5]),N=h(N,I,B,T,D,17,l[6]),T=h(T,N,I,B,k,22,l[7]),B=h(B,T,N,I,S,7,l[8]),I=h(I,B,T,N,M,12,l[9]),N=h(N,I,B,T,L,17,l[10]),T=h(T,N,I,B,H,22,l[11]),B=h(B,T,N,I,te,7,l[12]),I=h(I,B,T,N,V,12,l[13]),N=h(N,I,B,T,Q,17,l[14]),T=h(T,N,I,B,K,22,l[15]),B=d(B,T,N,I,b,5,l[16]),I=d(I,B,T,N,D,9,l[17]),N=d(N,I,B,T,H,14,l[18]),T=d(T,N,I,B,w,20,l[19]),B=d(B,T,N,I,E,5,l[20]),I=d(I,B,T,N,L,9,l[21]),N=d(N,I,B,T,K,14,l[22]),T=d(T,N,I,B,P,20,l[23]),B=d(B,T,N,I,M,5,l[24]),I=d(I,B,T,N,Q,9,l[25]),N=d(N,I,B,T,F,14,l[26]),T=d(T,N,I,B,S,20,l[27]),B=d(B,T,N,I,V,5,l[28]),I=d(I,B,T,N,A,9,l[29]),N=d(N,I,B,T,k,14,l[30]),T=d(T,N,I,B,te,20,l[31]),B=f(B,T,N,I,E,4,l[32]),I=f(I,B,T,N,S,11,l[33]),N=f(N,I,B,T,H,16,l[34]),T=f(T,N,I,B,Q,23,l[35]),B=f(B,T,N,I,b,4,l[36]),I=f(I,B,T,N,P,11,l[37]),N=f(N,I,B,T,k,16,l[38]),T=f(T,N,I,B,L,23,l[39]),B=f(B,T,N,I,V,4,l[40]),I=f(I,B,T,N,w,11,l[41]),N=f(N,I,B,T,F,16,l[42]),T=f(T,N,I,B,D,23,l[43]),B=f(B,T,N,I,M,4,l[44]),I=f(I,B,T,N,te,11,l[45]),N=f(N,I,B,T,K,16,l[46]),T=f(T,N,I,B,A,23,l[47]),B=x(B,T,N,I,w,6,l[48]),I=x(I,B,T,N,k,10,l[49]),N=x(N,I,B,T,Q,15,l[50]),T=x(T,N,I,B,E,21,l[51]),B=x(B,T,N,I,te,6,l[52]),I=x(I,B,T,N,F,10,l[53]),N=x(N,I,B,T,L,15,l[54]),T=x(T,N,I,B,b,21,l[55]),B=x(B,T,N,I,S,6,l[56]),I=x(I,B,T,N,K,10,l[57]),N=x(N,I,B,T,D,15,l[58]),T=x(T,N,I,B,V,21,l[59]),B=x(B,T,N,I,P,6,l[60]),I=x(I,B,T,N,H,10,l[61]),N=x(N,I,B,T,A,15,l[62]),T=x(T,N,I,B,M,21,l[63]),y[0]=y[0]+B|0,y[1]=y[1]+T|0,y[2]=y[2]+N|0,y[3]=y[3]+I|0},_doFinalize:function(){var m=this._data,p=m.words,C=this._nDataBytes*8,v=m.sigBytes*8;p[v>>>5]|=128<<24-v%32;var _=r.floor(C/4294967296),y=C;p[(v+64>>>9<<4)+15]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,p[(v+64>>>9<<4)+14]=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,m.sigBytes=(p.length+1)*4,this._process();for(var w=this._hash,b=w.words,A=0;A<4;A++){var F=b[A];b[A]=(F<<8|F>>>24)&16711935|(F<<24|F>>>8)&4278255360}return w},clone:function(){var m=a.clone.call(this);return m._hash=this._hash.clone(),m}});function h(m,p,C,v,_,y,w){var b=m+(p&C|~p&v)+_+w;return(b<<y|b>>>32-y)+p}function d(m,p,C,v,_,y,w){var b=m+(p&v|C&~v)+_+w;return(b<<y|b>>>32-y)+p}function f(m,p,C,v,_,y,w){var b=m+(p^C^v)+_+w;return(b<<y|b>>>32-y)+p}function x(m,p,C,v,_,y,w){var b=m+(C^(p|~v))+_+w;return(b<<y|b>>>32-y)+p}s.MD5=a._createHelper(u),s.HmacMD5=a._createHmacHelper(u)})(Math),n.MD5})})(Pn)),Pn.exports}var On={exports:{}},Rp=On.exports,Mo;function pl(){return Mo||(Mo=1,(function(t,e){(function(n,r){t.exports=r($())})(Rp,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=s.Hasher,a=r.algo,c=[],l=a.SHA1=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,h){for(var d=this._hash.words,f=d[0],x=d[1],m=d[2],p=d[3],C=d[4],v=0;v<80;v++){if(v<16)c[v]=u[h+v]|0;else{var _=c[v-3]^c[v-8]^c[v-14]^c[v-16];c[v]=_<<1|_>>>31}var y=(f<<5|f>>>27)+C+c[v];v<20?y+=(x&m|~x&p)+1518500249:v<40?y+=(x^m^p)+1859775393:v<60?y+=(x&m|x&p|m&p)-1894007588:y+=(x^m^p)-899497514,C=p,p=m,m=x<<30|x>>>2,x=f,f=y}d[0]=d[0]+f|0,d[1]=d[1]+x|0,d[2]=d[2]+m|0,d[3]=d[3]+p|0,d[4]=d[4]+C|0},_doFinalize:function(){var u=this._data,h=u.words,d=this._nDataBytes*8,f=u.sigBytes*8;return h[f>>>5]|=128<<24-f%32,h[(f+64>>>9<<4)+14]=Math.floor(d/4294967296),h[(f+64>>>9<<4)+15]=d,u.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(l),r.HmacSHA1=o._createHmacHelper(l)})(),n.SHA1})})(On)),On.exports}var Mn={exports:{}},Pp=Mn.exports,Lo;function _i(){return Lo||(Lo=1,(function(t,e){(function(n,r){t.exports=r($())})(Pp,function(n){return(function(r){var s=n,i=s.lib,o=i.WordArray,a=i.Hasher,c=s.algo,l=[],u=[];(function(){function f(C){for(var v=r.sqrt(C),_=2;_<=v;_++)if(!(C%_))return!1;return!0}function x(C){return(C-(C|0))*4294967296|0}for(var m=2,p=0;p<64;)f(m)&&(p<8&&(l[p]=x(r.pow(m,1/2))),u[p]=x(r.pow(m,1/3)),p++),m++})();var h=[],d=c.SHA256=a.extend({_doReset:function(){this._hash=new o.init(l.slice(0))},_doProcessBlock:function(f,x){for(var m=this._hash.words,p=m[0],C=m[1],v=m[2],_=m[3],y=m[4],w=m[5],b=m[6],A=m[7],F=0;F<64;F++){if(F<16)h[F]=f[x+F]|0;else{var P=h[F-15],E=(P<<25|P>>>7)^(P<<14|P>>>18)^P>>>3,D=h[F-2],k=(D<<15|D>>>17)^(D<<13|D>>>19)^D>>>10;h[F]=E+h[F-7]+k+h[F-16]}var S=y&w^~y&b,M=p&C^p&v^C&v,L=(p<<30|p>>>2)^(p<<19|p>>>13)^(p<<10|p>>>22),H=(y<<26|y>>>6)^(y<<21|y>>>11)^(y<<7|y>>>25),te=A+H+S+u[F]+h[F],V=L+M;A=b,b=w,w=y,y=_+te|0,_=v,v=C,C=p,p=te+V|0}m[0]=m[0]+p|0,m[1]=m[1]+C|0,m[2]=m[2]+v|0,m[3]=m[3]+_|0,m[4]=m[4]+y|0,m[5]=m[5]+w|0,m[6]=m[6]+b|0,m[7]=m[7]+A|0},_doFinalize:function(){var f=this._data,x=f.words,m=this._nDataBytes*8,p=f.sigBytes*8;return x[p>>>5]|=128<<24-p%32,x[(p+64>>>9<<4)+14]=r.floor(m/4294967296),x[(p+64>>>9<<4)+15]=m,f.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var f=a.clone.call(this);return f._hash=this._hash.clone(),f}});s.SHA256=a._createHelper(d),s.HmacSHA256=a._createHmacHelper(d)})(Math),n.SHA256})})(Mn)),Mn.exports}var Ln={exports:{}},Op=Ln.exports,jo;function Mp(){return jo||(jo=1,(function(t,e){(function(n,r,s){t.exports=r($(),_i())})(Op,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=r.algo,a=o.SHA256,c=o.SHA224=a.extend({_doReset:function(){this._hash=new i.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var l=a._doFinalize.call(this);return l.sigBytes-=4,l}});r.SHA224=a._createHelper(c),r.HmacSHA224=a._createHmacHelper(c)})(),n.SHA224})})(Ln)),Ln.exports}var jn={exports:{}},Lp=jn.exports,Ho;function _l(){return Ho||(Ho=1,(function(t,e){(function(n,r,s){t.exports=r($(),Ur())})(Lp,function(n){return(function(){var r=n,s=r.lib,i=s.Hasher,o=r.x64,a=o.Word,c=o.WordArray,l=r.algo;function u(){return a.create.apply(a,arguments)}var h=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],d=[];(function(){for(var x=0;x<80;x++)d[x]=u()})();var f=l.SHA512=i.extend({_doReset:function(){this._hash=new c.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(x,m){for(var p=this._hash.words,C=p[0],v=p[1],_=p[2],y=p[3],w=p[4],b=p[5],A=p[6],F=p[7],P=C.high,E=C.low,D=v.high,k=v.low,S=_.high,M=_.low,L=y.high,H=y.low,te=w.high,V=w.low,Q=b.high,K=b.low,B=A.high,T=A.low,N=F.high,I=F.low,ne=P,X=E,_e=D,W=k,It=S,dt=M,zr=L,Tt=H,Ae=te,me=V,mn=Q,Nt=K,yn=B,Rt=T,$r=N,Pt=I,De=0;De<80;De++){var Ee,Le,Cn=d[De];if(De<16)Le=Cn.high=x[m+De*2]|0,Ee=Cn.low=x[m+De*2+1]|0;else{var yi=d[De-15],ht=yi.high,Ot=yi.low,bl=(ht>>>1|Ot<<31)^(ht>>>8|Ot<<24)^ht>>>7,Ci=(Ot>>>1|ht<<31)^(Ot>>>8|ht<<24)^(Ot>>>7|ht<<25),Ei=d[De-2],ft=Ei.high,Mt=Ei.low,wl=(ft>>>19|Mt<<13)^(ft<<3|Mt>>>29)^ft>>>6,bi=(Mt>>>19|ft<<13)^(Mt<<3|ft>>>29)^(Mt>>>6|ft<<26),wi=d[De-7],Al=wi.high,Dl=wi.low,Ai=d[De-16],Fl=Ai.high,Di=Ai.low;Ee=Ci+Dl,Le=bl+Al+(Ee>>>0<Ci>>>0?1:0),Ee=Ee+bi,Le=Le+wl+(Ee>>>0<bi>>>0?1:0),Ee=Ee+Di,Le=Le+Fl+(Ee>>>0<Di>>>0?1:0),Cn.high=Le,Cn.low=Ee}var Bl=Ae&mn^~Ae&yn,Fi=me&Nt^~me&Rt,kl=ne&_e^ne&It^_e&It,Sl=X&W^X&dt^W&dt,Il=(ne>>>28|X<<4)^(ne<<30|X>>>2)^(ne<<25|X>>>7),Bi=(X>>>28|ne<<4)^(X<<30|ne>>>2)^(X<<25|ne>>>7),Tl=(Ae>>>14|me<<18)^(Ae>>>18|me<<14)^(Ae<<23|me>>>9),Nl=(me>>>14|Ae<<18)^(me>>>18|Ae<<14)^(me<<23|Ae>>>9),ki=h[De],Rl=ki.high,Si=ki.low,ye=Pt+Nl,je=$r+Tl+(ye>>>0<Pt>>>0?1:0),ye=ye+Fi,je=je+Bl+(ye>>>0<Fi>>>0?1:0),ye=ye+Si,je=je+Rl+(ye>>>0<Si>>>0?1:0),ye=ye+Ee,je=je+Le+(ye>>>0<Ee>>>0?1:0),Ii=Bi+Sl,Pl=Il+kl+(Ii>>>0<Bi>>>0?1:0);$r=yn,Pt=Rt,yn=mn,Rt=Nt,mn=Ae,Nt=me,me=Tt+ye|0,Ae=zr+je+(me>>>0<Tt>>>0?1:0)|0,zr=It,Tt=dt,It=_e,dt=W,_e=ne,W=X,X=ye+Ii|0,ne=je+Pl+(X>>>0<ye>>>0?1:0)|0}E=C.low=E+X,C.high=P+ne+(E>>>0<X>>>0?1:0),k=v.low=k+W,v.high=D+_e+(k>>>0<W>>>0?1:0),M=_.low=M+dt,_.high=S+It+(M>>>0<dt>>>0?1:0),H=y.low=H+Tt,y.high=L+zr+(H>>>0<Tt>>>0?1:0),V=w.low=V+me,w.high=te+Ae+(V>>>0<me>>>0?1:0),K=b.low=K+Nt,b.high=Q+mn+(K>>>0<Nt>>>0?1:0),T=A.low=T+Rt,A.high=B+yn+(T>>>0<Rt>>>0?1:0),I=F.low=I+Pt,F.high=N+$r+(I>>>0<Pt>>>0?1:0)},_doFinalize:function(){var x=this._data,m=x.words,p=this._nDataBytes*8,C=x.sigBytes*8;m[C>>>5]|=128<<24-C%32,m[(C+128>>>10<<5)+30]=Math.floor(p/4294967296),m[(C+128>>>10<<5)+31]=p,x.sigBytes=m.length*4,this._process();var v=this._hash.toX32();return v},clone:function(){var x=i.clone.call(this);return x._hash=this._hash.clone(),x},blockSize:1024/32});r.SHA512=i._createHelper(f),r.HmacSHA512=i._createHmacHelper(f)})(),n.SHA512})})(jn)),jn.exports}var Hn={exports:{}},jp=Hn.exports,Wo;function Hp(){return Wo||(Wo=1,(function(t,e){(function(n,r,s){t.exports=r($(),Ur(),_l())})(jp,function(n){return(function(){var r=n,s=r.x64,i=s.Word,o=s.WordArray,a=r.algo,c=a.SHA512,l=a.SHA384=c.extend({_doReset:function(){this._hash=new o.init([new i.init(3418070365,3238371032),new i.init(1654270250,914150663),new i.init(2438529370,812702999),new i.init(355462360,4144912697),new i.init(1731405415,4290775857),new i.init(2394180231,1750603025),new i.init(3675008525,1694076839),new i.init(1203062813,3204075428)])},_doFinalize:function(){var u=c._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=c._createHelper(l),r.HmacSHA384=c._createHmacHelper(l)})(),n.SHA384})})(Hn)),Hn.exports}var Wn={exports:{}},Wp=Wn.exports,qo;function qp(){return qo||(qo=1,(function(t,e){(function(n,r,s){t.exports=r($(),Ur())})(Wp,function(n){return(function(r){var s=n,i=s.lib,o=i.WordArray,a=i.Hasher,c=s.x64,l=c.Word,u=s.algo,h=[],d=[],f=[];(function(){for(var p=1,C=0,v=0;v<24;v++){h[p+5*C]=(v+1)*(v+2)/2%64;var _=C%5,y=(2*p+3*C)%5;p=_,C=y}for(var p=0;p<5;p++)for(var C=0;C<5;C++)d[p+5*C]=C+(2*p+3*C)%5*5;for(var w=1,b=0;b<24;b++){for(var A=0,F=0,P=0;P<7;P++){if(w&1){var E=(1<<P)-1;E<32?F^=1<<E:A^=1<<E-32}w&128?w=w<<1^113:w<<=1}f[b]=l.create(A,F)}})();var x=[];(function(){for(var p=0;p<25;p++)x[p]=l.create()})();var m=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var p=this._state=[],C=0;C<25;C++)p[C]=new l.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(p,C){for(var v=this._state,_=this.blockSize/2,y=0;y<_;y++){var w=p[C+2*y],b=p[C+2*y+1];w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;var A=v[y];A.high^=b,A.low^=w}for(var F=0;F<24;F++){for(var P=0;P<5;P++){for(var E=0,D=0,k=0;k<5;k++){var A=v[P+5*k];E^=A.high,D^=A.low}var S=x[P];S.high=E,S.low=D}for(var P=0;P<5;P++)for(var M=x[(P+4)%5],L=x[(P+1)%5],H=L.high,te=L.low,E=M.high^(H<<1|te>>>31),D=M.low^(te<<1|H>>>31),k=0;k<5;k++){var A=v[P+5*k];A.high^=E,A.low^=D}for(var V=1;V<25;V++){var E,D,A=v[V],Q=A.high,K=A.low,B=h[V];B<32?(E=Q<<B|K>>>32-B,D=K<<B|Q>>>32-B):(E=K<<B-32|Q>>>64-B,D=Q<<B-32|K>>>64-B);var T=x[d[V]];T.high=E,T.low=D}var N=x[0],I=v[0];N.high=I.high,N.low=I.low;for(var P=0;P<5;P++)for(var k=0;k<5;k++){var V=P+5*k,A=v[V],ne=x[V],X=x[(P+1)%5+5*k],_e=x[(P+2)%5+5*k];A.high=ne.high^~X.high&_e.high,A.low=ne.low^~X.low&_e.low}var A=v[0],W=f[F];A.high^=W.high,A.low^=W.low}},_doFinalize:function(){var p=this._data,C=p.words;this._nDataBytes*8;var v=p.sigBytes*8,_=this.blockSize*32;C[v>>>5]|=1<<24-v%32,C[(r.ceil((v+1)/_)*_>>>5)-1]|=128,p.sigBytes=C.length*4,this._process();for(var y=this._state,w=this.cfg.outputLength/8,b=w/8,A=[],F=0;F<b;F++){var P=y[F],E=P.high,D=P.low;E=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360,A.push(D),A.push(E)}return new o.init(A,w)},clone:function(){for(var p=a.clone.call(this),C=p._state=this._state.slice(0),v=0;v<25;v++)C[v]=C[v].clone();return p}});s.SHA3=a._createHelper(m),s.HmacSHA3=a._createHmacHelper(m)})(Math),n.SHA3})})(Wn)),Wn.exports}var qn={exports:{}},Up=qn.exports,Uo;function zp(){return Uo||(Uo=1,(function(t,e){(function(n,r){t.exports=r($())})(Up,function(n){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return(function(r){var s=n,i=s.lib,o=i.WordArray,a=i.Hasher,c=s.algo,l=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),d=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),f=o.create([0,1518500249,1859775393,2400959708,2840853838]),x=o.create([1352829926,1548603684,1836072691,2053994217,0]),m=c.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(b,A){for(var F=0;F<16;F++){var P=A+F,E=b[P];b[P]=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360}var D=this._hash.words,k=f.words,S=x.words,M=l.words,L=u.words,H=h.words,te=d.words,V,Q,K,B,T,N,I,ne,X,_e;N=V=D[0],I=Q=D[1],ne=K=D[2],X=B=D[3],_e=T=D[4];for(var W,F=0;F<80;F+=1)W=V+b[A+M[F]]|0,F<16?W+=p(Q,K,B)+k[0]:F<32?W+=C(Q,K,B)+k[1]:F<48?W+=v(Q,K,B)+k[2]:F<64?W+=_(Q,K,B)+k[3]:W+=y(Q,K,B)+k[4],W=W|0,W=w(W,H[F]),W=W+T|0,V=T,T=B,B=w(K,10),K=Q,Q=W,W=N+b[A+L[F]]|0,F<16?W+=y(I,ne,X)+S[0]:F<32?W+=_(I,ne,X)+S[1]:F<48?W+=v(I,ne,X)+S[2]:F<64?W+=C(I,ne,X)+S[3]:W+=p(I,ne,X)+S[4],W=W|0,W=w(W,te[F]),W=W+_e|0,N=_e,_e=X,X=w(ne,10),ne=I,I=W;W=D[1]+K+X|0,D[1]=D[2]+B+_e|0,D[2]=D[3]+T+N|0,D[3]=D[4]+V+I|0,D[4]=D[0]+Q+ne|0,D[0]=W},_doFinalize:function(){var b=this._data,A=b.words,F=this._nDataBytes*8,P=b.sigBytes*8;A[P>>>5]|=128<<24-P%32,A[(P+64>>>9<<4)+14]=(F<<8|F>>>24)&16711935|(F<<24|F>>>8)&4278255360,b.sigBytes=(A.length+1)*4,this._process();for(var E=this._hash,D=E.words,k=0;k<5;k++){var S=D[k];D[k]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}return E},clone:function(){var b=a.clone.call(this);return b._hash=this._hash.clone(),b}});function p(b,A,F){return b^A^F}function C(b,A,F){return b&A|~b&F}function v(b,A,F){return(b|~A)^F}function _(b,A,F){return b&F|A&~F}function y(b,A,F){return b^(A|~F)}function w(b,A){return b<<A|b>>>32-A}s.RIPEMD160=a._createHelper(m),s.HmacRIPEMD160=a._createHmacHelper(m)})(),n.RIPEMD160})})(qn)),qn.exports}var Un={exports:{}},$p=Un.exports,zo;function vi(){return zo||(zo=1,(function(t,e){(function(n,r){t.exports=r($())})($p,function(n){(function(){var r=n,s=r.lib,i=s.Base,o=r.enc,a=o.Utf8,c=r.algo;c.HMAC=i.extend({init:function(l,u){l=this._hasher=new l.init,typeof u=="string"&&(u=a.parse(u));var h=l.blockSize,d=h*4;u.sigBytes>d&&(u=l.finalize(u)),u.clamp();for(var f=this._oKey=u.clone(),x=this._iKey=u.clone(),m=f.words,p=x.words,C=0;C<h;C++)m[C]^=1549556828,p[C]^=909522486;f.sigBytes=x.sigBytes=d,this.reset()},reset:function(){var l=this._hasher;l.reset(),l.update(this._iKey)},update:function(l){return this._hasher.update(l),this},finalize:function(l){var u=this._hasher,h=u.finalize(l);u.reset();var d=u.finalize(this._oKey.clone().concat(h));return d}})})()})})(Un)),Un.exports}var zn={exports:{}},Gp=zn.exports,$o;function Vp(){return $o||($o=1,(function(t,e){(function(n,r,s){t.exports=r($(),_i(),vi())})(Gp,function(n){return(function(){var r=n,s=r.lib,i=s.Base,o=s.WordArray,a=r.algo,c=a.SHA256,l=a.HMAC,u=a.PBKDF2=i.extend({cfg:i.extend({keySize:128/32,hasher:c,iterations:25e4}),init:function(h){this.cfg=this.cfg.extend(h)},compute:function(h,d){for(var f=this.cfg,x=l.create(f.hasher,h),m=o.create(),p=o.create([1]),C=m.words,v=p.words,_=f.keySize,y=f.iterations;C.length<_;){var w=x.update(d).finalize(p);x.reset();for(var b=w.words,A=b.length,F=w,P=1;P<y;P++){F=x.finalize(F),x.reset();for(var E=F.words,D=0;D<A;D++)b[D]^=E[D]}m.concat(w),v[0]++}return m.sigBytes=_*4,m}});r.PBKDF2=function(h,d,f){return u.create(f).compute(h,d)}})(),n.PBKDF2})})(zn)),zn.exports}var $n={exports:{}},Kp=$n.exports,Go;function Ye(){return Go||(Go=1,(function(t,e){(function(n,r,s){t.exports=r($(),pl(),vi())})(Kp,function(n){return(function(){var r=n,s=r.lib,i=s.Base,o=s.WordArray,a=r.algo,c=a.MD5,l=a.EvpKDF=i.extend({cfg:i.extend({keySize:128/32,hasher:c,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,h){for(var d,f=this.cfg,x=f.hasher.create(),m=o.create(),p=m.words,C=f.keySize,v=f.iterations;p.length<C;){d&&x.update(d),d=x.update(u).finalize(h),x.reset();for(var _=1;_<v;_++)d=x.finalize(d),x.reset();m.concat(d)}return m.sigBytes=C*4,m}});r.EvpKDF=function(u,h,d){return l.create(d).compute(u,h)}})(),n.EvpKDF})})($n)),$n.exports}var Gn={exports:{}},Yp=Gn.exports,Vo;function ue(){return Vo||(Vo=1,(function(t,e){(function(n,r,s){t.exports=r($(),Ye())})(Yp,function(n){n.lib.Cipher||(function(r){var s=n,i=s.lib,o=i.Base,a=i.WordArray,c=i.BufferedBlockAlgorithm,l=s.enc;l.Utf8;var u=l.Base64,h=s.algo,d=h.EvpKDF,f=i.Cipher=c.extend({cfg:o.extend(),createEncryptor:function(E,D){return this.create(this._ENC_XFORM_MODE,E,D)},createDecryptor:function(E,D){return this.create(this._DEC_XFORM_MODE,E,D)},init:function(E,D,k){this.cfg=this.cfg.extend(k),this._xformMode=E,this._key=D,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(E){return this._append(E),this._process()},finalize:function(E){E&&this._append(E);var D=this._doFinalize();return D},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:(function(){function E(D){return typeof D=="string"?P:b}return function(D){return{encrypt:function(k,S,M){return E(S).encrypt(D,k,S,M)},decrypt:function(k,S,M){return E(S).decrypt(D,k,S,M)}}}})()});i.StreamCipher=f.extend({_doFinalize:function(){var E=this._process(!0);return E},blockSize:1});var x=s.mode={},m=i.BlockCipherMode=o.extend({createEncryptor:function(E,D){return this.Encryptor.create(E,D)},createDecryptor:function(E,D){return this.Decryptor.create(E,D)},init:function(E,D){this._cipher=E,this._iv=D}}),p=x.CBC=(function(){var E=m.extend();E.Encryptor=E.extend({processBlock:function(k,S){var M=this._cipher,L=M.blockSize;D.call(this,k,S,L),M.encryptBlock(k,S),this._prevBlock=k.slice(S,S+L)}}),E.Decryptor=E.extend({processBlock:function(k,S){var M=this._cipher,L=M.blockSize,H=k.slice(S,S+L);M.decryptBlock(k,S),D.call(this,k,S,L),this._prevBlock=H}});function D(k,S,M){var L,H=this._iv;H?(L=H,this._iv=r):L=this._prevBlock;for(var te=0;te<M;te++)k[S+te]^=L[te]}return E})(),C=s.pad={},v=C.Pkcs7={pad:function(E,D){for(var k=D*4,S=k-E.sigBytes%k,M=S<<24|S<<16|S<<8|S,L=[],H=0;H<S;H+=4)L.push(M);var te=a.create(L,S);E.concat(te)},unpad:function(E){var D=E.words[E.sigBytes-1>>>2]&255;E.sigBytes-=D}};i.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:v}),reset:function(){var E;f.reset.call(this);var D=this.cfg,k=D.iv,S=D.mode;this._xformMode==this._ENC_XFORM_MODE?E=S.createEncryptor:(E=S.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==E?this._mode.init(this,k&&k.words):(this._mode=E.call(S,this,k&&k.words),this._mode.__creator=E)},_doProcessBlock:function(E,D){this._mode.processBlock(E,D)},_doFinalize:function(){var E,D=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(D.pad(this._data,this.blockSize),E=this._process(!0)):(E=this._process(!0),D.unpad(E)),E},blockSize:128/32});var _=i.CipherParams=o.extend({init:function(E){this.mixIn(E)},toString:function(E){return(E||this.formatter).stringify(this)}}),y=s.format={},w=y.OpenSSL={stringify:function(E){var D,k=E.ciphertext,S=E.salt;return S?D=a.create([1398893684,1701076831]).concat(S).concat(k):D=k,D.toString(u)},parse:function(E){var D,k=u.parse(E),S=k.words;return S[0]==1398893684&&S[1]==1701076831&&(D=a.create(S.slice(2,4)),S.splice(0,4),k.sigBytes-=16),_.create({ciphertext:k,salt:D})}},b=i.SerializableCipher=o.extend({cfg:o.extend({format:w}),encrypt:function(E,D,k,S){S=this.cfg.extend(S);var M=E.createEncryptor(k,S),L=M.finalize(D),H=M.cfg;return _.create({ciphertext:L,key:k,iv:H.iv,algorithm:E,mode:H.mode,padding:H.padding,blockSize:E.blockSize,formatter:S.format})},decrypt:function(E,D,k,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var M=E.createDecryptor(k,S).finalize(D.ciphertext);return M},_parse:function(E,D){return typeof E=="string"?D.parse(E,this):E}}),A=s.kdf={},F=A.OpenSSL={execute:function(E,D,k,S,M){if(S||(S=a.random(64/8)),M)var L=d.create({keySize:D+k,hasher:M}).compute(E,S);else var L=d.create({keySize:D+k}).compute(E,S);var H=a.create(L.words.slice(D),k*4);return L.sigBytes=D*4,_.create({key:L,iv:H,salt:S})}},P=i.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:F}),encrypt:function(E,D,k,S){S=this.cfg.extend(S);var M=S.kdf.execute(k,E.keySize,E.ivSize,S.salt,S.hasher);S.iv=M.iv;var L=b.encrypt.call(this,E,D,M.key,S);return L.mixIn(M),L},decrypt:function(E,D,k,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var M=S.kdf.execute(k,E.keySize,E.ivSize,D.salt,S.hasher);S.iv=M.iv;var L=b.decrypt.call(this,E,D,M.key,S);return L}})})()})})(Gn)),Gn.exports}var Vn={exports:{}},Qp=Vn.exports,Ko;function Xp(){return Ko||(Ko=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(Qp,function(n){return n.mode.CFB=(function(){var r=n.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(i,o){var a=this._cipher,c=a.blockSize;s.call(this,i,o,c,a),this._prevBlock=i.slice(o,o+c)}}),r.Decryptor=r.extend({processBlock:function(i,o){var a=this._cipher,c=a.blockSize,l=i.slice(o,o+c);s.call(this,i,o,c,a),this._prevBlock=l}});function s(i,o,a,c){var l,u=this._iv;u?(l=u.slice(0),this._iv=void 0):l=this._prevBlock,c.encryptBlock(l,0);for(var h=0;h<a;h++)i[o+h]^=l[h]}return r})(),n.mode.CFB})})(Vn)),Vn.exports}var Kn={exports:{}},Zp=Kn.exports,Yo;function Jp(){return Yo||(Yo=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(Zp,function(n){return n.mode.CTR=(function(){var r=n.lib.BlockCipherMode.extend(),s=r.Encryptor=r.extend({processBlock:function(i,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._counter;l&&(u=this._counter=l.slice(0),this._iv=void 0);var h=u.slice(0);a.encryptBlock(h,0),u[c-1]=u[c-1]+1|0;for(var d=0;d<c;d++)i[o+d]^=h[d]}});return r.Decryptor=s,r})(),n.mode.CTR})})(Kn)),Kn.exports}var Yn={exports:{}},e1=Yn.exports,Qo;function t1(){return Qo||(Qo=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(e1,function(n){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return n.mode.CTRGladman=(function(){var r=n.lib.BlockCipherMode.extend();function s(a){if((a>>24&255)===255){var c=a>>16&255,l=a>>8&255,u=a&255;c===255?(c=0,l===255?(l=0,u===255?u=0:++u):++l):++c,a=0,a+=c<<16,a+=l<<8,a+=u}else a+=1<<24;return a}function i(a){return(a[0]=s(a[0]))===0&&(a[1]=s(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,c){var l=this._cipher,u=l.blockSize,h=this._iv,d=this._counter;h&&(d=this._counter=h.slice(0),this._iv=void 0),i(d);var f=d.slice(0);l.encryptBlock(f,0);for(var x=0;x<u;x++)a[c+x]^=f[x]}});return r.Decryptor=o,r})(),n.mode.CTRGladman})})(Yn)),Yn.exports}var Qn={exports:{}},n1=Qn.exports,Xo;function r1(){return Xo||(Xo=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(n1,function(n){return n.mode.OFB=(function(){var r=n.lib.BlockCipherMode.extend(),s=r.Encryptor=r.extend({processBlock:function(i,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._keystream;l&&(u=this._keystream=l.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var h=0;h<c;h++)i[o+h]^=u[h]}});return r.Decryptor=s,r})(),n.mode.OFB})})(Qn)),Qn.exports}var Xn={exports:{}},s1=Xn.exports,Zo;function i1(){return Zo||(Zo=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(s1,function(n){return n.mode.ECB=(function(){var r=n.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(s,i){this._cipher.encryptBlock(s,i)}}),r.Decryptor=r.extend({processBlock:function(s,i){this._cipher.decryptBlock(s,i)}}),r})(),n.mode.ECB})})(Xn)),Xn.exports}var Zn={exports:{}},o1=Zn.exports,Jo;function a1(){return Jo||(Jo=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(o1,function(n){return n.pad.AnsiX923={pad:function(r,s){var i=r.sigBytes,o=s*4,a=o-i%o,c=i+a-1;r.clamp(),r.words[c>>>2]|=a<<24-c%4*8,r.sigBytes+=a},unpad:function(r){var s=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=s}},n.pad.Ansix923})})(Zn)),Zn.exports}var Jn={exports:{}},l1=Jn.exports,e0;function c1(){return e0||(e0=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(l1,function(n){return n.pad.Iso10126={pad:function(r,s){var i=s*4,o=i-r.sigBytes%i;r.concat(n.lib.WordArray.random(o-1)).concat(n.lib.WordArray.create([o<<24],1))},unpad:function(r){var s=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=s}},n.pad.Iso10126})})(Jn)),Jn.exports}var er={exports:{}},u1=er.exports,t0;function d1(){return t0||(t0=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(u1,function(n){return n.pad.Iso97971={pad:function(r,s){r.concat(n.lib.WordArray.create([2147483648],1)),n.pad.ZeroPadding.pad(r,s)},unpad:function(r){n.pad.ZeroPadding.unpad(r),r.sigBytes--}},n.pad.Iso97971})})(er)),er.exports}var tr={exports:{}},h1=tr.exports,n0;function f1(){return n0||(n0=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(h1,function(n){return n.pad.ZeroPadding={pad:function(r,s){var i=s*4;r.clamp(),r.sigBytes+=i-(r.sigBytes%i||i)},unpad:function(r){for(var s=r.words,i=r.sigBytes-1,i=r.sigBytes-1;i>=0;i--)if(s[i>>>2]>>>24-i%4*8&255){r.sigBytes=i+1;break}}},n.pad.ZeroPadding})})(tr)),tr.exports}var nr={exports:{}},x1=nr.exports,r0;function p1(){return r0||(r0=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(x1,function(n){return n.pad.NoPadding={pad:function(){},unpad:function(){}},n.pad.NoPadding})})(nr)),nr.exports}var rr={exports:{}},_1=rr.exports,s0;function v1(){return s0||(s0=1,(function(t,e){(function(n,r,s){t.exports=r($(),ue())})(_1,function(n){return(function(r){var s=n,i=s.lib,o=i.CipherParams,a=s.enc,c=a.Hex,l=s.format;l.Hex={stringify:function(u){return u.ciphertext.toString(c)},parse:function(u){var h=c.parse(u);return o.create({ciphertext:h})}}})(),n.format.Hex})})(rr)),rr.exports}var sr={exports:{}},g1=sr.exports,i0;function m1(){return i0||(i0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(g1,function(n){return(function(){var r=n,s=r.lib,i=s.BlockCipher,o=r.algo,a=[],c=[],l=[],u=[],h=[],d=[],f=[],x=[],m=[],p=[];(function(){for(var _=[],y=0;y<256;y++)y<128?_[y]=y<<1:_[y]=y<<1^283;for(var w=0,b=0,y=0;y<256;y++){var A=b^b<<1^b<<2^b<<3^b<<4;A=A>>>8^A&255^99,a[w]=A,c[A]=w;var F=_[w],P=_[F],E=_[P],D=_[A]*257^A*16843008;l[w]=D<<24|D>>>8,u[w]=D<<16|D>>>16,h[w]=D<<8|D>>>24,d[w]=D;var D=E*16843009^P*65537^F*257^w*16843008;f[A]=D<<24|D>>>8,x[A]=D<<16|D>>>16,m[A]=D<<8|D>>>24,p[A]=D,w?(w=F^_[_[_[E^F]]],b^=_[_[b]]):w=b=1}})();var C=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=i.extend({_doReset:function(){var _;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var y=this._keyPriorReset=this._key,w=y.words,b=y.sigBytes/4,A=this._nRounds=b+6,F=(A+1)*4,P=this._keySchedule=[],E=0;E<F;E++)E<b?P[E]=w[E]:(_=P[E-1],E%b?b>6&&E%b==4&&(_=a[_>>>24]<<24|a[_>>>16&255]<<16|a[_>>>8&255]<<8|a[_&255]):(_=_<<8|_>>>24,_=a[_>>>24]<<24|a[_>>>16&255]<<16|a[_>>>8&255]<<8|a[_&255],_^=C[E/b|0]<<24),P[E]=P[E-b]^_);for(var D=this._invKeySchedule=[],k=0;k<F;k++){var E=F-k;if(k%4)var _=P[E];else var _=P[E-4];k<4||E<=4?D[k]=_:D[k]=f[a[_>>>24]]^x[a[_>>>16&255]]^m[a[_>>>8&255]]^p[a[_&255]]}}},encryptBlock:function(_,y){this._doCryptBlock(_,y,this._keySchedule,l,u,h,d,a)},decryptBlock:function(_,y){var w=_[y+1];_[y+1]=_[y+3],_[y+3]=w,this._doCryptBlock(_,y,this._invKeySchedule,f,x,m,p,c);var w=_[y+1];_[y+1]=_[y+3],_[y+3]=w},_doCryptBlock:function(_,y,w,b,A,F,P,E){for(var D=this._nRounds,k=_[y]^w[0],S=_[y+1]^w[1],M=_[y+2]^w[2],L=_[y+3]^w[3],H=4,te=1;te<D;te++){var V=b[k>>>24]^A[S>>>16&255]^F[M>>>8&255]^P[L&255]^w[H++],Q=b[S>>>24]^A[M>>>16&255]^F[L>>>8&255]^P[k&255]^w[H++],K=b[M>>>24]^A[L>>>16&255]^F[k>>>8&255]^P[S&255]^w[H++],B=b[L>>>24]^A[k>>>16&255]^F[S>>>8&255]^P[M&255]^w[H++];k=V,S=Q,M=K,L=B}var V=(E[k>>>24]<<24|E[S>>>16&255]<<16|E[M>>>8&255]<<8|E[L&255])^w[H++],Q=(E[S>>>24]<<24|E[M>>>16&255]<<16|E[L>>>8&255]<<8|E[k&255])^w[H++],K=(E[M>>>24]<<24|E[L>>>16&255]<<16|E[k>>>8&255]<<8|E[S&255])^w[H++],B=(E[L>>>24]<<24|E[k>>>16&255]<<16|E[S>>>8&255]<<8|E[M&255])^w[H++];_[y]=V,_[y+1]=Q,_[y+2]=K,_[y+3]=B},keySize:256/32});r.AES=i._createHelper(v)})(),n.AES})})(sr)),sr.exports}var ir={exports:{}},y1=ir.exports,o0;function C1(){return o0||(o0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(y1,function(n){return(function(){var r=n,s=r.lib,i=s.WordArray,o=s.BlockCipher,a=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],d=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=a.DES=o.extend({_doReset:function(){for(var C=this._key,v=C.words,_=[],y=0;y<56;y++){var w=c[y]-1;_[y]=v[w>>>5]>>>31-w%32&1}for(var b=this._subKeys=[],A=0;A<16;A++){for(var F=b[A]=[],P=u[A],y=0;y<24;y++)F[y/6|0]|=_[(l[y]-1+P)%28]<<31-y%6,F[4+(y/6|0)]|=_[28+(l[y+24]-1+P)%28]<<31-y%6;F[0]=F[0]<<1|F[0]>>>31;for(var y=1;y<7;y++)F[y]=F[y]>>>(y-1)*4+3;F[7]=F[7]<<5|F[7]>>>27}for(var E=this._invSubKeys=[],y=0;y<16;y++)E[y]=b[15-y]},encryptBlock:function(C,v){this._doCryptBlock(C,v,this._subKeys)},decryptBlock:function(C,v){this._doCryptBlock(C,v,this._invSubKeys)},_doCryptBlock:function(C,v,_){this._lBlock=C[v],this._rBlock=C[v+1],x.call(this,4,252645135),x.call(this,16,65535),m.call(this,2,858993459),m.call(this,8,16711935),x.call(this,1,1431655765);for(var y=0;y<16;y++){for(var w=_[y],b=this._lBlock,A=this._rBlock,F=0,P=0;P<8;P++)F|=h[P][((A^w[P])&d[P])>>>0];this._lBlock=A,this._rBlock=b^F}var E=this._lBlock;this._lBlock=this._rBlock,this._rBlock=E,x.call(this,1,1431655765),m.call(this,8,16711935),m.call(this,2,858993459),x.call(this,16,65535),x.call(this,4,252645135),C[v]=this._lBlock,C[v+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function x(C,v){var _=(this._lBlock>>>C^this._rBlock)&v;this._rBlock^=_,this._lBlock^=_<<C}function m(C,v){var _=(this._rBlock>>>C^this._lBlock)&v;this._lBlock^=_,this._rBlock^=_<<C}r.DES=o._createHelper(f);var p=a.TripleDES=o.extend({_doReset:function(){var C=this._key,v=C.words;if(v.length!==2&&v.length!==4&&v.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var _=v.slice(0,2),y=v.length<4?v.slice(0,2):v.slice(2,4),w=v.length<6?v.slice(0,2):v.slice(4,6);this._des1=f.createEncryptor(i.create(_)),this._des2=f.createEncryptor(i.create(y)),this._des3=f.createEncryptor(i.create(w))},encryptBlock:function(C,v){this._des1.encryptBlock(C,v),this._des2.decryptBlock(C,v),this._des3.encryptBlock(C,v)},decryptBlock:function(C,v){this._des3.decryptBlock(C,v),this._des2.encryptBlock(C,v),this._des1.decryptBlock(C,v)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(p)})(),n.TripleDES})})(ir)),ir.exports}var or={exports:{}},E1=or.exports,a0;function b1(){return a0||(a0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(E1,function(n){return(function(){var r=n,s=r.lib,i=s.StreamCipher,o=r.algo,a=o.RC4=i.extend({_doReset:function(){for(var u=this._key,h=u.words,d=u.sigBytes,f=this._S=[],x=0;x<256;x++)f[x]=x;for(var x=0,m=0;x<256;x++){var p=x%d,C=h[p>>>2]>>>24-p%4*8&255;m=(m+f[x]+C)%256;var v=f[x];f[x]=f[m],f[m]=v}this._i=this._j=0},_doProcessBlock:function(u,h){u[h]^=c.call(this)},keySize:256/32,ivSize:0});function c(){for(var u=this._S,h=this._i,d=this._j,f=0,x=0;x<4;x++){h=(h+1)%256,d=(d+u[h])%256;var m=u[h];u[h]=u[d],u[d]=m,f|=u[(u[h]+u[d])%256]<<24-x*8}return this._i=h,this._j=d,f}r.RC4=i._createHelper(a);var l=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)c.call(this)}});r.RC4Drop=i._createHelper(l)})(),n.RC4})})(or)),or.exports}var ar={exports:{}},w1=ar.exports,l0;function A1(){return l0||(l0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(w1,function(n){return(function(){var r=n,s=r.lib,i=s.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.Rabbit=i.extend({_doReset:function(){for(var d=this._key.words,f=this.cfg.iv,x=0;x<4;x++)d[x]=(d[x]<<8|d[x]>>>24)&16711935|(d[x]<<24|d[x]>>>8)&4278255360;var m=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],p=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var x=0;x<4;x++)h.call(this);for(var x=0;x<8;x++)p[x]^=m[x+4&7];if(f){var C=f.words,v=C[0],_=C[1],y=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,w=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=y>>>16|w&4294901760,A=w<<16|y&65535;p[0]^=y,p[1]^=b,p[2]^=w,p[3]^=A,p[4]^=y,p[5]^=b,p[6]^=w,p[7]^=A;for(var x=0;x<4;x++)h.call(this)}},_doProcessBlock:function(d,f){var x=this._X;h.call(this),a[0]=x[0]^x[5]>>>16^x[3]<<16,a[1]=x[2]^x[7]>>>16^x[5]<<16,a[2]=x[4]^x[1]>>>16^x[7]<<16,a[3]=x[6]^x[3]>>>16^x[1]<<16;for(var m=0;m<4;m++)a[m]=(a[m]<<8|a[m]>>>24)&16711935|(a[m]<<24|a[m]>>>8)&4278255360,d[f+m]^=a[m]},blockSize:128/32,ivSize:64/32});function h(){for(var d=this._X,f=this._C,x=0;x<8;x++)c[x]=f[x];f[0]=f[0]+1295307597+this._b|0,f[1]=f[1]+3545052371+(f[0]>>>0<c[0]>>>0?1:0)|0,f[2]=f[2]+886263092+(f[1]>>>0<c[1]>>>0?1:0)|0,f[3]=f[3]+1295307597+(f[2]>>>0<c[2]>>>0?1:0)|0,f[4]=f[4]+3545052371+(f[3]>>>0<c[3]>>>0?1:0)|0,f[5]=f[5]+886263092+(f[4]>>>0<c[4]>>>0?1:0)|0,f[6]=f[6]+1295307597+(f[5]>>>0<c[5]>>>0?1:0)|0,f[7]=f[7]+3545052371+(f[6]>>>0<c[6]>>>0?1:0)|0,this._b=f[7]>>>0<c[7]>>>0?1:0;for(var x=0;x<8;x++){var m=d[x]+f[x],p=m&65535,C=m>>>16,v=((p*p>>>17)+p*C>>>15)+C*C,_=((m&4294901760)*m|0)+((m&65535)*m|0);l[x]=v^_}d[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,d[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,d[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,d[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,d[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,d[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,d[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,d[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.Rabbit=i._createHelper(u)})(),n.Rabbit})})(ar)),ar.exports}var lr={exports:{}},D1=lr.exports,c0;function F1(){return c0||(c0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(D1,function(n){return(function(){var r=n,s=r.lib,i=s.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.RabbitLegacy=i.extend({_doReset:function(){var d=this._key.words,f=this.cfg.iv,x=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],m=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var p=0;p<4;p++)h.call(this);for(var p=0;p<8;p++)m[p]^=x[p+4&7];if(f){var C=f.words,v=C[0],_=C[1],y=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,w=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=y>>>16|w&4294901760,A=w<<16|y&65535;m[0]^=y,m[1]^=b,m[2]^=w,m[3]^=A,m[4]^=y,m[5]^=b,m[6]^=w,m[7]^=A;for(var p=0;p<4;p++)h.call(this)}},_doProcessBlock:function(d,f){var x=this._X;h.call(this),a[0]=x[0]^x[5]>>>16^x[3]<<16,a[1]=x[2]^x[7]>>>16^x[5]<<16,a[2]=x[4]^x[1]>>>16^x[7]<<16,a[3]=x[6]^x[3]>>>16^x[1]<<16;for(var m=0;m<4;m++)a[m]=(a[m]<<8|a[m]>>>24)&16711935|(a[m]<<24|a[m]>>>8)&4278255360,d[f+m]^=a[m]},blockSize:128/32,ivSize:64/32});function h(){for(var d=this._X,f=this._C,x=0;x<8;x++)c[x]=f[x];f[0]=f[0]+1295307597+this._b|0,f[1]=f[1]+3545052371+(f[0]>>>0<c[0]>>>0?1:0)|0,f[2]=f[2]+886263092+(f[1]>>>0<c[1]>>>0?1:0)|0,f[3]=f[3]+1295307597+(f[2]>>>0<c[2]>>>0?1:0)|0,f[4]=f[4]+3545052371+(f[3]>>>0<c[3]>>>0?1:0)|0,f[5]=f[5]+886263092+(f[4]>>>0<c[4]>>>0?1:0)|0,f[6]=f[6]+1295307597+(f[5]>>>0<c[5]>>>0?1:0)|0,f[7]=f[7]+3545052371+(f[6]>>>0<c[6]>>>0?1:0)|0,this._b=f[7]>>>0<c[7]>>>0?1:0;for(var x=0;x<8;x++){var m=d[x]+f[x],p=m&65535,C=m>>>16,v=((p*p>>>17)+p*C>>>15)+C*C,_=((m&4294901760)*m|0)+((m&65535)*m|0);l[x]=v^_}d[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,d[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,d[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,d[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,d[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,d[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,d[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,d[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.RabbitLegacy=i._createHelper(u)})(),n.RabbitLegacy})})(lr)),lr.exports}var cr={exports:{}},B1=cr.exports,u0;function k1(){return u0||(u0=1,(function(t,e){(function(n,r,s){t.exports=r($(),lt(),ct(),Ye(),ue())})(B1,function(n){return(function(){var r=n,s=r.lib,i=s.BlockCipher,o=r.algo;const a=16,c=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],l=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function h(p,C){let v=C>>24&255,_=C>>16&255,y=C>>8&255,w=C&255,b=p.sbox[0][v]+p.sbox[1][_];return b=b^p.sbox[2][y],b=b+p.sbox[3][w],b}function d(p,C,v){let _=C,y=v,w;for(let b=0;b<a;++b)_=_^p.pbox[b],y=h(p,_)^y,w=_,_=y,y=w;return w=_,_=y,y=w,y=y^p.pbox[a],_=_^p.pbox[a+1],{left:_,right:y}}function f(p,C,v){let _=C,y=v,w;for(let b=a+1;b>1;--b)_=_^p.pbox[b],y=h(p,_)^y,w=_,_=y,y=w;return w=_,_=y,y=w,y=y^p.pbox[1],_=_^p.pbox[0],{left:_,right:y}}function x(p,C,v){for(let A=0;A<4;A++){p.sbox[A]=[];for(let F=0;F<256;F++)p.sbox[A][F]=l[A][F]}let _=0;for(let A=0;A<a+2;A++)p.pbox[A]=c[A]^C[_],_++,_>=v&&(_=0);let y=0,w=0,b=0;for(let A=0;A<a+2;A+=2)b=d(p,y,w),y=b.left,w=b.right,p.pbox[A]=y,p.pbox[A+1]=w;for(let A=0;A<4;A++)for(let F=0;F<256;F+=2)b=d(p,y,w),y=b.left,w=b.right,p.sbox[A][F]=y,p.sbox[A][F+1]=w;return!0}var m=o.Blowfish=i.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var p=this._keyPriorReset=this._key,C=p.words,v=p.sigBytes/4;x(u,C,v)}},encryptBlock:function(p,C){var v=d(u,p[C],p[C+1]);p[C]=v.left,p[C+1]=v.right},decryptBlock:function(p,C){var v=f(u,p[C],p[C+1]);p[C]=v.left,p[C+1]=v.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=i._createHelper(m)})(),n.Blowfish})})(cr)),cr.exports}var S1=Bn.exports,d0;function I1(){return d0||(d0=1,(function(t,e){(function(n,r,s){t.exports=r($(),Ur(),Fp(),kp(),lt(),Tp(),ct(),pl(),_i(),Mp(),_l(),Hp(),qp(),zp(),vi(),Vp(),Ye(),ue(),Xp(),Jp(),t1(),r1(),i1(),a1(),c1(),d1(),f1(),p1(),v1(),m1(),C1(),b1(),A1(),F1(),k1())})(S1,function(n){return n})})(Bn)),Bn.exports}var T1=I1();const cn=_0(T1),N1="replace-with-a-long-random-salt";function gi(t){return cn.SHA256(`${t}:${N1}`).toString()}function R1(t,e){return t?cn.AES.encrypt(t,gi(e)).toString():""}function P1(t,e){if(!t)return"";try{return cn.AES.decrypt(t,gi(e)).toString(cn.enc.Utf8)}catch{return""}}function O1(t,e){return cn.AES.encrypt(JSON.stringify(t),gi(e)).toString()}const ut=()=>{if(!ko)throw new Error("Firebase is not configured. Add your Vite Firebase env values.");return ko};async function M1(t){await qr(ot(ut(),`users/${t.uid}/profile`),{displayName:t.displayName||"",avatarUrl:t.photoURL||"",bio:"",createdAt:bs()})}async function L1(t,e){await qr(ot(ut(),`users/${t}/profile`),e)}async function j1(t){const e=await xl(ot(ut(),`users/${t}/profile`));return e.exists()?e.val():null}async function H1(t){const n=(await xl(ot(ut(),`users/${t}/accounts`))).val()||{};return Object.entries(n).map(([r,s])=>({id:r,...s,password:P1(s.encryptedPassword,t)}))}async function W1(t,e){const n=vl(e,t,!0),r=ep(ot(ut(),`users/${t}/accounts`));return await qr(r,n),r.key}async function q1(t,e,n){await np(ot(ut(),`users/${t}/accounts/${e}`),vl(n,t))}async function U1(t,e){await tp(ot(ut(),`users/${t}/accounts/${e}`))}function vl(t,e,n=!1){var s;const r=((s=t.serviceName)==null?void 0:s.toLowerCase().replace(/[^a-z0-9]/g,""))||"";return{serviceName:t.serviceName||"",category:t.category||"Other",username:t.username||"",userId:t.userId||"",encryptedPassword:R1(t.password||"",e),mobileNumber:t.mobileNumber||"",notes:t.notes||"",serviceLogoUrl:t.serviceLogoUrl||(r?`https://logo.clearbit.com/${r}.com`:""),updatedAt:bs(),...n?{createdAt:bs()}:{}}}const gl=O.createContext(null),z1=780*1e3,$1=900*1e3;function G1({children:t}){const[e,n]=O.useState(null),[r,s]=O.useState(!0),[i,o]=O.useState(()=>localStorage.getItem("pocket-locker-theme")||"dark");O.useEffect(()=>{document.documentElement.dataset.theme=i,localStorage.setItem("pocket-locker-theme",i)},[i]),O.useEffect(()=>{if(!ws){s(!1);return}return Cc(As,async c=>{if(n(c),s(!1),c)try{await M1(c)}catch(l){J.error(l.message)}})},[]),O.useEffect(()=>{if(!e)return;let c,l;const u=()=>{clearTimeout(c),clearTimeout(l),c=window.setTimeout(()=>{J("Session expires in 2 minutes due to inactivity.",{icon:"!"})},z1),l=window.setTimeout(async()=>{await pi(),J.error("Signed out after 15 minutes of inactivity.")},$1)},h=["mousemove","keydown","click","touchstart","scroll"];return h.forEach(d=>window.addEventListener(d,u,{passive:!0})),u(),()=>{clearTimeout(c),clearTimeout(l),h.forEach(d=>window.removeEventListener(d,u))}},[e]);const a=O.useMemo(()=>({user:e,loading:r,theme:i,firebaseReady:ws,toggleTheme:()=>o(c=>c==="dark"?"light":"dark")}),[r,i,e]);return g.jsx(gl.Provider,{value:a,children:t})}function St(){const t=O.useContext(gl);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function V1(){const{firebaseReady:t}=St(),[e,n]=O.useState("login"),[r,s]=O.useState(""),[i,o]=O.useState(""),[a,c]=O.useState(""),[l,u]=O.useState(!1),[h,d]=O.useState(""),f=async m=>{if(m.preventDefault(),d(""),!t){d("Add Firebase values to .env before signing in.");return}if(e==="register"&&i!==a){d("Passwords do not match.");return}u(!0);try{e==="register"?(await pp(r,i),J.success("Account created.")):(await xp(r,i),J.success("Welcome back."))}catch(p){d(p.message)}finally{u(!1)}},x=async()=>{if(!r){d("Enter your email first.");return}try{await _p(r),J.success("Password reset email sent.")}catch(m){d(m.message)}};return g.jsx("main",{className:"app-shell min-h-screen px-4 py-8",children:g.jsx("section",{className:"mx-auto grid min-h-[calc(100vh-4rem)] max-w-md place-items-center",children:g.jsxs("div",{className:"ghost-card w-full",children:[g.jsx(N0,{}),g.jsxs("form",{className:"mt-8 space-y-4",onSubmit:f,children:[g.jsx(ss,{icon:g.jsx(bu,{className:"h-5 w-5"}),type:"email",placeholder:"Email",value:r,onChange:s}),g.jsx(ss,{icon:g.jsx(ji,{className:"h-5 w-5"}),type:"password",placeholder:"Password",value:i,onChange:o}),e==="register"&&g.jsx(ss,{icon:g.jsx(ji,{className:"h-5 w-5"}),type:"password",placeholder:"Confirm password",value:a,onChange:c}),h&&g.jsx("p",{className:"rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm font-semibold text-red-200",children:h}),g.jsx("button",{className:"ghost-button w-full",type:"submit",disabled:l,children:l?"Please wait...":e==="register"?"Create Account":"Sign In"})]}),g.jsxs("div",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold",children:[g.jsx("button",{className:"text-ecto hover:text-white",type:"button",onClick:()=>n(e==="login"?"register":"login"),children:e==="login"?"Create Account":"Back to Login"}),g.jsx("button",{className:"text-zinc-300 hover:text-ecto",type:"button",onClick:x,children:"Forgot Password"})]})]})})})}function ss({icon:t,value:e,onChange:n,...r}){return g.jsxs("label",{className:"relative block",children:[g.jsx("span",{className:"pointer-events-none absolute left-4 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center text-ecto",children:t}),g.jsx("input",{className:"ghost-input login-input",value:e,onChange:s=>n(s.target.value),required:!0,...r})]})}function ml({search:t,onSearch:e}){const{theme:n,toggleTheme:r,user:s}=St(),i=jl(),o=async()=>{await pi(),J.success("Signed out.")};return g.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-void/82 backdrop-blur-xl",children:g.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center",children:[g.jsx(Ti,{to:"/vault",className:"mr-auto",children:g.jsx(N0,{compact:!0})}),e&&g.jsxs("label",{className:"relative w-full md:max-w-md",children:[g.jsx(Bu,{className:"pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ecto"}),g.jsx("input",{className:"ghost-input pl-10",value:t,onChange:a=>e(a.target.value),placeholder:"Search services"})]}),g.jsxs("nav",{className:"flex items-center gap-2",children:[g.jsxs(Ti,{className:`icon-button ${i.pathname==="/dashboard"?"is-active":""}`,to:"/dashboard",title:"Profile",children:[g.jsx(Su,{className:"h-5 w-5"}),g.jsx("span",{className:"sr-only",children:"Profile"})]}),g.jsx("button",{className:"icon-button",type:"button",onClick:r,title:"Toggle theme",children:n==="dark"?g.jsx(ku,{className:"h-5 w-5"}):g.jsx(wu,{className:"h-5 w-5"})}),g.jsx("button",{className:"icon-button",type:"button",onClick:o,title:`Sign out ${(s==null?void 0:s.email)||""}`,children:g.jsx(Eu,{className:"h-5 w-5"})})]})]})})}async function mi(t,e="Value"){t&&(await navigator.clipboard.writeText(t),J.success(`${e} copied. Clipboard clears in 30s.`),window.setTimeout(async()=>{try{await navigator.clipboard.readText()===t&&(await navigator.clipboard.writeText(""),J(`${e} cleared from clipboard.`))}catch{J.error("Clipboard auto-clear was blocked by the browser.")}},3e4))}function yl({value:t,label:e="Password",onChange:n,editable:r=!1}){const[s,i]=O.useState(!1);return g.jsxs("div",{children:[g.jsx("label",{className:"field-label",children:e}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{className:"ghost-input",type:s?"text":"password",value:t,onChange:o=>n==null?void 0:n(o.target.value),readOnly:!r}),g.jsx("button",{className:"icon-button",type:"button",onClick:()=>i(o=>!o),title:"Reveal password",children:s?g.jsx(mu,{className:"h-5 w-5"}):g.jsx(yu,{className:"h-5 w-5"})}),g.jsx("button",{className:"icon-button",type:"button",onClick:()=>mi(t,e),title:"Copy password",children:g.jsx(Bs,{className:"h-5 w-5"})})]})]})}const K1={Social:"S",Dev:"D",Finance:"F",Email:"E",Other:"O"};function Y1({account:t,onEdit:e,onDelete:n}){const[r,s]=O.useState(!1),i=()=>{window.confirm(`Delete ${t.serviceName}?`)&&n(t.id)};return g.jsxs("article",{className:"ghost-card overflow-hidden",children:[g.jsxs("button",{className:"flex w-full items-center gap-4 text-left",type:"button",onClick:()=>s(o=>!o),children:[g.jsx("div",{className:"grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-ecto/25 bg-ecto/10 font-orbitron text-lg text-ecto",children:t.serviceLogoUrl?g.jsx("img",{src:t.serviceLogoUrl,alt:"",className:"h-full w-full object-cover",onError:o=>{o.currentTarget.style.display="none"}}):K1[t.category]||"G"}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h2",{className:"truncate font-orbitron text-lg font-bold text-white",children:t.serviceName}),g.jsx("p",{className:"truncate text-sm text-zinc-400",children:t.username||t.userId||"No username saved"})]}),g.jsx("span",{className:"rounded-full border border-ecto/25 bg-ecto/10 px-3 py-1 text-xs font-bold uppercase text-ecto",children:t.category})]}),r&&g.jsxs("div",{className:"mt-5 space-y-4 border-t border-white/10 pt-5",children:[g.jsx(yl,{value:t.password}),g.jsx(is,{label:"Username",value:t.username}),g.jsx(is,{label:"User ID",value:t.userId}),g.jsx(is,{label:"Mobile",value:t.mobileNumber}),t.notes&&g.jsxs("div",{children:[g.jsx("p",{className:"field-label",children:"Notes"}),g.jsx("p",{className:"rounded-lg border border-white/10 bg-black/20 p-3 text-zinc-200",children:t.notes})]}),g.jsxs("div",{className:"flex justify-end gap-2",children:[g.jsx("button",{className:"icon-button",type:"button",onClick:()=>e(t),title:"Edit",children:g.jsx(Au,{className:"h-5 w-5"})}),g.jsx("button",{className:"icon-button danger",type:"button",onClick:i,title:"Delete",children:g.jsx(T0,{className:"h-5 w-5"})})]})]})]})}function is({label:t,value:e}){return g.jsxs("div",{children:[g.jsx("p",{className:"field-label",children:t}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{className:"ghost-input",value:e||"",readOnly:!0}),g.jsx("button",{className:"icon-button",type:"button",onClick:()=>mi(e,t),title:`Copy ${t}`,children:g.jsx(Bs,{className:"h-5 w-5"})})]})]})}const Q1="ABCDEFGHJKLMNPQRSTUVWXYZ",X1="abcdefghijkmnopqrstuvwxyz",Z1="23456789",J1="!@#$%^&*_-+=?";function h0({length:t=20,includeUpper:e=!0,includeLower:n=!0,includeNumbers:r=!0,includeSymbols:s=!0}={}){const i=[e&&Q1,n&&X1,r&&Z1,s&&J1].filter(Boolean);if(!i.length)return"";const o=i.join(""),a=i.map(l=>f0(l)),c=Array.from({length:Math.max(t-a.length,0)},()=>f0(o));return e_([...a,...c]).join("")}function f0(t){const e=new Uint32Array(1);return window.crypto.getRandomValues(e),t[e[0]%t.length]}function e_(t){return t.map(e=>({item:e,sort:crypto.getRandomValues(new Uint32Array(1))[0]})).sort((e,n)=>e.sort-n.sort).map(({item:e})=>e)}function t_({onUse:t}){const[e,n]=O.useState({length:20,includeUpper:!0,includeLower:!0,includeNumbers:!0,includeSymbols:!0}),[r,s]=O.useState(()=>h0()),i=(a,c)=>n(l=>({...l,[a]:c})),o=()=>s(h0(e));return g.jsxs("section",{className:"rounded-lg border border-ecto/25 bg-black/20 p-4",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("input",{className:"ghost-input",value:r,readOnly:!0}),g.jsx("button",{className:"icon-button",type:"button",onClick:o,title:"Generate",children:g.jsx(Fu,{className:"h-5 w-5"})}),g.jsx("button",{className:"icon-button",type:"button",onClick:()=>mi(r,"Generated password"),title:"Copy",children:g.jsx(Bs,{className:"h-5 w-5"})})]}),g.jsxs("label",{className:"field-label mt-4 flex items-center justify-between",children:["Length ",g.jsx("span",{children:e.length})]}),g.jsx("input",{className:"w-full accent-ecto",type:"range",min:"8",max:"64",value:e.length,onChange:a=>i("length",Number(a.target.value))}),g.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2 text-sm font-semibold text-zinc-200",children:[["includeUpper","Uppercase"],["includeLower","Lowercase"],["includeNumbers","Numbers"],["includeSymbols","Symbols"]].map(([a,c])=>g.jsxs("label",{className:"flex items-center gap-2 rounded-md bg-white/5 px-3 py-2",children:[g.jsx("input",{type:"checkbox",checked:e[a],onChange:l=>i(a,l.target.checked),className:"accent-ecto"}),c]},a))}),g.jsx("button",{className:"ghost-button mt-4 w-full",type:"button",onClick:()=>t(r),children:"Use Password"})]})}const os={serviceName:"",category:"Other",username:"",userId:"",password:"",mobileNumber:"",notes:"",serviceLogoUrl:""},n_=["Social","Dev","Finance","Email","Other"];function r_({account:t,open:e,onClose:n,onSave:r}){const[s,i]=O.useState(os),[o,a]=O.useState(!1),[c,l]=O.useState(!1);if(O.useEffect(()=>{e&&i(t?{...os,...t}:os)},[t,e]),!e)return null;const u=(d,f)=>i(x=>({...x,[d]:f})),h=async d=>{if(d.preventDefault(),!s.serviceName.trim()||!s.password){J.error("Service name and password are required.");return}l(!0);try{await r(s),n()}catch(f){J.error(f.message)}finally{l(!1)}};return g.jsx("div",{className:"fixed inset-0 z-50 grid place-items-end bg-black/70 p-0 backdrop-blur-sm md:place-items-center md:p-4",children:g.jsxs("form",{className:"modal-panel max-h-[94vh] w-full overflow-y-auto md:max-w-2xl",onSubmit:h,children:[g.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[g.jsx("h2",{className:"font-orbitron text-xl font-bold text-white",children:t?"Edit Account":"Add Account"}),g.jsx("button",{className:"icon-button",type:"button",onClick:n,title:"Close",children:g.jsx(Iu,{className:"h-5 w-5"})})]}),g.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[g.jsx(zt,{label:"Service Name",value:s.serviceName,onChange:d=>u("serviceName",d),required:!0}),g.jsxs("div",{children:[g.jsx("label",{className:"field-label",children:"Category"}),g.jsx("select",{className:"ghost-input",value:s.category,onChange:d=>u("category",d.target.value),children:n_.map(d=>g.jsx("option",{children:d},d))})]}),g.jsx(zt,{label:"Username",value:s.username,onChange:d=>u("username",d)}),g.jsx(zt,{label:"User ID",value:s.userId,onChange:d=>u("userId",d)}),g.jsx(zt,{label:"Mobile Number",value:s.mobileNumber,onChange:d=>u("mobileNumber",d)}),g.jsx(zt,{label:"Logo URL",value:s.serviceLogoUrl,onChange:d=>u("serviceLogoUrl",d)})]}),g.jsxs("div",{className:"mt-4",children:[g.jsx(yl,{value:s.password,editable:!0,onChange:d=>u("password",d)}),g.jsx("button",{className:"ghost-button mt-3",type:"button",onClick:()=>a(d=>!d),children:"Generate Password"})]}),o&&g.jsx("div",{className:"mt-4",children:g.jsx(t_,{onUse:d=>u("password",d)})}),g.jsxs("div",{className:"mt-4",children:[g.jsx("label",{className:"field-label",children:"Notes"}),g.jsx("textarea",{className:"ghost-input min-h-24 resize-y",value:s.notes,onChange:d=>u("notes",d.target.value)})]}),g.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[g.jsx("button",{className:"ghost-button secondary",type:"button",onClick:n,children:"Cancel"}),g.jsx("button",{className:"ghost-button",type:"submit",disabled:c,children:c?"Saving...":"Save Account"})]})]})})}function zt({label:t,value:e,onChange:n,required:r=!1}){return g.jsxs("div",{children:[g.jsx("label",{className:"field-label",children:t}),g.jsx("input",{className:"ghost-input",value:e,onChange:s=>n(s.target.value),required:r})]})}const Cl=O.createContext(null),s_={accounts:[],loading:!1,error:null};function i_(t,e){switch(e.type){case"loading":return{...t,loading:!0,error:null};case"loaded":return{...t,loading:!1,accounts:e.payload};case"error":return{...t,loading:!1,error:e.payload};default:return t}}function o_({children:t}){const[e,n]=O.useReducer(i_,s_),{user:r}=St(),s=O.useCallback(async()=>{if(r){n({type:"loading"});try{n({type:"loaded",payload:await H1(r.uid)})}catch(l){n({type:"error",payload:l.message}),J.error(l.message)}}},[r]),i=O.useCallback(async l=>{await W1(r.uid,l),J.success("Account saved."),await s()},[s,r]),o=O.useCallback(async(l,u)=>{await q1(r.uid,l,u),J.success("Account updated."),await s()},[s,r]),a=O.useCallback(async l=>{await U1(r.uid,l),J.success("Account deleted."),await s()},[s,r]),c=O.useMemo(()=>({...e,loadAccounts:s,addAccount:i,editAccount:o,removeAccount:a}),[i,o,s,a,e]);return g.jsx(Cl.Provider,{value:c,children:t})}function El(){const t=O.useContext(Cl);if(!t)throw new Error("useVault must be used within VaultProvider");return t}const a_=["All","Social","Dev","Finance","Email","Other"];function l_(){const{accounts:t,loading:e,loadAccounts:n,addAccount:r,editAccount:s,removeAccount:i}=El(),[o,a]=O.useState(""),[c,l]=O.useState("All"),[u,h]=O.useState(!1),[d,f]=O.useState(null);O.useEffect(()=>{n()},[n]);const x=O.useMemo(()=>t.filter(C=>{const v=c==="All"||C.category===c,_=C.serviceName.toLowerCase().includes(o.toLowerCase());return v&&_}),[t,c,o]),m=(C=null)=>{f(C),h(!0)},p=async C=>{d?await s(d.id,C):await r(C)};return g.jsxs("main",{className:"app-shell min-h-screen pb-24",children:[g.jsx(ml,{search:o,onSearch:a}),g.jsxs("section",{className:"mx-auto max-w-6xl px-4 py-6",children:[g.jsx("div",{className:"mb-5 flex gap-2 overflow-x-auto pb-1",children:a_.map(C=>g.jsx("button",{className:`filter-tab ${c===C?"is-active":""}`,type:"button",onClick:()=>l(C),children:C},C))}),e?g.jsx("div",{className:"grid min-h-80 place-items-center",children:g.jsx("div",{className:"h-10 w-10 animate-spin rounded-full border-2 border-ecto border-t-transparent"})}):x.length?g.jsx("div",{className:"grid gap-4 lg:grid-cols-2",children:x.map(C=>g.jsx(Y1,{account:C,onEdit:m,onDelete:i},C.id))}):g.jsx("div",{className:"ghost-card grid min-h-80 place-items-center text-center",children:g.jsxs("div",{children:[g.jsx("h1",{className:"font-orbitron text-2xl font-bold text-white",children:"No Accounts Found"}),g.jsx("p",{className:"mt-2 text-zinc-400",children:"Add your first encrypted credential to start the vault."})]})})]}),g.jsx("button",{className:"fab",type:"button",onClick:()=>m(),title:"Add account",children:g.jsx(Du,{className:"h-7 w-7"})}),g.jsx(r_,{open:u,account:d,onClose:()=>h(!1),onSave:p})]})}const c_=["GF","VX","OM","ZN"];function u_(){const{user:t,theme:e,toggleTheme:n}=St(),{accounts:r,loadAccounts:s}=El(),[i,o]=O.useState({displayName:(t==null?void 0:t.displayName)||"",bio:"",avatarUrl:(t==null?void 0:t.photoURL)||""}),[a,c]=O.useState(""),[l,u]=O.useState("");O.useEffect(()=>{s()},[s]),O.useEffect(()=>{let p=!0;return(async()=>{try{const v=await j1(t.uid);p&&v&&o(_=>({..._,...v}))}catch(v){J.error(v.message)}})(),()=>{p=!1}},[t.uid]);const h=O.useMemo(()=>r.reduce((p,C)=>(p.total+=1,p.categories[C.category]=(p.categories[C.category]||0)+1,p),{total:0,categories:{}}),[r]),d=async()=>{try{await gp({displayName:i.displayName,photoURL:i.avatarUrl}),await L1(t.uid,i),J.success("Profile updated.")}catch(p){J.error(p.message)}},f=()=>{const p=O1(r,t.uid),C=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),payload:p},null,2)],{type:"application/json"}),v=URL.createObjectURL(C),_=document.createElement("a");_.href=v,_.download="pocket-locker-vault-backup.json",_.click(),URL.revokeObjectURL(v),J.success("Encrypted backup exported.")},x=async()=>{if(a.length<6){J.error("Password must be at least 6 characters.");return}try{await vp(a),c(""),J.success("Password changed.")}catch(p){J.error(p.message)}},m=async()=>{if(l!=="DELETE"){J.error("Type DELETE to confirm.");return}try{await mp(),J.success("Account deleted.")}catch(p){J.error(p.message)}};return g.jsxs("main",{className:"app-shell min-h-screen pb-10",children:[g.jsx(ml,{}),g.jsxs("section",{className:"mx-auto grid max-w-6xl gap-5 px-4 py-6 lg:grid-cols-[1fr_1.2fr]",children:[g.jsxs("div",{className:"ghost-card",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"grid h-20 w-20 place-items-center rounded-lg border border-ecto/30 bg-ecto/10 font-orbitron text-2xl text-ecto",children:i.avatarUrl||(i.displayName||t.email||"GF").slice(0,2).toUpperCase()}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("h1",{className:"truncate font-orbitron text-2xl font-bold text-white",children:i.displayName||"Pocket Keeper"}),g.jsx("p",{className:"truncate text-zinc-400",children:t.email})]})]}),g.jsxs("div",{className:"mt-6 grid gap-4",children:[g.jsx(x0,{label:"Display Name",value:i.displayName,onChange:p=>o(C=>({...C,displayName:p}))}),g.jsx(x0,{label:"Email",value:t.email,readOnly:!0}),g.jsxs("div",{children:[g.jsx("label",{className:"field-label",children:"Bio"}),g.jsx("textarea",{className:"ghost-input min-h-24 resize-y",value:i.bio,onChange:p=>o(C=>({...C,bio:p.target.value}))})]}),g.jsxs("div",{children:[g.jsx("p",{className:"field-label",children:"Preset Avatars"}),g.jsx("div",{className:"flex gap-2",children:c_.map(p=>g.jsx("button",{className:`avatar-choice ${i.avatarUrl===p?"is-active":""}`,type:"button",onClick:()=>o(C=>({...C,avatarUrl:p})),children:p},p))})]}),g.jsx("button",{className:"ghost-button",type:"button",onClick:d,children:"Save Profile"})]})]}),g.jsxs("div",{className:"grid gap-5",children:[g.jsxs("section",{className:"ghost-card",children:[g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsx("h2",{className:"font-orbitron text-xl font-bold text-white",children:"Vault Stats"}),g.jsx("button",{className:"ghost-button secondary",type:"button",onClick:n,children:e==="dark"?"Light Theme":"Dark Theme"})]}),g.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-3",children:[g.jsx(p0,{label:"Total",value:h.total}),Object.entries(h.categories).map(([p,C])=>g.jsx(p0,{label:p,value:C},p))]})]}),g.jsxs("section",{className:"ghost-card space-y-4",children:[g.jsx("h2",{className:"font-orbitron text-xl font-bold text-white",children:"Security"}),g.jsxs("button",{className:"ghost-button w-full justify-center",type:"button",onClick:f,children:[g.jsx(gu,{className:"h-5 w-5"})," Export Vault"]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{className:"ghost-input",type:"password",placeholder:"New Firebase password",value:a,onChange:p=>c(p.target.value)}),g.jsx("button",{className:"icon-button",type:"button",onClick:x,title:"Change password",children:g.jsx(Cu,{className:"h-5 w-5"})})]}),g.jsxs("div",{className:"rounded-lg border border-red-400/30 bg-red-500/10 p-4",children:[g.jsx("p",{className:"font-semibold text-red-100",children:"Delete account permanently"}),g.jsxs("div",{className:"mt-3 flex gap-2",children:[g.jsx("input",{className:"ghost-input",placeholder:"Type DELETE",value:l,onChange:p=>u(p.target.value)}),g.jsx("button",{className:"icon-button danger",type:"button",onClick:m,title:"Delete account",children:g.jsx(T0,{className:"h-5 w-5"})})]})]}),g.jsx("button",{className:"ghost-button secondary w-full",type:"button",onClick:pi,children:"Sign Out"})]})]})]})]})}function x0({label:t,value:e,onChange:n,readOnly:r=!1}){return g.jsxs("div",{children:[g.jsx("label",{className:"field-label",children:t}),g.jsx("input",{className:"ghost-input",value:e||"",onChange:s=>n==null?void 0:n(s.target.value),readOnly:r})]})}function p0({label:t,value:e}){return g.jsxs("div",{className:"rounded-lg border border-white/10 bg-black/20 p-4",children:[g.jsx("p",{className:"text-sm font-bold uppercase text-zinc-400",children:t}),g.jsx("p",{className:"font-orbitron text-3xl font-bold text-ecto",children:e})]})}function d_(){const{user:t}=St();return t?g.jsx(Hl,{}):g.jsx(as,{to:"/",replace:!0})}function h_(){const{user:t,loading:e}=St();return e?g.jsx("main",{className:"app-shell grid min-h-screen place-items-center",children:g.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-2 border-ecto border-t-transparent"})}):g.jsxs(Wl,{children:[g.jsx(Lt,{path:"/",element:t?g.jsx(as,{to:"/vault",replace:!0}):g.jsx(V1,{})}),g.jsxs(Lt,{element:g.jsx(d_,{}),children:[g.jsx(Lt,{path:"/vault",element:g.jsx(l_,{})}),g.jsx(Lt,{path:"/dashboard",element:g.jsx(u_,{})})]}),g.jsx(Lt,{path:"*",element:g.jsx(as,{to:t?"/vault":"/",replace:!0})})]})}Dc.createRoot(document.getElementById("root")).render(g.jsx(ql.StrictMode,{children:g.jsx(Ul,{children:g.jsx(G1,{children:g.jsxs(o_,{children:[g.jsx(h_,{}),g.jsx(xu,{position:"top-right",toastOptions:{className:"ghost-toast",duration:3500}})]})})})}));
