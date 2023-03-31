const fs = require('fs')

fs.readFile('logos.json', 'utf8', (err, data) => {
	if (err) throw err

	const logos = JSON.parse(data)

	logos.sort((a, b) => a.name.localeCompare(b.name))

	const sortedLogos = JSON.stringify(logos, null, 2)

	fs.writeFile('logos.json', sortedLogos, (err) => {
		if (err) throw err
		console.log('logos.json sorted')
	})
})
