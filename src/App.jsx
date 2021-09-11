import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {route} from './router'
import {Layout} from "antd";
import Header from "./component/header";
import Footer from "./component/footer";
// import 'antd/dist/antd.css' //因为在config-overrides中设置了style: true，所以这行就不需要手动导入了，如果手动导入会覆盖设置

const { Content } = Layout;

/*
根组件A
 */
function App(){

    return (
        <BrowserRouter>
            <Layout className="page">
                <Header/>
                <Content>
                    <div>
                        <Switch>
                            {route.map((itemData, index) => {
                                return (
                                    <Route key={index}
                                           path={itemData.path}
                                           exact={itemData.exact}
                                           render={(props) => { //函数式组件使用render，类组件使用component
                                               return itemData.render(props)
                                           }}
                                    />
                                )
                            })}
                        </Switch>
                    </div>
                </Content>
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
