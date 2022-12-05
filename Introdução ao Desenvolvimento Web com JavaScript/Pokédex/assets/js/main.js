const pokemonList = document.getElementById("pokemonList") //Adquire a OL de ID "pokemonList" do index.html
const loadMoreButton = document.getElementById("loadMoreButton")


//LEMBRETE: ao testar no navegador, desabilitar cache na aba network para atualizar a cada teste
const maxRecords = 151
const limit = 1
var offset = 0

//Paginação
function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" onclick="openModal()">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('') // === (pokemon) => convertPokemonToLi(pokemon)

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit) //carregamento inicial

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset //total elementos - elementos carregados
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton) //remove o botão após carregar todos os elementos

    } else {
        loadPokemonItems(offset, limit)
    }
})

// Modal de detalhes
function openModal() {
    var modal = document.getElementById("modal-pokemon")
    var detail = document.getElementsByClassName("pokemonStats grass")[0]
    var span = document.getElementsByClassName("modal-close")[0]

    modal.style.display = "block";

    detail.innerHTML = `
        <div class="header">
            <span class="number">#1</span>
            <span class="name">Bulbasaur</span>
        </div>
        <div class="detail">
            <ol class="types">
                <li class="type grass">grass</li>
                <li class="type poison">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="Bulbasaur">
        `


    // Botão (X) para fechar o modal
    span.onclick = function () {
        modal.style.display = "none"
    }
    // Fechar o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
}


