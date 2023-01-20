const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (name) {
                return /^[A-Za-z]+$/.test(name)
            }, message: `only accept Alphabets`, isAsync: false
        }
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities",
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema)