const testData = require('./data-from-test-work.json');

const helpers = require(
  './1-lesson-homework/helpers/index'
  );

  const { helper1: changedNameOfHelper1 } =
  helpers; // change name "name" to other;

console.log( helpers.helper1)

// console.log(helpers.helper1(testData, 'item', 'orange'));