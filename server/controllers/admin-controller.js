const User = require("../models/user_model");
const Contact = require("../models/conatct-model");
const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "no user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, { password: 0 });
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "no contcts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUser, getAllContact };
