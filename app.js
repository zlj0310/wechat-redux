//app.js
// const { createStore, combineReducers, applyMiddleware } = require('./libs/redux.js') //引入redux接口
// import reducers from './reducers/index'  //引入reducer
// const Store = createStore(combineReducers(reducers)) //创建store
const configureStore = require('./configureStore.js');
const Store = configureStore();

App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    Store
})

