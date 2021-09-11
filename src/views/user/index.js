import React, {useEffect} from 'react';
import {Card, Avatar} from "antd";
import {useParams} from "react-router-dom";
import {useUserDetail} from "../../store/action";
import {useSelector} from "react-redux";
import TopicList from "../../component/topic-list";
import FromNow from "../../component/from-now";

/*
用户
 */
function UserPage(){
    let {loginname} = useParams()
    let getUserDetail = useUserDetail()
    let {data, loading} = useSelector(state => state.user)
    let {recent_topics=[], recent_replies=[], avatar_url, create_at, githubUsername, score} = data

    useEffect(()=>{
        //取得用户详情放入store
        getUserDetail(loginname)
    }, [loginname])

    return (
        <div className="user_page">
            <Card
                loading={loading}
                className="user-details"
            >
                <Avatar
                    size={80}
                    src={avatar_url}
                />
                <p style={{marginTop:20}}>用户名: {loginname}  注册时间: {<FromNow date={create_at}/>}  积分: {score}</p>
                <p>
                    github: <a href={`https//github.com/${githubUsername}`} target="_blank">https//github.com/{githubUsername}</a>
                </p>
            </Card>

            <Card
                loading={loading}
                title={"最近创建的话题"}
            >
                <TopicList loading={loading} data={recent_topics}/>
            </Card>

            <Card
                loading={loading}
                title={"最近参与的话题"}
            >
                <TopicList loading={loading} data={recent_replies}/>
            </Card>
        </div>
    );
}

export default UserPage;
