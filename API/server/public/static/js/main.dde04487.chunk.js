(this["webpackJsonpmetal-app"]=this["webpackJsonpmetal-app"]||[]).push([[0],{38:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),r=a.n(c),o=a(24),i=a.n(o),s=a(11),l=(a(38),a(6)),d=a(3),u=a(31),j=a(15),b=a(4),h=a.n(b),m=a(10),p=a(25),v=a(26),f=a(32),O=a(30);a(40);var x=function(t){var e=t.manageSearchInput,a=void 0===e?function(){}:e,c=t.showSearch,r=void 0===c?function(){}:c;return Object(n.jsxs)("form",{className:"form-inline",children:[Object(n.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onInput:a}),Object(n.jsx)("button",{className:"btn btn-outline-primary ",type:"submit",onClick:r,children:"Search"})]})};a(41);var g=function(t){var e=t.changeModal,a=void 0===e?function(){}:e,c=t.manageSearchInput,r=void 0===c?function(){}:c,o=t.showSearch,i=void 0===o?function(){}:o,s=t.title;return Object(n.jsx)("div",{className:"action-menu",children:Object(n.jsxs)("div",{className:"actions-menu-content",children:[Object(n.jsxs)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:a,children:["Agregar ","Artistas"===s?"artista":"banda"]}),Object(n.jsx)(x,{manageSearchInput:r,showSearch:i})]})})};a(42);var y=function(t){return 0!==t.columnas.length&&Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"ID"}),t.columnas.map((function(t,e){return Object(n.jsx)("th",{scope:"col",children:t},"Titulo-".concat(e))})),Object(n.jsx)("th",{scope:"col"})]})})},N=a(27),w=a.n(N),k=a(19),M=a(20);a(48);var S=function(t){var e=t.type,a=t.onClick,c=void 0===a?function(){}:a,r=t.index,o=void 0===r?"":r;return Object(n.jsxs)("button",{type:"button",className:w()("btn",{"btn-info":"editar"===e,"btn-danger":"eliminar"===e}),onClick:function(t){return c(t,o)},children:["editar"===e&&Object(n.jsx)(k.a,{icon:M.a}),"eliminar"===e&&Object(n.jsx)(k.a,{icon:M.b})]})},C=(a(49),function(t){var e=t.entidad,a=t.col;return"object"===typeof e[a]?"objeto":e[a]});var I=function(t){var e=t.index,a=t.entidad,c=t.editEntity,r=void 0===c?function(){}:c,o=t.deleteEntidad,i=void 0===o?function(){}:o,s=t.columnas,l=void 0===s?[]:s;return Object(n.jsxs)("tr",{className:"row",children:[Object(n.jsx)("th",{scope:"row",children:e}),l.map((function(t,e){return Object(n.jsxs)("td",{children:[" ",C({entidad:a,col:t})," "]},"col-".concat(t,"-").concat(e))})),Object(n.jsx)("td",{className:"actionRow",children:Object(n.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(n.jsx)(S,{type:"editar",onClick:r,index:e}),Object(n.jsx)(S,{type:"eliminar",onClick:function(t){return i(t,e)}})]})})]})};a(50);var E=function(t){var e=t.entidades,a=void 0===e?[]:e,c=t.editEntity,r=void 0===c?function(){}:c,o=t.deleteEntidad,i=void 0===o?function(){}:o,s=t.columnas,l=void 0===s?[]:s;return Object(n.jsxs)("table",{className:"table table-stripped table-hover",children:[Object(n.jsx)(y,{columnas:l}),Object(n.jsx)("tbody",{id:"lista-bandas",children:a.map((function(t,e){return Object(n.jsx)(I,{index:!!t._id&&t._id,entidad:t,editEntity:r,deleteEntidad:i,columnas:l},"fila-".concat(e))}))})]})};a(51);var T=function(t){var e=t.changeModal,a=void 0===e?function(){}:e,c=t.entidad,r=void 0===c?"":c;return Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsxs)("h5",{className:"modal-title",id:"exampeModalCenterTitle",children:["Agregar ","artists"===r?"artista":"banda"]}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})};a(52);var P=function(t){var e=t.changeModal,a=void 0===e?function(){}:e,c=t.createEntity,r=void 0===c?function(){}:c;return Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsx)("button",{onClick:a,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cerrar"}),Object(n.jsx)("button",{onClick:r,type:"button",className:"btn btn-primary","data-dismiss":"modal",id:"btn-guardar",children:"Aceptar"})]})};a(53);var A=function(t){var e=t.changeModal,a=void 0===e?function(){}:e,c=t.createEntity,r=void 0===c?function(){}:c,o=t.children,i=void 0===o?[]:o,s=t.entidad,l=void 0===s?"":s;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"modal",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)(T,{changeModal:a,entidad:l}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsx)("form",{id:"form",children:i})}),Object(n.jsx)(P,{changeModal:a,createEntity:r})]})})})}),Object(n.jsx)("div",{className:"modal-backdrop fade show"})]})};a(54);var D=function(t){var e=t.type,a=void 0===e?"text":e,c=t.nombreCampo,r=t.placeholder,o=t.onInput,i=void 0===o?function(){}:o,s=t.value,l=void 0===s?"":s;return Object(n.jsx)("input",{type:a,id:c,name:c,className:"form-control",placeholder:r,onInput:i,defaultValue:l})};a(55);var L=function(t){var e=t.options,a=void 0===e?[]:e,c=t.nombreCampo,r=void 0===c?"vacio":c,o=t.placeholder,i=t.onChange,s=void 0===i?function(){}:i,l=t.value,d=void 0===l?"":l;return Object(n.jsxs)("select",{id:r,className:"form-control",onChange:s,name:r,defaultValue:d,children:[Object(n.jsxs)("option",{value:"",children:["Seleccione ",o," "]}),a.map((function(t,e){var a=t._value,c=t.tag;return Object(n.jsx)("option",{value:a,children:c},"".concat(o,"-").concat(e,"-").concat(a,"-").concat(c))}))]})};var B=function(t){var e=t.manageInput,a=void 0===e?function(){}:e,r=t.objeto,o=void 0===r?{}:r,i=t.nombreCampo,s=void 0===i?"":i,l=t.options,d=void 0===l?{}:l;switch(Object(c.useEffect)((function(){}),[]),s){case"style":case"state":return Object(n.jsx)("div",{className:"form-row",children:d[s].length>0?Object(n.jsx)(L,{nombreCampo:s,options:d[s],onChange:a,placeholder:s,defaultValue:o[s],selectedValue:o[s],value:o[s]}):"cargando"});case"name":case"surname":case"apellido":return Object(n.jsx)("div",{className:"form-row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(D,{nombreCampo:s,type:"text",onInput:a,placeholder:s,value:o[s]})})});default:return!1}};a(56),a(57);var R=function(t){var e=t.bandImg,a=void 0===e?"":e,c=t.highlights,r=void 0===c?{}:c,o=t.show,i=void 0===o?"":o;return Object(n.jsxs)("div",{className:"highlight ".concat(i),children:[Object(n.jsx)("a",{href:"".concat(r.imgLink),target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{alt:"banda-".concat(r.name),src:a})}),Object(n.jsx)("div",{className:"detail",children:Object(n.jsx)("p",{children:r.name})})]})},U=a.p+"static/media/horcas.d81d42a6.jpg",F=a.p+"static/media/logos.f566db8c.jpg",H=a.p+"static/media/turilliLione.24051c35.jpg",J=a.p+"static/media/Renacer.46b1dd4e.jpg",V=[{name:"Horcas",imgUrl:"horcas.jpg",imgLink:"https://open.spotify.com/artist/0R0FEEepfDr3js3lsGPykq"},{name:"Logos",imgUrl:"logos.jpg",imgLink:"https://open.spotify.com/artist/4aCWTRWrh5lyIaZTVCP6ja"},{name:"Turilli/Lione Rhapsody",imgUrl:"turilliLione.jpg",imgLink:"https://open.spotify.com/artist/4jp6jGwANHkhNr6gbJNhiy"},{name:"Renacer",imgUrl:"Renacer.jpg",imgLink:"https://open.spotify.com/artist/7B9pJzrDTdS1HCnuNQklaU"}];var _=function(){return Object(n.jsxs)("div",{className:"news-link-container",children:[Object(n.jsx)("div",{className:"show-large",children:Object(n.jsx)(R,{bandImg:U,highlights:V[0],show:"large"})}),Object(n.jsxs)("div",{className:"show-small",children:[Object(n.jsx)(R,{bandImg:F,highlights:V[1],show:"small"}),Object(n.jsx)(R,{bandImg:H,highlights:V[2],show:"small"}),Object(n.jsx)(R,{bandImg:J,highlights:V[3],show:"small"})]})]})},G=a(28),W=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,n,c,r,o,i,s,l,d,u,j,b,m,p,v,f,O;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.entidad,n=void 0===a?"bands":a,c=e.search,r=void 0===c?"":c,o=e.columnas,i=void 0===o?[]:o,s=e.bandas,l=void 0===s?"":s,d=e.artistas,u=void 0===d?"":d,t.prev=1,j="".concat("","/").concat(n),r.length>0&&i.length>0||l||u){b="?",m=Object(G.a)(i);try{for(m.s();!(p=m.n()).done;)v=p.value,b+="".concat(v,"=").concat(r,"&")}catch(h){m.e(h)}finally{m.f()}j+=b}return t.next=6,fetch(j);case 6:return f=t.sent,t.next=9,f.json();case 9:return O=t.sent,t.abrupt("return",O);case 13:t.prev=13,t.t0=t.catch(1),console.log({error:t.t0});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,n,c,r,o,i,s,l,d,u,j;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.entidad,n=void 0===a?"bands":a,c=e.objeto,r=void 0===c?{}:c,o=e.method,i=void 0===o?"POST":o,s=e.idObjeto,l=void 0===s?null:s,t.prev=1,d=null,"PUT"!==i||!l&&0!==l?"POST"===i&&(d="".concat("","/").concat(n)):d="".concat("","/").concat(n,"/").concat(l),d){t.next=6;break}throw new Error("No cumple criterios de envio");case 6:return t.next=8,fetch(d,{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify(r),mode:"cors"});case 8:return u=t.sent,t.next=11,u.json();case 11:return j=t.sent,console.log(u),t.abrupt("return",j);case 16:t.prev=16,t.t0=t.catch(1),console.log({error:t.t0});case 19:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,n,c,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.entidad,n=void 0===a?"bands":a,c=e.idObjeto,r=void 0===c?null:c,t.prev=1,!r&&0!==r){t.next=10;break}return t.next=5,fetch("".concat("","/").concat(n,"/").concat(r),{method:"DELETE"});case 5:return o=t.sent,t.next=8,o.json();case 8:return i=t.sent,t.abrupt("return",i);case 10:throw new Error("idObjeto null/undefined");case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,n,c,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.entidad,n=void 0===a?"bands":a,c=e.idObjeto,null!==(r=void 0===c?null:c)&&n){t.next=3;break}return t.abrupt("return",{});case 3:return t.prev=3,t.next=6,fetch("".concat("","/").concat(n,"/").concat(r));case 6:return o=t.sent,t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(3),console.log({error:t.t0});case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),Z={state:[{value:"Activo",tag:"Activo"},{value:"No activo",tag:"No activo"},{value:"Sin Infomracion",tag:"Sin Informaci\xf3n"}],style:[{value:"Power Metal",tag:"Power Metal"},{value:"Metal",tag:"Metal"},{value:"Heavy Metal",tag:"Heavy Metal"},{value:"Trash Metal",tag:"Trash Metal"},{value:"Speed Metal",tag:"Speed Metal"},{value:"Death Metal",tag:"Death Metal"},{value:"Black Metal",tag:"Black Metal"},{value:"Doom Metal",tag:"Doom Metal"},{value:"Nu Metal",tag:"Nu Metal"},{value:"Glam Metal",tag:"Glam Metal"}],bandas:[],artistas:[]},K=function(t){Object(f.a)(a,t);var e=Object(O.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).changeModal=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=Object(l.a)(Object(l.a)({},a),{},{showModal:!n.state.showModal,method:e});"POST"===e&&(c=Object(l.a)(Object(l.a)({},c),{},{idObjeto:null,objeto:{}})),n.getOpctionsFromBack(c)},n.listar=Object(m.a)(h.a.mark((function t(){var e,a,c,r,o,i,s,l,d,u=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=u.length>0&&void 0!==u[0]?u[0]:null)&&e.preventDefault(),a=n.props.entidad,c=n.state,r=c.search,o=c.columnas,i=c.bandas,s=c.artistas,t.next=6,W({entidad:a,search:r,columnas:o,bandas:i,artistas:s});case 6:l=t.sent,console.log({entidad:a,search:r,columnas:o,entidades:l}),d=[],Array.isArray(l)&l.length>0&&(d=Object.keys(l[0]).filter((function(t){return"_id"!==t}))||[]),n.setState({entidades:l,columnas:d});case 11:case"end":return t.stop()}}),t)}))),n.manageInput=function(t){var e=t.target,a=e.value,c=e.name,r=n.state.objeto;r=Object(l.a)(Object(l.a)({},r),{},Object(j.a)({},c,a)),n.setState({objeto:r})},n.createEntity=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,c,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.entidad,c=n.state,r=c.objeto,o=c.method,i=c.idObjeto,t.next=4,q({entidad:a,objeto:r,method:o,idObjeto:i});case 4:n.changeModal(e,"POST",{objeto:{},idObjeto:null});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.getOpctionsFromBack=function(){var t=Object(m.a)(h.a.mark((function t(e){var a,c,r,o,i,s,d,j,b,m;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.state.options,c=W({entidad:"bands"}),r=W({entidad:"artists"}),t.next=5,Promise.all([c,r]);case 5:o=t.sent,i=Object(u.a)(o,2),s=i[0],d=void 0===s?[]:s,j=i[1],b=void 0===j?[]:j,d=d.map((function(t,e){return{value:t.id,tag:"".concat(t.name," (").concat(t.style,")")}})),b=b.map((function(t,e){return{value:t.id,tag:"".concat(t.name," ").concat(t.apellido)}})),m=Object(l.a)(Object(l.a)({},a),{},{bandas:d,artistas:b}),console.log(m),n.setState(Object(l.a)(Object(l.a)({},e),{},{options:m})),n.listar();case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.editEntity=function(){var t=Object(m.a)(h.a.mark((function t(e,a){var c,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.props.entidad,t.next=3,Q({entidad:c,idObjeto:a});case 3:r=t.sent,o={objeto:r,idObjeto:a},n.changeModal(null,"PUT",o);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),n.deleteEntidad=function(){var t=Object(m.a)(h.a.mark((function t(e,a){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.props.entidad,t.next=3,z({entidad:c,idObjeto:a});case 3:r=t.sent,console.log(r),n.listar();case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),n.manageSearchInput=function(t){var e=t.target.value,a=n.state.search;a=e,n.setState({search:a})},n.state={showModal:!1,entidades:[],objeto:{},idObjeto:null,method:"POST",columnas:[],options:Z,search:"",bandas:"",artistas:""},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.listar()}},{key:"render",value:function(){var t=this,e=this.props,a=e.title,c=void 0===a?"Pagina sin titulo":a,r=e.entidad,o=this.state,i=o.columnas,s=o.idObjeto,l=o.entidades,d=o.objeto,u=o.options;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{}),Object(n.jsx)(g,{title:c,changeModal:this.changeModal,manageSearchInput:this.manageSearchInput,showSearch:this.listar}),Object(n.jsx)(E,{entidades:l,editEntity:this.editEntity,deleteEntidad:this.deleteEntidad,columnas:i}),this.state.showModal&&Object(n.jsx)(A,{changeModal:this.changeModal,manageInput:this.manageInput,createEntity:this.createEntity,entidad:r,idObjeto:s,children:i.map((function(e,a){return Object(n.jsx)(B,{manageInput:t.manageInput,objeto:d,nombreCampo:e,options:u},a)}))})]})}}]),a}(c.Component);a(58);var X=function(t){return t.title,Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(n.jsx)(s.b,{className:"navbar-brand",to:"/",children:" SONIDO MET\xc1LICO "}),Object(n.jsx)("div",{className:"navbar-right",id:"navbarColor03",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)(s.b,{className:"nav-link",to:"/",children:["Bandas ",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(s.b,{className:"nav-link",to:"/artistas",children:"Artistas"})})]})})]})})};a(61);var Y=function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(X,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:function(t){return Object(n.jsx)(K,Object(l.a)(Object(l.a)({},t),{},{title:"Bandas",entidad:"bands"}))}}),Object(n.jsx)(d.a,{path:"/artistas",component:function(t){return Object(n.jsx)(K,Object(l.a)(Object(l.a)({},t),{},{title:"Artistas",entidad:"artists"}))}}),Object(n.jsx)(d.a,{path:"/bandas",component:function(t){return Object(n.jsx)(K,Object(l.a)(Object(l.a)({},t),{},{title:"Bandas",entidad:"bands"}))}})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(Y,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.dde04487.chunk.js.map