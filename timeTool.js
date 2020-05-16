function showTime(req, format) {        // req选择展示内容 1.时间 2.日期 (默认为日期时间);format自定义分隔符 (默认为汉字)
    var time,
        d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth(),
        date = d.getDate(),
        hour = d.getHours(),
        min = d.getMinutes(),
        sec = d.getSeconds();
    if(!req) {
        if (format != "") {
            time = year + format + month + format + date + " " + hour + format + min + format + sec;
        } else {
            time = year + "年" + month + "月" + date + "日" + " " + hour + "时"+ min + "分" + sec+ "秒";
        }
    }else if(req == 1) {
        if (format != "") {
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
function timeDiff(date1, date2) {
    var d1 = new Date(date1),
        d2 = new Date(date2),
        dd1 = d1.getTime(), //获取毫秒数
        dd2 = d2.getTime(),
        time = Math.abs(dd1 - dd2)/1000/3600/24;
    return time;
}