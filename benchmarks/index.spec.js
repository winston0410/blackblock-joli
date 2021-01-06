const { Benchmark } = require('benchmark')
const memoized = require('./cases/memoized.js')
const currentPackage = require('../src/index.js')
const StackoverflowAnswer = require('./cases/stackoverflowAnswer.js')
const incstr = require('incstr')

const suite = new Benchmark.Suite()
const charList = 'abcd'

const generator = currentPackage({
	chars: charList
})

const stackoverflowGenerator = new StackoverflowAnswer(charList)

const incstrGenerator = incstr.idGenerator({
	alphabet: 'abcd'
})

suite.add('No memoized, recursion(Current package)', function() {
	const id = generator.next().value
})

suite.add('Array without recursion, Stackover Flow Answer', function() {
	const id = stackoverflowGenerator.next()
})

suite.add('incStr', function() {
	const id = incstrGenerator()
})

suite.on('cycle', function(event) {
	console.log(String(event.target))
})

suite.on('complete', function() {
	console.log(`Fastest is ${this.filter('fastest').map('name')}`)
})

suite.run()

// const memoGenerator = memoized({
// 	chars: charList
// })
//
// suite.add('Memoized, recursion', function() {
// 	const id = memoGenerator.next().value
// })