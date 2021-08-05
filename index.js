//importações
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes'); 
const PORT = process.env.PORT || 8080;

//invocação
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(routes);

//subindo servidor
app.listen(PORT,() =>{
    console.log(`App running on port ${PORT} `);
})

