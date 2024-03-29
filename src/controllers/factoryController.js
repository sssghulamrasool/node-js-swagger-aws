const s3 = require("../config/aws");
const tryCatchHandler = require("../utils/try-catch");

exports.imageUpload = tryCatchHandler(async (req, res, next) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.file.filename,
    Body: req.file.path,
    ContentType: req.file.mimetype,
  };

  // s3.upload(params, (err, data) => {
  //   console.log("error uploading image", err);
  //   console.log("data uploading image", data);
  // });
  // Key: 'image-1712668848372.png',
  let deleteParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "pexels-frans-van-heerden-631317.jpg",
  };
  s3.deleteObject(deleteParams, (error, data) => {
    console.log(error, data);
  });

  return res.status(200).json({
    success: true,
    message: "Upload Image Success",
    data: params,
  });
});
