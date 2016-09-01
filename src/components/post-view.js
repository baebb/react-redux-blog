import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getPost, deletePost} from '../actions/index';

class PostView extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    componentWillMount() {
        this.props.getPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            })
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <Link to="/">Go back</Link>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
}

export default connect(mapStateToProps, {getPost, deletePost})(PostView);