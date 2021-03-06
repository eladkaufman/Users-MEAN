const users = require('./usersModel');

// GET All
exports.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        users.find({}, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// GET
exports.getUser = (id) => {
    return new Promise((resolve, reject) => {
        users.findById(id, (err, res) => {
            (err) ? reject(err) : resolve(res)
        })
    })
}

// POST
exports.postUser = (newUser) => {
    return new Promise((resolve, reject) => {
        new users(newUser).save((err, user) => {
            (err) ? reject(err) : resolve(user)
        })
    })
}

// PUT
exports.putUser = (id, user) => {
    return new Promise((resolve, reject) => {
        users.findByIdAndUpdate(id, user, (err) => {
            (err) ? reject(err) : resolve('PUT Completed')
        })
    })
}

// DELETE
exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        users.findByIdAndDelete(id, (err) => {
            (err) ? reject(err) : resolve('DELETE Completed')
        })
    })
}