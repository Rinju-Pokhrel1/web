import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: false },
  desc: { type: String, required: false },
  isDone: { type: Boolean, default: false },
  days: { type: Number, default: 0 }
});

export const Todo = mongoose.model("Todo", TodoSchema);
