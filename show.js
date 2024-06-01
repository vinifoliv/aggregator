module.exports.show = function(argument) {
    const fs = require('fs');

    switch (argument) {
        case 'feeders':
            const feeders = fs.readFileSync('./user/feeders.txt', 'utf8');
            console.log(feeders);

            feeders = feeders.split(';');
                
            if (feeders == []) {
                console.log('No feeders to show');
                return;
            }

            console.log('Here is your feeders list\n');

            feeders.forEach(feeder => {
                console.log(feeder);
            });
    }
}