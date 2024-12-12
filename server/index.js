require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const path = require("path");
const corsOptions = {
  origin: [
    "https://service-platform.vercel.app/", // Live frontend
    "http://localhost:5173", // Local development
  ],
  methods: "GET, POST, PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use("/api/auth", authRouter);
app.use("/api/contactForm", contactRouter);
app.use("/api/data", serviceRouter);
app.use(errorMiddleware);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/dist", "index.html"));
});
const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`);
  });
});
