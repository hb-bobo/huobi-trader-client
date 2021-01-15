export const symbols = ['<', '>', '|', '*', '?', '/'];
const validateFolderName = function (name: string) {
    /* 文件名不能包含以下字符：<,>,|,*,?,/ */
    if (symbols.indexOf(name) > -1) {
        // Message.warning('文件名不能包含以下字符：<,>,|,*,?,/');
        return false;
    }
    if (name.length > 30) {
        // Message.warning('文件名过长');
        return false;
    }
    return true;
};
validateFolderName.blacklist = symbols;
export default validateFolderName;
