const testData = require('../../data-from-test-work.json');

const jsonString = JSON.stringify(testData);

const parsedData = JSON.parse(jsonString);

let filtredArray = [];

const helper1 = (array, key, value ) => {

  filtredArray = [];

  parsedData.test.forEach(object => {
    if (object[key] === key) {
    filtredArray.push(object);
    } else if (object[key] === value) {
      filtredArray.push(object);
    }
  });

  // console.log(filtredArray);

  return filtredArray;

};

// console.log(helper1(parsedData, 'item', 'orange'));

// console.log(helper1(parsedData, 'weight', 4));

module.exports = helper1();
