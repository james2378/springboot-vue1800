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
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="预订编号" prop="yudingbianhao">
					<el-input v-model="ruleForm.yudingbianhao" placeholder="预订编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.yudingbianhao" label="预订编号" prop="yudingbianhao">
					<el-input v-model="ruleForm.yudingbianhao" placeholder="预订编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车序号" prop="chexuhao">
					<el-input v-model="ruleForm.chexuhao" placeholder="车序号" clearable  :readonly="ro.chexuhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车序号" prop="chexuhao">
					<el-input v-model="ruleForm.chexuhao" placeholder="车序号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="火车类型" prop="huocheleixing">
					<el-input v-model="ruleForm.huocheleixing" placeholder="火车类型" clearable  :readonly="ro.huocheleixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="火车类型" prop="huocheleixing">
					<el-input v-model="ruleForm.huocheleixing" placeholder="火车类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车次号" prop="checihao">
					<el-input v-model="ruleForm.checihao" placeholder="车次号" clearable  :readonly="ro.checihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车次号" prop="checihao">
					<el-input v-model="ruleForm.checihao" placeholder="车次号" readonly></el-input>
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
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="车票类型" prop="chepiaoleixing">
					<el-select :disabled="ro.chepiaoleixing" v-model="ruleForm.chepiaoleixing" placeholder="请选择车票类型" >
						<el-option
							v-for="(item,index) in chepiaoleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车票类型" prop="chepiaoleixing">
					<el-input v-model="ruleForm.chepiaoleixing"
						placeholder="车票类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="座位类型" prop="zuoweileixing">
					<el-select :disabled="ro.zuoweileixing" v-model="ruleForm.zuoweileixing" placeholder="请选择座位类型" >
						<el-option
							v-for="(item,index) in zuoweileixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="座位类型" prop="zuoweileixing">
					<el-input v-model="ruleForm.zuoweileixing"
						placeholder="座位类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车票价格" prop="chepiaojiage">
					<el-input v-model="ruleForm.chepiaojiage" placeholder="车票价格" clearable  :readonly="ro.chepiaojiage"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车票价格" prop="chepiaojiage">
					<el-input v-model="ruleForm.chepiaojiage" placeholder="车票价格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="车票" prop="chepiaoshu">
					<el-select :disabled="ro.chepiaoshu" v-model="ruleForm.chepiaoshu" placeholder="请选择车票" >
						<el-option
							v-for="(item,index) in chepiaoshuOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="车票" prop="chepiaoshu">
					<el-input v-model="ruleForm.chepiaoshu"
						placeholder="车票" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="预订时间" prop="yudingshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.yudingshijian" 
						type="datetime"
						:readonly="ro.yudingshijian"
						placeholder="预订时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.yudingshijian" label="预订时间" prop="yudingshijian">
					<el-input v-model="ruleForm.yudingshijian" placeholder="预订时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="预订备注" prop="yudingbeizhu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.yudingbeizhu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0"}' v-else-if="ruleForm.yudingbeizhu" label="预订备注" prop="yudingbeizhu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.yudingbeizhu"></span>
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
				yudingbianhao : false,
				chexuhao : false,
				huocheleixing : false,
				checihao : false,
				qidianzhan : false,
				zhongdianzhan : false,
				kaicheshijian : false,
				daozhanshijian : false,
				chepiaoleixing : false,
				zuoweileixing : false,
				chepiaojiage : false,
				chepiaoshu : false,
				yudingshijian : false,
				yudingbeizhu : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				sfsh : false,
				shhf : false,
				ispay : false,
			},
			
			
			ruleForm: {
				yudingbianhao: this.getUUID(),
				chexuhao: '',
				huocheleixing: '',
				checihao: '',
				qidianzhan: '',
				zhongdianzhan: '',
				kaicheshijian: '',
				daozhanshijian: '',
				chepiaoleixing: '',
				zuoweileixing: '',
				chepiaojiage: '',
				chepiaoshu: '',
				yudingshijian: '',
				yudingbeizhu: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				shhf: '',
			},
		
			chepiaoleixingOptions: [],
			zuoweileixingOptions: [],
			chepiaoshuOptions: [],
			
			rules: {
				yudingbianhao: [
				],
				chexuhao: [
				],
				huocheleixing: [
				],
				checihao: [
				],
				qidianzhan: [
					{ required: true, message: '起点站不能为空', trigger: 'blur' },
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
				chepiaoleixing: [
				],
				zuoweileixing: [
				],
				chepiaojiage: [
					{ required: true, message: '车票价格不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				chepiaoshu: [
					{ required: true, message: '车票不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				yudingshijian: [
				],
				yudingbeizhu: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				sfsh: [
				],
				shhf: [
				],
				ispay: [
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
		this.ruleForm.yudingshijian = this.getCurDateTime()
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
						if(o=='yudingbianhao'){
							this.ruleForm.yudingbianhao = obj[o];
							this.ro.yudingbianhao = true;
							continue;
						}
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
						if(o=='qidianzhan'){
							this.ruleForm.qidianzhan = obj[o];
							this.ro.qidianzhan = true;
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
						if(o=='chepiaoleixing'){
							this.ruleForm.chepiaoleixing = obj[o];
							this.ro.chepiaoleixing = true;
							continue;
						}
						if(o=='zuoweileixing'){
							this.ruleForm.zuoweileixing = obj[o];
							this.ro.zuoweileixing = true;
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
						if(o=='yudingshijian'){
							this.ruleForm.yudingshijian = obj[o];
							this.ro.yudingshijian = true;
							continue;
						}
						if(o=='yudingbeizhu'){
							this.ruleForm.yudingbeizhu = obj[o];
							this.ro.yudingbeizhu = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
				}
				











				this.ruleForm.chepiaoshu = 0
				this.ro.chepiaoshu = false;








			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.chepiaoleixingOptions = "单程,往返".split(',')
            this.zuoweileixingOptions = "硬座,软座,硬卧,软卧,软座".split(',')
            this.chepiaoshuOptions = "1".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `chepiaoyuding/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.yudingbeizhu = this.ruleForm.yudingbeizhu.replace(reg,'../../../springbootw8iq4/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {







































var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.chepiaoshu = objcross.chepiaoshu - this.ruleForm.chepiaoshu
	      if(objcross.chepiaoshu<0){
		this.$message.error("车票不足");
		return
	      }
                }

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
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
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
				url: "chepiaoyuding/page", 
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
					   url: `chepiaoyuding/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.chepiaoyudingCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
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
			   url: `chepiaoyuding/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.chepiaoyudingCrossAddOrUpdateFlag = false;
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
      this.parent.chepiaoyudingCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
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
