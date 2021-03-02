const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gama:nishantmane@cluster0.z6yqr.mongodb.net/message?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (!err) {
        console.log("Connection established...")
    }
    else {
        console.log("Connection Error...");
    }
})