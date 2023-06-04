interface IUser extends IUserAge {
  name: string;
  email: string;
}

interface IUserAge {
  age: number;
}

type TypePerson = {
  age: number;
};

type TypeUser = {
  name: string;
  email: string;
} & TypePerson; // Также можно использовать или |

const user: IUser = {
  name: 'Spartak',
  email: 'isellcr4ckk@yandex.ru',
  age: 20,
};

// Разница между типами и интерфейсами субъктивна , можно пользоваться исходя из нужд и предпочтений
