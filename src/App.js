import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import Services from './Services';
import About from './About';
import Doctors from './Doctors';
import Testimonials from './Testimonials';
import Recomendations from './Recomendations';
import Payment from './Payment';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Services/>
      <About/>
      <Doctors/>
      <Testimonials/>
      <Recomendations/>
      <Payment/>
      <Footer/>
    </div>
  );
}

export default App;
