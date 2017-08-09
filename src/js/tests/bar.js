import Animal from "./animal";

class Bar {
    constructor (name = 'Empty', ind = null) {
      this.name = name;
      this.ind = ind;
    }

    speak() {
      const inname = this.name;
      if (this.ind){
        this.ind.addEventListener('click', function() {
          const animal = new Animal(inname);
          animal.speak();
        });
      }
    }
}

export default Bar;
