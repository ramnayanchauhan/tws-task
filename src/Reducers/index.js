
import postData from "../Reducers/postsData";
import newpost from '../Reducers/newPost';
import { combineReducers } from "redux";

const reducers = combineReducers({
    postData, newpost
});

export default reducers;