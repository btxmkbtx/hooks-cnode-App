import axios from "axios";
import {useDispatch} from "react-redux";

const http = axios.create({
    baseURL: "https://cnodejs.org/api/v1"
})

//采用高阶函数的形式来自定义useDispatch

//获取主题列表数据
function useTopicsList() {
    let dispatch = useDispatch()
    return function (tab="all", page=1, limit=20, mdrender=true) {
        dispatch({
            type: "topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`
        ).then((res) =>{
            dispatch({
                type: "topics_loaded",
                data: res.data.data
            })
        })
    }
}

//获取主题详情
function useTopicDetail() {
    let dispatch = useDispatch()
    return function (id) {
        dispatch({
            type: "detail_loading"
        })
        http.get(`/topic/${id}`
        ).then((res) =>{
            dispatch({
                type: "detail_loaded",
                data: res.data.data
            })
        }).catch((res)=>{
            dispatch({
                type: "detail_error",
                errMsg: res.response.data.error_msg
            })
        })
    }
}

//获取用户详情
function useUserDetail() {
    let dispatch = useDispatch()
    return function (loginname) {
        dispatch({
            type: "user_loading"
        })
        http.get(`/user/${loginname}`
        ).then((res) =>{
            dispatch({
                type: "user_loaded",
                data: res.data.data
            })
        })
    }
}

export {useTopicsList, useTopicDetail, useUserDetail}
