const parser = require('./input-parser');
const terminal = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

terminal.question('> ', (input) => {
    // Parsing the command
    let command = parser.parse_input(input);

    switch(command['instruction']) {
        // Adding a new feeder
        case 'add':
            const { add } = require('./add');
            add(command);
            break;
        
        // case 'show':
        //     const show = require('./show');
        //     show(command['argument']);
        //     break;
        
        // Bad instruction
        default:
            console.log('Invalid command');
            break;
    }
    terminal.close();
});