import React,{ useState } from 'react';
const PeopleModal=(props)=>{
const [isEditing, setIsEditing] = useState(false)
 const [formData, setFormData] = useState({
    name: '',
 })

const handleChange=(e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
}

    return(
        <div style={{display:props.isOpen ? "block":"none"}}>
            <h3>{props.person.name}</h3>
<button>Edit Name</button>
<form style={{display:props.isOpen ? "block":"none"}}>
<input type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
<input type="submit" value="save"/>

</form>
<button>Delete</button>
  
        </div>
    )
}
export default PeopleModal