// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from'./component/Header'
import About from './component/About'
import AboutNew from './component/AboutNew'

import Work from './component/Work'
import Contact from './component/Contact'

function App() {
  return (
      <div className="App">
    {/* <Router> */}
        <Header />
        <About />
        {/* <Route path='/about' component={About} /> */}
        <AboutNew/>
        {/* <Route path='/aboutNew' component={AboutNew} /> */}
        <Work />
        {/* <Route path='/work' component={Work} /> */}
        <Contact />
        {/* <Route path='/contact' component={Contact} /> */}
          
     {/* </Router> */}
      </div>
  );
}

export default App;
