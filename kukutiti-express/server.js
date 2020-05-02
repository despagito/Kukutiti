// require("dotenv").config();
// const http = require("http"),
//     path = require("path"),
//     methods = require("methods"),
//     express = require("express"),
//     bodyParser = require("body-parser"),
//     session = require("express-session"),
//     cors = require("cors"),
//     passport = require("passport"),
//     mongoose = require("mongoose");


// // Global app object
// const app = express();


// // recognize the incoming Request Object as a JSON Object.
// app.use(express.json());


// // Connect to dababase
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// // once open, it's connected.
// db.once("open", () => console.log("Connected to Database"));


// // Use external routers
// const subscribersRouter = require("./routes/subscribers");
// app.use("/subscribers", subscribersRouter);


// // Start Server
// app.listen(3002, () => {
//   console.log("🔥 App is running.");
// });




