import './App.css';
import NavigationBar from './NavigationBar';
import Services from './Components/Services/page';
import About from './Components/About/page';
import Doctors from './Components/Doctors/page';
import Testimonials from './Testimonials';
import Payment from './Payment';
import Footer from './Footer';
import AppointmentForm from './Appointment';
import Recomendations from './Components/Recomendations/page';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <About/>
      <Services/>
      <Doctors/>
      <Recomendations/>
      <Testimonials/>
      <Payment/>
      <AppointmentForm/>
      <Footer/>
    </div>
  );
}

export default App;
