const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (emailByUser) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]\.[a-zA-Z]{2,}$/.test(
          emailByUser
        );
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (passByUser) {
        return /^(?=.*\d)(?=.*\W)(?=.*[A-Z])([A-Za-zA-Z\d\W]{8,})$/.test(
          passByUser
        );
      },
      message:
        "Password must contains at least one uppercase letter, one number, one special symbol other than _ and must be of 8 or more characters",
    },
  },
  DOB: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Transgender", "Rather not say"],
  },
  highestQualification: {
    type: String,
    enum: ["10th", "12th", "Graduation", "Post Graduation", "PhD", "Other"],
    required: true,
  },
  skills: {
    techSkills: {
      programmingLanguages: {
        type: [String],
        required: true,
        enum: [
          "C",
          "JavaScript",
          "Python",
          "Java",
          "C++",
          "C#",
          "Ruby",
          "PHP",
          "Swift",
          "Go",
          "Kotlin",
          "Rust",
          "Dart",
          "TypeScript",
          "Other",
        ],
      },
      youAre: {
        type: [String],
        required: true,
        enum: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "Data Scientist",
          "Machine Learning Engineer",
          "DevOps Engineer",
          "Cloud Engineer",
          "Mobile App Developer",
          "Game Developer",
          "Other",
        ],
      },
    },
    softSkills: {
      type: [String],
      enum: [
        "Good Communicator",
        "Team Player",
        "Problem Solver",
        "Adaptable",
        "Creative",
        "Other",
      ],
    },
  },
  experience: {
    type: [String],
    enum: [
      "Fresher",
      "Less than 1 year",
      "1-2 years",
      "2-3 years",
      "3-4 years",
      "4-5 years",
      "5+ years",
    ],
  },
  lookingFor: {
    type: String,
    enum: [
      "Coding Partner",
      "Mentor",
      "Project Collaborator",
      "Employer",
      "Employee",
      "Other",
    ],
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = {userModel};
