import mongoose from "mongoose";

const dogSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  needsABrush: Boolean, 
});

const Dog = mongoose.model("Dog", dogSchema);

export default Dog;