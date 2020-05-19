// id选择器
function $(params) {
    return document.getElementById(params);
}
// 类选择器
function elementsByClassName(node, classStr) {
    var nodes = node.getElementsByTagName("*");
    var arr = [];
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].className === classStr && arr.push(nodes[i]);
    }
    return arr;
}
// 展示当前时间
function showTime(req, format) {        // req选择展示内容 1.时间 2.日期 (默认为日期时间);format自定义分隔符 (默认为汉字)
    var time,
        d = new Date(),
        year = d.getFullYear(),
        month = doubleNum(d.getMonth()),
        date = doubleNum(d.getDate()),
        hour = doubleNum(d.getHours()),
        min = doubleNum(d.getMinutes()),
        sec = doubleNum(d.getSeconds());
    function doubleNum(n) {
        n<10&&(n = "0" + n);
        return n;
    }
    if(!req) {
        if (format != "") {
            time = year + format + month + format + date + " " + hour + format + min + format + sec;
        } else {
            time = year + "年" + month + "月" + date + "日" + " " + hour + "时"+ min + "分" + sec+ "秒";
        }
    }else if(req == 1) {
        if (format) {
            time = hour + format + min + format + sec;
        } else {
            time = hour + "时"+ min + "分" + sec+ "秒";
        }
    } else if(req == 2) {
        if (format != "") {
            time = year + format + month + format + date;
        } else {
            time = year + "年" + month + "月" + date + "日";
        }
    }
    return time;
}
// 计算时间差
function caculateTime(date) {
    let d1 = new Date(),
        d2 = new Date(date),
        dd1 = d1.getTime(), //获取毫秒数
        dd2 = d2.getTime(),
        ms = Math.abs(dd1 - dd2),
        sec = parseInt(ms/1000),
        min = parseInt(sec/60),
        hour = parseInt(min/60),
        day = parseInt(hour/24),
        time = [];
    time.push(ms + "毫秒");
    time.push(sec.toString() + "秒 " + ms%1000..toString() + "毫秒");
    time.push(min.toString() + "分钟 " + sec%60..toString() + "秒 " + ms%1000..toString() + "毫秒");
    time.push(hour.toString() + "小时 " + min%60..toString() + "分钟 " + sec%60..toString() + "秒 " + ms%1000..toString() + "毫秒");
    time.push(day.toString() + "天 " + hour%24..toString() + "小时 " + min%60..toString() + "分钟 " + sec%60..toString() + "秒 " + ms%1000..toString() + "毫秒");
    return time;
}
