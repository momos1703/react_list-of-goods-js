(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),i=n(8),r=n(1),a=n(3),u=n.n(a),l=(n(13),n(14),n(0)),b=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t.name},t.id)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{id:e+1,name:t,length:t.length}})),d="name",h="length";var g=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),g=a[0],m=a[1],f=function(t,e,n){var s=Object(i.a)(t);return e&&s.sort((function(t,n){switch(e){case d:return t.name.localeCompare(n.name);case h:return t.length-n.length;default:return 0}})),n&&(s=s.reverse()),s}(j,n,g);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":!g}),onClick:function(){return m(g?"":"reverse")},children:"Reverse"}),Object(l.jsx)("button",{type:"button",className:u()("button is-danger is-light",{"is-hidden":!n&&!g}),onClick:function(){s(""),m("")},children:"Reset"})]}),Object(l.jsx)(b,{goods:f})]})};c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.39632ed1.chunk.js.map