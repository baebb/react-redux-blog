import {combineReducers} from 'redux';
import HomePostReducer from './reducer_homeposts';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    posts: HomePostReducer,
    form: formReducer
});

export default rootReducer;
