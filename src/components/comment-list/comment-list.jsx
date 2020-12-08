import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentList.css'
import CommentItem from "../comment-iten/comment-item";

export default class CommentList extends Component {

    // 加上static就是给组件类指定一个属性
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render(){

        const {comments} = this.props

        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {/*左边的comment对应的是comment-item里面的comment，右边的comment对应的是map里面的*/}
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key={index} />)
                    }

                </ul>
            </div>
        )
    }
}

/*
CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}
 */