/**
 * 交互数组中的元素
 * @param list
 * @param startIndex 原始位置
 * @param endIndex 新的位置
 */
const reorder = <T extends any>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export default reorder;
