const express = require('express')

// 获取express实例
const server = express();


// const Vue = require('vue')

// 编写路由处理URL请求
server.get('/', (req, res)=>{
    console.log('req', req)
    console.log('res', res)
    // res.send('<div>访问了</div>')
    res.json({name:'zhangbo'})
})

// 监听端口
server.listen(80, ()=>{
    console.log('server run')
})