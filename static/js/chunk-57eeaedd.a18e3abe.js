(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57eeaedd","chunk-33a76176"],{"30c7":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fillcontain"},[n("div",{ref:"contain",staticClass:"contain"},[n("switch-roles",{on:{change:e.handleRolesChange}}),n("div",{key:e.key,staticClass:"cflex"},[n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n        Only admin can see this\n        "),n("el-button",{attrs:{type:"warning"}},[e._v("admin")]),n("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n        Only editor can see this\n        "),n("el-button",{attrs:{type:"success"}},[e._v("编辑")]),n("el-button",{attrs:{type:"info"}},[e._v("信息按钮")])],1),n("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}],staticClass:"permission-alert"},[e._v("\n        Both adminand editor can see this\n        "),n("el-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),n("el-button",{attrs:{type:"success"}},[e._v("成功按钮")]),n("el-button",{attrs:{type:"info"}},[e._v("信息按钮")]),n("el-button",{attrs:{type:"warning"}},[e._v("警告按钮")]),n("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1)])],1)])},i=[],a=(n("6762"),n("2fdb"),n("4360")),r={inserted:function(e,t,n){var s=t.value,i=a["a"].getters&&a["a"].getters.roles;if(!(s&&s instanceof Array&&s.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=s,o=i.some(function(e){return r.includes(e)});o||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission",r)};window.Vue&&(window["permission"]=r,Vue.use(o)),r.install=o;var c=r,l=n("92d0"),d=n("f2bd"),u={name:"directivePermission",components:{SwitchRoles:l["default"]},directives:{permission:c},data:function(){return{key:1}},mounted:function(){d["d"](this,this.$refs.contain,210)},methods:{handleRolesChange:function(){this.key++}}},v=u,p=(n("6475"),n("2877")),m=Object(p["a"])(v,s,i,!1,null,"5a2408b6",null);t["default"]=m.exports},6475:function(e,t,n){"use strict";var s=n("c3d4"),i=n.n(s);i.a},"92d0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"ownPer"},[e._v("我的权限："+e._s(e.roles))]),n("div",{staticClass:"rflex"},[n("p",[e._v("切换权限：")]),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)])},i=[],a={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("ChangeRoles",e).then(function(){t.$emit("change")})}}}},r=a,o=(n("bc99"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"74ae0675",null);t["default"]=c.exports},ba0d:function(e,t,n){},bc99:function(e,t,n){"use strict";var s=n("ba0d"),i=n.n(s);i.a},c3d4:function(e,t,n){}}]);