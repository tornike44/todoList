const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/error");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/task", require("./routes/task"));

app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port: ${port}`);
});
