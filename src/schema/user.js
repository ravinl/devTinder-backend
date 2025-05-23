const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: [
      {
        validator: (name) => {
          return name.length > 0;
        },
        message: "Name cannot be empty",
      },
    ],
  },
  email: {
    type: String,
    required: [true, "Email is needed for further communication"],
    unique: true,
    lowercase: true,
    validate: [
      {
        validator: (email) => {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    ],
  },
  password: {
    type: String,
    required: true,
    validate: [
      {
        validator: (password) => {
          return /^(?=.*\W)(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/.test(password);
        },
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.",
      },
    ],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Transgender", "Other"],
    validate: [
      {
        validator: (gender) => {
          return ["Male", "Female", "Transgender", "Other"].includes(gender);
        },
        message: "Please select a valid gender.",
      },
    ],
  },
  skills: {
    type: [String],
  },
  highestQualification: {
    type: String,
    enum: ["10th", "12th", "Undergraduate", "Postgraduate", "Doctorate"],
    validate: [
      {
        validator: (highestQualification) => {
          return [
            "10th",
            "12th",
            "Undergraduate",
            "Postgraduate",
            "Doctorate",
          ].includes(highestQualification);
        },
        message: "Please select a valid qualification.",
      },
    ],
  },
  about: {
    type: String,
    validate: [
      {
        validator: (about) => {
          return about.length <= 500;
        },
        message: "About section must be less than 500 characters",
      },
    ],
    default: "Hey there, I am using DevTinder",
  },
  heading: {
    type: String,
    validate: [
      {
        validator: (heading) => {
          return heading.length <= 100;
        },
        message: "Heading must be less than 100 characters",
      },
    ],
  },
  location: [
    {
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      pinCode: {
        type: String,
        validate: [
          {
            validator: (code) => {
              return /^[1-9][0-9]{5,6}$/.test(code);
            },
            message: "Please enter a valid pinCode",
          },
        ],
      },
    },
  ],
});

module.exports = { userSchema };
