"use strict";(self.webpackChunkstart_n_end=self.webpackChunkstart_n_end||[]).push([[913],{6024:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=i(5671),a=i(3144),n=i(136),o=i(8557),r=i(2791),c=i(2426),l=i.n(c),u=i(1743),m=i(2312),f=i(5584),h=i(3707),d=i(127);var g=i.p+"static/media/work.825e9dce55f48ee45eb4647eabc542c8.svg";var p=i.p+"static/media/onwork.cf82092aa213757d514618161a8d62f6.svg";var S=i.p+"static/media/offwork.2944eac26269b3be9ce324bc665016b0.svg",v=i(184),C="HH : mm : ss",T=/Mobi|Android|iPhone/i.test(navigator.userAgent),w=function(t,e,i){localStorage.setItem("time",JSON.stringify({start:t,end:e,color:i}))},N=function(){var t=localStorage.getItem("time");return!!t&&JSON.parse(t)},k=function(t){(0,n.Z)(r,t);var e=(0,o.Z)(r);function r(){var t;(0,s.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={startTime:N().start||"08 : 30 : 00",endTime:N().end||"17 : 30 : 00",restTime:"00 : 00 : 00",status:"",pageColor:N().color||"grey"},t.setStatus=function(e){t.setState({status:e})},t.setNotification=function(t,e){var s=function(){new Notification(t,{body:e,icon:i(7352)})};"granted"===window.Notification.permission?s():"denied"!==window.Notification.permission&&window.Notification.requestPermission((function(t){s()}))},t.getTimeDiff=function(t,e){var i=Math.abs(t.diff(e,"seconds")%60).toString().padStart(2,"0"),s=Math.abs(t.diff(e,"minutes")%60).toString().padStart(2,"0");return Math.abs(t.diff(e,"hours")%24).toString().padStart(2,"0")+" : "+s+" : "+i},t.computeRestTime=function(){var e=l()(t.state.startTime,C),i=l()(t.state.endTime,C),s=l()();if(s>=i){if(t.setState({restTime:t.getTimeDiff(i,s)}),"1"===t.state.status)return t.setNotification("\u91cd\u8981\u901a\u77e5\uff1a","\u4e0b\u73ed\u5566\uff01"),void t.setStatus("2")}else if(s<e){if(t.setState({restTime:t.getTimeDiff(e,s)}),"2"===t.status)return t.setNotification("\u91cd\u8981\u901a\u77e5\uff1a","\u65b0\u7684\u4e00\u5929\u5f00\u59cb\u4e86\uff01"),void t.setStatus("0")}else if(s>=e&&s<i&&(t.setState({restTime:t.getTimeDiff(i,s)}),"0"===t.status))return t.setNotification("\u91cd\u8981\u901a\u77e5\uff1a","\u5f00\u59cb\u642c\u7816\uff01"),void t.setStatus("1")},t.setTimer=function(){t.initStatus(),t.computeRestTime(),t.timerID=setInterval(t.computeRestTime,500)},t.handleSave=function(e){clearInterval(t.timerID),t.setTimer(),w(t.state.startTime,t.state.endTime,t.state.pageColor),u.ZP.success("\u65f6\u95f4\u4fdd\u5b58\u6210\u529f\uff01")},t.handleCancel=function(){t.menuShow=!1},t.onStartChange=function(e,i){t.setState({startTime:i})},t.onFinishChange=function(e,i){t.setState({endTime:i})},t.onClickMenu=function(){t.menuShow=!t.menuShow},t.setPageColor=function(e){t.setState({pageColor:e})},t}return(0,a.Z)(r,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.setTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"initStatus",value:function(){var t=l()(this.state.startTime,C),e=l()(this.state.endTime,C),i=l()();i>=e?(this.setNotification("\u73b0\u5728\u72b6\u6001\uff1a","\u5df2\u4e0b\u73ed\uff01"),this.setStatus("2")):i<t?(this.setNotification("\u73b0\u5728\u72b6\u6001\uff1a","\u5c1a\u672a\u4e0a\u73ed\uff01"),this.setStatus("0")):i>=t&&i<e&&(this.setNotification("\u73b0\u5728\u72b6\u6001\uff1a","\u6b63\u5728\u4e0a\u73ed\uff01"),this.setStatus("1"))}},{key:"render",value:function(){var t=this;return(0,v.jsxs)(m.Z,{direction:"vertical",className:(T?"home-wrapper is-phone":"home-wrapper")+" "+this.state.pageColor,children:[(0,v.jsxs)("div",{className:"time",children:["0"===this.state.status?(0,v.jsx)("img",{className:"image",src:p,alt:"\u5c1a\u672a\u4e0a\u73ed",title:"\u5c1a\u672a\u4e0a\u73ed\uff01"}):"1"===this.state.status?(0,v.jsx)("img",{className:"image",src:g,alt:"\u6b63\u5728\u642c\u7816",title:"\u6b63\u5728\u642c\u7816\uff01"}):"2"===this.state.status?(0,v.jsx)("img",{className:"image",src:S,alt:"\u4e0b\u73ed\u5566",title:"\u4e0b\u73ed\u5566\uff01"}):(0,v.jsx)("img",{className:"image",src:g,alt:"\u6b63\u5728\u642c\u7816",title:"\u6b63\u5728\u642c\u7816\uff01"}),(0,v.jsx)("span",{className:"text",children:this.state.restTime})]}),this.menuShow&&(0,v.jsxs)("div",{className:"editor",children:[(0,v.jsx)(f.Z,{defaultValue:l()(this.state.startTime,C),format:C,allowClear:!1,size:"large",style:{width:"100%"},onChange:this.onStartChange}),(0,v.jsx)(f.Z,{defaultValue:l()(this.state.endTime,C),format:C,allowClear:!1,size:"large",style:{width:"100%"},onChange:this.onFinishChange}),(0,v.jsxs)(m.Z,{className:"buttons",children:[(0,v.jsx)(h.Z,{size:"large",onClick:this.handleCancel,children:"\u5173\u95ed"}),(0,v.jsx)(h.Z,{size:"large",type:"primary",onClick:this.handleSave,children:"\u4fdd\u5b58"})]})]}),this.menuShow&&(0,v.jsx)("div",{className:"icon-color green",onClick:function(){return t.setPageColor("green")}}),this.menuShow&&(0,v.jsx)("div",{className:"icon-color grey",onClick:function(){return t.setPageColor("grey")}}),(0,v.jsx)(d.Z,{className:"icon-menu",onClick:this.onClickMenu})]})}}]),r}(r.Component),x=function(){return(0,v.jsx)(k,{})}},7352:function(t,e,i){t.exports=i.p+"static/media/web-title.0242d5cdb2f566de39f6.jpg"}}]);
//# sourceMappingURL=default.dac9fe7a.chunk.js.map