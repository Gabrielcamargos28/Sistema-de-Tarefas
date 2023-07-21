const tarefasEndpoint = "http://localhost:8080/tarefas";

function hideLoader() {
    document.getElementById("carregando").style.display = "none";
}

function show(tarefas) {
    let tab = `<thead>
            <th scope="col">#</th>
            <th scope="col">nome</th>
        </thead>`;


    for (let tarefa of tarefas) {
        tab += `
            <tr>
                <td scope="row">${tarefa.id_tarefa}</td>
                <td>${tarefa.nome}</td>
            </tr>
        `;
    }

    document.getElementById("tarefas").innerHTML = tab;
}

async function gettarefas() {
    const response = await fetch(tarefasEndpoint, {
        method: "GET"
    });
    const dados = await response.json();
    const content = dados.content;
    content.forEach(item => {
        const idTarefa = item.id_tarefa;
        const nome = item.nome;
        console.log(`ID da tarefa: ${idTarefa}`);
        console.log(`Nome: ${nome}`);
    })

    if (response) {
        hideLoader();
        show(content);
    }
}

gettarefas();