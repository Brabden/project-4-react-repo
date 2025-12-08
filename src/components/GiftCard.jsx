import { useContext, useState } from "react";  // cindy added
import GiftModal from "./GiftModal";
import { TrackerContext } from "../App";
import axios from "axios";

const GiftCard = ({ gift, onUpdateGift, onDeleteGift }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [adding, setAdding] = useState(false);

    const trackerContext = useContext(TrackerContext);

    console.log(gift);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = trackerContext.people.find(p => p.id == e.target['person'].value);
            const wishlist = await axios.get(`${trackerContext.API_URL}/api/person/${user.id}/wishlist`);
            await axios.put(`${trackerContext.API_URL}/api/person/${user.id}/wishlist`, {
                items: [...wishlist.data.items, gift.id],
                user: user.id
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        } catch(err) {
            console.log(err);
        }
        
        setAdding(false);
    }

    return (
        <>
        <div className="gift-card">
            <h3 onClick={()=>{setModalOpen(!modalOpen)}}className="gift-header">{gift.name}</h3>
            <h3><a href={gift.link} target="_blank">Link to item</a></h3>
            <h3>${gift.cost}</h3>
            {adding ? 
                <form onSubmit={handleSubmit} method="_PUT">
                    <select id="person">
                        {trackerContext.people.map((person) => {
                            return <option value={person.id}>{person.name}</option>
                        })}
                    </select>
                    <input type="submit" value="Add"/>
                </form>
                : <button onClick={() => setAdding(true)}>Add to wishlist: </button> }
        <GiftModal  // cindy added
                isOpen={modalOpen}
                gift={gift}
                onUpdateGift={onUpdateGift}
                onDeleteGift={onDeleteGift}
                onClose={() => setModalOpen(false)}
            />
            </div>
            </>
    )
}

export default GiftCard;