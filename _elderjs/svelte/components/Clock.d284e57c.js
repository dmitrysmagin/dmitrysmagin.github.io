import{S as s,i as t,s as e,a as r,e as a,c as n,b as c,d as l,f as o,g as f,n as i,h,j as y,o as m}from"../index-1f4e06c7.js";function u(s,t,e){const r=s.slice();return r[4]=t[e],r}function v(s,t,e){const r=s.slice();return r[7]=t[e],r}function d(s){let t,e;return{c(){t=r("line"),this.h()},l(s){t=n(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),c(t).forEach(l),this.h()},h(){o(t,"class","minor svelte-7fcxns"),o(t,"y1","42"),o(t,"y2","45"),o(t,"transform",e="rotate("+6*(s[4]+s[7])+")")},m(s,e){f(s,t,e)},p:i,d(s){s&&l(t)}}}function x(s){let t,e,y,m=[1,2,3,4],u=[];for(let t=0;t<4;t+=1)u[t]=d(v(s,m,t));return{c(){t=r("line");for(let s=0;s<4;s+=1)u[s].c();y=a(),this.h()},l(s){t=n(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),c(t).forEach(l);for(let t=0;t<4;t+=1)u[t].l(s);y=a(),this.h()},h(){o(t,"class","major svelte-7fcxns"),o(t,"y1","35"),o(t,"y2","45"),o(t,"transform",e="rotate("+30*s[4]+")")},m(s,e){f(s,t,e);for(let t=0;t<4;t+=1)u[t].m(s,e);f(s,y,e)},p:i,d(s){s&&l(t),h(u,s),s&&l(y)}}}function g(s){let t,e,a,m,v,d,g,E,$,p,w=[0,5,10,15,20,25,30,35,40,45,50,55],j=[];for(let t=0;t<12;t+=1)j[t]=x(u(s,w,t));return{c(){t=r("svg"),e=r("circle");for(let s=0;s<12;s+=1)j[s].c();a=r("line"),v=r("line"),g=r("g"),E=r("line"),$=r("line"),this.h()},l(s){t=n(s,"svg",{viewBox:!0,class:!0});var r=c(t);e=n(r,"circle",{class:!0,r:!0}),c(e).forEach(l);for(let s=0;s<12;s+=1)j[s].l(r);a=n(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),c(a).forEach(l),v=n(r,"line",{class:!0,y1:!0,y2:!0,transform:!0}),c(v).forEach(l),g=n(r,"g",{transform:!0});var o=c(g);E=n(o,"line",{class:!0,y1:!0,y2:!0}),c(E).forEach(l),$=n(o,"line",{class:!0,y1:!0,y2:!0}),c($).forEach(l),o.forEach(l),r.forEach(l),this.h()},h(){o(e,"class","clock-face svelte-7fcxns"),o(e,"r","48"),o(a,"class","hour svelte-7fcxns"),o(a,"y1","2"),o(a,"y2","-20"),o(a,"transform",m="rotate("+(30*s[2]+s[1]/2)+")"),o(v,"class","minute svelte-7fcxns"),o(v,"y1","4"),o(v,"y2","-30"),o(v,"transform",d="rotate("+(6*s[1]+s[0]/10)+")"),o(E,"class","second svelte-7fcxns"),o(E,"y1","10"),o(E,"y2","-38"),o($,"class","second-counterweight svelte-7fcxns"),o($,"y1","10"),o($,"y2","2"),o(g,"transform",p="rotate("+6*s[0]+")"),o(t,"viewBox","-50 -50 100 100"),o(t,"class","svelte-7fcxns")},m(s,r){f(s,t,r),y(t,e);for(let s=0;s<12;s+=1)j[s].m(t,null);y(t,a),y(t,v),y(t,g),y(g,E),y(g,$)},p(s,[t]){6&t&&m!==(m="rotate("+(30*s[2]+s[1]/2)+")")&&o(a,"transform",m),3&t&&d!==(d="rotate("+(6*s[1]+s[0]/10)+")")&&o(v,"transform",d),1&t&&p!==(p="rotate("+6*s[0]+")")&&o(g,"transform",p)},i:i,o:i,d(s){s&&l(t),h(j,s)}}}function E(s,t,e){let r,a,n,c=new Date;return m((()=>{const s=setInterval((()=>{e(3,c=new Date)}),1e3);return()=>{clearInterval(s)}})),s.$$.update=()=>{8&s.$$.dirty&&e(2,r=c.getHours()),8&s.$$.dirty&&e(1,a=c.getMinutes()),8&s.$$.dirty&&e(0,n=c.getSeconds())},[n,a,r,c]}class $ extends s{constructor(s){super(),t(this,s,E,g,e,{})}}export{$ as default};