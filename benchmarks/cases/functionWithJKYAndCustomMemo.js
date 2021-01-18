function generateChar(chars, currentPass, cache) {
	let str = ''
	let passingCount = currentPass

	while (passingCount >= chars.length) {
		if (cache[passingCount]) {
			return cache[passingCount] + str
		}
		const remainder = passingCount % chars.length
		passingCount = (passingCount - remainder) / chars.length - 1
		str = chars[remainder] + str
	}

	cache[currentPass] = chars[passingCount] + str
	return chars[passingCount] + str
}

function generator(symbol, index = 0) {
	const cache = {}
	return () => generateChar(symbol, index++, cache)
}

module.exports = generator
