const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Authors name is required"],
            minlength: [2, "Authors name must be a minimum of two letters"],
        },
    },
    { timestamps: true }
);

module.exports.Author = mongoose.model("Author", AuthorSchema);
