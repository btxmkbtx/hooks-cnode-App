import React from 'react';
import {Pagination} from "antd";
import {Link, useLocation} from "react-router-dom";
import qs from "querystring"

function IndexPagination() {
    let {search} = useLocation()
    let {tab="all", page=1} = qs.parse(search.slice(1))
    return (
        <div className="index_pagination">
            <Pagination
                current={page-0} /*从search中获取的都是字符串，这里要转成数字类型给current用*/
                defaultPageSize={20}
                total={1000}
                itemRender={(page, type) => {
                    switch (type) {
                        case "page":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                        case "prev":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                        case "next":
                            return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                        default:
                            return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>

                    }
                }}
            />
        </div>
    );
}

export default IndexPagination;
