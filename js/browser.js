/***
* 浏览器版本检测
***/
var browser=new Object();
browser.majorName=navigator.appName;
browser.userAgent=navigator.userAgent.toLowerCase();
browser.appVersion=navigator.appVersion;
var reg_ie=/msie\s([\d.]+)/; //IE5-IE10
var reg_ie1=/trident.*rv:([\d.]+)/; //IE11
var reg_ie2=/(msie\s|trident.*rv:)([\d.]+)/; //合并检测IE浏览器
var reg_ff=/(firefox)\/([\d.]+)/; //Firefox
var reg_ch=/(chrome)\/([\d.]+)/; //Chrome
var reg_sf=/(safari)\/([\d.]+)/; //Safari
var reg_edge=/(edge)\/([\d.]+)/; //Edge

