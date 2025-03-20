export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"火车类型","menuJump":"列表","tableName":"huocheleixing"}],"menu":"火车类型管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"火车信息","menuJump":"列表","tableName":"huochexinxi"}],"menu":"火车信息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除","审核","车票统计","首页总数","首页统计"],"menu":"车票预订","menuJump":"列表","tableName":"chepiaoyuding"}],"menu":"车票预订管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除","审核"],"menu":"车票退票","menuJump":"列表","tableName":"chepiaotuipiao"}],"menu":"车票退票管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除"],"menu":"下车信息","menuJump":"列表","tableName":"xiachexinxi"}],"menu":"下车信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除","审核"],"menu":"补票信息","menuJump":"列表","tableName":"bupiaoxinxi"}],"menu":"补票信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-form","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","查看评论","预订"],"menu":"火车信息列表","menuJump":"列表","tableName":"huochexinxi"}],"menu":"火车信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除","退票","支付","下车"],"menu":"车票预订","menuJump":"列表","tableName":"chepiaoyuding"}],"menu":"车票预订管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除"],"menu":"车票退票","menuJump":"列表","tableName":"chepiaotuipiao"}],"menu":"车票退票管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除"],"menu":"下车信息","menuJump":"列表","tableName":"xiachexinxi"}],"menu":"下车信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除","新增","支付"],"menu":"补票信息","menuJump":"列表","tableName":"bupiaoxinxi"}],"menu":"补票信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","查看评论","预订"],"menu":"火车信息列表","menuJump":"列表","tableName":"huochexinxi"}],"menu":"火车信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
