(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),l=n(11),o=n.n(l),r=n(10),u=n(3);var i=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"StickerNote"))};var f=function(){var e=(new Date).getFullYear();return a.a.createElement("footer",null,a.a.createElement("p",null,"copyright \u24d2 ",e))};var m=function(e){return a.a.createElement("div",{className:"note"},a.a.createElement("h1",null,e.title),a.a.createElement("p",null,e.content),a.a.createElement("button",{onClick:function(){return e.onDelete(e.id,e.title)}},"Delete"))},s=n(7),d=n(12),h=n(28);var E=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(u.a)(t,2),l=n[0],o=n[1],r=Object(c.useState)(!1),i=Object(u.a)(r,2),f=i[0],m=i[1];function E(t){var n=t.target,c=n.name,a=n.value;"title"===c&&(console.log("title area changed."),e.onSearch(a)),o(function(e){return Object(d.a)({},e,Object(s.a)({},c,a))})}return a.a.createElement("div",null,a.a.createElement("form",{className:"create-note",action:"/articles",method:"post"},a.a.createElement("input",{onClick:function(){m(!0)},name:"title",onChange:E,value:l.title,placeholder:"Title"}),f&&a.a.createElement("textarea",{name:"content",onChange:E,value:l.content,placeholder:"Take a note...",rows:f?3:1}),a.a.createElement("button",{className:"add",onClick:function(t){e.onAdd(l),0!==l.title.length&&h.a.post("/articles",{title:l.title,content:l.content}).then(function(e){console.log(e.data)}),o({title:"",content:""}),t.preventDefault()}},"Add")))};var b=function(){var e=Object(c.useState)([{}]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),d=s[0],b=s[1],j=Object(c.useState)(!1),p=Object(u.a)(j,2),v=p[0],O=p[1],g=Object(c.useState)([{}]),S=Object(u.a)(g,2),k=S[0],w=S[1];function D(e,t){l(function(t){return t.filter(function(t,n){return n!==e})}),w(function(t){return t.filter(function(t,n){return n!==e})}),h.a.delete("/articles/".concat(t)).then(function(e){return console.log("Deleted!!!",e)}).catch(function(e){return console.log(e)})}return Object(c.useEffect)(function(){fetch("/articles").then(function(e){return e.json()}).then(function(e){l(e),fetch("/articles/".concat(d)).then(function(e){return e.json()}).then(function(e){w(e)})})},[d]),a.a.createElement("div",null,a.a.createElement(i,null),a.a.createElement(E,{onAdd:function(e){""!==e.title&&(l(function(t){return[].concat(Object(r.a)(t),[e])}),w(function(t){return[].concat(Object(r.a)(t),[e])}))},onSearch:function(e){b(e),O(!0)}}),v?k.map(function(e,t){return a.a.createElement(m,{onDelete:D,key:t,id:t,title:e.title,content:e.content})}):n.map(function(e,t){return a.a.createElement(m,{onDelete:D,key:t,id:t,title:e.title,content:e.content})}),a.a.createElement(f,null))};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)))}},[[14,1,2]]]);
//# sourceMappingURL=main.5ffe2707.chunk.js.map