import Animal from "./animal";

class Lion extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' roars ');
  }
}

export default Lion;
