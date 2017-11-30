//index.js
//获取应用实例
const auth = require('../../utils/filter.js');
import { bindActionCreators } from '../../libs/redux.js';
import { enhancedConnect } from '../../libs/enhancedConnect.js';
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
        // this.getShopInfo();
        this.getDecoInfo();
        this.getMenuList();
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
    getShopInfo: bindActionCreators(getShopInfo, dispatch),
    getDecoInfo: bindActionCreators(getDecoInfo, dispatch),
    getMenuList: bindActionCreators(getMenuList, dispatch),
    getShowCaseInfo: bindActionCreators(getShowCaseInfo, dispatch)
});

const nextPageConfig = enhancedConnect(mapStateToData, mapDispatchToPage)(home);
combine(nextPageConfig, header, productItem);
Page(auth.filter(nextPageConfig));