const GiftCard = ({ gift }) => {

    console.log(gift);

    return (
        <div className="gift-card">
            <h3>{gift.name}</h3>
            <h3>{gift.link}</h3>
            <h3>{gift.cost}</h3>
        </div>
    )
}

export default GiftCard;