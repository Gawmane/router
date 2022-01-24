//Router
import {BrowserRouter as Router} from 'react-router-dom' 
import { AppRouter } from './component/AppRouter/AppRouter';

//Compontes 
import {Header} from '../src/component/partials/Header/Header';
import {Main} from '../src/component/partials/Main/Main';
import {Footer} from '../src/component/partials/Footer/Footer';

//Style
import './App.scss';


//Array til produkter

// const arrImages =[
//   {id: '1', 
//   images : 'https://api.unsplash.com',
//   name: 'halsbånd'},
//   {id: '2', 
//   images : 'https://api.unsplash.com',
//   name: 'snor'}
// ]

function App() {
  return (
    <>
    {/* Router - Skal omfange de sider vi har på siden samt nav- skal være parents til header */}
    <Router>
    <Header/>
    <Main>
      {/* Indsætter approuter inde i vores main da alt indhold skal ind under main (chrild) */}
      <AppRouter/>
      </Main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
