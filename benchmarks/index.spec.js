'use strict'
const { Benchmark } = require('benchmark')
const memoized = require('./cases/memoized.js')
const partialMemoed = require('./cases/partiallyMemoized.js')
const StackoverflowAnswer = require('./cases/stackoverflowAnswer.js')
const incstr = require('incstr')

const suite = new Benchmark.Suite()
const charList = 'abcd'

const next = require('./cases/functionWithJKY.js')(charList, 0)

suite.add('Function JKY', function() {
	const id = next()
})

const next2 = require('./cases/functionWithStringConcat.js')(charList, 0)

suite.add('Function generator; concat string for result', function() {
	const id = next2()
})

const next3 = require('./cases/functionWithStringConcatAndMemo.js')(charList, 0)

suite.add('Function generator; concat string for result; memoized', function() {
	const id = next3()
})

const next4 = require('./cases/functionWithStringConcatAndCustomMemo')(
	charList,
	0
)

suite.add(
	'Function generator; concat string for result; custom memo(Version 1.0.0)',
	function() {
		const id = next4()
	}
)

const generator = require('./cases/generator.js')({
	chars: charList
})

suite.add('No memoized, recursion(Version 0.1.0)', function() {
	const id = generator.next().value
})

const memoizedGenerator = memoized({
	chars: charList
})

suite.add('Memoized, recursion', function() {
	const id = memoizedGenerator.next().value
})

const partialMemoGenerator = partialMemoed({
	chars: charList
})

suite.add('Partial Memoized, recursion', function() {
	const id = partialMemoGenerator.next().value
})

const stackoverflowGenerator = new StackoverflowAnswer(charList)

suite.add('Array without recursion, Stackover Flow Answer', function() {
	const id = stackoverflowGenerator.next()
})

const incstrGenerator = incstr.idGenerator({
	alphabet: charList
})

suite.add('incStr, for-loop', function() {
	const id = incstrGenerator()
})

suite.on('cycle', function(event) {
	if (event.target.error) {
		console.log(event.target.error)
	}
	console.log(String(event.target))
})

suite.on('complete', function() {
	console.log(`Fastest is ${this.filter('fastest').map('name')}`)
})

suite.run()
