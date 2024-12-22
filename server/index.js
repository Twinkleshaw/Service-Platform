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
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:5173", // for local development
      process.env.CLIENT_URL, // your production frontend URL
    ];

    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed ? origin : false);
  },

  methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS", // Ensure OPTIONS is allowed for preflight
  allowedHeaders: "Content-Type, Authorization", // Add other headers as needed
  credentials: true, // Ensure credentials (cookies) are allowed
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
