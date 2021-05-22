# [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)


## 题目

There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume **nums1** and **nums2** cannot be both empty.

**Example 1:**

    nums1 = [1, 3]
    nums2 = [2]
    
    The median is 2.0

**Example 2:**

    nums1 = [1, 2]
    nums2 = [3, 4]
    
    The median is (2 + 3)/2 = 2.5


## 题目意思


给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。



## 解题思路


当nums1 和 nums2的长度同时不为0时，取出两数组队列中第一个较小的值，push到新数组arr中，并将该值从原数组队列中删除。

若nums1的数组长度不为0，则将arr与nums1剩余的数值进行合并

若nums2的数组长度不为0，则将arr与nums2剩余的数值进行合并

若arr的数组长度为奇数，即&1，结果为1，则返回该数组的中间值

若arr的数组长度为偶数，即&1，结果为0，则返回该数组的`(arr[arr.length/2] +arr[arr.length/2 - 1]) / 2 `