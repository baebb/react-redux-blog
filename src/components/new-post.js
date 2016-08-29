import React from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class NewPost extends React.Component {
    render() {
        // ...old way
        // const handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        // ...new way
        const { handleSubmit, fields: { title, categories, content } } = this.props;

        return (
           <form onSubmit={ handleSubmit(this.props.createPost) }>
               <h3>Create New Post</h3>
               <div className="form-group">
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" className="form-control" {...title} />
               </div>
               <div className="form-group">
                   <label htmlFor="categories">Categories</label>
                   <input type="text" id="categories" className="form-control" {...categories} />
               </div>
               <div className="form-group">
                   <label htmlFor="content">Content</label>
                   <textarea rows="3" id="content" className="form-control" {...content} ></textarea>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        )
    }
}

//redux-forms migration bullshit
{/*<div className="form-group">*/}
{/*<label htmlFor="title">Title</label>*/}
{/*<Field component="input" name="title" className="form-control" />*/}
{/*</div>*/}
{/*<div className="form-group">*/}
{/*<label htmlFor="categories">Categories</label>*/}
{/*<Field component="input" name="categories" className="form-control" />*/}
{/*</div>*/}
{/*<div className="form-group">*/}
{/*<label htmlFor="content">Content</label>*/}
{/*<Field component="textarea" rows="3" name="content" className="form-control" />*/}
{/*</div>*/}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxform: 1st is form config, 2nd is mapState, 3rd is mapDispatch

export default reduxForm({
    form: 'CreatePost',
    fields: ['title', 'categories','content']
}, null, { createPost })(NewPost);