const { produtos } = require('../models')

async function getProdutos(req, res) {
        try {

            
            const Produtos = await produtos.findAll();
            
            return res.send(Produtos)
        } catch (error) {
            console.error(error)
            return res.status(500).send('Erro ao cadastrar produto')
        }
    }

async function createProduto(req, res) {
    try {
        const {nome, catergoria, preco, image_url } = req.body;
        
        const produto = await produtos.create(req.body)

        return res.status(201).send(produto)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar produto!')
    }

}
 async function deleteProduto(req, res){
    const { id } = req.params;
    try {
        await produtos.destroy({
            where: {
                id: id
            }
        })
        return res.status(202).send('Produto deletado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar produto')
        
    }
 }

    module.exports = {
        getProdutos,
        createProduto,
        deleteProduto

    }