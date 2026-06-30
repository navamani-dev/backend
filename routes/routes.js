const router = require('express').Router();
const {addUserRoute, getAllUsersRoute,updateUserRoute,deleteUserRoute,filterRoute} = require('../controller/controller');

router.post('/addUser', addUserRoute);
router.get('/getAllUsers',getAllUsersRoute);
router.put('/updateUser/:id', updateUserRoute);
router.delete('/deleteUser/:id', deleteUserRoute);
router.get('/filter', filterRoute);

module.exports = router;