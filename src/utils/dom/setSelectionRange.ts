/**
 * 设置input中的文本选中范围
 * @param {HTMLInputElement} input
 * @param {number} selectionStart
 * @param {number} selectionEnd -1为全选
 */
function setSelectionRange(input: HTMLInputElement, selectionStart: number, selectionEnd: number) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    // else if (input.createTextRange) {
    //   let range = input.createTextRange();
    //   range.collapse(true);
    //   range.moveEnd('character', selectionEnd);
    //   range.moveStart('character', selectionStart);
    //   range.select();
    // }
}
export default setSelectionRange;
