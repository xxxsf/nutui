import{c as m}from"./mobile.js";import{_ as g}from"./index.js";import{a as p,r as v,e as C,j as n,g as s,o as V}from"./vendor.js";const{createDemo:h}=m("input"),i=h({setup(){const e=p({val0:"",val1:"\u521D\u59CB\u6570\u636E",val2:"\u7981\u6B62\u4FEE\u6539",val3:"readonly \u53EA\u8BFB",val4:"",val5:"",val6:"",val7:"",val8:"\u6587\u6848"});return setTimeout(function(){e.val1="\u5F02\u6B65\u6570\u636E"},2e3),{state:e,change:(o,a)=>{console.log("change: ",o,a)},blur:(o,a)=>{console.log("blur:",o,a)},clear:o=>{console.log("clear:",o)},focus:(o,a)=>{console.log("focus:",o,a)}}}}),B={class:"demo full"},b=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),F=s("h2",null,"\u7981\u7528\u8F93\u5165\u6846",-1),f=s("h2",null,"\u9650\u5236\u8F93\u5165\u957F\u5EA6",-1),E=s("h2",null,"\u81EA\u5B9A\u4E49\u7C7B\u578B",-1);function U(e,l,t,d,r,o){const a=v("nut-input");return V(),C("div",B,[b,n(a,{modelValue:e.state.val1,"onUpdate:modelValue":l[0]||(l[0]=u=>e.state.val1=u),onChange:e.change,onFocus:e.focus,onBlur:e.blur,label:"\u6587\u672C(\u5F02\u6B65)"},null,8,["modelValue","onChange","onFocus","onBlur"]),n(a,{placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",onChange:e.change,modelValue:e.state.val0,"onUpdate:modelValue":l[1]||(l[1]=u=>e.state.val0=u),"require-show":!0,label:"\u6587\u672C",onClear:e.clear},null,8,["onChange","modelValue","onClear"]),F,n(a,{modelValue:e.state.val2,"onUpdate:modelValue":l[2]||(l[2]=u=>e.state.val2=u),onChange:e.change,disabled:!0,label:"\u6587\u672C"},null,8,["modelValue","onChange"]),n(a,{modelValue:e.state.val3,"onUpdate:modelValue":l[3]||(l[3]=u=>e.state.val3=u),onChange:e.change,readonly:!0,label:"\u6587\u672C"},null,8,["modelValue","onChange"]),f,n(a,{modelValue:e.state.val4,"onUpdate:modelValue":l[4]||(l[4]=u=>e.state.val4=u),onChange:e.change,"max-length":"7",label:"\u9650\u52367"},null,8,["modelValue","onChange"]),E,n(a,{modelValue:e.state.val0,"onUpdate:modelValue":l[5]||(l[5]=u=>e.state.val0=u),onChange:e.change,type:"password",label:"\u5BC6\u7801"},null,8,["modelValue","onChange"]),n(a,{modelValue:e.state.val5,"onUpdate:modelValue":l[6]||(l[6]=u=>e.state.val5=u),onChange:e.change,type:"number",label:"\u6574\u6570"},null,8,["modelValue","onChange"]),n(a,{modelValue:e.state.val6,"onUpdate:modelValue":l[7]||(l[7]=u=>e.state.val6=u),onChange:e.change,type:"digit",placeholder:"\u652F\u6301\u5C0F\u6570\u70B9\u7684\u8F93\u5165",label:"\u6570\u5B57"},null,8,["modelValue","onChange"])])}var $=g(i,[["render",U]]);export{$ as default};
