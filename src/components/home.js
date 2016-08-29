import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import {fetchPosts} from '../actions/index';


class PostsIndex extends React.Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        New Post
                    </Link>
                </div>
                List of postsasdf
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsIndex);