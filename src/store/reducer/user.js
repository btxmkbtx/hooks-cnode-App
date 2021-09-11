export default function user(user={
    loading: true,
    data: {}
}, action) {
    switch (action.type) {
        case "user_loading": //action命名最好加一个前缀名
            return { //返回值最好构筑一个新对象
                loading: true,
                data: {}
            }
        case "user_loaded":
            return {
                loading: false,
                data: action.data
            }
        default:
            return user
    }
}
