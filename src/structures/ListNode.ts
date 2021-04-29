export class ListNode {
    val?: number
    next?: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
// The way to create LinkedList from arrays
export function IntsToList(nums:Array<number|null>):ListNode | null {
    if (nums.length === 0) return null
    let l = new ListNode()
    let t = l
    nums.forEach(v => {
        t.next = new ListNode(v)
        t = t.next
    })
    return l.next
}

// The way to create an array from the LinkedList
export function ListToInts(head: ListNode | null):number[] {
    const arr = []
    while (head !== null) {
      arr.push(head.val)
      head = head.next
    }
    return arr
}