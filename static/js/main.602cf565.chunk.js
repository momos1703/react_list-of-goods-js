(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),o=n(8),i=n(1),a=n(4),u=n.n(a),l=(n(13),n(14),n(0)),b=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t.name},t.id)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{id:e+1,name:t,length:t.length}})),d="name",h="length";var g=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),g=a[0],m=a[1],f=function(t,e,n){var c=Object(o.a)(t);return e&&c.sort((function(t,n){switch(e){case d:return t.name.localeCompare(n.name);case h:return t.length-n.length;default:return 0}})),n&&(c=c.reverse()),c}(j,n,g),p=function(){return Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),m(!1)},children:"Reset"})};return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==d}),onClick:function(){return c(d)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!g}),onClick:function(){return m((function(t){return!t}))},children:"Reverse"}),(n||g)&&Object(l.jsx)(p,{})]}),Object(l.jsx)(b,{goods:f})]})};s.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.602cf565.chunk.js.map