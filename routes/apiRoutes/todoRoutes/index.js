const {createTodo, getAllTodos} = require("../../../controllers/todoController");
const router = require('express').Router();

router.get('/', getAllTodos)
router.post('/', createTodo)

module.exports = router;