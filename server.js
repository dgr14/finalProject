const express = require("express")
const app = express();
const expressJwt = require("express-jwt");
require("dotenv").config();
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7000
const path = require("path")
const secret = process.env.SECRET || "some secret passphrase here for local development"

// Middlewares for every request
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))



// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/questions",
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

// Routes - Endpoints
app.use("/api", expressJwt({ secret: process.env.SECRET }))
app.use("/auth", require('./routes/authRouter'))
app.use(("/api/questions"), require('./routes/questionRouter'))
// is this how you route data for the individual questions?

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
})

// app.use("/auth", require("./routes/authRouter"));
// //Make the app use the express-jwt authentication middleware on anything starting with "/api"
// app.use("/api", expressJwt({secret: process.env.SECRET}));

// // Add '/api' before your existing 'app.use' of the parent-question routes. This way, it must go through the express-jwt middleware before accessing any to the parent-question routes, making sure we can reference the "currently logged-in user" in our todo routes
// app.use("/api/todo", require("./routes/questionRouter"))

// app.use((err, req, res, next) => {
//     console.log(err);
//     if (err.name === "UnauthorizedError") {
//         // express-kwt gives the 401 status to the err object for us
//         res.status(err.status)
//     }
//     return res.send({ message: err.message });
// });

// app.listen(5000, () => {
//     console.log(`server is running!`)
// })