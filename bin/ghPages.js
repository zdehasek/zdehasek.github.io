'use strict';

console.log('start');

const fs = require('fs');

fs.writeFileSync('out/CNAME', 'zdehasek.com');
fs.writeFileSync('out/.nojekyll', '');