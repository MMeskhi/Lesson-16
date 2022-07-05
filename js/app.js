//1
// const number = prompt("Enter a number: ");

// if (number % 2 == 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

const isEven = (number) => {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(13));

//2
const length = 10;
const width = 20;
function area(length, width) {
  return length * width;
}
console.log(
  `სიგრძე = ${length} სიგანე = ${width}
მართკუთხედის ფართობი = ${area(length, width)}`
);

//3
const squareLength = 10;
function square(squareLength) {
  return squareLength ** 2;
}
console.log(
  `კვადრატის გვერდების სიგრძე = ${squareLength}
კვადრატის ფართობი = ${square(squareLength)}`
);

//4
function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNum(100));

//5
function getCurrencySymbolFromCode(currency) {
  if (currency == "GEL") {
    return "ლ";
  } else if (currency == "USD") {
    return "$";
  } else if (currency == "EUR") {
    return "€";
  }
}
console.log(getCurrencySymbolFromCode("USD"));

//6
const people = [
  { name: "Mike", age: 24 },
  { name: "Ioane", age: 22 },
  { name: "Nino", age: 21 },
  { name: "Gvantsa", age: 23 },
  { name: "Ryan Gosling", age: 41 },
];

let findTheYoungest = function (people) {
  const Youngest = people.sort((a, b) => (a.age > b.age ? 1 : -1));
  return Youngest[0];
};
console.log(findTheYoungest(people));
