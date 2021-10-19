const router = require('express').Router()
const user = require('../controllers/user');



router.post('/register', user.register);
router.post('/login', user.login);
router.get('/logout', user.logout);
router.get('/refresh_token', user.refreshToken);



module.exports = router