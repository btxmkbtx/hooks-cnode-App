import {combineReducers, createStore} from 'redux'
import topics from "./reducer/topics";
import topicDetail from "./reducer/topic-detail"
import user from "./reducer/user"

export default createStore(combineReducers({
    topics,
    topicDetail,
    user
}))
