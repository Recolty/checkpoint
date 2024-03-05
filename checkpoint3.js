/*Crea una funzione asincrona che fa il fetch a questo indirizzo https://rickandmortyapi.com/api/character, 
filtra l'array in base al nome e fai il console.log degli status dei personaggi, 
lanciando un errore se il personaggio è morto*/

async function fetchData(url) {
  try {
    let getResult = await fetch(url).then((data) => data.json());
    //console.log(getResult);

    return getResult;
  } catch (error) {
    console.error(error);
  }
}

async function filteredCharacter() {
  try {
    const characterData = await fetchData(
      "https://rickandmortyapi.com/api/character"
    );

    const filteredCharacters = characterData.results.filter(
      (character) => character.name === "Rick Sanchez"
    );

    filteredCharacters.forEach((character) => {
      if (character.status === "Alive") {
        console.log(`${character.name}: ${character.status}`);
      }
      if (character.status === "Dead") {
        console.error(`${character.name} is dead`);
      } else {
      }
    });
  } catch (error) {
    console.error(error);
  }
}

filteredCharacter();
