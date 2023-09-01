import './App.css';
import { Link, NavLink, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import About from './About';
//import PageWithRouting from './PageWithRouting';
import Products from './Products';
import ProductItem from './ProductItem';

function App() {
  return (
    <div className="App">
      {/* Manually implenting routes*/}
      {/* <PageWithRouting /> */}
      <nav className='main-navbar'>
        <NavLink to='/'>Home</NavLink>{' | '}
        <NavLink to='/products'>Products</NavLink>{' | '}
        <NavLink to='/about'>About</NavLink>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />}>
            <Route path=':productID' element={<ProductItem />} />
          </Route>
          <Route path='/about' element={<About />} />          
          <Route path='*' element={<p>Page not found</p>} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
