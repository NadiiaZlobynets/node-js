const testData = require('./dataFromTestWork.json');

const {
    helper1: filterItemsByKeyAndValue,
    helper2: findTheMostExpensiveItem,
    helper3: calculateThePriceOfItem
    } = require('./helpers');

const boot = (array) => {

const task1 = calculateThePriceOfItem(array);

console.log(task1);

const itemOranges = filterItemsByKeyAndValue(array, 'item', 'orange');

console.log(itemOranges);

const itemWeight = filterItemsByKeyAndValue(array, 'weight', '4');

console.log(itemWeight);

const mostExpensiveOranges = findTheMostExpensiveItem(itemOranges);

const mostExpensiveWeight = findTheMostExpensiveItem(itemWeight);

const uniteResult = [];

uniteResult.push(mostExpensiveOranges);

uniteResult.push(mostExpensiveWeight);

console.log(uniteResult);

const task4 = calculateThePriceOfItem(uniteResult);

console.log(task4);

console.log(calculateThePriceOfItem());

};

boot(testData.test);