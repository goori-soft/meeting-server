const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, '..', 'public');

//Static path ../public
app.use('/', express.static(publicPath));

const server = http.createServer(app);
const io = socketio(server);

server.listen(port, ()=>{
    console.log(`O servidor de video conferência está rodando na porta ${port}`);
});

module.exports = {app, io, server};
