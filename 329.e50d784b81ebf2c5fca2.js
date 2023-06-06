"use strict";(self.webpackChunkwrench=self.webpackChunkwrench||[]).push([[329],{329:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(893);const s={search:"LNpsDIGM",find:"rxm9RFdn",AddressForm:"SYzb_beW",inpt:"DpfcQXjt",contentWrapper:"zw2TBSV4",icon:"O2F56GL5",data:"mid7uKCZ",title:"oeZNAYKx",item:"wONlAFK2",error:"yuOiuH3g"};var a=r(611);const i={Button:"a4nOaSMD",standard:"HNuntNM_"};var o,c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},c.apply(this,arguments)};!function(e){e.STANDARD="standard"}(o||(o={}));var l=function(e){var t=e.className,r=e.children,s=e.theme,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}(e,["className","children","theme"]);return(0,n.jsx)("button",c({className:(0,a.A)(i.Button,{},[t,i[s]])},o,{children:r}),void 0)},d=r(429),u=r(536);const p={input:"LVdIPwcx"};var v=r(294),h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},h.apply(this,arguments)},f=(0,v.memo)((0,v.forwardRef)((function(e,t){var r=e.className,s=e.type,i=void 0===s?"text":s,o=e.placeholder,c=e.defaultValue,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}(e,["className","type","placeholder","defaultValue"]);return(0,n.jsx)("div",h({className:(0,a.A)(p.InputWrapper,{},[r])},{children:(0,n.jsx)("input",h({type:i,ref:t,defaultValue:c,placeholder:o,className:p.input},l),void 0)}),void 0)}))),m=r(246),j=r(767),g=r(861),y={method:"POST",mode:"cors"},b=g.Z.create({baseURL:"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token fc34a6b27fc270e70216ac8acf988a8b6452afc9"}}),x=function(e){return b.post("",e,y)},O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},O.apply(this,arguments)},N=function(e){var t,r,i=e.className,c=(0,u.cI)(),p=c.register,h=c.handleSubmit,g=c.formState.errors,y=function(){var e=(0,v.useState)(null),t=e[0],r=e[1],n=(0,j.useMutation)(x,{mutationKey:["getAddress"],onSuccess:function(e){r(e.data)},onError:function(e){throw new Error(e.message)}});return{getAddress:n.mutate,isLoading:n.isLoading,data:t}}(),b=y.isLoading,N=y.getAddress,w=y.data;return b?(0,n.jsx)(m.w,{},void 0):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",O({style:{marginBottom:"32px"}},{children:(0,n.jsx)("form",O({onSubmit:h((function(e){N(e)}))},{children:(0,n.jsxs)("div",O({className:(0,a.A)(s.AddressForm,{},[i])},{children:[(0,n.jsx)(f,O({defaultValue:""},p("query",{minLength:3,required:!0}),{className:s.inpt,placeholder:"Введите интересующий вас адрес"}),void 0),(0,n.jsx)(l,O({theme:o.STANDARD,type:"submit",className:s.btn},{children:(0,n.jsxs)("div",O({className:s.contentWrapper},{children:[(0,n.jsx)("div",O({className:s.icon},{children:(0,n.jsx)(d.Z,{className:s.search},void 0)}),void 0),(0,n.jsx)("div",O({className:s.find},{children:"Поиск"}),void 0)]}),void 0)}),void 0)]}),void 0)}),void 0)}),void 0),g.query&&(0,n.jsx)("div",O({className:s.data},{children:(0,n.jsx)("div",O({className:s.error},{children:"Минимальная длина ввода в поле ввода адреса - 3 символа"}),void 0)}),void 0),(null===(t=null==w?void 0:w.suggestions)||void 0===t?void 0:t.length)>0&&(0,n.jsxs)("div",O({className:s.data},{children:[(0,n.jsx)("h3",O({className:s.title},{children:"Адреса"}),void 0),w&&0===(null===(r=w.suggestions)||void 0===r?void 0:r.length)&&(0,n.jsx)("div",{children:"Адреса не найдены"},void 0),(0,n.jsx)("ul",{children:w.suggestions.length>0&&w.suggestions.map((function(e,t){return(0,n.jsx)("li",O({className:s.item},{children:e.value}),t)}))},void 0)]}),void 0)]},void 0)},w=function(){return w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},w.apply(this,arguments)};const A=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",w({className:"DC95qaZI"},{children:"Поиск адресов"}),void 0),(0,n.jsx)("div",w({className:"A2sMPP21"},{children:"Введите интересующий вас адрес"}),void 0),(0,n.jsx)("div",w({className:"d6cM261b"},{children:(0,n.jsx)(N,{},void 0)}),void 0)]},void 0)}}}]);