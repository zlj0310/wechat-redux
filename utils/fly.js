var Fly = require('../libs/fly.js') 
var fly = new Fly(); //创建fly实例
import { getStorageToken } from './global.js';
const basicConfig = require('./config.js')

//添加请求拦截器
fly.interceptors.request.use((config, promise) => {
    //配置请求参数
    config.baseURL = "https://trade.onloon.net/api";
    config.timeout = '8000';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let params = config.body || {};
    params['shopId'] = basicConfig.shopId;
    if (wx.getStorageSync('tokenBefore')) {
        params['token'] = wx.getStorageSync('token') ? wx.getStorageSync('token') : wx.getStorageSync('tokenBefore');
    }
    wx.showLoading({
        title: '加载中'
    })
    return config;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response, promise) => {
        wx.hideLoading();
        //只将请求结果的data字段返回
        let headersBefore = JSON.stringify(response.headers);
        if (headersBefore.indexOf('Set-Storage') > -1) {
            let headers = JSON.parse(headersBefore.replace(/Set-Storage/, "storage"));
            if (headers.storage) {
                let tokenBefore = wx.getStorageSync('tokenBefore')
                if (!tokenBefore) {
                    wx.setStorage({
                        key: "tokenBefore",
                        data: getStorageToken(headers.storage)
                    })
                }
            }
        }
        return response.data
    },
    (err, promise) => {
        //发生网络错误后会走到这里
        wx.hideLoading();
        if (err.status == 401) {
            try {
                wx.removeStorageSync('token')
            } catch (e) {
                console.log('-----removeStorageSync token error---')
            }
        } else if (err.status > 401) {
            console.log('-----404---')
        }
        promise.resolve("error")
    }
)

export default fly