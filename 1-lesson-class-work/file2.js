const file1 = require('./file1');

const car = {
    brand: 'Mazda',
    color: 'green',
    number: file1.number,
};

console.log('from file 2 log');

console.log(file1.hello());

module.exports = car;
