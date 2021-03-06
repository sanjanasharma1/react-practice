import {Component} from "react";
import { connect } from "react-redux";
import {deletePost} from "../actions/postActions"

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="del_btn" onClick={this.handleClick}>Delete Post</button>
            </div>
        ) : (
            <div className="Load">Loading post...</div>
        )

        return(
            <div className="post_full">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    let id = ownProps.match.params.post_id
    
    return{
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);