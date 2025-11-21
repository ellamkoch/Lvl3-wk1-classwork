//This file holds all async functions that fetch data from the PokéAPI using Axios.
// Exported functions can be imported into main.js or other files

// variable
const baseURL = "https://pokeapi.co/api/v2"; // variable for the base url of the api

// base function for api requests
// util function
async function makeAPIRequest(endpoint) {
  try{
    const response = await axios.get(endpoint);
    const data = await response.data;

    return {
      successs: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}
// functions that use the util function above
async function getPokemonAPI(pokemonName) {
  const endpoint =`${baseURL}/pokemon/${pokemonName}`;
  //this line builds the api url endpoint dynamically,
  // based upon name or id put in by user when searching on html page.

  try {
    const response = await axios.get(endpoint); // reaches out to axios to
    // send a GET request to the pokemon api at the endpoint
    // that matches what the user put in.
    const data = await response.data;// extracts data object from the axios response

    return { // returns fetched information with a success flag.
    // The success flag makes it easy for other files to validate
    // if the function worked properly.
      success:true,
      data
    };

  } catch (error) { // to catch errors, i.e., invalid name, network issues.
  // This block runs instead of crashing the page or becoming unresponsive.

    return { // returns a similar object like above,
    // but when its false it includes the error information
      success: false,
      error
    };
  }
}


export { getPokemonAPI, makeAPIRequest };
// exports have to be in curly brackets if you have more than one function to export.
//  export them to be used in other js files.
