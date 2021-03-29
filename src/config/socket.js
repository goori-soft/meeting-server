const formatMessage = require('../util/format-message');

const botName = process.env.BOT_NAME || 'Goori Bot';

module.exports = io =>{
    
    io.on('connection', socket=>{
        const userName = 'Lucas';

        socket.on('joinRoom', ({username, room})=>{
            //Emits to current user
            socket.emit('message', formatMessage(botName, 'Seja bem vindo!'));
        });

        //Emits to everybody else but current user
        socket.broadcast.emit('message', formatMessage(botName, 'Alguém entrou na conexão!'));


        socket.on('chatMessage', message =>{
            socket.broadcast.emit('chatMessage', formatMessage(userName, message));
        });

        //When current user disconnect
        socket.on('disconnect', ()=>{
            //It Emits to everyone
            io.emit(formatMessage(botName, 'Alguém deixou o palco'));

        })
    });

}