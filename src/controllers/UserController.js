const User = require('../models/User')

//Cria um novo User
const create = async(req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json({message: "User cadastrado com sucesso.", user: user});
    } catch (err) {
        return res.status(500).json({error: err});
    }
}

//Mostra a lista de Users
const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users})
    } catch (err) {
        return res.status(500).json({err})
    }
}

// Mostrar um cliente que tenha a chave primária (id) procurado
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user})
    } catch (err) {
        return res.status(500).json({err})
    }
}

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if (updated) {
            const user = await User.findByPk(id)
            return res.status(200).json({user})
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("User não encontrado.")
    }
}

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if (deleted) {
            return res.status(200).json("User deletado com sucesso.");
        }
        throw new Error ();
    } catch (err) {
        return res.status(500).json("User não encontrado.")
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};