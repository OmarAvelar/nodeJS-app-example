const http = require('http')

const server = http.createServer((request, response)=>{
    console.log(request.url)

    if (request.url === '/perro'){
      response.write('Saca las panochas ')
    }

    if (request.url === '/chelas'){
      response.write('Saca las chelas ')
    }
    response.write('Sacalaaas ')
    response.end()
})

server.listen(3000)
