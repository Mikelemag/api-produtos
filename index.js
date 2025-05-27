const express = require ("express")
const app = express()
const port = 6579
const produtosDb = []
const usersDb = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Olá Mundo!")
})

app.post("/produtos", (req, res) => {
   const {nome, preco, categoria} = req.body

   const produto = {
    nome: nome,
    preco: preco,
    categoria: categoria
   }

   produtosDb.push(produto)
   res.status(201).send(produto)

})
app.get("/produtos", (req, res) => {
    res.send(produtosDb)
})

app.post("/usuarios", (req, res) => {
    const {nome, email, senha} = req.body
    usersDb.push({nome, email, senha})
if(!nome || !email || !senha){
    return res.status(400).send("email, nome e senha sao obrigatorios")
}

    
    
})


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})