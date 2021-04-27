import { ListNode } from '../../structures/ListNode'

// 方法一
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode |null {
    const head: ListNode = new ListNode();
    let curr: ListNode = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return head.next;
}

// 方法二
export function mergeTwoLists1(l1: ListNode | null, l2: ListNode | null): ListNode |null {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let head = null
    if (l1.val > l2.val) {
        head = l2
        l2 = l2.next
    } else {
        head = l1
        l1 = l1.next
    }
    
    let node = head
    
    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2
            l2 = l2.next            
        } else {
            node.next = l1
            l1 = l1.next   
        }
        node = node.next
    }
    
    if (l1 !== null) {
        node.next = l1
    } else {
        node.next = l2
    }
    
    return head
}