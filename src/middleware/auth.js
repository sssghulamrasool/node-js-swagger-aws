exports.auth = (req, res, next) => {
  return res.status(403).json({
    success: true,
    message: "Authentication failed",
  });
};
