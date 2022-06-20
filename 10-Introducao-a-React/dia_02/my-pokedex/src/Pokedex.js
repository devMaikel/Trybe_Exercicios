import React from 'react';
import Pokemon from './Pokemon';
import dataImport from './data.js'

class Pokedex extends React.Component {
  render() {
    const data = dataImport;
    return (
      <div>
        {data.map((e) => <Pokemon key={e.id} pokemons = {e}/>)}
      </div>
    );
  }
}

export default Pokedex;