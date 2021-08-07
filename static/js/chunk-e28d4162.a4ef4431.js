(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e28d4162","chunk-3e901ee8","chunk-2d2136d7"],{"4d86":function(e,r,o){"use strict";var n=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"pagination"},[e.pageTotal>0?o("el-pagination",{attrs:{background:"","page-sizes":e.paginations.pageSizes,"page-size":e.paginations.pageSize,layout:e.paginations.layout,total:e.pageTotal,"current-page":e.paginations.pageIndex},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}):e._e()],1)},a=[],t=(o("c5f6"),{name:"pagination",data:function(){return{paginations:{pageIndex:1,pageSize:20,pageSizes:[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper"}}},props:{pageTotal:Number},created:function(){},mounted:function(){},methods:{handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)},handleSizeChange:function(e){this.$emit("handleSizeChange",e)}}}),s=t,i=(o("9d05"),o("2877")),d=Object(i["a"])(s,n,a,!1,null,"56293435",null);r["a"]=d.exports},7533:function(e,r,o){"use strict";o.r(r);var n=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"chinaTabsTable"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,align:"center"}},[o("el-table-column",{attrs:{prop:"ID",label:"序号",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v("\n                "+e._s(r.$index+1)+"\n            ")]}}])}),o("el-table-column",{attrs:{prop:"provinces",label:"省份",align:"center",width:"140"}}),o("el-table-column",{attrs:{prop:"orderMoney",label:"投资总额",align:"center",width:"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(r){return[o("span",{staticStyle:{color:"#CC0033"}},[e._v(e._s(r.row.orderMoney))])]}}])}),o("el-table-column",{attrs:{prop:"incomeMoney",label:"收益金额",align:"center",width:"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(r){return[o("span",{staticStyle:{color:"#00d053"}},[e._v("+"+e._s(r.row.incomeMoney))])]}}])}),o("el-table-column",{attrs:{prop:"payType",label:"主要投资项目",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[o("el-tag",{attrs:{type:"info","close-transition":""}},[e._v("\n                "+e._s(r.row.payType)+"\n            ")])]}}])}),o("el-table-column",{attrs:{prop:"orderPeriod",label:"投资周期",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"orderPersonConunt",label:"投资人数",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"orderYearRate",label:"投资年变化率",align:"center",width:"120"}}),o("el-table-column",{attrs:{prop:"remarks",label:"备注",align:"left"},scopedSlots:e._u([{key:"default",fn:function(r){return[o("span",{staticStyle:{color:"#3366CC"}},[e._v(e._s(r.row.remarks))])]}}])})],1)],1)},a=[],t=o("ad42"),s={data:function(){return{tableData:[],tableHeight:0}},props:{toggleData:[String]},mounted:function(){var e=this;this.setTableHeight(),window.onresize=function(){e.setTableHeight()}},methods:{setTableHeight:function(){var e=this;this.$nextTick(function(){e.tableHeight=document.body.clientHeight-280})},showTableData:function(e){switch(e){case"eastChina":this.tableData=t.china.eastChina;break;case"southChina":this.tableData=t.china.southChina;break;case"centralChina":this.tableData=t.china.centralChina;break;case"northChina":this.tableData=t.china.northChina;break;case"northwestChina":this.tableData=t.china.northwestChina;break;case"southwestChina":this.tableData=t.china.southwestChina;break;case"northeastChina":this.tableData=t.china.northeastChina;break;case"specialareaChina":this.tableData=t.china.specialareaChina;break}}},watch:{toggleData:function(e){this.showTableData(e)}}},i=s,d=o("2877"),c=Object(d["a"])(i,n,a,!1,null,null,null);r["default"]=c.exports},"94c4":function(e,r,o){},"9d05":function(e,r,o){"use strict";var n=o("94c4"),a=o.n(n);a.a},ad42:function(e){e.exports=JSON.parse('{"china":{"title":"中国各区域投资情况","eastChina":[{"provinces":"山东省","orderMoney":5690,"incomeMoney":3490,"payType":"贵金属","orderPeriod":"18个月","orderPersonConunt":4792,"orderYearRate":"5%","remarks":"倾向于投资白银"},{"provinces":"江苏省","orderMoney":7832,"incomeMoney":3820,"payType":"保险","orderPeriod":"30个月","orderPersonConunt":7923,"orderYearRate":"12%","remarks":"倾向于投资信誉度较高的保险"},{"provinces":"安徽省","orderMoney":7840,"incomeMoney":3290,"payType":"房产","orderPeriod":"12个月","orderPersonConunt":3489,"orderYearRate":"8%","remarks":"多投资于品牌开发商"},{"provinces":"浙江省","orderMoney":7830,"incomeMoney":3590,"payType":"信托","orderPeriod":"30个月","orderPersonConunt":6820,"orderYearRate":"12%","remarks":"喜欢投资科技型信托"},{"provinces":"福建省","orderMoney":7839,"incomeMoney":3289,"payType":"储蓄","orderPeriod":"24个月","orderPersonConunt":6486,"orderYearRate":"15%","remarks":"倾向于中国银行"},{"provinces":"上海市","orderMoney":23809,"incomeMoney":10892,"payType":"基金","orderPeriod":"36个月","orderPersonConunt":9830,"orderYearRate":"5%","remarks":"投资集中为保守型基金"},{"provinces":"山东省","orderMoney":5690,"incomeMoney":3490,"payType":"贵金属","orderPeriod":"18个月","orderPersonConunt":4792,"orderYearRate":"5%","remarks":"倾向于投资白银"},{"provinces":"江苏省","orderMoney":7832,"incomeMoney":3820,"payType":"保险","orderPeriod":"30个月","orderPersonConunt":7923,"orderYearRate":"12%","remarks":"倾向于投资信誉度较高的保险"},{"provinces":"安徽省","orderMoney":7840,"incomeMoney":3290,"payType":"房产","orderPeriod":"12个月","orderPersonConunt":3489,"orderYearRate":"8%","remarks":"多投资于品牌开发商"},{"provinces":"浙江省","orderMoney":7830,"incomeMoney":3590,"payType":"信托","orderPeriod":"30个月","orderPersonConunt":6820,"orderYearRate":"12%","remarks":"喜欢投资科技型信托"},{"provinces":"福建省","orderMoney":7839,"incomeMoney":3289,"payType":"储蓄","orderPeriod":"24个月","orderPersonConunt":6486,"orderYearRate":"15%","remarks":"倾向于中国银行"},{"provinces":"上海市","orderMoney":23809,"incomeMoney":10892,"payType":"基金","orderPeriod":"36个月","orderPersonConunt":9830,"orderYearRate":"5%","remarks":"投资集中为保守型基金"},{"provinces":"山东省","orderMoney":5690,"incomeMoney":3490,"payType":"贵金属","orderPeriod":"18个月","orderPersonConunt":4792,"orderYearRate":"5%","remarks":"倾向于投资白银"},{"provinces":"江苏省","orderMoney":7832,"incomeMoney":3820,"payType":"保险","orderPeriod":"30个月","orderPersonConunt":7923,"orderYearRate":"12%","remarks":"倾向于投资信誉度较高的保险"},{"provinces":"安徽省","orderMoney":7840,"incomeMoney":3290,"payType":"房产","orderPeriod":"12个月","orderPersonConunt":3489,"orderYearRate":"8%","remarks":"多投资于品牌开发商"},{"provinces":"浙江省","orderMoney":7830,"incomeMoney":3590,"payType":"信托","orderPeriod":"30个月","orderPersonConunt":6820,"orderYearRate":"12%","remarks":"喜欢投资科技型信托"},{"provinces":"福建省","orderMoney":7839,"incomeMoney":3289,"payType":"储蓄","orderPeriod":"24个月","orderPersonConunt":6486,"orderYearRate":"15%","remarks":"倾向于中国银行"},{"provinces":"上海市","orderMoney":23809,"incomeMoney":10892,"payType":"基金","orderPeriod":"36个月","orderPersonConunt":9830,"orderYearRate":"5%","remarks":"投资集中为保守型基金"}],"southChina":[{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"},{"provinces":"广东省","orderMoney":9820,"incomeMoney":800,"payType":"债券","orderPeriod":"30个月","orderPersonConunt":8720,"orderYearRate":"20%","remarks":"投资集中为金融债券"},{"provinces":"广西壮族自治区","orderMoney":5903,"incomeMoney":2020,"payType":"储蓄","orderPeriod":"60个月","orderPersonConunt":6729,"orderYearRate":"5%","remarks":"多投资于银行存款，保守投资"},{"provinces":"海南省","orderMoney":8379,"incomeMoney":3630,"payType":"信托","orderPeriod":"6个月","orderPersonConunt":7302,"orderYearRate":"12%","remarks":"喜欢稳定性信托"}],"centralChina":[{"provinces":"湖北省","orderMoney":6792,"incomeMoney":1390,"payType":"基金","orderPeriod":"24个月","orderPersonConunt":5400,"orderYearRate":"10%","remarks":"投资集中为科技型基金"},{"provinces":"湖南省","orderMoney":7930,"incomeMoney":2190,"payType":"股票","orderPeriod":"36个月","orderPersonConunt":3480,"orderYearRate":"8%","remarks":"投资集中为科技型股票"},{"provinces":"河南省","orderMoney":8920,"incomeMoney":3200,"payType":"期货","orderPeriod":"24个月","orderPersonConunt":7820,"orderYearRate":"8%","remarks":"多投资于保守型期货"},{"provinces":"江西省","orderMoney":6803,"incomeMoney":2839,"payType":"信托","orderPeriod":"36个月","orderPersonConunt":3480,"orderYearRate":"8%","remarks":"喜欢品牌信托项目"}],"northChina":[{"provinces":"北京市","orderMoney":26803,"incomeMoney":10282,"payType":"古董收藏","orderPeriod":"24个月","orderPersonConunt":5839,"orderYearRate":"14%","remarks":"倾向于明代皇家古董"},{"provinces":"天津市","orderMoney":17839,"incomeMoney":9830,"payType":"外汇","orderPeriod":"20个月","orderPersonConunt":9830,"orderYearRate":"5%","remarks":"倾向于英镑"},{"provinces":"河北省","orderMoney":3890,"incomeMoney":1390,"payType":"房产","orderPeriod":"30个月","orderPersonConunt":2379,"orderYearRate":"12%","remarks":"倾向于投资公寓型房产"},{"provinces":"山西省","orderMoney":8390,"incomeMoney":4290,"payType":"外汇","orderPeriod":"12个月","orderPersonConunt":4792,"orderYearRate":"10%","remarks":"多投资于美元"},{"provinces":"内蒙古自治区","orderMoney":3893,"incomeMoney":2091,"payType":"基金","orderPeriod":"12个月","orderPersonConunt":3279,"orderYearRate":"8%","remarks":"多投资于财富基金"}],"northwestChina":[{"provinces":"宁夏回族自治区","orderMoney":7338,"incomeMoney":3730,"payType":"保险","orderPeriod":"12个月","orderPersonConunt":7392,"orderYearRate":"8%","remarks":"喜欢健康类保险"},{"provinces":"新疆维吾尔族自治区","orderMoney":2349,"incomeMoney":1093,"payType":"保险","orderPeriod":"24个月","orderPersonConunt":2397,"orderYearRate":"8%","remarks":"喜欢投资人身意外险"},{"provinces":"青海省","orderMoney":4538,"incomeMoney":1893,"payType":"房产","orderPeriod":"60个月","orderPersonConunt":6389,"orderYearRate":"20%","remarks":"倾向于国内一线城市"},{"provinces":"陕西省","orderMoney":5639,"incomeMoney":2892,"payType":"股票","orderPeriod":"6个月","orderPersonConunt":5830,"orderYearRate":"18%","remarks":"倾向于能源类股票"},{"provinces":"甘肃省","orderMoney":5639,"incomeMoney":2389,"payType":"古董收藏","orderPeriod":"60个月","orderPersonConunt":9839,"orderYearRate":"15%","remarks":"多投资于清代字画"}],"southwestChina":[{"provinces":"四川省","orderMoney":7639,"incomeMoney":2490,"payType":"贵金属","orderPeriod":"24个月","orderPersonConunt":2454,"orderYearRate":"10%","remarks":"倾向于投资白银"},{"provinces":"云南省","orderMoney":2390,"incomeMoney":1098,"payType":"债券","orderPeriod":"20个月","orderPersonConunt":2389,"orderYearRate":"15%","remarks":"投资集中为银行债券"},{"provinces":"贵州省","orderMoney":2590,"incomeMoney":1038,"payType":"期货","orderPeriod":"30个月","orderPersonConunt":5857,"orderYearRate":"12%","remarks":"多投资于金融期货"},{"provinces":"西藏自治区","orderMoney":8303,"incomeMoney":3409,"payType":"贵金属","orderPeriod":"36个月","orderPersonConunt":3408,"orderYearRate":"15%","remarks":"喜欢投资黄金等贵金属"},{"provinces":"重庆市","orderMoney":12839,"incomeMoney":8739,"payType":"股票","orderPeriod":"12个月","orderPersonConunt":4839,"orderYearRate":"12%","remarks":"投资集中为电商型股票"}],"northeastChina":[{"provinces":"黑龙江省","orderMoney":4529,"incomeMoney":2390,"payType":"期货","orderPeriod":"24个月","orderPersonConunt":8927,"orderYearRate":"20%","remarks":"多投资于品牌期货"},{"provinces":"吉林省","orderMoney":7830,"incomeMoney":3729,"payType":"债券","orderPeriod":"18个月","orderPersonConunt":3492,"orderYearRate":"5%","remarks":"多投资于美国债券"},{"provinces":"辽宁省","orderMoney":3490,"incomeMoney":1980,"payType":"储蓄","orderPeriod":"24个月","orderPersonConunt":4589,"orderYearRate":"10%","remarks":"多投资于农业银行"}],"specialareaChina":[{"provinces":"台湾省","orderMoney":6739,"incomeMoney":3029,"payType":"古董收藏","orderPeriod":"18个月","orderPersonConunt":3820,"orderYearRate":"10%","remarks":"对汉代字画颇为赏识"},{"provinces":"香港特别行政区","orderMoney":7390,"incomeMoney":3820,"payType":"外汇","orderPeriod":"24个月","orderPersonConunt":6380,"orderYearRate":"8%","remarks":"倾向于美元储蓄"},{"provinces":"澳门特别行政区","orderMoney":6490,"incomeMoney":3280,"payType":"基金","orderPeriod":"30个月","orderPersonConunt":9090,"orderYearRate":"12%","remarks":"倾向于科技类基金"}]}}')},ddc9:function(e,r,o){"use strict";o.r(r);var n=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"fillcontain"},[o("div",{ref:"tabContainer",staticClass:"tabContainer"},[o("el-tabs",{attrs:{type:"border-card"}},[o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("eastChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"icondashboard"}}),e._v("华东区域")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("southChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconecharts"}}),e._v("华南区域")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("centralChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconinfo"}}),e._v("华中区域")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("northChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconpermission"}}),e._v("华北区域")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("northwestChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconuser"}}),e._v("西北区域")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("southwestChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconError"}}),e._v("西南地区")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("northeastChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconfufei0"}}),e._v("东北地区")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1),o("el-tab-pane",[o("span",{attrs:{slot:"label"},on:{click:function(r){return e.toggleTabs("specialareaChina")}},slot:"label"},[o("icon-svg",{attrs:{"icon-class":"iconpay1"}}),e._v("台港澳地区")],1),o("china-tabs-table",{attrs:{toggleData:e.toggleData}})],1)],1),o("pagination",{attrs:{pageTotal:e.pageTotal}})],1)])},a=[],t=o("7533"),s=(o("ad42"),o("4d86")),i={data:function(){return{toggleData:"",pageTotal:60}},components:{chinaTabsTable:t["default"],Pagination:s["a"]},mounted:function(){this.toggleTabs("eastChina")},methods:{setTabHeight:function(){var e=this;this.$nextTick(function(){e.$refs.tabContainer.style.height=document.body.clientHeight-160+"px"})},toggleTabs:function(e){this.toggleData=e}}},d=i,c=o("2877"),y=Object(c["a"])(d,n,a,!1,null,"0db6c7a6",null);r["default"]=y.exports}}]);