(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{28:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return O}));var r=n(18),c=n.n(r),a=n(23),o=n(20),u=n.n(o),i=n(5);u.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var b=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},s=function(){u.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:r=e.sent,b(r.data.token),n(Object(i.l)(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.h)()),e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:r=e.sent,b(r.data.token),n(Object(i.i)(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.g)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.e)()),t.prev=1,t.next=4,u.a.post("/users/logout");case 4:s(),e(Object(i.f)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(i.d)(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return b(a),e(Object(i.b)()),t.prev=5,t.next=8,u.a.get("/users/current");case 8:o=t.sent,e(Object(i.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(i.a)(t.t0));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return i})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return l}));var r=n(2),c=Object(r.b)("auth/signUpRequest"),a=Object(r.b)("auth/signUpSuccess"),o=Object(r.b)("auth/signUpError"),u=Object(r.b)("auth/signInRequest"),i=Object(r.b)("auth/signInSuccess"),b=Object(r.b)("auth/signInError"),s=Object(r.b)("auth/logOutRequest"),j=Object(r.b)("auth/logOutSuccess"),p=Object(r.b)("auth/logOutError"),d=Object(r.b)("auth/getCurrentUserRequest"),O=Object(r.b)("auth/getCurrentUserSuccess"),l=Object(r.b)("auth/getCurrentUserError")},61:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return b})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return p})),n.d(e,"j",(function(){return d}));var r=n(2),c=Object(r.b)("phonebook/addRequest"),a=Object(r.b)("phonebook/addSuccess"),o=Object(r.b)("phonebook/addError"),u=Object(r.b)("phonebook/deleteRequest"),i=Object(r.b)("phonebook/deleteSuccess"),b=Object(r.b)("phonebook/deleteError"),s=Object(r.b)("phonebook/getRequest"),j=Object(r.b)("phonebook/getSuccess"),p=Object(r.b)("phonebook/getError"),d=Object(r.b)("phonebook/setFilter")},87:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n(27),o=n.n(a),u=n(17),i=n(49),b=(n(60),n(61),n(9)),s=n(6),j=n(28),p=function(t){return t.auth.token},d=function(t){return t.auth.user.name},O=[{path:"/",name:"Home",exact:!0,component:Object(c.lazy)((function(){return n.e(1).then(n.bind(null,115))})),private:!1,restricted:!1},{path:"/register",name:"Register",exact:!1,component:Object(c.lazy)((function(){return n.e(3).then(n.bind(null,116))})),private:!1,restricted:!0},{path:"/login",name:"Login",exact:!1,component:Object(c.lazy)((function(){return n.e(2).then(n.bind(null,117))})),private:!1,restricted:!0},{path:"/contacts",name:"Contacts",exact:!1,component:Object(c.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,112))})),private:!0,restricted:!1}],l=n(25),f=n(26);function h(){var t=Object(l.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 20px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  .navlink {\n    text-decoration: none;\n    padding: 10px;\n    font-size: 20px;\n    color: lightgrey;\n  }\n  .navlink-active {\n    color: white;\n  }\n"]);return h=function(){return t},t}var x=f.a.header(h());function g(){var t=Object(l.a)(["\n  right: 20px;\n  position: absolute;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .logOutMenuText {\n    margin-right: 20px;\n  }\n  .logOutMenuButton {\n    padding: 5px 15px;\n    border: 1px solid navy;\n    border-radius: 5px;\n    background-color: lightblue;\n    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);\n  }\n  .logOutMenuButton:hover,\n  .logOutMenuButton:focus {\n    background-color: yellowgreen;\n  }\n"]);return g=function(){return t},t}var v,k,m,y,w,E,z=f.a.div(g()),R=function(){var t=Object(b.c)(),e=Object(b.d)(d);return Object(r.jsxs)(z,{children:[Object(r.jsxs)("span",{className:"logOutMenuText",children:["Hello, ",e]}),Object(r.jsx)("button",{className:"logOutMenuButton",type:"button",onClick:function(){t(Object(j.b)())},children:"Log Out"})]})},C=function(){var t=Object(b.d)(p);return Object(r.jsxs)(x,{children:[t?O.map((function(t){return!t.restricted&&Object(r.jsx)(u.b,{to:t.path,exact:t.exact,className:"navlink",activeClassName:"navlink-active",children:t.name},t.name)})):O.map((function(t){return!t.private&&Object(r.jsx)(u.b,{to:t.path,exact:t.exact,className:"navlink",activeClassName:"navlink-active",children:t.name},t.name)})),t&&Object(r.jsx)(R,{})]})},S=n(14),q=n(30),U=function(t){var e=t.component,n=Object(q.a)(t,["component"]),c=Object(b.d)(p);return Object(r.jsx)(s.b,Object(S.a)(Object(S.a)({},n),{},{render:function(t){return c?Object(r.jsx)(e,Object(S.a)({},t)):Object(r.jsx)(s.a,{to:"/login"})}}))},B=function(t){var e=t.component,n=t.restricted,c=Object(q.a)(t,["component","restricted"]),a=Object(b.d)(p);return Object(r.jsx)(s.b,Object(S.a)(Object(S.a)({},c),{},{render:function(t){return a&&n?Object(r.jsx)(s.a,{to:"/contacts"}):Object(r.jsx)(e,Object(S.a)({},t))}}))},M=function(){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(s.d,{children:O.map((function(t){return t.private?Object(r.jsx)(U,Object(S.a)({},t),t.path):Object(r.jsx)(B,Object(S.a)(Object(S.a)({},t),{},{restricted:t.restricted}),t.path)}))})})},N=function(){var t=Object(b.c)(),e=Object(b.d)(p),n=Object(s.g)();return Object(c.useEffect)((function(){e?t(Object(j.a)()):n.replace("/login")}),[]),Object(c.useEffect)((function(){e||n.replace("/login")}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(M,{})]})},I=n(2),L=n(16),A=n(7),F=n(3),H=n(5),J={name:"",email:""},T=Object(I.c)(J,(v={},Object(F.a)(v,H.l,(function(t,e){return e.payload.user})),Object(F.a)(v,H.i,(function(t,e){return e.payload.user})),Object(F.a)(v,H.c,(function(t,e){return e.payload})),Object(F.a)(v,H.f,(function(){return J})),v)),P=Object(I.c)(null,(k={},Object(F.a)(k,H.l,(function(t,e){return e.payload.token})),Object(F.a)(k,H.i,(function(t,e){return e.payload.token})),Object(F.a)(k,H.f,(function(){return null})),k)),D=Object(I.c)(null,(m={},Object(F.a)(m,H.j,(function(t,e){return e.payload})),Object(F.a)(m,H.g,(function(t,e){return e.payload})),Object(F.a)(m,H.a,(function(t,e){return e.payload})),Object(F.a)(m,H.d,(function(t,e){return e.payload})),m)),G=Object(A.c)({user:T,token:P,error:D}),K=n(31),Q=n(8),V=Object(I.c)([],(y={},Object(F.a)(y,Q.c,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(F.a)(y,Q.f,(function(t,e){var n=e.payload;return Object(K.a)(t.filter((function(t){return t.id!==n})))})),Object(F.a)(y,Q.i,(function(t,e){var n=e.payload;return Object(K.a)(n)})),y)),W=Object(I.c)("",Object(F.a)({},Q.j,(function(t,e){return e.payload}))),X=Object(I.c)(!1,(w={},Object(F.a)(w,Q.b,(function(){return!0})),Object(F.a)(w,Q.c,(function(){return!1})),Object(F.a)(w,Q.a,(function(){return!1})),Object(F.a)(w,Q.e,(function(){return!0})),Object(F.a)(w,Q.f,(function(){return!1})),Object(F.a)(w,Q.d,(function(){return!1})),Object(F.a)(w,Q.h,(function(){return!0})),Object(F.a)(w,Q.i,(function(){return!1})),Object(F.a)(w,Q.g,(function(){return!1})),w)),Y=Object(I.c)(null,(E={},Object(F.a)(E,Q.a,(function(t,e){return e.payload})),Object(F.a)(E,Q.d,(function(t,e){return e.payload})),Object(F.a)(E,Q.g,(function(t,e){return e.payload})),E)),Z=Object(A.c)({contacts:V,filter:W,loader:X,error:Y}),$=n(54),_={key:"auth",storage:n.n($).a,whitelist:["token"]},tt=Object(A.c)({phonebook:Z,auth:Object(L.g)(_,G)}),et=Object(I.a)({reducer:tt,middleware:Object(I.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})}),nt=et,rt=Object(L.h)(et);o.a.render(Object(r.jsx)(b.a,{store:nt,children:Object(r.jsx)(i.a,{loading:null,persistor:rt,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(N,{})})})}),document.getElementById("root"))}},[[87,5,6]]]);
//# sourceMappingURL=main.2c900c2f.chunk.js.map