//ESC

class Person {
    constructor(name, age,password) {
        this.name = name;
        this.age = age;
        this.password=password;
    }
    extractPassword(){
        return `${this.password}abc`;
    }
   
}
  const newPerson = new Person("Rinju",20,"123");
    console.log(newPerson.extractPassword());