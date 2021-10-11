// 暴力求解，时间复杂度O(n²)，空间复杂度O(1)
// ！！！速度太慢，leetcode提交直接被拒！！！
export function maxArea(height: number[]): number {
    const len:number = height.length
    let max:number = 0
    for (let i:number = 0; i < len; i++) {
        for (let j:number = i + 1; j < len; j++) {
            let h:number = Math.min(height[i], height[j])
            if (h * (j - i) > max) {
                max = h * (j - i)
            }
        }
    }
    return max
};

export function maxArea1(height: number[]): number {
    const len:number = height.length
    let max:number = 0
    let l:number = 0
    let r:number = len - 1
    while(l < r) {
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};