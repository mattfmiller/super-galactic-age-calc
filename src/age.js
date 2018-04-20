export class Age {
  constructor (birthDate) {
    this.birthDate = new Date(birthDate);
    this.earthYears = Math.floor((new Date() - this.birthDate)/31536000000);
  }

  yearsToSeconds() {
    return (this.earthYears * 31536000);
  }

  dateToSeconds(date) {
    let currentDate = new Date(date);
    return (currentDate - this.birthDate)/1000;
  }

}
