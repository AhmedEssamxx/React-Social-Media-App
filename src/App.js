import Home from './pages/home/Home';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';

function App() {
  return (
<Router>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/profile' element={<Profile /> } />
</Routes>
</Router>


  );
}

export default App;
