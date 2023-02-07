const users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateToken = require('../helpers/generateToken');
const saltRound = 10;

const usersController = {
    getAll: (req, res) => {
        users.getAllUser((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        })
    },

    register: (req, res) => {
        bcrypt.genSalt(saltRound, (err, salt) => {
            if (err) {
                res.json(err);
            } else {
                bcrypt.hash(req.body.password, salt, (err2, hashedPass) => {
                    if (err2) {
                        res.json(err2);
                    } else {
                        req.body.password = hashedPass;
                        users.register(req.body, (err3, data) => {
                            if (err3) {
                                res.json(err3);
                            } else {
                                res.status(200).json(data);
                            }
                        });
                    }
                });
            }
        });
    },

    login: (req, res) => {
        users.checkAccountLogin(req.body.email, (err1, data) => {
            if (err1) {
                res.json(err1);
            } else {
                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err2, result) => {
                        if (err2) {
                            res.json(err2);
                        } else {
                            if (result) {
                                const token = generateToken({
                                    id: data[0].id
                                });
                                users.setToken(data[0].id, {
                                    refresh_token: token.refresh_token
                                }, (err3, tokenData) => {
                                    if (err3) {
                                        res.json(err3);
                                    } else {
                                        res.status(200).json({tokenData, token});
                                    }
                                });
                            } else {
                                res.json({ result, message: "Failed to Login" });
                            }
                        }
                    }); 
                }
            }
        });
    },

    refreshToken: (req, res) => {
        const refresh_token = req.body.refresh_token;
        if (!refresh_token) {
            res.status(401).json({message: "Refresh token is required"});
        } else {
            users.verifyToken(refresh_token, (err, data) => {
                if (err) {
                    res.json(err);
                } else {
                    try {
                        var decoded = jwt.verify(refresh_token, process.env.SECRET_REFRESH_TOKEN_KEY);
                        const token = generateToken({
                            id: decoded.id
                        });
                        users.setToken(decoded.id, {
                            refresh_token: token.refresh_token
                        }, (err2, tokenData) => {
                            if (err2) {
                                res.json(err2);
                            } else {    
                                res.status(200).json({
                                    tokenData, token
                                });
                            }
                        });
                    } catch (error) {
                        res.status(403).json({
                            message: err 
                        });
                    }
                }
            });
        }
    }
};

module.exports = usersController;