const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const dbName = "products";

require("./config/mongoose.config")(dbName);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
