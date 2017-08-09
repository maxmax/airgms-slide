import {createStore} from "redux";

import Person from "./person";
import Animal from "./animal";
import Lion from "./lion";
import Template from "./template";
import Sub from "./sub";
import Bar from "./bar";

import {
  square,
  counterValue,
  resultValue,
  counterThree,
  isOutput,
  whatOutput,
  whatValue,
  sevenValue,
  eightValue,
  shouldToString,
  whatIs,
  whatIsOutput,
  twelveResult,
  whatExecuted,
  fourteenOutput,
  fifteenOutput,
  sixteenOutput,
  sumArguments,
  sumArgumentsSecond,
  eighteenth,
  nineteenth,
  twentieth,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirtyOutput,
  thirtyOne,
  thirtyTwo,
  thirtyThree,
  thirtyFour,
  thirtyFive} from "./base";

const resultColor = "background: green; color: white"
const errorColor = "background: red; color: white"

console.log("square:", square(11));

console.log("1. What is the value of counter after executing the following piece of code? :", counterValue(10));
console.log("2. What is the value of result? :", resultValue());
console.log("3. What is the value of result? :", counterThree());
console.log("4. What is the output? :", isOutput());
console.log("5. What is the output? :", whatOutput());
console.log("6. What is the value of a, b? :", sevenValue(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
console.log("7. What is the value of result? :", sevenValue());
console.log("8. What is the value of result? :", eightValue());
console.log("9. What should the toString function be?  to print 'I Amory Blaine am 102 years old.' :", shouldToString());
console.log("10. What is the value of result? :", whatIs());
console.log("11. What is the output? :", whatIsOutput());
console.log("12. What is the value of result? :", twelveResult());
console.log("13. What is the value of child.b after this piece of code is executed? :", whatExecuted());
console.log("14. What is the output? :", fourteenOutput());
console.log("15. What is the output? :", fifteenOutput());
console.log("16. What is the output? :", sixteenOutput());
console.log("%c 17. Complete the implementation of this method so that it returns the sum of its arguments. :", resultColor, sumArguments(1,2,3,4));
console.log("%c 17.2 sumArgumentsSecond. :", resultColor, sumArgumentsSecond(0,1,2,3,4));
console.log("18. What is the value of result? :", eighteenth());
console.log("19. What is the value of result? :", nineteenth());
console.log("%c 20. What is the output? :", errorColor, twentieth());
console.log("21. What is the value of results? :", twentyOne());
console.log("22. What is the output? :", twentyTwo());
console.log("23. What is the output? :", twentyThree());
console.log("24. What is the output? :", twentyFour());
console.log("25. What is the output? :", twentyFive());
console.log("26. What is the value of pie? :", twentySix());
console.log("27. What is the output? :", twentySeven());
console.log("28. What is the output? :", twentyEight());
console.log("29. What is the output? :", twentyNine());
console.log("30. What is the output? :", thirtyOutput());
console.log("31. What is the value of message? :", thirtyOne());
console.log("32. What is the value of matches? :", thirtyTwo());
console.log("%c 33. What is the output? :", errorColor, thirtyThree());
console.log("33. What is the output? :", thirtyFour());
console.log("35. What is the output? :", thirtyFive());

console.log("=====================//=====================");

//Show more

let person = new Person("Ram", "Kulkarni");
console.log("Person", person);
//console.log("Sub", Sub());

//Component
const intbar = document.querySelector('#actTest');
const see = document.querySelector('[data-role="see"]');
const mainbar = new Bar('ololo', intbar, see);
mainbar.speak();

//
let template = new Template();
template.speak(); // Animal makes a noise.

const animal = new Animal('Animal');
animal.speak(); // Animal makes a noise.
//
const lion = new Lion('Simba');
lion.speak(); // Simba makes a noise.

//def val
function point(x = 0, y = -1, isFlag = true){
  console.log(x,y, isFlag);
}

point() // def
point(0, 0) // 0 0 true
point(1, 2, false) // 0 0 false

//
const array1 = [2,100,1,6,43];
const array2 = ['a', 'b', 'c', 'd'];
const array3 = [false, true, null, undefined];
console.log([...array1, ...array2, ...array3]);

//tmp
const first = 'Max';
const last = 'Max';
console.log(`Your name is ${first} ${last}.`);

//dest
function margin() {
  const left=1, right=2, top=3, bottom=4;
  return { left, right, top, bottom };
}

const { left, bottom } = margin();

console.log("destructuring:", left, bottom);
//1 4

//promise
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 500);
  console.log( 'Promise activated' );
});

promise.then((result) => console.log(result));
//

//Parameters by default
let getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850, так как значение tax не задано

getFinalPrice(500, 0.2); // 600, значение tax по-умолчанию заменяется на 0.2
//

//Redux

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() =>
  console.log("subscribe:", store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

console.log("End tests!");
