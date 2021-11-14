const { superPerson, calc, hello } = require('./file1');
//  require can use js / json format of files;

const car = require('./file2');

const { name: notDepricatedName } = superPerson; // change name "name" to other;

console.log(
    `
name: ${superPerson.name}
age: ${superPerson.age}
prop: ${superPerson.superProperty}
`,
    `person name is ${notDepricatedName}`,
);

hello();

console.log(car);

console.log(calc(20, 80));
