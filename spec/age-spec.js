import {Age} from './../src/age.js'

describe('Test', function(){
  var currentDate;
  var age;
  var oldAge;
  var veryOldAge


  beforeEach(function(){
    currentDate = 'April 20, 2018 00:00:10';
    age = new Age('April 20, 2017');
    oldAge = new Age('April 20, 1958');
    veryOldAge = new Age ('April 20, 1937')
    console.log(age);
    console.log(oldAge);
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
    expect(venusYears).toEqual(1.61);
  });

  it('should correctly convert age to Mars years', function(){
    let marsYears = age.toMarsYears();
    expect(marsYears).toEqual(0.53);
  });

  it('should correctly convert age to Jupiter years', function(){
    let jupiterYears = age.toJupiterYears();
    expect(jupiterYears).toEqual(0.08);
  });

  it('should calculate how many more Earth years one is expected to live', function(){
    let yearsLeftOnEarth = oldAge.earthYearsLeft();
    expect(yearsLeftOnEarth).toEqual(10.5);
  });

  it('should calculate how many more Mercury years one is expected to live', function(){
    let yearsLeftOnMercury = oldAge.mercuryYearsLeft();
    expect(yearsLeftOnMercury).toEqual(43.75);
  });

  it('should calculate how many more Venus years one is expected to live', function(){
    let yearsLeftOnVenus = oldAge.venusYearsLeft();
    expect(yearsLeftOnVenus).toEqual(16.94);
  });

  it('should calculate how many more Mars years one is expected to live', function(){
    let yearsLeftOnMars = oldAge.marsYearsLeft();
    expect(yearsLeftOnMars).toEqual(5.59);
  });

  it('should calculate how many more Jupiter years one is expected to live', function(){
    let yearsLeftOnJupiter = oldAge.jupiterYearsLeft();
    expect(yearsLeftOnJupiter).toEqual(0.89);
  });

  it('should calculate how many Earth years over expectations one has lived', function(){
    let yearsOverOnEarth = veryOldAge.earthYearsLeft();
    expect(yearsOverOnEarth).toEqual("10.5 Earth years longer than expected");
  });

  it('should calculate how many Mercury years over expectations one has lived', function(){
    let yearsOverOnMercury = veryOldAge.mercuryYearsLeft();
    expect(yearsOverOnMercury).toEqual("43.75 Mercury years longer than expected");
  });

  it('should calculate how many Venus years over expectations one has lived', function(){
    let yearsOverOnVenus = veryOldAge.venusYearsLeft();
    expect(yearsOverOnVenus).toEqual("43.75 Venus years longer than expected");
  });

});
