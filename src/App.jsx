import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FamilyMember from './components/FamilyMember'
import Gift from './components/Gift'

const App = () => {
  return (
    <>
    <Navbar />
    <h1>Hello, world!</h1>
    <FamilyMember />
    <Gift />
    </>
  );
};

export default App
