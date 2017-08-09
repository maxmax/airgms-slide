//base tests
export function square(x = 1) {
  return x * x;
}

//1. What is the value of counter after executing the following piece of code?
export function counterValue(counter = 10) {
  for (var i = 1; i <= 3; i++) {
    counter = counter + i;
  }
  return counter;
}

//2. What is the value of result?
export function resultValue() {
  let person = {
    name: "Amory Blaine",
    age: 102
  };
  var result = "";
  for (var property_name in person) {
    result = result + property_name;
  }
  return result;
}

//3. What is the value of result?
export function counterThree() {
  var result = "";
  eval("result = 'apple' + ' ' + 'pie'");
  return result;
}

//4. What is the output?
export function isOutput() {
  return "isOutput:", typeof(undefined), "isOutput:", typeof(NaN);
}

//5. What is the output?
export function whatOutput() {
  var queue = [];
  queue.push("first");
  queue.push("second");
  queue.unshift("third");
  return queue.shift(), queue.shift();
}

//6. What is the value of a, b?
export function whatValue(daysOfWeek = []) {
  var a = daysOfWeek.splice(0 , 5);
  var b = daysOfWeek;
  return "a", a, "b", b, "daysOfWeek", daysOfWeek;
}

//7. What is the value of result?
export function sevenValue() {
  var favouriteThings = ["cellar door", true, 42, 10];
  var result = favouriteThings[0] + favouriteThings[1] + favouriteThings[3] + favouriteThings[2];
  return result;
}

//8. What is the value of result?
export function eightValue(empty_object = {}, result = false) {
  if(typeof(empty_object) === "object") {
    result = true;
  }
  return result;
}

//9. What should the toString function be?  to print "I Amory Blaine am 102 years old."
export function shouldToString() {
  var person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() { return }
  };
  return person;
}

//10. What is the value of result?
export function whatIs() {
  var result = null || "a value";
  return result;
}

//11. What is the output?
export function whatIsOutput() {
  return null == undefined;
}

//12. What is the value of result?
export function twelveResult() {
  var result = 0;
  switch (2) {
    case 1:
      result = 1;
    	break;
    case 1+1:
      result = 2;
      break;
  }
  return result;
}

//13. What is the value of child.b after this piece of code is executed?
export function whatExecuted() {
  var father = {
    b: 3,
    c: 4
  };
  var child = Object.create(father);
  child.a = 1;
  child.b = 2;
  delete child.b;
  return father;
}

//14. What is the output?
export function fourteenOutput() {
  var father = {
    b: 3,
    c: 4
  };
  var child = Object.create(father);
  child.a = 1;
  child.b = 2;
  return child.hasOwnProperty('c');
}

//15. What is the output? -
export function fifteenOutput() {
  var Mammal = function(name) {
    this.name = name;
  }
  Mammal.prototype = {
    sayHi: function() {
      return "Hello, my name is " + this.name;
    }
  }
  var sam  = new Mammal("xyz");
  //console.log(sam.sayHi());
  return sam.sayHi();

}

//16. What is the output?
export function sixteenOutput() {
  function A() {
    this.aprop = "A";
  };
  function B() {
    this.bprop = "B";
  };
  B.prototype = new A();
  var a = new A();
  var b = new B();
  return typeof(a.constructor), a.constructor.name, b.constructor.name;
}


//17. Complete the implementation of this method so that it returns the sum of its arguments.
//var add = function() {
//  var total = 0;
//  for(var i = 0; i < arguments.length; i++) {
//
//  }
//};
//add(1,2,3,4);
//Result

export function sumArguments(total = 0) {
  var counter = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = counter + i;
  }

  return total;
}

//17.2. second
export function sumArgumentsSecond(total = 0) {
  //var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total = i;
  }

  return total;
}

//18. What is the value of result?
export function eighteenth() {
  var invokee = function( message ){
      return this + " " + message;
  };
  var result = invokee.call("a", "z");

  return result;
}

//19. What is the value of result?
export function nineteenth() {
  var invokee = function( message1, message2 ){
    return this + message1 + message2;
  };
  var result = invokee.apply("I am", ["a","z"]);

  return result;
}

