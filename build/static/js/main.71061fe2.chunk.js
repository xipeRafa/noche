(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),r=n(14),i=n(8),s=n(157),o=n(76),l=(n(88),n(144),n(145),o.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),u=o.a.firestore.FieldValue.serverTimestamp,d=l.firestore(),j=l.storage(),b=l.auth(),m=n(2),O=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!0),l=Object(i.a)(o,2),u=l[0],j=l[1],x=Object(c.useState)(""),f=Object(i.a)(x,2),h=f[0],v=f[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e),j(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[h]),Object(m.jsx)(O.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e+"@gmail.com",t)},logout:function(){return b.signOut()},bidAuction:function(e,t){return d.collection("auctions").doc(e).update({monitor:!0})},atender:function(e,t){return d.collection("auctions").doc(e).update({atendio:t})},noteContext:function(e,t){return d.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return d.collection("auctions").doc(e).delete()},globalMsg:h},children:!u&&t})},f=n(153),h=n(43),v=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},p=function(e){var t,n,a,r,i=e.item,s=e.handleState,o=Object(c.useContext)(O),l=o.currentUser,u=o.atender,d=o.bidAuction;v("auctions").docs.map((function(e){e.id===i.id&&(a=e.duration),e.id===i.id&&(r=e.completed)}));var j=new Date(a).toLocaleTimeString("es-CL"),b=new Date(a).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(m.jsx)("div",{className:"col",children:l&&Object(m.jsx)("div",{className:"card shadow-sm",onClick:function(){s(i),window.scrollTo(0,document.body.scrollHeight,{behavior:"smooth"})},children:Object(m.jsxs)("div",{className:"card-body p-4",children:[Object(m.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(m.jsx)("h5",{children:i.tiendaOxxo})}),Object(m.jsxs)("p",{className:"h5",children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL "})," ",null===(t=i.email)||void 0===t?void 0:t.slice(0,-10)," "]}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[b,", ",j.slice(0,-3)]})}),Object(m.jsxs)("p",{children:["Atendido Por: ",null===(n=i.atendio)||void 0===n?void 0:n.slice(0,-10)]}),Object(m.jsxs)("div",{className:"d-flex justify-content-between align-item-center",children:[Object(m.jsx)(f.a,{className:r?"btn btn-primary":i.monitor?"btn btn-success ":"btn btn-danger ",onClick:function(){d(i.id,l.email),s(i)},disabled:l.email!==i.atendio,children:r?"Completado":i.monitor?"Atendido \u2713":"Sin completar \u2718"}),Object(m.jsx)(f.a,{className:i.atendio?"d-none":"btn btn-primary",onClick:function(){u(i.id,l.email)},children:"Atender"})]})]})})})},g=n(154),N=n(31),y=n.n(N),w=n(36),C=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),o=Object(i.a)(s,2),l=o[0],b=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=d.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(w.a)(y.a.mark((function c(){var a,r;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return a=c.sent,r=u(),delete e.itemImage,c.next=7,n.add(Object(h.a)(Object(h.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:a,isCompleted:l}},S=function(e){var t=e.auction,n=e.setAuction,a=C(t),r=a.progress,i=a.isCompleted;return Object(c.useEffect)((function(){i&&n(null)}),[i,n]),Object(m.jsx)(g.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},k=Object(c.createContext)(),D=function(e){var t=e.children,n=v("auctions").docs,a=Object(r.a)(n),s=Object(c.useState)(a),o=Object(i.a)(s,2),l=o[0],u=o[1];return Object(m.jsx)(k.Provider,{value:{handleDB:function(e){u(e)},DB:l},children:t})},L=n(77),A=n.n(L),E=(n(93),function(e){var t,n,a=e.itemState,r=void 0===a?{title:"Inicia sesi\xf3n",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:a,s=v("auctions").docs,o=(Object(c.useContext)(O).noteContext,r.title),l="";s.map((function(e){e.id===r.id&&(l=e.email),e.id===r.id&&(n=e.duration)}));var u=new Date(n).toLocaleTimeString("es-CL"),d=new Date(n).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),j=Object(c.useState)(),b=Object(i.a)(j,2);b[0],b[1];return Object(m.jsxs)("div",{className:"m-3 pb-5",children:[Object(m.jsx)("div",{className:"bg-dark text-white p-2 text-center",children:"Datos"}),Object(m.jsx)("div",{className:"card pb-0",style:{backgroundColor:"rgb(230,230,230)"},children:"Inicia sesi\xf3n"!==o&&Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL: "})," ",l.slice(0,-10)]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Oxxo: "})," ",r.tiendaOxxo]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Atendio: "})," ",null===(t=r.atendio)||void 0===t?void 0:t.slice(0,-10)]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Fecha: "})," ",d,", ",u]}),Object(m.jsxs)("h5",{className:"card-text",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",r.description]}),Object(m.jsxs)("h5",{className:void 0!==r.note?"card-text":"d-none",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Nota: "})," ",r.note]})]})})]})}),M=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),s=Object(i.a)(a,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){if("DateMaxToMin"!==o[0])if("Date"!==o[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));n(e)}else{var c=t.sort((function(e,t){return t.createdAt-e.createdAt}));n(c)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75",children:[Object(m.jsx)("h2",{children:"Filtros"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{children:"Filtrar por"}),Object(m.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(m.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})},I=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),s=Object(i.a)(a,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){if("all"!==o[0])if("done"!==o[0])if("fallen"!==o[0]);else{var e=t.filter((function(e){return!1===e.completed}));n(e)}else{var c=t.filter((function(e){return!0===e.completed}));n(c)}else{var a=t.filter((function(e){return e}));n(a)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Resultados"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{value:"all",children:"Todos"}),Object(m.jsx)("option",{value:"done",children:"Completados"}),Object(m.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},T=function(){var e=Object(c.useContext)(k).handleDB,t=v("auctions").docs,n=Object(r.a)(t),a=Object(c.useState)(!0),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)(!0),d=Object(i.a)(u,2),j=d[0],b=d[1],O=Object(c.useState)(!0),x=Object(i.a)(O,2),f=x[0],h=x[1],p=Object(c.useState)([]),g=Object(i.a)(p,2),N=g[0],y=g[1];function w(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}return Object(c.useEffect)((function(){for(var t=function(e){var t=n.filter((function(t){return t.categorie!==N[e]}));n=t},c=0;c<N.length;c++)t(c);e(n)}),[N,o,j,f]),Object(c.useEffect)((function(){setTimeout((function(){l(!o),l(!0)}),200)}),[t]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Clientes"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!o),o?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:o}),"oxxo"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!j),j?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:j}),"otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){h(!f),f?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:f}),"Pago en Efectivo"]})]})})},U=function(){return Object(m.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(m.jsx)(M,{}),Object(m.jsx)(I,{}),Object(m.jsx)(T,{})]})},F=(n(94),n(81));Object(L.registerLocale)("es",F.a);var B=function(){var e,t,n,a,o,l=Object(c.useState)(null),u=Object(i.a)(l,2),d=u[0],j=u[1],b=Object(c.useContext)(O),x=b.currentUser,f=b.globalMsg,h=Object(c.useContext)(k).DB,v=Object(c.useState)(),g=Object(i.a)(v,2),N=g[0],y=g[1],w=function(e){y(e)},C=!!x&&x.email;"superadmin@gmail.com"===C||"test1@gmail.com"===C||"superadmin2@gmail.com"===C||"superadmin3@gmail.com"===C||"34@gmail.com"===C||"124@gmail.com"===C||"134@gmail.com"===C||"14@gmail.com"===C?o=h.filter((function(e){return"oxxo"===e.categorie})).filter((function(e){return!1===e.completed})).sort((function(e,t){return t.duration-e.duration})):(o=[],alert("usuario no permitido"));var D=Object(c.useState)(),L=Object(i.a)(D,2),M=L[0],I=L[1],T=Object(c.useState)(),F=Object(i.a)(T,2),B=F[0],P=F[1],R=Object(c.useState)([]),H=Object(i.a)(R,2),K=H[0],V=H[1],X=K.filter((function(e){return e})).length,q=Object(c.useState)(),z=Object(i.a)(q,2),G=z[0],W=z[1],Y=Object(c.useState)([]),J=Object(i.a)(Y,2),Q=(J[0],J[1]),_=Object(c.useState)(),Z=Object(i.a)(_,2),$=Z[0],ee=Z[1],te=Object(c.useState)(),ne=Object(i.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)([]),ie=Object(i.a)(re,2),se=ie[0],oe=ie[1],le=null===$||void 0===$?void 0:$.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),ue=Object(c.useState)(!0),de=Object(i.a)(ue,2),je=de[0],be=de[1],me=Object(c.useState)(!0),Oe=Object(i.a)(me,2),xe=Oe[0],fe=Oe[1],he=Object(c.useState)(!0),ve=Object(i.a)(he,2),pe=ve[0],ge=ve[1],Ne=Object(c.useState)(!0),ye=Object(i.a)(Ne,2),we=ye[0],Ce=ye[1],Se=Object(c.useState)([]),ke=Object(i.a)(Se,2),De=ke[0],Le=ke[1];function Ae(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}Object(c.useEffect)((function(){for(var e=function(e){var t=le.filter((function(t){return t.categorie!==De[e]}));le=t},t=0;t<De.length;t++)e(t);oe(le)}),[De,je,xe,pe,we]);var Ee=Date.now()-864e5,Me=Date.now()-36e5,Ie=Date.now()-6e4,Te=Object(c.useState)(),Ue=Object(i.a)(Te,2),Fe=Ue[0],Be=Ue[1],Pe=Object(c.useState)(1),Re=Object(i.a)(Pe,2),He=Re[0],Ke=Re[1],Ve=6e4*He,Xe=o.filter((function(e){return e.tiendaOxxo})).filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(c.useEffect)((function(){var e=Xe.filter((function(e){return e.duration>Ie-Ve})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Be(n)}),[He]);var qe=Object(c.useState)(),ze=Object(i.a)(qe,2),Ge=ze[0],We=ze[1],Ye=Object(c.useState)(),Je=Object(i.a)(Ye,2),Qe=Je[0],_e=Je[1],Ze=Object(c.useState)(1),$e=Object(i.a)(Ze,2),et=$e[0],tt=$e[1],nt=36e5*et;Object(c.useEffect)((function(){var e=Xe.filter((function(e){return e.duration>Me-nt})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());_e(n)}),[et]);$?($.filter((function(e){return!1!==e})),se.length>0&&se.filter((function(e){return!1!==e}))):K&&K.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1}));var ct=o;K.length>0&&("superadmin@gmail.com"===C||"test1@gmail.com"===C||"superadmin2@gmail.com"===C||"superadmin3@gmail.com"===C||"34@gmail.com"===C||"124@gmail.com"===C||"134@gmail.com"===C||"14@gmail.com"===C?ct=K.sort((function(e,t){return t.duration-e.duration})).filter((function(e){return"oxxo"===(null===e||void 0===e?void 0:e.categorie)})).filter((function(e){return!1===e.completed})):(ct=[],alert("Usuario no permitido")));var at=Object(c.useState)(!0),rt=Object(i.a)(at,2),it=rt[0],st=rt[1];return Object(m.jsxs)("div",{className:"container-fluid",children:[d&&Object(m.jsx)(S,{auction:d,setAuction:j}),Object(m.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:f&&Object(m.jsx)(s.a,{variant:"danger",children:f})}),C&&Object(m.jsxs)("div",{className:"row bg-secondary pt-4 pb-3",children:[Object(m.jsxs)("div",{className:"text-white bg-primary mb-3 p-1 blue d-none",children:[Object(m.jsxs)("span",{style:{marginLeft:"20px"},children:[Object(m.jsx)("span",{className:"p-1",children:X})," Viajes el Dia: ",M]}),Object(m.jsxs)("span",{className:(null===$||void 0===$?void 0:$.length)>0?"mx-5":"d-none",children:[Object(m.jsx)("span",{className:"bg-danger p-1",children:null===$||void 0===$?void 0:$.filter((function(e){return!1===e.completed})).length})," ","Viajes Sin Completar de KL ",G]})]}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===$||void 0===$?void 0:$.length)>0?"d-none":"col-md-3 text-center d-none",children:Object(m.jsx)(A.a,{selected:B,onChange:function(e){P(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,c=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});I(c);var a=h.map((function(e,c){if(e.duration>t&&e.duration<n)return e}));V(a)},onFocus:function(){V([])},locale:"es",className:"pickers form-control w-100 mb-3 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(m.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(m.jsx)("button",{className:"btn btn-primary ",onClick:function(){return st(!it)},children:it?"Lista De Viajes Incompletos":"Viajes Que Atend\xed"}),Object(m.jsx)("div",{className:"col-md-3 text-center d-none",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),Q(G);var t=K.filter((function(e){return void 0!==e})).map((function(e){return e.email===G+"@gmail.com"&&e}));ee(t)},children:Object(m.jsx)("input",{type:"text",onChange:function(e){W(e.target.value),oe([])},value:G,className:K.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por KL"})})}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:(null===$||void 0===$?void 0:$.length)>0?"w-75 fr":"d-none",onChange:function(e){return function(e){ae(e),oe([]);var t=null===$||void 0===$?void 0:$.filter((function(e){return!1!==e})),n=t;"completados"===ce?(n=t.filter((function(e){return!0!==e.completed})),oe(n)):(n=t.filter((function(e){return!1!==e.completed})),oe(n))}(e.target.value)},children:[Object(m.jsx)("input",{type:"button",className:"btn text-white btn-outline-dark",name:"drone",value:"Todos",onClick:function(){return oe([])}}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark my-2",children:[Object(m.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark",children:[Object(m.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"Incompletos"]})]})}),Object(m.jsx)("div",{className:(null===$||void 0===$?void 0:$.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:"w-75 mt-0 ",style:{marginLeft:"12.5%"},children:[Object(m.jsxs)("label",{className:"text-white mb-2 mt-1",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){be(!je),je?Le([].concat(Object(r.a)(De),[e.target.value])):Ae(De,e.target.value)}(e)},checked:je}),"OXXO"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white mb-2",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){fe(!xe),xe?Le([].concat(Object(r.a)(De),[e.target.value])):Ae(De,e.target.value)}(e)},checked:xe}),"Otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1 mb-3",value:"pago en efectivo",onChange:function(e){return function(e){ge(!pe),pe?Le([].concat(Object(r.a)(De),[e.target.value])):Ae(De,e.target.value)}(e)},checked:pe}),"Pagos en Efectivo"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1 mb-4",value:"taller",onChange:function(e){return function(e){Ce(!we),we?Le([].concat(Object(r.a)(De),[e.target.value])):Ae(De,e.target.value)}(e)},checked:we}),"Taller"]})]})})]}),x&&Object(m.jsxs)("div",{className:"d-none",children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-evenly p-4",children:[Object(m.jsx)("input",{type:"button",className:(null===K||void 0===K?void 0:K.length)>0?"d-none":"btn btn-primary",value:"Ultimo Minuto",onClick:function(){var e=Xe.filter((function(e){return e.duration>Ie-Ve})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Be(n),We([]),_e([])}}),Object(m.jsx)("input",{type:"button",className:(null===K||void 0===K?void 0:K.length)>0?"d-none":"btn btn-primary mx-1",value:"Ultima Hora",onClick:function(){var e=Xe.filter((function(e){return e.duration>Me})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());_e(n),Be([]),We([])}}),Object(m.jsx)("input",{type:"button",className:(null===K||void 0===K?void 0:K.length)>0?"d-none":"btn btn-primary",value:"Ultimas 24 Hrs",onClick:function(){var e=Xe.filter((function(e){return e.duration>Ee})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());We(n),Be([]),_e([])}})]}),Object(m.jsxs)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"d-none":(null===Fe||void 0===Fe?void 0:Fe.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar desde el Ultimo Minuto +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Ke(e.target.value)},value:He})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Fe||void 0===Fe?void 0:Fe.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"d-none":(null===Qe||void 0===Qe?void 0:Qe.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar de la Ultima Hora +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){tt(e.target.value)},value:et})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Qe||void 0===Qe?void 0:Qe.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"d-none":(null===Ge||void 0===Ge?void 0:Ge.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsx)("h4",{className:"p-2 bg-secondary text-white",children:"Taxistas con viajes sin Completar de las Ultimas 24 Horas"}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Ge||void 0===Ge?void 0:Ge.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]})]}),x&&Object(m.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 py-4 px-3 g-3  border mt-3 border border-secondary",style:{height:"500px",overflowY:"scroll"},children:[Object(m.jsx)("div",{className:(K.length,"d-none"),children:Object(m.jsx)(U,{})}),it?null===(e=ct)||void 0===e||null===(t=e.filter((function(e){return void 0!==e})).filter((function(e){return""===e.atendio})))||void 0===t?void 0:t.map((function(e){return Object(m.jsx)(p,{item:e,handleState:w},e.id)})):null===(n=ct)||void 0===n||null===(a=n.filter((function(e){return void 0!==e})).filter((function(e){return e.atendio===x.email})).slice(0,80))||void 0===a?void 0:a.map((function(e){return Object(m.jsx)(p,{item:e,handleState:w},e.id)}))]}),x&&Object(m.jsx)(E,{itemState:N})]})},P=(n.p,n(155)),R=n(156),H=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useContext)(O).login,x=function(){return a(!1)},h=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,b(d.current.value,j.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{onClick:function(){return a(!0)},className:"btn mx-2",children:"Entrar"}),Object(m.jsx)(P.a,{centered:!0,show:n,onHide:x,children:Object(m.jsxs)("form",{onSubmit:h,children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)(P.a.Title,{children:"Entrar"})}),Object(m.jsxs)(P.a.Body,{children:[l&&Object(m.jsx)(s.a,{variant:"danger",children:l}),Object(m.jsxs)(R.a.Group,{children:[Object(m.jsx)(R.a.Label,{children:"Escribe tu KL"}),Object(m.jsx)(R.a.Control,{type:"text",required:!0,ref:d})]}),Object(m.jsxs)(R.a.Group,{className:"d-none",children:[Object(m.jsx)(R.a.Label,{children:"Password"}),Object(m.jsx)(R.a.Control,{type:"password",required:!0,ref:j,value:"123456"})]})]}),Object(m.jsxs)(P.a.Footer,{children:[Object(m.jsx)(f.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(m.jsx)(f.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},K=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=Object(c.useContext)(O).register,h=function(){return a(!1)},v=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),j.current.value===b.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(d.current.value,j.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(P.a,{centered:!0,show:n,onHide:h,children:Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)(P.a.Title,{children:"Registro"})}),Object(m.jsxs)(P.a.Body,{children:[l&&Object(m.jsx)(s.a,{variant:"danger",children:l}),Object(m.jsxs)(R.a.Group,{children:[Object(m.jsx)(R.a.Label,{children:"Email"}),Object(m.jsx)(R.a.Control,{type:"email",required:!0,ref:d})]}),Object(m.jsxs)(R.a.Group,{children:[Object(m.jsx)(R.a.Label,{children:"Password"}),Object(m.jsx)(R.a.Control,{type:"password",required:!0,ref:j})]}),Object(m.jsxs)(R.a.Group,{children:[Object(m.jsx)(R.a.Label,{children:"Confirmar Password"}),Object(m.jsx)(R.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(m.jsxs)(P.a.Footer,{children:[Object(m.jsx)(f.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(m.jsx)(f.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},V=function(){var e=Object(c.useContext)(O),t=e.currentUser,n=e.logout;return Object(m.jsx)("nav",{className:"container-fluid navbar navbar-secondary bg-secondary",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("div",{className:"navbar-brand",children:" Incompletos De OXXO"}),Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)("div",{className:"col",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"btn disabled",children:t.email.slice(0,-10)}),Object(m.jsx)("div",{onClick:function(){return n()},className:"btn",children:"SALIR"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(H,{}),Object(m.jsx)(K,{})]})})})]})})},X=function(){return Object(m.jsx)(x,{children:Object(m.jsxs)(D,{children:[Object(m.jsx)(V,{}),Object(m.jsx)(B,{})]})})};n(138);Object(a.render)(Object(m.jsx)(X,{}),document.getElementById("root"))},94:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.71061fe2.chunk.js.map