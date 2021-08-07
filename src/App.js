
import './App.scss';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from'./component/Header'
import About from './component/About'
import Work from './component/Work'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
      <div className="App">
    {/* <Router> */}
        <Header />
        {/* <Route path='/about' component={About} /> */}
        <About/>
        {/* <Route path='/aboutNew' component={AboutNew} /> */}
        <Work />
        {/* <Route path='/work' component={Work} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
        <Contact />
        <Footer />
     {/* </Router> */}
      </div>
  );
}

export default App;
