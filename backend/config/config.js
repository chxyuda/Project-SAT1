require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
    port: process.env.PORT || 5001,
};
