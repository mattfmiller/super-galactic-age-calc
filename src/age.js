export class Age {
  constructor (birthDate) {
    let currentDate = new Date('April 20, 2018');
    this.birthDate = new Date(birthDate);
    this.earthYears = Math.floor((currentDate - this.birthDate)/31536000000);
    this.seconds = Math.floor((currentDate - this.birthDate)/1000);
    this.earthYearLifeExpectancy = 70.5; //global average from 2010-2015//
  }

  yearsToSeconds() {
    return (this.earthYears * 31536000);
  }

  dateToSeconds(date) {
    let endDate = new Date(date);
    return (endDate - this.birthDate)/1000;
  }

  toMercuryYears() {
    return Math.round((this.seconds/7568640)*100)/100; //seconds in a mercury year//
  }

  toVenusYears() {
    return Math.round((this.seconds/19552320)*100)/100; //seconds in a venus year//
  }

  toMarsYears() {
    return Math.round((this.seconds/59287680)*100)/100; //seconds in a mars year//
  }

  toJupiterYears() {
    return Math.round((this.seconds/374016960)*100)/100; //seconds in a jupiter year//
  }

  earthYearsLeft() {
    let numberOfEarthYearsLeft = this.earthYearLifeExpectancy - this.earthYears;
    if (numberOfEarthYearsLeft > 0) {
      return numberOfEarthYearsLeft;
    } else {
      let extraYears = Math.abs(numberOfEarthYearsLeft);
      return `${extraYears} Earth years longer than expected`
    }
  }

  mercuryYearsLeft() {
    let numberOfMercuryYearsLeft = (this.earthYearLifeExpectancy - this.earthYears)/0.24;
    if (numberOfMercuryYearsLeft > 0) {
      return numberOfMercuryYearsLeft;
    } else {
      let extraYears = Math.abs(numberOfMercuryYearsLeft);
      return `${extraYears} Mercury years longer than expected`
    }
  }

  venusYearsLeft() {
    let numberOfVenusYearsLeft = Math.round(((this.earthYearLifeExpectancy - this.earthYears)/0.62)*100)/100;
    if (numberOfVenusYearsLeft > 0) {
      return numberOfVenusYearsLeft;
    } else {
      let extraYears = Math.abs(numberOfVenusYearsLeft);
      return `${extraYears} Venus years longer than expected`
    }
  }

  marsYearsLeft() {
    return Math.round(((this.earthYearLifeExpectancy - this.earthYears)/1.88)*100)/100;
  }

  jupiterYearsLeft() {
    return Math.round(((this.earthYearLifeExpectancy - this.earthYears)/11.86)*100)/100;
  }

}
