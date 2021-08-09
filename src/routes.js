const routes = require('express').Router();
const LoginController = require('./Controllers/loginController');
//importanto o login


routes.get('/signup', LoginController.signup)






module.exports = routes;
