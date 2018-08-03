// CEF browser.
let menu;

let playersInit  = require('./scoreboard/menu_initialization/players.js');

// Creating browser.
mp.events.add('guiReady', () => {
    if (!menu) {
        // Creating CEF browser.
        menu = mp.browsers.new('package://scoreboard/browser/index.html');
        // Init menus and events, when browser ready.
        mp.events.add('browserDomReady', (browser) => {
            if (browser == menu) {
                // Init events.
                require('scoreboard/events.js')(menu);
                // Init menus.
                
                playersInit(menu);

               
            }
        });
    }
});
