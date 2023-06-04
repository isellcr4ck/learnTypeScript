interface ICar {
  id?: number;
  name?: string;
  price?: number;
  yerarBuilt?: number;
} // ? - указывается, чтобы пометить параметр как необязательный

// Omit - исключает
interface ICarCreate extends Omit<ICar, 'id'> {}

// Pick - достаёт только заданное
interface ICarId extends Pick<ICar, 'id'> {}

// Partial - делает все свойства необязательными
interface IOptionalCar extends Partial<ICar> {}

// Readonly - позволяет сделать поля доступные только для чтения
interface IReadonlyCar extends Readonly<ICar> {}

// Record - для создания своего, нового типа
type TypeCarRecodr = Record<'name' | 'price', string | number>;

// Required - делает поля обязательными
interface IRequiredCar extends Required<ICar> {}

type TypeGetName = () => string;
type returnType = ReturnType<TypeGetName>;

// Extract - возвращает совпадение
type AnyExtracts = Extract<'Spartak' | 'Andrey', 'Andrey' | 'Misha'>;

// Exclude - исключает по первому параметру // остальное удаляет
type Any = Exclude<'Spartak' | 'Andrey', 'Andrey' | 'Misha'>;

// NonNullable - удаляет все null и undefined из типа
type NoyNull = NonNullable<string | number | null | undefined>;
