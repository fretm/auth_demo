let jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({ status: "no headers supplied" });
  }
  let token = req.headers.authorization;
  try {
    let decoded = jwt.verify(token, "secret");
    let user = await User.findOne({ _id: decoded.id });
    if (!user) {
      return res.json({ success: false, message: "not authorized" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.json({ success: false, message: "not authorized" });
  }
};

exports.authorize = (...role) => {
  return (req, res, next) => {
    if (role.includes(req.user.role)) {
      next();
    } else {
      return res.json({ success: false, message: "not authorized role" });
    }
  };
};
