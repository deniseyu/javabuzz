describe('Javabuzz', function(){

  var javabuzz;

  beforeEach(function(){
  	javabuzz = new Javabuzz();
  });

  describe('is divisible by', function(){

    it('seventeen', function(){
      expect(javabuzz.isDivisibleBySeventeen(17)).toBe(true);
    });

  	it('twelve', function(){
  		expect(javabuzz.isDivisibleByTwelve(12)).toBe(true);
  	});

  	it('six', function(){
    		expect(javabuzz.isDivisibleBySix(6)).toBe(true);
  	});

  	it('four', function(){
  		expect(javabuzz.isDivisibleByFour(4)).toBe(true);
  	});

    it('three', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('two', function(){
    	expect(javabuzz.isDivisibleByTwo(2)).toBe(true);
    });

	});

  describe('should say', function(){

    it('Check yourself before you wreck yourself', function(){
      expect(javabuzz.says(17)).toEqual("Check yourself before you wreck yourself");
    });

    it('And I cannot lie', function(){
    	expect(javabuzz.says(12)).toEqual("And I cannot lie");
    });

    it('I', function(){
      expect(javabuzz.says(6)).toEqual("I");
    });

    it('like', function() {
      expect(javabuzz.says(4)).toEqual("like");
    });

    it('big', function() {
      expect(javabuzz.says(3)).toEqual("big");
    });

    it('butts', function() {
      expect(javabuzz.says(2)).toEqual("butts");
    });

  });

});