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
    return Math.round((this.seconds/374016960)*100)/100; //seconds in a mars year//
  }

  earthYearsLeft() {
    return this.earthYearLifeExpectancy - this.earthYears;
  }

  mercuryYearsLeft() {
    let mercuryYearLifeExpectancy = this.earthYearLifeExpectancy/0.24
    let mercuryYears = this.seconds/7568640;
    return mercuryYearLifeExpectancy - mercuryYears;
  }

  venusYearsLeft() {
    let venusYearLifeExpectancy = this.earthYearLifeExpectancy/0.62
    let venusYears = this.seconds/19552320;
    return venusYearLifeExpectancy - venusYears;
  }

}
