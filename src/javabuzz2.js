function Javabuzz(){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return (this._isDivisibleBy(number, 3));
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return (this._isDivisibleBy(number, 5));
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return (this._isDivisibleBy(number, 15));
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.play = function(number) {
  if(this.isDivisibleByFifteen(number)) return "Fizzbuzz";
  if(this.isDivisibleByThree(number)) return "Fizz";
  if(this.isDivisibleByFive(number)) return "Buzz";
  else return number
};


// Weds October 15 - 17 min 26 s
