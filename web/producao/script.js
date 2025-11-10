const api = "http://localhost:3000";
const usuario = JSON.parse(localStorage.getItem("usuario")) || null;

if (!usuario) {
    window.location.href = "../login";
}

const tbody = document.querySelector("tbody");

const carregarEOrdenarProdutos = async () => {
    try {
        const response = await fetch(`${api}/produtos`);
        const produtos = await response.json();
        produtos.sort((a, b) => a.nome.localeCompare(b.nome));
        tbody.innerHTML = "";
        produtos.forEach(produto => {
            const tr = document.createElement("tr");
            if (produto.estoque <= produto.estoqueMinimo) {
                tr.classList.add("estoque-baixo");
            }
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td><img src="${produto.imagem}" alt="${produto.nome}" /></td>
                <td>${produto.nome}</td>
                <td>${produto.estoque}</td>
                <td>${produto.estoqueMinimo}</td>
                <td><button>Produzir</button></td>
                <td><input type="date" value="${new Date().toISOString().split('T')[0]}" id="data"></td>
                <td><input type="number" value="0" id="quantidade"></td>
                <td><button>Pedido</button></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
};

carregarEOrdenarProdutos();