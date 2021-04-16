import React  from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services from './Components/Services/Services';
import Footer from "./Components/Footer/Footer";
import Contact from './Contact';
import Home from "./Home";
import SkateBoard from "./skateboards";
import Scooters from "./scooters";
import Accessories from "./Accessories";


const App = () =>  {
  return (
    <Router>

      <Navbar />

        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>

        <Switch>
          <Route  path='/contact'>
              <Contact />
          </Route>
        </Switch>


        <Switch>
          <Route path='/electric-skateboards'>
              <SkateBoard />
          </Route>
        </Switch>

        <Switch>
          <Route path='/electric-scooters'>
              <Scooters />
          </Route>
        </Switch>

        <Switch>
          <Route path='/accessories'>
              <Accessories />
          </Route>
        </Switch>


    <Services />
    <Footer />    

    </Router>
  );
}


export default App;
