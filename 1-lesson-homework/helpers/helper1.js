const testData = require('../../data-from-test-work.json');

const jsonString = JSON.stringify(testData);

const parsedData = JSON.parse(jsonString);

let filtredArray = [];

const filterKeyAndValue = (array, key, value ) => {

  filtredArray = [];

  parsedData.test.forEach(object => {
    if (object[key] === key) {
    filtredArray.push(object);
    } else if (object[key] === value) {
      filtredArray.push(object);
    }
  });

  return filtredArray;

};

console.log(filterKeyAndValue(parsedData, 'item', 'orange'));

console.log(filterKeyAndValue(parsedData, 'weight', 4));

module.exports = filterKeyAndValue();
