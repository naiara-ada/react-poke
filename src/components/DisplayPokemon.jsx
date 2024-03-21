
function DisplayPokemon ({pokemonName, imagePokemon, controlData}){
   return(        
    <div>
      {!controlData && <h3>Pokemon no encontrado</h3>}
      {controlData &&(
        <>
          <h3>{pokemonName}</h3>
          <img src={imagePokemon} alt={pokemonName} />
        </>
      )}
    
   </div>

  )
}

export default DisplayPokemon