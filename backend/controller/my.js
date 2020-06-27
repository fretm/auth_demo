const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email, password: password });
    if (user) {
      const token = jwt.sign({ id: user._id }, "secret");
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false, message: "wrong password or email" });
    }
  } catch (err) {
    res.json({ status: err.message });
  }
};

exports.getuser = (req, res, next) => {
  res.json({ status: "from photo" });
};
exports.getadmin = (req, res, next) => {
  //admin

  res.json({ status: "from banknumber" });
};
