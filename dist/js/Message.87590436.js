(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Message"],{"8e2a":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"msg-box"},[t("div",{staticClass:"msg-left-wrap"},[t("ul",{staticClass:"dropdown-menu"},n._l(n.menu,(function(e,o){return t("li",{key:o,class:{active:n.currentIndex===o},on:{click:function(t){return n.switchTab(o,e.componentName)}}},[t("a",[t("i",{staticClass:"iconfont",class:e.icon}),t("span",[n._v(n._s(e.name))])])])})),0)]),t("div",{staticClass:"msg-right-wrap"},[t(n.componentName,{tag:"component"})],1)])},a=[],c=t("0798"),i=t("6b62"),m=t("3f9c"),s=t("f07a"),u=t("fb7f"),r=t("e91f"),p=t("7eda"),l=t("9dce"),d={name:"message",components:{Comment:c["a"],Contribute:i["a"],Email:m["a"],Like:s["a"],AllAttention:u["a"],AppreciatePay:r["a"],Other:p["a"]},data:function(){return{menu:[{icon:"iconpinglun",name:"评论",componentName:"Comment"},{icon:"icone-mail_icon",name:"简信",componentName:"Email"},{icon:"iconfuwuqingqiu",name:"投稿请求",componentName:"Contribute"},{icon:"iconlike-1",name:"喜欢和赞",componentName:"Like"},{icon:"iconguanzhuchenggong",name:"关注",componentName:"AllAttention"},{icon:"iconqianfenleishouye",name:"赞赏和付费",componentName:"AppreciatePay"},{icon:"iconcaidan1",name:"其他提醒",componentName:"Other"}],currentIndex:0,componentName:"Comment"}},methods:{switchTab:function(n,e){this.currentIndex=n,this.componentName=e}},mounted:function(){var n=this;l["a"].$on("changeComponent",(function(e){n.currentIndex=e.currentIndex,n.componentName=e.componentName}))}},f=d,h=(t("c583"),t("4023")),g=Object(h["a"])(f,o,a,!1,null,"515df912",null);e["default"]=g.exports},c583:function(n,e,t){"use strict";var o=t("d5e0"),a=t.n(o);a.a},d5e0:function(n,e,t){}}]);
//# sourceMappingURL=Message.87590436.js.map