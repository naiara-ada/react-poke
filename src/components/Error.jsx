import {Link} from 'react-router-dom'
function Error (){
    return(
        <>
        <h2>Pokemon no encontrado</h2>
        <Link to='/'>Home</Link>
        </>
    )

}

export default Error