//加载模板文件
import index from '../pages/index'
import issues from '../pages/issues'
import info from '../pages/info'

//路由规则设置
export default [
    // {
    //     path: '/',
    //     redirect: '/index'
    // },
    {
        path: '/',
        component: index
    },
    {
        path: '/issues',
        component: issues
    },
    {
        path: '/issues/:id',
        component: info
    }
]
