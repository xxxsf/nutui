var e=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(s,l,t)=>l in s?e(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t;import{c as d}from"./mobile.3c04291e.js";import{a as n,A as c,x as r,y as u,r as b,o as p,c as h,f as v,s as V}from"./vendor.8cdc485e.js";import"./index.0b3d58d1.js";const{createDemo:C}=d("calendar");var f=C({props:{},setup(){const e=n({isVisible:!1,date:"",dateWeek:"",isVisible1:!1,date1:["2019-12-23","2019-12-26"],date2:"2020-07-08",isVisible3:!1,date3:""});return d=((e,s)=>{for(var l in s||(s={}))o.call(s,l)&&i(e,l,s[l]);if(t)for(var l of t(s))a.call(s,l)&&i(e,l,s[l]);return e})({},c(e)),s(d,l({openSwitch:s=>{e[`${s}`]=!0},closeSwitch:s=>{e[`${s}`]=!1},setChooseValue:s=>{e.date=s[3],e.dateWeek=s[4]},setChooseValue1:s=>{e.date1=[s[0][3],s[1][3]]},setChooseValue2:s=>{e.date2=s[3],console.log(e.date2)},setChooseValue3:s=>{e.date3=s[3]}}));var d}});const w=V();r("data-v-2951e98d");const m={class:"demo"},y=v("h2",null,"基础用法",-1),j=v("h2",null,"自定义日历-自动回填",-1),O=v("h2",null,"平铺展示",-1),S={class:"test-calendar-wrapper"};u();const k=w(((e,s,l,t,o,a)=>{const i=b("nut-cell"),d=b("nut-calendar");return p(),h("div",m,[y,v("div",null,[v(i,{"show-icon":!0,title:"选择单个日期",desc:e.date?`${e.date} ${e.dateWeek}`:"请选择",onClick:s[1]||(s[1]=s=>e.openSwitch("isVisible"))},null,8,["desc"]),v(d,{visible:e.isVisible,"onUpdate:visible":s[2]||(s[2]=s=>e.isVisible=s),"default-value":e.date,onClose:s[3]||(s[3]=s=>e.closeSwitch("isVisible")),onChoose:e.setChooseValue,"start-date":"2019-10-11","end-date":"2022-11-11"},null,8,["visible","default-value","onChoose"])]),v("div",null,[v(i,{"show-icon":!0,title:"选择日期区间",desc:e.date1?`${e.date1[0]}至${e.date1[1]}`:"请选择",onClick:s[4]||(s[4]=s=>e.openSwitch("isVisible1"))},null,8,["desc"]),v(d,{visible:e.isVisible1,"onUpdate:visible":s[5]||(s[5]=s=>e.isVisible1=s),"default-value":e.date1,type:"range","start-date":"2019-12-22","end-date":"2021-01-08",onClose:s[6]||(s[6]=s=>e.closeSwitch("isVisible1")),onChoose:e.setChooseValue1},null,8,["visible","default-value","onChoose"])]),j,v("div",null,[v(i,{"show-icon":!0,title:"选择日期",desc:e.date3?e.date3:"请选择",onClick:s[7]||(s[7]=s=>e.openSwitch("isVisible3"))},null,8,["desc"]),v(d,{visible:e.isVisible3,"onUpdate:visible":s[8]||(s[8]=s=>e.isVisible3=s),onClose:s[9]||(s[9]=s=>e.closeSwitch("isVisible3")),onChoose:e.setChooseValue3,"default-value":e.date3,"start-date":null,"end-date":null,"is-auto-back-fill":!0},null,8,["visible","onChoose","default-value"])]),O,v("div",S,[v(d,{poppable:!1,"default-value":e.date2,"is-auto-back-fill":!0,onChoose:e.setChooseValue2},null,8,["default-value","onChoose"])])])}));f.render=k,f.__scopeId="data-v-2951e98d";export default f;