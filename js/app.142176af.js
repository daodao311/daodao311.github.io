(function(t){function e(e){for(var o,a,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0083":function(t,e,n){"use strict";n("e91e")},"1f83":function(t,e,n){"use strict";n("f5a9")},2710:function(t,e,n){},"34c4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=n("5c96"),i=n.n(s),a=(n("34c4"),n("b37a"),n("b970")),c=(n("157a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),r=[],l=(n("ac1f"),n("466d"),{created:function(){setTimeout((function(){window.L2Dwidget.init({pluginRootPath:"./live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-miku/assets/",tagMode:!1,debug:!1,model:{jsonPath:"./live2dw/live2d-widget-model-miku/assets/miku.model.json"},display:{position:"right",width:200,height:400,hOffset:0,vOffset:-20},mobile:{show:!0},log:!1})}),1e3)},mounted:function(){console.log("warning"),this._isMobile()?this.$router.push("/m_layout"):this.$router.push("/")},methods:{_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t}}}),u=l,p=(n("5c0b"),n("2877")),d=Object(p["a"])(u,c,r,!1,null,null,null),h=d.exports,v=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-wrapper"},[n("transition",{attrs:{name:"fade"}},[t.titleShow?n("div",{staticClass:"home-title"},[n("div",{staticClass:"title-page"},[n("span",[t._v("My")]),n("span",[t._v("Blog")])]),n("div",{staticClass:"title-author"},[t._v("Dao Dao")]),n("div",{staticClass:"title-text"},[t._v("Better an empty purse than an empty head")])]):t._e()]),n("el-container",{staticClass:"page-layout"},[t.sideShow?n("el-aside",{class:["aside-layout",t.sideWiden?"widened":"narrowed"],attrs:{width:t.sideWiden?"30vw":t.fold?"4vw":"20vw"}},[n("transition",{attrs:{name:"fade"}},[t.sideWiden?t._e():n("i",{staticClass:"iconfont icon-home",on:{click:t.handleHome}})]),n("transition",{attrs:{name:"fade"}},[t.sideWiden?t._e():n("div",{staticClass:"aside-list"},[n("div",{class:["aside-list-item","Blog"===t.$route.name&&"is-selected"],on:{click:function(e){return t.$router.push("/blog")}}},[t._v("BLOG")]),n("div",{class:["aside-list-item","Note"===t.$route.name&&"is-selected"],on:{click:function(e){return t.$router.push("/note")}}},[t._v("NOTE")]),n("div",{class:["aside-list-item","About"===t.$route.name&&"is-selected"],on:{click:function(e){return t.$router.push("/about")}}},[t._v("ABOUT")])])])],1):t._e(),t.mainShow?n("el-main",{staticClass:"main-layout"},[n("router-view")],1):t._e()],1)],1)},m=[],_=n("b861"),b=_["a"],w=(n("870f"),n("57ff"),Object(p["a"])(b,f,m,!1,null,"0d70f335",null)),g=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-wrapper"},[n("transition",{attrs:{name:"fade"}},[t.upperShow?n("div",{staticClass:"upper"}):t._e()]),n("transition",{attrs:{name:"slide-fade"}},[t.bottomShow?n("div",{staticClass:"bottom"},[n("div",{staticClass:"nav-item",on:{click:function(e){return t.$router.push("/blog")}}},[n("div",{staticClass:"nav-item-content"},[n("div",{staticClass:"btn-text"},[t._v("日志")]),n("div",{staticClass:"btn-text"},[t._v("BLOG")])])]),n("div",{staticClass:"nav-item",on:{click:function(e){return t.$router.push("/note")}}},[n("div",{staticClass:"nav-item-content"},[n("div",{staticClass:"btn-text"},[t._v("笔记")]),n("div",{staticClass:"btn-text"},[t._v("NOTE")])])]),n("div",{staticClass:"nav-item",on:{click:function(e){return t.$router.push("/about")}}},[n("div",{staticClass:"nav-item-content"},[n("div",{staticClass:"btn-text"},[t._v("关于")]),n("div",{staticClass:"btn-text"},[t._v("ABOUT")])])])]):t._e()])],1)])},C=[],j={name:"Home",data:function(){return{upperShow:!1,bottomShow:!1}},mounted:function(){this.upperShow=!0,this.bottomShow=!0}},S=j,k=(n("1f83"),Object(p["a"])(S,y,C,!1,null,"27ef4e8a",null)),x=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-wrapper"},[n("div",{staticClass:"contents"},[n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClose,expression:"handleClose"}],staticClass:"contents-btn",on:{click:function(e){t.contentsListShow=!t.contentsListShow}}},[n("i",{staticClass:"iconfont icon-list"})]),n("transition",{attrs:{name:"contents"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.contentsListShow,expression:"contentsListShow"}],staticClass:"contents-list"},[n("div",{staticClass:"list-item",on:{click:function(e){return t.pageSelect("0")}}},[n("div",{staticClass:"cell"},[t._v("全部")])]),n("div",{staticClass:"list-item",on:{click:function(e){return t.pageSelect("2021")}}},[n("div",{staticClass:"cell"},[t._v("2021年")])]),n("div",{staticClass:"list-item",on:{click:function(e){return t.pageSelect("2020")}}},[n("div",{staticClass:"cell"},[t._v("2020年")])])])])],1),n("div",{staticClass:"markdown"},["0"===t.noteSelet||"2021"===t.noteSelet?n("note2021",{staticClass:"markdown-body"}):t._e(),n("br"),"0"===t.noteSelet||"2020"===t.noteSelet?n("note2020",{staticClass:"markdown-body"}):t._e()],1)])},$=[],E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h2",[t._v("笔记2020")]),o("hr"),o("p",[o("em",[o("strong",[t._v("200728")])])]),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://segmentfault.com/q/1010000012995587"}},[t._v("Vue.js弹窗组件的关闭按钮问题")])])]),o("li",[o("p",[o("a",{attrs:{href:"https://www.jianshu.com/p/6b062af8cf01"}},[t._v("sync在组件传值中的应用")])])]),o("li",[o("p",[o("a",{attrs:{href:"https://www.jianshu.com/p/3dbbbc7a259c"}},[t._v("V-model在组件中的使用")])])]),o("li",[o("p",[o("a",{attrs:{href:"https://www.jianshu.com/p/e9acf55f8073"}},[t._v("前端性能优化")]),t._v("——debounce debounce(requestSearchResult(), 500);")])]),o("li",[o("p",[t._v("Vue组件传值props的默认写法，如果默认值得类型为数组或者对象，一定要在函数中返回这个默认值，而不是直接写，否则报错")])])]),o("p",[o("em",[o("strong",[t._v("200804")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/buerjj/p/8612302.html"}},[t._v("vue-判断设备是手机端还是pc端")])])]),o("p",[o("em",[o("strong",[t._v("200904")])])]),o("ol",[o("li",[o("p",[t._v("Vue-cli 部署：在vue-cli3.x中我们知道 我们可以自定义一个vue.config.js文件来控制webpack 首先我们创建一个vue.config.js文件在根目录，然后我们通过文档知道我们可以这样定义")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[o("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(".exports = {\n\t"),o("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("publicPath")]),t._v(": ‘./’\n}\n")])])])]),o("p",[t._v("Element-ui打包后图标地址报错，在build/utils.js的options.extract的返回值里加上属性publicPath: ‘../../’")]),o("p",[o("em",[o("strong",[t._v("200905")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://blog.csdn.net/liona_koukou/article/details/100513917"}},[t._v("改造layui-树（tree）组件支持树的关键字搜索操作")])])]),o("p",[o("em",[o("strong",[t._v("200921")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://blog.csdn.net/xhom_w/article/details/101674165"}},[t._v("让vue项目可通过localhost和IP同时访问，又避免启动打开页面为0.0.0.0的尴尬")])]),o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/zjy850984598/p/11262763.html"}},[t._v("vue2.0实现别人通过ip访问自己运行的项目")])]),o("li",[o("a",{attrs:{href:"https://blog.csdn.net/qq_40060547/article/details/103273768"}},[t._v("vue/cli3项目没有config文件夹，怎么配置在手机上访问项目")])])]),o("p",[o("em",[o("strong",[t._v("200923")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/agansj/p/8243880.html"}},[t._v("移动端rem.js的使用方法")])]),o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/jackson-yqj/p/10273352.html"}},[t._v("nginx代理部署Vue与React项目")])]),o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/clj2017/p/9293363.html"}},[t._v("CSS垂直居中的8种方法")])])]),o("p",[o("em",[o("strong",[t._v("200924")])])]),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/CatcherLJ/p/11205677.html"}},[t._v("全局前置守卫beforeEach")]),t._v("，按需加载Store")]),o("p",[t._v("例："),o("img",{staticStyle:{zoom:"33%","vertical-align":"top"},attrs:{src:n("c880")}})])])]),o("p",[o("em",[o("strong",[t._v("200925")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://blog.csdn.net/weixin_43647163/article/details/105648876"}},[t._v("小程序根据用户不同的身份动态切换底部导航（tabBar）")])]),o("li",[o("a",{attrs:{href:"https://juejin.im/post/6844903617263206407"}},[t._v("小程序踩坑之旅--动态设置tabBar")])])]),o("p",[o("em",[o("strong",[t._v("201023")])])]),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/0000cc0e5bc5d093c6f8be17254c13"}},[t._v("小程序POST向后端formData格式的数据")])]),o("p",[t._v('"content-type":"application/x-www-form-urlencoded"')])])]),o("p",[o("em",[o("strong",[t._v("201027")])])]),o("ol",[o("li",[o("a",{attrs:{href:"https://blog.csdn.net/qq_36875339/article/details/81086205"}},[t._v("小程序图片转Base64")])])]),o("p",[o("em",[o("strong",[t._v("201027")])])]),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://www.w3school.com.cn/jsref/jsref_unescape.asp"}},[t._v("unescape() 函数 ")]),t._v(" 对URL解码获取传参")]),o("p",[t._v("PS: ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。")])])]),o("p",[o("em",[o("strong",[t._v("201231")])])]),o("ol",[o("li",[t._v("图片展示固定比例，"),o("a",{attrs:{href:"https://blog.csdn.net/elie_yang/article/details/80636476"}},[t._v("padding-top 100%应用")])]),o("li",[o("a",{attrs:{href:"https://www.cnblogs.com/crazycode2/p/8727410.html"}},[t._v("vue 监听路由变化")])]),o("li",[o("a",{attrs:{href:"https://segmentfault.com/a/1190000019412548"}},[t._v("vue-cli3项目展示本地Markdown文件")])])])])}],q={},B=Object(p["a"])(q,E,P,!1,null,null,null),L=B.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("笔记2021")]),n("hr"),n("p",[n("em",[n("strong",[t._v("210106")])])]),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/e6b70b71639c"}},[t._v("flex 布局下 CSS 文本超出单行宽度后显示省略号")])]),n("blockquote",[n("p",[t._v("设置width： 0 如果不设置宽度， .book-info 可以被子节点无限撑开；因此 .name 总有足够的宽度在一行内显示所有文本，也就不能触发截断省略的效果。")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/7079529.html"}},[t._v("神奇的 conic-gradient 圆锥渐变")])])])]),n("p",[n("em",[n("strong",[t._v("210119")])])]),n("ol",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/setsunadoudou/article/details/101548581"}},[t._v("iView Upload 实现手动上传")])])]),n("p",[n("em",[n("strong",[t._v("210120")])])]),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/jeffen/p/6600849.html"}},[t._v("css之background的cover和contain的缩放背景图")])]),n("blockquote",[n("p",[n("strong",[t._v("contain")]),t._v(" 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。等比例缩放图象到垂直或者水平其中一项填满区域。 "),n("strong",[t._v("cover")]),t._v(" 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。等比例缩放图象到垂直和水平两项均填满区域。")])])])]),n("p",[n("em",[n("strong",[t._v("210121")])])]),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/weixin_45936690/article/details/103918379"}},[t._v("vue定义全局公共方法")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/weixin_41041379/article/details/81871980"}},[t._v("clearfix（清除浮动）")])]),n("blockquote",[n("p",[t._v("给浮动元素的容器添加一个"),n("code",{pre:!0},[t._v("clearfix")]),t._v("的class，然后给这个class添加一个"),n("code",{pre:!0},[t._v(":after")]),t._v("伪元素实现元素之后添加一个看不见的块元素（Block element）清理浮动。")])])]),n("li",[n("p",[n("strong",[t._v("问题")]),t._v("：axios返回200状态码（即请求成功）却走进了catch里面")]),n("blockquote",[n("ol",[n("li",[t._v("当axios请求完成后走的时then的代码块，如果then代码块中存在错误代码信息，这时就会进入catch中抛出异常（注意：此时控制台并不会报错，因为错误被catch捕获了）")]),n("li",[t._v("axios是异步发起，若发起后页面刷新，那么就会丢失当前进程，导致接收不到。例如 form表单，点击按钮提交后，表单会刷新")])])])]),n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/best-coder/p/11550422.html"}},[t._v("js 遍历对象的几种方法")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[t._v("1.\tfor(let key  in obj) {\n\t\tconsole.log(key + '---' + obj[key])\n\t}\n2. \tObject.keys(obj);Object.values(obj)\n")])])])]),n("p",[n("em",[n("strong",[t._v("210122")])])]),n("ol",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/qq_36357242/article/details/100063063"}},[t._v("vue中使用live2d，看板娘！")])])])])}],W={},A=Object(p["a"])(W,M,H,!1,null,null,null),T=A.exports,N={name:"Note",components:{note2020:L,note2021:T},data:function(){return{contentsListShow:!1,noteSelet:"0"}},directives:{clickoutside:{bind:function(t,e,n){function o(n){if(t.contains(n.target))return!1;e.expression&&e.value(n)}console.log("123"),t.__vueClickOutside__=o,document.addEventListener("click",o)},update:function(){},unbind:function(t,e){document.removeEventListener("click",t.__vueClickOutside__),delete t.__vueClickOutside__}}},methods:{handleClose:function(t){this.contentsListShow=!1},pageSelect:function(t){this.noteSelet=t}}},U=N,R=(n("ee9d"),Object(p["a"])(U,O,$,!1,null,"911be626",null)),V=R.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-wrapper"},[n("div",{staticClass:"markdown"},[n("note-about",{staticClass:"markdown-body"})],1)])},z=[],D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("About")]),n("hr"),n("h4",[t._v("联系方式：")]),n("blockquote",[n("p",[t._v("邮箱：zhuhaodsr@outlook.com")]),n("p",[t._v("qq：584321665")])]),n("h4",[t._v("个人推荐博客：")]),n("p",[t._v("EYHN的博客："),n("a",{attrs:{href:"https://eyhn.in/"}},[t._v("eyhn.in")])])])}],G={},Q=Object(p["a"])(G,D,I,!1,null,null,null),F=Q.exports,Y={name:"About",components:{noteAbout:F}},K=Y,X=(n("ba5c"),Object(p["a"])(K,J,z,!1,null,"8556db08",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-wrapper"},[n("h1",[t._v("暂无")])])}],nt=(n("0083"),{}),ot=Object(p["a"])(nt,tt,et,!1,null,"ff2309ec",null),st=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-layout-wrapper"},[n("div",[t._v("暂无移动端页面，请用电脑访问！")])])},at=[],ct={name:"MLayout",data:function(){return{titleShow:!0}}},rt=ct,lt=(n("63fb"),Object(p["a"])(rt,it,at,!1,null,"f5edd5c6",null)),ut=lt.exports;o["default"].use(v["a"]);var pt=v["a"].prototype.push;v["a"].prototype.push=function(t){return pt.call(this,t).catch((function(t){return t}))};var dt=[{path:"/",name:"Layout",component:g,children:[{path:"/",name:"Home",component:x},{path:"/home",name:"Home",component:x},{path:"/blog",name:"Blog",component:st},{path:"/note",name:"Note",component:V},{path:"/about",name:"About",component:Z}]},{path:"/m_layout",name:"MLayout",component:ut,children:[]}],ht=new v["a"]({mode:"history",base:"/",routes:dt}),vt=ht,ft=n("2f62");o["default"].use(ft["a"]);var mt=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("e4cb");o["default"].use(i.a),o["default"].use(a["a"]),o["default"].config.productionTip=!1,new o["default"]({router:vt,store:mt,render:function(t){return t(h)}}).$mount("#app")},"57ff":function(t,e,n){"use strict";n("2710")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5c67":function(t,e,n){},"5e1b":function(t,e,n){},"63fb":function(t,e,n){"use strict";n("f0ce")},"870f":function(t,e,n){"use strict";n("5c67")},"9c0c":function(t,e,n){},"9dd4":function(t,e,n){},b37a:function(t,e,n){},b861:function(t,e,n){"use strict";(function(t){n("b0c0");e["a"]={name:"Layout",components:{},data:function(){return{mainShow:!1,titleShow:!1,sideShow:!1,sideWiden:!1,fold:!1}},watch:{$route:function(t,e){this.titleShow="Home"===this.$route.name,"Home"===this.$route.name&&(this.sideWiden=!0),console.log("to, from",t,e),"Home"===t.name?this.sideWiden=!0:this.sideWiden=!1}},mounted:function(){var e=this;console.log("$route",this.$router,this.$route),this.sideShow=!0,setTimeout((function(){e.mainShow=!0}),600),this.titleShow="Home"===this.$route.name,"Home"===this.$route.name&&(this.sideWiden=!0),console.log("process",t)},methods:{handleBack:function(){this.$router.go(-1)},handleHome:function(){this.$router.push("/")}}}}).call(this,n("4362"))},ba5c:function(t,e,n){"use strict";n("5e1b")},c880:function(t,e,n){t.exports=n.p+"img/router-beforeEach.bcc2b442.png"},e91e:function(t,e,n){},ee9d:function(t,e,n){"use strict";n("9dd4")},f0ce:function(t,e,n){},f5a9:function(t,e,n){}});
//# sourceMappingURL=app.142176af.js.map