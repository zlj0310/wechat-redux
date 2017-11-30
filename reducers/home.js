
import { actionTypes } from '../actions/home.js'

const home = (state = {
    shopInfo: {},
    decoInfo: {},
    showCaseInfo: []
}, action) => {
    switch (action.type) {
        case actionTypes.SHOP_INFO:
            return Object.assign({}, state, {
                shopInfo: action.shopInfo
            });
        case actionTypes.DECO_INFO:
            return Object.assign({}, state, {
                decoInfo: action.decoInfo
            });
        case actionTypes.SHOWCASE_INFO:
            return Object.assign({}, state, {
                showCaseInfo: action.showCaseInfo
            });
        default:
            return state
    }
};

export default home;
