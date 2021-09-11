import React from 'react';

export default function topicDetail(detail={
    loading: true,
    data: {},
    isError: false, //请求是否正确返回
    errMsg: ""
}, action){
    switch (action.type) {
        case "detail_loading": //action命名最好加一个前缀名
            return { //返回值最好构筑一个新对象
                loading: true,
                data: {},
                isError: false,
                errMsg: ""
            }
        case "detail_loaded":
            return {
                loading: false,
                data: action.data,
                isError: false,
                errMsg: ""
            }
        case "detail_error":
            return  {
                loading: true,
                data: {},
                isError: true,
                errMsg: action.errMsg
            }
        default:
            return detail
    }
}

