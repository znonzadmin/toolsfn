/**
 *
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

///---------------/////////////////////////////////////////////////////////////////////
/*cookie*/
/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}
/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

///---------------/////////////////////////////////////////////////////////////////////
/**
 *
 * @desc 获取浏览器类型和版本
 * @return {String}
 */
function getExplore() {

    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]: (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) {
        return ('IE: ' + sys.ie)
    }
    if (sys.edge) {
        return ('EDGE: ' + sys.edge)
    }
    if (sys.firefox) {
        return ('Firefox: ' + sys.firefox)
    }
    if (sys.chrome) {
        return ('Chrome: ' + sys.chrome)
    }
    if (sys.opera) {
        return ('Opera: ' + sys.opera)
    }
    if (sys.safari) {
        return ('Safari: ' + sys.safari)
    }
    return 'Unkonwn'
}


//---------------------------//////////////////////////////////////////////////////
/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion)) {
        return 'MacOSX'
    }
    if (/win/i.test(appVersion)) {
        return 'windows'
    }
    if (/linux/i.test(appVersion)) {
        return 'linux'
    }
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) {
        return 'ios'
    }
    if (/android/i.test(userAgent)) {
        return 'android'
    }
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) { return 'windowsPhone' }

}


{
    const WXWITHDWRAWALMAX = 20000.00; //微信允许最大值
    const BANKWITHDWRAWALMAX = 50000.00; //银行卡允许最大值
    const CASHADVANCEMAX = 8000.00 //信用卡支付额度最大值
        /**name:getWithdrawConfirm()
         * input：text:oninput事件输入监听货币函数
         * o:this,
         * i:隐藏域的值
         * tips:错误提示
         * type:哪种类型的最大限制
         */
    function getWithdrawConfirm(o, i, tips, type) {
        var wx_withdraw_tips = $("." + tips);
        wx_withdraw_tips.hide();
        var typeNum = 0;
        var v = $.trim(o.value);
        if (type === 'wx') {
            typeNum = WXWITHDWRAWALMAX;
        } else if (type === 'bankcard') {
            typeNum = BANKWITHDWRAWALMAX;
        } else if (type === 'cashadvance') {
            typeNum = CASHADVANCEMAX;
        }
        if (isNaN(v) || v === "") {
            return $("#" + i).val("");
        } else {
            //如果输入金额大于20000则取出20000.00
            if (parseFloat(v) > typeNum) {
                wx_withdraw_tips.show();
                return $("#" + i).val("");
            }
            //如果是整数
            if (Math.floor(v) === v) {
                console.log("符合规则的整数");
                return $("#" + i).val(v);
            } else {
                //如果是小数
                if (v.length > 3) {
                    if (v.charAt(v.length - 4) === '.') {
                        //v.substring(0, v.length - 1)
                        return $("#" + i).val(v.substring(0, v.length - 1));
                    } else {
                        console.log("符合规则");
                    }
                } else if (v.length === 3) {
                    console.log("输入的是三位长度");
                } else if (v.length === 2) {
                    console.log("两位长度");
                    if (v.charAt(0) === '0' && v.charAt(v.length - 1) === '0') {
                        //v.substring(0, v.length - 1)
                        return $("#" + i).val(v.substring(0, v.length - 1));
                    }
                }
            }

        }
    }
}