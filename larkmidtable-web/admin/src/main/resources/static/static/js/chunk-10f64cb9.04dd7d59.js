(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f64cb9"],{3197:function(t,e,a){},4558:function(t,e,a){},"4f02":function(t,e,a){"use strict";a("3197")},"8bb3":function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return o}));var r=a("b775");function l(t){return Object(r["a"])({url:"api/devSQL/add",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/api/devSQL/update",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/api/devTask/execute",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/api/devTask/upload",method:"post",data:t})}function o(t){return t=Object.assign({tasktype:"SQL"},t||{}),Object(r["a"])({url:"/api/devTask/list",method:"get",params:t})}},"993b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dev-sql"},[t.sqlDataList?a("div",{staticClass:"nav-bar"},[a("div",{staticClass:"search"},[a("el-input",{attrs:{size:"small","prefix-icon":"el-icon-search",placeholder:"请输入查询关键字"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.handleSearch}},[t._v(" 查询 ")])],1),a("ul",t._l(t.sqlDataList,(function(e,r){return a("li",{key:"sql-data-list-"+r,class:{"cur-li":t.curData&&t.curData.id===e.id},on:{click:function(a){return t.setCurData(e)}}},[a("span",[a("span",{staticClass:"icon"},[t._v(t._s(e.tasktype))]),a("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.name))])])])})),0)]):t._e(),a("div",{staticClass:"app-main"},[a("div",{staticClass:"buttons"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleAdd}},[t._v("新建")]),a("el-button",{attrs:{type:"primary",size:"small",disabled:!t.curData},on:{click:t.executeData}},[t._v("运行")]),a("el-button",{attrs:{type:"primary",size:"small",disabled:!t.curData},on:{click:function(){t.curData.sql_text=t.sqlText,t.updateData(t.curData)}}},[t._v(" 保存 ")])],1),t.curData?a("div",{staticClass:"editor"},[a("el-form",{ref:"infoDialogForm",attrs:{model:t.curData,rules:t.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"任务名称",prop:"name"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.curData.name,callback:function(e){t.$set(t.curData,"name","string"===typeof e?e.trim():e)},expression:"curData.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务类型",prop:"tasktype"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.curData.tasktype,callback:function(e){t.$set(t.curData,"tasktype","string"===typeof e?e.trim():e)},expression:"curData.tasktype"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"运行方式",prop:"runtype"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.curData.runtype,callback:function(e){t.$set(t.curData,"runtype","string"===typeof e?e.trim():e)},expression:"curData.runtype"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"运行参数",prop:"run_param"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.curData.run_param,callback:function(e){t.$set(t.curData,"run_param","string"===typeof e?e.trim():e)},expression:"curData.run_param"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"jar URI",prop:"jarpath"}},[a("span",{staticStyle:{display:"flex","align-items":"center"}},[a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.curData.jarpath,callback:function(e){t.$set(t.curData,"jarpath","string"===typeof e?e.trim():e)},expression:"curData.jarpath"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.uploadData}},[t._v("上传")])],1)])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"任务描述",prop:"task_describe"}},[a("el-input",{attrs:{clearable:!0,type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入"},model:{value:t.curData.task_describe,callback:function(e){t.$set(t.curData,"task_describe","string"===typeof e?e.trim():e)},expression:"curData.task_describe"}})],1)],1)],1)],1),a("div",{staticClass:"result",domProps:{innerHTML:t._s(t.jsonResult)}})],1):t._e()]),a("InfoDialog",{ref:"InfoDialog"})],1)},l=[],n=(a("e9c4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{ref:"InfoDialog",attrs:{visible:t.dialogShow,title:t.infoTitle,width:"600px","append-to-body":""},on:{"update:visible":function(e){t.dialogShow=e},close:t.close}},[a("el-form",{ref:"infoDialogForm",attrs:{model:t.formData,rules:t.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"任务名称",prop:"name"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务类型",prop:"tasktype"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.formData.tasktype,callback:function(e){t.$set(t.formData,"tasktype","string"===typeof e?e.trim():e)},expression:"formData.tasktype"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"运行方式",prop:"runtype"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.formData.runtype,callback:function(e){t.$set(t.formData,"runtype","string"===typeof e?e.trim():e)},expression:"formData.runtype"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"运行参数",prop:"run_param"}},[a("el-input",{attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.formData.run_param,callback:function(e){t.$set(t.formData,"run_param","string"===typeof e?e.trim():e)},expression:"formData.run_param"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"jar URI",prop:"jarpath"}},[a("span",{staticStyle:{display:"flex","align-items":"center"}},[a("el-input",{staticStyle:{"margin-right":"10px"},attrs:{clearable:!0,placeholder:"请输入"},model:{value:t.formData.jarpath,callback:function(e){t.$set(t.formData,"jarpath","string"===typeof e?e.trim():e)},expression:"formData.jarpath"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.uploadData}},[t._v("上传")])],1)])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"任务描述",prop:"task_describe"}},[a("el-input",{attrs:{clearable:!0,type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入"},model:{value:t.formData.task_describe,callback:function(e){t.$set(t.formData,"task_describe","string"===typeof e?e.trim():e)},expression:"formData.task_describe"}})],1)],1)],1),a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确定")]),a("el-button",{attrs:{type:"info"},on:{click:t.handleCancel}},[t._v("取消")])],1)],1)],1)}),s=[],i=a("8bb3"),o={name:"ChangePassword",data:function(){return{rules:{name:[{required:!0,message:"不能为空",trigger:"blur"}],tasktype:[{required:!0,message:"不能为空",trigger:"blur"}],runtype:[{required:!0,message:"不能为空",trigger:"blur"}]},dialogShow:!1,onClose:null,onSubmit:null,infoTitle:"详细信息",defaultFormData:{id:"",name:"",tasktype:"JAR",runtype:"yarn-session",run_param:"",sql_text:"",stask_describe:"",jarpath:""},formData:null}},created:function(){this.formData=Object.assign({},this.defaultFormData)},methods:{openDialog:function(t){var e=t.formData,a=void 0===e?{}:e,r=t.infoTitle,l=void 0===r?"":r,n=t.onSubmit,s=void 0===n?null:n,i=t.onClose,o=void 0===i?null:i;this.onSubmit=s,this.onClose=o,this.infoTitle=l,this.formData=Object.assign(a,this.defaultFormData),this.dialogShow=!0},uploadData:function(){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","application/*, image/x-png, image/gif, image/jpeg, image/bmp"),t.style.display="none",t.addEventListener("change",(function(e){console.log("refFiles = ",t),console.dir(t.files),console.log("e = ",e),Object(i["e"])({file:t.files[0],filePath:t.files[0].webkitRelativePath}).then((function(t){console.log("devTaskUpload res",t)}))})),t.click()},handleSubmit:function(){var t=this;this.$refs["infoDialogForm"].validate((function(e){var a;return e?(null===(a=t.onSubmit)||void 0===a||a.call(t,t.formData),t.dialogShow=!1,!0):(t.$message.error("填写异常，请仔细检查"),!1)}))},handleCancel:function(){this.dialogShow=!1},close:function(){var t;null===(t=this.onClose)||void 0===t||t.call(this,this.formData)}}},c=o,u=(a("4f02"),a("2877")),p=Object(u["a"])(c,n,s,!1,null,"477c0d37",null),m=p.exports,f={nmae:"SQLlistManageDevelopment",components:{InfoDialog:m},data:function(){return{rules:{name:[{required:!0,message:"不能为空",trigger:"blur"}],tasktype:[{required:!0,message:"不能为空",trigger:"blur"}],runtype:[{required:!0,message:"不能为空",trigger:"blur"}]},sqlDataList:null,searchInput:"",jsonResult:"",sqlText:"",curData:null,dataList:[]}},mounted:function(){var t=this;this.handleSearch().then((function(){t.sqlDataList.length&&t.setCurData(t.sqlDataList[0])}))},methods:{getData:function(){var t=this,e={tasktype:"JAR"};return this.searchInput&&(e["name"]=this.searchInput),Object(i["d"])(e).then((function(e){console.log("devTaskList res:",e.content.data),t.sqlDataList=e.content.data}))},setCurData:function(t){var e=this,a=function(){var a;e.curData=t,e.sqlText=(null===(a=e.curData)||void 0===a?void 0:a.sql_text)||""};this.curData&&this.curData.sql_text!==this.sqlText?this.$confirm("该操作将覆盖当前未保存修改，是否继续","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(t){return a()})):a()},handleSearch:function(){return this.getData()},uploadData:function(){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","application/*, image/x-png, image/gif, image/jpeg, image/bmp"),t.style.display="none",t.addEventListener("change",(function(e){console.log("refFiles = ",t),console.dir(t.files),console.log("e = ",e),Object(i["e"])({file:t.files[0],filePath:t.files[0].webkitRelativePath}).then((function(t){console.log("devTaskUpload res",t)}))})),t.click()},updateData:function(t){var e=this;Object(i["b"])(t).then((function(){e.$message.success("更新成功"),e.getData()}))},handleUpdate:function(t){this.$refs["InfoDialog"].openDialog({formData:t,infoTitle:"更新",onSubmit:this.updateData})},handleAdd:function(){var t=this;this.$refs["InfoDialog"].openDialog({infoTitle:"新增",onSubmit:function(e){Object(i["a"])(e).then((function(){t.$message.success("更新成功"),t.getData()}))}})},executeData:function(t){var e=this;t=Object.assign({},t,{sql_text:this.sqlText}),Object(i["c"])(t).then((function(t){e.$message.success("运行成功"),e.jsonResult=JSON.stringify(t,null,2)}))}}},d=f,h=(a("fc3f"),Object(u["a"])(d,r,l,!1,null,"437f2b3c",null));e["default"]=h.exports},fc3f:function(t,e,a){"use strict";a("4558")}}]);