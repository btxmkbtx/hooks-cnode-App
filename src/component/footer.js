import React from 'react';
import {Layout} from "antd";

/*
主页footer单独写一个组件
 */
function Footer(){
    return (
        <Layout.Footer id="footer">
            <p className="wrap">这里是一个基于React hooks搭建的技术贴吧</p>
        </Layout.Footer>
    );
}

export default Footer;
