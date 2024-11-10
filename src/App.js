
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './components/Search';
import CategoryCard from './components/CategoryCard';
import Success from './pages/Success';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="/:category" element={<CategoryCard />} />
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>
  );
}

export default App;
