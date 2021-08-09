const routes = require('express').Router();
const LoginController = require('./Controllers/loginController');
//importanto o login


routes.post('/signup', LoginController.signup)






module.exports = routes;
