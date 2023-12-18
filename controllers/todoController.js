const connection = require("../config/connection");

const createTodo = async (req, res) => {
  const { todo } = req.body;
  const { userId } = req.query;
  const query = "INSERT INTO todos (todo,  user_id) VALUES (?, ?)";

  if (!todo || !userId) {
    return res.status(400).json({ error: "todo and userid must be provided" });
  }

  try {
    const [result] = await connection.query(query, [todo, userId]);
    const query2 = "SELECT * FROM todos WHERE id = ?;";
    const [todos] = await connection.query(query2, [result.insertId]);
    res.json(todos[0]);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err)
  }
};

const getAllTodos = async (req, res) => {
  const getTodos = "SELECT id,todo FROM todos";
  try {
    const [result] = await connection.query(getTodos);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
};
