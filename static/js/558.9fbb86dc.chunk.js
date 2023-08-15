"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[558],{1558:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(2791),a=t(5861),s=t(4942),c=t(1413),i=t(9439),o=t(7757),l=t.n(o),u=t(8174),d=t(5617),m=t(6707),h=function(){return h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},h.apply(this,arguments)},p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},f=(0,m.i)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");var b=function(e){var n=e.loading,t=void 0===n||n,a=e.color,s=void 0===a?"#000000":a,c=e.speedMultiplier,i=void 0===c?1:c,o=e.cssOverride,l=void 0===o?{}:o,u=e.size,m=void 0===u?15:u,b=e.margin,x=void 0===b?2:b,v=p(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),j=h({display:"inherit"},l),y=function(e){return{backgroundColor:s,width:(0,d.E)(m),height:(0,d.E)(m),margin:(0,d.E)(x),borderRadius:"100%",display:"inline-block",animation:"".concat(f," ").concat(.75/i,"s ").concat(.12*e/i,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return t?r.createElement("span",h({style:j},v),r.createElement("span",{style:y(1)}),r.createElement("span",{style:y(2)}),r.createElement("span",{style:y(3)})):null},x=t(1346),v=t(184),j={name:"",number:""},y=function(){var e=(0,r.useState)((0,c.Z)({},j)),n=(0,i.Z)(e,2),t=n[0],o=n[1],d=(0,x.Lr)(),m=(0,i.Z)(d,2),h=m[0],p=m[1],f=p.data,y=p.isLoading,g=p.isSuccess,N=p.isError,w=p.error,C=function(e){var n=e.target,t=n.name,r=n.value;o((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},t,r))}))},E=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t.name||!t.number){e.next=6;break}return e.next=4,h(t);case 4:e.next=7;break;case 6:u.Am.error("Please fill all fields.");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){o(j)};return(0,r.useEffect)((function(){if(g)return Z(),void u.Am.success("Contact ".concat(f.name," created successfully"));N&&(Z(),u.Am.error("".concat(w.originalStatus,". Contact didn`t create. ")))}),[f,g,w,N]),(0,v.jsxs)("form",{id:"form",className:"contactForm",onSubmit:E,children:[(0,v.jsxs)("label",{className:"label",htmlFor:"name",children:[(0,v.jsx)("h3",{children:"Name"}),(0,v.jsx)("input",{id:"name",className:"nameField",type:"text",name:"name",value:t.name,onChange:C,placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{className:"label",htmlFor:"number",children:[(0,v.jsx)("h3",{children:"Number"}),(0,v.jsx)("input",{className:"nameField",id:"number",type:"tel",name:"number",value:t.number,onChange:C,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsxs)("button",{className:"button contactForm__button",type:"submit",disabled:y,children:[y&&(0,v.jsx)(b,{size:5,color:"#7a5421"}),(0,v.jsx)("span",{children:"Add contact"})]})]})},g=function(e){var n=e.contactData,t=(0,x.Nt)(),s=(0,i.Z)(t,2),c=s[0],o=s[1],d=o.data,m=o.isSuccess,h=o.isError,p=o.isLoading,f=o.error,j=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){m&&u.Am.success("Contact ".concat(d.name," has been deleted.")),h&&u.Am.error("".concat(f," cannot delete."))}),[d,f,h,m]),(0,v.jsxs)("li",{className:"contactList__row",children:[(0,v.jsxs)("div",{className:"contact-content",children:[(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"title",children:"Name: "}),(0,v.jsxs)("span",{className:"text",children:[" ",n.name]})]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{className:"title",children:"Number: "}),(0,v.jsxs)("span",{className:"text",children:[" ",n.number]})]})]}),(0,v.jsxs)("button",{className:"button delete-button",type:"submit",disabled:p,onClick:j,children:[p&&(0,v.jsx)(b,{size:5,color:"#7a5421"}),(0,v.jsx)("span",{children:"Delete"})]})]})},N=t(3607),w=function(){var e=(0,r.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],s=(0,x.wY)(),c=s.data,o=s.isFetching,l=s.isError,u=s.error,d=null===c||void 0===c?void 0:c.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("label",{className:"label",htmlFor:"filter",children:[(0,v.jsx)("h3",{children:"Find contact by name"}),(0,v.jsx)("input",{type:"text",name:"filter",className:"filterField",onChange:function(e){var n=e.currentTarget.value.toLowerCase();a(n)},placeholder:"Filter contacts..."})]}),o&&(0,v.jsx)(N.Z,{}),l&&(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:u.status}),(0,v.jsx)("p",{children:u.error.message})]}),c&&(0,v.jsx)("ul",{className:"contactList",children:d.map((function(e){return(0,v.jsx)(g,{contactData:e},e.id)}))})]})},C=function(){return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h2",{children:"Phone Book"}),(0,v.jsxs)("div",{className:"contactContainer",children:[(0,v.jsx)(y,{}),(0,v.jsx)(w,{})]})]})}},5861:function(e,n,t){function r(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(l){return void t(l)}i.done?n(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,s){var c=e.apply(n,t);function i(e){r(c,a,s,i,o,"next",e)}function o(e){r(c,a,s,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=558.9fbb86dc.chunk.js.map