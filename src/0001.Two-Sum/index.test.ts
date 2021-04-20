import { expect } from 'chai'
import { twoSum, twoSum1 } from './index'

describe('Two-Sum', function () {
    describe('twoSum', function () {
        it('[2,7,11,15] 9 should return [0, 1]', function () {
            expect(twoSum([2,7,11,15], 9)).to.deep.equal([0, 1])
        })
        it('[3,2,4] 6 should return [1, 2]', function () {
            expect(twoSum([3,2,4], 6)).to.deep.equal([1, 2])
        })
    })
    describe('twoSum1', function () {
        it('[2,7,11,15] 9 should return [0, 1]', function () {
            expect(twoSum1([2,7,11,15], 9)).to.deep.equal([0, 1])
        })
        it('[3,2,4] 6 should return [1, 2]', function () {
            expect(twoSum1([3,2,4], 6)).to.deep.equal([1, 2])
        })
    })
})