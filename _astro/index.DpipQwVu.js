const k=function(n){if(n==null)return P;if(typeof n=="function")return p(n);if(typeof n=="object")return Array.isArray(n)?E(n):N(n);if(typeof n=="string")return F(n);throw new Error("Expected function, string, or object as test")};function E(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=k(n[t]);return p(r);function r(...c){let i=-1;for(;++i<e.length;)if(e[i].apply(this,c))return!0;return!1}}function N(n){const e=n;return p(t);function t(r){const c=r;let i;for(i in n)if(c[i]!==e[i])return!1;return!0}}function F(n){return p(e);function e(t){return t&&t.type===n}}function p(n){return e;function e(t,r,c){return!!(x(t)&&n.call(this,t,typeof r=="number"?r:void 0,c||void 0))}}function P(){return!0}function x(n){return n!==null&&typeof n=="object"&&"type"in n}const A=[],I=!0,b=!1,R="skip";function S(n,e,t,r){let c;typeof e=="function"&&typeof t!="function"?(r=t,t=e):c=e;const i=k(c),d=r?-1:1;h(n,void 0,[])();function h(o,j,a){const l=o&&typeof o=="object"?o:{};if(typeof l.type=="string"){const f=typeof l.tagName=="string"?l.tagName:typeof l.name=="string"?l.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(o.type+(f?"<"+f+">":""))+")"})}return g;function g(){let f=A,y,u,m;if((!e||i(o,j,a[a.length-1]||void 0))&&(f=O(t(o,a)),f[0]===b))return f;if("children"in o&&o.children){const s=o;if(s.children&&f[0]!==R)for(u=(r?s.children.length:-1)+d,m=a.concat(s);u>-1&&u<s.children.length;){const w=s.children[u];if(y=h(w,u,m)(),y[0]===b)return y;u=typeof y[1]=="number"?y[1]:u+d}}return f}}}function O(n){return Array.isArray(n)?n:typeof n=="number"?[I,n]:n==null?A:[n]}export{b as E,R as S,k as c,S as v};
