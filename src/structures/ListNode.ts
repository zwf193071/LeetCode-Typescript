export class ListNode {
    val?: number
    next?: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
// First way to create LinkedList from arrays
export function IntsToList(nums:Array<number|null>):ListNode {
    if (nums.length === 0) return null
    let l = new ListNode()
    let t = l
    nums.forEach(v => {
        t.next = new ListNode(v)
        t = t.next
    })
    return l.next
}

// Another way to create LinkedList from arrays
export function IntsToList1(arr: number[]) {
    if (arr.length === 0) return null
    let head = new ListNode(arr[arr.length - 1])
    for (let i = arr.length - 2; i >= 0; --i) {
      const newNode = new ListNode(arr[i])
      head.next = newNode
      head = newNode
    }
    return head
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