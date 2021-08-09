//usando o exports para poder importar o signup, e deixando a função assíncrona 
exports.signup = async (req, res)=>{
    res.json({
        user: "Pedro"
    })
}