exports = function(browser) {
    mp.players.forEach(player => {
        browser.execute(`addPlayerInTheTable('${player.id}', '${player.name}', '${player.name}', '${player.name}', '${player.ping}');`);
    });
};
