import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class NewPost extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    onSubmit(form) {
        this.props.createPost(form)
            .then(() => {
                this.context.router.push('/');
            });
    };

    render() {
        // ...old way
        // const handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        // ...new way
        const { handleSubmit, fields: { title, categories, content } } = this.props;

        return (
           <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
               <h3>Create New Post</h3>
               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" className="form-control" {...title} />
                   <p className="text-muted">
                       {title.touched ? title.error : ''}
                   </p>
               </div>
               <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="categories">Categories</label>
                   <input type="text" id="categories" className="form-control" {...categories} />
                   <p className="text-muted">
                       {categories.touched ? categories.error : ''}
                   </p>
               </div>
               <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                   <label htmlFor="content">Content</label>
                   <textarea rows="3" id="content" className="form-control" {...content} ></textarea>
                   <p className="text-muted">
                       {content.touched ? content.error : ''}
                   </p>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Please enter a category';
    }

    if (!values.content) {
        errors.content = 'Please enter some content';
    }

    return errors;
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
    fields: ['title', 'categories','content'],
    validate
}, null, { createPost })(NewPost);