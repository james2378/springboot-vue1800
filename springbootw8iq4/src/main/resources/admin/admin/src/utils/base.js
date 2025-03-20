const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootw8iq4/",
            name: "springbootw8iq4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootw8iq4/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的铁路订票管理系统"
        } 
    }
}
export default base
