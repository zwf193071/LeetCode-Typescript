import { expect } from 'chai'
import { longestPalindrome, longestPalindrome1 } from './index'

describe('0005.Longest-Palindromic-Substring', function () {
    describe("longestPalindrome--Manacher", function () {
        it('aacabdkacaa should return aca', function () {
            expect(longestPalindrome('aacabdkacaa')).to.be.equal('aca')
        })
        it('aaaaa should return aaaaa', function () {
            expect(longestPalindrome('aaaaa')).to.be.equal('aaaaa')
        })
    })
    describe("longestPalindrome--Dynamic Programming", function () {
        it('aacabdkacaa should return aca', function () {
            expect(longestPalindrome1('aacabdkacaa')).to.be.equal('aca')
        })
        it('aaaaa should return aaaaa', function () {
            expect(longestPalindrome1('aaaaa')).to.be.equal('aaaaa')
        })
    })
})