function Javabuzz(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleBySeventeen = function(number) {
  return this._isDivisibleBy(number, 17);
};

Javabuzz.prototype.isDivisibleByTwelve = function(number) {
  return this._isDivisibleBy(number, 12);
};

Javabuzz.prototype.isDivisibleBySix = function(number) {
	return this._isDivisibleBy(number, 6);
};

Javabuzz.prototype.isDivisibleByFour = function(number) {
  return this._isDivisibleBy(number, 4);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
	return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByTwo = function(number) {
  return this._isDivisibleBy(number, 2);
};

Javabuzz.prototype.says = function(number) {
	if(this.isDivisibleBySeventeen(number)) return "Check yourself before you wreck yourself";
  if(this.isDivisibleByTwelve(number)) return "And I cannot lie";
  if(this.isDivisibleBySix(number)) return "I";
  if(this.isDivisibleByFour(number)) return "like";
  if(this.isDivisibleByThree(number)) return "big";
  if(this.isDivisibleByTwo(number)) return "butts";
  return number;
};

