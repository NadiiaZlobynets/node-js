const testData = require('../../data-from-test-work.json');

const jsonString = JSON.stringify(testData);

const parsedData = JSON.parse(jsonString);

let calculatedPrice = [];

let price = 0;

const calculatePrice = (array, key, value ) => {

  calculatedPrice = [];

  parsedData.test.forEach(object => {

    if(object.item === value || object.type === value) {

    if (object.pricePerKilo !== undefined) {
      object.pricePerKilo =
      object.pricePerKilo.replace('$', '').split(',').join('.');
      price = object.pricePerKilo;
      price *= object.weight;
      object.price = price;
      calculatedPrice.push(object);

    } else if (object.pricePeritem !== undefined) {
      object.pricePeritem =
      object.pricePeritem.replace('$', '').split(',').join('.');
      price = object.pricePeritem;
      price *= object.quantity;
      object.price = price;
      calculatedPrice.push(object);
    }
  }
  });

  console.log(calculatedPrice);

  return calculatedPrice;

};

calculatePrice(parsedData.test, 'item', 'orange');

module.exports = calculatePrice();
