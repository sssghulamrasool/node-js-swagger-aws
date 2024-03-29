const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: null,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "male",
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    default: null,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    default: null,
  },
  bloodGroup: {
    type: String,
    default: null,
  },
  address: {
    address: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    coordinates: {
      lat: {
        type: Number,
        default: null,
      },
      lng: {
        type: Number,
        default: null,
      },
    },
    postalCode: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
