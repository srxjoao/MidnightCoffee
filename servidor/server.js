    const express = require('express');
    const app = express();
    const cors = require('cors');

    app.use(express.json());
    app.use(cors());

    let produtos = [];

    // Criar um novo produto
    app.post('/produtos', (req, res) => {
        const { nome, descricao, preco, categoria, disponibilidade, tamanho, codigo, imagem } = req.body;

        // Validação de campos obrigatórios
        if (!nome || !descricao || !preco || !categoria || !disponibilidade || !tamanho || !codigo || !imagem) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios, incluindo a imagem.' });
        }

        const novoProduto = {
            id: produtos.length + 1,
            nome,
            descricao,
            preco,
            categoria,
            disponibilidade,
            tamanho,
            codigo,
            imagem // URL da imagem
        };

        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    });

    // Obter todos os produtos
    app.get('/produtos', (req, res) => {
        res.status(200).json(produtos);
    });

    // Obter um produto específico pelo ID
    app.get('/produtos/:id', (req, res) => {
        const { id } = req.params;
        const produto = produtos.find(p => p.id === parseInt(id));

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        res.status(200).json(produto);
    });

    // Atualizar informações de um produto
    app.put('/produtos/:id', (req, res) => {
        const { id } = req.params;
        const { nome, descricao, preco, categoria, disponibilidade, tamanho, codigo, imagem } = req.body;

        const produto = produtos.find(p => p.id === parseInt(id));

        if (!produto) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        // Atualizar apenas os campos fornecidos
        produto.nome = nome || produto.nome;
        produto.descricao = descricao || produto.descricao;
        produto.preco = preco || produto.preco;
        produto.categoria = categoria || produto.categoria;
        produto.disponibilidade = disponibilidade || produto.disponibilidade;
        produto.tamanho = tamanho || produto.tamanho;
        produto.codigo = codigo || produto.codigo;
        produto.imagem = imagem || produto.imagem;

        res.status(200).json(produto);
    });

    // Deletar um produto
    app.delete('/produtos/:id', (req, res) => {
        const { id } = req.params;
        const index = produtos.findIndex(p => p.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }

        produtos.splice(index, 1);
        res.status(204).send();
    });

    // Iniciar o servidor
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
