const testData = require('../dataFromTestWork.json');

const helper3 = testData.test.map(object => {
if(object.pricePerKilo !== undefined) {
  object.price = parseFloat(object.pricePerKilo.replace('$', ''))*object.weight
    return object;
}
if (object.pricePeritem !== undefined) {
  object.price = parseFloat(object.pricePeritem.replace('$', ''))*object.quantity
  return object;
}
  });

console.log(helper3);

module.exports = helper3;















// const testData = require('../dataFromTestWork.json');

// let calculatedPrice = [];

// const helper3 = (array, key, value ) => {

//   calculatedPrice = [];

//   testData.test.forEach(object => {

//     if(object.item === value || object.type === value) {

//     if (object.pricePerKilo !== undefined) {
//       object.pricePerKilo =
//       object.pricePerKilo.replace('$', '').split(',').join('.');
//       price = object.pricePerKilo;
//       price *= object.weight;
//       object.price = price;
//       calculatedPrice.push(object);

//     } else if (object.pricePeritem !== undefined) {
//       object.pricePeritem =
//       object.pricePeritem.replace('$', '').split(',').join('.');
//       price = object.pricePeritem;
//       price *= object.quantity;
//       object.price = price;
//       calculatedPrice.push(object);
//     }
//   }
//   });

//   console.log(calculatedPrice);

//   return calculatedPrice;

// };

// helper3(testData.test, 'item', 'orange');

// module.exports = helper3();
