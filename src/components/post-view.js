import React from 'react';
import { connect } from 'react-redux';

import { getPost } from '../actions/index';

class PostView extends React.Component {
    componentWillMount() {
        this.props.getPost(this.props.params.id);
    }

    render() {
        return (
            <div>This is {this.props.params.id}</div>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post }
}

export default connect(mapStateToProps, { getPost })(PostView);