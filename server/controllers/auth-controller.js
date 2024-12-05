const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
// home controller
const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home page");
  } catch (error) {
    console.log(error);
  }
};
// registration controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "user already exists" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      message: "registered successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

// login controller
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      // res.status(401).send("Invalid credentials");
      const error = {
        message: "Invalid credentials",
        extraDetails: "Fill your input properly",
      };
      return next(error);
    }
    const isValidPassword = await userExist.comparePassword(password);
    if (!isValidPassword) {
      // return res.status(401).json({ message: "Invalid credentials" });
      const error = {
        message: "Invalid credentials",
        extraDetails: "Fill your input properly",
      };
      return next(error);
    }
    res.status(200).send({
      message: "successful login",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { home, register, login };
