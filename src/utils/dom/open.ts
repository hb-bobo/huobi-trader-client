/**
 * 通过模拟A标签打开新窗口
 * @param url 链接
 */
const open = function (url: string) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
    }, 0);
};
export default open;
