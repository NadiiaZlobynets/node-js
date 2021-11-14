const testData = require('../../data-from-test-work.json');

const jsonString = JSON.stringify(testData);

const parsedData = JSON.parse(jsonString);

const findMostExpensive = (array) =>  {
  let mostExpensive = [];

  mostExpensive = [];

  parsedData.test.forEach(object => {

    if(object.pricePerKilo !== undefined) {
      object.pricePerKilo =
      object.pricePerKilo.replace('$', '').split(',').join('.');
      mostExpensive.push( parseFloat(object.pricePerKilo));

    } else if (object.pricePeritem !== undefined) {

      object.pricePeritem =
      object.pricePeritem.replace('$', '').split(',').join('.');

      let calcPrice = parseFloat(object.pricePeritem);

      calcPrice *= object.quantity;

      mostExpensive.push( calcPrice );
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

  console.log(mostExpensive[0]);

 return mostExpensive[0];

};

findMostExpensive(parsedData);

module.exports = findMostExpensive();
