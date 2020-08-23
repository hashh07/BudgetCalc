(this.webpackJsonpsmpl1=this.webpackJsonpsmpl1||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=(a(13),a(7)),m=a(3),u=(a(14),a(1)),s=function(e){var t=e.charge,a=e.amount,n=e.handleCharge,c=e.handleAmount,r=e.handleSubmit;return l.a.createElement("form",{onSubmit:r},l.a.createElement("div",{className:"form-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"charge"},"Charge"),l.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g rent",value:t,onChange:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"amount"},"amount"),l.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g \u20b91000",value:a,onChange:c}))),l.a.createElement("button",{type:"submit",className:"btn"},"Submit",l.a.createElement(u.c,{className:"btn-icon"})))},i=function(e){var t=e.id,a=e.newExpense,n=e.handleDelete,c=e.handleEdit,r=a.charge,o=a.amount;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," from expense Item"),l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"expenses"},r),l.a.createElement("span",{className:"amount"},"\u20b9",o)),l.a.createElement("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return c(t)}},l.a.createElement(u.b,null)),l.a.createElement("button",{className:"clear-btn","aria-label":"delete button",onClick:function(){return n(t)}},l.a.createElement(u.a,null))))},d=function(e){e.id;var t=e.expenses,a=e.handleEdit,n=e.handleDelete,c=e.clearItems;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement(i,{key:e.id,newExpense:e,handleDelete:n,handleEdit:a})}))),t.length>0&&l.a.createElement("button",{className:"btn",onClick:c},"Clear Expenses",l.a.createElement(u.a,{className:"btn-icon"})))},h=function(e){var t=e.type,a=e.text;return l.a.createElement("div",{className:"alert alert-".concat(t)},a)},E=a(17),p=[{id:Object(E.a)(),charge:"rent",amount:1600},{id:Object(E.a)(),charge:"car payment",amount:1700},{id:Object(E.a)(),charge:"credit bill",amount:1800}];var b=function(){var e=Object(n.useState)(p),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(m.a)(r,2),i=u[0],b=u[1],g=Object(n.useState)(""),f=Object(m.a)(g,2),v=f[0],N=f[1],x=Object(n.useState)({show:!1}),y=Object(m.a)(x,2),w=y[0],j=y[1],O=function(e){var t=e.type,a=e.text;j({show:!0,type:t,text:a}),setTimeout((function(){j({show:!1})}),3e3)};return l.a.createElement(l.a.Fragment,null,w.show&&l.a.createElement(h,{type:w.type,text:w.text}),l.a.createElement(h,null),l.a.createElement("h1",null,"Budget Calculator"),l.a.createElement("main",{className:"App"},l.a.createElement(s,{charge:i,amount:v,handleAmount:function(e){N(e.target.value)},handleCharge:function(e){b(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!==i&&v>0){var t={id:Object(E.a)(),charge:i,amount:v};c([].concat(Object(o.a)(a),[t])),O({type:"success",text:"item added"}),b(""),N("")}else O({type:"danger",text:"Charge can't be empty & amount value has to be greater than zero"})}}),l.a.createElement(d,{expenses:a,handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},clearItems:function(){c([]),O({type:"danger",text:"all items deleted"})},handleEdit:function(e){console.log("item deleted ".concat(e))}})),l.a.createElement("h1",null,"Total Spending",l.a.createElement("span",{className:"total"},a.reduce((function(e,t){return e+parseInt(t.amount)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd47ca63.chunk.js.map