const router = require('express').Router()
const user = require('../controllers/user');
const auth = require('../middleware/auth');



router.post('/register', user.register);
router.post('/login', user.login);
router.get('/logout', user.logout);
router.get('/refresh_token', user.refreshToken);
router.get('/infor', auth,  user.getUser);



module.exports = router