// pages/detail/detail.js
const auth = require('../../utils/filter.js');
const combine = require('../../libs/combine.js').default;
import { bindActionCreators } from '../../libs/redux.js';
import { enhancedConnect } from '../../libs/enhancedConnect.js';
import { getProductDetail, getHotProducts, setProductDetail} from '../../actions/detail.js';
import header from '../../components/header/header.js';
import productItem from '../../components/productItem/productItem.js';
const WxParse = require('../../libs/wxParse/wxParse.js');

const detail = {
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000
    },
    tap() {
        console.log('tap')
    },
    onLoad: function (options) {
        this.setData({
            itemId: options.itemId
        })
        this.getHotProducts({ start: 0, size: 4 })
        this.getProductDetail({ itemId: this.data.itemId})
            .then(res => {
                if (res.success) {
                    this.store.dispatch(setProductDetail(res.data));
                    let article = res.data.content;
                    let that = this;
                    WxParse.wxParse('article', 'html', article, that, 5);
                }
            });
    },
}

const mapStateToData = ({ detail }) => ({
    detail
});

const mapDispatchToPage = dispatch => ({
    getProductDetail: bindActionCreators(getProductDetail, dispatch),
    getHotProducts: bindActionCreators(getHotProducts, dispatch),
    setProductDetail: bindActionCreators(setProductDetail, dispatch)
});

const nextPageConfig = enhancedConnect(mapStateToData, mapDispatchToPage)(detail);
combine(nextPageConfig, header, productItem);
Page(auth.filter(nextPageConfig));