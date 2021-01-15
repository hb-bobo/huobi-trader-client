
/**
 * 对象数组转表格数组
 * @param dimensions 维度
 * @param data 
 */
export function objectArrayToTable <T extends Record<string ,any>>(dimensions: string[], data: T[]) {
    const arr = data.map(function (item: Record<string, any>) {
        return dimensions.map(function(dimension) {
            return item[dimension];
        })
    });
    return arr;
}