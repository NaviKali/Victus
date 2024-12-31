/**
 * 媒体查询适配
 * @param width 宽度
 * @param url 跳转路径
 */
function MediaConfigView(width, url) {
    if (window.innerWidth < width) {
        let to = "./index?mediaType=" + url;
        location.href = to
    }
}