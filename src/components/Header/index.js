import React, { Component, Fragment } from 'react'
import logo from './logo.png'
import './style.css'
import { Menu } from 'antd';
import { Icon } from '@ant-design/compatible'

import axios from 'axios'
import { Link } from 'react-router-dom';
// import {
//     MailOutlined,
//     AppstoreOutlined,
//     SettingOutlined,
//     InteractionOutlined
// } from '@ant-design/icons';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // 获取导航栏的数据(包含图标和标题)的方法！！自动执行
    getMenuItems() {
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}>
                        <Icon type={item.icon} />
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    // 获取导航栏的数据(包含图标和标题)
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                this.setState({
                    list: res.data.data
                })
            })
    }

    render() {
        return (
            // 点击logo回到根路径
            <Fragment>
                <Link to="/">
                    <img
                        className="app-header-logo"
                        src={logo}
                        alt="logo"
                    />
                </Link>
                <Menu
                    mode="horizontal"
                    className="app-header-menu"
                >
                    { this.getMenuItems() }
                </Menu>
            </Fragment>

        )
    }
}

export default AppHeader