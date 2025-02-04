const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PostSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

PostSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model("AdminLogin", PostSchema);
