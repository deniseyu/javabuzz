describe('Javabuzz', function(){

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('should divide by', function(){

    it('three', function(){
      expect(javabuzz.dividesByThree(3)).toEqual(true);
    });

    it('five', function(){
      expect(javabuzz.dividesByFive(5)).toEqual(true);
    });

    it('fifteen', function(){
      expect(javabuzz.dividesByFifteen(15)).toEqual(true);
    });


  });

  describe('should not divide by', function(){
    it('three', function(){
      expect(javabuzz.dividesByThree(1)).toEqual(false);
    });

    it('five', function(){
      expect(javabuzz.dividesByFive(1)).toEqual(false);
    });

    it('fifteen', function(){
      expect(javabuzz.dividesByFifteen(1)).toEqual(false);
    });
  });

  describe('should say', function(){

    it('fizz on threes', function(){
      expect(javabuzz.says(3)).toEqual('fizz')
    });

    it('buzz on fives', function(){
      expect(javabuzz.says(5)).toEqual('buzz')
    });

    it('fizzbuzz on fifteens', function(){
      expect(javabuzz.says(15)).toEqual('fizzbuzz')
    });

    it('number otherwise', function(){
      expect(javabuzz.says(4)).toEqual(4)
    });
  });


});



// Fri October 17 - 9 m 40 s