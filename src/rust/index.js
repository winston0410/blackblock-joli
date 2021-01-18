'use strict'
const { generateChar } = require('../../wasm/index.js')

function generator(symbol, index = 0) {
	const cache = {}
	return () => generateChar(symbol, index++, cache)
}

module.exports = generator
