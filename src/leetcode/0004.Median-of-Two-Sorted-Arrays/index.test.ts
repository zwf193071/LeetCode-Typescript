import { expect } from 'chai'
import { findMedianSortedArrays } from './index'

describe('0004.Find-Median-Sorted-Arrays', function () {
    describe('findMedianSortedArrays', function () {
        it('nums1 = [1,3], nums2 = [2] should return 2.00000', function () {
            expect(findMedianSortedArrays([1,3], [2])).to.be.equal(2)
        })
        it('nums1 = [1,2], nums2 = [3,4] should return 2.50000', function () {
            expect(findMedianSortedArrays([1,2], [3,4])).to.be.equal(2.5)
        })
    })
})