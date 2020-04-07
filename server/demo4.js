const express = require('express')
const app = express()

// 导入Vue 
const Vue = require('vue')
// 导入vue-router
const Router = require('vue-router')
Vue.use(Router)

// 渲染器导入
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 1.解决交互
// 2.解决同构开发
// 3.解决路由问题
app.get('*', async function (req, res) {

    console.log(req.url)

    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: { template: `<div>index page</div>` }
            },
            {
                path: '/detail',
                component: { template: `<div>detail page</div>` }
            }
        ]
    })
    
    const vm = new Vue({
        data: {
            name: '姓名'
        },
        router,
        template: `
            <div>
                <div @click="editName">{{ name }}</div>
                <router-link to="/">首页</router-link>
                <router-link to="/detail">详情</router-link>
                <router-view></router-view>
            </div>
        `,
        methods: {
            editName() {
                // console.log('我点击了')
                this.name = '我点击了姓名'
            }
        }
    })

    try {
        // 跳转至url对应路由页面
        router.push(req.url)
        const html = await renderer.renderToString(vm)
        res.send(html)
    }catch(err){
        res.  send('server 502')
    }
})

app.listen(80)