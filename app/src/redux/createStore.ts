declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createRootReducer } from './reducers/rootReducer';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState: any = {}, historyObject: any) => {

    return createStore(
        createRootReducer(historyObject),
        composeEnhancers(
            applyMiddleware(
                thunk
            )
        )
    );
};
