export default function topics(topics={
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "topics_loading": //action命名最好加一个前缀名
            return { //返回值最好构筑一个新对象
                loading: true,
                data: []
            }
        case "topics_loaded":
            return {
                loading: false,
                data: action.data
            }
        default:
            return topics
    }
}
