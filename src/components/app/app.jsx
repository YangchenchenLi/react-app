import React, {Component} from 'react'

import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";


export default class App extends Component {
    /*
    constructor(props) {
        super(props);

        this.state={
            comments: [
                {username: 'Tom', content: 'React is good'},
                {username: 'Jack', content:'React is hard'}

            ]
        }
    }
     */

    // 给组件对象指定state属性
    state={
        comments: [
            {username: 'Tom', content: 'React is good'},
            {username: 'Jack', content:'React is hard'}
        ]
    }

    /*
    add comment
     */
    addComment = (comment) => {
        // 得到原来的状态
        const {comments} = this.state
        // 修改状态内容
        comments.unshift(comment)
        // 更新状态
        this.setState({comments})
    }

    /*delete comment
     */
    deleteComment = (index) => {
        const {comments} = this.state
        // splice 可以用来增删改
        comments.splice(index, 1)
        this.setState({comments})
    }

    render(){

        const {comments} = this.state

        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}
