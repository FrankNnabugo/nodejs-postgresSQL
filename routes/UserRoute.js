const express = require("express");
const userRouter = express.Router();
const{createUser, 
    getSingleUser, 
    getAllUsers, 
    deleteSingleUser,
    updateUser } = require("../controllers/userControllers");




userRouter.post("/", createUser );
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getSingleUser );
userRouter.delete("/:id", deleteSingleUser );
userRouter.put("/:id", updateUser)


module.exports = {userRouter};



