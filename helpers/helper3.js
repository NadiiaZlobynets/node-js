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
