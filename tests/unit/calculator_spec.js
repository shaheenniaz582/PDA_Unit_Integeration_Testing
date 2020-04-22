var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 to 4 to get 5', function(){
    var expected = 1+4;
    this.previousTotal = 1;
    var result = calculator.add(4);
    assert.equal(this.expected, this.result);
  });

  it('it should subtract 4 from 7 and get 3', function(){
    var expected = 7-4;
    this.previousTotal = 7;
    var result = calculator.subtract(3);
    assert.equal(this.expected, this.result);
  });

  it('it should multiply 3 by 5 and get 15', function(){
    var expected = 3*5;
    this.previousTotal = 3;
    var result = calculator.multiply(5);
    assert.equal(this.expected, this.result);
  });

  it('it should divide 21 by 7 and get 3', function(){
    var expected = 21/7;
    this.previousTotal = 21;
    var result = calculator.divide(7);
    assert.equal(this.expected, this.result);
  });

  it('it should concatenate multiple number button clicks', function(){
    var expected = 898;
    this.previousTotal = "";
    var result = calculator.numberClick(898);
    assert.equal(this.expected, this.result);
  });

  it('it should chain multiple operations together - multiply', function(){
    var expected = 4;
    this.previousTotal = 2;
    this.previousOperator = "+";
    var result = calculator.operatorClick("*");
    assert.equal(this.expected, this.result);
  });

  it('it should chain multiple operations together - divide', function(){
    var expected = 1;
    this.previousTotal = 2;
    this.previousOperator = "+";
    var result = calculator.operatorClick("/");
    assert.equal(this.expected, this.result);
  });

  it('it should clear the running total without affecting the calculation', function(){
    var expected = 4;
    this.previousTotal = 2;
    this.previousOperator = "+";
    calculator.clearClick();
    var result = calculator.operatorClick("+");
    assert.equal(this.expected, this.result);
  });

});
