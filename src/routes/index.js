const express = require("express");
const { imageUpload } = require("../controllers/factoryController");
const { upload } = require("../utils/multer");
const router = express.Router();



router.route("/").get((req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Swagger API on AWS!",
    data: {
      api_docs: "/api-docs",
    },
  });
});

router.route("/image").post(upload.single("image"), imageUpload);

module.exports = router;
