const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    console.log(req.body);
    next();
  } catch (err) {
    const message = "Fill your input properly";
    const extraDetails = err.issues[0].message;
    const error = {
      message,
      extraDetails,
    };
    // res.status(400).json({ message });
    next(error);
  }
};
module.exports = validate;
