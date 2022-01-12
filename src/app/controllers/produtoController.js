const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');


const authConfig = require('../../config/auth.json');

const Produtos = require('../models/produtos');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/create', async(req, res) => {

    const { title } = req.body;

    try {
        if (await Produtos.findOne({ title }))
            return res.status(400).send({ error: 'User already exists' })

        const produto = await Produtos.create(req.body);

        return res.send({
            produto,
            token: generateToken({ id: produto.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});



module.exports = app => app.use('/produto', router);