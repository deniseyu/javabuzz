function Javabuzz(){
  this.dividesByThree = dividesByThree;
  this.dividesByFive = dividesByFive;
  this.dividesByFifteen = dividesByFifteen;
  this.says = says;
};

function dividesBy(number, divisor) {
  return (number % divisor === 0);
}

function dividesByThree(number) {
  return dividesBy(number, 3);
}

function dividesByFive(number) {
  return dividesBy(number, 5);
}

function dividesByFifteen(number) {
  return dividesBy(number, 15);
}

function says(number) {
  if (dividesByFifteen(number)) {
    return 'fizzbuzz';
  } else if (dividesByFive(number)) {
    return 'buzz';
  } else if (dividesByThree(number)) {
    return 'fizz';
  } else {
    return number;
  }
}