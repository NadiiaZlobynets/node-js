const testData = require('../dataFromTestWork.json');

let filtredArray = [];

const helper1 = (array, key, value ) => {

  filtredArray = [];

  testData.test.forEach(object => {

    if (key === 'weight' && value === object.weight) {
      filtredArray.push(object);
    } else if (key === 'item' && value === object.item) {
      filtredArray.push(object);
    } else if (key === 'type' && value === object.item) {
      filtredArray.push(object);
    } else if (key === 'quantity' && value === object.item) {
      filtredArray.push(object);
    } else if (key === 'pricePeritem' && value === object.item) {
      filtredArray.push(object);
    } else if (key === 'pricePerKilo' && value === object.item) {
      filtredArray.push(object);
    }

    });

  // console.log(filtredArray);

  return filtredArray;

};

// helper1(testData, 'item', 'orange');

// console.log(helper1(testData, 'item', 'orange'));

// helper1(testData, 'weight', 4);

// console.log(helper1(testData, 'weight', 4));

module.exports = helper1();
