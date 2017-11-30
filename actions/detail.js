const fly = require('../utils/fly.js').default;

export const actionTypes = {
    PRODUCT_DETAIL: 'PRODUCT_DETAIL',
    HOT_PRODUCTS: 'HOT_PRODUCTS'
};

export function setProductDetail(productDetail) {
    return {
        type: actionTypes.PRODUCT_DETAIL,
        productDetail
    }
}
export function setHotProducts(hotProducts) {
    return {
        type: actionTypes.HOT_PRODUCTS,
        hotProducts
    }
}

//获取商品详情
export function getProductDetail(params) {
    return (dispatch, getState) => {
        return fly.get('/shop/item/detail.do', params || {})
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}


//获取热门商品列表
export function getHotProducts(params) {
    return (dispatch, getState) => {
        return fly.get('/shop/item/hot.do', params || {})
            .then(res => {
                if (res.success) {
                    dispatch(setHotProducts(res.data));
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}