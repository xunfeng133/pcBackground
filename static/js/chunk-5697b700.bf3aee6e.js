(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5697b700"],{"4c34":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"salesTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",height:"424"}},[a("el-table-column",{attrs:{"class-name":"salesUsername",prop:"username",label:"USERNAME",width:"150"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("img",{staticClass:"userImg",attrs:{src:t.userImg,alt:"tuxiang"}}),t._v("\n          "+t._s(s.row.username.substring(0,12))+"\n      ")]}}])}),a("el-table-column",{attrs:{"class-name":"salesPrice",prop:"price",label:"PRICE",width:"80"},scopedSlots:t._u([{key:"default",fn:function(s){return[1===s.row.status?a("span",{staticClass:"saleColor"},[t._v("$ "+t._s(s.row.price))]):t._e(),2===s.row.status?a("span",{staticClass:"taxColor"},[t._v("$ "+t._s(s.row.price))]):t._e(),3===s.row.status?a("span",{staticClass:"extenedColor"},[t._v("$ "+t._s(s.row.price))]):t._e(),4===s.row.status0?a("span",{staticClass:"likeColor"},[t._v("$ "+t._s(s.row.price))]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"date",label:"DATE",width:"160"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("icon-svg",{attrs:{"icon-class":"icontime"}}),t._v("\n         "+t._s(s.row.date)+"\n      ")]}}])}),a("el-table-column",{attrs:{"class-name":"salesStatus",prop:"status",label:"STATUS"},scopedSlots:t._u([{key:"default",fn:function(s){return[1===s.row.status?a("span",{staticClass:"saleBgcolor"},[t._v("SALE")]):t._e(),2===s.row.status?a("span",{staticClass:"taxBgcolor"},[t._v("TAX")]):t._e(),3===s.row.status?a("span",{staticClass:"extenedBgcolor"},[t._v("EXTENDED")]):t._e(),4===s.row.status?a("span",{staticClass:"likeBgcolor"},[t._v("LIKE")]):t._e()]}}])})],1)],1)},l=[],n=a("c540"),o=a("6c50"),r=a.n(o),c={data:function(){return{tableData:[],userImg:r.a}},mounted:function(){this.getSalesList()},methods:{getSalesList:function(){var t=this;Object(n["a"])({}).then(function(s){console.log(s),t.pageTotal=s.data.total,t.tableData=s.data.list})}}},u=c,i=a("2877"),p=Object(i["a"])(u,e,l,!1,null,"94947ca2",null);s["default"]=p.exports},"6c50":function(t,s,a){t.exports=a.p+"static/img/avatar-3.9d2a0433.png"},c540:function(t,s,a){"use strict";a.d(s,"a",function(){return l});var e=a("a27e");function l(t){return Object(e["a"])({url:"/sales/get",method:"get",params:t})}}}]);