import { expect } from 'chai'
import { romanToInt } from './index'

describe('0013.Roman-to-Integer', function () {
    describe("romanToInt IV", function () {
        it("IV should return 4", function () {
            expect(romanToInt('IV')).to.be.equal(4)
        })
    })
    describe("romanToInt MCMXCIV", function () {
        it("MCMXCIV should return 1994", function () {
            expect(romanToInt('MCMXCIV')).to.be.equal(1994)
        })
    })
})