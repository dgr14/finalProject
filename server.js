const express = require("express")
const app = express();
const expressJwt = require("express-jwt");
require("dotenv").config();
const mongoose = require("mongoose")

app.use("/auth", require("./routes/authRouter"));
//Make the app use the express-jwt authentication middleware on anything starting with "/api"
app.use("/api", expressJwt({secret: process.env.SECRET}));

// Add '/api' before your existing 'app.use' of the parent-question routes. This way, it must go through the express-jwt middleware before accessing any to the parent-question routes, making sure we can reference the "currently logged-in user" in our todo routes
app.use("/api/todo", require("./routes/questionRouter"))

app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        // express-kwt gives the 401 status to the err object for us
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(5000, () => {
    console.log(`server is running!`)
})