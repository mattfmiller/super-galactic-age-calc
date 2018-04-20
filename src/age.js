export class Age {
  constructor (earthYears) {
    this.earthYears = earthYears;
  }

  toSeconds() {
    return (this.earthYears * 31536000);
  }

}
