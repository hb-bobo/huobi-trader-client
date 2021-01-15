/*
 * @Author: hubo
 * @Date: 2018-03-08 19:42:29
 * @Last Modified by: hubo36
 * @Last Modified time: 2020-07-31 19:02:32
 */

/**
 * 获取元素剩下的高度
 * @param { HTMLElement } element
 * @return {number} element height
 */
const getRemainingHeight = function (element) {
    if (element instanceof Element) {
        const offsetHeight = element.getBoundingClientRect().top;
        const clintH = document.documentElement.clientHeight;
        return clintH - offsetHeight;
    }
};
export default getRemainingHeight;
