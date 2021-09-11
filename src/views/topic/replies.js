import React from 'react';
import {Card, Comment, List, Avatar} from "antd";
import FromNow from "../../component/from-now";
import {Link} from "react-router-dom";

export default function Replies(props) {

    let {data=[], loading} = props
    data.reverse()
    return (
        <Card
            title="评论列表"
            loading={loading}
        >
            <List
                dataSource={data}
                renderItem={(itemData)=>{
                    let {author, content, create_at} = itemData
                    return (
                        <List.Item>
                            <Comment
                                author={<Link to={`/user/${author.loginname}`}>author.loginname</Link>}
                                avatar={<Avatar
                                    src={author.avatar_url}
                                    title={author.loginname}
                                />}
                                content={<div
                                    dangerouslySetInnerHTML={{
                                        __html: content
                                    }}
                                ></div>}
                                datetime={<time>发表于: <FromNow date={create_at}/></time>}
                            />
                        </List.Item>
                    )
                }}
                pagination={{pageSize:10}}
            >
            </List>
        </Card>
    );
}