//20. What is the output?
export function twentieth(globalName = "'error globalName'") {
  var person = {
  	globalName: 'bob',
  	intro: function () {
      return "Hello, my name is " + globalName;
  	}
  }
  var alias = person.intro;
  window.globalName = 'Peter';
  return alias();
}

//21. What is the value of results?
export function twentyOne() {
  var numberFinder = /(\d).*(\d)/;
  var results = numberFinder.exec("what if 6 turned out to be 9?");
  return results;
}

//22. What is the output?
export function twentyTwo() {
  var arr = [];
  arr[0] = 1;
  arr[1] = 2;
  arr.foo = 3;
  return arr.length;
}

//23. What is the output?
export function twentyThree() {
  var x = [1, 2, 3, 4].map(function(x, y) { return x + y } );
  return x;
}

//24. What is the output?
export function twentyFour() {
  return NaN === NaN;
}

//25. What is the output?
export function twentyFive() {
  String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str = '';
    for (var i = 0; i < times; i++) {
      str += this;
    }
    return str;
  };
  return ' hello'.repeatify(3);
}

//26. What is the value of pie?
export function twentySix() {
  var pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) {
    var map = {'6': 'six','9': 'nine'};
    return map[number];
  });
  return pie;
}

//27. What is the output?
export function twentySeven(outerVariable = "error", innerVariable = "error") {
  var outerVariable = "outer";
  (function() {
      var innerVariable = "inner";
  })();
  return outerVariable + " and " + innerVariable;
}

//28. What is the output?
export function twentyEight() {
  var Mammal = function(name) {
      this.name = name;
  }
  Mammal.prototype = {
      sayHi: function() {
          return "Hello, my name is " + this.name;
      }
  }
  Mammal.prototype.favouriteSaying = function() {
      return this.name + "'s favourite saying is " + this.sayHi();
  }
  var sam  = new Mammal("Bobby");
  //console.log(sam.sayHi());
  return sam.sayHi();
}

//29. What is the output?
export function twentyNine() {
  function A() {
    this.aprop = "A";
  };
  function B() {
    this.bprop = "B";
  };
  B.prototype = new A();
  var b = new B();
  var keys = [],
      newKeys = [];
  for (var propertyName in b) {
    keys.push(propertyName);
    if (b.hasOwnProperty(propertyName)) {
      newKeys.push(propertyName);
    }
  }
  return keys.length + " | " + keys + " | " + newKeys.length + " | " + newKeys;
}

//30. What is the output?
export function thirtyOutput() {
  var publicValue = "shared";
  (function(pv) {
      var secretValue = "password";
      console.log("thirtyOutput pv:", pv);
      console.log("thirtyOutput pv:", typeof(secretValue));
      console.log("thirtyOutput pv:", typeof(publicValue));
  })(publicValue);
  return publicValue;
}

//31. What is the value of message?
export function thirtyOne() {
  var person = {
    name: 'bob',
    intro: function () {
      return "Hello, my name is " + this.name;
    }
  }
  var message = person.intro.call({name: "Frank"});
  return message;
}

//32. What is the value of matches?
export function thirtyTwo() {
  var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
  return matches;
}

//33. What is the output?
export function thirtyThree() {
  var fullname = 'xyz';
  var obj = {
    fullname: 'abc',
    prop: {
    	fullname: 'qwerty',
      getFullname: function() {
        return fullname;
      }
    }
  };
  var test = obj.prop.getFullname;
  return test() + "or this.fullname from obj undefined";
}

//34. What is the output?
export function thirtyFour() {
  var Mammal = function(name) {
  	this.name = name;
  }
  Mammal.prototype = {
  	sayHi: function() {
  		return "Hello, my name is " + this.name;
  	}
  }
  function extend(child, supertype){
  	child.prototype = supertype.prototype;
  }
  function Bat(name, wingspan) {
  	Mammal.call(this, name);
  	this.wingspan = wingspan;
  }
  extend(Bat, Mammal);
  var lenny = new Bat("Lenny", "1.5m");
  return lenny.sayHi() + " | " + lenny.wingspan;
}

//35. What is the output?
export function thirtyFive() {
  var a = null;
  return typeof a === "object";
}
