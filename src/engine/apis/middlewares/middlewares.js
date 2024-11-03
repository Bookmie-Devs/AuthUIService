module.exports.apiPublicKeyMiddleware = async function (req, res, next) {
  //   console.log(req.headers);
  //   console.log(req.headers["public_auth_key"]);
  const apiPublicKey = req.headers["public_auth_key"];
  if (!apiPublicKey) {
    return res.status(400).json({
      status: "failed",
      message: "No public api key supplied",
      data: null,
    });
  }
  return next();
};
