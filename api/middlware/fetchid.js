const jwt = require("jsonwebtoken");
var JWT_SECRET = "youk$t^a&pxg%l";

const fetchid = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "error" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    res.send(data)
    console.log(data)
    next();
  } catch (error) {
    res.status(401).send({ error: "error" });
  }
};
module.exports = fetchid;
