(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{135:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(20),a=c(14),i=c(69),s=(c(84),c(139),c(140),i.a.initializeApp({apiKey:"AIzaSyBpVbOQfUp2eia-8rokbNCu7tsm11cuEpI",authDomain:"daring-tracer-333307.firebaseapp.com",projectId:"daring-tracer-333307",storageBucket:"daring-tracer-333307.appspot.com",messagingSenderId:"478802051249",appId:"1:478802051249:web:40e0003d08645cba016290"})),o=(i.a.firestore.FieldValue.serverTimestamp,s.firestore()),l=(s.storage(),s.auth()),d=c(3),u=Object(n.createContext)(),j=function(e){var t=e.children,c=Object(n.useState)(null),r=Object(a.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){return l.onAuthStateChanged((function(e){s(e),setLoading(!1)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return setGlobalMsg("")}),5e3);return function(){return clearTimeout(e)}}),[globalMsg]),Object(d.jsx)(u.Provider,{value:{currentUser:i,register:function(e,t){return l.createUserWithEmailAndPassword(e,t)},login:function(e,t){return l.signInWithEmailAndPassword(e+"@gmail.com",t)},logout:function(){return l.signOut()},bidAuction:function(e,t){return o.collection("auctions").doc(e).update({monitor:!0})},atender:function(e,t){return o.collection("auctions").doc(e).update({atendio:t})},endAuction:function(e){return o.collection("auctions").doc(e).delete()}},children:t})},m=c(146),b=function(e){var t,c,r=e.item,a=e.handleState,i=Object(n.useContext)(u),s=i.currentUser,o=i.atender,l=i.bidAuction,j=r.duration,b=r.completed,x=new Date(j).toLocaleTimeString("es-CL"),O=new Date(j).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(d.jsx)("div",{className:"col",children:s&&Object(d.jsx)("div",{className:"card shadow-sm",onClick:function(){a(r),window.scrollTo(0,document.body.scrollHeight,{behavior:"smooth"})},children:Object(d.jsxs)("div",{className:"card-body p-4",children:[Object(d.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(d.jsx)("h5",{children:r.tiendaOxxo})}),Object(d.jsxs)("p",{className:"h5",children:[Object(d.jsx)("span",{className:"text-secondary",children:"KL "})," ",null===(t=r.email)||void 0===t?void 0:t.slice(0,-10)," "]}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[O,", ",x.slice(0,-3)]})}),""!==r.atendio&&Object(d.jsxs)("p",{children:["Atendido Por: ",null===(c=r.atendio)||void 0===c?void 0:c.slice(0,-10)]}),Object(d.jsxs)("div",{className:"d-flex justify-content-between align-item-center",children:[Object(d.jsx)(m.a,{className:b?"btn btn-primary":r.monitor?"btn btn-success ":"btn btn-danger ",onClick:function(){l(r.id,s.email),a(r)},disabled:s.email!==r.atendio,children:b?"Completado":r.monitor?"Atendido \u2713":"Sin completar \u2718"}),Object(d.jsx)(m.a,{className:r.atendio?"d-none":"btn btn-primary",onClick:function(){o(r.id,s.email)},children:"Atender"})]})]})})})},x=c(70),O=c.n(x),h=(c(88),function(e){var t=e.itemState,c=void 0===t?{title:"Inicia sesi\xf3n",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:t,n=c.title,r=c.duration,a=c.email,i=new Date(r).toLocaleTimeString("es-CL"),s=new Date(r).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return Object(d.jsxs)("div",{className:"m-3 pb-5",children:[Object(d.jsx)("div",{className:"bg-dark text-white p-2 text-center",children:"Datos"}),Object(d.jsx)("div",{className:"card pb-0",style:{backgroundColor:"rgb(230,230,230)"},children:"Inicia sesi\xf3n"!==n&&Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)("span",{className:"text-secondary",children:"KL: "})," ",a.slice(0,-10)]}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("span",{className:"text-secondary",children:"Oxxo: "})," ",c.tiendaOxxo]}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("span",{className:"text-secondary",children:"Fecha: "})," ",s,", ",i]}),Object(d.jsxs)("h5",{className:"card-text",children:[Object(d.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",c.description]}),Object(d.jsxs)("h5",{className:void 0!==c.note?"card-text":"d-none",children:[Object(d.jsx)("span",{className:"text-secondary",children:"Nota: "})," ",c.note]})]})})]})}),f=c(71),p=(c(73),function(e){var t,c=e.el,n=c.tiendaOxxo.at(0),r=c.tiendaOxxo.at(-1);return Object(d.jsxs)("div",{className:("A"===r?"c1":"B"===r&&"c2")||"C"===r&&"c3"||"D"===r&&"c4"||"E"===r&&"c5"||"F"===r&&"c6"||"G"===r&&"c7"||"H"===r&&"c8"||"I"===r&&"c9"||"J"===r&&"c10"||"K"===r&&"c11"||"L"===r&&"c12"||"M"===r&&"c13"||"N"===r&&"c14"||"O"===r&&"c15"||"P"===r&&"c16"||"Q"===r&&"c17"||"R"===r&&"c18"||"S"===r&&"c19"||"T"===r&&"c20"||"U"===r&&"c21"||"V"===r&&"c22"||"W"===r&&"c23"||"X"===r&&"c24"||"Y"===r&&"c25"||"Z"===r&&"c26"||"1"===r&&"c27"||"2"===r&&"c28"||"3"===r&&"c29"||"4"===r&&"c30"||"5"===r&&"c31"||"c32"===r&&"c26"||"7"===r&&"c33"||"8"===r&&"c34"||"9"===r&&"c35"||"A"===n&&"c1"||"B"===n&&"c2"||"C"===n&&"c3"||"D"===n&&"c4"||"E"===n&&"c5"||"F"===n&&"c6"||"G"===n&&"c7"||"H"===n&&"c8"||"I"===n&&"c9"||"J"===n&&"c10"||"K"===n&&"c11"||"L"===n&&"c12"||"M"===n&&"c13"||"N"===n&&"c14"||"O"===n&&"c15"||"P"===n&&"c16"||"Q"===n&&"c17"||"R"===n&&"c18"||"S"===n&&"c19"||"T"===n&&"c20"||"U"===n&&"c21"||"V"===n&&"c22"||"W"===n&&"c23"||"X"===n&&"c24"||"Y"===n&&"c25"||"Z"===n&&"c26",children:[Object(d.jsx)("span",{style:{marginLeft:"10px"},children:c.tiendaOxxo}),Object(d.jsx)("span",{className:c.completed?"text-primary mx-2":"text-danger mx-2",children:c.completed?"\u2713":"\u2718"}),null===(t=c.email)||void 0===t?void 0:t.slice(0,-10)]})}),v=c(77);Object(x.registerLocale)("es",v.a);var g=function(){var e,t,c,r,i,s=Object(n.useContext)(u).currentUser,l=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){var t=o.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id}))})),i(t)}));return function(){return t()}}),[e]),{docs:r}}("auctions").docs,j=Object(n.useState)(),m=Object(a.a)(j,2),x=m[0],v=m[1],g=function(e){v(e)},y=!!s&&s.email,N="";"superadmin@gmail.com"===y||"test1@gmail.com"===y||"superadmin2@gmail.com"===y||"superadmin3@gmail.com"===y||"34@gmail.com"===y||"124@gmail.com"===y||"134@gmail.com"===y||"14@gmail.com"===y?i=l.filter((function(e){return"oxxo"===e.categorie})).sort((function(e,t){return t.duration-e.duration})).filter((function(e){return!1===e.completed})):(i=[],N="Usuario No Permitido, No Podras Ver la Informacion");var w=Object(n.useState)(),C=Object(a.a)(w,2),S=(C[0],C[1]),k=Object(n.useState)(),L=Object(a.a)(k,2),D=L[0],A=L[1],I=Object(n.useState)([]),E=Object(a.a)(I,2),P=E[0],R=E[1],F=(P.filter((function(e){return e})).length,Object(n.useState)()),T=Object(a.a)(F,2),U=T[0],B=T[1],G=Object(n.useState)(),M=Object(a.a)(G,2),H=(M[0],M[1]),K=i;P.length>0&&(K=P.filter((function(e){return void 0!==e})));var V=Object(n.useState)(!0),q=Object(a.a)(V,2),z=q[0],J=q[1];return Object(d.jsxs)("div",{className:"container-fluid",children:[y&&Object(d.jsxs)("div",{className:"row bg-secondary pt-4 pb-0",children:[Object(d.jsx)("div",{className:"col-md-1"}),Object(d.jsx)("div",{className:"superadmin@gmail.com"===y||"superadmin2@gmail.com"===y||"superadmin3@gmail.com"===y?"col-md-3 text-center":"d-none",children:Object(d.jsx)(O.a,{selected:D,onChange:function(e){A(e);var t=null===e||void 0===e?void 0:e.getTime(),c=t+864e5,n=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});S(n);var r=l.filter((function(e){return"oxxo"===e.categorie})).map((function(e,n){if(e.duration>t&&e.duration<c)return e}));R(r)},locale:"es",className:"pickers form-control w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(d.jsx)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(d.jsx)("button",{className:"superadmin@gmail.com"===y||"superadmin2@gmail.com"===y||"superadmin3@gmail.com"===y?"d-none":"btn btn-primary",onClick:function(){return J(!z)},children:z?"Lista De Viajes Incompletos":"Viajes Que Atend\xed"}),Object(d.jsx)("p",{className:"text-danger fs-1 bg-white text-center",children:N}),Object(d.jsx)("div",{className:"col-md-3 text-center d-none",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=P.filter((function(e){return void 0!==e})).map((function(e){return e.email===U+"@gmail.com"&&e}));H(t)},children:Object(d.jsx)("input",{type:"text",onChange:function(e){B(e.target.value),setArrRadio([])},value:U,className:P.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por KL"})})})]}),s&&Object(d.jsx)("div",{className:"superadmin@gmail.com"===y||"superadmin2@gmail.com"===y||"superadmin3@gmail.com"===y?"d-none":"row row-cols-1 row-cols-md-3 row-cols-lg-4 py-4 px-3 g-3 border mt-3 border border-secondary",style:{height:"500px",overflowY:"scroll"},children:z?null===(e=K)||void 0===e||null===(t=e.filter((function(e){return void 0!==e})).filter((function(e){return""===e.atendio})))||void 0===t?void 0:t.map((function(e){return Object(d.jsx)(b,{item:e,handleState:g},e.id)})):null===(c=K)||void 0===c||null===(r=c.filter((function(e){return void 0!==e})).filter((function(e){return e.atendio===s.email})).slice(0,40))||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(b,{item:e,handleState:g},e.id)}))}),Object(d.jsx)("div",{className:"superadmin@gmail.com"!==y||"superadmin2@gmail.com"!==y||"superadmin3@gmail.com"!==y&&"d-none",children:P.filter((function(e){return void 0!==e})).sort((function(e,t){return e.tiendaOxxo>t.tiendaOxxo?1:e.tiendaOxxo<t.tiendaOxxo?-1:0})).map((function(e,t){return Object(d.jsx)(p,{el:e,index:t},t)}))}),s&&Object(d.jsx)("div",{className:"superadmin@gmail.com"===y||"superadmin2@gmail.com"===y||"superadmin3@gmail.com"===y?"d-none":"border",children:Object(d.jsx)(h,{itemState:x})})]})},y=(c.p,c(36)),N=c.n(y),w=c(49),C=c(147),S=c(149),k=c(148),L=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(a.a)(i,2),o=s[0],l=s[1],j=Object(n.useRef)(),b=Object(n.useRef)(),x=Object(n.useContext)(u).login,O=function(){return r(!1)},h=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(""),e.prev=2,e.next=5,x(j.current.value,b.current.value);case 5:O(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return r(!0)},className:"btn mx-2",children:"Entrar"}),Object(d.jsx)(C.a,{centered:!0,show:c,onHide:O,children:Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)(C.a.Title,{children:"Entrar"})}),Object(d.jsxs)(C.a.Body,{children:[o&&Object(d.jsx)(S.a,{variant:"danger",children:o}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Escribe tu KL"}),Object(d.jsx)(k.a.Control,{type:"text",required:!0,ref:j})]}),Object(d.jsxs)(k.a.Group,{className:"d-none",children:[Object(d.jsx)(k.a.Label,{children:"Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:b,value:"123456"})]})]}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(m.a,{variant:"secondary",onClick:O,children:"Cancelar"}),Object(d.jsx)(m.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},D=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(a.a)(i,2),o=s[0],l=s[1],j=Object(n.useRef)(),b=Object(n.useRef)(),x=Object(n.useRef)(),O=Object(n.useContext)(u).register,h=function(){return r(!1)},f=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(""),b.current.value===x.current.value){e.next=4;break}return e.abrupt("return",l("Passwords does not match"));case 4:return e.prev=4,e.next=7,O(j.current.value,b.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return r(!0)},className:"btn mx-2 d-none",children:"Registro"}),Object(d.jsx)(C.a,{centered:!0,show:c,onHide:h,children:Object(d.jsxs)("form",{onSubmit:f,children:[Object(d.jsx)(C.a.Header,{children:Object(d.jsx)(C.a.Title,{children:"Registro"})}),Object(d.jsxs)(C.a.Body,{children:[o&&Object(d.jsx)(S.a,{variant:"danger",children:o}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Email"}),Object(d.jsx)(k.a.Control,{type:"email",required:!0,ref:j})]}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:b})]}),Object(d.jsxs)(k.a.Group,{children:[Object(d.jsx)(k.a.Label,{children:"Confirmar Password"}),Object(d.jsx)(k.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(d.jsxs)(C.a.Footer,{children:[Object(d.jsx)(m.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(d.jsx)(m.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})]})},A=function(){var e=Object(n.useContext)(u),t=e.currentUser,c=e.logout;return Object(d.jsx)("nav",{className:"container-fluid navbar bg-info",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"navbar-brand",children:" Incompletos De OXXO"}),Object(d.jsx)("div",{className:"d-flex",children:Object(d.jsx)("div",{className:"col",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"btn disabled",children:t.email.slice(0,-10)}),Object(d.jsx)("div",{onClick:function(){return c()},className:"btn",children:"SALIR"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{}),Object(d.jsx)(D,{})]})})})]})})},I=function(){return Object(d.jsxs)(j,{children:[Object(d.jsx)(A,{}),Object(d.jsx)(g,{})]})};c(133);Object(r.render)(Object(d.jsx)(I,{}),document.getElementById("root"))},73:function(e,t,c){}},[[135,1,2]]]);
//# sourceMappingURL=main.007da40e.chunk.js.map