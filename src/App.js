import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Navbar />
      <Articles />
    </div>
  );
}

export default App;
