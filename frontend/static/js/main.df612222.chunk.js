(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),r=n(8),i=(n(18),n(24)),p=n(13),l=n(2),u=c.a.createContext(),j=n.p+"static/media/Vector.03b78ada.svg",m=n(3),d=n(0);var b=function(e){var t=Object(m.h)();return Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{src:j,alt:"mesto logo",className:"logo"}),"/"===t.pathname&&Object(d.jsxs)("div",{className:"header__block",children:[Object(d.jsx)("p",{className:"header__email",children:e.email}),Object(d.jsx)("a",{className:"header__link",onClick:e.onSignout,children:"\u0412\u044b\u0439\u0442\u0438"})]}),"/sign-up"===t.pathname&&Object(d.jsx)(r.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}),"/sign-in"===t.pathname&&Object(d.jsx)(r.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})};var h=function(){return Object(d.jsx)("footer",{className:"footer page__footer",children:Object(d.jsx)("p",{className:"footer__author",children:"\xa9 2021 Mesto Russia lisenkin"})})};var _=function(e){var t=Object(a.useContext)(u),n=e.card.owner._id===t._id?Object(d.jsx)("button",{className:"place__button-remove",type:"button",onClick:function(){e.onCardDelete(e.card)}}):null,c=e.card.likes.some((function(e){return e._id===t._id})),s="place__like ".concat(c?"places__like_active":"");return Object(d.jsxs)("article",{className:"place",children:[Object(d.jsx)("img",{className:"place__photo",alt:e.card.name,src:e.card.link,onClick:function(){e.handleClick(e.card)}}),n,Object(d.jsxs)("div",{className:"place__textarea",children:[Object(d.jsx)("h2",{className:"place__text",children:e.card.name}),Object(d.jsxs)("div",{className:"place__column-block",children:[Object(d.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("span",{className:"place__score-like",children:e.card.likes.length})]})]})]})};var f=function(e){var t=Object(a.useContext)(u);return Object(d.jsxs)("main",{className:"page__content content",children:[Object(d.jsxs)("section",{className:"page__profile profile",children:[Object(d.jsx)("div",{className:"profile__overlay",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:t.avatar,alt:e.altAvatar,className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__info-textblock",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{className:"profile__button-edit",type:"button",onClick:e.onEditProfile})]}),Object(d.jsx)("p",{className:"profile__status",children:t.about})]}),Object(d.jsx)("button",{className:"profile__button-add",type:"button",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"page__places places"}),e.isLoading?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsx)("section",{className:"places__list page__places places",children:e.cards.map((function(t){return Object(d.jsx)(_,{card:t,handleClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})},O=n.p+"static/media/Close_Icon.61b629a4.svg";var x=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_visible"),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsx)("img",{src:O,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-button",onClick:e.onClose}),Object(d.jsx)("h3",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{className:"button popup__button-submit",type:"submit",children:e.textButton})]})]})})};var v=function(e){var t="popup popup_dark ".concat(e.card.isOpen?"popup_visible":"");return Object(d.jsx)("section",{className:t,id:"popup-image",children:Object(d.jsxs)("figure",{className:"popup__figure",children:[Object(d.jsx)("button",{className:"button popup__close-button",type:"button",onClick:e.onClose}),Object(d.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(d.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})})};var g=function(e){var t=Object(a.useContext)(u),n=Object(a.useState)(t.name),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(t.about),i=Object(l.a)(r,2),p=i[0],j=i[1];return Object(a.useEffect)((function(){o(t.name),j(t.about)}),[t,e.isOpen]),Object(d.jsxs)(x,{name:"popup-edit-card",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_name",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"popup-input-name",minLength:"2",maxLength:"40",value:s,onChange:function(e){o(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__error popup-input-name-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_status",type:"text",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",name:"popup-input-status",minLength:"2",maxLength:"200",value:p,onChange:function(e){j(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__error popup-input-status-error"})]})};var N=function(e){Object(a.useContext)(u);var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(d.jsxs)(x,{name:"popup-add-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:c})},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_photo",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"popup-input-url-avatar",value:c||"",onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__error popup-input-url-avatar-error"})]})};var k=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(d.jsxs)(x,{name:"popup-add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value}),t.current.value="",n.current.value=""},children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_place-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"popup-input-place-name",minLength:"2",maxLength:"30",ref:t,required:!0}),Object(d.jsx)("span",{className:"popup__error popup-input-place-name-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_photo",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"popup-input-url",ref:n,required:!0}),Object(d.jsx)("span",{className:"popup__error popup-input-url-error"})]})},C=n(22),y=n(23),S=new(function(){function e(t){var n=t.baseUrl,a=t.token;Object(C.a)(this,e),this._baseUrl=n,this._token=a}return Object(y.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"setCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",token:"1c58ab56-f6d5-4a78-b0cd-4b039a0e7da3"});var L=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),r=Object(l.a)(o,2),i=r[0],p=r[1];function u(e){e.preventDefault(),"email"===e.target.name?s(e.target.value):"password"===e.target.name&&p(e.target.value)}return Object(d.jsx)("section",{className:"form",children:Object(d.jsxs)("div",{className:"form__content",children:[Object(d.jsx)("h2",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"form__input",name:"form__input",onSubmit:function(t){t.preventDefault(),a&&i&&e.onLogin(a,i)},children:[Object(d.jsx)("input",{className:"form__email",id:"email",type:"email",placeholder:"Email",value:a,onChange:u,name:"email",required:!0}),Object(d.jsx)("span",{className:"form__email-error",id:"email-error"}),Object(d.jsx)("input",{className:"form__password",id:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:i,onChange:u,name:"password",required:!0}),Object(d.jsx)("span",{className:"form__password-error",id:"password-error"}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var E=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(l.a)(o,2),p=i[0],u=i[1];function j(e){e.preventDefault(),"email"===e.target.name?s(e.target.value):"password"===e.target.name&&u(e.target.value)}return Object(d.jsx)("section",{className:"form",children:Object(d.jsxs)("div",{className:"form__content",children:[Object(d.jsx)("h2",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"form__form",name:"form__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,p)},children:[Object(d.jsx)("input",{className:"form__email",type:"email",placeholder:"Email",value:a,onChange:j,name:"email",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{className:"form__email-error",name:"email-error"}),Object(d.jsx)("input",{className:"form__password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:p,onChange:j,name:"password",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{className:"form__password-error",name:"password-error"}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("div",{className:"form__signup",children:[Object(d.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(d.jsx)(r.b,{to:"/sign-in",className:"form__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},U=n(25),w=["component"],T=function(e){var t=e.component,n=Object(U.a)(e,w);return Object(d.jsx)(m.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(p.a)({},n)):Object(d.jsx)(m.a,{to:"./sign-in"})}})},A=n.p+"static/media/fail.df8eddf6.svg",P=n.p+"static/media/success.1b6082f8.svg";var I=function(e){return Object(d.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_visible"),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsx)("button",{className:"button popup__close-button",type:"button",onClick:e.onClose}),Object(d.jsxs)("div",{className:"popup__tooltip",children:[Object(d.jsx)("img",{className:"popup__tooltip-img",alt:"\u0443\u0441\u043f\u0435\u0445-\u043d\u0435-\u0443\u0441\u043f\u0435\u0445",src:e.success?P:A}),Object(d.jsx)("p",{className:"popup__tooltip-title",children:e.success?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})},D="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var q=function(){var e=Object(a.useState)({name:"Loading...",about:""}),t=Object(l.a)(e,2),n=t[0],s=t[1],o=c.a.useState(!1),r=Object(l.a)(o,2),j=r[0],_=r[1],O=c.a.useState(!1),C=Object(l.a)(O,2),y=C[0],U=C[1],w=c.a.useState(!1),A=Object(l.a)(w,2),P=A[0],q=A[1],z=c.a.useState({isOpen:!1}),B=Object(l.a)(z,2),J=B[0],F=B[1],H=Object(a.useState)([]),M=Object(l.a)(H,2),G=M[0],V=M[1],K=c.a.useState(!1),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=c.a.useState(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],se=Object(m.g)(),oe=c.a.useState(!1),re=Object(l.a)(oe,2),ie=re[0],pe=re[1];function le(){_(!1),U(!1),q(!1),F({isOpen:!1}),ce(!1)}return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(D,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(R)).then((function(e){e?(X(!0),ee(e.data.email),se.push("/")):(pe(!1),ce(!0))})).catch((function(e){console.error(e),pe(!1),ce(!0)}));var t}(),S.getInitialCards().then((function(e){V(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(a.useEffect)((function(){S.getUserInfo().then((function(e){s(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(d.jsx)("div",{className:"page__content",children:Object(d.jsxs)(u.Provider,{value:n,children:[Object(d.jsx)(b,{loggedIn:W,email:$,onSignout:function(){localStorage.removeItem("jwt"),ee(""),X(!1),se.push("/sign-in")}}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",component:f,onEditAvatar:function(){q(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){U(!0)},onCardClick:function(e){F(Object(p.a)({isOpen:!0},e))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));S.changeLikeCardStatus(e._id,t).then((function(t){var n=G.map((function(n){return n._id===e._id?t:n}));V(n)})).catch((function(e){return console.log("Error: ".concat(e))}))},onCardDelete:function(e){S.removeCard(e._id).then((function(t){var n=G.filter((function(t){return t._id===e._id?null:t}));V(n)})).catch((function(e){return console.log("Error: ".concat(e))}))},cards:G,loggedIn:W}),Object(d.jsx)(m.b,{path:"/sign-in",children:Object(d.jsx)(L,{onLogin:function(e,t){return function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)}(e,t).then((function(t){localStorage.setItem("jwt",t.token),ee(e),X(!0),se.push("/")})).catch((function(e){console.error(e),pe(!1),ce(!0)}))}})}),Object(d.jsx)(m.b,{path:"/sign-up",children:Object(d.jsx)(E,{onRegister:function(e,t){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)})(e,t).then((function(){se.push("/sign-in"),pe(!0),ce(!0)})).catch((function(e){console.error(e),pe(!1),ce(!0)}))}})}),Object(d.jsxs)(m.b,{children:[" ",W?Object(d.jsx)(m.a,{to:"/"}):Object(d.jsx)(m.a,{to:"/sign-in"})]})]}),Object(d.jsx)(h,{text:"2021 mesto lisenkin"}),Object(d.jsx)(g,{isOpen:j,onClose:le,onUpdateUser:function(e){var t=e.name,n=e.about;S.setUserInfo({name:t,about:n}).then((function(e){s(e),le()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(d.jsx)(k,{isOpen:y,onClose:le,onAddPlace:function(e){var t=e.name,n=e.link;S.setCard({name:t,link:n}).then((function(e){V([e].concat(Object(i.a)(G))),le()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(d.jsx)(N,{isOpen:P,onClose:le,onUpdateAvatar:function(e){S.editUserAvatar(e).then((function(t){s(e),le()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(d.jsx)(x,{name:"popup-remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430"}),Object(d.jsx)(v,{isOpen:J,card:J,onClose:le}),Object(d.jsx)(I,{isOpen:ae,success:ie,onClose:le})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root")),z()}},[[36,1,2]]]);
//# sourceMappingURL=main.df612222.chunk.js.map