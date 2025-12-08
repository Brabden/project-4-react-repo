// Create form for gifts - Cindy
import { useState } from 'react';
import axios from 'axios';

const CreateGiftForm = ({ personId, onGiftCreated }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/gifts', {
            name: name,
            link: link,
            cost: cost,
            // person: personId
        });
        // Clear form
        setName('');
        setLink('');
        setCost('');
        onGiftCreated();
    };

    return (
        <form className="add" onSubmit={handleSubmit}>
            
            <input
                type="text"
                placeholder="Gift Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="add-input"
            />
            
            <input
                type="text"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="add-input"
            />
            
            <input
                type="number"
                placeholder="Cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="add-input"
            />
            
            <button className="add-btn" type="submit">Add Gift</button>
        </form>
    );
};

export default CreateGiftForm;