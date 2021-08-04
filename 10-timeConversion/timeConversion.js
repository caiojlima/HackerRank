'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let array = s.split('');
     if(array[8] === 'A'){
         if(array[0] == 1 && array[1] == 2){
             array[0] = parseInt(array[0]) - 1;
             array[1] = parseInt(array[1]) - 2;
         }
         array.pop();
         array.pop();
         return array.join('');
     }
     if(array[8] === 'P'){
        if(array[0] == 1 && array[1] == 2){
            array.pop();
            array.pop();
            return array.join('');
        }
        array[0] = parseInt(array[0]) + 1;
        array[1] = parseInt(array[1]) + 2;
        array.pop();
        array.pop();
        return array.join('');
    }
}
console.log(timeConversion('07:05:00PM'));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
