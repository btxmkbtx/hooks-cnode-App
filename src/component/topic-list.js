import React from 'react';
import {List,Col,Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import TopicTag from "./topic-tag"
import FromNow from "./from-now";


function TopicList(props){
    const {loading, data} = props
    return (
        <List
            className="topics_list"
            loading={loading}
            dataSource={data}
            renderItem={(item) => {
                let {author, last_reply_at, good, top, tab, title, id} = item
                let {avatar_url, loginname} = author
                return (
                    <List.Item>
                        <Col xs={24}
                             md={20}
                        >
                            <Link to={`/user/${loginname}`}>
                                <Avatar icon={<UserOutlined/>}
                                        src={avatar_url}
                                        title={loginname}
                                />
                                <TopicTag tab={top?"top":(good?"good":tab)}
                                />
                            </Link>
                            <Link to={`/topics/${id}`} style={{marginLeft:10}}>{title}</Link>
                        </Col>
                        <Col xs={0}
                             md={4}
                             className="from-now"
                        >
                            {<FromNow date={last_reply_at}/>}
                        </Col>
                    </List.Item>
                )}
            }
        />
    );
}

export default TopicList;
