const express = require("express");
const userRoutes = require("./router/userRoutes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api", userRoutes);

//
const connectMongoDB = async () => {
  await mongoose.connect(
    "mongodb+srv://toko:toko@cluster0.fd476p2.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("connected to database");
};

connectMongoDB();

app.listen(5000, async () => {
  console.log("listening to sever on port 5000");
});
