import React from "react";

import Footer from "./Footer";
import Hearder from "./Hearder";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {
  return (
    
    <div className="App">
    
    <Hearder />
    <CreateArea />
    
      {notes.map ((note) =>    
        <Note 
          key = {note.key}
          title = {note.title}
          content = {note.content}
        />
      )}
    <Footer />
    </div>
  );
}

export default App;
