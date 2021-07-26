import { expect } from 'chai'
import { isPalindrome } from './index'

describe('0009.Palindrome Number', function () {
    describe("isPalindrome 131", function () {
        it("131 should return true", function () {
            expect(isPalindrome(131)).to.be.equal(true)
        })
    })
    describe("isPalindrome -131", function () {
        it("-131 should return false", function () {
            expect(isPalindrome(-131)).to.be.equal(false)
        })
    })
})