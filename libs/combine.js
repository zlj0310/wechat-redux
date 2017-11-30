/** 
* 组件对象与页面对象融合
* @param {Object} target 页面对象
* @param {Object} source 组件对象，支持不定参数
* return {Object} 返回一个融合后的页面对象
*/
let combine = (target, ...source) => {
    source.forEach(function (arg) {
        if ('object' === typeof arg) {
            for (let p in arg) {
                if ('object' === typeof arg[p]) {
                    // 对于对象，直接采用 Object.assign
                    target[p] = target[p] || {}
                    Object.assign(target[p], arg[p])
                } else if ('function' === typeof arg[p]) {
                    // 函数进行融合，先调用组件事件，然后调用父页面事件
                    let fun = target[p] ? target[p] : function () { }
                    delete target[p]
                    target[p] = function () {
                        arg[p].apply(this, arguments)
                        fun.apply(this, arguments)
                    }
                } else {
                    // 基础数据类型，直接覆盖
                    target[p] = target[p] || arg[p]
                }
            }
        }
    })
}
export default combine