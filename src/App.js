import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
