
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import ResetPassword from './Components/Pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
