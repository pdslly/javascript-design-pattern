let Observer = require('./Observer').default
let Subject = require('./Subject').default
let expect = require('chai').expect

describe('Observer pattern test', () => {
	it('should run update and equal', () => {
		let con = {}
		class Ob01 extends Observer {
			contructor() {}
			update(con) {
				expect(con).to.equal(con)
			}
		}

		class Ob02 extends Observer {
			contructor() {}
			update(con) {
				expect(con).to.equal(con)
			}
		}

		let sub = new Subject()

		sub.addObserver(new Ob01())
		sub.addObserver(new Ob02())

		sub.notify(con)
	})
})