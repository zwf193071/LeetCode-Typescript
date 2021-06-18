import { expect } from 'chai'
import { reverse } from './index'

describe('0007.Reverse-Integer', function () {
    describe("reverse positive integer", function () {
        it('123 should return 321', function () {
            expect(reverse(123)).to.be.equal(321)
        })
    })
    describe("reverse negative integer", function () {
        it('-123 should return -321', function () {
            expect(reverse(-123)).to.be.equal(-321)
        })
    })
})