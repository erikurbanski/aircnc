const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(
  "mongodb+srv://psicopush:push3338@clustermongo-ptxjy.mongodb.net/omnistack9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

/** Utilizar Redis para armazenar dados do Socket.IO */
const connectedUsers = {};
io.on("connection", socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

/**
 * req.body   > Acessa todo o corpo da requisição.
 * req.query  > Acessa parâmetros da query (filtros).
 * req.params > Acessa parâmetros de rota (edição, deleção).
 */

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
