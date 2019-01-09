var {Singleton}  = require('./singleton')
var expect = require('chai').expect

describe('Singleton pattern test', () => {
	it('should be equal', (done) => {
		var s01 = Singleton.getInstance()
		var s02 = Singleton.getInstance()
		expect(s01).to.deep.equal(s02)
		done()
	})
})