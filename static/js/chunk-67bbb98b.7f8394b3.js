(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67bbb98b"],{bf5d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"20px"}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"房源图片"}},[a("el-upload",{attrs:{action:e.baseUrl+"/file/file",accept:"image/jpeg,image/png","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"before-upload":e.beforeAvatarUpload,"on-success":function(t,a,n){e.handleSuccess(t,a,n,1)},"on-remove":function(t,a){e.handleRemove(t,a,1)}}},[a("i",{staticClass:"el-icon-plus"})])],1),a("el-form-item",{attrs:{label:"户型图"}},[a("el-upload",{attrs:{action:e.baseUrl+"/file/file",accept:"image/jpeg,image/png","list-type":"picture-card","before-upload":e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview,"on-success":function(t,a,n){e.handleSuccess(t,a,n,2)},"on-remove":function(t,a){e.handleRemove(t,a,2)}}},[a("i",{staticClass:"el-icon-plus"})])],1),a("el-form-item",{attrs:{label:"VR"}},[a("el-upload",{attrs:{action:e.baseUrl+"/file/file","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-success":function(t,a,n){e.handleSuccess(t,a,n,3)},"on-remove":function(t,a){e.handleRemove(t,a,3)}}},[a("i",{staticClass:"el-icon-plus"})])],1),a("el-form-item",{attrs:{label:"房源视频"}},[a("el-upload",{attrs:{action:e.baseUrl+"/file/file",accept:"video/mp4","list-type":"picture-card","before-upload":e.beforeVideoUpload,"on-preview":e.handlePictureCardPreview,"on-success":function(t,a,n){e.handleSuccess(t,a,n,4)},"on-remove":function(t,a){e.handleRemove(t,a,4)}}},[a("i",{staticClass:"el-icon-plus"})])],1)],1),a("div",{staticStyle:{"text-align":"center",padding:"40px 0"}},[a("el-button",{attrs:{type:"success",size:"medium"},on:{click:e.saveAndComplete}},[e._v("保存完成")])],1)],1)},r=[],s=(a("ac6a"),a("f803")),o={data:function(){return{baseUrl:"http://8.130.26.25:7005",dialogImageUrl:"",dialogVisible:!1,type1:[],type2:[],type3:[],type4:[]}},methods:{handleRemove:function(e,t,a){switch(a){case 1:this.type1=t;break;case 2:this.type2=t;break;case 3:this.type3=t;break;case 4:this.type4=t;break}},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},saveAndComplete:function(){var e=this,t=[];console.log(this.type1),console.log(this.type2),console.log(this.type3),console.log(this.type4),this.type1.forEach(function(e){t.push({url:e.response.data.url,resType:2})}),this.type2.forEach(function(e){t.push({url:e.response.data.url,resType:3})}),this.type3.forEach(function(e){t.push({url:e.response.data.url,resType:1})}),this.type4.forEach(function(e){t.push({url:e.response.data.url,resType:4})}),Object(s["g"])(this.$route.query.houseId,t).then(function(t){0===t.code?e.$router.push("/house/addHistory"):alert(t.msg)})},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<10;return t||this.$message.error("上传的图片只能是 JPG或者 png 格式!"),a||this.$message.error("上传图片大小不能超过 2MB!"),t&&a},beforeVideoUpload:function(e){var t="video/mp4"===e.type,a=e.size/1024/1024<5;return t||this.$message.error("上传的图片只能是 JPG或者 png 格式!"),a||this.$message.error("上传的视频大小不能超过 5MB!"),t&&a},handleSuccess:function(e,t,a,n){switch(n){case 1:this.type1=a;break;case 2:this.type2=a;break;case 3:this.type3=a;break;case 4:this.type4=a;break}}}},i=o,u=a("2877"),c=Object(u["a"])(i,n,r,!1,null,null,null);t["default"]=c.exports},f803:function(e,t,a){"use strict";a.d(t,"l",function(){return o}),a.d(t,"i",function(){return i}),a.d(t,"o",function(){return u}),a.d(t,"b",function(){return c}),a.d(t,"c",function(){return l}),a.d(t,"j",function(){return d}),a.d(t,"h",function(){return p}),a.d(t,"f",function(){return h}),a.d(t,"e",function(){return f}),a.d(t,"d",function(){return m}),a.d(t,"g",function(){return b}),a.d(t,"k",function(){return g}),a.d(t,"n",function(){return y}),a.d(t,"a",function(){return v}),a.d(t,"m",function(){return w});var n=a("a27e"),r=a("4328"),s=a.n(r);function o(e){return Object(n["a"])({url:"/house/estate/admin/getInsertHistory4",method:"get",params:e})}function i(e,t){return Object(n["a"])({url:"/house/estate/getEstate/"+e,method:"get",params:t})}function u(e){return n["a"].post("house/estate/updatehouse",s.a.stringify(e),{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function c(e,t){return Object(n["a"])({url:"house/estate/savehouse?clientSales.owner="+t,method:"post",params:e})}function l(e,t){return Object(n["a"])({url:"/house/estate/admin/savehouse?clientSales.owner="+t,method:"post",params:e})}function d(e){return Object(n["a"])({url:"/house/estate/admin/getInsertHistory",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/house/estate/auditList",method:"get",params:e})}function h(e){return Object(n["a"])({url:"/house/estate/audit",method:"post",params:e})}function f(e,t){return Object(n["a"])({url:"/house/estate/addNearby/".concat(e),method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function m(e){return Object(n["a"])({headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",url:"/house/estate/extraInfo",data:e})}function b(e,t){return Object(n["a"])({method:"post",url:"/house/estate/batchAddHouseRes/".concat(e),data:t})}function g(){return Object(n["a"])({method:"get",url:"/house/estate/area"})}function y(e){return Object(n["a"])({method:"get",url:"/house/estate/searchEstate?key="+e})}function v(e){return Object(n["a"])({method:"post",url:"/house/estate/addEstate",data:s.a.stringify(e)})}function w(e){return Object(n["a"])({method:"post",url:"/house/estate/postAudit/".concat(e)})}}}]);