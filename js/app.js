/**
* 公用JS
**/

/*全角空格为12288，半角空格为32;其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248*/
//半角转换为全角函数
function ToDBC(obj) {
    var res="";
    for(var i=0;i<obj.length;i++) {
        if(obj.charCodeAt(i)==32) {
            res+=String.fromCharCode(12288);
        }
        if(obj.charCodeAt(i)<127) {
            res+=String.fromCharCode(obj.charCodeAt(i)+65248);
        }
    }
    return res;
}
//全角转换为半角函数
function ToCDB(obj) {
    var res="";
    for(var i=0;i<obj.length;i++) {
        if(obj.charCodeAt(i)>65248 && obj.charCodeAt(i)<65375) {
            res+=String.fromCharCode(obj.charCodeAt(i)-65248);
        }
        else {
            res+=String.fromCharCode(obj.charCodeAt(i));
        }
    }
    return res;
}

//是否IP地址
function isIp(ip) {
    return /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/.test(ip);
}
//是否主机地址
function isDomain(domain) {
    return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)?$/.test(domain);
}
//是否手机号码
function isMobile(mobile) {
    return /^1\d{10}$/.test(mobile);
}
//获取URL参数
function getQueryStringArgs(url) {
    if (url && url.indexOf("?") > -1) {
        var arr = url.split("?");
        var qs = arr[1],
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }
    return {};
}