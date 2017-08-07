class Animal {
    constructor (name = 'Empty') {
      this.name = name;
    }

    speak() {
      console.log(this.name + ' makes a noise.');
    }
}

export default Animal;
