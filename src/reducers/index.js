import {combineReducers} from 'redux';
import HomePostReducer from './reducer_homeposts'


const rootReducer = combineReducers({
    posts: HomePostReducer
});

export default rootReducer;
