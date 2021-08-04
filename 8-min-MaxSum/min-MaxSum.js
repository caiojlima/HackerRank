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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort(function(a, b){return a-b});
    let miniSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (i === (arr.length - 1)){
            maxSum += arr[i];
        } else if (i === 0){
            miniSum += arr[i];
        } else {
            miniSum += arr[i];
            maxSum += arr[i];
        }
        
    }
    console.log(miniSum + ' ' + maxSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
