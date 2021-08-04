'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    for (let i = 1; i <= n; i += 1){
        let print = '';
        for (let i2 = 1; i2 <= n-i; i2 += 1) {
            print += ' ';
        }
        for (let i3 = 0; i3 < i; i3 += 1) {
            print += '#';                
        }       
        console.log(print); 
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
