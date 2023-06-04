const inputElement = document.querySelector('input');
const value1 = (<HTMLInputElement>inputElement).value;

const getLength = (text: string | null) => {
  return text!.length;
};
