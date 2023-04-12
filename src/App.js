import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Articles from './components/Articles/Articles';
import MobileNav from './components/MobileNav/MobileNav';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Navbar />
      <MobileNav />
      <Articles />
    </div>
  );
}

export default App;
