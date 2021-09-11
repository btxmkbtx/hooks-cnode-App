import React from 'react'
import IndexPage from "../views/index";
import TopicPage from "../views/topic";
import UserPage from "../views/user";
import GetStartPage from "../views/getstart";
import AboutPage from "../views/about";
import Page404 from "../views/page404";
import qs from "querystring"

//首页数据分类，顺序要和indexNav统一
const types = ["all", "good", "share", "ask", "job", "dev"]

// 路由配置数据
// 这种路由配置的好处就是，在增加新的路由时不需要修改组件，只需要修改这的路由数据
const route = [
    {
        path: "/", //根目录
        exact: true, //开启精确匹配 参照：[谷粒商城]的Product视图
        render(props){ //试图组件, 会用到编程式路由，所以传入路由参数props
            const {location} = props
            const {search} = location
            const {tab,page} = qs.parse(search.slice(1))

            if((tab===undefined&&page===undefined)
                || (types.includes(tab)&&(page===undefined||page>0))) {
                return <IndexPage {...props}/>
            }

            return <Page404 {...props}/>
        }
    },
    {
        path: "/topics/:id", //主题详情, 动态路由传参方式 参照：[20_编程式路由和withTouter]的Detail1
        exact: true,
        render(props){
            return <TopicPage {...props}/>
        }
    },
    {
        path: "/user/:loginname", //用户详情
        exact: true,
        render(props){
            return <UserPage {...props}/>
        }
    },
    {
        path: "/getstart", //新手入门
        exact: false,
        render(props){
            return <GetStartPage {...props}/>
        }
    },
    {
        path: "/about", //关于我们
        exact: false,
        render(props){
            return <AboutPage {...props}/>
        }
    },
    {
        path: "", //page404 不需要path
        exact: false,
        render(props){
            return <Page404 {...props}/>
        }
    }
]

//建立导航菜单数据表
const nav = [{
    to: "/",
    txt:"首页"
},{
    to: "/getstart",
    txt:"新手入门"
},{
    to: "/about",
    txt:"关于我们"
}]

//建立首页子导航栏数据表 采用了search传值
const indexNav = [{
    txt: "全部",
    to:"/?tab=all"
},{
    txt: "精华",
    to:"/?tab=good"
},{
    txt: "分享",
    to:"/?tab=share"
},{
    txt: "问答",
    to:"/?tab=ask"
},{
    txt: "招聘",
    to:"/?tab=job"
},{
    txt: "客户测试端",
    to:"/?tab=dev"
}]

export {route, nav, indexNav, types} //采用{}分别导出方式

