import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Game } from "./Pages";
import { Error404 } from './Components';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css'

const App = () => {
  return <>
    <Router>
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
    </Router>
  </>;
}

export default App;