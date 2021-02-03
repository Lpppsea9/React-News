import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header/index'
import 'antd/dist/antd.css'
import './style.css'

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ minWidth: 1300 }}>
                <Header className="header">
                    <AppHeader />
                </Header>
                <Content className="content">Content</Content>
                <Footer className="footer">Footer</Footer>
            </Layout>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))
