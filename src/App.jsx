import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar'
import PeopleList from './components/PeopleList';
// import PeopleModal from './components/PeopleModal'
import GiftModal from './components/GiftModal'
import GiftList from './components/GiftList'
const API_URL = "http://127.0.0.1:8000";

const App = () => {
  const [people, setPeople] = useState([]);
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching family members
        const peopleResponse = await axios.get(`${API_URL}/api/people`);
        setPeople(peopleResponse.data);

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
      <PeopleList people={people} />
      <GiftList gifts={gifts} />
      {/* <PeopleModal people={people} /> */}
      <GiftModal gifts={gifts} />
    </>
  );
};

export default App
