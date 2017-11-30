
const fly = require('../utils/fly.js').default;

//登录
export function doLogin(params) {
    return (dispatch, getState) => {
        return fly.post('/login', params || {})
            .then(res => {
                if (res.success) {
                    wx.setStorage({
                        key: "token",
                        data: res.data
                    });
                    wx.navigateBack({
                        delta: 1
                    })
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}
