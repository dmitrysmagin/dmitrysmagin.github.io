import{S as s,i as t,s as r,m as e,o as a,p as l,b as o,f as n,h as c,j as h,n as i,q as f,k as y,r as m}from"../index-227b08db.js";function u(s,t,r){const e=s.slice();return e[4]=t[r],e}function v(s,t,r){const e=s.slice();return e[7]=t[r],e}function d(s){let t;return{c(){t=e("line"),this.h()},l(s){t=l(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(t).forEach(n),this.h()},h(){c(t,"class","minor svelte-1bjhkah"),c(t,"y1","42"),c(t,"y2","45"),c(t,"transform","rotate("+6*(s[4]+s[7])+")")},m(s,r){h(s,t,r)},d(s){s&&n(t)}}}function b(s){let t,r,y=[1,2,3,4],m=[];for(let t=0;t<4;t+=1)m[t]=d(v(s,y,t));return{c(){t=e("line");for(let s=0;s<4;s+=1)m[s].c();r=a(),this.h()},l(s){t=l(s,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(t).forEach(n);for(let t=0;t<4;t+=1)m[t].l(s);r=a(),this.h()},h(){c(t,"class","major svelte-1bjhkah"),c(t,"y1","35"),c(t,"y2","45"),c(t,"transform","rotate("+30*s[4]+")")},m(s,e){h(s,t,e);for(let t=0;t<4;t+=1)m[t].m(s,e);h(s,r,e)},p:i,d(s){s&&n(t),f(m,s),s&&n(r)}}}function j(s){let t,r,a,m,v,d,j,k,E,g,$=[0,5,10,15,20,25,30,35,40,45,50,55],p=[];for(let t=0;t<12;t+=1)p[t]=b(u(s,$,t));return{c(){t=e("svg"),r=e("circle");for(let s=0;s<12;s+=1)p[s].c();a=e("line"),v=e("line"),j=e("g"),k=e("line"),E=e("line"),this.h()},l(s){t=l(s,"svg",{viewBox:!0,class:!0});var e=o(t);r=l(e,"circle",{class:!0,r:!0}),o(r).forEach(n);for(let s=0;s<12;s+=1)p[s].l(e);a=l(e,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(a).forEach(n),v=l(e,"line",{class:!0,y1:!0,y2:!0,transform:!0}),o(v).forEach(n),j=l(e,"g",{transform:!0});var c=o(j);k=l(c,"line",{class:!0,y1:!0,y2:!0}),o(k).forEach(n),E=l(c,"line",{class:!0,y1:!0,y2:!0}),o(E).forEach(n),c.forEach(n),e.forEach(n),this.h()},h(){c(r,"class","clock-face svelte-1bjhkah"),c(r,"r","48"),c(a,"class","hour svelte-1bjhkah"),c(a,"y1","2"),c(a,"y2","-20"),c(a,"transform",m="rotate("+(30*s[2]+s[1]/2)+")"),c(v,"class","minute svelte-1bjhkah"),c(v,"y1","4"),c(v,"y2","-30"),c(v,"transform",d="rotate("+(6*s[1]+s[0]/10)+")"),c(k,"class","second svelte-1bjhkah"),c(k,"y1","10"),c(k,"y2","-38"),c(E,"class","second-counterweight svelte-1bjhkah"),c(E,"y1","10"),c(E,"y2","2"),c(j,"transform",g="rotate("+6*s[0]+")"),c(t,"viewBox","-50 -50 100 100"),c(t,"class","svelte-1bjhkah")},m(s,e){h(s,t,e),y(t,r);for(let s=0;s<12;s+=1)p[s].m(t,null);y(t,a),y(t,v),y(t,j),y(j,k),y(j,E)},p(s,[t]){6&t&&m!==(m="rotate("+(30*s[2]+s[1]/2)+")")&&c(a,"transform",m),3&t&&d!==(d="rotate("+(6*s[1]+s[0]/10)+")")&&c(v,"transform",d),1&t&&g!==(g="rotate("+6*s[0]+")")&&c(j,"transform",g)},i:i,o:i,d(s){s&&n(t),f(p,s)}}}function k(s,t,r){let e,a,l,o=new Date;return m((()=>{const s=setInterval((()=>{r(3,o=new Date)}),1e3);return()=>{clearInterval(s)}})),s.$$.update=()=>{8&s.$$.dirty&&r(2,e=o.getHours()),8&s.$$.dirty&&r(1,a=o.getMinutes()),8&s.$$.dirty&&r(0,l=o.getSeconds())},[l,a,e,o]}export default class extends s{constructor(s){super(),t(this,s,k,j,r,{})}}
