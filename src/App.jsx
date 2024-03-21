import './App.css';
import Form from './components/Form.jsx'
import { createBrowserRouter } from 'react-router-dom';
import Error from './components/Error.jsx'
import Header from './components/Header.jsx'
import DisplayPokemon  from './components/DisplayPokemon.jsx';


const App = createBrowserRouter([
  {
    path:'/',
    errorElement: <Error />,
    element: <Header />,
    children:[
      {path:'/', element:<Form />}
      
    ]
  }
])

export default App;
