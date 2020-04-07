const express = require('express')
const app = express()

// 获取绝对路径
const resolve = dir => require('path').resolve(__dirname, dir)

// 1.静态目录开放 dist/client
app.use(express.static(resolve('../dist/client'), { index: false }))

// 渲染器导入
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = resolve('../dist/server/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: require('fs').readFileSync(resolve('../public/index.html'), 'utf-8'),
    clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json'))
})

app.get('*', async function (req, res) {
    try {
        const html = await renderer.renderToString({
            url: req.url,
            title: 'ssr test',
        })
        // console.log(html)
        res.send(html)
    }catch(err){
        console.log(err)
        res.send('server 502')
    }
})

app.listen(80)