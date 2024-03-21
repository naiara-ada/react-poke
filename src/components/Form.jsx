import { useState, useEffect } from "react"
import DisplayPokemon from "./DisplayPokemon.jsx"
import Error from './Error.jsx'
function Form (){
    const url='https://pokeapi.co/api/v2/pokemon/'
    const [pokemonName, setPokemonName] = useState('')
    const [imagePokemon, setImagePokemon] = useState('')
    const [controlData, setcontrolData] = useState(null)
  
  
    useEffect(()=>{
      console.log('pokemonName',pokemonName)
      findPokemon();  
    },[pokemonName])

  
     const findPokemon = async()=>{
      try {
          
          const response = await(fetch(url + pokemonName.trim()))
          if (!response.ok){
            setcontrolData(false);
            throw new Error('Error al buscar un pokemon')
            }          
          const pokemon = await response.json();
          if (pokemon.name){
            setImagePokemon(pokemon.sprites.other.dream_world.front_default) ;
            setPokemonName(pokemon.name)
            setcontrolData(pokemon)
          } else {
            setcontrolData(false)
          }          
      } catch (error) {
          console.error('Error en la solucitud', error)                  
      }
    }
  
    const pokemonform = (event)=>{
      event.preventDefault();
      findPokemon();
      setPokemonName('');
      setImagePokemon('');
    }
  
    return(
    <>
      <form onSubmit={pokemonform} className='formulario'>
      <input type="text" id="pokemonName" name="pokemonName" value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} />
      <button type="submit">Buscar Pokemon</button>
     </form>
      {pokemonName!= '' && (<DisplayPokemon pokemonName={pokemonName} imagePokemon={imagePokemon} controlData={controlData}/>)}
           
    </>
    )
}

export default Form
