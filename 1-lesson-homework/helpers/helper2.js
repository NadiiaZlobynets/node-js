const testData = require('../../data-from-test-work.json');

const jsonString = JSON.stringify(testData);

const parsedData = JSON.parse(jsonString);

const helper2 = (array) =>  {
  let mostExpensive = [];

  mostExpensive = [];

  parsedData.test.forEach(object => {


    if(object.pricePerKilo !== undefined) {
      object.pricePerKilo =
      object.pricePerKilo.replace('$', '').split(',').join('.');

      let calcPriceKilo = parseFloat(object.pricePerKilo);

      calcPriceKilo *= object.weight;

      mostExpensive.push( parseFloat(calcPriceKilo));

    } else if (object.pricePeritem !== undefined) {

      object.pricePeritem =
      object.pricePeritem.replace('$', '').split(',').join('.');

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

// helper2(parsedData);

module.exports = helper2();
