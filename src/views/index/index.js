import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import IndexNav from "./indexNav";
import IndexPagination from "./indexPagination";
import TopicList from "../../component/topic-list";
import { useSelector} from "react-redux";
import {useTopicsList} from "../../store/action";
import qs from "querystring"

/*
首页
 */
function IndexPage(props){
    let {data, loading} = useSelector(state => state.topics)
    let getTopicsData = useTopicsList()//这就是采用高阶函数定义异步hooks的原因，因为hooks内部不可以直接使用hooks
    let {search} = useLocation();
    let {tab="all", page=1} = qs.parse(search.slice(1))
    useEffect(()=>{
        getTopicsData(tab, page)
    },[tab, page])

    return (
        <div className="wrap">
            <IndexNav/>
            <TopicList
                data={data}
                loading={loading}
            />
            {loading?"":<IndexPagination/>}
        </div>
    );
}

export default IndexPage;
