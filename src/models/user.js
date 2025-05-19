const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    validator: {
      validate: (userName) => {
        return userName.length > 0;
      },
      message: "Name cannot be empty.",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validator: {
      validate: (userEmail) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          userEmail
        );
      },
      message: "Please enter a valid email address.",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validator: {
      validate: (userPassword) => {
        return /^(?=.*\d)(?=.*\W)(?=.*[A-Z]).{8,}$/.test(userPassword);
      },
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character other than _.",
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Transgender", "Other"],
  },
  // TODO: Add profilePhoto and coverPhoto fields here
  bio: {
    type: [String],
    default: [],
    required: true,
    validator: {
      validate: (userBio) => {
        return userBio.length <= 150;
      },
      message:
        "To make others know about you in quick time, please keep your bio under 150 characters.", // TODO: Add a better message
    },
  },
  highestQualification: {
    type: String,
    required: true,
    validator: {
      validate: (userQualification) => {
        return userQualification.length > 0;
      },
      message:
        "If we know about your qualification, we can help you in a better way to find your search.", // TODO: Add a better message
    },
    enum: [
      "10th",
      "12th",
      "Undergraduate",
      "Postgraduate",
      "Doctorate",
      "Other",
    ],
  },
  technicalSkills: {
    programmingLanguages: {
      type: [String],
      default: [],
      required: true,
      validator: {
        validate: (userProgrammingLanguages) => {
          return userProgrammingLanguages.length > 0;
        },
        message:
          "Please tell us about your programming languages, so that we can help you in a better way to find your search.", // TODO: Add a better message
      },
      enum: ["C", "C++", "Java", "Python", "JavaScript", "C#", "Go", "Other"],
    },
    library: {
      type: [String],
      default: [],
      enum: ["React", "JQuery", "NumPy", "request", "Other"],
    },
    framework: {
      type: [String],
      default: [],
      enum: ["Angular", "Django", "Ruby", ".NET", "Other"],
    },
    database: {
      type: [String],
      default: [],
      enum: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Oracle", "Other"],
    },
    operatingSystem: {
      computerOperatingSystem: {
        type: [String],
        default: [],
        enum: ["Windows", "Linux", "MacOS", "Other"],
      },
      mobileOperatingSystem: {
        type: [String],
        default: [],
        enum: ["Android", "iOS", "Other"],
      },
      serverOperatingSystem: {
        type: [String],
        default: [],
        enum: [
          "Windows Server",
          "Linux Server",
          "mac OS Server",
          "Unix",
          "Other",
        ],
      },
      otherOperatingSystem: {
        type: [String],
      },
    },
    versionControl: {
      type: [String],
      default: [],
      enum: ["Git", "Github", "GitLab", "Bitbucket", "Other"],
    },
    testing: {
      type: [String],
      default: [],
      enum: ["Selenium", "JUnit", "TestNG", "Other"],
    },
    others: {
      type: [String],
    },
  },
  softSkills: {
    type: [String],
    default: [],
    enum: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Creativity",
      "Critical Thinking",
      "Interpersonal Skills",
      "Leadership",
      "Work Ethic",
      "Attention to Detail",
      "Other",
    ],
  },
  workExperience: {
    type: [String],
    enum: [
      "Internship",
      "Fresher",
      "1-2 Years",
      "2-3 Years",
      "3-4 Years",
      "4-5 Years",
      "5+ Years",
      "Other",
    ],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
