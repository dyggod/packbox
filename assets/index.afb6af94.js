import{d,r as h,o as p,c as _,a as o,t as i,b as f,w as g,F as m,p as v,e as y,f as s,g as b,h as V,A as k}from"./vendor.50f73ef3.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};S();var x="./assets/logo.03d6d6da.png";var A=(r,n)=>{const a=r.__vccOpts||r;for(const[l,e]of n)a[l]=e;return a};const c=r=>(v("data-v-5d1457d4"),r=r(),y(),r),E=c(()=>o("p",null,[s(" Recommended IDE setup: "),o("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),s(" + "),o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),I=c(()=>o("p",null,[s("See "),o("code",null,"README.md"),s(" for more information.")],-1)),N=c(()=>o("p",null,[o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),s(" | "),o("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),C=c(()=>o("p",null,[s(" Edit "),o("code",null,"components/HelloWorld.vue"),s(" to test hot module replacement. ")],-1)),D=d({props:{msg:null},setup(r){const n=h(0);return(a,l)=>{const e=b("a-button");return p(),_(m,null,[o("h1",null,i(r.msg),1),E,I,N,f(e,{type:"primary",onClick:l[0]||(l[0]=t=>n.value++)},{default:g(()=>[s(" count is: "+i(n.value),1)]),_:1}),C],64)}}});var L=A(D,[["__scopeId","data-v-5d1457d4"]]);const O=o("img",{alt:"Vue logo",src:x},null,-1),w=d({setup(r){return(n,a)=>(p(),_(m,null,[O,f(L,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});V(w).use(k).mount("#app");
