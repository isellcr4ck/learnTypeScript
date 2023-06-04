function LogClass(constructor: Function) {
  console.log(constructor.name);
}

function LogMethod(target: Object, key: string, descriptor: PropertyDescriptor);

@LogClass
class Plane {
  private id: number;

  constructor(id: Number) {
    this.id = id;
  }

  @LogMethod
  getId() {
    return this.id;
  }
}
