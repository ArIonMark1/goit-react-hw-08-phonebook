"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[27],{3121:function(e,n,r){r.d(n,{B:function(){return t}});var t=function(){return function(e){switch(console.log("error status: ",e),parseInt(e)){case 400:return" ".concat(e,". Wrong user data. User already exsist. Try again please.");case 401:return"Incorrect authenticate.\n          Missing header with authorization token.\n          LogIn please.";case 404:return"".concat(e," There is no such user collection.");case 500:return"Warning! Something wrong with server. The server is not responding.";default:return"Warning! Internet disconected."}}}},3027:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(5861),a=r(4942),s=r(1413),o=r(9439),c=r(7757),i=r.n(c),u=r(2791),l=r(6718),h=r(8174),d=r(7689),f=r(5048),m=r(881),p=r(3121),v=r(184),g={name:"",email:"",password:"",avatar:"https://ih1.redbubble.net/image.5075891342.0210/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"},x=function(){var e=(0,d.s0)(),n=(0,l.B)(),r=(0,o.Z)(n,1)[0],c=(0,f.I0)(),x=(0,p.B)(),b=(0,u.useState)((0,s.Z)({},g)),w=(0,o.Z)(b,2),j=w[0],_=w[1],k=function(e){var n=e.target,r=n.name,t=n.value;_((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},r,t))}))},y=function(){var n=(0,t.Z)(i().mark((function n(t){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,r(j);case 4:if(!(a=n.sent).error){n.next=7;break}throw new Error(a.error.status);case 7:a.data&&(c((0,m.o4)(a.data.token)),h.Am.success("User ".concat(j.name," created successfully")),_(g),e("/")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),h.Am.error(x(n.t0.message)),_(g);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{className:"form",autoComplete:"off",onSubmit:y,children:[(0,v.jsxs)("label",{className:"label",children:[(0,v.jsx)("h3",{children:"Name"}),(0,v.jsx)("input",{type:"text",name:"name",value:j.name,placeholder:"Name",onChange:k})]}),(0,v.jsxs)("label",{className:"label",children:[(0,v.jsx)("h3",{children:"Email"}),(0,v.jsx)("input",{type:"email",name:"email",value:j.email,placeholder:"E-mail",onChange:k})]}),(0,v.jsxs)("label",{className:"label",children:[(0,v.jsx)("h3",{children:"Password"}),(0,v.jsx)("input",{type:"password",name:"password",value:j.password,placeholder:"Password",onChange:k})]}),(0,v.jsx)("button",{className:"form__button button",type:"submit",children:"Registration"})]})})},b=function(){return(0,v.jsxs)("div",{className:"container__register",children:[(0,v.jsx)("h2",{className:"register__header",children:"Registration"}),(0,v.jsx)(x,{})]})}},5861:function(e,n,r){function t(e,n,r,t,a,s,o){try{var c=e[s](o),i=c.value}catch(u){return void r(u)}c.done?n(i):Promise.resolve(i).then(t,a)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(a,s){var o=e.apply(n,r);function c(e){t(o,a,s,c,i,"next",e)}function i(e){t(o,a,s,c,i,"throw",e)}c(void 0)}))}}r.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=27.ab8220af.chunk.js.map