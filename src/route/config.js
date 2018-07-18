import {AsyncCom,Loading} from './AsyncCom';
let config=[
    {
        path:'/box',
        component:AsyncCom(()=>import('../components/box/Box'),Loading),
        children:[
            {
                path:'/home',//首页
                component:AsyncCom(()=>import('../components/box/coms/Home'),Loading),
                title:'首页'
            },
            {
                path:'/detail',//详情
                component:AsyncCom(()=>import('../components/box/coms/Detail'),Loading),
                title:'详情'
            },
            {
                path:'/submit',//提交
                component:AsyncCom(()=>import('../components/box/coms/Submit'),Loading),
                title:'提交'
            },
            {
                path:'/computed',//结算
                component:AsyncCom(()=>import('../components/box/coms/Computed'),Loading),
                title:'结算'
            }
        ]
    },
    {
        path:'/manger',//用户管理
        component:AsyncCom(()=>import('../components/manger/Manger'),Loading)
    }
]
export default config;