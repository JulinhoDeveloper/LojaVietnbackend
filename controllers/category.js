const Category = require('../models/category');


const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
            // se o user for role = 1 ---> admin
            // somente o admin pode criar ,excluir ou alterar categoria
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "Essa categoria já existe."})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: "Criada com sucesso"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
            //const category = await Category.findOne({name})
           // if(category) return res.status(400).json({msg: "Essa categoria já existe."})
            await Category.findOneAndUpdate({_id: req.params.id}, {name})
            res.json({msg: "categoria atualizada"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = categoryCtrl