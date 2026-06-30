const User = require('../models/User');


const addUserRoute = async (req, res) => {
    const { name, email, city, mobile } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            city,
            mobile
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error to Add user");
    }   
};

const getAllUsersRoute = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({message : error.message});
        console.log("Error to get All users");
    }
}

const updateUserRoute = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, city, mobile } = req.body;
        const updUser = await User.findByIdAndUpdate(id, {
            name, email, city, mobile
        }, { new: true });

         if (!updUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json(updUser);
        }
    catch (error) {
        res.status(500).json({message : error.message});
        console.log("Error to Update User");
    }
}

const deleteUserRoute = async (req,res) => {
    try {
        const { id } = req.params;
        const delUser = await User.findByIdAndDelete(id);
        res.status(200).json(delUser);
    }catch (error) {
        res.status(500).json({message : error.message});
        console.log("Error to Delete User");
    }
}

const filterRoute = async (req, res) => {
    try {
        const { search } = req.query;
        const users = await User.find({
            $or: [
                { name: { $regex: search, $options: "i" } },
                { mobile: { $regex: search, $options: "i" } }
            ]
        });

        res.status(200).json({
            success: true,
            data: users
        });
    }catch (error) {
        res.status(500).json({message : error.message});
        console.log("Error to Filter User");
    }
}
module.exports = {addUserRoute, getAllUsersRoute,updateUserRoute, deleteUserRoute, filterRoute}; 