// 1: template strings - basics
// To do: make all tests pass

const assert = require('chai').assert;

describe('template string, are wrapped in backticks', function() {

  it('prints x into a string using ${x}', function() {
    var x = 42;
    assert.equal(`x=${x}`, 'x=' + x);
  });

  it('add two numbers inside the ${...}', function() {
    var x = 42;
    var y = 23;
    assert.equal(`${ x + y}`, x+y);
  });

  it('get a function call result inside ${...}', function() {
    const jsdom = require('jsdom').jsdom;
    jsdom.env('<html />', ['http://tddbin.com'], function(){
      function getDomain(){ return document.domain; }
        assert.equal(`${ getDomain() }`, 'tddbin.com');
      });
  });

});
