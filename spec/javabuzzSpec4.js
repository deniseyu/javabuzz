describe('Javabuzz', function(){

  var javabuzz

  beforeEach(function(){
    javabuzz = new Javabuzz;
  });

  describe('should divide by', function(){

    it('three', function(){
      expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
    });

    it('five', function(){
      expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
    });

    it('fifteen', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
    });


  });

  describe('should not divide by', function(){
    it('three', function(){
      expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
    });

    it('five', function(){
      expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
    });

    it('fifteen', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
    });
  });

  describe('should say', function(){

    it('fizz', function(){
      expect(javabuzz.says(3)).toEqual('fizz')
    });

    it('buzz', function(){
      expect(javabuzz.says(5)).toEqual('buzz')
    });

    it('fizzbuzz', function(){
      expect(javabuzz.says(15)).toEqual('fizzbuzz')
    });

    it('otherwise', function(){
      expect(javabuzz.says(4)).toEqual(4)
    });
  });
});



// Fri October 17 - 9 m 40 s