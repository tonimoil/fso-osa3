(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(15),i=n.n(a),r=(n(20),n(5)),o=n(3),u=n(0),s=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),"filter shown with: ",Object(u.jsx)("input",{value:e.filterState,onChange:function(t){e.setFilterState(t.target.value)}})]})},d=function(e){var t=e.message,n=e.notificationType;return null===t?null:Object(u.jsx)("div",{className:0===n?"notification":"error",children:t})},l=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:e.filteredList.map((function(t){return Object(u.jsxs)("li",{children:[t.name," ",t.number,Object(u.jsx)("button",{id:t._id,name:t.name,onClick:function(t){return e.deleteFunction(t)},children:"delete"})]},t.name)}))})]})},j=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Add a new person"}),Object(u.jsxs)("form",{onSubmit:e.addNew,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:e.newName,onChange:function(t){e.setNewName(t.target.value)}})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:e.newNumber,onChange:function(t){e.setNewNumber(t.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})]})},b=n(4),m=n.n(b),f="/api/persons",h={getAll:function(){return m.a.get(f)},create:function(e){return m.a.post(f,e)},update:function(e,t){return m.a.put("".concat(f,"/").concat(e),t)},deleteWithId:function(e){return m.a.delete("".concat(f,"/").concat(e))}},O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),b=Object(o.a)(i,2),m=b[0],f=b[1],O=Object(c.useState)(""),p=Object(o.a)(O,2),w=p[0],v=p[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),N=g[0],y=g[1],S=Object(c.useState)({message:null,notificationType:0}),T=Object(o.a)(S,2),A=T[0],C=T[1];Object(c.useEffect)((function(){h.getAll().then((function(e){a(e.data)}))}),[]);var k=function(e,t){C(Object(r.a)(Object(r.a)({},A),{},{message:e,notificationType:t})),setTimeout((function(){C(Object(r.a)(Object(r.a)({},A),{},{message:null,notificationType:0}))}),5e3)},F=n.filter((function(e){return e.name.toLowerCase().includes(N)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{message:A.message,notificationType:A.notificationType}),Object(u.jsx)(s,{filterState:N,setFilterState:y}),Object(u.jsx)(j,{addNew:function(e){e.preventDefault(),n.map((function(e){return e.name})).includes(m)?window.confirm("".concat(m,"  is already on phonebook, replace the old number with a new?"))?h.update(n.find((function(e){return e.name===m})).id,{name:m,number:w}).then((function(e){a(n.map((function(t){return t.name!==m?t:e.data}))),k("Changes to ".concat(m," was made"),0)})).catch((function(e){a(n.filter((function(e){return e.name!==m}))),k("".concat(m," has already been removed from the server"),1)})):k("No changes was made to ".concat(m),0):h.create({name:m,number:w}).then((function(e){a(n.concat({name:m,number:w,id:e.data.id})),k("Added ".concat(m),0)})),f(""),v("")},newName:m,setNewName:f,newNumber:w,setNewNumber:v}),Object(u.jsx)(l,{filteredList:F,deleteFunction:function(e){e.preventDefault();try{var t=e.target.getAttribute("id"),n=e.target.getAttribute("name");window.confirm("Remove ".concat(n,"?"))?(a(""),h.deleteWithId(t),k("".concat(n," was removed"),0)):k("No changes were made",0)}catch(c){console.error(c)}}})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.baa96563.chunk.js.map