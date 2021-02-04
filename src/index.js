import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import AppHeader from './components/Header/index'
import Login from './components/Login/index'

import List from './containers/List/index'
import Detail from './containers/Detail/index'
import Vip from './containers/Vip/index'
import 'antd/dist/antd.css'
import './style.css'

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1300, height: '100%' }}>
                    <Header className="header">
                        <AppHeader />
                    </Header>
                    <Content className="content">
                        <Login />
                        <Switch>
                            <Route path="/vip" component={Vip} />
                            <Route path="/detail/:id" component={Detail} />
                            {/* ?表示可不填 */}
                            <Route path="/:id?" component={List} />
                        </Switch>
                    </Content>
                    <Footer className="footer">@copyright Lpppsea9</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))
