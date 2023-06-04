type TypeChannelReturn = {
  name: string;
};

type TypeChannelFunction = (name: string) => TypeChannelReturn;

function getChannel(name: string = 'Spartak'): TypeChannelReturn {
  return { name };
}

//
const getChannelFunc = (name: string = 'Spartak'): TypeChannelReturn => {
  return { name };
};

// Или так

const getChannelName: TypeChannelFunction = (name) => {
  return { name };
};
//

// Rest
const getNumbers = (...numbers: number[]) => {
  return numbers;
};

// Перегрузки
function getCar(name: string): string;
function getCar(name: string, price: number): string;

function getCar(name: string, price?: number): string {
  return price ? `Название ${name}, Цена ${price}` : 'Название ${name}';
}
