const db = require('../../models/model')

module.exports = {
    find: (req, res) => {
        db.books.find(req.query)
            .then(newBooks => res.json(newBooks))
            .catch(err => console.log(err))
    },
    getMain: (req, res) => {
        res.send('Welcome to API v1.');
    },
    deleteOne: (req, res) => {
        db.books.findById(req.params.id)
            .then(bookToRemove => bookToRemove.remove())
            .catch(err => console.log(err))
    },
    addBook: (req, res) => {
        db.books.create(req.body)
            .then(postBook => res.json(postBook))
            .catch(err => console.log(err))
    }
};