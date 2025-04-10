
// import {combineReducers} from 'redux';
// import hobbiesReducer from './hobby';
// import userReducer from './user';


// const rootReducer = combineReducers({
//     hobby: hobbiesReducer,
//     user: userReducer
// })


// export default rootReducer;
















import {combineReducers} from 'redux';
import reducerHooby from './hobby';
import userReducer from './user';

// ở đây ta sử dụng combineReducers để gộp các reducer lại 
const rootReducer = combineReducers({
    hobby: reducerHooby,
    user:userReducer

});
export default rootReducer;