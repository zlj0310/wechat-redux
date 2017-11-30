
import { actionTypes } from '../actions/header.js'

const header = (state = {
    menuList: []
}, action) => {
    switch (action.type) {
        case actionTypes.MENU_LIST:
            return Object.assign({}, state, {
                menuList: action.menuList
            });
        default:
            return state
    }
};

export default header;
