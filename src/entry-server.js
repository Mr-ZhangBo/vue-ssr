// 服务端入口
// 1.导航到首屏

import { createApp } from './main'

export default context => {

    return Promise((resolve, reject)=>{
        const { app, router } = createApp(context);

        // 首屏
        router.push(context.url)

        // 导航的过程可能是异步的
        router.onReady(()=>{
            resolve(app)
        }, reject)
    })

}