const mongoose = require('../../database/index');

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    imagem: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Produtos = mongoose.model('Produtos', UserSchema);

module.exports = Produtos;