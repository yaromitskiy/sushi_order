(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1tm_I",total:"Cart_total__FtHMz",actions:"Cart_actions__v-4y8","button--alt":"Cart_button--alt__niiQ5",button:"Cart_button__35J9l"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__f8Jxe",summary:"CartItem_summary__gs3yi",price:"CartItem_price__UdKgv",amount:"CartItem_amount__1BXe2",actions:"CartItem_actions__RYQ-O"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1En_B",icon:"HeaderCartButton_icon__2-a9-",badge:"HeaderCartButton_badge__1r94E",bump:"HeaderCartButton_bump__8q76L"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2IJVu",modal:"Modal_modal__30Hf9","slide-down":"Modal_slide-down__3jNf1"}},function(e,t,n){e.exports={meal:"MealItem_meal__3nshB",description:"MealItem_description__1ZpC1",price:"MealItem_price__1tj-J"}},,function(e,t,n){e.exports={header:"Header_header__1haOd","main-image":"Header_main-image__101ry"}},,function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__3lRJY"}},function(e,t,n){e.exports={card:"Card_card__3b09E"}},function(e,t,n){e.exports={input:"Input_input__2ahFj"}},function(e,t,n){e.exports={form:"MealItemForm_form__3J9a-"}},function(e,t,n){e.exports={meals:"MealList_meals__2LKWv","meals-appear":"MealList_meals-appear__1R9QC"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(2),d=n(10),m=n.n(d),l=n(0),j=function(e){return Object(l.jsx)("div",{className:m.a.backdrop,onClick:e.onHideCart})},u=function(e){return Object(l.jsx)("div",{className:m.a.modal,children:Object(l.jsx)("div",{className:m.a.content,children:e.children})})},b=document.getElementById("overlays");var x=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(l.jsx)(j,{onHideCart:e.onHideCart}),b),c.a.createPortal(Object(l.jsx)(u,{children:e.children}),b)]})},O=n(4),p=n.n(O),_=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),h=n(5),f=n.n(h),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:f.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:f.a.summary,children:[Object(l.jsx)("span",{className:f.a.price,children:t}),Object(l.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:f.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var C=function(e){var t=Object(r.useContext)(_),n="$".concat(Math.abs(t.totalAmount).toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},s=Object(l.jsx)("ul",{className:p.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onAdd:i.bind(null,e),onRemove:c.bind(null,e.id)},e.id)}))});return Object(l.jsxs)(x,{onHideCart:e.onHideCart,children:[s,Object(l.jsxs)("div",{className:p.a.total,children:[Object(l.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("div",{className:p.a.actions,children:[Object(l.jsx)("button",{className:p.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),a&&Object(l.jsx)("button",{className:p.a.button,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]})]})},I=n(13),N=n.n(I),g=n.p+"static/media/sushi.a2b4b921.jpg",H=n(8),M=n.n(H);var A=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})};var y=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(_),o=s.items.reduce((function(e,t){return e+t.amount}),0),d="".concat(M.a.button," ").concat(a?M.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]),Object(l.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(l.jsx)("span",{className:M.a.icon,children:Object(l.jsx)(A,{})}),Object(l.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(l.jsx)("span",{className:M.a.badge,children:o})]})};var E=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("header",{className:N.a.header,children:[Object(l.jsx)("h1",{children:"\u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(l.jsx)(y,{onClick:e.onShowCart})]}),Object(l.jsx)("div",{className:N.a["main-image"],children:Object(l.jsx)("img",{src:g,alt:"\u0411\u043b\u044e\u0434\u0430 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438"})})]})},k=n(15),w=n.n(k);var B=function(){return Object(l.jsxs)("section",{className:w.a["promo-text"],children:[Object(l.jsx)("h2",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0421\u0443\u0448\u0438 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u042f\u043f\u043e\u043d\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(l.jsx)("p",{children:"\u042f\u043f\u043e\u043d\u0430 \u043a\u0443\u0445\u044f - \u044d\u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0438 - \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0441\u0443\u0448\u0438 \u0438 \u0441\u0430\u0448\u0438\u043c\u0438, \u0440\u043e\u043b\u043b\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043b\u044e\u0434\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0430\u0440\u043e\u0432."}),Object(l.jsx)("p",{children:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0440\u0438\u0434\u0430\u044e\u0442 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0432\u043a\u0443\u0441 \u0431\u043b\u044e\u0434\u0430\u043c, \u0434\u0430\u0440\u044f\u0442 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0442 \u0442\u0440\u0430\u043f\u0435\u0437\u044b."})]})},F=n(16),R=n.n(F);var T=function(e){return Object(l.jsx)("div",{className:R.a.card,children:e.children})},J=n(11),S=n.n(J),D=n(17),z=n.n(D),L=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:z.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(o.a)({ref:t},e.input))]})})),P=n(18),V=n.n(P);var Q=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(l.jsxs)("form",{className:V.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value;0===n.trim().length||+n<1||+n>10?c(!1):e.onAddToCart(+n)},children:[Object(l.jsx)(L,{ref:s,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",input:{id:e.id,type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),!a&&Object(l.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442 1 \u0434\u043e 10!"})]})};var $=function(e){var t=Object(r.useContext)(_),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:S.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:S.a.description,children:e.description}),Object(l.jsx)("div",{className:S.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(Q,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},K=n(19),Y=n.n(K),q=[{id:"m1",name:'\u0420\u043e\u043b\u043b "\u041d\u0430\u043e\u043c\u0438"',description:"\u0421\u044b\u0440 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f, \u043a\u0443\u0440\u0438\u043d\u043e\u0435 \u0444\u0438\u043b\u0435, \u043c\u0430\u0441\u0430\u0433\u043e, \u043f\u043e\u043c\u0438\u0434\u043e\u0440, \u043e\u0433\u0443\u0440\u0435\u0446, \u043a\u0443\u043d\u0436\u0443\u0442",price:11.99},{id:"m2",name:"\u0421\u043f\u0430\u0439\u0441 \u0432 \u043b\u043e\u0441\u043e\u0441\u0435",description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u0441\u043e\u0443\u0441 \u0441\u043f\u0430\u0439\u0441",price:3.99},{id:"m3",name:"\u0421\u0443\u0448\u0438 \u0441 \u0443\u0433\u0440\u0435\u043c",description:"\u0423\u0433\u043e\u0440\u044c \u043a\u043e\u043f\u0447\u0435\u043d\u044b\u0439, \u0441\u043e\u0443\u0441 \u0443\u043d\u0430\u0433\u0438, \u043a\u0443\u043d\u0436\u0443\u0442",price:4.99},{id:"m4",name:'\u0421\u0430\u043b\u0430\u0442 "\u041f\u043e\u043a\u0435 \u0441 \u043b\u043e\u0441\u043e\u0441\u0435\u043c"',description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u043e\u0433\u0443\u0440\u0435\u0446, \u0447\u0443\u043a\u0430, \u043d\u043e\u0440\u0438, \u0441\u0442\u0440\u0443\u0436\u043a\u0430 \u0442\u0443\u043d\u0446\u0430, \u0441\u043e\u0443\u0441 \u043e\u0440\u0435\u0445\u043e\u0432\u044b\u0439",price:7.99}];var U=function(){var e=q.map((function(e){return Object(l.jsx)($,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:Y.a.meals,children:Object(l.jsx)(T,{children:Object(l.jsx)("ul",{children:e})})})};var W=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(B,{}),Object(l.jsx)("main",{children:Object(l.jsx)(U,{})})]})},X=n(14),Z={items:[],totalAmount:0},G=function(e,t){if("ADD_ITEM"===t.type){var n,a,c=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(o.a)(Object(o.a)({},r),{},{amount:r.amount+t.item.amount}),(a=Object(X.a)(e.items))[i]=n):(n=Object(o.a)({},t.item),a=e.items.concat(n)),{items:a,totalAmount:c}}if("REMOVE_ITEM"===t.type){var s,d=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[d],l=e.totalAmount-m.price;if(1===m.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(o.a)(Object(o.a)({},m),{},{amount:m.amount-1});(s=Object(X.a)(e.items))[d]=j}return{items:s,totalAmount:l}}return Z};var ee=function(e){var t=Object(r.useReducer)(G,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})}};return Object(l.jsx)(_.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(ee,{children:[n&&Object(l.jsx)(C,{onHideCart:function(){a(!1)}}),Object(l.jsx)(E,{onShowCart:function(){a(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(W,{})})]})};c.a.render(Object(l.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.71373eb3.chunk.js.map