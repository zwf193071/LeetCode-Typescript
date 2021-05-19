# [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## 题目

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example :

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

```

## 题目大意

合并 2 个有序链表

## 解题思路
创建head节点，并将head节点赋值给指针

依次比较l1和l2两个节点的val值，若l1的val值小于l2的val值，则指针指向l1，且往l1的下一位移动，否则指针指向l2，且往l2的下一位移动

返回head节点的next即可