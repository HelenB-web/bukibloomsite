import{c as j,r as u,u as q,R as l,S as L,P as D}from"./index-DFa2kQmY.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]],R=j("circle-minus",M);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],H=j("circle-plus",Y);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Z=j("circle-x",Q);let B={data:""},J=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||B,U=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,V=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,b=(e,t)=>{let a="",o="",n="";for(let s in e){let r=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+r+";":o+=s[1]=="f"?b(r,s):s+"{"+b(r,s[1]=="k"?"":t)+"}":typeof r=="object"?o+=b(r,t?t.replace(/([^,])+/g,c=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,c):c?c+" "+d:d)):s):r!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(s,r):s+":"+r+";")}return a+(t&&n?t+"{"+n+"}":n)+o},y={},I=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+I(e[a]);return t}return e},W=(e,t,a,o,n)=>{let s=I(e),r=y[s]||(y[s]=(d=>{let i=0,p=11;for(;i<d.length;)p=101*p+d.charCodeAt(i++)>>>0;return"go"+p})(s));if(!y[r]){let d=s!==e?e:(i=>{let p,g,f=[{}];for(;p=U.exec(i.replace(V,""));)p[4]?f.shift():p[3]?(g=p[3].replace(A," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(A," ").trim();return f[0]})(e);y[r]=b(n?{["@keyframes "+r]:d}:d,a?"":"."+r)}let c=a&&y.g?y.g:null;return a&&(y.g=y[r]),((d,i,p,g)=>{g?i.data=i.data.replace(g,d):i.data.indexOf(d)===-1&&(i.data=p?d+i.data:i.data+d)})(y[r],t,o,c),r},X=(e,t,a)=>e.reduce((o,n,s)=>{let r=t[s];if(r&&r.call){let c=r(a),d=c&&c.props&&c.props.className||/^go/.test(c)&&c;r=d?"."+d:c&&typeof c=="object"?c.props?"":b(c,""):c===!1?"":c}return o+n+(r??"")},"");function E(e){let t=this||{},a=e.call?e(t.p):e;return W(a.unshift?a.raw?X(a,[].slice.call(arguments,1),t.p):a.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):a,J(t.target),t.g,t.o,t.k)}let S,N,$;E.bind({g:1});let h=E.bind({k:1});function G(e,t,a,o){b.p=t,S=e,N=a,$=o}function x(e,t){let a=this||{};return function(){let o=arguments;function n(s,r){let c=Object.assign({},s),d=c.className||n.className;a.p=Object.assign({theme:N&&N()},c),a.o=/ *go\d+/.test(d),c.className=E.apply(a,o)+(d?" "+d:"");let i=e;return e[0]&&(i=c.as||e,delete c.as),$&&i[0]&&$(c),S(i,c)}return n}}var K=e=>typeof e=="function",C=(e,t)=>K(e)?e(t):e,ee=(()=>{let e=0;return()=>(++e).toString()})(),te=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ae=20,z="default",O=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return O(e,{type:e.toasts.find(r=>r.id===o.id)?1:0,toast:o});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},re=[],oe={toasts:[],pausedAt:void 0,settings:{toastLimit:ae}},v={},T=(e,t=z)=>{v[t]=O(v[t]||oe,e),re.forEach(([a,o])=>{a===t&&o(v[t])})},_=e=>Object.keys(v).forEach(t=>T(e,t)),se=e=>Object.keys(v).find(t=>v[t].toasts.some(a=>a.id===e)),F=(e=z)=>t=>{T(t,e)},ie=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||ee()}),w=e=>(t,a)=>{let o=ie(t,e,a);return F(o.toasterId||se(o.id))({type:2,toast:o}),o.id},m=(e,t)=>w("blank")(e,t);m.error=w("error");m.success=w("success");m.loading=w("loading");m.custom=w("custom");m.dismiss=(e,t)=>{let a={type:3,toastId:e};t?F(t)(a):_(a)};m.dismissAll=e=>m.dismiss(void 0,e);m.remove=(e,t)=>{let a={type:4,toastId:e};t?F(t)(a):_(a)};m.removeAll=e=>m.remove(void 0,e);m.promise=(e,t,a)=>{let o=m.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let s=t.success?C(t.success,n):void 0;return s?m.success(s,{id:o,...a,...a?.success}):m.dismiss(o),n}).catch(n=>{let s=t.error?C(t.error,n):void 0;s?m.error(s,{id:o,...a,...a?.error}):m.dismiss(o)}),e};var ne=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ce=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,de=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,ue=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fe=h`
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
}`,ge=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=x("div")`
  position: absolute;
`,he=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ve=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(xe,null,t):t:a==="blank"?null:u.createElement(he,null,u.createElement(me,{...o}),a!=="loading"&&u.createElement(ye,null,a==="error"?u.createElement(de,{...o}):u.createElement(ge,{...o})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",Ne="0%{opacity:1;} 100%{opacity:0;}",$e=x("div")`
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
`,Ce=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,je=(e,t)=>{let a=e.includes("top")?1:-1,[o,n]=te()?[ke,Ne]:[we(a),Ee(a)];return{animation:t?`${h(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};u.memo(({toast:e,position:t,style:a,children:o})=>{let n=e.height?je(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(ve,{toast:e}),r=u.createElement(Ce,{...e.ariaProps},C(e.message,e));return u.createElement($e,{className:e.className,style:{...n,...a,...e.style}},typeof o=="function"?o({icon:s,message:r}):u.createElement(u.Fragment,null,s,r))});G(u.createElement);E`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var P=m;const Fe=({setView:e})=>{const{cartItems:t,updateCartItemQuantity:a,removeFromCart:o,clearCart:n,getTotalPrice:s}=q(),[r,c]=u.useState(!1),d=async()=>{c(!0);try{const i="your-auth-token",p={items:t.map(k=>({id:k.id,quantity:k.quantity,price:k.price})),total:s()},g=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(p)}),f=await g.json();if(!g.ok)throw console.error("Checkout API Error:",f),new Error(f.message||"An unknown error occurred during checkout.");console.log("Checkout API success:",f),P.success("Proceeding to checkout..."),e("checkout")}catch(i){console.error("Checkout failed:",i),P.error(`Checkout failed: ${i.message}`)}finally{c(!1)}};return t.length===0?l.createElement("div",{className:"container mx-auto p-8 text-center animate-fade-in"},l.createElement(L,{className:"w-24 h-24 text-gray-400 mx-auto mb-6"}),l.createElement("h2",{className:"text-3xl font-bold text-gray-800 mb-4"},"Your Cart is Empty"),l.createElement("p",{className:"text-gray-600 mb-6"},"Looks like you haven't added anything to your cart yet."),l.createElement("button",{onClick:()=>e("products"),className:"bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"},"Start Shopping")):l.createElement("div",{className:"container mx-auto p-4 animate-fade-in"},l.createElement("h2",{className:"text-4xl font-bold text-center text-gray-800 mb-8"},"Your Shopping Cart"),l.createElement("div",{className:"bg-white rounded-lg shadow-xl p-6"},l.createElement("div",{className:"divide-y divide-gray-200"},t.map(i=>l.createElement("div",{key:i.id,className:"flex items-center py-4"},l.createElement("img",{src:i.imageUrl||`https://placehold.co/100x100/E0FFFF/333333?text=${i.name.replace(/\s/g,"+")}`,alt:i.name,onError:p=>{p.target.onerror=null,p.target.src=`https://placehold.co/100x100/E0FFFF/333333?text=${i.name.replace(/\s/g,"+")}`},className:"w-24 h-24 object-cover rounded-lg mr-6 shadow-md"}),l.createElement("div",{className:"flex-grow"},l.createElement("h3",{className:"text-xl font-semibold text-gray-800"},i.name),l.createElement("p",{className:"text-gray-600"},"$",i.price?.toFixed(2))),l.createElement("div",{className:"flex items-center space-x-3"},l.createElement("button",{onClick:()=>a(i.id,i.quantity-1),disabled:i.quantity<=1,className:"bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"},l.createElement(R,{className:"w-5 h-5"})),l.createElement("span",{className:"text-lg font-semibold text-gray-800"},i.quantity),l.createElement("button",{onClick:()=>a(i.id,i.quantity+1),className:"bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition duration-200"},l.createElement(H,{className:"w-5 h-5"}))),l.createElement("button",{onClick:()=>o(i.id),className:"ml-8 text-red-500 hover:text-red-700 transition duration-200"},l.createElement(Z,{className:"w-6 h-6"}))))),l.createElement("div",{className:"flex justify-between items-center border-t border-gray-200 pt-6 mt-6"},l.createElement("span",{className:"text-2xl font-bold text-gray-800"},"Total:"),l.createElement("span",{className:"text-3xl font-bold text-pink-600"},"$",s()?.toFixed(2))),l.createElement("div",{className:"mt-8 flex justify-end space-x-4"},l.createElement("button",{onClick:n,className:"bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition duration-300"},"Clear Cart"),l.createElement("button",{onClick:d,disabled:r,className:`bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 ${r?"opacity-50 cursor-not-allowed":""}`},r?"Processing...":"Proceed to Checkout"))))};Fe.propTypes={setView:D.func.isRequired};export{Fe as default};
