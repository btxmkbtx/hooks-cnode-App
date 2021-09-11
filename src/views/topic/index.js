import React, {Fragment, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import {useTopicDetail} from "../../store/action";
import {message, Alert, Button} from "antd";
import Detail from "./detail";
import Replies from "./replies";
/*
主题
 */
function TopicPage(props){

    let {id} = useParams()
    let getTopicDetail = useTopicDetail()
    let history = useHistory()

    let {loading, data, isError, errMsg} = useSelector(state => state.topicDetail)

    useEffect(() => {
        //取得主题详情放入store
        getTopicDetail(id)
    },[id])

    useEffect(() => {
        if (isError) {
            message.error(errMsg)
        }
    },[isError])

    return (
        <div>
            {
                isError?
                    <Alert
                    message="请求出错"
                    description={
                        <Fragment>
                            <p>{errMsg}</p>
                            <Button type="link" onClick={() =>{history.goBack()}}>返回</Button>
                        </Fragment>
                    }
                    type="error"
                    showIcon
                    closable
                    afterClose={()=>{history.goBack()}}
                />:(<Fragment>
                    <Detail loading={loading} data={data}/>
                    <Replies loading={loading} data={data.replies}/>
                    </Fragment>)
            }
        </div>
    );
}

export default TopicPage;
