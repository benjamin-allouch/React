import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Photos from './Photos';
import Location from './Location';
import Riders from './Riders';
import Contact from './Contact';
import Footer from './Footer';
import Error from './Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {  
  return (
    <React.Fragment>
      <Nav />
       <Router>          
           <Switch>  
             <Route exact path ="/" component={Home} />
             <Route path = "/photos" component={Photos} />
             <Route path="/location" component={Location} />
             <Route path="/riders" component={Riders} />
             <Route path="/contact" component={Contact} />
             <Route component={Error} />
           </Switch>          
       </Router>
       <Footer />
     </React.Fragment>
  );
} 

export default App;
