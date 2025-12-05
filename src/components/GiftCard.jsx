import { useState } from "react";  // cindy added
import GiftModal from "./GiftModal";

const GiftCard = ({ gift, onUpdateGift, onDeleteGift }) => {
    const [modalOpen, setModalOpen] = useState(false);


    console.log(gift);

    return (
        <div className="gift-card">
            <h3>{gift.name}</h3>
            <h3><a href={gift.link} target="blank">Link to item</a></h3>
            <h3>${gift.cost}</h3>
        </div>
    )
}

export default GiftCard;