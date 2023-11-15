// Exercise 1
function valueMax(number1, number2, number3) {
  let max = number1;

  if (number2 > max) {
    max = number2;
  }

  if (number3 > max) {
    max = number3;
  }

  return max;
}

console.log(valueMax(5, -9, 13));


// Exercise 2
function valueMin(number1, number2, number3) {
  let min = number1;

  if (number2 < min) {
    min = number2;
  }

  if (number3 < min) {
    min = number3;
  }

  return min;
}

console.log(valueMin(5, -19, -13));


// Exercise 3
function checkAge(Age) {
  if (Age < 18) {
    console.log("Ești prea tânăr pentru a juca acest joc");
  } else if (Age >= 18) {
    console.log("Ești potrivit pentru a juca acest joc");
  }
}

checkAge(15);


// Exercise 4
function checkLimits(numberToCheck, limit1, limit2) {
  if (limit1 > limit2) {
    let a = limit1;
    limit1 = limit2;
    limit2 = a;
  }

  if (numberToCheck >= limit1 && numberToCheck <= limit2) {
    console.log("Numărul se află in limitele propuse");
  } else {
    console.log("Numărul nu se află in limitele propuse");
  }
}

checkLimits(3, 11, 2);


// Exercise 5
let USD = 0.9;
let MDL = 0.05;
let RON = 0.2;

function exchange(amount, currencyFrom, currencyTo) {
  let result = amount = amount * currencyFrom / currencyTo;
  console.log(result);
}

exchange(10, RON, MDL);


// Exercise 6
let input1 = 4;
let input2 = 4;
let input3 = 4;
let input4 = 4;

if (input1 === input2 && input2 === input3 && input3 === input4) {
  console.log("După introducerea lungimilor laturilor " + input1 + ", " + input2 + ", " + input3 + ", " + input4 + " rezultă că acesta este un pătrat.");
} else {
  console.log("După introducerea lungimilor laturilor " + input1 + ", " + input2 + ", " + input3 + ", " + input4 + " rezultă că acesta este un patrulater.");
}


// Exercice7
function DayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Luni";
    case 2:
      return "Marți";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sâmbătă";
    case 7:
      return "Duminică";
    default:
      return "Numărul introdus nu corespunde zilei săptămânii.";
  }
}

console.log(DayName(6));