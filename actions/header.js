const fly = require('../utils/fly.js').default;

export const actionTypes = {
    MENU_LIST: 'MENU_LIST'
};

export function setMenuList(menuList) {
    return {
        type: actionTypes.MENU_LIST,
        menuList
    }
}

//获取下拉菜单的列表
export function getMenuList() {
    return (dispatch, getState) => {
        return fly.get('/shop/category/list.do', {})
            .then(res => {
                if(res.success){
                    dispatch(setMenuList(res.data));
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}
