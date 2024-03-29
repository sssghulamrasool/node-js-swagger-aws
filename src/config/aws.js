const AWS_SDK = require("aws-sdk");

AWS_SDK.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS_SDK.S3();

module.exports = s3;

// const params = {
//   Bucket: process.env.AWS_BUCKET_NAME,
//   Key: 'my-image.png',
//   Body: imageBuffer,
//   ContentType: 'image/png',
// };

// s3.upload(params, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`Image uploaded successfully. URL: ${data.Location}`);
//   }
// });
