class Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `${this.name} - ${this.price}`;
  }

  protected getPrice(): number {
    // Private может работать только внутри класса, protected можно использовать при создани наследования
    return this.price;
  }
}

class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price);
  }

  test() {
    return this.getPrice();
  }
}

new Car('BMW', 100000).getInfo();
