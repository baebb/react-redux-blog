import { FETCH_POSTS, GET_POST } from '../actions/index';

const INIT_STATE = { all: [], post: null };

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_POST:
            return { ...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}