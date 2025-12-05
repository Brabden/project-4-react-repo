const GiftCard = ({ gift }) => {

    console.log(gift);

    return (
        <div className="gift-card">
            <h3>{gift.name}</h3>
            <h3><a href={gift.link} target="blank">{gift.link}</a></h3>
            <h3>${gift.cost}</h3>
        </div>
    )
}

export default GiftCard;