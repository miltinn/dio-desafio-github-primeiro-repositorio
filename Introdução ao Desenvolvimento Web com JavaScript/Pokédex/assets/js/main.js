const pokemonList = document.getElementById("pokemonList") //Adquire a OL de ID "pokemonList" do index.html
const loadMoreButton = document.getElementById("loadMoreButton")


//LEMBRETE: ao testar no navegador, desabilitar cache na aba network para atualizar a cada teste
const maxRecords = 151
const limit = 20
var offset = 0


function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
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

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset //total elementos - elementos carregados
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton) //remove o botão após carregar todos os elementos

    } else {
        loadPokemonItems(offset, limit)
    }
})



