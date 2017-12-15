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

/**name:getWithdrawConfirm()
 * input：text:oninput事件输入监听货币函数
 * o:this,
 * i:隐藏域的值
 * tips:错误提示
 * type:哪种类型的最大限制
 */
{
    const WXWITHDWRAWALMAX = 20000.00; //微信允许最大值
    const BANKWITHDWRAWALMAX = 50000.00; //银行卡允许最大值
    const CASHADVANCEMAX = 8000.00 //信用卡支付额度最大值

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


//
/**
 * js控制将字符串逗号分隔转化为数组
 */
function stringToArray(){//es5
    return [].splice.call(arguments);
}
function stringToArray(){//es6
    return [...arguments];
}
function stringToArray(arg){
    return arg.split(',');
    return arg.split('&');
    return arg.split(';');
}

//将数组转成字符串
function arrayToString(array){
    return array.join(",");
}

//电话号码验证
 function checkTel(id) {
      var obj = document.getElementById(id);
      var value = obj.value;
      var regTel1 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value);//带区号的固定电话
      var regTel2 = /^(\d{7,8})(-(\d{3,}))?$/.test(value);//不带区号的固定电话
      var regTel3 = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|}(17[0-9]{1})(18[0-9]{1}))+\d{8})$/.test(value);//手机电话
      if(value != ""){
        if (!regTel1 && !regTel2 && !regTel3) {
          alert("电话号码输入有误！");
          obj.focus();
          return false;
        }
      }else {
        alert("请输入电话号码！");
        return false;
      }
      alert("电话号码输入正确！");
      return true;
    }
//验证邮箱
function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
}
//验证身份证号码
function isCP(str){
    //身份证号（18位）正则
    var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return cP.test(str);
}

//验证中文
function isZH(str){
    var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
    return rel.test(str);
}

// 验证url
function isURL(str){
//URL正则
var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlP.test(str)
}

//密码强度验证
function isPassword(str){
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    if(str.lengt<6){
        return '密码长度小于6位'
    }
    var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    return pPattern.test(str);
}
//pv4验证
function ipV4(str){
    //ipv4地址正则
var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//输出 true
   return  ip.test(str);
}

//16进制颜色
function (str){
    var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    //输出 true
    return cPattern.test(str);
}


//小数点取出两位
function numToFixedTwo(num){//toFixed();
    if(isNaN(num)){
        num = 0;
    }
    if(typeof(num) === "string"){
        num = parseFloat(num);
    }
      let mg = num,
          n = mg.toString();
      if(n.indexOf(".") > 0){
          g = n.split("."),
          p = g[0],
          k = g[1].substring(0,2),
          val = p+"."+k;
          n = parseFloat(val);
      }else{
        n = Number(n);
      }
      console.log(n);
      return n;
  }
  numToFixedTwo("-10000.9a");


//手机端返回=====================
{
    window.onload = function(){
            pushHistory();
            var bool=false;
            setTimeout(function(){
                bool=true;
            },1500);
            window.addEventListener("popstate", function(e) {
              if(bool){
                    //alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
                    //window.history.go(-1);
                    //window.history.back();
                    window.history.go(-1);
                }
                pushHistory();

        }, false);

        function pushHistory() {
               var state = {
                   title: "title",
                   url: window.location.href
               };
           window.history.pushState(state, "title", "#");
       }
    }

}
//手机端返回=====================