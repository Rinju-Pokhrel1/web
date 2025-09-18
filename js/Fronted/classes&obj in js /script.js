let obj = {
    a: 1,
    b: 'Rinju',
};
console.log(obj);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};
rabbit.__proto__=animal; //sets rabbit prototype to animal

//create classes

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Animal object created...");
    }

    eats() {
        console.log("eating...");
    }

    jumps() {
        console.log("jumping...");
    }
}
//extends include all the function of Animal class
class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion object created...");
    }

}
//instance of Animal
let a = new Animal("Bunny");
console.log(a);  // Animal {}

let l= new Lion("Shera");
console.log(l); //Lion {}
// Calling methods
a.eats();   // eating...
a.jumps();  // jumping...