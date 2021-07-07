System.register(["./vendor-legacy.466e82dd.js"],(function(t){"use strict";var e,n,d;return{setters:[function(t){e=t.c,n=t.o,d=t.C}],execute:function(){const s={class:"markdown-body"},o=d('<h1>Address 地址</h1><h3>介绍</h3><p>按需加载请加载对应依赖组件 Icon Popup</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Address, Icon, Popup } from &#39;@nutui/nutui&#39;;\nconst app = createApp();\napp.use(Address);\napp.use(Icon);\napp.use(Popup);\n\n</code></pre><h2>代码演示</h2><h3>选择自定义地址</h3><pre><code class="language-html">&lt;nut-cell title=&quot;选择地址&quot; :desc=&quot;text&quot; is-link @click=&quot;showAddress&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-address\n    v-model:visible=&quot;showPopup&quot;\n    :province=&quot;province&quot;\n    :city=&quot;city&quot;\n    :country=&quot;country&quot;\n    :town=&quot;town&quot;\n    @change=&quot;onChange&quot;\n    @close=&quot;close&quot;\n    custom-address-title=&quot;请选择所在地区&quot;\n&gt;&lt;/nut-address&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const showPopup = ref(false);\n    const address = reactive({\n      province:[\n        { id: 1, name: &#39;北京&#39; },\n        { id: 2, name: &#39;广西&#39; },\n        { id: 3, name: &#39;江西&#39; },\n        { id: 4, name: &#39;四川&#39; }\n      ],\n      city:[\n        { id: 7, name: &#39;朝阳区&#39; },\n        { id: 8, name: &#39;崇文区&#39; },\n        { id: 9, name: &#39;昌平区&#39; },\n        { id: 6, name: &#39;石景山区&#39; }\n      ],\n      country:[\n        { id: 3, name: &#39;八里庄街道&#39; },\n        { id: 9, name: &#39;北苑&#39; },\n        { id: 4, name: &#39;常营乡&#39; }\n      ],\n      town:[]\n    })\n\n    const text = ref(&#39;请选择地址&#39;)\n\n    const showAddress = () =&gt; {\n      showPopup.value = !showPopup.value;\n    };\n\n    const onChange = (cal) =&gt; {\n      const name = address[cal.next]\n      if (name.value.length &lt; 1) {\n        showPopup.value = false;\n      }\n    };\n    const close = val =&gt; {\n      console.log(val);\n      text.value = val.data.addressStr;\n    };\n\n    return { showPopup, text, showAddress, onChange, close, ...toRefs(address) };\n}\n</code></pre><h3>选择已有地址</h3><pre><code class="language-html">&lt;nut-cell title=&quot;选择地址&quot; :desc=&quot;text&quot; is-link @click=&quot;showAddressExist&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-address\n    v-model:visible=&quot;showPopupExist&quot;\n    type=&quot;exist&quot;\n    :exist-address=&quot;existAddress&quot;\n    @close=&quot;close&quot;\n    :is-show-custom-address=&quot;false&quot;\n    @selected=&quot;selected&quot;\n    exist-address-title=&quot;配送至&quot;\n&gt;&lt;/nut-address&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const showPopupExist = ref(false);\n    const existAddress = ref([\n      {\n        id: 1,\n        addressDetail: &#39;th &#39;,\n        cityName: &#39;石景山区&#39;,\n        countyName: &#39;城区&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: true,\n        townName: &#39;&#39;\n      },{\n        id: 2,\n        addressDetail: &#39;12_ &#39;,\n        cityName: &#39;电饭锅&#39;,\n        countyName: &#39;扶绥县&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },{\n        id: 3,\n        addressDetail: &#39;发大水比 &#39;,\n        cityName: &#39;放到&#39;,\n        countyName: &#39;广宁街道&#39;,\n        provinceName: &#39;钓鱼岛全区&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },{\n        id: 4,\n        addressDetail: &#39;还是想吧百度吧 &#39;,\n        cityName: &#39;研发&#39;,\n        countyName: &#39;八里庄街道&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      }\n    ]);\n\n    const text = ref(&#39;请选择地址&#39;)\n\n    const showAddressExist = () =&gt; {\n      showPopupExist.value = true;\n    };\n\n    const close = val =&gt; {\n      if (val.type == &#39;exist&#39;) {\n        const {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } else {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    const selected = (prevExistAdd, nowExistAdd, arr) =&gt; {\n      console.log(prevExistAdd);\n      console.log(nowExistAdd);\n    };\n\n    return { showPopupExist, existAddress, showAddressExist, text, close, selected };\n}\n</code></pre><h3>自定义图标</h3><pre><code class="language-html">&lt;nut-cell title=&quot;选择地址&quot; :desc=&quot;text&quot; is-link @click=&quot;showCustomImg&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-address\n    v-model:visible=&quot;showPopupCustomImg&quot;\n    type=&quot;exist&quot;\n    :existAddress=&quot;existAddress&quot;\n    @close=&quot;close&quot;\n    :is-show-custom-address=&quot;false&quot;\n    @selected=&quot;selected3&quot;\n    :default-icon=&quot;defaultIcon&quot;\n    :selected-icon=&quot;selectedIcon&quot;\n    :close-btn-icon=&quot;closeBtnIcon&quot;\n&gt;&lt;/nut-address&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const showPopupCustomImg = ref(false);\n    const icon = reactive({\n      selectedIcon: &#39;heart-fill&#39;,\n      defaultIcon: &#39;heart1&#39;,\n      closeBtnIcon: &#39;close&#39;,\n      backBtnIcon: &#39;left&#39;\n    });\n    const existAddress = ref([\n      {\n        id: 1,\n        addressDetail: &#39;th &#39;,\n        cityName: &#39;石景山区&#39;,\n        countyName: &#39;城区&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: true,\n        townName: &#39;&#39;\n      },{\n        id: 2,\n        addressDetail: &#39;12_ &#39;,\n        cityName: &#39;电饭锅&#39;,\n        countyName: &#39;扶绥县&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },{\n        id: 3,\n        addressDetail: &#39;发大水比 &#39;,\n        cityName: &#39;放到&#39;,\n        countyName: &#39;广宁街道&#39;,\n        provinceName: &#39;钓鱼岛全区&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },{\n        id: 4,\n        addressDetail: &#39;还是想吧百度吧 &#39;,\n        cityName: &#39;研发&#39;,\n        countyName: &#39;八里庄街道&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      }\n    ]);\n\n    const text = ref(&#39;请选择地址&#39;)\n\n    const showCustomImg = () =&gt; {\n      showPopupCustomImg.value = true;\n    };\n\n    const close = val =&gt; {\n      if (val.type == &#39;exist&#39;) {\n        const {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } else {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    const selected = (prevExistAdd, nowExistAdd, arr) =&gt; {\n      console.log(prevExistAdd);\n      console.log(nowExistAdd);\n    };\n\n    return { showPopupCustomImg, existAddress, text, showCustomImg, close, selected, ...toRefs(icon) };\n}\n</code></pre><h3>自定义地址与已有地址切换</h3><pre><code class="language-html">&lt;nut-cell title=&quot;选择地址&quot; :desc=&quot;text&quot; is-link @click=&quot;showAddressOther&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-address\n    v-model:visible=&quot;showPopupOther&quot;\n    type=&quot;exist&quot;\n    :exist-address=&quot;existAddress&quot;\n    :province=&quot;province&quot;\n    :city=&quot;city&quot;\n    :country=&quot;country&quot;\n    :town=&quot;town&quot;\n    :back-btn-icon=&quot;backBtnIcon&quot;\n    @close=&quot;close&quot;\n    @selected=&quot;selected&quot;\n    custom-and-exist-title=&quot;选择其他地址&quot;\n    @switch-module=&quot;switchModule&quot;\n    @close-mask=&quot;closeMask&quot;\n&gt;&lt;/nut-address&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const showPopupOther = ref(false);\n    const address = reactive({\n      province:[\n        { id: 1, name: &#39;北京&#39; },\n        { id: 2, name: &#39;广西&#39; },\n        { id: 3, name: &#39;江西&#39; },\n        { id: 4, name: &#39;四川&#39; }\n      ],\n      city:[\n        { id: 7, name: &#39;朝阳区&#39; },\n        { id: 8, name: &#39;崇文区&#39; },\n        { id: 9, name: &#39;昌平区&#39; },\n        { id: 6, name: &#39;石景山区&#39; }\n      ],\n      country:[\n        { id: 3, name: &#39;八里庄街道&#39; },\n        { id: 9, name: &#39;北苑&#39; },\n        { id: 4, name: &#39;常营乡&#39; }\n      ],\n      town:[]\n    })\n    const existAddress = ref([\n      {\n        id: 1,\n        addressDetail: &#39;th &#39;,\n        cityName: &#39;石景山区&#39;,\n        countyName: &#39;城区&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: true,\n        townName: &#39;&#39;\n      },\n      {\n        id: 2,\n        addressDetail: &#39;12_ &#39;,\n        cityName: &#39;电饭锅&#39;,\n        countyName: &#39;扶绥县&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },\n      {\n        id: 3,\n        addressDetail: &#39;发大水比 &#39;,\n        cityName: &#39;放到&#39;,\n        countyName: &#39;广宁街道&#39;,\n        provinceName: &#39;钓鱼岛全区&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      },\n      {\n        id: 4,\n        addressDetail: &#39;还是想吧百度吧 &#39;,\n        cityName: &#39;研发&#39;,\n        countyName: &#39;八里庄街道&#39;,\n        provinceName: &#39;北京&#39;,\n        selectedAddress: false,\n        townName: &#39;&#39;\n      }\n    ]);\n    const backBtnIcon = ref(&#39;left&#39;)\n    const text = ref(&#39;请选择地址&#39;)\n\n    const showAddressOther = () =&gt; {\n      showPopupOther.value = true;\n    };\n\n    const close = val =&gt; {\n      if (val.type == &#39;exist&#39;) {\n        const {provinceName,cityName,countyName,townName,addressDetail} = val.data\n        text.value = provinceName + cityName + countyName + townName + addressDetail;\n      } else {\n        text.value = val.data.addressStr;\n      }\n    };\n\n    const selected = (prevExistAdd, nowExistAdd, arr) =&gt; {\n      console.log(prevExistAdd);\n      console.log(nowExistAdd);\n    };\n\n    const switchModule = cal =&gt; {\n      if (cal.type == &#39;custom&#39;) {\n        console.log(&#39;点击了“选择其他地址”按钮&#39;);\n      } else {\n        console.log(&#39;点击了自定义地址左上角的返回按钮&#39;);\n      }\n    };\n\n    const closeMask = val =&gt; {\n      console.log(&#39;关闭弹层&#39;, val);\n    };\n\n    return { showPopupOther, text, showAddressOther, switchModule, closeMask, close, selected, backBtnIcon, ...toRefs(address) };\n}\n</code></pre><h1>API</h1><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>是否打开地址选择</td><td>String</td><td>‘’</td></tr><tr><td>type</td><td>地址选择类型 exist/custom</td><td>String</td><td>‘custom’</td></tr><tr><td>province</td><td>省，每个省的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>city</td><td>市，每个市的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>country</td><td>县，每个县的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>town</td><td>乡/镇，每个乡/镇的对象中，必须有 name 字段</td><td>Array</td><td>[]</td></tr><tr><td>exist-address</td><td>已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下）</td><td>Array</td><td>[]</td></tr><tr><td>default-icon</td><td>已有地址列表默认图标，type=‘exist’ 时生效</td><td>string</td><td>‘’</td></tr><tr><td>selected-icon</td><td>已有地址列表选中图标，type=‘exist’ 时生效</td><td>string</td><td>‘’</td></tr><tr><td>close-btn-icon</td><td>自定义关闭弹框按钮图标</td><td>string</td><td>-</td></tr><tr><td>back-btn-icon</td><td>自定义地址与已有地址切换时，自定义返回的按钮图标</td><td>string</td><td>-</td></tr><tr><td>is-show-custom-address</td><td>是否可以切换自定义地址选择，type=‘exist’ 时生效</td><td>Boolean</td><td>true</td></tr><tr><td>custom-address-title</td><td>自定义地址选择文案，type=‘custom’ 时生效</td><td>string</td><td>‘请选择所在地区’</td></tr><tr><td>exist-address-title</td><td>已有地址文案 ，type=‘exist’ 时生效</td><td>string</td><td>‘配送至’</td></tr><tr><td>custom-and-exist-title</td><td>自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效</td><td>string</td><td>‘选择其他地址’</td></tr></tbody></table><ul><li>provinceName 省的名字</li><li>cityName 市的名字</li><li>countyName 县的名字</li><li>townName 乡/镇的名字</li><li>addressDetail 具体地址</li><li>selectedAddress 字段用于判断当前地址列表的选中项。</li></ul><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>自定义选择地址时，选择地区时触发</td><td>参考 onChange</td></tr><tr><td>selected</td><td>选择已有地址列表时触发</td><td>参考 selected</td></tr><tr><td>close</td><td>地址选择弹框关闭时触发</td><td>参考 close</td></tr><tr><td>close-mask</td><td>点击遮罩层或点击右上角叉号关闭时触发</td><td>{closeWay:‘mask’/‘cross’}</td></tr><tr><td>switch-module</td><td>点击‘选择其他地址’或自定义地址选择左上角返回按钮触发</td><td>{type:‘exist’/‘custom’}</td></tr></tbody></table><h2>change 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>custom</td><td>当前点击的行政区域</td><td>province(省) / city(市) / country(县) / town(乡)</td></tr><tr><td>next</td><td>当前点击的行政区域的下一级</td><td>province(省) / city(市) / country(县) / town(乡)</td></tr><tr><td>value</td><td>当前点击的行政区域的值（返回传入的值）</td><td>{}</td></tr></tbody></table><h2>selected 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>第一个参数（prevExistAdd）</td><td>选择前选中的地址</td><td>{}</td></tr><tr><td>第二个参数（nowExistAdd）</td><td>当前选中的地址</td><td>{}</td></tr><tr><td>第三个参数（arr）</td><td>选择完之后的已有地址列表（selectedAddress 值发生改变）</td><td>{}</td></tr></tbody></table><h2>close 回调参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>可能值</th></tr></thead><tbody><tr><td>type</td><td>地址选择类型 exist/custom</td><td>exist/custom</td></tr><tr><td>data</td><td>选择地址的值,custom 时，addressStr 为选择的地址组合</td><td>{}</td></tr></tbody></table>',29);t("default",{setup:t=>(t,d)=>(n(),e("div",s,[o]))})}}}));