import React, { Component } from "react";
import NoteList from "./NoteList";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";


function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }
    const clicked = true;

    return (
        <div className="note"
        // onClick={()=> {
        // props.onChecked(props.id);
        // }}
        >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}


export default Note;