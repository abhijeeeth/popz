import './App.css';
import PopzupInfo from './Components/About';
import AdsList from './Components/AdsList';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import TopCatagories from './Components/TopCatagories';
import TopLists from './Components/TopLists';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-sky-100">
     <Navbar/>
      <Hero/>
      <PopzupInfo/>
    <TopCatagories/>
      <AdsList/>
      <TopLists/>
      <Footer/>
    </div>
  );
}

export default App;
