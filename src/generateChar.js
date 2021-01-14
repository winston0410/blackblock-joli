'use strict'
function generateChar(chars, currentPass) {
	let str = ''

	const recursion = (passingCount) => {
		if (passingCount < chars.length) {
			str += chars[passingCount]
			return str
		}

		const charIndex = Math.floor(passingCount / chars.length) - 1
		const remainder = passingCount % chars.length
		str += chars[remainder]
		return recursion(charIndex)
	}

	return recursion(currentPass)
}

module.exports = generateChar
