const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "username must be min 3" })
    .max(255),
  email: z
    .string({ required_error: "Email is required" }) // Corrected error message
    .trim()
    .email({ message: "Invalid email address" }) // Corrected error message
    .min(3, { message: "email must be min 3" })
    .max(255),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be of at least 6 characters" })
    .max(255),
  phone: z
    .string({ required_error: "Phone number is required" }) // Changed to string validation
    .min(10, { message: "Phone must be of at least 10 digits" }), // Changed to string validation
});

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const extraDetails = err.errors[0].message;
    const message = "Fill the inputs properly";
    // console.log(err);
    const error = { message, status, extraDetails };
    next(error);
    // res.json({ msg: message }); Sending validation errors to the client
  }
};

module.exports = { signUpSchema, validate }; // Exporting both signUpSchema and validate functions
