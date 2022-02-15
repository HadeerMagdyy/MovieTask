import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMovie from './pages/addMovie'; 
import EditMovie from './pages/EditMovie'; 


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/addMovie' element={<AddMovie/>} />
       <Route path='/EditMovie/:id' element={<EditMovie/>} />

      </Routes>
     </div>
  );
}

export default App;
