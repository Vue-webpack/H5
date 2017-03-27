export function MillisecondToDate(msd) {
    var time = parseFloat(msd) / 1000;
    var str = "";
    if (null != time && "" != time) {

        if (time > 60 && time < 3600) {
            str = parseInt(time / 60.0) + " 分钟前";
        }
        else if (time >= 3600 && time < 86400) {
            str = parseInt(time / 3600.0) + " 小时前";
        }
        else if (time >= 86400 && time < 86400 * 30) {
            str = parseInt(time / 86400.0) + " 天前";
        }
        else if (time >= 86400 * 30 && time < 86400 * 365) {
            str = parseInt(time / (86400.0 * 30)) + " 个月前";
        }
        else if (time >= 86400 * 365) {
            str = parseInt(time / (86400.0 * 365)) + " 年前";
        }
        else {
            str = parseInt(time) + " 秒前";
        }
    }
    return str;
}