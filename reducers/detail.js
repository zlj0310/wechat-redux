
import { actionTypes } from '../actions/detail.js'

const detail = (state = {
    productDetail: {},
    hotProducts: {}
}, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_DETAIL:
            return Object.assign({}, state, {
                productDetail: action.productDetail
            });
        case actionTypes.HOT_PRODUCTS:
            return Object.assign({}, state, {
                hotProducts: action.hotProducts
            });
        default:
            return state
    }
};

export default detail;
