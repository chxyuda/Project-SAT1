const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
