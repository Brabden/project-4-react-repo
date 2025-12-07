import { useState } from "react";  // cindy added
import GiftModal from "./GiftModal";

const GiftCard = ({ gift, onUpdateGift, onDeleteGift }) => {
    const [modalOpen, setModalOpen] = useState(false);


    console.log(gift);

    return (
        <>
        <div className="gift-card">
            <h3 onClick={()=>{setModalOpen(!modalOpen)}}className="gift-header">{gift.name}</h3>
            <h3><a href={gift.link} target="_blank">Link to item</a></h3>
            <h3>${gift.cost}</h3>
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