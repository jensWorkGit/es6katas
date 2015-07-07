// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!

const assert = require('chai').assert;

describe('`Array.from` converts an array-like object or list into an Array', () => {

  const arrayLike = {0: 'one', 1: 'two', length: 2};

  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike, function(v, k){return v;});

    assert.deepEqual(arr, ['one', 'two']);
  });

  // TODO: classList shim
  xit('a DOM node`s classList object can be converted', function() {
    const jsdom = require('jsdom').jsdom;
    let document = jsdom('<html><body/></html>');

    document.body.classList.add('some');
    document.body.classList.add('other');
    const classList = Array.from(document.body.classList, function(v, k) {
      return v;
    });

    assert.deepEqual(classList, ['some', 'other']);
  });

  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const jsdom = require('jsdom').jsdom;
    let document = jsdom('<html><body/></html>');

    const nodeList = Array.from(document.querySelectorAll('body'), function(v, k){
      return v;
    });
    const bodies = nodeList.filter((node) => node === document.body);

    assert.deepEqual(bodies, [document.body]);
  });

  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });

    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });

});
