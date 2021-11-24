const testData = require('../dataFromTestWork.json');

let calculatedPrice = [];

const helper3 = (array, key, value ) => {

  calculatedPrice = [];

  testData.test.forEach(object => {

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

helper3(testData.test, 'item', 'orange');

module.exports = helper3();
