const api = "http://localhost:3000";
const usuario = JSON.parse(localStorage.getItem("usuario")) || null;

if (!usuario) {
    window.location.href = "../login";
}

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const novoProduto = {
        nome: form.nome.value,
        descricao: form.descricao.value,
        estoque: parseInt(form.estoque.value),
        estoqueMinimo: parseInt(form.estoqueMinimo.value),
        custo: parseFloat(form.custo.value),
    };
    if (form.imagem.value) {
        novoProduto.imagem = form.imagem.value;
    }
    await fetch(`${api}/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoProduto)
    });
    form.reset();
    carregarProdutos();
});

const tbody = document.querySelector("tbody");
async function carregarProdutos() {
    const response = await fetch(`${api}/produtos`);
    const produtos = await response.json();

    tbody.innerHTML = "";
    produtos.forEach(produto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${produto.imagem}" alt="${produto.nome}"></td>
            <td>${produto.id}</td>
            <td contenteditable="true">${produto.nome}</td>
            <td contenteditable="true">${produto.descricao}</td>
            <td contenteditable="true">${produto.estoque}</td>
            <td contenteditable="true">${produto.estoqueMinimo}</td>
            <td contenteditable="true">R$ ${produto.custo.toFixed(2)}</td>
            <td>
                <button onclick="editarProduto(this)">Editar</button>
                <button onclick="deletarProduto(${produto.id})">Deletar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
carregarProdutos();

function editarProduto(botao) {
    const tr = botao.parentElement.parentElement;
    const id = tr.children[1].innerText;
    const corpo = {
        nome: tr.children[2].innerText,
        descricao: tr.children[3].innerText,
        estoque: parseInt(tr.children[4].innerText),
        estoqueMinimo: parseInt(tr.children[5].innerText),
        custo: parseFloat(tr.children[6].innerText.replace("R$ ", ""))
    };
    fetch(`${api}/produtos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    });
}

async function deletarProduto(id) {
    if (confirm("Tem certeza que deseja deletar este produto?")) {
        await fetch(`${api}/produtos/${id}`, {
            method: "DELETE"
        });
        carregarProdutos();
    }
}

function filtrarProdutos() {
    const filtro = document.getElementById("filtro").value.toLowerCase();
    const linhas = tbody.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        const nome = linhas[i].children[2].innerText.toLowerCase();
        const descricao = linhas[i].children[3].innerText.toLowerCase();
        if (nome.includes(filtro) || descricao.includes(filtro)) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}