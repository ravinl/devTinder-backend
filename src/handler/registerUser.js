const { userModel } = require("../model/user");

const registerUserHandler = async (req, res) => {
  try {
    userName = req.body.name;
    userEmail = req.body.email;
    userPassword = req.body.password;
    userGender = req.body.gender;
    userSkills = req.body.skills;
    userQualification = req.body.highestQualification;
    userExperience = req.body.experience;

    const user = new userModel({
      name: userName,
      email: userEmail,
      password: userPassword,
      gender: userGender,
      skills: userSkills,
      highestQualification: userQualification,
      experience: userExperience,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: `${user.name} welcome to DevTinder`,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "User Registration Failed",
    });
  }
};

module.exports = { registerUserHandler };
