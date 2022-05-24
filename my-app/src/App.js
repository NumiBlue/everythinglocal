import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Community from "./components/Community";
import  Footer  from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/FormSignup";


function App() {
  return (
  <>
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Community />
      <Footer />
    </div> 
    <div className='hidden'>
      <Login />
      <Signup />
    </div>
  </>
  );
}

export default App;
