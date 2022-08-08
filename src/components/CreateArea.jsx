import React, { useState } from "react";







function CreateArea(props) {
   

    const [ value, setValue] = useState({
        title: "",
        content: ""
        })

    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;        

        setValue((prevValue) => {
            if (name==="title") {
                return {
                    title: newValue,
                    content: prevValue.content
                        };
            } else if (name==="content") {
                return {
                    title: prevValue.title,
                    content: newValue
                        };
            }
            
        })
    }

    function handleClick(event) {
        
        
        props.onAdd(value);
        event.preventDefault();

        
    
        
    }
   
    


  return (
    <div>
      <form>
     
        <input name="title" placeholder="Title" onChange={handleChange}  />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}  />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;