const express = require('express')
const Vue = require('vue')
const { createRenderer } = require('vue-server-renderer')

const server = express()
const renderer = createRenderer()

server.get('/', (req, res)=>{
    const app = new Vue({
        data: function () {
            return {
                test: '测试'
            }
        },
        template: `
            <div>{{test}}</div>
        `
    })
    
    renderer.renderToString(app).then(html=>{
        res.send(html)
    }).catch(err=>{
        res.send('server 502')
    })
})

server.listen(80, ()=>{
    console.log('server run')
})