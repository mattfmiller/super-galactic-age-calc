import {Age} from './../src/age.js'

describe('Test', function(){
  var age;

  beforeEach(function(){
    age = new Age(1);
  });

  it('should test whether an age in Earth years has been converted to seconds', function(){
    let seconds = age.toSeconds();
    expect(seconds).toEqual(31536000);
  });
});
