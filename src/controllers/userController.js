const User = require("../models/userModel");
const AppError = require("../utils/app-error");
const tryCatchHandler = require("../utils/try-catch");

module.exports = {
  getAllUsers: tryCatchHandler(async (req, res, next) => {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Users successfully",
      data: {
        length: users.length,
        users,
      },
    });
  }),

  getUserById: tryCatchHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "User get successfully",
      data: {
        user,
      },
    });
  }),

  createUser: tryCatchHandler(async (req, res, next) => {
    const { firstName, lastName, email, phone, username, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !username || !password) {
      let message = `User firstName  lastName  email  phone  username  password `;
      return next(new AppError(message, 400));
    }
    const user = new User(req.body);
    const newUser = await user.save();
    return res.json({
      success: true,
      message: "User add successfully",
      data: {
        user: newUser,
      },
    });
  }),

  updateUser: tryCatchHandler(async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return next(new AppError("User not found", 404));
    }
    return res.json({
      success: true,
      message: "User updated successfully",
      data: {
        user: updatedUser,
      },
    });
  }),

  deleteUser: tryCatchHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    return res.json({
      success: true,
      message: "User deleted successfully",
      data: null,
    });
  }),
};
