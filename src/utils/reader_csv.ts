
import {parse} from "csv-parse";
import * as fs from 'fs';
const data = {}
fs.createReadStream(__dirname+ '/goto.csv')
    .pipe(parse({ delimiter: ',' , columns: true}))
    .on('data', (r) => {
        const position = Object.keys(data).length
        data[position] = r
    })
    .on('end', () => {
        console.log(data);
    })
