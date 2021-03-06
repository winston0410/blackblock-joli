function generateChar(chars, currentPass) {
	let str = ''

	const recursion = (passingCount) => {
		if (passingCount < chars.length) {
			return chars[passingCount] + str
		}

		const charIndex = Math.floor(passingCount / chars.length) - 1
		const remainder = passingCount % chars.length
		str = chars[remainder] + str
		return recursion(charIndex)
	}

	return recursion(currentPass)
}

function generator(symbol, index = 0) {
	return () => generateChar(symbol, index++)
}

module.exports = generator
