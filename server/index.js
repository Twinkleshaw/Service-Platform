require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const path = require("path");
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: "GET, POST, PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.use("/api/auth", authRouter);
app.use("/api/contactForm", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`);
  });
});
