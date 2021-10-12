import { expect } from 'chai'
import { intToRoman } from './index'

describe('0012. Integer-to-Roman', function () {
    describe("num = 58", function () {
        it("should return LVIII", function () {
            expect(intToRoman(58)).to.be.equal('LVIII')
        })
    })
    describe("num = 1994", function () {
        it("should return MCMXCIV", function () {
            expect(intToRoman(1994)).to.be.equal('MCMXCIV')
        })
    })
})