const http = require('http')
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome to the wonderful world of backend development.</h1>')
    res.end()
})
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`))