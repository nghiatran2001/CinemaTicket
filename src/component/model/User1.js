import mongoose from "mongoose";

const user1 = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
    phone: String,
    birthday: Date,
  },
  { timestamps: true }
);

export default mongoose.model("users", user1);
