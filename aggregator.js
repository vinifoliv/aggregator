#!/usr/bin/node

const TITLE = 'Aggregator\n\n';
const CONTROL_CHAR = '> ';
const parser = require('./input-parser');
const terminal = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

terminal.question(TITLE + CONTROL_CHAR, (input) => {
    // Parsing the command
    let command = parser.parse_input(input);

    switch(command['instruction']) {
        // Adding a new feeder
        case 'add':
            const { add } = require('./add');
            add(command);
            break;
        
         case 'show':
             const { show } = require('./show');
             show(command['argument']);
             break;
        case 'quit':
        case 'exit':
            process.exit(0);
        
        // Bad instruction
        default:
            console.log('Invalid command');
            break;
    }
    terminal.close();
});