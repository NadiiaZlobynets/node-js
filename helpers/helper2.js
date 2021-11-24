const testData = require('../dataFromTestWork.json');

let mostExpensive = [];

const helper2 = (array) =>  {

  mostExpensive = [];

  testData.test.forEach(object => {

    if (object.pricePerKilo !== undefined) {

      object.pricePerKilo = object.pricePerKilo.replace('$', '');

      let calcPriceKilo = parseFloat(object.pricePerKilo);

      calcPriceKilo *= object.weight;

      mostExpensive.push(parseFloat(calcPriceKilo));

    } else if (object.pricePeritem !== undefined) {

      object.pricePeritem = object.pricePeritem.replace('$', '');

      let calcPriceItem = parseFloat(object.pricePeritem);

      calcPriceItem *= object.quantity;

      mostExpensive.push( calcPriceItem );
    }
  });

  function compare(a, b) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  }

  mostExpensive.sort(compare);

  // console.log(mostExpensive[0]);

 return mostExpensive[0];

};

helper2(testData);

// console.log(helper2(testData));

module.exports = helper2();
