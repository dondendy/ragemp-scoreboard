mp.events.add('playerJoin', (player) => {

    mp.players.forEach(_player => {
        if (_player != player)
            _player.call('playerJoinedServer', [player.ping, player.name, player.name, player.name, player.ping]);
    });
});

mp.events.add('playerQuit', (player) => {

    mp.players.forEach(_player => {
        if (_player != player)
            _player.call('playerLeavedServer', [player.id, player.name, player.ping, player.ping, player.ping]);
    });
});
