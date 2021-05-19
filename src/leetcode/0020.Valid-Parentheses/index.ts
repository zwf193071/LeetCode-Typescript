/**
 * @param {String} s
 * @return {boolean}
 */
export function isValid (s:string):boolean {
    const len:number = s.length;
    if (!len) return true;
    let flag:boolean = true;
    const stack:string[] = [];
    const mapping = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ])
    for (let i = 0; i < len; i++) {
        let char:string = s[i]
        let val:string = mapping.get(char)
        // 查看是否为结束符号
        if (!!val) {
            let topChar:string = ''
            if (stack.length) topChar = stack.shift()
            if (val !== topChar) {
                flag = false
                break;
            }
        } else {
            // 若为开始符号，则将该字符放在数组最前面
            stack.unshift(char)
        }
    }
    if (stack.length) flag = false
    return flag
}