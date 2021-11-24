const testData = require('./dataFromTestWork');

const helpers = require(
  './helpers'
  );

  const {
    helper1: filterItemsByKeyAndValue,
    helper2: findTheMostExpensiveItem,
    helper3: calculateThePriceOfItem
    } = require('./helpers');

console.log( helpers.helper1);

// console.log(helpers.helper1(testData, 'item', 'orange'));
