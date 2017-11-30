// components/productItem/productItem.js
module.exports = {
    bindGoCart: function () {
        let token = wx.getStorageSync('token')
        if (!token) {
            wx.navigateTo({
                url: '../login/login'
            })
        }else {
            wx.showToast({
                title: '成功',
                icon: 'success'
            })
        }
    }
}
