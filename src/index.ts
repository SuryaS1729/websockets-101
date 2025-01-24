import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8000})

wss.on('connection', function(socket){
    socket.send("hello")
})