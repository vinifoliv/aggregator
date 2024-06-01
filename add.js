module.exports.add = function(command) {
    const fs = require('fs');
    let URL = command['argument'];

    (async() => {
        fs.appendFile('./user/feeders.txt', URL + ';', (error) => {
            if (error)
                console.log('Failed to save: ' + URL);
            else
                console.log('Feeder succesfully saved!');
        });
    })();
}