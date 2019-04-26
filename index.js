var app = document.getElementById("main");

function render (gameID) {
    var socket = io('/' + gameID);
    var messID = 'message' + gameID;
    var buttonID = 'the-button' + gameID;
    var mess = document.createElement('ul');
    mess.setAttribute('id', messID);
    var button = document.createElement('input');
    button.innerText = "Send Data";
    button.setAttribute('id', buttonID);
    button.setAttribute('autocomplete', 'off');
    var form = document.createElement('form');
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
}

var game = [1, 2];
for(let i = 0; i < game.length; i++) {
    app.innerHTML = app.innerHTML + render(game[i]);
}