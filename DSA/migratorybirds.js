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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let obj = {};
    let count = 0;
    let max = 0, output = []
    for(let i= 0; i < arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
             obj[arr[i]] += 1
        }
        if(obj[arr[i]] > max) {
    max = obj[arr[i]]
    }


}
    for (let j = 0; j < arr.length; j++) {
        if (obj[arr[j]] === max) {
            output.push(arr[j]);
        }
    }

    return Math.min(...output);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
