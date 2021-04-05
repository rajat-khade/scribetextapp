//jshint esversion:6
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note,setNote]=useState({
        title: "",
        content: ""
    })
    const [isExpanded,setExpanded] = useState(false);

    function handleChange(event){
        const {name,value} = event.target;
        setNote((prevNote)=>{
            return ({...prevNote,[name]:value});
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand(){
        setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" value={note.title} placeholder="Title" autoComplete="off" /> : null}
        <textarea onClick={expand} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." autoComplete="off" rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
