//index.js
//获取应用实例
const auth = require('../../utils/filter.js');
import { bindActionCreators } from '../../libs/redux.js';
import { enhancedConnect } from '../../libs/enhancedConnect.js';   //相当于react-redux 之所以不用react-redux是因为它依赖的太多了，所以网上找了替代的 
import { getShopInfo, getDecoInfo, getShowCaseInfo} from '../../actions/home.js';
import { getMenuList } from '../../actions/header.js';
import productItem from '../../components/productItem/productItem.js'
import header from '../../components/header/header.js'
const combine = require('../../libs/combine.js').default;

const home = {
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
    },
    onLoad: function () {
        this.getDecoInfo();
        this.getShowCaseInfo();
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
   
}

const mapStateToData = ({ home ,header}) => ({
    home,header
});

const mapDispatchToPage = dispatch => ({
    getDecoInfo: bindActionCreators(getDecoInfo, dispatch),
    getShowCaseInfo: bindActionCreators(getShowCaseInfo, dispatch)
});

const nextPageConfig = enhancedConnect(mapStateToData, mapDispatchToPage)(home);
combine(nextPageConfig, header, productItem);
Page(auth.filter(nextPageConfig));