exports = function(menu) {
    // Add player in the table.
    mp.events.add('playerJoinedServer', (id, name, country, fps, ping) => {
        menu.execute(`addPlayerInTheTable('${id}', '${name}', '${country}', '${fps}', '${ping}');`);
    });

    // Remove player from the table.
    mp.events.add('playerLeavedServer', (id) => {
        menu.execute(`removePlayerInTheTable('${id}');`);
    });
};
