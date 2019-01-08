


class Refraction {
  constructor({spherical = 0, cylinder = 0, axis = 0}) {
    this.spherical = spherical;
    this.cylinder = cylinder;
    this.axis = axis;
  }

  plusCylinder() {
    if(this.cylinder < 0) {
      this.spherical += this.cylinder;
      this.cylinder = -this.cylinder;
      this.axis = (this.axis + 90) % 180;
    }

    return this;
  }

  minusCylinder() {
    if(this.cylinder > 0) {
      this.spherical += this.cylinder;
      this.cylinder = -this.cylinder;
      this.axis = (this.axis + 90) % 180;
    }

    return this;
  }

  toString() {
    return this.spherical + ' ' + this.cylinder + ' ' + this.axis;
  }
}
