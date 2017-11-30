// pages/detail/detail.js
const auth = require('../../utils/filter.js');
import { bindActionCreators } from '../../libs/redux.js';
import { enhancedConnect } from '../../libs/enhancedConnect.js';
const basicConfig = require('../../utils/config.js');
import { doLogin } from '../../actions/login.js';

const login = {
    data: {
        codeSrc: '',
        
    },
    onLoad: function () {
        this.getCode();
       
    },
    getCode : function(){
        let token = (wx.getStorageSync('token') ? wx.getStorageSync('token') : wx.getStorageSync('tokenBefore')) || '';
        if(token){
            this.setData({
                codeSrc: basicConfig.baseURL + '/getCaptcha?r='+Math.random()+ '&token='+token
            })
        }
    },
    formSubmit: function (e) {
        let data = e.detail.value;
        data['remember']= false;
        data['token'] = wx.getStorageSync('tokenBefore');
        data.password = 'YTEyMzQ1Ng==';
        
        //this.doLogin(data)
        wx.request({
            url: "https://trade.onloon.net/api/login",
            data: data,
            method: 'POST',
            header: {
                "Content-Type":"application/x-www-form-urlencoded"
            },
            success: function (res) {
                if (res.data.success){
                    wx.setStorage({
                        key: "token",
                        data: res.data.data
                    });
                    wx.navigateBack({
                        delta: 1
                    })
                }
            },
            fail: function (err) {
                console.log(err)
            }
        })
    }
}

const mapStateToData = ({ login }) => ({
    login
});

const mapDispatchToPage = dispatch => ({
    doLogin: bindActionCreators(doLogin, dispatch)
});

const nextPageConfig = enhancedConnect(mapStateToData, mapDispatchToPage)(login);
Page(auth.filter(nextPageConfig));