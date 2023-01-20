const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/route")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/CITY", {
    useNewUrlParser: true
}).then(() => {
    console.log("Mongodb is connected");
}).catch(err => console.log(err));

app.use("/", route);
const port = 3000
app.listen(port, () => {
    console.log(`port running on the ${port}`)
})