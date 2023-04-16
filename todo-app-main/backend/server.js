const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/todoController");

// App config
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URL;

// Middlewares
app.use(express.json());

app.use(cors());

// DB config
mongoose.set("strictQuery", true);
mongoose
  .connect(connectionURL)
  .then(() => {
    app.listen(port, () => console.log(`Running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

// API Endpoints
app.get("/todos", getTodos);

app.post("/todos", createTodo);

app.put("/todos/:id", updateTodo);

app.delete("/todos/:id", deleteTodo);
