import logo from './logo.svg';
import './App.scss';
import Header from'./component/Header'
import About from './component/About'
import Work from './component/Work'
import Contact from './component/Contact'

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
    </>
  );
}

export default App;
