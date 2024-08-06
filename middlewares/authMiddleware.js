const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the authorization header is present
    if (!req.headers["authorization"]) {
      return res.status(401).send({
        success: false,
        message: "No token provided",
      });
    }

    const token = req.headers["authorization"].split(" ")[1];

    // Check if the token is provided
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "No token provided",
      });
    }

    // Verify the token
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed",
      error,
    });
  }
};
