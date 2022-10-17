const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors=require('cors')

dotenv.config();

//Import Routes
const UserRouter=require('./router/userRouter')
//Route middlewares
app.use("/api/users",UserRouter)
//middlewares
app.use(express.json());
app.use(cors());
//connect to db
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>console.log("connect to db"));

app.listen(4040, () => console.log("server up and runing on port 4040!"));
