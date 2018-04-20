export class Age {
  constructor (birthDate) {
    this.birthDate = new Date(birthDate);
    this.earthYears = Math.floor((new Date() - this.birthDate)/31536000000);
    this.seconds = Math.floor((new Date() - this.birthDate)/1000);
  }

  yearsToSeconds() {
    return (this.earthYears * 31536000);
  }

  dateToSeconds(date) {
    let currentDate = new Date(date);
    return (currentDate - this.birthDate)/1000;
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

}
