import{S as W,i as J,s as q,k as b,q as P,a as z,l as k,m as v,r as S,h,c as D,n as f,b as L,C as p,f as F,g as ae,d as re,t as A,D as se,E as le,w as K,x as Q,y as X,z as Z,F as M,G as R,H as Y,I as ne,J as ye,K as U,L as G,M as $e,N as xe,O as ue,P as Ce,Q as Ve,R as Ie,T as Fe,U as Te,V as ze}from"../../chunks/index-22a098c9.js";import{i as De,I as Ae,d as Le}from"../../chunks/core-926884ec.js";import{p as je}from"../../chunks/stores-3a418c6c.js";function he(o,e,t){const n=o.slice();return n[1]=e[t],n}function de(o){let e,t,n,i,c,s;return t=new Ae({props:{type:o[1].icon,style:"fill-white"}}),{c(){e=b("a"),K(t.$$.fragment),n=z(),this.h()},l(l){e=k(l,"A",{target:!0,rel:!0,class:!0,href:!0,"aria-label":!0});var a=v(e);Q(t.$$.fragment,a),n=D(a),a.forEach(h),this.h()},h(){f(e,"target","_blank"),f(e,"rel","noreferrer"),f(e,"class","hover:scale-105 duration-150"),f(e,"href",i=o[1].href),f(e,"aria-label",c=o[1].name)},m(l,a){L(l,e,a),X(t,e,null),p(e,n),s=!0},p(l,a){const r={};a&1&&(r.type=l[1].icon),t.$set(r),(!s||a&1&&i!==(i=l[1].href))&&f(e,"href",i),(!s||a&1&&c!==(c=l[1].name))&&f(e,"aria-label",c)},i(l){s||(F(t.$$.fragment,l),s=!0)},o(l){A(t.$$.fragment,l),s=!1},d(l){l&&h(e),Z(t)}}}function Be(o){let e,t,n,i,c,s,l,a,r,u,E=o[0],m=[];for(let _=0;_<E.length;_+=1)m[_]=de(he(o,E,_));const x=_=>A(m[_],1,1,()=>{m[_]=null});return{c(){e=b("footer"),t=b("div"),n=b("p"),i=P("Find me on:"),c=z(),s=b("div");for(let _=0;_<m.length;_+=1)m[_].c();l=z(),a=b("p"),r=P("All rights reserved Chris Vail 2022"),this.h()},l(_){e=k(_,"FOOTER",{class:!0});var w=v(e);t=k(w,"DIV",{class:!0});var d=v(t);n=k(d,"P",{class:!0});var V=v(n);i=S(V,"Find me on:"),V.forEach(h),c=D(d),s=k(d,"DIV",{class:!0});var O=v(s);for(let j=0;j<m.length;j+=1)m[j].l(O);O.forEach(h),l=D(d),a=k(d,"P",{class:!0});var N=v(a);r=S(N,"All rights reserved Chris Vail 2022"),N.forEach(h),d.forEach(h),w.forEach(h),this.h()},h(){f(n,"class","text-center"),f(s,"class","flex justify-center items-center gap-4 -mt-2"),f(a,"class","text-center"),f(t,"class","max-w-3xl w-full flex flex-col justify-between self-center gap-4 py-8"),f(e,"class","w-full dark:bg-black bg-zinc-800 text-zinc-200 text-sm min-h-32 flex justify-center")},m(_,w){L(_,e,w),p(e,t),p(t,n),p(n,i),p(t,c),p(t,s);for(let d=0;d<m.length;d+=1)m[d].m(s,null);p(t,l),p(t,a),p(a,r),u=!0},p(_,[w]){if(w&1){E=_[0];let d;for(d=0;d<E.length;d+=1){const V=he(_,E,d);m[d]?(m[d].p(V,w),F(m[d],1)):(m[d]=de(V),m[d].c(),F(m[d],1),m[d].m(s,null))}for(ae(),d=E.length;d<m.length;d+=1)x(d);re()}},i(_){if(!u){for(let w=0;w<E.length;w+=1)F(m[w]);u=!0}},o(_){m=m.filter(Boolean);for(let w=0;w<m.length;w+=1)A(m[w]);u=!1},d(_){_&&h(e),se(m,_)}}}function Oe(o,e,t){let n;return le(o,De,i=>t(0,n=i)),[n]}class He extends W{constructor(e){super(),J(this,e,Oe,Be,q,{})}}function Ne(o){let e,t,n,i,c,s,l;return{c(){e=b("button"),t=M("svg"),n=M("path"),i=M("path"),c=M("path"),this.h()},l(a){e=k(a,"BUTTON",{class:!0,"aria-expanded":!0,"aria-label":!0});var r=v(e);t=R(r,"svg",{class:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,width:!0});var u=v(t);n=R(u,"path",{class:!0,d:!0}),v(n).forEach(h),i=R(u,"path",{class:!0,d:!0}),v(i).forEach(h),c=R(u,"path",{class:!0,d:!0}),v(c).forEach(h),u.forEach(h),r.forEach(h),this.h()},h(){f(n,"class","top svelte-1i2gakx"),f(n,"d","m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"),f(i,"class","middle svelte-1i2gakx"),f(i,"d","m 30,50 h 40"),f(c,"class","bottom svelte-1i2gakx"),f(c,"d","m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"),f(t,"class","stroke-zinc-900 dark:stroke-slate-200 svelte-1i2gakx"),f(t,"viewBox","0 0 100 100"),f(t,"fill","none"),f(t,"stroke","currentColor"),f(t,"stroke-width","7"),f(t,"width",o[3]),Y(t,"open",o[0]),f(e,"class","flex md:hidden svelte-1i2gakx"),f(e,"aria-expanded",o[0]),f(e,"aria-label",o[2])},m(a,r){L(a,e,r),p(e,t),p(t,n),p(t,i),p(t,c),s||(l=ne(e,"click",function(){ye(o[1])&&o[1].apply(this,arguments)}),s=!0)},p(a,[r]){o=a,r&8&&f(t,"width",o[3]),r&1&&Y(t,"open",o[0]),r&1&&f(e,"aria-expanded",o[0]),r&4&&f(e,"aria-label",o[2])},i:U,o:U,d(a){a&&h(e),s=!1,l()}}}function Pe(o,e,t){let{open:n=!1}=e,{onClick:i=()=>{t(0,n=!n)}}=e,{ariaLabel:c="toggle menu"}=e,{width:s=80}=e;return o.$$set=l=>{"open"in l&&t(0,n=l.open),"onClick"in l&&t(1,i=l.onClick),"ariaLabel"in l&&t(2,c=l.ariaLabel),"width"in l&&t(3,s=l.width)},[n,i,c,s]}class Se extends W{constructor(e){super(),J(this,e,Pe,Ne,q,{open:0,onClick:1,ariaLabel:2,width:3})}}function Ee(o){const e=o-1;return e*e*e+1}function _e(o,{delay:e=0,duration:t=400,easing:n=Ee,x:i=0,y:c=0,opacity:s=0}={}){const l=getComputedStyle(o),a=+l.opacity,r=l.transform==="none"?"":l.transform,u=a*(1-s);return{delay:e,duration:t,easing:n,css:(E,m)=>`
			transform: ${r} translate(${(1-E)*i}px, ${(1-E)*c}px);
			opacity: ${a-u*m}`}}function me(o,{delay:e=0,duration:t=400,easing:n=Ee}={}){const i=getComputedStyle(o),c=+i.opacity,s=parseFloat(i.height),l=parseFloat(i.paddingTop),a=parseFloat(i.paddingBottom),r=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),E=parseFloat(i.borderTopWidth),m=parseFloat(i.borderBottomWidth);return{delay:e,duration:t,easing:n,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*c};height: ${x*s}px;padding-top: ${x*l}px;padding-bottom: ${x*a}px;margin-top: ${x*r}px;margin-bottom: ${x*u}px;border-top-width: ${x*E}px;border-bottom-width: ${x*m}px;`}}function pe(o,e,t){const n=o.slice();return n[12]=e[t],n}function ge(o,e,t){const n=o.slice();return n[12]=e[t],n}function ve(o){let e,t,n=o[12].name+"",i,c;return{c(){e=b("li"),t=b("a"),i=P(n),c=z(),this.h()},l(s){e=k(s,"LI",{});var l=v(e);t=k(l,"A",{class:!0,"sveltekit:noscroll":!0,href:!0});var a=v(t);i=S(a,n),a.forEach(h),c=D(l),l.forEach(h),this.h()},h(){f(t,"class",""),f(t,"sveltekit:noscroll",""),f(t,"href",o[12].url)},m(s,l){L(s,e,l),p(e,t),p(t,i),p(e,c)},p:U,d(s){s&&h(e)}}}function be(o){let e,t,n,i,c=o[4],s=[];for(let l=0;l<c.length;l+=1)s[l]=ke(pe(o,c,l));return{c(){e=b("nav"),t=b("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=k(l,"NAV",{class:!0});var a=v(e);t=k(a,"UL",{class:!0});var r=v(t);for(let u=0;u<s.length;u+=1)s[u].l(r);r.forEach(h),a.forEach(h),this.h()},h(){f(t,"class","flex flex-col items-center font-bold my-8 gap-8 w-full text-slate-900 dark:text-slate-200 "),f(e,"class","flex w-full relative self-center top-full")},m(l,a){L(l,e,a),p(e,t);for(let r=0;r<s.length;r+=1)s[r].m(t,null);i=!0},p(l,a){if(a&20){c=l[4];let r;for(r=0;r<c.length;r+=1){const u=pe(l,c,r);s[r]?s[r].p(u,a):(s[r]=ke(u),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=c.length}},i(l){i||(G(()=>{n||(n=ue(e,me,{},!0)),n.run(1)}),i=!0)},o(l){n||(n=ue(e,me,{},!1)),n.run(0),i=!1},d(l){l&&h(e),se(s,l),l&&n&&n.end()}}}function ke(o){let e,t,n=o[12].name+"",i,c,s,l;return{c(){e=b("li"),t=b("a"),i=P(n),c=z(),this.h()},l(a){e=k(a,"LI",{});var r=v(e);t=k(r,"A",{href:!0,class:!0});var u=v(t);i=S(u,n),u.forEach(h),c=D(r),r.forEach(h),this.h()},h(){f(t,"href",o[12].url),f(t,"class","border-b-2 border-accent-base")},m(a,r){L(a,e,r),p(e,t),p(t,i),p(e,c),s||(l=ne(t,"click",o[8]),s=!0)},p:U,d(a){a&&h(e),s=!1,l()}}}function Ue(o){let e=!1,t=()=>{e=!1},n,i,c,s,l,a,r,u,E,m,x,_,w,d,V,O,N,j,ee,oe;G(o[6]),_=new Se({props:{open:o[2],onClick:o[7],width:"30"}});let H=o[4],C=[];for(let g=0;g<H.length;g+=1)C[g]=ve(ge(o,H,g));let y=o[2]&&be(o);return{c(){i=b("header"),c=b("div"),s=b("div"),l=b("div"),a=b("img"),u=z(),E=b("a"),m=P("Chris Vail"),x=z(),K(_.$$.fragment),w=z(),d=b("nav"),V=b("ul");for(let g=0;g<C.length;g+=1)C[g].c();O=z(),y&&y.c(),this.h()},l(g){i=k(g,"HEADER",{class:!0});var I=v(i);c=k(I,"DIV",{class:!0});var T=v(c);s=k(T,"DIV",{class:!0});var $=v(s);l=k($,"DIV",{class:!0});var B=v(l);a=k(B,"IMG",{class:!0,src:!0,alt:!0}),u=D(B),E=k(B,"A",{href:!0});var ie=v(E);m=S(ie,"Chris Vail"),ie.forEach(h),B.forEach(h),x=D($),Q(_.$$.fragment,$),w=D($),d=k($,"NAV",{class:!0});var ce=v(d);V=k(ce,"UL",{class:!0});var fe=v(V);for(let te=0;te<C.length;te+=1)C[te].l(fe);fe.forEach(h),ce.forEach(h),$.forEach(h),O=D(T),y&&y.l(T),T.forEach(h),I.forEach(h),this.h()},h(){f(a,"class","h-8 w-8"),$e(a.src,r="/icons/logo.svg")||f(a,"src",r),f(a,"alt","logo"),f(E,"href","/"),f(l,"class","font-bold text-2xl dark:text-slate-100 flex gap-4 items-center"),f(V,"class","flex gap-8 text-slate-900 dark:text-slate-200 font-bold"),f(d,"class","hidden md:block"),f(s,"class","flex justify-between max-w-3xl w-full self-center"),f(c,"class","absolute w-full top-0 flex flex-col justify-center py-4 bg-slate-100 dark:bg-zinc-700 dark:bg-opacity-30 bg-opacity-60 backdrop-blur-md backdrop-saturate-150 z-50"),f(i,"class","sticky -top-1 ease-out duration-300 translate-y-0 z-50 pb-14"),G(()=>o[9].call(i)),Y(i,"motion-safe:-translate-y-full",o[3])},m(g,I){L(g,i,I),p(i,c),p(c,s),p(s,l),p(l,a),p(l,u),p(l,E),p(E,m),p(s,x),X(_,s,null),p(s,w),p(s,d),p(d,V);for(let T=0;T<C.length;T+=1)C[T].m(V,null);p(c,O),y&&y.m(c,null),N=xe(i,o[9].bind(i)),j=!0,ee||(oe=ne(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),o[6]()}),ee=!0)},p(g,[I]){I&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,g[0]),n=setTimeout(t,100));const T={};if(I&4&&(T.open=g[2]),I&4&&(T.onClick=g[7]),_.$set(T),I&16){H=g[4];let $;for($=0;$<H.length;$+=1){const B=ge(g,H,$);C[$]?C[$].p(B,I):(C[$]=ve(B),C[$].c(),C[$].m(V,null))}for(;$<C.length;$+=1)C[$].d(1);C.length=H.length}g[2]?y?(y.p(g,I),I&4&&F(y,1)):(y=be(g),y.c(),F(y,1),y.m(c,null)):y&&(ae(),A(y,1,1,()=>{y=null}),re()),(!j||I&8)&&Y(i,"motion-safe:-translate-y-full",g[3])},i(g){j||(F(_.$$.fragment,g),F(y),j=!0)},o(g){A(_.$$.fragment,g),A(y),j=!1},d(g){g&&h(i),Z(_),se(C,g),y&&y.d(),N(),ee=!1,oe()}}}function qe(o,e,t){let n,i,c=[{name:"Home",url:"/"},{name:"About",url:"/#about"},{name:"Projects",url:"/#projects"}],s,l,a;const r=w=>{const d=!l||l<w?"down":"up";return l=w,d};let u=!1;function E(){t(0,s=window.pageYOffset)}const m=()=>t(2,u=!u),x=()=>t(2,u=!1);function _(){a=this.clientHeight,t(1,a)}return o.$$.update=()=>{o.$$.dirty&1&&t(5,n=r(s)),o.$$.dirty&39&&t(3,i=n==="down"&&s>a*5&&!u)},[s,a,u,i,c,n,E,m,x,_]}class Me extends W{constructor(e){super(),J(this,e,qe,Ue,q,{})}}function we(o){let e,t,n,i,c,s;e=new Me({});const l=o[4].default,a=Ce(l,o,o[3],null);return{c(){K(e.$$.fragment),t=z(),n=b("div"),a&&a.c(),this.h()},l(r){Q(e.$$.fragment,r),t=D(r),n=k(r,"DIV",{class:!0});var u=v(n);a&&a.l(u),u.forEach(h),this.h()},h(){f(n,"class","min-h-[100vh] overflow-hidden flex flex-col bg-white dark:bg-zinc-800 dark:text-slate-100 text-slate-700 items-center font-sans -mt-16")},m(r,u){X(e,r,u),L(r,t,u),L(r,n,u),a&&a.m(n,null),s=!0},p(r,u){a&&a.p&&(!s||u&8)&&Ve(a,l,r,r[3],s?Fe(l,r[3],u,null):Ie(r[3]),null)},i(r){s||(F(e.$$.fragment,r),F(a,r),G(()=>{c&&c.end(1),i=Te(n,_e,{duration:300,y:200,delay:500}),i.start()}),s=!0)},o(r){A(e.$$.fragment,r),A(a,r),i&&i.invalidate(),c=ze(n,_e,{duration:300,y:-200}),s=!1},d(r){Z(e,r),r&&h(t),r&&h(n),a&&a.d(r),r&&c&&c.end()}}}function Re(o){let e,t=o[0],n,i,c,s,l=we(o);return i=new He({}),{c(){e=b("div"),l.c(),n=z(),K(i.$$.fragment),this.h()},l(a){e=k(a,"DIV",{class:!0});var r=v(e);l.l(r),n=D(r),Q(i.$$.fragment,r),r.forEach(h),this.h()},h(){f(e,"class",c=o[1]?"dark":"")},m(a,r){L(a,e,r),l.m(e,null),p(e,n),X(i,e,null),s=!0},p(a,[r]){r&1&&q(t,t=a[0])?(ae(),A(l,1,1,U),re(),l=we(a),l.c(),F(l,1),l.m(e,n)):l.p(a,r),(!s||r&2&&c!==(c=a[1]?"dark":""))&&f(e,"class",c)},i(a){s||(F(l),F(i.$$.fragment,a),s=!0)},o(a){A(l),A(i.$$.fragment,a),s=!1},d(a){a&&h(e),l.d(a),Z(i)}}}function Ye(o,e,t){let n,i,c;le(o,je,a=>t(2,i=a)),le(o,Le,a=>t(1,c=a));let{$$slots:s={},$$scope:l}=e;return o.$$set=a=>{"$$scope"in a&&t(3,l=a.$$scope)},o.$$.update=()=>{o.$$.dirty&4&&t(0,n=i.url.pathname)},[n,c,i,l,s]}class Ke extends W{constructor(e){super(),J(this,e,Ye,Re,q,{})}}export{Ke as default};
