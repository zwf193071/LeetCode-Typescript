import { expect } from 'chai'
import { lengthOfLongestSubstring } from './index'

describe('Length-Of-Longest-Substring', function () {
    describe('lengthOfLongestSubstring', function () {
        it("'abcabcbb' should return 3", function () {
            expect(lengthOfLongestSubstring("abcabcbb")).to.be.equal(3)
        })
        it("'bbbbb' should return 1", function () {
            expect(lengthOfLongestSubstring("bbbbb")).to.be.equal(1)
        })
        it("'pwwkew' should return 3", function () {
            expect(lengthOfLongestSubstring("pwwkew")).to.be.equal(3)
        })
    })
})