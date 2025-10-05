const a = 3;
const b = 4;

let i = 0;
i = a + b;

console.log(i);
console.log("Hello from data-uploader-s3 action");

const fs = require('fs');

try {
    const files = fs.readdirSync('./');
    console.log("Files:");
    files.forEach(file => {
        console.log(file);
    });
} catch (err) {
    console.error('Error reading directory:', err);
}
