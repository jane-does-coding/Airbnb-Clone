const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
