const userModel = require('../models/user-model')

const getAllUsers = async (req,res) =>{
    try{
        const user = await userModel.getAllUsers()
        if(!user) res.json({message: 'User Not Found'})
        res.json(user)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Error Get All Users'})
    }
}

const getUserById = async (req,res) => {
    try {
        const user = await userModel.getUserById(req.params.id)
        res.json(user)
    }
    catch(error){
        console.log(error)
        res.json({message: 'Error'})
    }
}

module.exports = {getAllUsers, getUserById}