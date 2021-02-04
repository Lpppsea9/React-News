import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import axios from 'axios';


class PageList extends Component{

    // url改变则props改变，那么componentWillReceiveProps就会有新的值
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id);
        const id = nextProps.match.params.id
        axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <Fragment>
                <List
                    style={{background:"#fff"}}
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            {/* Link包裹 */}
                            <Link to={`/detail/${item.id}`}>{item.title}</Link> 
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    /* 
        componentDidMount是当前list组件被挂载到页面的时候才会被执行一次
        当导航栏切换时，list已经存在，它就不会重新的反复挂载了
    */
    componentDidMount() {
        let url = "http://www.dell-lee.com/react/api/list.json";
        const id = this.props.match.params.id;
        if (id) {
            url = url + '?id=' + id;
        }

        // 不存在id直接请求默认的list.json,第一项
        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
                // 此时循环出来的数据是对象格式的，里面包含id和标题
                // console.log(res.data.data);
            })
    }
}

export default PageList
