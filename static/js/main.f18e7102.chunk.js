(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),a=n.n(s),i=n(6),r=n.n(i),l=(n(13),n(7)),j=n(3),o=n(17),u=Object(s.createContext)(),d=function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[],n=Object(s.useState)(e),a=Object(j.a)(n,2),i=a[0],r=a[1];Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(i))}),[i]);var d=Object(s.useState)(null),b=Object(j.a)(d,2),O=b[0],f=b[1];return Object(c.jsx)(u.Provider,{value:{tasks:i,addTask:function(t){r([].concat(Object(l.a)(i),[{title:t,id:Object(o.a)()}]))},removeTask:function(t){r(i.filter((function(e){return e.id!==t})))},clearList:function(){r([])},findItem:function(t){var e=i.find((function(e){return e.id===t}));f(e)},editTask:function(t,e){var n=i.map((function(n){return n.id===e?{title:t,id:e}:n}));console.log(n),r(n),f(null)},editItem:O},children:t.children})},b=function(t){var e=t.task,n=Object(s.useContext)(u),a=n.removeTask,i=n.findItem;return Object(c.jsxs)("li",{className:"list-item",children:[Object(c.jsxs)("span",{children:[e.title," "]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn-delete task-btn",onClick:function(){return a(e.id)},children:Object(c.jsx)("i",{className:"fas fa-times"})})," ",Object(c.jsx)("button",{className:"btn-edit task-btn",onClick:function(){return i(e.id)},children:Object(c.jsx)("i",{className:"fas fa-pen"})})]})]})},O=function(){var t=Object(s.useContext)(u).tasks;return Object(c.jsx)("div",{children:t.length?Object(c.jsx)("ul",{className:"list",children:t.map((function(t){return Object(c.jsx)(b,{task:t},t.id)}))}):Object(c.jsx)("div",{className:"no-tasks",children:"No Tasks"})})},f=function(){var t=Object(s.useContext)(u),e=t.addTask,n=t.clearList,a=t.editTask,i=t.editItem,r=Object(s.useState)(""),l=Object(j.a)(r,2),o=l[0],d=l[1];return Object(s.useEffect)((function(){i?(d(i.title),console.log(i)):d("")}),[i]),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i?a(o,i.id):(e(o),d(""))},className:"form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Add Task...",value:o,onChange:function(t){d(t.target.value)},required:!0,className:"task-input"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{type:"submit",className:"btn add-task-btn",children:i?"Edit Task":"Add Task"}),Object(c.jsx)("button",{className:"btn clear-btn",onClick:n,children:"Clear"})]})]})},m=(n(14),function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Basic CRUD "})})}),x=function(){return Object(c.jsx)(d,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"app-wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(f,{}),Object(c.jsx)(O,{})]})]})})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.f18e7102.chunk.js.map