import React from 'react';
import {Affix, Layout, Row, Col, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {nav} from "../router";
/*
主页header单独写一个组件
 */
function Header(){

    //取得当前路由
    let {pathname} = useLocation();
    //锁定defaultSelectedKey, 用的时候不要忘了转字符串类型
    let activeIndex = nav.findIndex((navData) => {
        return pathname===navData.to
    })

    return (//Affix把头部固定在左上角
        <Affix offsetTop={0} id="header">
            <Layout.Header>
                <div className="wrap">
                    <Row>
                        <Col xs={6}
                             sm={4}
                             md={2}
                        >
                            <h1 className="logo"><Link to="/">Logo</Link></h1>
                        </Col>
                        <Col xs={18}
                             sm={20}
                             md={22}
                        >
                            <Menu mode="horizontal" theme="dark"
                                  selectedKeys={['' + activeIndex]}
                            >
                                {nav.map((navData, index) => {
                                    return <Menu.Item key={index}>
                                        <Link to={navData.to}>{navData.txt}</Link>
                                    </Menu.Item>
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    );
}

export default Header;
