import React, { Component } from 'react'
import { Modal, Button, Input, message } from 'antd';
import { UserOutlined, PicLeftOutlined } from '@ant-design/icons';
import axios from 'axios'
import './style.css'


class Login extends Component{

    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this)
        this.checkLogin = this.checkLogin.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {
            login: false,
            modal: false,
            user: '',
            password: ''
        }
    }

    // 点击登录按钮显示模态框
    showModal() {
        this.setState({
            modal: true
        })
    }

    // 点击模态框的cancel按钮隐藏模态框
    hideModal() {
        this.setState({
            modal: false
        })
    }

    // 把输入的用户名赋值给user这个变量
    changeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    // 把输入的密码赋值给password这个变量
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    // 登录功能，输入用户名和密码之后核查是否正确
    checkLogin() {
        const { user, password } = this.state;
        const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&&password=${password}`
        axios.get(url, {
            withCredentials: true
        })
            .then(res => {
                const login = res.data.data.login;
                if (login) {
                    message.success('登陆成功');
                    this.setState({
                        login: true,
                        modal: false
                    })
                } else {
                    message.error('登陆失败')
                }
            })
    }

    // 退出功能
    logout() {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        })
            .then(res => {
                const data = res.data.data;
                if (data.logout) {
                    this.setState({
                        login: false
                    })
                }
        })
    }

    render() {
        const { login } = this.state;
        return (
            <div className='login'>
                {
                    login ?
                        <Button
                            type="primary"
                            onClick={this.logout}
                        >
                            退出
                        </Button> :
                        <Button
                            type="primary"
                            onClick={this.showModal}
                        >
                            登录
                        </Button>
                }
                <Modal
                    title="登录"
                    visible={this.state.modal}
                    onOk={this.checkLogin}
                    onCancel={this.hideModal}
                >
                    <Input
                        placeholder="请输入用户名"
                        prefix={<UserOutlined />}
                        style={{ marginBottom: "10px" }}
                        value={this.state.user}
                        onChange={this.changeUser}
                    />
                    <Input
                        placeholder="请输入密码"
                        type="password"
                        prefix={<PicLeftOutlined />}
                        value={this.state.password}
                        onChange={this.changePassword}
                    />
                </Modal>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        })
            .then((res) => {
                // 后端返回的登录状态
                const login = res.data.data.login;
                this.setState({
                    login: login
                })
            })
    }

}

export default Login