import { ListNode } from '../../structures/ListNode'

// TypeScript中??表示Nullish Coalescing (空值合并)，如const k = i ?? 1，若i未定义则k的值为1
// TypeScript中!表示非空断言操作符，若l1?.next为空，则抛出断言失败错误
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode = new ListNode(0);
    let current: ListNode = head;
    let carry: number = 0;
    while(l1 || l2 || carry !== 0) {
        const n1: number = l1?.val ?? 0;
        const n2: number = l2?.val ?? 0;
        const sum: number = n1 + n2 + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next!;
        l2 = l2?.next!;
    }
    return head.next;
}