const myAge = 31; // This is number type

// console.log(age);

const name = 'Denny'; //This is string data type

const surname = 'Maverick'; //This is string data type

const fullName = name + ' ' + surname;

// console.log(fullName);

// true / false

// console.log('isAdult: ', isAdult);

// console.log(typeof name);

// Logical operators

let startBalance = 0;

currentBalance = startBalance + 1000;

// console.log(currentBalance);

currentBalance = surname == 'Maverick' ? 1000 : 10;

// console.log(currentBalance);

// const a = 4;
// const b = '4';

// Строгое неравно !==, нестрогое неравно !=
// console.log(a !== b, a != b);

// const age = 18;
const isRoomClean = true;

// const isAllowGoingToParty = age >= 21 || isRoomClean;

// console.log('isAllowGoingToParty: ', isAllowGoingToParty);

// Logical: not

const title = '';

const isTitleEmpty = !title;
// console.log('isTitleEmpty: ', isTitleEmpty);

// Conditionals

// const age = 17;

// if (age > 18) {
//   console.log('ты совершеннолетний');
// } else {
//   console.log('you are not adult');
// }

// functions

// function sayHello() {
//   console.log('Hello, my name is: ');
//   console.log('Denny!');
// }

function sum(a, b) {
  return a + b;
}

// const a = 7;
// const b = 3;

// const result = sum(a, b);
// console.log('result: ', result);

// console.log(sum(1, 177));

// Challenge #1

let a = 177;

let b = 2;

function multiply(a, b) {
  return a * b;
}

const result = multiply(a, b);
// console.log('result: ', result);

// Challenge 2#

function buildDate(day, month, year) {
  return day + '/' + month + '/' + year;
}

const myBirthDay = buildDate(2, 'april', 1993);
// console.log('myBirthDay: ', myBirthDay);

// Challenge 3#

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else return false;
}

// console.log(isAdult(17));

function getMonthByNumber(monthNumber) {
  let month;
  let noteError = 'error';
  switch (monthNumber) {
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'February';
      break;
    case 3:
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break;
    case 6:
      month = 'June';
      break;
    case 7:
      month = 'July';
      break;
    case 8:
      month = 'August';
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'December';
      break;
    default:
      return noteError;
  }
  // if (monthNumber == 1) {

  // } else if (monthNumber == 2) {
  //   month = 'February';
  // } else if (monthNumber == 3) {
  //   month = 'March';
  // } else if (monthNumber == 4) {
  //   month = 'April';
  // } else if (monthNumber == 5) {
  //   month = 'May';
  // } else if (monthNumber == 6) {
  //   month = 'June';
  // } else if (monthNumber == 7) {
  //   month = 'July';
  // } else if (monthNumber == 8) {
  //   month = 'August';
  // } else if (monthNumber == 9) {
  //   month = 'September';
  // } else if (monthNumber == 10) {
  //   month = 'October';
  // } else if (monthNumber == 11) {
  //   month = 'November';
  // } else if (monthNumber == 12) {
  //   month = 'December';
  // } else {
  //   return noteError;
  // }

  return month;
}

// console.log(getMonthByNumber(1));
// refactoring function

// Cycles

// const plan = 10;
// let laps = 0;

// function run() {
//   laps = laps + 1;
// }

// while (laps < plan) {
//   run();
//   console.log(laps);
// }

// console.log('Закончили тренировку');
// For

// for (let laps = 1; laps <= 10; laps++) {
//   console.log(laps);
// }
// console.log('Finish');
// const fruits = [];
// const fruitBox = ['apple', 'pineapple', 'peach', 'cherry'];

// fruitBox.forEach(fruit => {
//   fruits.push(fruit);
// });

// console.log(fruits);

// Objects

// const person = {
// name: 'Denny',
// city: 'Kizema',
// age: 29,
// isAdult: function () {
//   return this.age >= 18;
// },

// sayHi: function () {
//   console.log('Hello, my name is ' + this.name);
//   if (this.isAdult()) {
//     console.log('I am more than 18');
//   }
// },
// };

// person.city = 'Дубай';

// console.log(person);
// person.sayHi();

// const people = [
//   {
//     name: 'Denny',
//     city: 'Maldivs',
//   },
//   {
//     name: 'Anna',
//     city: 'Moscow',
//   },
//   {
//     name: 'Artem',
//     city: 'Kaliningrad',
//   },
// ];

// people.push({
//   name: 'Stepan',
//   city: 'Saint-Peterburg',
// });

// console.log(people);

// people.forEach(function (person) {
//   console.log(person.name);
// });

// const post = {
//   title: '',
//   description: ''
// }
// Challenge #1

// function printNumbers() {
//   for (let i = -10; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printNumbers();

// Challenge #2

// function calculateNumbersSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// }

// const sumResult = calculateNumbersSum([0, 1, 2, 4, 8]);
// console.log('sumResult: ', sumResult);

// Challenge #3

