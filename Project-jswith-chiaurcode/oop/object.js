//  ProtoTypes ===Js default behaviours
//  array ---string---function--object--null

function multiplyby5(num){
    return num*5;   

}
// console.log(multiplyby5(5));
// console.log(multiplyby5.power=2);
// console.log(multiplyby5.prototype); 

function createUser(username,age){
    this.username=username;
    this.age=age;
}

createUser.prototype.increment=function(){
    this.age++;
}
createUser.prototype.printMe=function(){
    console.log(`Username is ${this.username} and age is ${this.age}`);
}
const userone=new createUser("Chiaur",24);
userone.printMe();
