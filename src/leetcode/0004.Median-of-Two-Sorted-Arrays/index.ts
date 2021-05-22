export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let arr:number[] = []
    while(nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            arr.push(nums1.shift()!)
        } else {
            arr.push(nums2.shift()!)
        }
    }
    if (nums1.length) {
        arr = [...arr, ...nums1]
    } else if (nums2.length) {
        arr = [...arr, ...nums2]
    }
    if (arr.length & 1) {
        return arr[Math.floor(arr.length/2)]
    } else {
        return (arr[arr.length/2] +arr[arr.length/2 - 1]) / 2 
    }
};