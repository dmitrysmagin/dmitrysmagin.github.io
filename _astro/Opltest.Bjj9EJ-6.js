/* empty css                      */function D(){}function pe(e){return e()}function fe(){return Object.create(null)}function U(e){e.forEach(pe)}function ge(e){return typeof e=="function"}function ve(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}let Q=!1;function ke(){Q=!0}function Se(){Q=!1}function Me(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function Be(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let f=0;f<t.length;f++){const d=t[f];d.claim_order!==void 0&&c.push(d)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let c=0;c<t.length;c++){const f=t[c].claim_order,d=(l>0&&t[n[l]].claim_order<=f?l+1:Me(1,l,a=>t[n[a]].claim_order,f))-1;i[c]=n[d]+1;const u=d+1;n[u]=c,l=Math.max(u,l)}const o=[],r=[];let s=t.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(o.push(t[c-1]);s>=c;s--)r.push(t[s]);s--}for(;s>=0;s--)r.push(t[s]);o.reverse(),r.sort((c,f)=>c.claim_order-f.claim_order);for(let c=0,f=0;c<r.length;c++){for(;f<o.length&&r[c].claim_order>=o[f].claim_order;)f++;const d=f<o.length?o[f]:null;e.insertBefore(r[c],d)}}function h(e,t){if(Q){for(Be(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function He(e,t,n){e.insertBefore(t,n||null)}function k(e,t,n){Q&&!n?h(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function Oe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function le(e){return document.createTextNode(e)}function w(){return le(" ")}function G(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return e.dataset.svelteH}function P(e){return Array.from(e.childNodes)}function xe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function be(e,t,n,i,l=!1){xe(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const c=n(s);return c===void 0?e.splice(r,1):e[r]=c,l||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const c=n(s);return c===void 0?e.splice(r,1):e[r]=c,l?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function Ie(e,t,n,i){return be(e,l=>l.nodeName===t,l=>{const o=[];for(let r=0;r<l.attributes.length;r++){const s=l.attributes[r];n[s.name]||o.push(s.name)}o.forEach(r=>l.removeAttribute(r))},()=>i(t))}function v(e,t,n){return Ie(e,t,n,p)}function we(e,t){return be(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>le(t),!0)}function $(e){return we(e," ")}function ae(e,t,n){for(let i=n;i<e.length;i+=1){const l=e[i];if(l.nodeType===8&&l.textContent.trim()===t)return i}return-1}function je(e,t){const n=ae(e,"HTML_TAG_START",0),i=ae(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new q(t);xe(e);const l=e.splice(n,i-n+1);g(l[0]),g(l[l.length-1]);const o=l.slice(1,l.length-1);if(o.length===0)return new q(t);for(const r of o)r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new q(t,o)}function De(e,t){t=""+t,e.data!==t&&(e.data=t)}class Fe{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(t=!1){this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=Oe(n.nodeName):this.e=p(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)He(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(g)}}class q extends Fe{l=void 0;constructor(t=!1,n){super(t),this.e=this.n=null,this.l=n}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)k(this.t,this.n[n],t)}}let F;function j(e){F=e}function Ue(){if(!F)throw new Error("Function called outside component initialization");return F}function Re(e){Ue().$$.on_mount.push(e)}const H=[],J=[];let O=[];const ue=[],Ve=Promise.resolve();let ne=!1;function ze(){ne||(ne=!0,Ve.then($e))}function ie(e){O.push(e)}const te=new Set;let B=0;function $e(){if(B!==0)return;const e=F;do{try{for(;B<H.length;){const t=H[B];B++,j(t),Ge(t.$$)}}catch(t){throw H.length=0,B=0,t}for(j(null),H.length=0,B=0;J.length;)J.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];te.has(n)||(te.add(n),n())}O.length=0}while(H.length);for(;ue.length;)ue.pop()();ne=!1,te.clear(),j(e)}function Ge(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function qe(e){const t=[],n=[];O.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),O=t}const W=new Set;let We;function Te(e,t){e&&e.i&&(W.delete(e),e.i(t))}function Je(e,t,n,i){if(e&&e.o){if(W.has(e))return;W.add(e),We.c.push(()=>{W.delete(e)}),e.o(t)}}function K(e){return e?.length!==void 0?e:Array.from(e)}function Ke(e){e&&e.c()}function Qe(e,t){e&&e.l(t)}function Ee(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),ie(()=>{const o=e.$$.on_mount.map(pe).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...o):U(o),e.$$.on_mount=[]}),l.forEach(ie)}function Ae(e,t){const n=e.$$;n.fragment!==null&&(qe(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(H.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,l,o,r=null,s=[-1]){const c=F;j(e);const f=e.$$={fragment:null,ctx:[],props:o,update:D,not_equal:l,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:fe(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};r&&r(f.root);let d=!1;if(f.ctx=n?n(e,t.props||{},(u,a,...y)=>{const T=y.length?y[0]:a;return f.ctx&&l(f.ctx[u],f.ctx[u]=T)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](T),d&&Xe(e,u)),a}):[],f.update(),d=!0,U(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){ke();const u=P(t.target);f.fragment&&f.fragment.l(u),u.forEach(g)}else f.fragment&&f.fragment.c();t.intro&&Te(e.$$.fragment),Ee(e,t.target,t.anchor),Se(),$e()}j(c)}class Ce{$$=void 0;$$set=void 0;$destroy(){Ae(this,1),this.$destroy=D}$on(t,n){if(!ge(n))return D;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);function de(e,t,n){const i=e.slice();return i[5]=t[n],i}function he(e,t,n){const i=e.slice();return i[8]=t[n],i[9]=t,i[10]=n,i}function _e(e){let t,n,i=e[8].contents+"",l=e[9],o=e[10];const r=()=>e[4](t,l,o),s=()=>e[4](null,l,o);return{c(){t=p("span"),n=new q(!1),this.h()},l(c){t=v(c,"SPAN",{class:!0});var f=P(t);n=je(f,!1),f.forEach(g),this.h()},h(){n.a=null,L(t,"class","cell svelte-1eu96vz")},m(c,f){k(c,t,f),n.m(i,t),r()},p(c,f){e=c,f&1&&i!==(i=e[8].contents+"")&&n.p(i),(l!==e[9]||o!==e[10])&&(s(),l=e[9],o=e[10],r())},d(c){c&&g(t),s()}}}function me(e){let t,n,i=K(e[5]),l=[];for(let o=0;o<i.length;o+=1)l[o]=_e(he(e,i,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=w(),n=p("br")},l(o){for(let r=0;r<l.length;r+=1)l[r].l(o);t=$(o),n=v(o,"BR",{})},m(o,r){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(o,r);k(o,t,r),k(o,n,r)},p(o,r){if(r&1){i=K(o[5]);let s;for(s=0;s<i.length;s+=1){const c=he(o,i,s);l[s]?l[s].p(c,r):(l[s]=_e(c),l[s].c(),l[s].m(t.parentNode,t))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},d(o){o&&(g(t),g(n)),ye(l,o)}}}function Ze(e){let t,n=K(e[0]),i=[];for(let l=0;l<n.length;l+=1)i[l]=me(de(e,n,l));return{c(){t=p("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){t=v(l,"DIV",{class:!0});var o=P(t);for(let r=0;r<i.length;r+=1)i[r].l(o);o.forEach(g),this.h()},h(){L(t,"class","text-matrix-container svelte-1eu96vz")},m(l,o){k(l,t,o);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(t,null)},p(l,[o]){if(o&1){n=K(l[0]);let r;for(r=0;r<n.length;r+=1){const s=de(l,n,r);i[r]?i[r].p(s,o):(i[r]=me(s),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},i:D,o:D,d(l){l&&g(t),ye(i,l)}}}function et(e,t,n){let{width:i=10,height:l=10}=t,o=Array(l).fill(0).map((c,f)=>Array(i).fill(0).map((d,u)=>({row:f,col:u,contents:"&nbsp;",element:null})));function r(c,f,d){if(typeof d=="string")for(let u=0;u<d.length;u++){let a=o[f][u+c];const y=d[u]!==" "?d[u]:"&nbsp;";a&&(a.contents=y),a&&a.element&&a.element.innerHTML&&(a.element.innerHTML=a.contents)}}r(0,0,"╭──────╮"),r(0,1,"│╱┤DLiB│"),r(0,2,"┏━━━━┳━STATUS▪▫▪ PPP│"),r(0,3,"┃▸00◂┃G-1 2B ▪▪▪ 203│"),r(0,4,"┃ 01 ┃··· •• ▪▪▪ 203│");function s(c,f,d){J[c?"unshift":"push"](()=>{f[d].element=c,n(0,o)})}return e.$$set=c=>{"width"in c&&n(1,i=c.width),"height"in c&&n(2,l=c.height)},[o,i,l,r,s]}class tt extends Ce{constructor(t){super(),Ne(this,t,et,Ze,ve,{width:1,height:2,printAscii:3})}get printAscii(){return this.$$.ctx[3]}}function nt(e){let t,n,i="OPL3 emulation test",l,o,r='This is a demo of <a href="https://github.com/doomjs/opl3">Doomjs&#39;s OPL3 emulation engine.</a>',s,c,f,d,u,a,y="Select a file:",T,E,X,x,A,re="Stop",Y,N,oe="Pause",Z,C,ce="Resume",R,b,I,ee,se,Le={width:36,height:10};return b=new tt({props:Le}),e[8](b),{c(){t=p("div"),n=p("h2"),n.textContent=i,l=w(),o=p("p"),o.innerHTML=r,s=w(),c=p("div"),f=le(e[2]),d=w(),u=p("div"),a=p("label"),a.textContent=y,T=w(),E=p("input"),X=w(),x=p("div"),A=p("button"),A.textContent=re,Y=w(),N=p("button"),N.textContent=oe,Z=w(),C=p("button"),C.textContent=ce,R=w(),Ke(b.$$.fragment),this.h()},l(_){t=v(_,"DIV",{});var m=P(t);n=v(m,"H2",{"data-svelte-h":!0}),M(n)!=="svelte-18ah2fw"&&(n.textContent=i),l=$(m),o=v(m,"P",{"data-svelte-h":!0}),M(o)!=="svelte-1j5557p"&&(o.innerHTML=r),s=$(m),c=v(m,"DIV",{});var V=P(c);f=we(V,e[2]),V.forEach(g),d=$(m),u=v(m,"DIV",{});var z=P(u);a=v(z,"LABEL",{for:!0,"data-svelte-h":!0}),M(a)!=="svelte-11tm58a"&&(a.textContent=y),T=$(z),E=v(z,"INPUT",{type:!0,id:!0,name:!0,accept:!0}),z.forEach(g),X=$(m),x=v(m,"DIV",{});var S=P(x);A=v(S,"BUTTON",{"data-svelte-h":!0}),M(A)!=="svelte-1m7ya2q"&&(A.textContent=re),Y=$(S),N=v(S,"BUTTON",{"data-svelte-h":!0}),M(N)!=="svelte-j81s3e"&&(N.textContent=oe),Z=$(S),C=v(S,"BUTTON",{"data-svelte-h":!0}),M(C)!=="svelte-1gywy6e"&&(C.textContent=ce),S.forEach(g),m.forEach(g),R=$(_),Qe(b.$$.fragment,_),this.h()},h(){L(a,"for","fileUpload"),L(E,"type","file"),L(E,"id","fileUpload"),L(E,"name","fileUpload"),L(E,"accept",".rad,.raw,.dro,.laa,.mus,.imf")},m(_,m){k(_,t,m),h(t,n),h(t,l),h(t,o),h(t,s),h(t,c),h(c,f),h(t,d),h(t,u),h(u,a),h(u,T),h(u,E),h(t,X),h(t,x),h(x,A),h(x,Y),h(x,N),h(x,Z),h(x,C),k(_,R,m),Ee(b,_,m),I=!0,ee||(se=[G(E,"change",e[4]),G(A,"click",e[5]),G(N,"click",e[6]),G(C,"click",e[7])],ee=!0)},p(_,[m]){(!I||m&4)&&De(f,_[2]);const V={};b.$set(V)},i(_){I||(Te(b.$$.fragment,_),I=!0)},o(_){Je(b.$$.fragment,_),I=!1},d(_){_&&(g(t),g(R)),e[8](null),Ae(b,_),ee=!1,U(se)}}}function it(e){const t=new FileReader;return new Promise((n,i)=>{t.onerror=()=>{t.abort(),i(new Error("Problem parsing input file"))},t.onload=()=>{n(t.result)},t.readAsArrayBuffer(e)})}function lt(e,t,n){let i,l,o="";async function r(a){if(a instanceof FileList&&a.length){var y=a[0],T=await it(y);l.play(T)}}Re(()=>{n(1,l=new OPL3.Player(null,{prebuffer:3e3,volume:4})),l.on("currentTime",a=>{n(2,o=`currentFrame: ${a.currentFrame}, currentTime: ${a.currentTime.toFixed(2)} s`)}),i.printAscii(0,5,"From outside")});const s=a=>r(a.target.files),c=()=>l.stop(),f=()=>l.pause(),d=()=>l.resume();function u(a){J[a?"unshift":"push"](()=>{i=a,n(0,i)})}return[i,l,o,r,s,c,f,d,u]}class ot extends Ce{constructor(t){super(),Ne(this,t,lt,nt,ve,{})}}export{ot as default};
