import React from 'react';

class Pokemon extends React.Component {
  render() {
    const data = this.props.pokemons;
    return (
      <div className='pokeDiv'>
        <h2>{data.name}</h2>
        <img src={data.image} alt='imagem do pokemon' width='300px'></img>
        <br></br>
        <span>Tipo: {data.type}</span>
        <br></br>
        <span>Peso médio: {data.averageWeight.value}{data.averageWeight.measurementUnit}</span>
      </div>
    );
  }
}

export default Pokemon;