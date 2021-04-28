import { expect } from 'chai'
import { mergeTwoLists, mergeTwoLists1 } from './index'
import { IntsToList, IntsToList1, ListToInts } from '../../structures/ListNode'

describe('Merge-Two-Lists', function () {
    describe('mergeTwoLists', function () {
        it('l1 = [], l2 = [], should return []', function () {
            expect(mergeTwoLists(IntsToList([]), IntsToList([]))).to.deep.equal(IntsToList([]))
        })
    })
    describe('mergeTwoLists-1', function () {
        it('l1 = [], l2 = [0], should return [0]', function () {
            const l1 = IntsToList1([])
            const l2 = IntsToList1([0])
            const result = mergeTwoLists1(l1, l2)
            const resultArray = ListToInts(result)
            expect(resultArray).to.deep.equal([0])
        })
    })
})