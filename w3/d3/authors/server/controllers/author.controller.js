const { Author } = require("../models/author.model");
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World",
    });
};

module.exports.createAuthor = (request, response) => {
    const { name, price, desc } = request.body;
    Author.create({
        name,
        price,
        desc,
    })
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};

module.exports.getAll = (request, response) => {
    Author.find({})
        .then((authors) => response.json(authors))
        .catch((err) => response.json(err));
};

module.exports.getOne = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then((authors) => {
            console.log(authors);
            response.json(authors);
        })
        .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
        runValidators: true,
    })
        .then((updatedAuthor) => response.json(updatedAuthor))
        .catch((err) => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) {
                // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message);
            }
            // Set Errors
            setErrors(errorArr);
        });
};
