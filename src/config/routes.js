//加载模板文件
import index from '../pages/index'
import list from '../pages/list'
//路由规则设置
export default [
    {
        path: '/',
        component: index
    },
    {
        path: '/list',
        component: list
    }
]
