import AboutUS from './components/aboutUs/Index';
import Articles from './components/articles/Index';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/navbar/Index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUS />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
