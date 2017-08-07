import {createStore} from "redux";

import Person from "./person";
import Animal from "./animal";
import Lion from "./lion";
import Template from "./template";
import Sub from "./sub";

let person = new Person("Ram", "Kulkarni");
console.log("Person", person);

//console.log("Sub", Sub());

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

//Parameters by default
let getFinalPrice = (price, tax = 0.7) => price + price * tax;
getFinalPrice(500); // 850, так как значение tax не задано

getFinalPrice(500, 0.2); // 600, значение tax по-умолчанию заменяется на 0.2

//Redux
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

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

//console.log("store", store.getState());

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

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

//Events

//Atr
var app = document.getElementById("root");
//const status = document.body.getAttribute('role')
console.log("status atr", app);

document.getElementById('testButton').onclick = function() {
  this.classList.toggle('active');
  store.dispatch({ type: 'INCREMENT' });
}

console.log("End tests!");
