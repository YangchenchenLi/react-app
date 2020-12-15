import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Main extends Component {

    static propTypes = {
        searchName:PropTypes.string.isRequired
    }

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount() {
        // subscribe消息，订阅search的消息
        // callback func 里面的this，不是组件对象里面的this，需要用到band，但是一般我们会使用箭头函数
        PubSub.subscribe('search', (msg, searchName) => {//指定了新的searchName，需要请求
            this.setState({
                initView: false,
                loading: true
            })
            // 发ajax请求
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then(response => {
                    // 得到响应数据
                    const result = response.data
                    console.log(result)
                    const users = result.items.map(item => {
                        return {name: item.login, url:item.html_url, avatarUrl:item.avatar_url}
                    })
                    // 更新状态（成功）
                    this.setState({loading:false, users})

                })
                .catch(error => {
                    // 更新状态（失败）
                    this.setState({loading:false, errorMsg:error.message})
                })

        })

    }

    /*
    // 当组件接收到新的属性时，回调
    componentWillReceiveProps(newProps) { //指定了新的searchName，需要请求
        const {searchName} = newProps
        // 更新状态 (请求中）
        this.setState({
            initView: false,
            loading: true
        })
        // 发ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                // 得到响应数据
                const result = response.data
                console.log(result)
                const users = result.items.map(item => {
                    return {name: item.login, url:item.html_url, avatarUrl:item.avatar_url}
                })
                // 更新状态（成功）
                this.setState({loading:false, users})

            })
            .catch(error => {
                // 更新状态（失败）
                this.setState({loading:false, errorMsg:error.message})
            })
    }
     */


    render(){
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        console.log('render()', searchName)

        if (initView) {
            return <h2>Please enter keyword to search: {searchName}</h2>
        }else if (loading) {
            return <h2>Loading ...</h2>
        }else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        }else {
            return(
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }

                </div>
            )

        }

    }
}