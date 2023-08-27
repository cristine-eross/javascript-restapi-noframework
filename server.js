const http = require('http')
const data = require('./data/data.json')

const server = http.createServer((req, res) => {
    if(req.url === '/api/questions' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`))