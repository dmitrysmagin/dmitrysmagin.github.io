import{S as n,i as t,s as e,k as r,l as s,t as a,e as o,q as u,m as i,b as c,d as h,p as d,r as l,u as p,f,y as b,j as y,g as m,n as v}from"../index-6f65841d.js";function g(n){let t,e,g,_,k,S,E,j,T,w,q,P,x,U,A,N,L,O,R,C,I,B,V=function(n){let t,e;return{c(){t=r("script"),e=a("(function() {\r\n            const hash = document.currentScript.getAttribute('hash');\r\n            const self = document.querySelector(`div[hash=\"${hash}\"]`);\r\n\r\n            var snake = new game(self.querySelector('#game'));\r\n\r\n            var button_run = self.querySelector('#button_run');\r\n            var button_stop = self.querySelector('#button_stop');\r\n\r\n            button_run.addEventListener('click', function() {\r\n                if (!snake.running) {\r\n                    snake.run();\r\n                    button_run.style.display = 'none';\r\n                    button_stop.style.display = null;\r\n                }\r\n            });\r\n\r\n            button_stop.addEventListener('click', function() {\r\n                if (snake.running) {\r\n                    snake.stop();\r\n                    button_run.style.display = null;\r\n                    button_stop.style.display = 'none';\r\n                }\r\n            });\r\n        })();"),this.h()},l(n){t=i(n,"SCRIPT",{hash:!0});var r=c(t);e=l(r,"(function() {\r\n            const hash = document.currentScript.getAttribute('hash');\r\n            const self = document.querySelector(`div[hash=\"${hash}\"]`);\r\n\r\n            var snake = new game(self.querySelector('#game'));\r\n\r\n            var button_run = self.querySelector('#button_run');\r\n            var button_stop = self.querySelector('#button_stop');\r\n\r\n            button_run.addEventListener('click', function() {\r\n                if (!snake.running) {\r\n                    snake.run();\r\n                    button_run.style.display = 'none';\r\n                    button_stop.style.display = null;\r\n                }\r\n            });\r\n\r\n            button_stop.addEventListener('click', function() {\r\n                if (snake.running) {\r\n                    snake.stop();\r\n                    button_run.style.display = null;\r\n                    button_stop.style.display = 'none';\r\n                }\r\n            });\r\n        })();"),r.forEach(h),this.h()},h(){f(t,"hash",n[0])},m(n,r){m(n,t,r),y(t,e)},p:v,d(n){n&&h(t)}}}(n);return{c(){t=r("script"),g=s(),_=r("div"),k=r("p"),S=a("This game is taken from: "),E=r("a"),j=a("here"),T=a('.\r\n        This is an example of how js code could be added into the static page created with Elder.js and Svelte.\r\n        Usually components are either static or hydrated, but there\'s a "third" way to use js code in a static\r\n        component.'),w=s(),q=r("p"),P=a("Press button to run js code!"),x=s(),U=r("canvas"),A=s(),N=r("button"),L=a("RUN"),O=s(),R=r("button"),C=a("STOP"),I=s(),V&&V.c(),B=o(),this.h()},l(n){const e=u('[data-svelte="svelte-y9te5s"]',document.head);t=i(e,"SCRIPT",{src:!0}),c(t).forEach(h),e.forEach(h),g=d(n),_=i(n,"DIV",{hash:!0,style:!0});var r=c(_);k=i(r,"P",{});var s=c(k);S=l(s,"This game is taken from: "),E=i(s,"A",{href:!0});var a=c(E);j=l(a,"here"),a.forEach(h),T=l(s,'.\r\n        This is an example of how js code could be added into the static page created with Elder.js and Svelte.\r\n        Usually components are either static or hydrated, but there\'s a "third" way to use js code in a static\r\n        component.'),s.forEach(h),w=d(r),q=i(r,"P",{});var p=c(q);P=l(p,"Press button to run js code!"),p.forEach(h),x=d(r),U=i(r,"CANVAS",{width:!0,height:!0,id:!0,style:!0}),c(U).forEach(h),A=d(r),N=i(r,"BUTTON",{id:!0});var f=c(N);L=l(f,"RUN"),f.forEach(h),O=d(r),R=i(r,"BUTTON",{id:!0,style:!0});var b=c(R);C=l(b,"STOP"),b.forEach(h),r.forEach(h),I=d(n),V&&V.l(n),B=o(),this.h()},h(){p(t.src,e="/js/snake.js")||f(t,"src","/js/snake.js"),f(E,"href","https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4"),f(U,"width","400"),f(U,"height","400"),f(U,"id","game"),b(U,"display","none"),f(N,"id","button_run"),f(R,"id","button_stop"),b(R,"display","none"),f(_,"hash",n[0]),b(_,"text-align","center")},m(n,e){y(document.head,t),m(n,g,e),m(n,_,e),y(_,k),y(k,S),y(k,E),y(E,j),y(k,T),y(_,w),y(_,q),y(q,P),y(_,x),y(_,U),y(_,A),y(_,N),y(N,L),y(_,O),y(_,R),y(R,C),m(n,I,e),V&&V.m(n,e),m(n,B,e)},p(n,[t]){},i:v,o:v,d(n){h(t),n&&h(g),n&&h(_),n&&h(I),V&&V.d(n),n&&h(B)}}}function _(n){return[(Math.random()+1).toString(36).substring(7)]}class k extends n{constructor(n){super(),t(this,n,_,g,e,{})}}export{k as default};
