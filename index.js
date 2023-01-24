import fs from 'fs';

import { makeAnagramGroupFromArray } from './util.js';

// sample input data
let words = ['ful', 'gob', 'obg', 'lfu', 'bog', 'bgo', 'tennis', 'football', 'llootbfa', ];

//if there is a asample file, get input data
const filePath = process.argv[2];
if (filePath) {
    const buffer = fs.readFileSync(filePath);
    words = buffer.toString().split('\n');
}

//make group and print to console
const group = makeAnagramGroupFromArray(words);
group.forEach(ele => console.log(ele.join(',')));

