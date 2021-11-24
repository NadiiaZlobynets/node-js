const testData = require('../dataFromTestWork.json');

let filtredArray = [];

const helper1 = (array, key, value ) => {

  filtredArray = [];

  testData.test.forEach(object => {
    if (object[key] === key) {
    filtredArray.push(object);
    } else if (object[key] === value) {
      filtredArray.push(object);
    }
  });

  console.log(filtredArray);

  return filtredArray;

};

// console.log(helper1(parsedData, 'item', 'orange'));

// console.log(helper1(parsedData, 'weight', 4));

module.exports = helper1();
