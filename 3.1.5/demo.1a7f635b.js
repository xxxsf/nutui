var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,t=(l,a,n)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n;"undefined"!=typeof require&&require;import{c as d,d as r}from"./mobile.60fdf9c2.js";import{a as s,A as c,B as v,C as m,r as g,o as h,e as p,j as i,k as V,g as C,t as f}from"./vendor.6bc94963.js";import"./index.b475e594.js";const{createDemo:b}=d("range");var _=b({props:{},setup(){const e=s({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60,value10:50});return d=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&t(e,a,l[a]);if(n)for(var a of n(l))u.call(l,a)&&t(e,a,l[a]);return e})({},c(e)),l(d,a({onChange:e=>r.text("当前值："+e)}));var d}});v("data-v-7c812839");const j={class:"demo"},y=C("h2",null,"基础用法",-1),O=C("h2",null,"双滑块",-1),U=C("h2",null,"指定范围",-1),P=C("h2",null,"设置步长",-1),w=C("h2",null,"隐藏范围",-1),x=C("h2",null,"隐藏标签",-1),q=C("h2",null,"禁用",-1),D=C("h2",null,"自定义样式",-1),I=C("h2",null,"自定义按钮",-1),k={class:"custom-button"};m(),_.render=function(e,l,a,n,o,u){const t=g("nut-range"),d=g("nut-cell");return h(),p("div",j,[y,i(d,{class:"cell"},{default:V((()=>[i(t,{modelValue:e.value1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value1=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),O,i(d,{class:"cell"},{default:V((()=>[i(t,{range:"",modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),U,i(d,{class:"cell"},{default:V((()=>[i(t,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value3=l),max:10,min:-10,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),P,i(d,{class:"cell"},{default:V((()=>[i(t,{modelValue:e.value4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value4=l),step:5,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),w,i(d,{class:"cell"},{default:V((()=>[i(t,{"hidden-range":"",modelValue:e.value5,"onUpdate:modelValue":l[4]||(l[4]=l=>e.value5=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),x,i(d,{class:"cell"},{default:V((()=>[i(t,{"hidden-tag":"",modelValue:e.value6,"onUpdate:modelValue":l[5]||(l[5]=l=>e.value6=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),q,i(d,{class:"cell"},{default:V((()=>[i(t,{disabled:"",modelValue:e.value7,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value7=l)},null,8,["modelValue"])])),_:1}),D,i(d,{class:"cell"},{default:V((()=>[i(t,{modelValue:e.value8,"onUpdate:modelValue":l[7]||(l[7]=l=>e.value8=l),onChange:e.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])])),_:1}),I,i(d,{class:"cell"},{default:V((()=>[i(t,{modelValue:e.value9,"onUpdate:modelValue":l[8]||(l[8]=l=>e.value9=l),onChange:e.onChange},{button:V((()=>[C("div",k,f(e.value10),1)])),_:1},8,["modelValue","onChange"])])),_:1})])},_.__scopeId="data-v-7c812839";export{_ as default};