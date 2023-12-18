const connection = require("../config/connection.js");
const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const [results ] = await connection.query(
      'INSERT INTO users (username) VALUES (?);',
      [username]
    );
    const [users] = await connection.query(
      'SELECT * FROM users WHERE id = ?;',
      [results.insertId]
    );
    res.json(users[0]);

  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createUser,
};
