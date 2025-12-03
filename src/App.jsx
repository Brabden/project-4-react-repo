import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar'
import FamilyMemberList from './components/FamilyMemberList'
import GiftList from './components/GiftList'
const API_URL = "http://localhost:5000";

const App = () => {
  const [familymembers, setFamilyMembers] = useState([]);
  const [gifts, setGifts] = useState([]);
 
  useEffect(() => {
    const fetchData = async() => {
      try {
        // Fetching family members
        const familyResponse = await axios.get(`${API_URL}/api/family-members`);
        setFamilyMembers(familyResponse.data);

        //Fetching gifts
        const giftsResponse = await axios.get(`${API_URL}/api/gifts`);
        setGifts(giftsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      };

      fetchData();
    }, []);

  return (
    <>
    <Navbar />
    <h1>Family and Gifts</h1>
    <FamilyMemberList familymembers={familymembers} />
    <GiftList gifts={gifts} />
    </>
  );
};

export default App
