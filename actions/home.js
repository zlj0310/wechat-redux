const fly = require('../utils/fly.js').default;

export const actionTypes = {
    SHOP_INFO: 'SHOP_INFO',
    DECO_INFO: 'DECO_INFO',
    SHOWCASE_INFO: 'SHOWCASE_INFO'
};

export function setShopInfo(shopInfo) {
    return {
        type: actionTypes.SHOP_INFO,
        shopInfo
    }
}

export function setDecoInfo(decoInfo) {
    return {
        type: actionTypes.DECO_INFO,
        decoInfo
    }
}

export function setShowCaseInfo(showCaseInfo) {
    return {
        type: actionTypes.SHOWCASE_INFO,
        showCaseInfo
    }
}


//获取店铺基本信息
export function getShopInfo() {
    return (dispatch, getState) => {
        return fly.get('/buy/shop/detail', {})
            .then(res => {
                if (res.success) {
                    dispatch(setShopInfo(res.data));
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}

//获取店铺装修信息
export function getDecoInfo() {
    return (dispatch, getState) => {
        return fly.get('/shop/decoinfo.do', {})
            .then(res => {
                if (res.success) {
                    dispatch(setDecoInfo(res.data));
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}

export function getShowCaseInfo() {
    return (dispatch, getState) => {
        return fly.get('/shop/showcase/info.do', {})
            .then((res) => {
                if (res.success) {
                    dispatch(setShowCaseInfo(res.data));
                }
            }).catch((error) => {

            });
    }
}