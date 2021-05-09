const User = require('../models/user');

// create a user
exports.createUser = (req, res) => {
    User.create({
        ...req.body
    }, (err, newUser) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ message: "New user created successfully", data: newUser });
        }
    })
}

// Get the data created
exports.fetchUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(200).json({ message: "User retrieved succefully", data: user });
        }
    })
}

// fetch all data
exports.fetchUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (users.length === 0) {
            return res.status(404).json({ message: "No users found"});
        } else {
            return res.status(200).json({ message: "Users retrieved successfully", data: users });
        }
    })
}

// Update the data created
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email
    }, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!user) {
            
        } else {
            user.save((err, saveUser) => {
                if (err) {
                    return res.status(400).json({ message: "Bad request" })
                } else {
                    return res.status(200).json({ message: "User updated successfully "});
                }
            })
        }
    })
}

// delete the data created
exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(200).json({ message: "User deleted successfully" });
        }
    })
}