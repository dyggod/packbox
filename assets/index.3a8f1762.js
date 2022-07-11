import{c as J,d as D,a as C,b as P,s as z,u as Q,r as E,z as O,w as N,e as c,o as i,f,g as l,h as g,i as u,j as m,k as w,$ as X,l as Y,t as $,m as F,n as V,F as M,p as Z,q as ee,v as x,x as te,y as oe,A as ne,T as ae,B as se,C as re,D as le,E as ue,G as ce}from"./vendor.53fa650b.js";const ie=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};ie();const _e=J();function de(t){t.use(_e)}const j=D({id:"setting",state:()=>({language:"zh-CN"}),getters:{},actions:{setLanguage(t){this.language=t}}});const pe={class:"router-container"},me=C({setup(t){P.locale("zh-cn");const{language:o}=z(j()),a=Q(),n=E(O.locale);return N(n,e=>{P.locale(e)}),N(o,()=>{a.locale.value=o.value||"zh-CN",o.value==="en-US"?n.value=w.locale:n.value=O.locale}),(e,s)=>{const r=c("router-view"),p=c("a-config-provider");return i(),f(p,{locale:n.value==="en"?m(w):m(O)},{default:l(()=>[g("div",pe,[u(r)])]),_:1},8,["locale"])}}}),fe="modulepreload",A={},ve="./",y=function(o,a){return!a||a.length===0?o():Promise.all(a.map(n=>{if(n=`${ve}${n}`,n in A)return;A[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":fe,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((p,_)=>{r.addEventListener("load",p),r.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>o())};var ge="./assets/logo.7a9ab47f.png";const he=D({id:"routes",state:()=>({layoutRoutes:U}),getters:{routes(){return this.layoutRoutes!==void 0?this.layoutRoutes:[]}}});function H(t){const{icon:o}=t;return u(X[o])}var k=(t,o)=>{const a=t.__vccOpts||t;for(const[n,e]of o)a[n]=e;return a};const ye=t=>(Z("data-v-4bf549c8"),t=t(),ee(),t),be={class:"logo"},Le=ye(()=>g("img",{src:ge,alt:""},null,-1)),$e=x(" \u9996\u9875 "),xe=C({setup(t){const o=he(),{routes:a}=o,n=E(!1),e=E(["1"]),s=Y();function r(p){s.push(`${p}`)}return(p,_)=>{const S=c("router-link"),v=c("a-menu-item"),T=c("a-menu"),W=c("a-layout-sider");return i(),f(W,{id:"components-layout-demo-side",collapsed:n.value,"onUpdate:collapsed":_[2]||(_[2]=d=>n.value=d),collapsible:"",width:"256"},{default:l(()=>[g("div",be,[u(S,{to:"/home"},{default:l(()=>[Le,g("h1",null,$(p.$t("menu.systemName")),1)]),_:1})]),u(T,{selectedKeys:e.value,"onUpdate:selectedKeys":_[1]||(_[1]=d=>e.value=d),theme:"dark",mode:"inline"},{default:l(()=>[u(v,{onClick:_[0]||(_[0]=d=>r("/home"))},{default:l(()=>[$e]),_:1}),(i(!0),F(M,null,V(m(a),(d,G)=>(i(),f(v,{key:G,onClick:qe=>r(d.path)},{default:l(()=>[d.meta.icon?(i(),f(m(H),{key:0,icon:d.meta.icon},null,8,["icon"])):te("",!0),g("span",{class:oe(d.meta.icon?"":"p-l")},$(d.meta.title),3)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selectedKeys"])]),_:1},8,["collapsed"])}}});var Ce=k(xe,[["__scopeId","data-v-4bf549c8"]]);const ke={};function Se(t,o){const a=c("router-view");return i(),f(a,null,{default:l(({Component:n,route:e})=>[u(ae,{"enter-active-class":"animate__animated animate__lightSpeedInLeft page-toggle-enter-active","leave-active-class":`animate__animated animate__lightSpeedOutRight
      page-toggle-leave-active`},{default:l(()=>[(i(),f(ne(n),{key:e.fullPath}))]),_:2},1024)]),_:1})}var Oe=k(ke,[["render",Se],["__scopeId","data-v-9764f3d4"]]),Ee={"app.login.success":"\u767B\u5F55\u6210\u529F","app.login.fail":"\u767B\u5F55\u5931\u8D25","app.logout.msg":"\u5373\u5C06\u9000\u51FA\u8D26\u53F7","menu.test":"\u83DC\u5355\u6D4B\u8BD5","menu.systemName":"\u5305\u88C5\u7BB1"},Ie={"app.login.success":"login success","app.login.fail":"login fail","app.logout.msg":"about to log out","menu.test":"MenuTest","menu.systemName":"PackBox"};const I=[{label:"\u7B80\u4F53\u4E2D\u6587",value:"zh-CN"},{label:"English",value:"en-US"}],b={zh:I[0],en:I[1]};function Re(t){const o={locale:b.zh.value,fallbackLocale:b.en.value,silentTranslationWarn:!0,messages:{[b.en.value]:Ie,[b.zh.value]:Ee}},a=se(o);t.use(a)}const Te=C({setup(t){const o=j(),{language:a}=z(o);function n(e){o.setLanguage(e)}return(e,s)=>{const r=c("a-menu-item"),p=c("a-menu"),_=c("a-dropdown"),S=c("a-layout-header");return i(),f(S,{style:{background:"#fff",padding:"0"},class:"layout-header"},{default:l(()=>[g("div",null,[u(_,{class:"lang header-item"},{overlay:l(()=>[u(p,{"selected-keys":[m(a)]},{default:l(()=>[(i(!0),F(M,null,V(m(I),v=>(i(),f(r,{key:v.value,onClick:T=>n(v.value)},{default:l(()=>[x($(v.value.toLowerCase()+" "+v.label),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selected-keys"])]),default:l(()=>[g("div",null,[u(m(H),{icon:"GlobalOutlined"}),x(" "+$(m(a)),1)])]),_:1})])]),_:1})}}});var Pe=k(Te,[["__scopeId","data-v-44968d0e"]]);const Ne=x(" PackBox \xA92022 Created by dyggod "),we=C({setup(t){return(o,a)=>{const n=c("a-layout-content"),e=c("a-layout-footer"),s=c("a-layout");return i(),f(s,{style:{"min-height":"100vh"}},{default:l(()=>[u(Ce),u(s,{class:"layout-right"},{default:l(()=>[u(m(Pe)),u(n,{style:{margin:"0 16px"},class:"router-content-container beauty-scroll"},{default:l(()=>[u(Oe)]),_:1}),u(e,{style:{"text-align":"center"}},{default:l(()=>[Ne]),_:1})]),_:1})]),_:1})}}});var R=k(we,[["__scopeId","data-v-04ab6d50"]]),Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const h="css",Be={path:`/${h}`,name:`${h}`,component:R,redirect:`/${h}/index`,children:[{path:`/${h}/index`,name:`${h}-index`,component:()=>y(()=>import("./index.674f247a.js"),["assets/index.674f247a.js","assets/index.24b0a22c.css","assets/vendor.53fa650b.js","assets/index.162c3a91.js","assets/index.92686d94.css"]),meta:{}}],meta:{title:"Css pages",icon:"PieChartOutlined"}};var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const L="test",ze={path:`/${L}`,name:"Test",component:R,redirect:`/${L}/index`,children:[{path:`/${L}/index`,name:`${L}-index`,component:()=>y(()=>import("./Test.0c496397.js"),["assets/Test.0c496397.js","assets/index.162c3a91.js","assets/index.92686d94.css","assets/vendor.53fa650b.js"]),meta:{title:"Test pages",icon:"PieChartOutlined"}}],meta:{title:"Test pages",icon:"FileOutlined"}};var Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});const B={"./modules/css.ts":De,"./modules/test.ts":Fe},K=[];Object.keys(B).forEach(t=>{const o=B[t].default||{},a=Array.isArray(o)?[...o]:[o];K.push(...a)});var U=[...K];const Ve={path:"/",name:"Root",redirect:"/home",meta:{title:"Root"}},Me={path:"/login",name:"Login",component:()=>y(()=>import("./index.772affde.js"),["assets/index.772affde.js","assets/vendor.53fa650b.js"]),meta:{title:"Login pages"}},je={path:"/home",name:"Home",component:()=>y(()=>Promise.resolve().then(function(){return Ae}),void 0),redirect:"/home/index",children:[{path:"/home/index",name:"HomeIndex",component:()=>y(()=>import("./index.49d5d23b.js"),["assets/index.49d5d23b.js","assets/index.162c3a91.js","assets/index.92686d94.css","assets/vendor.53fa650b.js"]),meta:{}}],meta:{title:"Layout pages"}},He=[Me,Ve,je,...U],q=re({history:le(),routes:He,strict:!0,scrollBehavior:()=>({left:0,top:0})});q.beforeEach((t,o,a)=>{a()});function Ke(t){t.use(q)}function Ue(){const t=ue(me);Ke(t),de(t),t.use(ce),Re(t),t.mount("#app")}Ue();export{k as _};
