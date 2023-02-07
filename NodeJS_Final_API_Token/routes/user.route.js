const userController = require('../controllers/userController');
const isAuth = require('../middleware/auth');

const user_route = (app) => {
    app.get('/api/account',userController.getAll);

    app.post('/api/register', userController.register);
    app.post('/api/login', userController.login);

    app.post('/api/token', userController.refreshToken);
};

module.exports = user_route;