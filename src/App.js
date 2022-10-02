// import logo from './logo.svg';
import './App.css';
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Tennis Spot</h1>
      <navbar className="navbar">
          {/* <NavLink to="" className='separation'><i class="fa-solid fa-house"></i></NavLink> */}
          <NavLink to="/administration" className='administration'>Administration</NavLink>
          <NavLink to="/entrainement" className='entrainement'>Entrainement</NavLink>
      </navbar>
      <Outlet />
    </div>
  );
}

export default App;
