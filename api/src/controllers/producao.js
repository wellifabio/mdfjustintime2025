const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const produto = await prisma.produto.findUnique({
            where: {
                id: Number(req.body.produtoId)
            }
        });
        if (!produto) {
            return res.status(400).json({ error: "Produto inválido para produção" });
        } else {
            if (req.body.tipo == 'PRODUCAO') {

                produto.estoque += req.body.quantidade;
                await prisma.produto.update({
                    where: {
                        id: produto.id
                    },
                    data: produto
                });
                const producao = await prisma.producao.create({
                    data: req.body
                });
                res.status(201).json(producao);
            } else {
                if (produto.estoque < req.body.quantidade) {
                    return res.status(400).json({ error: "Quantidade insuficiente em estoque" });
                } else {
                    produto.estoque -= req.body.quantidade;
                    await prisma.produto.update({
                        where: {
                            id: produto.id
                        },
                        data: produto
                    });
                    const producao = await prisma.producao.create({
                        data: req.body
                    });
                    res.status(201).json(producao);
                }
            }
        }
    } catch (e) {
        res.status(400).json({ error: e });
    }
}

const readAll = async (req, res) => {
    const producoes = await prisma.producao.findMany({
        include: {
            usuario: true,
            produto: true
        }
    });
    res.json(producoes);
}

module.exports = {
    create,
    readAll
}