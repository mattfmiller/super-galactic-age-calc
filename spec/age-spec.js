import {Age} from './../src/age.js'

describe('Test', function(){
  var age;
  var birthDate;
  var currentDate;

  beforeEach(function(){
    currentDate = "April 20, 2018 00:00:10";
    birthDate = 'April 20, 2017';
    age = new Age(birthDate);
    console.log(age);
  });

  it('should correctly determine how many seconds are in a given number of Earth years', function(){
    let seconds = age.yearsToSeconds();
    expect(seconds).toEqual(31536000);
  });

  it('should correctly determine the number of seconds that have elapsed between two given dates', function(){
    let secondsBetweenDates = age.dateToSeconds(currentDate);
    expect(secondsBetweenDates).toEqual(31536010);
  });

  it('should correctly convert age to Mercury years', function(){
    let mercuryYears = age.toMercuryYears();
    expect(mercuryYears).toEqual(4.17);
  });

  it('should correctly convert age to Venus years', function(){
    let venusYears = age.toVenusYears();
    expect(venusYears).toEqual(1.62);
  });

});
