// pages/detail/detail.js
const auth = require('../../utils/filter.js');
import { bindActionCreators } from '../../libs/redux.js';
import { enhancedConnect } from '../../libs/enhancedConnect.js';
const basicConfig = require('../../utils/config.js');
import { doLogin } from '../../actions/login.js';
const base64 = require('../../libs/base64.js')

const login = {
    data: {
        codeSrc: ''
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
        data.password = base64.encode(data.password);
        this.doLogin(data);
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