"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[340],{3807:function(e,n,r){r.d(n,{Y:function(){return t}});var t=function(e){switch(console.log("error status: ",e),parseInt(e)){case 400:return" ".concat(e,". Wrong user data. Try again please.");case 401:return"Incorrect authenticate.\n          Missing header with authorization token.\n          LogIn please.";case 404:return"".concat(e," There is no such user collection.");case 500:return"Warning! Something wrong with server. The server is not responding.";default:return"Warning! Internet disconected."}}},5340:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t=r(5861),a=r(4942),s=r(1413),o=r(9439),i=r(7757),c=r.n(i),u=r(2791),l=r(8174),d=r(5048),h=r(7689),f=r(1346),m=r(1511),p=r(3807),g=r(184),v={email:"",password:""},w=function(){var e=(0,u.useState)((0,s.Z)({},v)),n=(0,o.Z)(e,2),r=n[0],i=n[1],w=(0,f.yY)(),b=(0,o.Z)(w,2),x=b[0],j=b[1],k=j.data,_=j.isSuccess,y=j.isError,Z=j.error,S=j.isLoading,I=(0,h.s0)(),N=(0,d.I0)(),P=function(e){var n=e.target,r=n.name,t=n.value;i((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},r,t))}))},C=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!r.email||!r.password){e.next=6;break}return e.next=4,x(r);case 4:e.next=7;break;case 6:l.Am.error("Please fill all fields.");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){if(_&&(N((0,m.o4)(k.token)),l.Am.success("Welcome back ".concat(k.user.email)),I("/")),y)return i(v),void l.Am.error("Sorry you can't log in. ".concat((0,p.Y)(Z.status)))}),[_,y,Z,k,I,N]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("form",{className:"form",onSubmit:C,children:[(0,g.jsxs)("label",{className:"label",children:[(0,g.jsx)("h3",{children:"Email"}),(0,g.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",value:r.email,onChange:P})]}),(0,g.jsxs)("label",{className:"label",children:[(0,g.jsx)("h3",{children:"Password"}),(0,g.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:r.password,onChange:P})]}),(0,g.jsx)("button",{className:"form__button button",type:"submit",disabled:S,children:"Login"})]})})},b=function(){return(0,g.jsxs)("div",{className:"container__login",children:[(0,g.jsx)("h2",{children:"Sign-in"}),(0,g.jsx)(w,{})]})}},5861:function(e,n,r){function t(e,n,r,t,a,s,o){try{var i=e[s](o),c=i.value}catch(u){return void r(u)}i.done?n(c):Promise.resolve(c).then(t,a)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(a,s){var o=e.apply(n,r);function i(e){t(o,a,s,i,c,"next",e)}function c(e){t(o,a,s,i,c,"throw",e)}i(void 0)}))}}r.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=340.6381665d.chunk.js.map