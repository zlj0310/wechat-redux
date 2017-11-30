
const { createStore, compose, applyMiddleware} = require('./libs/redux.js');
const devTools = require('./libs/remote-redux-devtools.js').default;
const reducers = require('./reducers/index.js').default;  //redux异步action中间件
import thunk from './libs/redux-thunk.js';

function configureStore(initialState = {}) {
    return createStore(
        reducers, 
        initialState,
        compose(
            applyMiddleware(thunk),
            devTools({
                hostname: 'localhost',
                port: 5678,
                secure: false
            })
        )
    );
}

module.exports = configureStore;
