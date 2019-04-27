import io from '../app.js';
var app = document.getElementById("main");

function render (gameID) {
    var socket = io('/' + gameID);
    var messID = 'message' + gameID;
    var buttonID = 'the-button' + gameID;
    var mess = document.createElement('ul');
    mess.setAttribute('id', messID);
    var input = document.createElement('input');
    input.setAttribute('id', buttonID);
    input.setAttribute('autocomplete', 'off');
    var button = document.createElement('button');
    button.innerText = "Send Data";
    var form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);

    button.onclick = function(event) {
        event.preventDefault();
        socket.broadcast.emit('chat message', the-button.value);
        the-button.innerText('');
        return false;
    }

    socket.on('chat message', function(msg){
        var text = document.createElement('li');
        text.innerText = msg;
        mess.appendChild(text);
    });

    app.appendChild(mess);
    app.appendChild(form);
}

var game = [1, 2];
for(let i = 0; i < game.length; i++) render(game[i]);