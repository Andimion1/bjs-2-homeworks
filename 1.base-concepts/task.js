"use strict";
function solveEquation(a, b, c) {
  let arr;
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  switch (true) {
    case (discriminant < 0):    
      console.log('Нет корней');
      arr = [];
    break;
    case (discriminant === 0): 
      console.log('Один корень');
      arr = [(-1 * b / 2 * a)];
    break;
    default: 
      console.log('2 корня');
      arr = [((-1 * b + Math.sqrt(discriminant))/ 2 * a), ((-1 * b - Math.sqrt(discriminant))/ 2 * a)];
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let p = parseInt(percent, 10) / 100 / 12;
  let s = parseInt(amount, 10) - parseInt(contribution, 10);

  if (isNaN(parseInt(percent, 10)) == true) {
    return(`Параметр Процентная ставка содержит неправильное значение ${percent}`);
    } else if (isNaN(parseInt(amount, 10)) == true) {
      return(`Параметр Общая стоимость содержит неправильное значение ${amount}`);
      } else if (isNaN(parseInt(contribution, 10)) == true) {
        return(`Параметр Начальный взнос содержит неправильное значение ${contribution}`);
      }
  else {
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateNowadays = new Date();
    let n = (year - dateNowadays.getFullYear()) * 12 + (month - dateNowadays.getMonth());
    totalAmount = n * (s * (p + p / ((Math.pow((1 + p), n)) - 1)));
    return +totalAmount.toFixed(2);
  }
}