//获取匿名token
export const getStorageToken = (str) => {
    let headerStorage = str.split(';');
    let token;
    for (let i = 0; i < headerStorage.length; i++) {
        if (headerStorage[i].indexOf('token') > -1) {
            token = headerStorage[i].split('=')[1]
        }
    }
    return token
};

//时间类型转换
export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
