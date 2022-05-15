const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 },()=>{
    console.log('server started')
})
wss.on('connection', function connection(wss) {
   wss.on('message', (data) => {
      console.log('data received \n %o',data.toString())
      
      wss.send(data);
   })
})
wss.on('listening',()=>{
   console.log('listening on 8080')
})