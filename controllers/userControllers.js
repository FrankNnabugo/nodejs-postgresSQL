
const {User} = require("../models/user");

const createUser = async(req, res)=>{
try{
const user = await User.create({
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    department: req.department
});
return res.status(200).send(user)
}

catch(err){
    console.error("error:", err)
}
}

const getSingleUser = async(req, res)=>{
    try{
        const singleUser = await User.findByPk(req.params.id);
        res.status(200).send(singleUser)
    }
    catch(err){
        console.error("error:", err);
    }
}


const getAllUsers = async(req, res)=>{
try{
    const allUsers = await User.find({}).sort({createdAt: -1});
    res.status(200).send(allUsers);
}
catch(err){
    console.err("error:", err);
}
}



const deleteSingleUser = async(req, res)=>{
    try{
        const deleteUser = await User.findBypk(req.params.id);
        await deleteUser.destroy();
        res.status(200).send
    }
    catch(err){
        console.error("err:", err);
    }
}

const updateUser = async(req, res)=>{
    try{
        findUser = await User.findByPk(req.params.id);
        await findUser.update({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            mobile_number: req.body.mobile_number,
            department: req.department 
        });
        res.status(200).send("user information updated:", findUser);
    }
    catch(err){
        console.error("error:", err);
    }
}

module.exports = {createUser, 
    getSingleUser, 
    getAllUsers, 
    deleteSingleUser,
    updateUser
 };
