// admin auth
const adminAuth = (req, res, next) => {
  const token = 123;

  console.log("Admin auth being checked!!");

  if (token === 123) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { adminAuth };
