const express = require('express');
const router = express.Router();//serves as a mini Express application capable of handling its own routes
const SignUp = require('./signup.controller');
const Login = require('./login.controller');
const Auth = require('./auth.controller');

router.post('/signup', SignUp);
router.post('/login', Login);
router.post('/auth', Auth);
module.exports = router;
