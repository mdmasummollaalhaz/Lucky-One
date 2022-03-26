import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
