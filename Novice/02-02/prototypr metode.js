class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100

  class Car {
    constructor() {
      this._color = null
    
    }
  
    get color () {
      return `Warna Mobilnya adalah ${this._color}`
    }
  
    set color (color) {
      this._color = `${color} keren`
    }
  
  }
  
  const car = new Car()
  
  car.color = 'merah'
  
  console.log(car.color)