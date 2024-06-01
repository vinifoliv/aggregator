module.exports.parse_input = function (input) {
    const INSTRUCTION_INDEX = 0;
    const ARGUMENT_INDEX = 1;
    const HTTP_CONNECTION_REQUEST = 'https://'

    let instr;
    let arg;

    input = input.toString().trim();

    instr = input.split(' ')[INSTRUCTION_INDEX];

    arg = input.split(' ')[ARGUMENT_INDEX];

    if (arg != undefined || arg != null) {
        if (instr.includes('add') && !arg.includes(HTTP_CONNECTION_REQUEST))
            arg = HTTP_CONNECTION_REQUEST + arg;
    }
    else 
        arg = null;

    return { instruction: instr, argument: arg };
}