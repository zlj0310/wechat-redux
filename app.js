//app.js
const configureStore = require('./configureStore.js');
const Store = configureStore();

App({
    onLaunch: function () {
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    Store
})

