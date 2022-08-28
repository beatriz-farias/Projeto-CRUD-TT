const User = require('../models/User');

const admin = async(req, res, next) =>{
    const {id} = req.params
    try{
        const user = await User.findByPk(id);
        if (user.type_user == 1)
        return next();
        else return res.status(401).json({'error': 'Sem autorização'});
    } catch(err) {
        return res.status(500).json({'error': 'Internal Server Error'});
    };
}

module.exports = admin