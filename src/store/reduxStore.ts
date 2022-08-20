import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialoguesReducer} from "./reducers/dialoguesReducer";
import {usersReducer} from "./reducers/usersReducer";
import {userDetailReducer} from "./reducers/userDetailReducer";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./reducers/navbarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    userDetail: userDetailReducer,
    auth: authReducer
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let Store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

export default Store;