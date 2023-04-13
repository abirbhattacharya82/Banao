import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Articles from './components/Articles/Articles';
import MobileNav from './components/MobileNav/MobileNav';
import Write from './components/Write/Write';
import MobileLogin from './components/MobileLogin/MobileLogin';

function App() {
  return (
    <div className="App">
      <MobileLogin />
      <Header />
      <Banner />
      <Navbar />
      <MobileNav />
      <Articles />
      <Write />
    </div>
  );
}

export default App;
