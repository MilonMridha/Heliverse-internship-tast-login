
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
