import{f as w,p as h,c as m,n as d,h as A,s as b}from"./index._7pm6n94.js";const g=/[#.]/g;function x(t,e){const r=t||"",n={};let o=0,a,i;for(;o<r.length;){g.lastIndex=o;const f=g.exec(r),c=r.slice(o,f?f.index:r.length);c&&(a?a==="#"?n.id=c:Array.isArray(n.className)?n.className.push(c):n.className=[c]:i=c,o+=c.length),f&&(a=f[0],o++)}return{type:"element",tagName:i||e||"div",properties:n,children:[]}}const p={}.hasOwnProperty;function N(t,e,r){const n=r&&M(r);function o(a,i,...f){let c=-1,s;if(a==null){s={type:"root",children:[]};const l=i;f.unshift(l)}else if(s=x(a,e),s.tagName=s.tagName.toLowerCase(),n&&p.call(n,s.tagName)&&(s.tagName=n[s.tagName]),C(i))f.unshift(i);else{let l;for(l in i)p.call(i,l)&&j(t,s.properties,l,i[l])}for(;++c<f.length;)y(s.children,f[c]);return s.type==="element"&&s.tagName==="template"&&(s.content={type:"root",children:s.children},s.children=[]),s}return o}function C(t){if(t===null||typeof t!="object"||Array.isArray(t))return!0;if(typeof t.type!="string")return!1;const e=t,r=Object.keys(t);for(const n of r){const o=e[n];if(o&&typeof o=="object"){if(!Array.isArray(o))return!0;const a=o;for(const i of a)if(typeof i!="number"&&typeof i!="string")return!0}}return!!("children"in t&&Array.isArray(t.children))}function j(t,e,r,n){const o=w(t,r);let a=-1,i;if(n!=null){if(typeof n=="number"){if(Number.isNaN(n))return;i=n}else typeof n=="boolean"?i=n:typeof n=="string"?o.spaceSeparated?i=h(n):o.commaSeparated?i=m(n):o.commaOrSpaceSeparated?i=h(m(n).join(" ")):i=u(o,o.property,n):Array.isArray(n)?i=n.concat():i=o.property==="style"?S(n):String(n);if(Array.isArray(i)){const f=[];for(;++a<i.length;){const c=u(o,o.property,i[a]);f[a]=c}i=f}if(o.property==="className"&&Array.isArray(e.className)){const f=i;i=e.className.concat(f)}e[o.property]=i}}function y(t,e){let r=-1;if(e!=null)if(typeof e=="string"||typeof e=="number")t.push({type:"text",value:String(e)});else if(Array.isArray(e))for(;++r<e.length;)y(t,e[r]);else if(typeof e=="object"&&"type"in e)e.type==="root"?y(t,e.children):t.push(e);else throw new Error("Expected node, nodes, or string, got `"+e+"`")}function u(t,e,r){if(typeof r=="string"){if(t.number&&r&&!Number.isNaN(Number(r)))return Number(r);if((t.boolean||t.overloadedBoolean)&&(r===""||d(r)===d(e)))return!0}return r}function S(t){const e=[];let r;for(r in t)p.call(t,r)&&e.push([r,t[r]].join(": "));return e.join("; ")}function M(t){const e={};let r=-1;for(;++r<t.length;)e[t[r].toLowerCase()]=t[r];return e}const G=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],P=N(A,"div"),k=N(b,"g",G),D={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};export{P as h,k as s,D as w};
