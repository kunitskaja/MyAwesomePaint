window.Color = class RGBColor {
  constructor(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      this.red = parseInt(result[1], 16);
      this.green = parseInt(result[2], 16);
      this.blue = parseInt(result[3], 16);
  }

  set(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    this.red = parseInt(result[1], 16);
    this.green = parseInt(result[2], 16);
    this.blue = parseInt(result[3], 16);
  }

  toString() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }
}