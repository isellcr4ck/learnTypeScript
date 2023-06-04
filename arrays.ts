// let array: string[] - для создания массива из строк // Также можно указать let array: Array<string>
// const number: ReadonlyArray<number> - неизменяемый массив

let array: string[];
array = ['1', '2'];

const number: ReadonlyArray<number> = [0, 1, 2, 3];

type TypeArray = [number, string, null]; // Пример картежа
const newArray: TypeArray = [1, '2', null]; // Если не указать один из параметров или указать неверныый тип, выдаст ошибку
