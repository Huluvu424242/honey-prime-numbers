let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),a=new WeakMap,i=e=>"sc-"+e.o,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!u(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?$(null,l):l),s=o)};c(n);const a=$(e,null);return a.u=t,r.length>0&&(a.$=r),a},$=(e,t)=>({t:0,p:e,i:t,h:null,$:null}),d={},y=(t,n,l)=>{let s,r,c=n.$[l],a=0;if(null!==c.i)s=c.h=o.createTextNode(c.i);else if(s=c.h=o.createElement(c.p),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(a=0;a<c.$.length;++a)r=y(t,c,a),r&&s.appendChild(r);return s},p=(e,n,l,o,s,r)=>{let c,a=e;for(a.shadowRoot&&a.tagName===t&&(a=a.shadowRoot);s<=r;++s)o[s]&&(c=y(null,l,s),c&&(o[s].h=c,a.insertBefore(c,n)))},h=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},m=(e,t)=>e.p===t.p,w=(e,t)=>{const n=t.h=e.h,l=e.$,o=t.$,s=t.i;null===s?null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,a=t[0],i=t[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==a?a=t[++s]:null==i?i=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:m(a,f)?(w(a,f),a=t[++s],f=l[++r]):m(i,$)?(w(i,$),i=t[--c],$=l[--u]):m(a,$)?(w(a,$),e.insertBefore(a.h,i.h.nextSibling),a=t[++s],$=l[--u]):m(i,f)?(w(i,f),e.insertBefore(i.h,a.h),i=t[--c],f=l[++r]):(o=y(t&&t[r],n,r),f=l[++r],o&&a.h.parentNode.insertBefore(o,a.h));s>c?p(e,null==l[u+1]?null:l[u+1].h,n,l,r,u):r>u&&h(t,s,c)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),p(n,null,t,o,0,o.length-1)):null!==l&&h(l,0,l.length-1):e.i!==s&&(n.data=s)},b=e=>F(e).m,S=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return S(e,e.g),G((()=>v(e,t)));e.t|=512},v=(e,t)=>{const n=e.v;return O(void 0,(()=>M(e,n,t)))},M=async(e,t,n)=>{const l=e.m,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.m,l=t.t,s=((e,t)=>{let n=i(t),l=H.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=a.get(e=e.head||e);s||a.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);j(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>k(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},j=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.m,s=n.j||$(null,null),r=(e=>e&&e.p===d)(l)?l:f(null,null,l);t=o.tagName,r.p=null,r.t|=4,n.j=r,r.h=s.h=o.shadowRoot||o,e=o["s-sc"],w(s,r)})(n,l)}catch(e){U(e,n.m)}return null},k=e=>{const t=e.m,n=e.g;64&e.t||(e.t|=64,P(t),e.k(t),n||C()),e.S&&(e.S(),e.S=void 0),512&e.t&&D((()=>g(e,!1))),e.t&=-517},C=()=>{P(o.documentElement),D((()=>(e=>{const t=s.ce("appload",{detail:{namespace:"honey-prime-numbers"}});return e.dispatchEvent(t),t})(l)))},O=(e,t)=>e&&e.then?e.then(t):t(),P=e=>e.classList.add("hydrated"),x=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>F(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=F(e),s=o.O.get(t),r=o.t,c=o.v;n=((e,t)=>null==e||u(e)?e:2&t?parseFloat(e):e)(n,l.C[t][0]),8&r&&void 0!==s||n===s||(o.O.set(t,n),c&&2==(18&r)&&g(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},E=e=>{((e,t)=>{if(e&&e[t])try{e[t](void 0)}catch(e){U(e)}})(e,"connectedCallback")},T=(e,t={})=>{const n=[],r=t.exclude||[],a=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let y,p=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const o=l.o,u=class extends HTMLElement{constructor(e){super(e),R(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),p?d.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=F(e),n=t.M,l=()=>{};if(1&t.t)E(t.v);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){S(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=q(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(x(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){U(e)}t.t&=-9,e(),E(t.v)}if(o.style){let e=o.style;const t=i(n);if(!H.has(t)){const l=()=>{};((e,t,n)=>{let l=H.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,H.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.g,r=()=>g(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return F(this).T}};l.A=e[0],r.includes(o)||a.get(o)||(n.push(o),a.define(o,x(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):s.jmp((()=>y=setTimeout(C,30)))},A=new WeakMap,F=e=>A.get(e),L=(e,t)=>A.set(t.v=e,t),R=(e,t)=>{const n={t:0,m:e,M:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],A.set(e,n)},U=(e,t)=>(0,console.error)(e,t),W=new Map,q=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=W.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(W.set(n,e),e[t])),U)},H=new Map,N=[],V=[],_=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?D(B):s.raf(B))},z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){U(e)}e.length=0},B=()=>{z(N),z(V),(n=N.length>0)&&s.raf(B)},D=e=>r().then(e),G=_(V,!0);export{T as b,U as c,b as g,f as h,r as p,L as r}