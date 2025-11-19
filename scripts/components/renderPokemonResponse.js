// this file renders the pokemon card onto the page after the search
//Variables - gets the content container from the DOM
const content = document.getElementById("content");

function renderPokemonResponse(apiResponse) {
 if(apiResponse.success) {
    // displays pokemon name if successfully calling the api
   const pokemon = apiResponse.data;

   const typesArray =pokemon.types; //pulls "types" array from the api and stores the array data for use later
    // let typesString=''; how to do a forEach method

    // console.log(typesArray);

    // typesArray.forEach((type, index)=> {
    //     console.log(type,index);

    //     typesString+= type.type.name;

    //     if(index < typesArray.length -1) {
    //         typesString += ', ';
    //     }
    const typesString = typesArray.map(type => type.type.name).join(', '); // gets the pokemon type names in the array and joins them with a comma

// builds and displays the poke card
    content.innerHTML = `
    <div class="card">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="Sprite image of a ${pokemon.name}">
    <div class="card-body">
    <h5 class="card-title">Name: ${pokemon.name} - ID: ${pokemon.id}</h5>
    <ul class="list-group">
        <li class="list-group-item">Pokemon Weight: ${pokemon.weight}</li>
        <li class="list-group-item">Pokemon Height: ${pokemon.height}</li>
        <li class="list-group-item">Pokemon Types: ${typesString}</li>
    </ul>
    </div>
    </div>
    `
 } else {
    // error message displayed if there's a bad response from the api
    const {error} = apiResponse;
    content.innerHTML = `
    <h2>API Failed because of ${error.message}</h2>`
 }
}
 // enables export to other files. only function to export, so we can list it this way
 export default renderPokemonResponse;
