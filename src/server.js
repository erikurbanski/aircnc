const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://psicopush:push3338@clustermongo-ptxjy.mongodb.net/omnistack9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

/**
 * req.body   > Acessa todo o corpo da requisição.
 * req.query  > Acessa parâmetros da query (filtros).
 * req.params > Acessa parâmetros de rota (edição, deleção).
 */

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
