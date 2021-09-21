import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import filters from './reducers/filters'
import pizzas from './reducers/pizzas'
import cart from "./reducers/cart";

const reducers = combineReducers({
    filters,
    pizzas,
    cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

window.store = store

export default store