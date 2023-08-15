"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[558],{1558:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(2791),a=t(5861),s=t(4942),c=t(1413),i=t(9439),o=t(7757),l=t.n(o),u=t(8174),d=t(5617),m=t(6707),p=function(){return p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},p.apply(this,arguments)},h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},f=(0,m.i)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");var b=function(e){var n=e.loading,t=void 0===n||n,a=e.color,s=void 0===a?"#000000":a,c=e.speedMultiplier,i=void 0===c?1:c,o=e.cssOverride,l=void 0===o?{}:o,u=e.size,m=void 0===u?15:u,b=e.margin,x=void 0===b?2:b,j=h(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=p({display:"inherit"},l),y=function(e){return{backgroundColor:s,width:(0,d.E)(m),height:(0,d.E)(m),margin:(0,d.E)(x),borderRadius:"100%",display:"inline-block",animation:"".concat(f," ").concat(.75/i,"s ").concat(.12*e/i,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return t?r.createElement("span",p({style:v},j),r.createElement("span",{style:y(1)}),r.createElement("span",{style:y(2)}),r.createElement("span",{style:y(3)})):null},x=t(1346),j=t(184),v={name:"",number:""},y=function(){var e=(0,r.useState)((0,c.Z)({},v)),n=(0,i.Z)(e,2),t=n[0],o=n[1],d=(0,x.Lr)(),m=(0,i.Z)(d,2),p=m[0],h=m[1],f=h.data,y=h.isLoading,g=h.isSuccess,N=h.isError,w=h.error,E=function(e){var n=e.target,t=n.name,r=n.value;o((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},t,r))}))},k=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t.name||!t.number){e.next=6;break}return e.next=4,p(t);case 4:e.next=7;break;case 6:u.Am.error("Please fill all fields.");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=function(){o(v)};return(0,r.useEffect)((function(){if(g)return F(),void u.Am.success("Contact ".concat(f.name," created successfully"));N&&(F(),u.Am.error("".concat(w.originalStatus,". Contact didn`t create. ")))}),[f,g,w,N]),(0,j.jsxs)("form",{id:"form",className:"contactForm",onSubmit:k,children:[(0,j.jsxs)("label",{className:"label",htmlFor:"name",children:[(0,j.jsx)("h3",{children:"Name"}),(0,j.jsx)("input",{id:"name",className:"nameField",type:"text",name:"name",value:t.name,onChange:E,placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("label",{className:"label",htmlFor:"number",children:[(0,j.jsx)("h3",{children:"Number"}),(0,j.jsx)("input",{className:"nameField",id:"number",type:"tel",name:"number",value:t.number,onChange:E,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsxs)("button",{className:"button contactForm__button",type:"submit",disabled:y,children:[y&&(0,j.jsx)(b,{size:5,color:"#7a5421"}),(0,j.jsx)("span",{children:"Add contact"})]})]})},g=function(e){var n=e.contactData,t=(0,x.Nt)(),s=(0,i.Z)(t,2),c=s[0],o=s[1],d=o.data,m=o.isSuccess,p=o.isError,h=o.isLoading,f=o.error,v=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){m&&u.Am.success("Contact ".concat(d.name," has been deleted.")),p&&u.Am.error("".concat(f," cannot delete."))}),[d,f,p,m]),(0,j.jsxs)("li",{className:"contactList__row",children:[(0,j.jsxs)("div",{className:"contact-content",children:[(0,j.jsxs)("p",{children:[(0,j.jsx)("span",{className:"title",children:"Name: "}),(0,j.jsxs)("span",{className:"text",children:[" ",n.name]})]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("span",{className:"title",children:"Number: "}),(0,j.jsxs)("span",{className:"text",children:[" ",n.number]})]})]}),(0,j.jsxs)("button",{className:"button delete-button",type:"submit",disabled:h,onClick:v,children:[h&&(0,j.jsx)(b,{size:5,color:"#7a5421"}),(0,j.jsx)("span",{children:"Delete"})]})]})},N=t(3607),w=function(){var e=(0,x.wY)(),n=e.data,t=e.isFetching,r=e.isError,a=e.error;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("label",{className:"label",htmlFor:"filter",children:[(0,j.jsx)("h3",{children:"Find contact by name"}),(0,j.jsx)("input",{type:"text",name:"filter",className:"filterField",placeholder:"Filter contacts..."})]}),t&&(0,j.jsx)(N.Z,{}),r&&(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:a.status}),(0,j.jsx)("p",{children:a.error.message})]}),n&&(0,j.jsx)("ul",{className:"contactList",children:n.map((function(e){return(0,j.jsx)(g,{contactData:e},e.id)}))})]})},E=function(){return(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("h2",{children:"Phone Book"}),(0,j.jsxs)("div",{className:"contactContainer",children:[(0,j.jsx)(y,{}),(0,j.jsx)(w,{})]})]})}},5861:function(e,n,t){function r(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(l){return void t(l)}i.done?n(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,s){var c=e.apply(n,t);function i(e){r(c,a,s,i,o,"next",e)}function o(e){r(c,a,s,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=558.8b633c79.chunk.js.map