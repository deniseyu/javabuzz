describe(Javabuzz, function() {

  beforeEach(function(){
    javabuzz = new Javabuzz;
  });

  describe('it should be divisible by', function(){

    it('three', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('five', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('fifteen', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBeTruthy();
    });

  });

  describe('it should not be divisible by', function(){

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

  describe('it should say', function(){

    it('fizz', function(){
      expect(javabuzz.says(3)).toBe('fizz');
    });

    it('buzz', function(){
      expect(javabuzz.says(5)).toBe('buzz');
    });

    it('fizzbuzz', function(){
      expect(javabuzz.says(15)).toBe('fizzbuzz');
    });

    it('should say the number otherwise', function(){
      expect(javabuzz.says(1)).toBe(1);
    });

  });



});