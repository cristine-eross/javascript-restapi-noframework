const http = require('http')
const data = require('./data/data.json')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
})
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`))