const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    city: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate: {
            validator: function (city) {
                return /^[A-Za-z]+$/.test(city)
            }, message: `only accept Alphabets`, isAsync: false
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("cities", citySchema)