import{S as _,i as h,s as u,e as d,t as m,c as y,a as b,h as p,d as n,b as v,g as f,I as x,l as r,M as o}from"../chunks/vendor-e8c164e4.js";function c(a){let t,e;return{c(){t=d("h1"),e=m("Nothing to see here :/"),this.h()},l(s){t=y(s,"H1",{class:!0});var i=b(t);e=p(i,"Nothing to see here :/"),i.forEach(n),this.h()},h(){v(t,"class","svelte-1kfwt8b")},m(s,i){f(s,t,i),x(t,e)},d(s){s&&n(t)}}}function g(a){let t,e=a[0]==404&&c();return{c(){e&&e.c(),t=r()},l(s){e&&e.l(s),t=r()},m(s,i){e&&e.m(s,i),f(s,t,i)},p(s,[i]){s[0]==404?e||(e=c(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:o,o,d(s){e&&e.d(s),s&&n(t)}}}function S({error:a,status:t}){return{props:{title:`${t}: ${a.message}`,status:t}}}function k(a,t,e){let{title:s}=t,{status:i}=t;return a.$$set=l=>{"title"in l&&e(1,s=l.title),"status"in l&&e(0,i=l.status)},[i,s]}class q extends _{constructor(t){super();h(this,t,k,g,u,{title:1,status:0})}}export{q as default,S as load};