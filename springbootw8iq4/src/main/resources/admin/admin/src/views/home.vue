<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"20px auto 50px","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"4px","display":"flex"}' v-if="isAuth('chepiaoyuding','首页总数')">
				<div :style='{"width":"80px","background":"#CFD5F8","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{chepiaoyudingCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>车票预订总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 100%;margin: 0 10px;" v-if="isAuth('chepiaoyuding','首页统计')">
                <div id="chepiaoyudingChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//1
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            chepiaoyudingCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getchepiaoyudingCount();
    this.chepiaoyudingChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getchepiaoyudingCount() {
        this.$http({
            url: `chepiaoyuding/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.chepiaoyudingCount = data.data
            }
        })
    },

    chepiaoyudingChat1() {
      this.$nextTick(()=>{
        // checihao checihao
        //  chepiaoshu

        var chepiaoyudingChart1 = echarts.init(document.getElementById("chepiaoyudingChart1"),'macarons');
        this.$http({
            url: `chepiaoyuding/value/checihao/chepiaoshu`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].checihao);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].checihao
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '车票统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                chepiaoyudingChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chepiaoyudingChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