// function findOldest(people) {
//   let ageMax = 0;
//   let name = '';
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > ageMax) {
//       ageMax = people[i].age;
//       name = people[i].name;
//     }
//   }
//   return name;
// }

// const people = [
//   {
//     name: 'Fedor',
//     age: 31,
//   },
//   {
//     name: 'Maxim',
//     age: 49,
//   },
//   {
//     name: 'Rob',
//     age: 70,
//   },
// ];

// const personOldest = findOldest(people);
// console.log('personOldest: ', personOldest);

// function findOldest(people) {
//   let indexOldest = 0;

//   people.forEach(function (person, index) {
//     if (person.age > people[indexOldest].age) {
//       indexOldest = index;
//     }
//   });

//   return people[indexOldest].name;
// }

// console.log(findOldest(people));

// Finish part / Basics of Javascript

const expenses = [];
const limit = 1000;

function trackExpanse(money) {
  expenses.push(money);
}

function calculate() {
  let sum = 0;
  expenses.forEach(function (expanse) {
    sum = sum + expanse;
  });
  return sum;
}

function checkBalance() {
  if (calculate() < limit) {
    console.log('мы в лимите');
  } else {
    console.log('лимит превышен');
  }
}

// trackExpanse(100);
// trackExpanse(200);
// trackExpanse(12);
// trackExpanse(20);
// trackExpanse(25);

// trackExpanse(1200);

const total = calculate();
// console.log('total: ', total);

// console.log(expenses);
// checkBalance();

function usdToRub(usd) {
  let rub = usd * 91.67;

  return rub;
}

// let usdFromUser = prompt('Введите сумму в долларах', 1);

// let usd = parseInt(usdFromUser);

// let rub = usdToRub(usd);

// alert(`В рублях это: ${rub} руб.`)

// function printNumbers(q) {
//   for (let i = 1; i <= q; i++) {
//     alert(i);
//   }
// }

// printNumbers(7);

function getExpansesUSDFromUser() {
  let expansesCount = 0;
  let expansesUSD = [];

  expansesCount = prompt('Введите количество покупок в usd');

  for (let i = 0; i < expansesCount; i++) {
    let usdFromUser = prompt(`Введите сумму покупки в usd ${i + 1}`, 0);

    let usd = parseInt(usdFromUser);

    expansesUSD.push(usd);
  }

  return expansesUSD;
}

function calculateExpansesUSDToRub(expensesUSD) {
  let expansesRUB = 0;

  for (let i = 0; i < expensesUSD.length; i++) {
    let rub = usdToRub(expensesUSD[i]);

    expansesRUB = expansesRUB + rub;
  }

  return expansesRUB;
}

// let expansesUSD = getExpansesUSDFromUser();

// let expansesRUB = calculateExpansesUSDToRub(expansesUSD);

// alert(`Сумма всех покупок в рублях: ${expansesRUB} руб.`);

const currencyUSD = 90;
const currencyEUR = 100;
const currencyKZT = 45;
const currencyAED = 115;

function convertRub(valueRub, currency) {
  let currentCurrency = 0;
  if (typeof valueRub !== 'number') {
    alert('error');
  } else {
    switch (currency) {
      case 'USD':
        currentCurrency = valueRub * currencyUSD;
        break;
      case 'EUR':
        currentCurrency = valueRub * currencyEUR;
        break;
      case 'KZT':
        currentCurrency = valueRub * currencyKZT;
        break;
      case 'AED':
        currentCurrency = valueRub * currencyAED;
        break;

      default:
        alert('error');
        break;
    }
  }
  return currentCurrency;
}

// const convertRubValue = convertRub(10000, 'AED');
// console.log('convertRubValue: ', convertRubValue);

const items = ['груша', 'яблоко', 'банан'];

const bananaIndex = getBananaIndex(items);
// console.log('bananaIndex: ', bananaIndex);

// console.log(items[bananaIndex]);

function getBananaIndex(items) {
  let bananaIndex = null;

  items.forEach(function (item, index) {
    if (item === 'банан') {
      bananaIndex = index;
    }
  });

  return bananaIndex;
}

const person = {
  name: 'Denny',
  age: 31,
  birthday: '02.04.1993',
};

// console.log(person.name);

// Checkpoint #2
// 1
// function printNumbers() {
//   for (let i = -10; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

// 2

// function printNumbersByRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }

// printNumbersByRange(5, 20);
// 3

function calculateNumbersSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

const totalSum = calculateNumbersSum([1, 2, 3]);
// console.log('totalSum: ', totalSum);

// 4
function includes(numbers, number) {
  const includedArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      includedArray.push(numbers[i]);
    }
  }
  // I
  // if (includedArray.length > 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  // II
  if (includedArray.includes(number)) {
    return true;
  } else {
    return false;
  }
}

// const isIncludedNumber = includes([1, 177, 1, 155, 145], 145);
// console.log('isIncludedNumber: ', isIncludedNumber);
// 5

function createPerson(name, surname, age) {
  const updatedPerson = {};
  updatedPerson.name = name;
  updatedPerson.surname = surname;
  updatedPerson.age = age;
  return updatedPerson;
}

// const myFriend = createPerson('Denny', 'Maverick', 31);
// console.log('myFriend : ', myFriend);

// const herSister = createPerson('Nataly', 'Makarova', 23);
// console.log('herSister: ', herSister);

// const people = [
//   createPerson('Cat', 'Makarevich', 31),
//   createPerson('Denny', 'Maverick', 31),
//   createPerson('Nataly', 'Markova', 23),
//   createPerson('Olga', 'Makarevich', 56),
// ];

// function findOldest(people) {
//   let oldestAge = 0;
//   let oldestName = '';
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldestAge) {
//       oldestAge = people[i].age;
//       oldestName = people[i].name;
//     }
//   }
//   return oldestName;
// }

// const oldestNames = findOldest(people);
// console.log('oldestNames: ', oldestNames);