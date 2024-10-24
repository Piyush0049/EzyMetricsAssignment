require('dotenv').config();

const config = {
    DB_URI: process.env.DB_URI || 'abc',
    PORT: process.env.PORT || 3000,
};

module.exports = config;
