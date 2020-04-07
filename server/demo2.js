// 1.创建Vue实例
const Vue = require('vue')

const app = new Vue({
    template: '<div>测试</div>'
})

console.log(111)

// 2.获取渲染器函数
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer();

// 3.用渲染器渲染Vue实例
renderer.renderToString(app).then(html=>{
    console.log(html)
}).catch(err=>{
    console.log(err)
})