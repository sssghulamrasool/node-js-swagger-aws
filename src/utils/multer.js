const multer = require("multer");
const AppError = require("./app-error");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const typeSplit = file.originalname.split(".");
    const fileType = typeSplit[typeSplit.length - 1];
    const fileName = file.originalname.split(`.${fileType}`)[0];
    const random = Date.now() + Math.round(Math.random() * 1e9);
    const fullName = `${fileName}-${random}.${fileType}`;
    const filename = fullName.replace(/ /g, "-").toLowerCase();
    cb(null, filename);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Invalid format please use image format", 400));
  }
};

exports.upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, /// approximate 5 MB,
  },
});
