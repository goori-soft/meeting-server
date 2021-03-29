// Carrega as variáveis de ambiente
require('dotenv').config();

// Carrega o servidor
const server = require('./src/server');

//Configuração do socket io
require('./src/config/socket')(server.io);
