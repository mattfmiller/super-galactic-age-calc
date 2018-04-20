import {Age} from './../src/age.js'

describe('Test', function(){
  var age;

  beforeEach(function(){
    age = new Age(1);
  });

  it('should correctly determine how many seconds are in a given number of Earth years', function(){
    let seconds = age.toSeconds();
    expect(seconds).toEqual(31536000);
  });

});
