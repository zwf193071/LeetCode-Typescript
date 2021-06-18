import { expect } from 'chai'
import { mergeTwoLists, mergeTwoLists1 } from './index'
import { IntsToList, ListToInts } from '../../structures/ListNode'

describe('0021.Merge-Two-Lists', function () {
    describe('mergeTwoLists', function () {
        it('l1 = [], l2 = [], should return []', function () {
            expect(mergeTwoLists(IntsToList([]), IntsToList([]))).to.deep.equal(IntsToList([]))
        })
    })
    describe('mergeTwoLists-1', function () {
        it('l1 = [], l2 = [0], should return [0]', function () {
            const l1 = IntsToList([])
            const l2 = IntsToList([0])
            const result = mergeTwoLists1(l1, l2)
            const resultArray = ListToInts(result)
            expect(resultArray).to.deep.equal([0])
        })
    })
})