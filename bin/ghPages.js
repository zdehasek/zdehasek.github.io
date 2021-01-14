'use strict';

console.log('start');

const fs = require('fs');

fs.writeFileSync('dist/CNAME', 'zdehasek.com');
fs.writeFileSync('dist/.nojekyll', '');
