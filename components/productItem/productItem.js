// components/productItem/productItem.js
module.exports = {
    data: {
       
    },
    bindGoCart: function () {
        let token = wx.getStorageSync('token')
        if (!token) {
            wx.navigateTo({
                url: '../login/login'
            })
        }else {
            wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            })
        }
    }
}
