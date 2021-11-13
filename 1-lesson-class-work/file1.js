console.log('from file 1 log');

let number = 0;
number += 15;

const person = {
    name: 'superName',
    age: 12,
    superProperty: 'superValue',
};

module.exports = {
    superPerson: person,
    hello: () => console.log('hello'),
    calc: (a, b) => a + b,
    number,
};
