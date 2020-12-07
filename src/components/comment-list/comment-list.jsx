import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from "../comment-item /comment-item";
import './commentList.css'

export default class CommentList extends Component {

    //  给组件类指定属性
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
                    {
                        // 左边的comment和comment-item里面的static对应，右边的comment和map后面的comment的对应
                        comments.map((comment, index) => <CommentItem comment={comment} key={index}/>)
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