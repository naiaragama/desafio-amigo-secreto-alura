let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = "O amigo secreto é: " + sorteado;
}