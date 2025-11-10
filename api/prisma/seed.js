const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.usuario.createMany({
        data: [
            { nome: "Ana Silva", email: "ana@email.com", senha: "senha123" },
            { nome: "Maria Souza", email: "maria@email.com", senha: "senha123" },
            { nome: "João Pereira", email: "joao@email.com", senha: "senha123" },
        ],
    })

    await prisma.produto.createMany({
        data: [
            { nome: "Caixa MDF 16x16x6", descricao: "Kit 10 Caixinha MDF Cru 16x16x6 Corte Laser Montagem Fácil", custo: 30.00, estoque: 50, estoqueMinimo: 10, imagem: "https://images.tcdn.com.br/img/img_prod/749156/kit_10_caixinha_mdf_cru_21x21x10_corte_laser_montagem_facil_5555_1_cb0f166c5e7e172d9146ff20ede7150e.jpg" },
            { nome: "Quadro Quadrado", descricao: "Quadro Quadrado em MDF - 25,5cm", custo: 5.00, estoque: 5, estoqueMinimo: 10, imagem: "https://cdn.dooca.store/731/products/pecas-mdf-2-1-1_640x640+fill_ffffff.png?v=1709749260&webp=0" },
            { nome: "Fusca MDF", descricao: "Aplique em mdf - Carro fusca 4cm | Elo7 Produtos Especiais", custo: 10.00, estoque: 10, estoqueMinimo: 10, imagem: "https://img.elo7.com.br/product/zoom/1A795F3/aplique-em-mdf-fusca-mdf-personalizado.jpg" },
        ],
    })


    await prisma.producao.createMany({
        data: [
            { usuarioId: 1, produtoId: 1, quantidade: 50, tipo: "PRODUCAO"},
            { usuarioId: 2, produtoId: 2, quantidade: 15, tipo: "PRODUCAO"},
            { usuarioId: 3, produtoId: 3, quantidade: 25, tipo: "PRODUCAO"},
            { usuarioId: 1, produtoId: 1, quantidade: 10, tipo: "PEDIDO"},
            { usuarioId: 2, produtoId: 2, quantidade: 10, tipo: "PEDIDO"},
            { usuarioId: 3, produtoId: 3, quantidade: 5, tipo: "PEDIDO"},
        ],
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })