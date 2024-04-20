import { Schema, model } from "mongoose";
import { hashSync } from "bcrypt";

import { validationPassword, validationEmail } from "../../utils/validate";

const userSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    // eslint-disable-next-line no-undef
    return next(setError("404", "The password does not meet the requirements"));
  }
  if (!validationEmail(this.email)) {
    // eslint-disable-next-line no-undef
    return next(setError("404", "The email is not correct"));
  }

  this.password = hashSync(this.password, 10);
  next();
});

const User = model("User", userSchema);
export default User;
