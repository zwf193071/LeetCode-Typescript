import { expect } from 'chai'
import { maxArea1 } from './index'

describe('0011. Container With Most Water', function () {
    describe('Input: height = [1,8,6,2,5,4,8,3,7]', function () {
        it("should Output: 49", function () {
            expect(maxArea1([1,8,6,2,5,4,8,3,7])).to.be.equal(49)
        })
    })
    describe('Input: height = [1,2,1]', function () {
        it("should Output: 2", function () {
            expect(maxArea1([1,2,1])).to.be.equal(2)
        })
    })
})