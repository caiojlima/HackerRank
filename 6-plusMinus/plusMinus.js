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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let propPositive;
    let propNegative;
    let propZero;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0){
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }
    propPositive = (positive/arr.length).toFixed(6);
    propNegative = (negative/arr.length).toFixed(6);
    propZero = (zero/arr.length).toFixed(6);
    return console.log(propPositive + '\n' + propNegative + '\n' + propZero) ; 
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
