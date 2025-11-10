const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const produto = await prisma.produto.create({
            data: req.body
        });
        res.status(201).json(produto);
    } catch (e) {
        res.status(400).json({ error: e });
    }
}

const readAll = async (req, res) => {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
}

const update = async (req, res) => {
    try {
        const produto = await prisma.produto.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        res.status(202).json(produto);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const del = async (req, res) => {
    try {
        const produto = await prisma.produto.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        if (produto) res.status(204).end();
        else res.status(404).json({ error: "Produto não encontrado" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = {
    create,
    readAll,
    update,
    del
}