var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{c as r}from"./mobile.68dae37a.js";import{a as c,s as n,z as p,A as g,r as d,o as u,c as m,f as b,F as f,h as y,t as h,y as v}from"./vendor.870c33cc.js";import"./index.65da50cd.js";const{createDemo:j}=r("swiper");var _=j({props:{},setup(){const e=c({page:2,page2:0,page3:0,page4:0,current:1,list:["https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/195274/24/9649/144035/60d15d37E76e91580/51273fd51174d91a.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/180629/11/11039/120751/60d53a52Eca8b4b0c/12a396e3f73a6424.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png","https://imgcps.jd.com/ling4/71587695091/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c11d16482acdd181dbc1fc9/4fbc0e05/cr_1125x449_0_166/s1125x690/q70.jpg"]});return r=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&o(e,t,a[t]);return e})({},n(e)),a(r,t({change:a=>{e.current=a+1}}));var r}});const w=v();p("data-v-09a4cb0f");const x={class:"demo"},O=b("h2",null,"基本用法",-1),P={class:"demo-box"},k=b("h2",null,"自定义大小",-1),C={class:"demo-box"},E=b("h2",null,"自定义指示器",-1),L={class:"demo-box"},q={class:"page"},D=b("h2",null,"垂直方向",-1),I={class:"demo-box"};g();const J=w(((e,a,t,s,l,i)=>{const o=d("nut-swiper-item"),r=d("nut-swiper");return u(),m("div",x,[O,b("view",P,[b(r,{"init-page":e.page,"pagination-visible":!0,"pagination-color":"#426543","auto-play":"2000"},{default:w((()=>[(u(!0),m(f,null,y(e.list,(e=>(u(),m(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),k,b("view",C,[b(r,{"init-page":e.page2,loop:!1,width:"300"},{default:w((()=>[(u(!0),m(f,null,y(e.list,(e=>(u(),m(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),E,b("view",L,[b(r,{"init-page":e.page3,loop:!0,onChange:e.change},{page:w((()=>[b("div",q,h(e.current)+"/4 ",1)])),default:w((()=>[(u(!0),m(f,null,y(e.list,(e=>(u(),m(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page","onChange"])]),D,b("view",I,[b(r,{"init-page":e.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:w((()=>[(u(!0),m(f,null,y(e.list,(e=>(u(),m(o,{key:e},{default:w((()=>[b("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])])])}));_.render=J,_.__scopeId="data-v-09a4cb0f";export default _;
