import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Router >
          <Switch>
            <Route path='/about'> 
              <About />
            </Route>
            <Route path='/work'> 
              <Work />
            </Route>
            <Route path='/contact'> 
              <Contact />
            </Route>
            <Route path='/'> 
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
