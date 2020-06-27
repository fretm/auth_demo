const route = require("express").Router();

const mycont = require("../controller/my");

const { protect, authorize } = require("../auth/my");

route.post("/login", mycont.login);

route.get("/photos", protect, authorize("user"), mycont.getuser);

route.get("/banknumber", protect, authorize("admin"), mycont.getadmin);

module.exports = route;
