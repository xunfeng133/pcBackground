(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27886a1f"],{"00fe":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"#ffffff","padding-bottom":"60px"}},[a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("房源价格")]),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("政府指导价：")]),a("span",[t._v(t._s(t.houseDetail.referance_price)+"万")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("销售价：")]),a("span",[t._v(t._s(t.houseDetail.sale_price)+"万")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("单价：")]),a("span",[t._v("50000/m²")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("评估价：")]),a("span",[t._v(t._s(t.houseDetail.evaluate_price))])])],1)],1),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("历史成交价")]),a("div",{staticStyle:{padding:"10px"}},[a("el-timeline",{attrs:{reverse:!0}},t._l(t.dealHistory,function(e,s){return a("el-timeline-item",{key:s,attrs:{timestamp:e.dealTime}},[t._v("\n                    "+t._s(e.content)+"\n                ")])}),1)],1)]),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("房源基本信息")]),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("房屋户型：")]),a("span",[t._v(t._s(t.houseDetail.countf)+"房"+t._s(t.houseDetail.countt)+"厅"+t._s(t.houseDetail.countw)+"卫"+t._s(t.houseDetail.county)+"阳台")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("所在楼层：")]),a("span",[t._v(t._s(t.houseDetail.floor))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("楼栋门牌：")]),a("span",[t._v(t._s(t.houseDetail.building_name))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("户型结构：")]),a("span",[t._v(t._s(t.houseDetail.type))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("建筑面积：")]),a("span",[t._v(t._s(t.houseDetail.square)+"m²")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("套内面积：")]),a("span",[t._v(t._s(t.houseDetail.propertytn)+"m²")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("房屋朝向：")]),a("span",[t._v(t._s(t.houseDetail.propertyDirection))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("有无学位：")]),a("span",[t._v(t._s(t.houseDetail.ynschool))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("交通情况：")]),a("span",[t._v(t._s(t.houseDetail.metro_around))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("环线：")]),a("span",[t._v(t._s(t.houseDetail.Metro_line_number))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("小区地址：")]),a("span",[t._v(t._s(t.houseDetail.cityname)+t._s(t.houseDetail.districtname)+t._s(t.houseDetail.areaname))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("改造笋：")]),a("span",[t._v(t._s(t.houseDetail.yndecoration))])])],1)],1),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("房源其他信息")]),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("装修：")]),a("span",[t._v(t._s(t.houseDetail.renovation))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("采光：")]),a("span",[t._v(t._s(t.houseDetail.sunshine))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("硬伤：")]),a("span",[t._v(t._s(t.houseDetail.inferior))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("亮点：")]),a("span",[t._v(t._s(t.houseDetail.advantage))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("小区绿化：")]),a("span",[t._v(t._s(t.houseDetail.park_green))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("按揭/抵押：")]),a("span",[t._v(t._s(t.houseDetail.mortgage))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("赎楼罚息：")]),a("span",[t._v(t._s(t.houseDetail.redeem_interest))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("赎楼担保费：")]),a("span",[t._v("20000万")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("月租金预算：")]),a("span",[t._v("90万")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("视野景观：")]),a("span",[t._v(t._s(t.houseDetail.scenery))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("窗外价值：")]),a("span",[t._v("价值高")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("概念利好：")]),a("span")])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("腾空时间：")]),a("span",[t._v(t._s(t.houseDetail.house_empty_time))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("家电家具：")]),a("span",[t._v(t._s(t.houseDetail.household_electric)+"，"+t._s(t.houseDetail.furniture))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("评估费：")]),a("span",[t._v("50000")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("容积率：")]),a("span",[t._v("0.87")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("挂牌时间：")]),a("span",[t._v(t._s(t.houseDetail.development))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("楼盘交付时间：")]),a("span",[t._v(t._s(t.houseDetail.building_deliver_time))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("贴花及工本费：")]),a("span",[t._v("20000")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("同比上月涨幅：")]),a("span",[t._v("+0.4%")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("首付套房贷利率：")]),a("span",[t._v(t._s(t.houseDetail.first_house_rate))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("参考年租金回报率：")]),a("span",[t._v(t._s(t.houseDetail.rent_year_payment_rate))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("租金覆盖月供比例：")]),a("span",[t._v("0.233")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("每月补月供差价：")]),a("span",[t._v(t._s(t.houseDetail.price_difference))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("所有费用累计预算金额：")]),a("span",[t._v("100万")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("业主付款要求：")]),a("span",[t._v(t._s(t.houseDetail.owner_pay_requirement))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("贷款金额：")]),a("span",[t._v(t._s(t.houseDetail.loan_summary))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("业主心态：")]),a("span",[t._v(t._s(t.houseDetail.owner_mentality))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("意向价格：")]),a("span",[t._v(t._s(t.houseDetail.aim_price)+"万")])])],1)],1),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("房源卖点")]),a("div",{staticStyle:{padding:"20px","text-indent":"2em",color:"#666"}},[t._v("\n            "+t._s(t.houseDetail.sellingPoints)+"\n        ")])]),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("K线图点评")]),a("div",{staticStyle:{padding:"20px","text-indent":"2em",color:"#666"}},[t._v("\n            "+t._s(t.houseDetail.klineComment)+"\n        ")])]),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("五价点评")]),a("div",{staticStyle:{padding:"20px","text-indent":"2em",color:"#666"}},[t._v("\n            "+t._s(t.houseDetail.five_price_comment)+"\n        ")])]),t.houseDetail.clientSales?a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("业主信息")]),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("业主姓名：")]),a("span",[t._v(t._s(t.houseDetail.clientSales.clientSale))])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("业主电话：")]),a("span",[t._v(t._s(t.houseDetail.clientSales.mobileNo))])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("业主性别：")]),a("span",[t._v("男")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("身份证号码：")]),a("span",[t._v("441765211232655569")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("业主户口：")]),a("span",[t._v("深户")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("是否已婚：")]),a("span",[t._v("已婚")])])],1),a("el-row",{staticStyle:{width:"800px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:12}},[a("label",[t._v("征信状况：")]),a("span",[t._v("良好")])]),a("el-col",{attrs:{span:12}},[a("label",[t._v("贷款金额：")]),a("span",[t._v("400万")])])],1)],1):t._e(),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("户型图")]),a("div",[a("ul",[a("li",[a("el-image",{staticStyle:{width:"300px",height:"250px"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage1.ljcdn.com%2Fnewhouse-user-image%2F6b566fe6a2b8f2442a25af76512a26f2.png.1004x.jpg&refer=http%3A%2F%2Fimage1.ljcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622709760&t=d0cdb85a86b7b6e4ec713f7152e095f4","preview-src-list":["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage1.ljcdn.com%2Fnewhouse-user-image%2F6b566fe6a2b8f2442a25af76512a26f2.png.1004x.jpg&refer=http%3A%2F%2Fimage1.ljcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622709760&t=d0cdb85a86b7b6e4ec713f7152e095f4"]}})],1)])])]),a("div",{staticClass:"contain-panel"},[a("div",{staticClass:"title"},[t._v("房源图")]),a("div",[a("ul",{staticClass:"image-ls"},[a("li",[a("el-image",{staticStyle:{width:"200px",height:"160px"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.517gf.com%2Foripic%2Fhouse%2F20180328%2Fhouse20180328114752_47379.jpg&refer=http%3A%2F%2Fwww.517gf.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710108&t=42a95300c71385fc70996121630e5d06","preview-src-list":t.images}})],1),a("li",[a("el-image",{staticStyle:{width:"200px",height:"160px"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4.tuituifang.com%2F11%2Fsh%2Fpic%2Ferp%2F201810%2F132be6d53075d14c2644ea8128136d47.jpg&refer=http%3A%2F%2Fimg4.tuituifang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710553&t=f29d7d96de727dfa28f06d04cdaf887f","preview-src-list":t.images}})],1),a("li",[a("el-image",{staticStyle:{width:"200px",height:"160px"},attrs:{src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuimg.liecdn.cn%2Fimage%2Fpost%2F1e%2Ff9%2Fa8%2F6d%2F1ef9a86d66336b246fea4147129220de.jpg&refer=http%3A%2F%2Fuimg.liecdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710108&t=2cb74496021d035d211ada05e7f5b29c","preview-src-list":t.images}})],1)])])])])},l=[],i=a("f803"),n={data:function(){return{images:["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.517gf.com%2Foripic%2Fhouse%2F20180328%2Fhouse20180328114752_47379.jpg&refer=http%3A%2F%2Fwww.517gf.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710108&t=42a95300c71385fc70996121630e5d06","https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg4.tuituifang.com%2F11%2Fsh%2Fpic%2Ferp%2F201810%2F132be6d53075d14c2644ea8128136d47.jpg&refer=http%3A%2F%2Fimg4.tuituifang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710553&t=f29d7d96de727dfa28f06d04cdaf887f","https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuimg.liecdn.cn%2Fimage%2Fpost%2F1e%2Ff9%2Fa8%2F6d%2F1ef9a86d66336b246fea4147129220de.jpg&refer=http%3A%2F%2Fuimg.liecdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622710108&t=2cb74496021d035d211ada05e7f5b29c"],dealHistory:[{content:"成交价格4000万",dealTime:"2018-04-15"},{content:"成交价格4400万",dealTime:"2019-04-13"},{content:"成交价格4900万",dealTime:"2020-04-11"}],houseDetail:{}}},created:function(){this.getHouseDetail()},methods:{getHouseDetail:function(){var t=this;Object(i["i"])(this.$route.query.id).then(function(e){t.houseDetail=e.data,console.log(t.houseDetail)})},auditHouse:function(t){var e=this;Object(i["f"])({HoseId:this.$route.query.id,auditStatus:t}).then(function(t){0===t.code?(alert("审核完成"),e.$router.push("/house/audit/list")):alert(t.msg)})}}},r=n,o=(a("c3ce"),a("2877")),c=Object(o["a"])(r,s,l,!1,null,"411dbd60",null);e["default"]=c.exports},"741e":function(t,e,a){},c3ce:function(t,e,a){"use strict";var s=a("741e"),l=a.n(s);l.a},f803:function(t,e,a){"use strict";a.d(e,"l",function(){return n}),a.d(e,"i",function(){return r}),a.d(e,"o",function(){return o}),a.d(e,"b",function(){return c}),a.d(e,"c",function(){return p}),a.d(e,"j",function(){return u}),a.d(e,"h",function(){return d}),a.d(e,"f",function(){return _}),a.d(e,"e",function(){return h}),a.d(e,"d",function(){return v}),a.d(e,"g",function(){return g}),a.d(e,"k",function(){return m}),a.d(e,"n",function(){return f}),a.d(e,"a",function(){return b}),a.d(e,"m",function(){return w});var s=a("a27e"),l=a("4328"),i=a.n(l);function n(t){return Object(s["a"])({url:"/house/estate/admin/getInsertHistory4",method:"get",params:t})}function r(t,e){return Object(s["a"])({url:"/house/estate/getEstate/"+t,method:"get",params:e})}function o(t){return s["a"].post("house/estate/updatehouse",i.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function c(t,e){return Object(s["a"])({url:"house/estate/savehouse?clientSales.owner="+e,method:"post",params:t})}function p(t,e){return Object(s["a"])({url:"/house/estate/admin/savehouse?clientSales.owner="+e,method:"post",params:t})}function u(t){return Object(s["a"])({url:"/house/estate/admin/getInsertHistory",method:"get",params:t})}function d(t){return Object(s["a"])({url:"/house/estate/auditList",method:"get",params:t})}function _(t){return Object(s["a"])({url:"/house/estate/audit",method:"post",params:t})}function h(t,e){return Object(s["a"])({url:"/house/estate/addNearby/".concat(t),method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function v(t){return Object(s["a"])({headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",url:"/house/estate/extraInfo",data:t})}function g(t,e){return Object(s["a"])({method:"post",url:"/house/estate/batchAddHouseRes/".concat(t),data:e})}function m(){return Object(s["a"])({method:"get",url:"/house/estate/area"})}function f(t){return Object(s["a"])({method:"get",url:"/house/estate/searchEstate?key="+t})}function b(t){return Object(s["a"])({method:"post",url:"/house/estate/addEstate",data:i.a.stringify(t)})}function w(t){return Object(s["a"])({method:"post",url:"/house/estate/postAudit/".concat(t)})}}}]);