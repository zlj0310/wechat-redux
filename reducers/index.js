const { combineReducers } = require('../libs/redux.js') //引入redux接口
import home from './home.js'
import header from './header.js'
import detail from './detail.js'
import login from './login.js'

const Reducers = combineReducers({
    home,
    header,
    detail,
    login
});
export default Reducers
