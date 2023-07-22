// 1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
console.log(i); }

// 2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let exchangeRate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} $ = ${uah} ₴`);
}

// 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

function findSquare(N) {
    for(let i = 1; i <= 100; i ++) {
        const square  = i ** 2;
        if (square <= N) {
            console.log(i);
        }
    }
}
const N = parseInt(prompt('Enter the number'));
findSquare(N);

// 4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function isSimpleNumber(number) {
 if (number < 2) {
    return false;
 }
 for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false; 
    }
 }
 return true;
}
const number = parseInt(prompt('Enter the integer'));
if (isSimpleNumber(number)) {
    console.log(`${number} is a simple number.`);
  } else {
    console.log(`${number} is not a simple number.`);
  }

  // 5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

  function  exponentiation(Number) {
    if (number <1) {
        return false; 
  }
  while (number % 3 === 0) {
    number /= 3;
  }
  return number === 1; 
}
console.log(exponentiation);