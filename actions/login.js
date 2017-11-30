
const fly = require('../utils/fly.js').default;

export const actionTypes = {

};


//登录
export function doLogin(params) {
    return (dispatch, getState) => {
        return fly.post('/login', params || {})
            .then(res => {
                console.log('---res----', res)
                if (res.success) {
                    console.log('---res.data----', res.data)
                }
            })
            .catch(err => {
                console.error(`Request Error: `, err);
            });
    }
}
