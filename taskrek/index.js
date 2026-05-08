const express = require("express");
const app = express();

const todosArr = [
  {
    id: 1,
    task: "create all api for project1",
    tags: ["nodejs", "html"],
    status: "todo",
  },
  {
    id: 2,
    task: "create all api for project1 list of all todo",
    tags: ["nodejs", "html"],
    status: "doing",
  },
  {
    id: 3,
    task: "pllan project",
    tags: ["html"],
    status: "done",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("taskrek project");
});

app.get("/todos", (req, res) => {
  res.send(todosArr);
});
app.get("/todos/:id", (req, res) => {
  const todoid = parseInt(req.params.id);

  const todo = todosArr.find((t) => t.id === todoid);
  console.log(todo, typeof todoid);

  res.json(todo);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  if (!todo.task) {
    return res.status(400).json({ message: "task is required!" });
  }
  if (!todo.tags) {
    return res.status.apply(400).json({ message: "tags is required!" });
  }
  if (!todo.status) {
    return res.send("status is required!");
  }

  const newtodo = {
    id: todosArr[todosArr.length - 1].id + 1,
    task: todo.task,
    tags: todo.tags,
    status: todo.status,
  };
  todosArr.push(newtodo);
  //   console.log(todo);
  res.json(todo);
});

app.put("/todos/:id", (req, res) => {
  const { task, tags, status } = req.body;
  const todoindex = todosArr.findIndex((t) => t.id === id);
  if (todoindex === -1) {
    return res.status(404).json({ message: "todo not found" });
  }
});
const PORT = process.env.PORT || 5000;
// console.log(PORT);

app.listen(PORT, () => {
  console.log(`server listing on port ${PORT}`);
});
