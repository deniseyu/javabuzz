describe(Javabuzz, function(){

  beforeEach (function(){
    javabuzz = new Javabuzz();
  });

  describe('it should divide by', function(){

    it('three', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('five', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('fifteen', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('it should not divide by', function(){

    it('three', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('five', function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('fifteen', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false); 
    });

  });

  describe('it should play Fizzbuzz', function(){

    it('should say fizz when number is divisible by three', function(){
      expect(javabuzz.play(3)).toBe("Fizz")
    });

    it('should say buzz when number is divisible by five', function(){
      expect(javabuzz.play(5)).toBe("Buzz")
    });

    it('should say Fizzbuzz when number is divisible by fifteen', function(){
      expect(javabuzz.play(15)).toBe("Fizzbuzz")
    });

    it('should return a number otherwise', function(){
      expect(javabuzz.play(1)).toBe(1)
    });

  });


});