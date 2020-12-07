import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";


export default class App extends Component {

    /*
    constructor(props) {
        super(props);

        this.state = {
            comments:[
                {username:'Tom', content:'React is good'},
                {username:'Jack', content:'React is hard'}
            ]
        }
    }
    */

    // 给组件对象指定state属性
    state = {
        comments:[
            {username:'Tom', content:'React is good'},
            {username:'Jack', content:'React is hard'}
        ]
    }

    render(){
        const {comments} = this.state

        return(
            <div id="app">
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
                        <CommentAdd />
                        <CommentList comments={comments} />
                    </div>
                </div>
            </div>
        )
    }
}