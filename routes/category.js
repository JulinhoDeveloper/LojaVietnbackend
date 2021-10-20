const router = require('express').Router()
const categoryCtrl = require('../controllers/category')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/category')
    .get(categoryCtrl.getCategories)
    .post( auth, authAdmin,categoryCtrl.createCategory)

    router.route('/category/:id')
    .put(auth, authAdmin, categoryCtrl.updateCategory)

    module.exports = router