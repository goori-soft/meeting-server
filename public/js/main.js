console.log('Script carregado com sucesso!');

const socket = io();

//Solicitando acesso a uma sala específica
socket.emit('joinRoom', {room: 'ABCD', username: 'Juca'});

socket.on('message', message => console.log(message));