const userValidation = require("../validation/user.validation");

exports.userSchemaValidationRegister = (req, res, next) => {
  try {
    const { error, value } = userValidation.userValidationRegister.validate(
      req.body,
      { abortEarly: false },
    );
    if (error) {
      return res.status(400).json({ Message: "Invalid inpute", error });
    }
    req.body = value;
    // console.log("hello");

    next();
  } catch (error) {
    next(error);
  }
};

exports.userSchemaValidationLogin = (req, res, next) => {
  try {
    const { error, value } = userValidation.userValidationlogin.validate(
      req.body,
      { abortEarly: false },
    );
    if (error) {
      return res.status(400).json({ Message: "Invalid inpute", error });
    }
    req.body = value;
    next();
  } catch (error) {
    next(error);
  }
};
