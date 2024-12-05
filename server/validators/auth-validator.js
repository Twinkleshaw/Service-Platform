const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name atleast of 3 characters" })
    .max(255, { message: "name not more 255 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email atleast of 3 characters" })
    .max(255, { message: "email not more 255 characters" }),
  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number atleast of 10 characters" })
    .max(20, { message: "phone number not more 20 characters" }),
  password: z
    .string({ required_error: "name is required" })
    .trim()
    .min(6, { message: "password atleast of 6 characters" })
    .max(20, { message: "password not more 20 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email atleast of 3 characters" })
    .max(255, { message: "email not more 255 characters" }),
  password: z
    .string({ required_error: "name is required" })
    .trim()
    .min(6, { message: "password atleast of 6 characters" })
    .max(20, { message: "password not more 20 characters" }),
});

module.exports = { signupSchema, loginSchema };
