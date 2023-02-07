const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.SECRET_TOKEN_KEY, {
        expiresIn: "1m"
    });

    const refresh_token = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN_KEY, {
        expiresIn: "10m"
    });

    return {
        token, refresh_token
    };
};

module.exports = generateToken;