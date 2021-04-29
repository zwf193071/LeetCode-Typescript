import { expect } from 'chai'
import { addTwoNumbers } from './index'
import { IntsToList, ListToInts } from '../../structures/ListNode'

describe('Add-Two-Numbers', function () {
    describe('addTwoNumbers', function () {
        it('l1 = [2,4,3], l2 = [5,6,4], should return [7,0,8]', function () {
            const l1 = IntsToList([2,4,3])
            const l2 = IntsToList([5,6,4])
            const result = addTwoNumbers(l1, l2)
            console.log(result)
            const resultArray = ListToInts(result)
            expect(resultArray).to.deep.equal([7,0,8])
        })
    })
})