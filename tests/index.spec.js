// import joli from '../src/index'
// import joli from '../benchmarks/cases/functionWithJKYAndCustomMemo'
import joli from '../src/rust/index.js'
const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

describe('Test joli', function() {
	let maxNum, resultDict

	beforeEach(function() {
		resultDict = {
			0: 'a',
			4: 'aa',
			26: 'abc',
			254: 'cccc'
		}

		maxNum = R.pipe(Object.keys, R.map(parseInt), (arr) => Math.max(...arr))(
			resultDict
		)
	})

	describe('if string abcd is used', function() {
		const next = joli('abcd', 0)

		it('should return the correct string during different passes', function() {
			for (let i = 0; i <= 1000; i++) {
				const key = i.toString()
				const generatedValue = next()

				if (resultDict.hasOwnProperty(key)) {
					expect(generatedValue).to.equal(resultDict[key])
				}
			}
		})
	})

	describe('if array abcd is used', function() {
		const next = joli(['a', 'b', 'c', 'd'], 0)

		it('should return the correct string during different passes', function() {
			for (let i = 0; i <= 1000; i++) {
				const key = i.toString()
				const generatedValue = next()

				if (resultDict.hasOwnProperty(key)) {
					expect(generatedValue).to.equal(resultDict[key])
				}
			}
		})
	})
})
