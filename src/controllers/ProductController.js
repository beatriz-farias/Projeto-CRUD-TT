const Product = require('../models/Product')
const User = require('../models/User')

//Cria um novo Product
const create = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({message: "Produto cadastrado com sucesso.", product: product});
    } catch (err) {
        return res.status(500).json({error: err});
    }
}

//Mostra a lista de Produtos
const index = async(req,res) => {
    try {
        const produtos = await Product.findAll();
        return res.status(200).json({produtos})
    } catch (err) {
        return res.status(500).json({err})
    }
}

// Mostrar um cliente que tenha a chave primária (id) procurado
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Product.findByPk(id);
        return res.status(200).json({produto})
    } catch (err) {
        return res.status(500).json({err})
    }
}

// Atualiza informações do produto
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if (updated) {
            const produto = await Product.findByPk(id)
            return res.status(200).json({produto})
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Produto não encontrado.")
    }
}

// Deleta um produto do BD
const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
        if (deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    } catch (err) {
        return res.status(500).json("Produto não encontrado.")
    }
}

const addPurchase = async(req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        const user = await User.findByPk(req.body.UserId)
        await product.setUser(user);
        return res.status(200).json("Compra efetuada com sucesso")
    } catch (err) {
        return res.status(500).json("Falha na compra")
    } 
}

const cancelPurchase = async(req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        await product.setUser(null);
        return res.status(200).json("Compra cancelada")
    } catch (err) {
        return res.status(500).json("Falha no cancelamento da compra")
    } 
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addPurchase,
    cancelPurchase
};