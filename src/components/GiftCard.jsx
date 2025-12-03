const GiftCard = ({ gift }) => (
    <div className="gift-card">
        <h3>{gift.name}</h3>
        <h3>{gift.link}</h3>
        <h3>{gift.cost}</h3>
    </div>
);

export default GiftCard;