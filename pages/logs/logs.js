//logs.js
const util = require('../../utils/global.js');
const auth = require('../../utils/filter.js');

Page(auth.filter({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
}));
