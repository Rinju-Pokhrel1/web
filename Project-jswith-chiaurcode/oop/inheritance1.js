class user{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
}
class Admin extends user{
    constructor(name, age, password){
        super(name, age);
        this.password=password;
    }
    extractPassword(){
        return `${this.password}abc`;
    }
}
 const chai =new Admin("Rinju",20 ,   "123");
  console.log(chai.extractPassword());
// const chai =new Admin("Chiaur",25,"1234");