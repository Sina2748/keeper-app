import React, { useState } from "react";

import Footer from "./Footer";
import Hearder from "./Hearder";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);
  

  function addNote(note) {
    
    //  var newNotes = notes.push(note);

    setNotes(prevValue => {
      return [...prevValue, note]; 
    });
  }
 
  function delelteNote(id) {
      setNotes(prevValue => {
        prevValue.filter((note, index)=> {
            return index !== id;
        })
      })

  }


  
  return ( 
    
    <div className="App">
    
    <Hearder />
    <CreateArea onAdd={addNote} />
    
      {notes.map ((note, index) =>    
        <Note 
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          onDelete = {delelteNote}
        />
      )}
    <Footer />
    </div>
  );
}

export default App;
