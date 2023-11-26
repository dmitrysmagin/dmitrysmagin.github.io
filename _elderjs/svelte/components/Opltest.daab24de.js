import{S as e,i as t,s as a,k as s,l as n,t as r,m as o,p as i,q as l,d as c,r as d,b as u,u as p,e as f,v as h,g as m,f as v,w as x,x as T,n as y,y as C,o as j}from"../index-419d15d0.js";function w(e){let t,a,j,w,L,P,b,g,E,U,I,O,B,D,F,H,k,M,N,S,V,A,R,q,$="OPL3 emulation test",z='This is a demo of <a href="https://github.com/doomjs/opl3">Doomjs&#39;s OPL3 emulation engine.</a>',G="Select a file:",J="Stop",K="Pause",Q="Resume";return{c(){t=s("script"),t.innerHTML="",j=n(),w=s("div"),L=s("h2"),L.textContent=$,P=n(),b=s("p"),b.innerHTML=z,g=n(),E=s("div"),U=r(e[1]),I=n(),O=s("div"),B=s("label"),B.textContent=G,D=n(),F=s("input"),H=n(),k=s("div"),M=s("button"),M.textContent=J,N=n(),S=s("button"),S.textContent=K,V=n(),A=s("button"),A.textContent=Q,this.h()},l(a){const s=o("svelte-dp4agw",document.head);t=i(s,"SCRIPT",{id:!0,type:!0,src:!0,"data-svelte-h":!0}),"svelte-z0ic5t"!==l(t)&&(t.innerHTML=""),s.forEach(c),j=d(a),w=i(a,"DIV",{});var n=u(w);L=i(n,"H2",{"data-svelte-h":!0}),"svelte-18ah2fw"!==l(L)&&(L.textContent=$),P=d(n),b=i(n,"P",{"data-svelte-h":!0}),"svelte-1j5557p"!==l(b)&&(b.innerHTML=z),g=d(n),E=i(n,"DIV",{});var r=u(E);U=p(r,e[1]),r.forEach(c),I=d(n),O=i(n,"DIV",{});var f=u(O);B=i(f,"LABEL",{for:!0,"data-svelte-h":!0}),"svelte-11tm58a"!==l(B)&&(B.textContent=G),D=d(f),F=i(f,"INPUT",{type:!0,id:!0,name:!0,accept:!0}),f.forEach(c),H=d(n),k=i(n,"DIV",{});var h=u(k);M=i(h,"BUTTON",{"data-svelte-h":!0}),"svelte-1m7ya2q"!==l(M)&&(M.textContent=J),N=d(h),S=i(h,"BUTTON",{"data-svelte-h":!0}),"svelte-j81s3e"!==l(S)&&(S.textContent=K),V=d(h),A=i(h,"BUTTON",{"data-svelte-h":!0}),"svelte-1gywy6e"!==l(A)&&(A.textContent=Q),h.forEach(c),n.forEach(c),this.h()},h(){f(t,"id","opl3"),f(t,"type","text/javascript"),h(t.src,a="/js/opl3.js")||f(t,"src","/js/opl3.js"),f(B,"for","fileUpload"),f(F,"type","file"),f(F,"id","fileUpload"),f(F,"name","fileUpload"),f(F,"accept",".rad,.raw,.dro,.laa,.mus,.imf")},m(a,s){m(document.head,t),v(a,j,s),v(a,w,s),m(w,L),m(w,P),m(w,b),m(w,g),m(w,E),m(E,U),m(w,I),m(w,O),m(O,B),m(O,D),m(O,F),m(w,H),m(w,k),m(k,M),m(k,N),m(k,S),m(k,V),m(k,A),R||(q=[x(F,"change",e[3]),x(M,"click",e[4]),x(S,"click",e[5]),x(A,"click",e[6])],R=!0)},p(e,[t]){2&t&&T(U,e[1])},i:y,o:y,d(e){e&&(c(j),c(w)),c(t),R=!1,C(q)}}}function L(e,t,a){let s,n="";async function r(e){if(e instanceof FileList&&e.length){var t=e[0],a=await function(e){const t=new FileReader;return new Promise(((a,s)=>{t.onerror=()=>{t.abort(),s(new Error("Problem parsing input file"))},t.onload=()=>{a(t.result)},t.readAsArrayBuffer(e)}))}(t);s.play(a)}}j((()=>{a(0,s=new OPL3.Player(null,{prebuffer:3e3,volume:4})),s.on("currentTime",(e=>{a(1,n=`currentFrame: ${e.currentFrame}, currentTime: ${e.currentTime.toFixed(2)} s`)}))}));return[s,n,r,e=>r(e.target.files),()=>s.stop(),()=>s.pause(),()=>s.resume()]}class P extends e{constructor(e){super(),t(this,e,L,w,a,{})}}export{P as default};
