const routes = require('express').Router();


routes.get('/signup',(req, res)=>{
    res.json({
        user: "Pedro"
    })
})







module.exports = routes;
