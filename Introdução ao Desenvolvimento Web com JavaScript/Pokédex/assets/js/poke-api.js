//Requisição HTTP via JavaScript - Fetch API, Axius, jQuery
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id
        pokemon.name = pokeDetail.name

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types //array destructuring: equivalente a types.get(0),types.get(1),etc.

        pokemon.types = types
        pokemon.type = type

        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

        return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    //processamento assíncrono
    //retorna uma Promise contendo a resposta, usa o comando GET por padrão

    return fetch(url)
        .then((response) => response.json()) //converte um body de 'ReadableStream' para JSON
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}