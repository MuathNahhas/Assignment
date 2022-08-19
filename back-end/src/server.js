const express = require("express");
require("../src/db/databasePg");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
const userRouter = require("./routers/user/user.router");

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON ${PORT} `);
});
