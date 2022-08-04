import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { Hidden } from "@mui/material";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

 const [isHidden, setIsHidden] = useState(true);

   

  function handleChange(event) {
    const { name, value } = event.target;
    
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {

  
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handelIsHidden()
   {
      setIsHidden(false);
   }

  return (
    <div>
      <form className="create-note">
        <input
          type = {isHidden && "hidden" }
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick ={handelIsHidden}
          value={note.content}
          placeholder="Take a note..."
          rows= {isHidden ? "1" : "3"} 
        />
        <Zoom in = {!isHidden}>
        <Fab onClick={submitNote}><NoteAddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
