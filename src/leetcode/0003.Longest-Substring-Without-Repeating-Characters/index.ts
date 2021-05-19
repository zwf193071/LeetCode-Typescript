/**
 * @param {String} s
 * @return {number}
 */
 export function lengthOfLongestSubstring(s: string): number {
    const len:number = s.length;
    let indexMap = new Map();
    let [result, left, right]:number[] = [0, 0, 0];
    while (left < len) {
        // 若该值为true，说明此字符在X位置重复，需要左侧向前移动
        if (indexMap.get(s[right])) {
            indexMap.set(s[left], false);
            left++;
        } else {
            indexMap.set(s[right], true);
            right++;
        }
        if (result < (right - left)) {
            result = right - left;
        } 
        if ((left + result) >= len || right >= len) {
            break
        }
    }
    return result
};