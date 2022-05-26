import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Community from "./components/Community";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'
import FormSuccess from './components/FormSuccess'



function App () {

  return (

    <div>
      <Navbar />
      <Hero />
      <Events />
      <Community />
      <Footer />
      <FormSignup />
      <Login />
      <FormSuccess />
    </div>
  
  
  );
}

export default App;
