require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contactForm", contactRouter);
app.use(errorMiddleware);
const PORT = 3000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`);
  });
});
