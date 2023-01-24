import { describe, expect, test } from '@jest/globals';
import fs from 'fs';

import { makeAnagramGroupFromArray } from './util';

// sample input data
let testInput = [
    'ant', 'tan', 'bee', 'eeb', 'word', 'dorw', 'wrdo', 'apple', 'pplar', 'morgan', 'ganmor', 'anmorg',
];
let testOutput = [
    ['ant', 'tan'],
    ['bee', 'eeb'],
    ['word', 'dorw', 'wrdo'],
    ['apple'],
    ['pplar'],
    ['morgan', 'ganmor', 'anmorg'],
];

// if there are mock files, get data from them
const inputFile = process.argv[3];
const outputFile = process.argv[4];
if (inputFile && outputFile) {
    let buffer = fs.readFileSync(inputFile);
    testInput = buffer.toString().split('\n');
    buffer = fs.readFileSync(outputFile);
    testOutput = buffer.toString().split('\n');
    testOutput = testOutput.map(ele => ele.split(','));
}

describe('Anagram', () => {
    test('check group', () => {
        expect(makeAnagramGroupFromArray(testInput)).toEqual(testOutput);
    });
});