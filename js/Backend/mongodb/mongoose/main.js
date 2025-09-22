// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import {  Todo } from "./models/Todo.js";

async function connectDB() {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
}

connectDB();
const app = express()
const port = 3000

app.get('/', (req, res) => {

    const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
    todo.save() 
    res.send('Hello World!')
})
app.get("/todo", async (req, res) => {
  try {
    const todo = await Todo.findOne({}); // Fetch one document
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }
    console.log(todo);
    if(!todo){ res.send("No record found in the database") }
    res.json({ title: todo.title, desc: todo.desc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})