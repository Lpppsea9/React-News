import React, { Component, Fragment } from 'react'
import logo from './logo.png'
import './style.css'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 1,
                icon: "mail",
                title: "VOA慢速英语"
            }, {
                id: 2,
                icon: "mail",
                title: "VOA慢速英语"
            }, {
                id: 3,
                icon: "mail",
                title: "VOA慢速英语"
            }, {
                id: 4,
                icon: "mail",
                title: "VOA慢速英语"
            }, {
                id: 5,
                icon: "mail",
                title: "VOA慢速英语"
            }, {
                id: 6,
                icon: "mail",
                title: "VOA慢速英语"
            }]
        }
    }

    getMenuItems() {
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id} icon={< item.icon />}>
                    {item.title}
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <img className="app-header-logo" src={logo} />
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