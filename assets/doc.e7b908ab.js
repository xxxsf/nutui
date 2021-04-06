import{c as t,o as d,B as o}from"./vendor.c84659c0.js";const n={class:"markdown-body"},e=o('<h1>Dialog 对话框</h1><p>模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。</p><h2>基本用法</h2><pre><code class="language-javascript">import Dialog from &#39;./index&#39;;  \n// 全局注册  \nconst app = createApp();  \napp.use(Dialog);  \n</code></pre><pre><code class="language-javascript">Dialog({\n  title: &quot;确定删除此订单？&quot;,\n  content: &quot;删除后将从你的记录里消失，无法找回&quot;\n});\n</code></pre><h2>直接关闭当前dialog</h2><pre><code class="language-javascript">Dialog.closed()  //可以直接关闭当前dialog\n</code></pre><h2>ID</h2><p>同一个页面中，id相同的Dialog的DOM只会同时存在一个，不指定id时，id的默认值为<strong>nut-dialog-default-id</strong>。</p><pre><code class="language-javascript">Dialog({\n  id:&#39;my-dialog&#39;,\n  title: &quot;确定删除此订单？&quot;,\n  content: &quot;删除后将从你的记录里消失，无法找回&quot;\n});\n</code></pre><blockquote><p>如果希望同时弹出多个Dialog，请给不同的Dialog设置不同的id。</p></blockquote><h2>事件</h2><pre><code class="language-javascript">Dialog({\n        title: &quot;自定义Dialog标题&quot;,\n        content: &quot;小屏或移动端浏览效果最佳&quot;,\n        closeBtn:true,  //显式右上角关闭按钮\n        onOkBtn(event) {  //确定按钮点击事件\n          alert(&quot;okBtn&quot;);\n          this.close(); //关闭对话框\n        },\n        onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框\n          alert(&quot;cancelBtn&quot;);\n          //return false;  //阻止默认“关闭对话框”的行为\n        },\n        onCloseBtn(event) { //右上角关闭按钮点击事件\n          alert(&quot;closeBtn&quot;);\n          //return false;  //阻止默认“关闭对话框”的行为\n        },\n        closeCallback(target) {\n          alert(&quot;will close&quot;);  //对话框关闭回调函数，无论通过何种方式关闭都会触发\n        }\n});\n        \n</code></pre><h2>关闭dialog不销毁实例</h2><pre><code class="language-javascript"> Dialog({\n        animation: false, //禁用弹出动效\n        title: &quot;注册说明&quot;,\n        canDestroy:false,\n        content:\n          &quot;原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系京东客服找回。&quot;\n      });\n        \n</code></pre><h2>页面滚动锁定</h2><p><strong>lockBgScroll</strong> 值设为 <strong>true</strong> 时，可在弹窗出现时锁定页面滚动，且不影响窗体内部滚动。</p><pre><code class="language-javascript">Dialog({\n        title: &quot;背景滚动锁定&quot;,\n        lockBgScroll:true,\n        content:&quot;弹窗弹出后，页面滚动锁止。在窗体和遮罩层上滑动时，页面不再跟随滚动。&quot;\n});\n</code></pre><h2>图片弹窗</h2><p><strong>type</strong> 值为 <strong>image</strong> 时为图片弹窗，需要配置一张图片，可带链接（非必须）。默认展示关闭按钮。点击图片触发 <strong>onClickImageLink</strong> 事件，返回<strong>false</strong>可阻止默认的跳转链接行为。</p><pre><code class="language-javascript">Dialog({\n  type:&quot;image&quot;, //设置弹窗类型为”图片弹窗“\n  link:&quot;http://m.jd.com&quot;, //点击图片跳转的Url\n  imgSrc:&quot;https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg&quot;, //图片Url\n  onClickImageLink:function(){ //图片点击事件，默认行为是跳转Url\n    console.log(this); //this指向该Dialog实例\n    return false;  //返回false可阻止默认的链接跳转行为\n  }\n});\n</code></pre><h2>标签式写法</h2><p>如果Dialog内容有复杂交互，可使用Dialog的标签式用法。注意标签使用的时候，属性不建议使用驼峰，推荐使用如下写法</p><pre><code class="language-html">&lt;nut-dialog title=&quot;标签形式调用&quot; :visible=&quot;dialogShow&quot; @ok-btn-click=&quot;dialogShow=false&quot; @cancel-btn-click=&quot;dialogShow=false&quot; @close=&quot;dialogShow=false&quot;&gt;\n    &lt;a href=&quot;javascript:;&quot; @click=&quot;dialogShow=false&quot; :noCancelBtn=&quot;true&quot;&gt;点我可以直接关闭对话框&lt;/a&gt;\n&lt;/nut-dialog&gt;\n</code></pre><pre><code class="language-javascript">export default {\n  data() {\n    return {\n      dialogShow: false\n    };\n  }\n}\n</code></pre><h2>prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td>标识符，相同者共享一个实例</td><td>String/Number</td><td>nut-dialog-default-id</td></tr><tr><td>canDestroy</td><td>是否关闭弹窗时销毁实例</td><td>Boolean</td><td>true</td></tr><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>content</td><td>内容，支持HTML</td><td>String</td><td>-</td></tr><tr><td>type</td><td>弹窗类型，值为<strong>image</strong>时为图片弹窗</td><td>String</td><td>-</td></tr><tr><td>closeOnClickModal</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>true</td></tr><tr><td>noFooter</td><td>是否隐藏底部按钮栏</td><td>Boolean</td><td>false</td></tr><tr><td>noOkBtn</td><td>是否隐藏确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>noCancelBtn</td><td>是否隐藏取消按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelBtnTxt</td><td>取消按钮文案</td><td>String</td><td>”取 消“</td></tr><tr><td>okBtnTxt</td><td>确定按钮文案</td><td>String</td><td>”确 定“</td></tr><tr><td>okBtnDisabled</td><td>禁用确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelAutoClose</td><td>取消按钮是否默认关闭弹窗</td><td>Boolean</td><td>true</td></tr><tr><td>textAlign</td><td>文字对齐方向，可选值同css的text-align</td><td>String</td><td>“center”</td></tr><tr><td>maskBgStyle</td><td>遮罩层样式（颜色、透明度）</td><td>String</td><td>-</td></tr><tr><td>customClass</td><td>增加一个自定义class</td><td>String</td><td>-</td></tr><tr><td>link</td><td>点击图片跳转的Url，仅对图片类型弹窗有效</td><td>String</td><td>-</td></tr><tr><td>imgSrc</td><td>图片Url，仅对图片类型弹窗有效</td><td>String</td><td>-</td></tr><tr><td>animation</td><td>是否开启默认动效</td><td>Boolean</td><td>true</td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td>Boolean</td><td>false</td></tr><tr><td>lockBgScroll</td><td>锁定遮罩层滚动，不影响弹窗内部滚动（实验性质）会给body添加posotion:fix属性，注意</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>事件</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>onOkBtn</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onCancelBtn</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>onCloseBtn</td><td>关闭按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closeCallback</td><td>关闭回调，任何情况关闭弹窗都会触发</td><td>Function</td><td>-</td></tr><tr><td>onClickImageLink</td><td>图片链接点击回调，仅对图片类型弹窗有效</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭dialog</td><td>Function</td><td>-</td></tr></tbody></table>',29),a={expose:[],setup:o=>(o,a)=>(d(),t("div",n,[e]))};export default a;