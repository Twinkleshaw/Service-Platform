const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res.status(403).json({ msg: "access denied" });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = adminMiddleware;
