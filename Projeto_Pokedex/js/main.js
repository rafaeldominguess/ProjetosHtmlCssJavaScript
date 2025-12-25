

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">
                            grass
                        </li>

                        <li class="type">
                            poison
                        </li>
                    </ol>
                    <img class="img" src="https://media.tenor.com/XtXuPwRrjoIAAAAi/joia.gif" alt="${pokemon.name}">
                </div>
            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')


//Trasnforma um nome pokemon em uma string
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
