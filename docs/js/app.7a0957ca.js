(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],p=0,v=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"025b":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("8a23"),i=a.n(n);i.a},"06c3":function(t,e,a){},"07f5":function(t,e,a){"use strict";var n=a("6a28"),i=a.n(n);i.a},"22c7":function(t,e,a){"use strict";var n=a("66ab"),i=a.n(n);i.a},"285b":function(t,e,a){"use strict";var n=a("5231"),i=a.n(n);i.a},5231:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Wizard")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wizard"},[a("TopNav"),a("Content")],1)},c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-nav"},[a("section",{staticClass:"left"},[a("button",[a("v-icon",{staticClass:"icon-left"},[t._v("mdi-arrow-left")]),t._v(" Exit ")],1)]),a("section",{staticClass:"right"},[a("button",[a("v-icon",{staticClass:"icon-left"},[t._v("mdi-eye-outline")]),t._v(" Preview ")],1),a("button",[t._v(" Save "),a("v-icon",{staticClass:"icon-right"},[t._v("mdi-arrow-right")])],1)])])},l=[],u={name:"TopNav"},p=u,v=(a("fc91"),a("2877")),f=a("6544"),d=a.n(f),b=a("132d"),m=Object(v["a"])(p,o,l,!1,null,"48574b4c",null),_=m.exports;d()(m,{VIcon:b["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"vertical-spacer-top"}),a("Steps"),a("div",{staticClass:"vertical-spacer"}),a("CoverMedia"),a("div",{staticClass:"vertical-spacer"}),a("CampaignTitle"),a("div",{staticClass:"vertical-spacer"}),a("div",{staticClass:"footer"},[a("v-btn",{staticClass:"save-btn",attrs:{text:"",ripple:"",rounded:""}},[t._v(" SAVE "),a("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right")])],1)],1),a("div",{staticClass:"vertical-spacer"})],1)},C=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"line"}),a("div",{staticClass:"steps"},[a("Step",{attrs:{title:"Cover"}}),a("Step",{attrs:{title:"Goal & Time"}}),a("Step",{attrs:{title:"Story"}}),a("Step",{attrs:{title:"Levels"}}),a("Step",{attrs:{title:"Teams"}}),a("Step",{attrs:{title:"Matchers"}}),a("Step",{attrs:{title:"Customize"}})],1)])},y=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"step"},[t._m(0),a("label",[t._v(t._s(t.title))])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer-circle"},[a("div",{staticClass:"inner-circle"})])}],S={name:"Step",props:{title:String}},j=S,O=(a("285b"),Object(v["a"])(j,x,w,!1,null,"1681f816",null)),T=O.exports,V={name:"Steps",components:{Step:T}},E=V,$=(a("93ab"),Object(v["a"])(E,g,y,!1,null,"0a8faad8",null)),k=$.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-media"},[t._m(0),a("section",{staticClass:"right-bottom"},[a("v-tabs",{attrs:{"background-color":"rgba(0, 0, 0, 0)"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e.tab,staticClass:"tab"},[a("v-icon",{staticClass:"icon"},[t._v(t._s(e.icon))]),a("div",{staticClass:"txt"},[t._v(t._s(e.tab))])],1)})),1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab-item",{key:e.tab},[a("v-responsive",{staticClass:"drop-zone",attrs:{"aspect-ratio":16/9}},[a("div",{staticClass:"contnent"},[a("div",[t._v(t._s(e.content))]),a("div",[t._v(t._s(e.types))]),a("v-btn",{staticClass:"upload-btn",attrs:{text:"",ripple:"",rounded:""}},[t._v("Upload from local hard drive")])],1)])],1)})),1)],1)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"left-top"},[a("label",[t._v("Cover Media")]),a("p",[t._v("Add an image that clearly represents your project.")]),a("p",[t._v("Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.")]),a("p",[t._v("You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.")]),a("p",[t._v("Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.")])])}],M={name:"CoverMedia",data:function(){return{tab:null,items:[{tab:"Image",icon:"mdi-image-outline",content:"Drop Image",types:"png / jpg"},{tab:"Video",icon:"mdi-play-box-outline",content:"Drop Video",types:"mp4"}]}}},P=M,W=(a("dc1f"),a("8336")),A=a("6b53"),N=a("71a3"),B=a("c671"),D=a("fe57"),J=a("aac8"),Y=Object(v["a"])(P,z,I,!1,null,"31afbe33",null),q=Y.exports;d()(Y,{VBtn:W["a"],VIcon:b["a"],VResponsive:A["a"],VTab:N["a"],VTabItem:B["a"],VTabs:D["a"],VTabsItems:J["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"campaign-title"},[t._m(0),a("section",{staticClass:"right-bottom"},[a("div",{staticClass:"input-title"},[t._v("Title")]),a("v-text-field",{staticClass:"text-input",attrs:{height:"50",rules:t.rules}}),a("div",{staticClass:"input-title"},[t._v("Subtitle")]),a("v-text-field",{staticClass:"text-input",attrs:{height:"50",rules:t.rules}})],1)])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"left-top"},[a("label",[t._v("Campaign Title")]),a("p",[t._v("Write a clear, brief title that helps people quickly understand the gist of your project.")])])}],K={name:"CampaignTitle"},L=K,R=(a("c579"),a("8654")),U=Object(v["a"])(L,F,G,!1,null,"5e859192",null),H=U.exports;d()(U,{VTextField:R["a"]});var Q={name:"Content",components:{Steps:k,CoverMedia:q,CampaignTitle:H}},X=Q,Z=(a("07f5"),Object(v["a"])(X,h,C,!1,null,"3292bb20",null)),tt=Z.exports;d()(Z,{VBtn:W["a"],VIcon:b["a"]});var et={name:"Wizard",components:{TopNav:_,Content:tt}},at=et,nt=(a("22c7"),Object(v["a"])(at,r,c,!1,null,"680d9be4",null)),it=nt.exports,st={name:"App",components:{Wizard:it}},rt=st,ct=(a("034f"),Object(v["a"])(rt,i,s,!1,null,null,null)),ot=ct.exports,lt=a("f309");n["a"].use(lt["a"]);var ut=new lt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:ut,render:function(t){return t(ot)}}).$mount("#app")},"66ab":function(t,e,a){},"6a28":function(t,e,a){},"8a23":function(t,e,a){},"93ab":function(t,e,a){"use strict";var n=a("06c3"),i=a.n(n);i.a},bdd2:function(t,e,a){},c579:function(t,e,a){"use strict";var n=a("ebae"),i=a.n(n);i.a},dc1f:function(t,e,a){"use strict";var n=a("025b"),i=a.n(n);i.a},ebae:function(t,e,a){},fc91:function(t,e,a){"use strict";var n=a("bdd2"),i=a.n(n);i.a}});
//# sourceMappingURL=app.7a0957ca.js.map