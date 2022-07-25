
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import ResetPassword from './Components/Pages/ResetPassword';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
