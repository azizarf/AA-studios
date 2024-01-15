const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/AaStudio')
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error: ', err));

module.exports = connection;