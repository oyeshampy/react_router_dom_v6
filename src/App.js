import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul style={{
          float: 'left',
          listStyleType: 'none',
        }}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <Routes style={{float:'right'}}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/*'} element={<ErrorPage/>}/>
        </Routes>
        <footer style={{clear:'both'}}>
          this is footer
        </footer>
      </div>
    </Router>
  );
};

export default App;
