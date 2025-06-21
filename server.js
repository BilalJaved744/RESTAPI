require("dotenv").config();
const express = require("express");
const { connectDB } = require("../restAPI/util/data");
const userRouter = require("../restAPI/userRouter")
const app = express();

const port  = process.env.PORT;
const host = process.env.HOST;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/api/v1/user", userRouter);


app.listen(port, host, () => {
  connectDB()
    .then(res => {
      console.log("DB Connected");
      console.log(`Server http://${host}:${port} is ready...`);
    })
    .catch(err => {
      console.log("DB Connection Error:", err.message);
    });
});
