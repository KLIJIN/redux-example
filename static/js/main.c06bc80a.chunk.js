(this["webpackJsonpscrimba-cart"]=this["webpackJsonpscrimba-cart"]||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(15),a(2)),m=Object(o.b)((function(e){return{amount777:e.amount}}))((function(e){var t=e.amount777;return console.log("NAVBAR",t),r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-center"},r.a.createElement("h3",null,"ReduxGear"),r.a.createElement("div",{className:"nav-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),r.a.createElement("div",{className:"amount-container"},r.a.createElement("p",{className:"total-amount"}," ",t," ")))))})),u=function(e){var t=e.id,a=e.img,n=e.title,c=e.price,l=e.amount,o=e.decrease,m=e.increase,u=e.remove;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",null,r.a.createElement("h4",null,n),r.a.createElement("h4",{className:"item-price"},"$",c),r.a.createElement("button",{className:"remove-btn",onClick:function(){u(t,l)}}," remove ")),r.a.createElement("div",null,r.a.createElement("button",{className:"amount-btn",onClick:function(){m(t,l)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),r.a.createElement("p",{className:"amount"},l),r.a.createElement("button",{className:"amount-btn",onClick:function(){o(t,l)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))},i=Object(o.b)((function(e){return{cart123:e.cart,total:e.total}}),(function(e){return{clearCart:function(){e({type:"CLEAR_CART"})},decrease:function(t,a){e(function(e,t){return{type:"DECREASE",payload:{id:e,amount:t}}}(t,a))},increase:function(t,a){e(function(e,t){return{type:"INCREASE",payload:{id:e,amount:t}}}(t,a))},remove:function(t){e(function(e){return{type:"REMOVE",payload:{id:e}}}(t))},getTotals:function(){e({type:"GET_TOTALS"})}}}))((function(e){var t=e.cart123,a=e.total,c=e.clearCart,l=e.decrease,o=e.increase,m=e.remove,i=e.getTotals;return Object(n.useEffect)((function(){i()}),[t,i]),console.log("CartContainer",t),0===t.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag"),r.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag")),r.a.createElement("article",null,t.map((function(e){return r.a.createElement(u,Object.assign({key:e.id},e,{decrease:l,increase:o,remove:m}))}))),r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h4",null,"total ",r.a.createElement("span",null,"$",a))),r.a.createElement("button",{className:"btn clear-btn",onClick:c},"    Clear Cart   ")))})),s=a(4),E=a(1),d={cart:[{id:1,title:"Samsung Galaxy S7",price:599.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:499.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:699.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",amount:1}],total:0,amount:0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"DECREASE":return console.log("YOU PUSH DECREASE",t.payload),a=e.cart.map((function(e){return e.id===t.payload.id&&(e=(e=Object(E.a)({},e,{amount:e.amount-1})).amount<1?Object(E.a)({},e,{amount:1}):Object(E.a)({},e)),e})),Object(E.a)({},e,{cart:a});case"INCREASE":return console.log("YOU PUSH INCREASE",t.payload.id,t.payload.amount),a=e.cart.map((function(e){return e.id===t.payload.id&&(e=Object(E.a)({},e,{amount:e.amount+1})),e})),Object(E.a)({},e,{cart:a});case"REMOVE":return console.log("YOU PUSH REMOVE",t.payload),Object(E.a)({},e,{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CLEAR_CART":return Object(E.a)({},e,{cart:[]});case"GET_TOTALS":console.log("CONSOLE TOTALS",e.cart);var n=e.cart.reduce((function(e,t){console.log(t);var a=t.price,n=t.amount,r=a*n;return e.total+=r,e.amount+=n,e}),{total:0,amount:0}),r=n.total,c=n.amount;return r=parseFloat(r.toFixed(2)),Object(E.a)({},e,{total:r,amount:c});default:return e}},v=Object(s.b)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=v.getState();console.log("currentState",g);var f=function(){return r.a.createElement(o.a,{store:v},r.a.createElement(m,null),r.a.createElement(i,null))};l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c06bc80a.chunk.js.map