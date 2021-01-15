/* pc浏览器环境 */
const ENV = {
    Opera: false,
    Firefox: false,
    Chrome: false,
    Safari: false,
    IE: false,
};

function BrowserType() {
    // 取得浏览器的userAgent字符串
    const userAgent = navigator.userAgent;
    const isOpera = userAgent.indexOf('Opera') > -1;
    if (isOpera) {
        ENV.Opera = true;
        return;
    }
    // 判断是否Opera浏览器
    if (userAgent.indexOf('Firefox') > -1) {
        ENV.Firefox = true;
        return 'FF';
    }
    // 判断是否Firefox浏览器
    if (userAgent.indexOf('Chrome') > -1) {
        ENV.Chrome = true;
        return 'Chrome';
    }
    // 判断是否Safari浏览器
    if (userAgent.indexOf('Safari') > -1) {
        ENV.Safari = true;
        return 'Safari';
    }
    // 判断是否IE浏览器
    if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
        ENV.IE = true;
        return 'IE';
    }
}
BrowserType();
export default ENV;
