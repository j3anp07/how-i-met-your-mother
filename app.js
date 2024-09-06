function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (!campoPesquisa) {
        section.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Nenhum personagem encontrado</p>
            </div>
        `;
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado += `
                <div class="item-resultado">
                    <img src="${dado.imagem}" alt="${dado.titulo}">
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                </div>
            `;
        }
    }
    
    if (!resultado) {
        resultado = `
            <div class="error-message">
                <i class="fas fa-times-circle"></i>
                <p>Esse personagem não existe.</p>
            </div>
        `;
    }
    
    section.innerHTML = resultado;
}
