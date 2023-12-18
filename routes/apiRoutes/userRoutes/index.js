const router = require('express').Router();
const {createUser,getAllUsers} = require('../../../controllers/userController');

// router.get('/', getAllUsers);

router.post('/', createUser);



module.exports = router;