// literals
// this-context

const user ={
    username:"Rinju",
    password:"1234",
    getUserDetails:function(){
        console.log(`Username is ${this.username} and password is ${this.password}`);
       console.log(this);
    }
}
// console.log(user.getUserDetails());



//constructor function
function User(username,Logincount,isloggedin){
    this.username=username;
    this.Logincount=Logincount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
         console.log(`Hello ${this.username}`);
    }
}
const userone=  User("Rinju",1,true);
console.log(userone); //undefined, because we have not used new keyword
const usertwo= new User("Rinju",2,true);
console.log(usertwo); 
usertwo.greeting();
console.log(usertwo.constructor);  // op const userone=  User("Rinju",1,true);



