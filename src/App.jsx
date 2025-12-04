import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar'
import PeopleList from './components/PeopleList';
import GiftList from './components/GiftList'
const API_URL = "http://127.0.0.1:8000";

const App = () => {
  const [people, setPeople] = useState([]);
  const [gifts, setGifts] = useState([]);
 
  useEffect(() => {
    const fetchData = async() => {
      try {
        // Fetching family members
        const peopleResponse = await axios.get(`${API_URL}/api/people`);
        console.log("People Data:", peopleResponse.data)
        setPeople(peopleResponse.data);

        //Fetching gifts
        const giftsResponse = await axios.get(`${API_URL}/api/gifts`);
        console.log("Gifts Data:", giftsResponse.data)
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
    <div className="split-view" style={({display: "flex", gap: "20px" })}>

      <div className="people-section">
      <h3>People</h3>
      <PeopleList people={people} />
      </div>

      <div className="gifts-section">
      <h3>Gifts</h3>
      <GiftList gifts={gifts} />
      </div>
      
    </div>
    </>
  );
};

export default App
