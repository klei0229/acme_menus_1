import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Restaurant from './Restaurants';
import LandingPage from './LandingPage';
import CreatingMenu from './CreatingMenu';
import ResponsiveAppBar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const { menu } = useSelector((state) => state);

  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  return (
    <div>
      <ResponsiveAppBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <h1>FS App Template</h1> */}
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            {/* <nav>
              <Link to='/'>Home</Link>
            </nav> */}
          {/* </div>
          <div> */}
            <Routes>
              <Route path='/' element={<LandingPage></LandingPage>} />
              <Route path='/menu/:id' element={<Menu state={menu}></Menu>} />
              <Route path='/creatingMenu' element={<CreatingMenu/>} />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
