let heros=["Thor","Spiderman","Ironman"];

// Create a prototype object
let heropowers={
    thor:"Thunder",
    spiderman:"Web",
    ironman:"Armor suit",

    getheropower:function(){
      console.log(`power of heros is ${this.heropowers[this.name]}`);
    }

}
// Set the prototype of heros array to heropowers object
Array.prototype.sayhi=function(){
    console.log(`Hello from array prototype`);
}
Object.prototype.Rinju=function(){
    console.log(`I am Rinju, I have the power of kindness`);
} 
//both the obj and array can access the Rinju method
heropowers.Rinju();
heros.Rinju();

// Access the sayhi method from heros array
heros.sayhi(); //array ma matra use grnu milxa 
heropowers.sayhi();//object ma use grnu mildaina