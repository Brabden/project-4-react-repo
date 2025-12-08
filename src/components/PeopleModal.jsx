import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';  // cindy added
import { TrackerContext } from '../App';
const PeopleModal=({ isOpen, person, onUpdatePerson, onDeletePerson, onClose }) => {
const [isEditing, setIsEditing] = useState(false)
const [name, setName] = useState(person.name);
const [showGifts, setShowGifts] = useState(false);  // cindy added
const [gifts, setGifts] = useState([]);  // cindy added
const [wishlist, setWishlist] = useState({});

const trackerContext = useContext(TrackerContext);

useEffect(() => {
    setName(person.name);
}, [person]);


// cindy added
    useEffect(() => {
        const getWishlist = async() => {
            const wishlist = await axios.get(`http://127.0.0.1:8000/api/person/${person.id}/wishlist`);
            setWishlist(wishlist.data);
        }
        getWishlist();
}, []);
     // cindy added end


const handleSubmit =(e) => {
    e.preventDefault();
    onUpdatePerson(person.id, name);
    setIsEditing(false);
    onClose();
};

const handleDelete = () => {
    onDeletePerson(person.id);
    onClose();
};

if (!isOpen) return null;

return (
<div className="people-modal">
<button className="p-modal-button" onClick={() => setIsEditing(!isEditing)}>
    {isEditing ? "Cancel" : "Edit Name"}
</button>

{/* cindy added - View Gifts button */}
<button className="add-btn" onClick={() => setShowGifts(!showGifts)}>
    {showGifts ? "Hide Gifts" : "View Gifts"}
</button>
{isEditing && (
<form className="edit-person" onSubmit={handleSubmit}>
<input type="text" className="edit-input" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
<button className="p-modal-button" type="submit">Save</button>
</form>
)}
{showGifts && (
    <div>
        <h4>Gifts for {name}</h4>
        {wishlist.items.length == 0 ? (
            <p>No gifts yet</p>
         ) : wishlist.items.map((item) => {
                const gift = trackerContext.gifts.find(gift => gift.id == item);
                return(
                    <div key={gift.id}>
                        <a href={gift.link}><p><strong>{gift.name}</strong></p></a>
                        <p>Cost: ${gift.cost}</p>
                    </div>
            )}
        )}
    </div>
)}

<button className="p-modal-button" onClick={handleDelete} style={{ color: "red" }}>Delete</button>
<button className="p-modal-button" onClick={onClose}>Close</button>
</div>
    );
};

export default PeopleModal