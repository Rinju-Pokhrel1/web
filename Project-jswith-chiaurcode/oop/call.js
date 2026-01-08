let setUser=function (username){
    this.username=username,
    console.log(`Username is set to ${this.username}`);
}
let createUser=function(username,email,password){
    // setUser(username); //username is not set because setUser is called without context.
    setUser.call(this,username); //username is set because setUser is called with context of createUser object.
    this.email=email;
    this.password=password; 


}
let userone=new createUser("Chiaur","chiaur@gmail.com","12345");
console.log(userone); 