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
        const peopleResponse = await axios.get(`${API_URL}/api/person`);
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

// Update handler
const handleUpdatePerson = async (id, newName) => {
  try {
    const res = await axios.patch(`${API_URL}/api/person/${id}`, {
      name: newName
    });

    setPeople ((previous) => 
      previous.map((p) => (p.id === id ? res.data : p))
    );
  } catch (error) {
    console.error("Error updating person:", error);
  }
};

//Delete person from state
const handleDeletePerson = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/person/${id}`);
  setPeople((previous) => previous.filter((p) => p.id !== id));
} catch (error) {
  console.error("Error updating person:", error);
  }
};

const handleAddPerson = async (newName) => {
  try {
    const res = await axios.post(`${API_URL}/api/person`, {
      name: newName
    });
    setPeople((previous) => [...previous, res.data]);
  } catch (error) {
    console.error("Error adding person:", error);
  }
};

  return (
    <>
    <Navbar />
    <h1>Family and Gifts</h1>
    <div className="split-view" style={({display: "flex", gap: "20px" })}>

      <div className="people-section">
      <h3>People</h3>
      <PeopleList 
      people={people}
      onAddPerson={handleAddPerson}
      onUpdatePerson={handleUpdatePerson}
      onDeletePerson={handleDeletePerson}
      />
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
