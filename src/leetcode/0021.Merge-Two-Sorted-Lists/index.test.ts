import { expect } from 'chai'
import { mergeTwoLists, mergeTwoLists1 } from './index'
import { List2Ints, createLinkedList, createArray } from '../../structures/ListNode'

describe('Merge-Two-Lists', function () {
    describe('mergeTwoLists', function () {
        it('l1 = [], l2 = [], should return []', function () {
            expect(mergeTwoLists(List2Ints([]), List2Ints([]))).to.deep.equal(List2Ints([]))
        })
    })
    describe('mergeTwoLists-1', function () {
        it('l1 = [], l2 = [0], should return [0]', function () {
            const l1 = createLinkedList([])
            const l2 = createLinkedList([0])
            const result = mergeTwoLists1(l1, l2)
            const resultArray = createArray(result)
            expect(resultArray).to.deep.equal([0])
        })
    })
})