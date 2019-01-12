var expect = require('chai').expect
var {Publish, Subscribe} = require('./Pubsub')

describe('Pubsub pattern test', () => {
	it('Pubsub base test', done => {
		Subscribe('test001', () => done())
		Publish('test001')
	})

	it('Pubsub custom args test', () => {
		Subscribe('test002', arg => expect(arg).to.equal(2000))
		Publish('test002', 2000)
	})

	it('Pubsun unsubscribe test', done => {
		Subscribe('test003', arg => done(false))()
		Publish('test003', 2000)
		setTimeout(done, 100)
	})
})