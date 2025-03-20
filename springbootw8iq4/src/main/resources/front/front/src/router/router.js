import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import huocheleixingList from '../pages/huocheleixing/list'
import huocheleixingDetail from '../pages/huocheleixing/detail'
import huocheleixingAdd from '../pages/huocheleixing/add'
import huochexinxiList from '../pages/huochexinxi/list'
import huochexinxiDetail from '../pages/huochexinxi/detail'
import huochexinxiAdd from '../pages/huochexinxi/add'
import chepiaoyudingList from '../pages/chepiaoyuding/list'
import chepiaoyudingDetail from '../pages/chepiaoyuding/detail'
import chepiaoyudingAdd from '../pages/chepiaoyuding/add'
import chepiaotuipiaoList from '../pages/chepiaotuipiao/list'
import chepiaotuipiaoDetail from '../pages/chepiaotuipiao/detail'
import chepiaotuipiaoAdd from '../pages/chepiaotuipiao/add'
import xiachexinxiList from '../pages/xiachexinxi/list'
import xiachexinxiDetail from '../pages/xiachexinxi/detail'
import xiachexinxiAdd from '../pages/xiachexinxi/add'
import bupiaoxinxiList from '../pages/bupiaoxinxi/list'
import bupiaoxinxiDetail from '../pages/bupiaoxinxi/detail'
import bupiaoxinxiAdd from '../pages/bupiaoxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'huocheleixing',
					component: huocheleixingList
				},
				{
					path: 'huocheleixingDetail',
					component: huocheleixingDetail
				},
				{
					path: 'huocheleixingAdd',
					component: huocheleixingAdd
				},
				{
					path: 'huochexinxi',
					component: huochexinxiList
				},
				{
					path: 'huochexinxiDetail',
					component: huochexinxiDetail
				},
				{
					path: 'huochexinxiAdd',
					component: huochexinxiAdd
				},
				{
					path: 'chepiaoyuding',
					component: chepiaoyudingList
				},
				{
					path: 'chepiaoyudingDetail',
					component: chepiaoyudingDetail
				},
				{
					path: 'chepiaoyudingAdd',
					component: chepiaoyudingAdd
				},
				{
					path: 'chepiaotuipiao',
					component: chepiaotuipiaoList
				},
				{
					path: 'chepiaotuipiaoDetail',
					component: chepiaotuipiaoDetail
				},
				{
					path: 'chepiaotuipiaoAdd',
					component: chepiaotuipiaoAdd
				},
				{
					path: 'xiachexinxi',
					component: xiachexinxiList
				},
				{
					path: 'xiachexinxiDetail',
					component: xiachexinxiDetail
				},
				{
					path: 'xiachexinxiAdd',
					component: xiachexinxiAdd
				},
				{
					path: 'bupiaoxinxi',
					component: bupiaoxinxiList
				},
				{
					path: 'bupiaoxinxiDetail',
					component: bupiaoxinxiDetail
				},
				{
					path: 'bupiaoxinxiAdd',
					component: bupiaoxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
