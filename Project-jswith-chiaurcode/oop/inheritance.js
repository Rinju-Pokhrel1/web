let teacher={
    name:"Rinju",
    subject:"JavaScript",

}
let TeacherSupport={
    isavailable:true,
}

let TA={
    fulltime:true,
    __proto__:TeacherSupport, //inheritance
}

// Set the prototype of teacher object to TeacherSupport object
teacher.__proto__=TeacherSupport; //inheritance

// console.log(teacher.isavailable); //true
// console.log(TA.isavailable); //true 

//new method  --instead of __proto__ we use setPrototypeOf
Object.setPrototypeOf(teacher,TeacherSupport);
Object.setPrototypeOf(TA,TeacherSupport);

// console.log(teacher.isavailable);

// -----------------------------------------------------------------
let username="Rinju      ";
// console.log(username.Truelength);// here problem is undefined

// Create a prototype object for String
String.prototype.Truelength=function(){
   console.log(this.trim().length);
}
// username.Truelength(); 
"sidhibinnayek".Truelength();
