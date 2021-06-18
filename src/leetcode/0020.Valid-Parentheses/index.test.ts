import { expect } from 'chai'
import { isValid } from './index'

describe('0020.Valid-Parentheses', function () {
    describe('isValid', function () {
        it('s = "()" should be true', function () {
            expect(isValid("()")).to.be.equal(true)
        })
    })
})