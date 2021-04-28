//Root component
// more components get nested below (inside) this component etc. etc. 
// react version 17 doesn't need import React from 'react';

import './App.css';
import Navbar from './Navbar';
//import Header from './Header';
import Home from './Home';
import Projects from './projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {//must start with capital letter and can be an arrow function. 
  // const title = 'App Components curly';
  // const likes = 50;
  // const urlValue = "http://www.google.com";
  // const urlName = 'Google site';

  //stop valid j 
  return (//JSX content, class must be className (camel case), Class is a JS reserved word
  <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/projects' component={Projects}/>
        <Footer/>
        {/* <Home/> */}
        {/* <h1>{title}</h1> */}
        {/* <p>Liked {likes} times</p> */}
        {/* <p>{10}</p> */}
        {/* <p>{ "string"} </p> */}
        {/* <p>{ [1,2,3,4,5]}</p> */}
        {/* <p>{ Math.floor(Math.random()*11)}</p> */}

        {/* <a href={urlValue}>{urlName}</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
