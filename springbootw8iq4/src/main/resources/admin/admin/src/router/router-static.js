import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import chepiaotuipiao from '@/views/modules/chepiaotuipiao/list'
    import aboutus from '@/views/modules/aboutus/list'
    import systemintro from '@/views/modules/systemintro/list'
    import huocheleixing from '@/views/modules/huocheleixing/list'
    import chepiaoyuding from '@/views/modules/chepiaoyuding/list'
    import yonghu from '@/views/modules/yonghu/list'
    import discusshuochexinxi from '@/views/modules/discusshuochexinxi/list'
    import huochexinxi from '@/views/modules/huochexinxi/list'
    import xiachexinxi from '@/views/modules/xiachexinxi/list'
    import config from '@/views/modules/config/list'
    import bupiaoxinxi from '@/views/modules/bupiaoxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/chepiaotuipiao',
        name: '车票退票',
        component: chepiaotuipiao
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/huocheleixing',
        name: '火车类型',
        component: huocheleixing
      }
      ,{
	path: '/chepiaoyuding',
        name: '车票预订',
        component: chepiaoyuding
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/discusshuochexinxi',
        name: '火车信息评论',
        component: discusshuochexinxi
      }
      ,{
	path: '/huochexinxi',
        name: '火车信息',
        component: huochexinxi
      }
      ,{
	path: '/xiachexinxi',
        name: '下车信息',
        component: xiachexinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/bupiaoxinxi',
        name: '补票信息',
        component: bupiaoxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
