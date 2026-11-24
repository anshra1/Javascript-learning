// const fs = require('node:fs');
// const path = require('path');

import fs from 'node:fs';
import path from 'node:path';

console.log(fs)

const filePath = path.join(__dirname, 'Notes', 'second.js');
const content = fs.readFileSync(filePath, 'utf-8');

//console.log(content);
