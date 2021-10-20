const router = require('express').Router()
const categoryCtrl = require('../controllers/category')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(categoryCtrl.createCategory);



    module.exports = router