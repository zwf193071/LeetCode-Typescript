import { expect } from 'chai'
import { isMatch } from './index'

describe('0010. Regular Expression Matching', function () {
    describe('s = "aab", p = "c*a*b"', function () {
        it("should return true", function () {
            expect(isMatch("aab", "c*a*b")).to.be.equal(true)
        })
    })
    describe('s = "mississippi", p = "mis*is*p*."', function () {
        it("should return false", function () {
            expect(isMatch("mississippi", "mis*is*p*.")).to.be.equal(false)
        })
    })
})