const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/", AuthorController.index);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors", AuthorController.getAll);
    app.get("/api/authors/:id", AuthorController.getOne);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
};
