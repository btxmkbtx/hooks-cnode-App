import React from 'react';
import {indexNav, types} from "../../router";
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import qs from "querystring"

/*
首页子导航栏
 */
function IndexNav(){
    let {search} = useLocation()
    let {tab} = qs.parse(search.slice(1))
    let activeIndex = tab===undefined?0:(types.indexOf(tab))

    return (
        <Menu mode="horizontal"
              selectedKeys={['' + activeIndex]}
              className="index_nav"
        >
            {
                indexNav.map((item, index) => {
                    return <Menu.Item key={index}>
                        <Link to={item.to}>{item.txt}</Link>
                    </Menu.Item>
                })
            }
        </Menu>
    );
}

export default IndexNav;
