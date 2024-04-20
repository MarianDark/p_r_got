import { Schema, model } from "mongoose";

const characterSchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  age: { type: Number },
  weight: { type: Number },
  description: { type: String, required: true },
});

const Character = model("Character", characterSchema);

export default Character;
