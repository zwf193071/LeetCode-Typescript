import { expect } from 'chai'
import { myAtoi } from './index'

describe('0008.String-to-Integer(atoi)', function () {
    describe("myAtoi '    -42'", function () {
        it("'    -42' should return -42", function () {
            expect(myAtoi('    -42')).to.be.equal(-42)
        })
    })
    describe("myAtoi '21474836460'", function () {
        it("'21474836460' should return 2147483647", function () {
            expect(myAtoi('21474836460')).to.be.equal(2147483647)
        })
    })
})