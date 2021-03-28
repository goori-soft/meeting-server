const express = require('express');
const path = require('path');
const server = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, '..', 'public');

server.use('/', express.static(publicPath));

server.listen(port, ()=>{
    console.log(`O servidor de video conferência está rodando na porta ${port}`);
});

module.exports = server;
