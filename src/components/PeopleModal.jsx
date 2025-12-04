const PeopleModal=(props)=>{
    return(
        <div style={{display:props.isOpen ? "block":"none"}}>
            <h3>{props.person.name}</h3>

        </div>
    )
}
export default PeopleModal