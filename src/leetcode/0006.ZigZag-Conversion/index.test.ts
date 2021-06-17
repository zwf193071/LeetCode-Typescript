import { expect } from 'chai'
import { convert } from './index'

describe('ZigZag-Conversion', function () {
    describe("convert", function () {
        it('s = "PAYPALISHIRING", numRows = 3 should return "PAHNAPLSIIGYIR"', function () {
            expect(convert('PAYPALISHIRING', 3)).to.be.equal('PAHNAPLSIIGYIR')
        })
    })
})