function generateChar(chars, currentPass) {
    let str = ''
    let passingCount = currentPass
    
    while (passingCount >= chars.length) {
		const remainder = passingCount % chars.length
		passingCount = (passingCount - remainder) / chars.length - 1
        str = chars[remainder] + str
    }
    
	return chars[passingCount] + str
}

function generator(symbol, index = 0) {
	return () => generateChar(symbol, index++)
}

module.exports = generator
