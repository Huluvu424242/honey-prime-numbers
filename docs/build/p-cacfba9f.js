let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!u(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?$(null,l):l),o=s)};c(n);const i=$(e,null);return i.u=t,r.length>0&&(i.$=r),i},$=(e,t)=>({t:0,h:e,i:t,p:null,$:null}),d={},h=(t,n,l)=>{let o,r,c=n.$[l],i=0;if(null!==c.i)o=c.p=s.createTextNode(c.i);else if(o=c.p=s.createElement(c.h),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=h(t,c,i),r&&o.appendChild(r);return o},y=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=h(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},p=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},m=(e,t)=>e.h===t.h,w=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;o<=c&&r<=u;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:m(i,f)?(w(i,f),i=t[++o],f=l[++r]):m(a,$)?(w(a,$),a=t[--c],$=l[--u]):m(i,$)?(w(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],$=l[--u]):m(a,f)?(w(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=l[++r]):(s=h(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?y(e,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&p(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),y(n,null,t,s,0,s.length-1)):null!==l&&p(l,0,l.length-1):e.i!==o&&(n.data=o)},b=e=>F(e).m,S=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return S(e,e.g),G((()=>v(e,t)));e.t|=512},v=(e,t)=>{const n=e.v;return O(void 0,(()=>M(e,n,t)))},M=async(e,t,n)=>{const l=e.m,o=l["s-rc"];n&&(e=>{const t=e.M,n=e.m,l=t.t,o=((e,t)=>{let n=a(t),l=H.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);j(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>k(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},j=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.m,o=n.j||$(null,null),r=(e=>e&&e.h===d)(l)?l:f(null,null,l);t=s.tagName,r.h=null,r.t|=4,n.j=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],w(o,r)})(n,l)}catch(e){U(e,n.m)}return null},k=e=>{const t=e.m,n=e.g;64&e.t||(e.t|=64,P(t),e.k(t),n||C()),e.S&&(e.S(),e.S=void 0),512&e.t&&D((()=>g(e,!1))),e.t&=-517},C=()=>{P(s.documentElement),D((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"honey-prime-numbers"}});return e.dispatchEvent(t),t})(l)))},O=(e,t)=>e&&e.then?e.then(t):t(),P=e=>e.classList.add("hydrated"),x=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>F(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=F(e),o=s.O.get(t),r=s.t,c=s.v;n=((e,t)=>null==e||u(e)?e:2&t?parseFloat(e):e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||(s.O.set(t,n),c&&2==(18&r)&&g(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);this.hasOwnProperty(n)&&(l=this[n],delete this[n]),this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},E=e=>{((e,t)=>{if(e&&e[t])try{e[t](void 0)}catch(e){U(e)}})(e,"connectedCallback")},T=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let h,y=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,u=class extends HTMLElement{constructor(e){super(e),R(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),y?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=F(e),n=t.M,l=()=>{};if(1&t.t)E(t.v);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){S(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=q(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(x(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){U(e)}t.t&=-9,e(),E(t.v)}if(s.style){let e=s.style;const t=a(n);if(!H.has(t)){const l=()=>{};((e,t,n)=>{let l=H.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,H.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,r=()=>g(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return F(this).T}};l.A=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,x(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(C,30)))},A=new WeakMap,F=e=>A.get(e),L=(e,t)=>A.set(t.v=e,t),R=(e,t)=>{const n={t:0,m:e,M:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],A.set(e,n)},U=(e,t)=>(0,console.error)(e,t),W=new Map,q=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=W.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(W.set(n,e),e[t])),U)},H=new Map,N=[],V=[],_=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?D(B):o.raf(B))},z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){U(e)}e.length=0},B=()=>{z(N),z(V),(n=N.length>0)&&o.raf(B)},D=e=>r().then(e),G=_(V,!0);export{T as b,U as c,b as g,f as h,r as p,L as r}