const http  = require('http')
const {readFileSync} = require('fs');

//get all
const homePage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeLogo = readFileSync('./navbar/logo.svg')
const homeBrower = readFileSync('./navbar/brower-app.js')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url

// home page
    if (url === '/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()

    } else if (url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> about page</h1>')
        res.end()

    } else if (url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()

    } else if (url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()

    } else if (url === '/brower-app.js') {
        res.writeHead(200,{'content-type':'text/javasript'})
        res.write(homeBrower)
        res.end()
    } else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1> not found </h1>')
        res.end()
    }
})

server.listen(5000) 
