/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum (nums:number[], target:number):number[] {
    const len:number = nums.length
    let i:number = 0
    let k:number;
    while (i < len) {
        let current:number = nums[i]
        let other:number = target - current
        if (nums.includes(other)) {
            k = nums.indexOf(other)
            if (k !== i)break
        }
        i++
    }
    return [i, k]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum1 (nums:number[], target:number):number[] {
    const m = new Map()
    const len:number = nums.length
    let i:number = 0
    for (; i < len; i++) {
        let v:number = nums[i]
        if (m.has(target-v)) return [m.get(target-v), i]
        m.set(v, i)
    }
};
