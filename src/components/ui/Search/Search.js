import React from 'react';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const saveLocalStore = (data) => {
  localStorage.setItem('starwars', JSON.stringify(data) );
}

const parseJSON = (response) => {
  return response.json()
}

const callApi = () => {
  let planet = document.getElementById('input').value;
  console.log(planet)
  const url = 'https://pokeapi.co/api/v2/pokemon/'+planet+'/';
  fetch(url)
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('request succeeded with JSON response', data)
    saveLocalStore(data);
  }).catch(function(error) {
    console.log('request failed', error)
  })
}

export const Search = () => {
  return (
    <div className="search">
      <label>are you fan from star wars? Please type a planet from them</label><br/>
      <input type="text" id="input"/>
      <button onClick={callApi}>call me</button>
    </div>
  );
};