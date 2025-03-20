<template>
	<div class="addEdit-block" :style='{"minHeight":"100vh","padding":"30px","backgroundAttachment":"fixed","background":"url(http://codegen.caihongy.cn/20220722/ce24de35df6b4d969295f2d03f97d326.png)","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto"}' style="width: 100%;">
		<el-form
			:style='{"padding":"30px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3020)","margin":"-30px 0 0 0","borderRadius":"0","flexWrap":"wrap","background":"#fff","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
		>
			<template >
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车序号" prop="chexuhao">
					<el-input v-model="ruleForm.chexuhao" placeholder="车序号" clearable  :readonly="ro.chexuhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车序号" prop="chexuhao">
					<el-input v-model="ruleForm.chexuhao" placeholder="车序号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="火车类型" prop="huocheleixing">
					<el-select :disabled="ro.huocheleixing" v-model="ruleForm.huocheleixing" placeholder="请选择火车类型" >
						<el-option
							v-for="(item,index) in huocheleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="火车类型" prop="huocheleixing">
					<el-input v-model="ruleForm.huocheleixing"
						placeholder="火车类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车次号" prop="checihao">
					<el-input v-model="ruleForm.checihao" placeholder="车次号" clearable  :readonly="ro.checihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车次号" prop="checihao">
					<el-input v-model="ruleForm.checihao" placeholder="车次号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车站" prop="chezhan">
					<el-input v-model="ruleForm.chezhan" placeholder="车站" clearable  :readonly="ro.chezhan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车站" prop="chezhan">
					<el-input v-model="ruleForm.chezhan" placeholder="车站" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="起点站" prop="qidianzhan">
					<el-input v-model="ruleForm.qidianzhan" placeholder="起点站" clearable  :readonly="ro.qidianzhan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="起点站" prop="qidianzhan">
					<el-input v-model="ruleForm.qidianzhan" placeholder="起点站" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="终点站" prop="zhongdianzhan">
					<el-input v-model="ruleForm.zhongdianzhan" placeholder="终点站" clearable  :readonly="ro.zhongdianzhan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="终点站" prop="zhongdianzhan">
					<el-input v-model="ruleForm.zhongdianzhan" placeholder="终点站" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="开车时间" prop="kaicheshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.kaicheshijian" 
						type="datetime"
						:readonly="ro.kaicheshijian"
						placeholder="开车时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.kaicheshijian" label="开车时间" prop="kaicheshijian">
					<el-input v-model="ruleForm.kaicheshijian" placeholder="开车时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="到站时间" prop="daozhanshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.daozhanshijian" 
						type="datetime"
						:readonly="ro.daozhanshijian"
						placeholder="到站时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.daozhanshijian" label="到站时间" prop="daozhanshijian">
					<el-input v-model="ruleForm.daozhanshijian" placeholder="到站时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.liechetupian" label="列车图片" prop="liechetupian">
					<file-upload
						tip="点击上传列车图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.liechetupian?ruleForm.liechetupian:''"
						@change="liechetupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.liechetupian" label="列车图片" prop="liechetupian">
					<img v-if="ruleForm.liechetupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.liechetupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.liechetupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车票价格" prop="chepiaojiage">
					<el-input v-model="ruleForm.chepiaojiage" placeholder="车票价格" clearable  :readonly="ro.chepiaojiage"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车票价格" prop="chepiaojiage">
					<el-input v-model="ruleForm.chepiaojiage" placeholder="车票价格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="剩余车票" prop="chepiaoshu">
					<el-input v-model="ruleForm.chepiaoshu" placeholder="剩余车票" clearable  :readonly="ro.chepiaoshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="剩余车票" prop="chepiaoshu">
					<el-input v-model="ruleForm.chepiaoshu" placeholder="剩余车票" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="途径站点" prop="tujingzhandian">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="途径站点"
					  v-model="ruleForm.tujingzhandian" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else-if="ruleForm.tujingzhandian" label="途径站点" prop="tujingzhandian">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}'>{{ruleForm.tujingzhandian}}</span>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="列车路线" prop="liecheluxian">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.liecheluxian" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else-if="ruleForm.liecheluxian" label="列车路线" prop="liecheluxian">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.liecheluxian"></span>
                </el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"0","background":"#CFD5F8","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000","borderRadius":"0","background":"#CFD5F8","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000","borderRadius":"0","background":"#CFD5F8","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				chexuhao : false,
				huocheleixing : false,
				checihao : false,
				chezhan : false,
				qidianzhan : false,
				tujingzhandian : false,
				zhongdianzhan : false,
				kaicheshijian : false,
				daozhanshijian : false,
				liechetupian : false,
				chepiaojiage : false,
				chepiaoshu : false,
				liecheluxian : false,
			},
			
			
			ruleForm: {
				chexuhao: '',
				huocheleixing: '',
				checihao: '',
				chezhan: '',
				qidianzhan: '',
				tujingzhandian: '',
				zhongdianzhan: '',
				kaicheshijian: '',
				daozhanshijian: '',
				liechetupian: '',
				chepiaojiage: '',
				chepiaoshu: '',
				liecheluxian: '',
			},
		
			huocheleixingOptions: [],
			
			rules: {
				chexuhao: [
				],
				huocheleixing: [
				],
				checihao: [
				],
				chezhan: [
				],
				qidianzhan: [
					{ required: true, message: '起点站不能为空', trigger: 'blur' },
				],
				tujingzhandian: [
				],
				zhongdianzhan: [
					{ required: true, message: '终点站不能为空', trigger: 'blur' },
				],
				kaicheshijian: [
					{ required: true, message: '开车时间不能为空', trigger: 'blur' },
				],
				daozhanshijian: [
					{ required: true, message: '到站时间不能为空', trigger: 'blur' },
				],
				liechetupian: [
				],
				chepiaojiage: [
					{ required: true, message: '车票价格不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				chepiaoshu: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				liecheluxian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='chexuhao'){
							this.ruleForm.chexuhao = obj[o];
							this.ro.chexuhao = true;
							continue;
						}
						if(o=='huocheleixing'){
							this.ruleForm.huocheleixing = obj[o];
							this.ro.huocheleixing = true;
							continue;
						}
						if(o=='checihao'){
							this.ruleForm.checihao = obj[o];
							this.ro.checihao = true;
							continue;
						}
						if(o=='chezhan'){
							this.ruleForm.chezhan = obj[o];
							this.ro.chezhan = true;
							continue;
						}
						if(o=='qidianzhan'){
							this.ruleForm.qidianzhan = obj[o];
							this.ro.qidianzhan = true;
							continue;
						}
						if(o=='tujingzhandian'){
							this.ruleForm.tujingzhandian = obj[o];
							this.ro.tujingzhandian = true;
							continue;
						}
						if(o=='zhongdianzhan'){
							this.ruleForm.zhongdianzhan = obj[o];
							this.ro.zhongdianzhan = true;
							continue;
						}
						if(o=='kaicheshijian'){
							this.ruleForm.kaicheshijian = obj[o];
							this.ro.kaicheshijian = true;
							continue;
						}
						if(o=='daozhanshijian'){
							this.ruleForm.daozhanshijian = obj[o];
							this.ro.daozhanshijian = true;
							continue;
						}
						if(o=='liechetupian'){
							this.ruleForm.liechetupian = obj[o];
							this.ro.liechetupian = true;
							continue;
						}
						if(o=='chepiaojiage'){
							this.ruleForm.chepiaojiage = obj[o];
							this.ro.chepiaojiage = true;
							continue;
						}
						if(o=='chepiaoshu'){
							this.ruleForm.chepiaoshu = obj[o];
							this.ro.chepiaoshu = true;
							continue;
						}
						if(o=='liecheluxian'){
							this.ruleForm.liecheluxian = obj[o];
							this.ro.liecheluxian = true;
							continue;
						}
				}
				













			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/huocheleixing/huocheleixing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.huocheleixingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `huochexinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.liecheluxian = this.ruleForm.liecheluxian.replace(reg,'../../../springbootw8iq4/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {




















	if(this.ruleForm.liechetupian!=null) {
		this.ruleForm.liechetupian = this.ruleForm.liechetupian.replace(new RegExp(this.$base.url,"g"),"");
	}







var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "huochexinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `huochexinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.huochexinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `huochexinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.huochexinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.huochexinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    liechetupianUploadChange(fileUrls) {
	    this.ruleForm.liechetupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #000;
	  	  font-weight: 500;
	  	  width: 120px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: left;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
