type TypeUser = {
  name: string;
  age: number;
};

type TypeAddress = {
  city: string;
  country: string;
};

const user: TypeUser = {
  age: 21,
  name: 'Spartak',
};

const userAddress: TypeAddress = {
  city: 'Moscow',
  country: 'Russia',
};

let common: TypeUser & TypeAddress;

common = {
  ...user,
  ...userAddress,
};
