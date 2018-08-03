let centered = false;

// Show players online.
document.addEventListener('keydown', function(e) {
    if ((e.key === 'tab' || e.keyCode === 9)) {
        if (!centered) {
            $('#online_players').css('top', Math.max(0, (($(window).height() - $('#online_players').outerHeight()) / 2) + $(window).scrollTop()) + 'px');
            $('#online_players').css('left', Math.max(0, (($(window).width() - $('#online_players').outerWidth()) / 2) + $(window).scrollLeft()) + 'px');
            centered = true;
        }
        $('#online_players').css('display', 'block');
    }
});

// Hide players online.
document.addEventListener('keyup', function(e) {
    if ((e.key === 'tab' || e.keyCode === 9)) {
        $('#online_players').css('display', 'none');
        centered = false;
    }
});

// Add player in the table.
function addPlayerInTheTable(id, name, country, fps, ping) {
    let text = `
            <tr id="player-${id}">
                <td class="id">${id}</td>
                <td class="name">${name}</td>
                <td class="country">${country}</td>
                <td class="fps">${id}</td>
                <td class="ping">${ping}</td>
            </tr>`;

    let formated = text.replace(/\n/g, '').replace(/"/g, '"');

    $('#online_players #online_players_table tbody').append(text);
}

// Remove player from table.
function removePlayerInTheTable(id) {
    $('#player-'+id).remove();
}
